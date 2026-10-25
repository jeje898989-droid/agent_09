# Card News Plan: War by the Numbers (v2)

- **Topic:** War
- **Concept:** "The Earth is fighting more than at any time in 80 years": war in 2025, told through numbers
- **Format:** 8 cards (card 1 is the thumbnail), Instagram carousel, **1:1 (1080 × 1080)**
- **Key rule in v2:** **No text on any card.** Every card is an image only. All numbers, messages and sources move to the post caption and the alt text.
- **Data baseline:** 2025 figures, published April–June 2026 (SIPRI, UCDP, UNHCR, UN)
- **Changes from v1:** Text removed from all cards. Aspect ratio changed from 4:5 to 1:1. Card 1 now uses the generated image `cardnews/images/war-by-the-numbers-thumbnail-v1-1.png`. Each card now has an image-generation prompt.

## 1. Planning overview

| Item | Details |
|---|---|
| Core message | War is not only in history books. In 2025 it set new records. |
| Target | Social media users in their 20s and 30s who rarely follow international news |
| Goal | Make people stop on the images, read the caption for the numbers, then save and share the post |
| Tone | Calm, serious and symbolic. No graphic or shocking images. Each image stands for one number. |
| How the numbers are shown | Through visual symbols only (dots, icons, rising columns), and in the caption, which lists the number behind each card |
| Structure | Hook (1) → Overview (2) → One number per card (3–6) → People behind the numbers (7) → Wrap-up (8) |

## 2. Card-by-card plan

Each card lists the number it stands for (shown only in the caption), the image concept and a prompt.
Every prompt ends with the common no-text instruction in section 3.

### Card 1: Thumbnail ✅ Confirmed

- **Stands for:** The hook, "The Earth is fighting more than at any time in 80 years"
- **Image:** `cardnews/images/war-by-the-numbers-thumbnail-v1-1.png` (2048 × 2048, Z Image), used as is with no text added
- **Scene:** Earth seen from space, filling the lower 60% of the frame, with red-orange glowing cracks across the Middle East, North Africa and Eastern Europe. The upper 40% is dark empty space.
- **Prompt used:**
  ```
  Planet Earth seen from space, partially visible in the lower half of the square frame like
  a curved horizon, thin cracks spreading across the continents with warm red-orange (#E63946)
  light glowing from inside the cracks, deep navy (#14213D) and black space background,
  cinematic lighting, calm and serious mood, large empty dark area in the upper half reserved
  for a headline, square 1:1 composition, photorealistic, high detail.
  ```

### Card 2: Four signals

- **Stands for:** A preview of the four numbers (65 · 8 · $2.89 trillion · 1 in 70)
- **Scene:** Four small glowing objects in a 2 × 2 grid on a deep navy background: a tiny globe with red dots, two chess pieces facing each other, a stack of coins, and a cluster of small person figures with one in red-orange.
- **Prompt:**
  ```
  Four small symbolic objects arranged in a clean 2 x 2 grid on a deep navy (#14213D)
  background: a tiny globe dotted with red-orange lights, two chess pieces facing each other,
  a short stack of coins, and a small group of minimal human figures with one figure glowing
  red-orange (#E63946), soft studio lighting, minimalist 3D render, even spacing, square 1:1
  composition
  ```

### Card 3: 65 armed conflicts

- **Stands for:** 65 armed conflicts in 2025, the most since World War II
- **Scene:** A world map in thin light-blue lines on navy, with about 65 red-orange glowing dots over the conflict regions.
- **Prompt:**
  ```
  Minimalist dark navy (#14213D) background, thin glowing light-blue line-art world map
  centered in the frame, about 65 small red-orange (#E63946) glowing dots over Eastern Europe,
  the Middle East, the Sahel, East Africa and South Asia, soft light bloom around each dot,
  clean data-visualization style, high contrast, square 1:1 composition
  ```

### Card 4: 8 wars between states

- **Stands for:** 8 interstate wars, double the year before and the most since 1946
- **Scene:** Eight pairs of chess pieces facing each other on a dark board, in two rows of four, with red-orange rim light. A faint gray row of four pairs behind them hints at the previous year.
- **Prompt:**
  ```
  Eight pairs of dark chess pieces facing each other on a dark navy (#14213D) chessboard,
  arranged in two neat rows of four pairs, each piece outlined with red-orange (#E63946) rim
  light, behind them a faint, blurred gray row of four pairs, low-angle cinematic lighting,
  serious mood, minimalist 3D render, square 1:1 composition
  ```

### Card 5: $2.89 trillion in military spending

- **Stands for:** World military spending at a record $2.89 trillion, rising for 11 years in a row
- **Scene:** Eleven columns of stacked coins rising from left to right. The last and tallest column glows red-orange.
- **Prompt:**
  ```
  Eleven columns of stacked metal coins standing in a row and rising in height from left to
  right like a bar chart, the last and tallest column glowing red-orange (#E63946), the others
  dark steel gray, deep navy (#14213D) background, dramatic side lighting, minimalist 3D
  render, square 1:1 composition
  ```

### Card 6: 1 in 70 people forced from home

- **Stands for:** 117.8 million people forcibly displaced, 1 in 70 people worldwide
- **Scene:** A neat 7 × 10 grid of 70 small white figures on navy. One figure, in red-orange, carries a small suitcase.
- **Prompt:**
  ```
  A neat grid of 70 identical small minimal white human figures, 7 columns by 10 rows, evenly
  spaced on a deep navy (#14213D) background, exactly one figure colored red-orange (#E63946)
  and holding a small suitcase, flat minimalist icon style, clean and calm, square 1:1
  composition
  ```

### Card 7: The people behind the numbers

- **Stands for:** 24,174 children harmed by war in 2025 (the most in 30 years); 1 in 5 children lives in a conflict zone
- **Scene:** A small child's backpack left alone on a dusty floor, lit by a soft beam of light from a window. No people.
- **Prompt:**
  ```
  A small child's backpack left alone on a dusty concrete floor in an empty room, a soft beam
  of warm light falling on it from a window, muted deep navy (#14213D) shadows with a subtle
  red-orange (#E63946) tint in the light, quiet and sorrowful mood, photorealistic, cinematic,
  square 1:1 composition
  ```

### Card 8: Wrap-up

- **Stands for:** The closing message, "Paying attention is the first step toward peace"
- **Scene:** The same Earth as card 1, but whole and calm. The cracks have faded to faint lines, and soft dawn light rises along the horizon. The carousel ends where it began.
- **Prompt:**
  ```
  Planet Earth seen from space, partially visible in the lower half of the square frame like
  a curved horizon, faint healed lines on the continents where cracks used to be, soft golden
  dawn light rising along the horizon, deep navy (#14213D) space background, hopeful and calm
  mood, cinematic lighting, photorealistic, high detail, square 1:1 composition
  ```

## 3. Common image guide

| Item | Guide |
|---|---|
| Size | 1:1, 1080 × 1080 px for posting (generate at 2048 × 2048 and scale down) |
| Colors | Deep navy `#14213D` base, red-orange `#E63946` for the key point in each image, gray `#A8A8A8` for secondary elements |
| Text | **None.** No letters, numbers, logos or watermarks in any image. |
| Consistency | Keep the navy background and one red-orange accent in every card so the carousel reads as one set. |
| Images | Symbols, icons, objects and space views. No weapons, soldiers, blood, explosions or injured people. |
| Model | Z Image (Higgsfield, available on the free plan). Recraft V4.1 and GPT Image 2.5 need a basic plan or higher. |

- **Common no-text instruction** (add to the end of every prompt):
  ```
  No text, no letters, no numbers, no logos, no watermark, no weapons, no soldiers, no blood,
  no explosions, no gore.
  ```
- **Check after generating:** Look for stray letters or odd objects (as in thumbnail candidate 2), and check that the counts on cards 3, 4, 5 and 6 (65 dots, 8 pairs, 11 columns, 70 figures) are close enough. Regenerate or edit if not.

## 4. Caption (carries all the numbers)

```
지금 지구는 80년 만에 가장 많이 싸우고 있습니다.

숫자로 보는 2025년의 전쟁 👉 넘겨보세요

① 무력 분쟁 65건 — 2차 세계대전 이후 최다
② 나라와 나라가 싸운 전쟁 8건 — 1년 새 2배, 1946년 집계 이후 최다
③ 세계 군사비 2조 8,900억 달러 — 11년 연속 사상 최대
④ 70명 중 1명 — 전쟁·박해로 집을 떠난 사람 1억 1,780만 명
⑤ 숫자 뒤에는 사람이 있습니다 — 2025년 전쟁 피해가 확인된 아이들 24,174명 (30년 만에 최다)

관심은 평화의 첫걸음입니다. 저장하고 함께 알려 주세요. 🕊️

출처: SIPRI(2026), UCDP(2026), UNHCR(2026), UN 아동과 무력분쟁 보고서(2026)
```

- **Hashtags:** `#숫자로보는전쟁 #전쟁 #평화 #국제뉴스 #카드뉴스 #난민 #군사비 #세계정세 #시사상식`

## 5. Alt text (one per card, in Korean)

Alt text keeps the numbers available to screen readers, since the images carry no text.

| Card | Alt text |
|---|---|
| 1 | `우주에서 본 지구, 중동과 아프리카 대륙에 붉은 균열이 빛나고 있다` |
| 2 | `붉은 점이 찍힌 지구본, 마주 선 체스 말, 동전 더미, 사람 아이콘 4개의 상징` |
| 3 | `세계 지도 위 분쟁 지역 65곳에 붉은 점이 켜져 있다` |
| 4 | `서로 마주 선 체스 말 8쌍, 뒤에는 흐릿한 4쌍이 보인다` |
| 5 | `점점 높아지는 동전 기둥 11개, 마지막 기둥이 붉게 빛난다` |
| 6 | `사람 아이콘 70개 중 1명만 붉은색으로 여행 가방을 들고 있다` |
| 7 | `빈 방 바닥에 홀로 놓인 아이 책가방에 빛이 비친다` |
| 8 | `균열이 아물어 가는 지구 위로 새벽빛이 떠오른다` |

## 6. Fact-check notes

- All figures are 2025 data published in 2026. Before posting, check the original reports (SIPRI, UCDP, UNHCR, UN) for any updates.
- The UCDP figures (65 conflicts, 8 interstate wars) come from news coverage of the UCDP data. Confirm them against the primary UCDP publication.
- The 117.8 million figure is UNHCR's number for the end of 2025. Some articles show 117.3 million, so use the UNHCR figure.
- The child figures are verified UN cases, so the real numbers are likely higher.

## 7. Sources

- SIPRI, world military expenditure 2025 (April 2026), via [Defense News](https://www.defensenews.com/global/europe/2026/04/27/global-military-spending-surges-and-reaches-record-high/)
- UCDP conflict data 2025 (June 2026), via [OPB/NPR](https://opb.org/article/2026/06/09/global-conflicts-hit-highest-number-since-wwii-data-shows)
- UNHCR, [Figures at a glance](https://www.unhcr.org/th/en/ekiiywkab-unhcr/figure-glance); [Al Jazeera](https://www.aljazeera.com/news/2026/6/11/one-in-70-people-worldwide-is-forcibly-displaced-unhcr)
- UN, children and armed conflict report 2025 (June 2026), via [UN News](https://news.un.org/en/story/2026/06/1167747) and [War Child](https://www.warchild.net/news/governments-named-main-perpretators-of-grave-violations-against-children-for-first-time-in-30-years/)
