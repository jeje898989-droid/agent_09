// Fills the Naver Blog editor (SmartEditor ONE) with a title, text lines and photos, then saves a draft.
// Paste the function into Playwright MCP `browser_run_code_unsafe` after logging in and opening
// https://blog.naver.com/GoBlogWrite.naver . It never presses 발행 (publish), only 저장 (draft).
//
// Notes from blog/government-promo-goods-post-v1.md:
// - Avoid emoji (e.g. 😊): the editor drops the text typed after them. Use BMP symbols (☺ ▶ ✔ ☑ ☔).
// - Enter right after a URL is swallowed by auto-linking, so source lines merge. Split them afterwards
//   with splitBeforeMarkers() below (it clicks before each marker with a real mouse click).
// - The MCP server also catches every file chooser; after running, cancel each leftover one with
//   `browser_file_upload` called without paths.
// - Use a wide viewport (1500px) so the library panel does not cover the text you click.
async (page) => {
  const IMG_DIR = 'C:/Users/SBS/agent_1024/agent_09/blog/images/';
  const TITLE = '관공서 홍보물품, 뭘 골라야 할까요? 실속 품목 추천부터 주의사항까지 총정리';
  // A string is one paragraph ('' = blank line); { img } inserts a photo at the cursor.
  const BLOCKS = [
    '안녕하세요! ...',
    '',
    { img: '01_cityhall.jpg' },
    '[ 참고 자료 출처 ]',
    '- 서울신문, ... https://m.go.seoul.co.kr/news/2026/07/16/20260716020003',
    '- e-나라지표, ... https://www.index.go.kr/unify/idx-info.do?idxCd=1376',
  ];
  const SOURCE_MARKERS = ['- e-나라지표'];

  await page.setViewportSize({ width: 1500, height: 900 });
  const f = page.frameLocator('iframe[name="mainFrame"]');
  const frame = page.frames().find(fr => fr.name() === 'mainFrame');

  await f.locator('.se-documentTitle .se-text-paragraph').first().click();
  await page.keyboard.insertText(TITLE);
  await f.locator('.se-component.se-text .se-text-paragraph').first().click();

  for (const b of BLOCKS) {
    if (typeof b === 'object') {
      const [fc] = await Promise.all([page.waitForEvent('filechooser'), f.getByRole('button', { name: '사진 추가' }).click()]);
      await fc.setFiles(IMG_DIR + b.img);
      await page.waitForTimeout(5000);
      continue;
    }
    if (b) await page.keyboard.insertText(b);
    await page.waitForTimeout(80);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(80);
  }

  const splitBeforeMarkers = async (markers) => {
    const ifr = await page.locator('iframe[name="mainFrame"]').boundingBox();
    for (const m of markers) {
      const rect = await frame.evaluate((m) => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = walker.nextNode())) {
          const i = n.data.indexOf(m);
          if (i > 0) {
            n.parentElement.scrollIntoView({ block: 'center' });
            const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + 1);
            const b = r.getBoundingClientRect();
            return { x: b.left, y: b.top + b.height / 2 };
          }
        }
        return null;
      }, m);
      if (!rect) continue;
      await page.mouse.click(ifr.x + rect.x + 1, ifr.y + rect.y);
      await page.waitForTimeout(200);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(300);
    }
  };
  await splitBeforeMarkers(SOURCE_MARKERS);

  await f.getByRole('button', { name: '저장', exact: true }).click();
  await page.waitForTimeout(2500);
  return await f.getByRole('button', { name: /임시저장된 글 보기/ }).getAttribute('aria-label');
}
