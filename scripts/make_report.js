// Generates the AI development report (.docx) from research/ai-development-research-v2.md content.
// Usage: node scripts/make_report.js "report/AI_발전_보고서_v2.docx"   (requires: npm install docx)
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell,
  WidthType, ShadingType, LevelFormat, BorderStyle, PageBreak, Footer, PageNumber,
} = require("docx");

const OUT = process.argv[2];
const FONT = "맑은 고딕";

const p = (text, opts = {}) => new Paragraph({ spacing: { after: 160, line: 360 }, ...opts, children: [new TextRun({ text, font: FONT, size: 22 })] });
const h1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 360, after: 200 }, children: [new TextRun({ text: t, font: FONT })] });
const h2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 240, after: 120 }, children: [new TextRun({ text: t, font: FONT })] });
const bullet = (text) => new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 80, line: 340 }, children: [new TextRun({ text, font: FONT, size: 22 })] });

const W = [3000, 2400, 3626];
const cell = (text, i, head) => new TableCell({
  width: { size: W[i], type: WidthType.DXA },
  shading: head ? { type: ShadingType.CLEAR, fill: "1F3864", color: "auto" } : undefined,
  margins: { top: 80, bottom: 80, left: 120, right: 120 },
  children: [new Paragraph({ children: [new TextRun({ text, font: FONT, size: 20, bold: head, color: head ? "FFFFFF" : undefined })] })],
});
const table = (rows) => new Table({
  width: { size: 9026, type: WidthType.DXA },
  columnWidths: W,
  rows: rows.map((r, ri) => new TableRow({ children: r.map((t, i) => cell(t, i, ri === 0)) })),
});

const children = [
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 2400, after: 300 }, children: [new TextRun({ text: "AI 발전 동향 보고서", font: FONT, size: 52, bold: true, color: "1F3864" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 1200 }, children: [new TextRun({ text: "기술·산업·규제 측면에서 본 2024–2026년 인공지능의 발전", font: FONT, size: 26, color: "595959" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "작성일: 2026년 10월 4일", font: FONT, size: 22 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "근거 자료: research/ai-development-research-v2.md", font: FONT, size: 20, color: "7F7F7F" })] }),
  new Paragraph({ children: [new PageBreak()] }),

  h1("Ⅰ. 서론"),
  h2("1. 배경"),
  p("인공지능(AI)은 2022년 말 생성형 AI가 대중화된 뒤 불과 3년 만에 전 세계 인구의 53%가 사용하는 기술이 되었다. 개인용 컴퓨터나 인터넷보다 빠른 확산 속도다. 2025년 전 세계 기업 AI 투자는 5,817억 달러로 전년보다 130% 늘었고, 조사 대상 조직의 88%가 이미 AI를 쓰고 있다."),
  p("그러나 빠른 발전의 이면에서 AI 사고 증가, 일자리 불안, 에너지 수요 급증 같은 문제도 함께 커지고 있다. EU AI Act(2026년 8월 전면 적용)와 한국 AI 기본법(2026년 1월 시행)처럼 규제도 선언 단계를 지나 실제 집행 단계에 들어섰다."),
  h2("2. 목적과 범위"),
  p("이 보고서는 2024~2026년 AI 발전 현황을 ① 핵심 기술, ② 산업·경제 영향, ③ 규제·안전·윤리의 세 측면에서 정리하고, 이를 바탕으로 앞으로의 과제와 시사점을 제시하는 것을 목적으로 한다. Stanford AI Index 2026, PwC, Gartner, IEA, EU 집행위원회 등 공신력 있는 기관의 자료를 주로 참고하였다."),

  h1("Ⅱ. 본론"),
  h2("1. 핵심 기술의 발전"),
  p("① 프런티어 모델 성능의 가속. 2025년 주요 프런티어 모델의 90% 이상을 산업계가 개발했으며, 여러 모델이 박사 수준 과학 문제, 멀티모달 추론, 경시 수학에서 인간 기준선과 같거나 그 이상의 성능을 보였다. 코딩 벤치마크 SWE-bench Verified 점수는 1년 만에 약 60%에서 100% 가까이로 올랐다."),
  p("② 들쭉날쭉한 프런티어. 국제수학올림피아드에서 금메달 수준인 모델이 아날로그 시계는 50.1%만 바르게 읽는다. 벤치마크 점수만으로는 실제 업무 성능을 판단하기 어렵다는 뜻이다."),
  p("③ 챗봇에서 에이전트로. 스스로 컴퓨터를 조작해 과제를 수행하는 AI 에이전트의 OSWorld 성공률은 12%에서 약 66%로 높아졌다. Gartner 조사에서 현재 에이전트를 도입한 조직은 17%이지만 60% 이상이 2년 안에 도입할 계획이며, 기업 리더의 84%가 관련 투자를 늘릴 것이라고 답했다."),
  p("④ 미·중 경쟁. 두 나라의 모델 성능 격차는 사실상 사라졌으나(2026년 3월 기준 2.7% 차이), 2025년 미국 민간 AI 투자(2,859억 달러)는 중국(124억 달러)의 23배를 넘어 자본과 인프라 격차는 여전히 크다."),

  h2("2. 산업·경제에 미치는 영향"),
  table([
    ["지표", "수치", "출처"],
    ["전 세계 기업 AI 투자(2025)", "5,817억 달러 (+130%)", "Stanford AI Index 2026"],
    ["생성형 AI 투자(2025)", "1,709억 달러 (약 5배)", "Stanford AI Index 2026"],
    ["AI 노출 업종 생산성 증가(2018→2025)", "34% (저노출 업종 24%)", "PwC AI Jobs Barometer 2026"],
    ["AI 역량 임금 프리미엄", "62% (전년 57%)", "PwC AI Jobs Barometer 2026"],
    ["2026년 AI로 인한 고용 감소 예상", "0.4% 미만", "NBER 경영진 설문"],
    ["22~25세 SW 개발자 고용 변화", "2024년 대비 약 20% 감소", "Stanford AI Index 2026"],
  ]),
  p(""),
  p("생산성 측면에서는 AI 노출도가 높은 업종과 기업이 뚜렷하게 앞서 나가고 있으며, AI 역량을 갖춘 노동자의 임금 프리미엄도 커지고 있다. 반면 전체 고용에 미치는 영향은 아직 작지만, 영향이 신입 채용과 청년층에 몰려 '경력 사다리의 첫 계단'이 약해지는 문제가 나타나고 있다."),
  p("AI는 에너지와 인프라에도 새로운 부담을 주고 있다. 2025년 AI 중심 데이터센터의 전력 수요는 50% 늘어 전 세계 전력 수요 증가율(3%)을 크게 웃돌았고, IEA는 데이터센터 전력 사용량이 2030년까지 약 945TWh로 두 배 가까이 늘 것으로 전망한다. 한편 AI 작업당 에너지 효율은 해마다 10배 이상 좋아지고 있다."),

  h2("3. 규제·안전·윤리의 과제"),
  p("① 사고와 신뢰. 기록된 AI 사고는 2024년 233건에서 2025년 362건으로 늘었다. 전문가의 73%는 AI가 일자리에 긍정적일 것이라 보지만 일반 대중은 23%에 그쳐, 인식 차이가 50%p에 이른다."),
  p("② EU AI Act. 범용 AI(GPAI) 모델 제공자의 의무가 2025년 8월부터 시작되었고, 2026년 8월 2일 전면 적용되었다. GPAI 제공자는 기술 문서 유지, 학습 데이터 요약 공개, 중대 사고 보고 등의 의무를 진다."),
  p("③ 한국 AI 기본법. 「인공지능 발전과 신뢰 기반 조성 등에 관한 기본법」이 2026년 1월 22일 시행되었다. 산업 진흥과 함께 생성형 AI 결과물 고지, 고영향 AI(의료·채용·대출·에너지)의 영향평가와 위험관리, 해외 사업자의 국내 대리인 지정을 의무로 정했다. 과태료 상한은 3,000만 원이며, 최소 1년의 계도 기간을 둔다."),

  h1("Ⅲ. 결론"),
  h2("1. 요약"),
  p("2024~2026년 AI는 성능, 확산 속도, 투자 규모 모두에서 전례 없는 발전을 이루었다. 그러나 그 발전은 고르지 않다. 기술 성능은 영역마다 들쭉날쭉하고, 경제적 혜택은 일부 기업과 숙련 노동자에게 몰리며, 안전·정책·교육은 기술의 속도를 따라가지 못하고 있다."),
  h2("2. 시사점과 제언"),
  bullet("기업: 벤치마크 점수보다 실제 업무 환경에서 검증하고, 에이전트 도입 시 거버넌스와 변화관리를 먼저 갖춰야 한다."),
  bullet("정부: 한국 AI 기본법의 계도 기간 동안 세부 기준을 명확히 하고, 전력·반도체 등 AI 인프라를 확충해야 한다."),
  bullet("개인·교육: 청년층의 진입 경로를 보완하는 재교육과 AI 활용 역량 교육을 늘려야 한다."),
  bullet("사회: AI 사고 보고 체계와 투명성을 높여 전문가와 대중 사이의 신뢰 격차를 줄여야 한다."),
  p("AI 발전의 방향은 기술 자체만큼이나 그것을 둘러싼 제도와 사회적 준비에 달려 있다. 앞으로의 경쟁력은 '얼마나 뛰어난 AI를 만드느냐'와 함께 '얼마나 안전하고 고르게 활용하느냐'로 결정될 것이다."),

  h1("참고문헌"),
  ...[
    "Stanford HAI (2026). The 2026 AI Index Report. https://hai.stanford.edu/ai-index/2026-ai-index-report",
    "PwC (2026). 2026 Global AI Jobs Barometer. https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html",
    "NBER (2026). Artificial Intelligence, Productivity, and the Workforce (w34984). https://www.nber.org/papers/w34984",
    "S&P Global (2026). AI impact on employment 2026. https://www.spglobal.com/en/research-insights/special-reports/ai-impact-on-employment-2026",
    "Gartner (2026). Hype Cycle for Agentic AI. https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai",
    "WRITER (2026). Enterprise AI adoption in 2026. https://writer.com/blog/enterprise-ai-adoption-2026/",
    "European Commission. Navigating the AI Act. https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act",
    "U.S. ITA. South Korea AI Basic Act. https://www.trade.gov/market-intelligence/south-korea-ai-basic-act",
    "IEA. Energy and AI: Executive summary. https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary",
  ].map((t) => new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: t, font: FONT, size: 18 })] })),
];

const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: FONT, size: 32, bold: true, color: "1F3864" }, paragraph: { outlineLevel: 0, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1F3864", space: 4 } } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: FONT, size: 26, bold: true, color: "2E75B6" }, paragraph: { outlineLevel: 1 } },
    ],
  },
  numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }] },
  sections: [{
    properties: { page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 18 })] })] }) },
    children,
  }],
});

fs.mkdirSync(path.dirname(OUT), { recursive: true });
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(OUT, b); console.log("written", OUT); });
