# 카드뉴스 기획안: 숫자로 보는 전쟁 (v2)

- **주제:** 전쟁
- **콘셉트:** "지금 지구는 80년 만에 가장 많이 싸우고 있다", 숫자로 보는 2025년의 전쟁
- **형식:** 총 8장(1장은 썸네일), 인스타그램 캐러셀, **1:1 (1080 × 1080)**
- **v2 핵심 규칙:** **모든 카드에 글자를 넣지 않는다.** 모든 카드는 이미지로만 만든다. 숫자, 메시지, 출처는 모두 게시물 캡션과 대체 텍스트로 옮긴다.
- **데이터 기준:** 2025년 수치, 2026년 4~6월 발표 자료(SIPRI, UCDP, UNHCR, UN)
- **v1에서 바뀐 점:** 모든 카드에서 글자를 뺐다. 비율을 4:5에서 1:1로 바꿨다. 1장에는 생성한 이미지 `cardnews/images/war-by-the-numbers-thumbnail-v1-1.png`를 쓴다. 카드마다 이미지 생성 프롬프트를 넣었다.

## 1. 기획 개요

| 항목 | 내용 |
|---|---|
| 핵심 메시지 | 전쟁은 역사책 속 이야기가 아니다. 2025년에 기록을 새로 썼다. |
| 타깃 | 국제 뉴스를 잘 보지 않는 2030 SNS 사용자 |
| 목표 | 이미지로 시선을 멈추게 하고, 캡션에서 숫자를 읽게 한 뒤 저장과 공유를 유도한다 |
| 톤 | 차분하고 진지하며 상징적으로. 자극적이거나 충격적인 이미지는 쓰지 않는다. 이미지 하나가 숫자 하나를 상징한다. |
| 숫자 전달 방식 | 시각적 상징(점, 아이콘, 높아지는 기둥)으로만 보여주고, 카드마다 담긴 숫자는 캡션에 적는다 |
| 구성 | 후킹(1) → 한눈에 보기(2) → 카드마다 숫자 하나(3–6) → 숫자 뒤의 사람들(7) → 마무리(8) |

## 2. 장별 구성

카드마다 상징하는 숫자(캡션에만 표시), 이미지 콘셉트, 프롬프트를 적었다.
모든 프롬프트 끝에는 3절의 공통 '글자 금지' 지시문을 붙인다.

### 1장: 썸네일 ✅ 확정

- **상징:** 후킹 문구 "지금 지구는 80년 만에 가장 많이 싸우고 있다"
- **이미지:** `cardnews/images/war-by-the-numbers-thumbnail-v1-1.png` (2048 × 2048, Z Image), 글자를 넣지 않고 원본 그대로 쓴다
- **장면:** 우주에서 본 지구가 화면 아래쪽 60%를 채우고, 중동·북아프리카·동유럽에 붉은 주황 균열이 빛난다. 위쪽 40%는 어두운 빈 공간이다.
- **사용한 프롬프트:**
  ```
  Planet Earth seen from space, partially visible in the lower half of the square frame like
  a curved horizon, thin cracks spreading across the continents with warm red-orange (#E63946)
  light glowing from inside the cracks, deep navy (#14213D) and black space background,
  cinematic lighting, calm and serious mood, large empty dark area in the upper half reserved
  for a headline, square 1:1 composition, photorealistic, high detail.
  ```

### 2장: 네 가지 신호

- **상징:** 네 숫자(65 · 8 · 2조 8,900억 달러 · 70명 중 1명) 미리 보기
- **장면:** 짙은 남색 배경에 빛나는 작은 오브제 4개를 2 × 2 격자로 놓는다. 붉은 점이 찍힌 작은 지구본, 마주 선 체스 말 두 개, 동전 더미, 그리고 한 명만 붉은 주황색인 작은 사람 무리다.
- **프롬프트:**
  ```
  Four small symbolic objects arranged in a clean 2 x 2 grid on a deep navy (#14213D)
  background: a tiny globe dotted with red-orange lights, two chess pieces facing each other,
  a short stack of coins, and a small group of minimal human figures with one figure glowing
  red-orange (#E63946), soft studio lighting, minimalist 3D render, even spacing, square 1:1
  composition
  ```

### 3장: 무력 분쟁 65건

- **상징:** 2025년 무력 분쟁 65건, 2차 세계대전 이후 최다
- **장면:** 남색 바탕에 가는 하늘색 선으로 그린 세계 지도를 놓고, 분쟁 지역에 붉은 주황 빛 점 약 65개를 찍는다.
- **프롬프트:**
  ```
  Minimalist dark navy (#14213D) background, thin glowing light-blue line-art world map
  centered in the frame, about 65 small red-orange (#E63946) glowing dots over Eastern Europe,
  the Middle East, the Sahel, East Africa and South Asia, soft light bloom around each dot,
  clean data-visualization style, high contrast, square 1:1 composition
  ```

### 4장: 국가 간 전쟁 8건

- **상징:** 국가 간 전쟁 8건, 전년의 2배이자 1946년 이후 최다
- **장면:** 어두운 체스판 위에서 마주 선 체스 말 8쌍이 4쌍씩 두 줄로 서 있고, 붉은 주황 테두리 빛을 받는다. 뒤쪽의 흐릿한 회색 4쌍이 전년을 암시한다.
- **프롬프트:**
  ```
  Eight pairs of dark chess pieces facing each other on a dark navy (#14213D) chessboard,
  arranged in two neat rows of four pairs, each piece outlined with red-orange (#E63946) rim
  light, behind them a faint, blurred gray row of four pairs, low-angle cinematic lighting,
  serious mood, minimalist 3D render, square 1:1 composition
  ```

### 5장: 세계 군사비 2조 8,900억 달러

- **상징:** 세계 군사비가 사상 최대인 2조 8,900억 달러, 11년 연속 증가
- **장면:** 동전을 쌓은 기둥 11개가 왼쪽에서 오른쪽으로 점점 높아진다. 마지막이자 가장 높은 기둥만 붉은 주황으로 빛난다.
- **프롬프트:**
  ```
  Eleven columns of stacked metal coins standing in a row and rising in height from left to
  right like a bar chart, the last and tallest column glowing red-orange (#E63946), the others
  dark steel gray, deep navy (#14213D) background, dramatic side lighting, minimalist 3D
  render, square 1:1 composition
  ```

### 6장: 70명 중 1명이 집을 잃었다

- **상징:** 강제 실향민 1억 1,780만 명, 세계 인구 70명 중 1명
- **장면:** 남색 바탕에 작은 흰색 사람 70명을 7 × 10 격자로 반듯하게 놓는다. 붉은 주황색 한 명만 작은 여행 가방을 들고 있다.
- **프롬프트:**
  ```
  A neat grid of 70 identical small minimal white human figures, 7 columns by 10 rows, evenly
  spaced on a deep navy (#14213D) background, exactly one figure colored red-orange (#E63946)
  and holding a small suitcase, flat minimalist icon style, clean and calm, square 1:1
  composition
  ```

### 7장: 숫자 뒤의 사람들

- **상징:** 2025년 전쟁 피해가 확인된 아이들 24,174명(30년 만에 최다), 아이들 5명 중 1명이 분쟁 지역에 삶
- **장면:** 먼지 낀 바닥에 홀로 놓인 아이의 작은 책가방에 창문으로 들어온 부드러운 빛이 비친다. 사람은 등장하지 않는다.
- **프롬프트:**
  ```
  A small child's backpack left alone on a dusty concrete floor in an empty room, a soft beam
  of warm light falling on it from a window, muted deep navy (#14213D) shadows with a subtle
  red-orange (#E63946) tint in the light, quiet and sorrowful mood, photorealistic, cinematic,
  square 1:1 composition
  ```

### 8장: 마무리

- **상징:** 마무리 메시지 "관심은 평화의 첫걸음입니다"
- **장면:** 1장과 같은 지구지만 온전하고 고요하다. 균열은 희미한 선으로 아물었고, 지평선을 따라 부드러운 새벽빛이 떠오른다. 캐러셀이 시작한 곳에서 끝난다.
- **프롬프트:**
  ```
  Planet Earth seen from space, partially visible in the lower half of the square frame like
  a curved horizon, faint healed lines on the continents where cracks used to be, soft golden
  dawn light rising along the horizon, deep navy (#14213D) space background, hopeful and calm
  mood, cinematic lighting, photorealistic, high detail, square 1:1 composition
  ```

## 3. 공통 이미지 가이드

| 항목 | 가이드 |
|---|---|
| 크기 | 1:1, 게시용 1080 × 1080 px (2048 × 2048로 생성한 뒤 줄인다) |
| 색상 | 기본은 짙은 남색 `#14213D`, 이미지마다 핵심 지점은 붉은 주황 `#E63946`, 보조 요소는 회색 `#A8A8A8` |
| 글자 | **없음.** 어떤 이미지에도 글자, 숫자, 로고, 워터마크를 넣지 않는다. |
| 통일감 | 모든 카드에 남색 배경과 붉은 주황 포인트 하나를 유지해 캐러셀이 한 세트로 보이게 한다. |
| 이미지 | 상징, 아이콘, 오브제, 우주 풍경을 쓴다. 무기, 군인, 피, 폭발, 다친 사람은 쓰지 않는다. |
| 모델 | Z Image (Higgsfield, 무료 플랜에서 사용 가능). Recraft V4.1과 GPT Image 2.5는 basic 이상 플랜이 필요하다. |

- **공통 '글자 금지' 지시문** (모든 프롬프트 끝에 붙인다):
  ```
  No text, no letters, no numbers, no logos, no watermark, no weapons, no soldiers, no blood,
  no explosions, no gore.
  ```
- **생성 후 확인:** 썸네일 2번 후보처럼 엉뚱한 글자나 물체가 없는지 본다. 3·4·5·6장의 개수(점 65개, 8쌍, 기둥 11개, 사람 70명)가 충분히 가까운지도 확인한다. 아니면 다시 생성하거나 편집한다.

## 4. 캡션 (모든 숫자를 담음)

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

- **해시태그:** `#숫자로보는전쟁 #전쟁 #평화 #국제뉴스 #카드뉴스 #난민 #군사비 #세계정세 #시사상식`

## 5. 대체 텍스트 (카드별, 한국어)

이미지에 글자가 없으므로, 대체 텍스트로 화면 낭독기 사용자도 숫자를 알 수 있게 한다.

| 카드 | 대체 텍스트 |
|---|---|
| 1 | `우주에서 본 지구, 중동과 아프리카 대륙에 붉은 균열이 빛나고 있다` |
| 2 | `붉은 점이 찍힌 지구본, 마주 선 체스 말, 동전 더미, 사람 아이콘 4개의 상징` |
| 3 | `세계 지도 위 분쟁 지역 65곳에 붉은 점이 켜져 있다` |
| 4 | `서로 마주 선 체스 말 8쌍, 뒤에는 흐릿한 4쌍이 보인다` |
| 5 | `점점 높아지는 동전 기둥 11개, 마지막 기둥이 붉게 빛난다` |
| 6 | `사람 아이콘 70개 중 1명만 붉은색으로 여행 가방을 들고 있다` |
| 7 | `빈 방 바닥에 홀로 놓인 아이 책가방에 빛이 비친다` |
| 8 | `균열이 아물어 가는 지구 위로 새벽빛이 떠오른다` |

## 6. 팩트체크 메모

- 모든 수치는 2026년에 발표된 2025년 자료다. 게시 전에 원본 보고서(SIPRI, UCDP, UNHCR, UN)에서 바뀐 내용이 없는지 확인한다.
- UCDP 수치(분쟁 65건, 국가 간 전쟁 8건)는 UCDP 자료를 다룬 언론 보도에서 가져왔다. UCDP 원문 발표와 대조해 확인한다.
- 1억 1,780만 명은 UNHCR의 2025년 말 기준 수치다. 1억 1,730만 명으로 적은 기사도 있으니 UNHCR 수치를 쓴다.
- 아동 수치는 UN이 확인한 사례만 센 것이라 실제로는 더 많을 가능성이 크다.

## 7. 출처

- SIPRI, 2025년 세계 군사비(2026년 4월), [Defense News](https://www.defensenews.com/global/europe/2026/04/27/global-military-spending-surges-and-reaches-record-high/) 보도
- UCDP 2025년 분쟁 자료(2026년 6월), [OPB/NPR](https://opb.org/article/2026/06/09/global-conflicts-hit-highest-number-since-wwii-data-shows) 보도
- UNHCR, [Figures at a glance](https://www.unhcr.org/th/en/ekiiywkab-unhcr/figure-glance), [Al Jazeera](https://www.aljazeera.com/news/2026/6/11/one-in-70-people-worldwide-is-forcibly-displaced-unhcr)
- UN, 2025년 아동과 무력분쟁 보고서(2026년 6월), [UN News](https://news.un.org/en/story/2026/06/1167747), [War Child](https://www.warchild.net/news/governments-named-main-perpretators-of-grave-violations-against-children-for-first-time-in-30-years/) 보도
