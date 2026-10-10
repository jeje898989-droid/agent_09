---
name: mk-ppt
description: 이 프로젝트에서 python-pptx로 PowerPoint 발표자료(.pptx)를 만들거나 수정한다. 제목, 글머리표, 표, 차트, 이미지, 2단 슬라이드, 발표자 노트, 배경, 링크, 슬라이드 순서 변경·삭제·복제를 다룬다. 사용자가 PPT, PowerPoint, 슬라이드, 슬라이드 덱, 프레젠테이션, 발표자료를 요청하거나, 조사 노트나 보고서를 슬라이드로 바꾸고 싶어 하거나, 기존 .pptx를 고치고 싶어 할 때는 "pptx"라고 말하지 않더라도 언제든 이 스킬을 사용한다.
---

# mk-ppt: python-pptx로 PowerPoint 발표자료 만들기

이 스킬은 Python 스크립트를 통해 내용을 `.pptx` 파일로 만든다. 그래서 프로젝트의 보고서와 같은
방식으로 발표자료를 다시 만들고 버전을 관리할 수 있다.

## 프로젝트 규칙 (CLAUDE.md 기준)

- **결과물:** 발표자료는 `presentation/`에 `<한글_이름>_vN.pptx` 형식으로 저장한다. 예: `AI_발전_발표_v1.pptx`.
- **덮어쓰지 않기:** `next_version_path()`를 쓴다. `save()`는 덮어쓰기를 거부한다.
- **생성 스크립트:** 발표자료마다 `scripts/`에 스크립트를 하나 둔다. 예: `scripts/make_ppt_ai.py`.
  나중에 다시 만들 수 있도록 임시 폴더에 두지 않는다.
- **언어:** 사용자가 따로 요청하지 않으면 슬라이드 글은 한국어로 쓴다. 글꼴은 맑은 고딕.
- **출처:** 프로젝트 자료로 만들 때는 `research/*.md`나 보고서 스크립트(`scripts/make_report.js`)에서
  내용을 읽고, 표지 슬라이드에 출처 노트를 적는다.

## 작업 흐름

1. **목차 계획.** 슬라이드 목록부터 정한다. 슬라이드 하나에 메시지 하나, 제목은 한 줄 이하,
   글머리표는 한 줄 이하로 3~6개. 긴 설명은 슬라이드가 아니라 발표자 노트에 넣는다. 메시지마다
   슬라이드 종류를 고른다. 숫자 → 차트, 비교 → 표나 2단, 순서 → 글머리표.
2. **스크립트 작성.** 도우미 키트(아래)를 써서 `scripts/`에 작성한다. 키트가 감싸지 않는
   기능만 python-pptx를 직접 쓴다(쿡북 참고).
3. **실행.** `python scripts/<script>.py`.
4. **검증.** `python .claude/skills/mk-ppt/scripts/pptx_kit.py inspect <deck>`로 확인한다. 슬라이드 수,
   슬라이드마다 제목과 내용이 있는지, 차트 계열, `!! OFF-SLIDE` 표시가 붙은 도형이 없는지 본다.
   대략적인 넘침 기준: 20pt에서 16:9 본문 영역 한 줄에 한글 약 45자가 들어가고, 글머리표가
   7줄을 넘으면 넘친다.
5. **보고.** 결과 파일 경로, 슬라이드 목록(슬라이드당 한 줄), 스크립트 경로를 알린다.

## 도우미 키트: `.claude/skills/mk-ppt/scripts/pptx_kit.py`

```python
import sys
sys.path.insert(0, ".claude/skills/mk-ppt/scripts")
from pptx_kit import *

prs = new_deck()                                   # 16:9; 템플릿을 쓰려면 new_deck(template="x.pptx")
add_title_slide(prs, "AI 발전 동향", "2024–2026 핵심 정리 · 출처: research/ai-development-research-v2.md")
add_section_slide(prs, "Ⅰ. 기술 발전")
s = add_bullet_slide(prs, "핵심 포인트", ["첫째", ("세부 항목", 1), "둘째"])
set_notes(s, "발표자 노트")
add_table_slide(prs, "비교", [["항목", "미국", "중국"], ["투자", "2,859억$", "124억$"]], col_widths=[2, 1, 1])
add_chart_slide(prs, "투자 추이", ["2023", "2024", "2025"], {"투자(억$)": [1000, 2500, 5817]},
                kind="column", data_labels=True, number_format="#,##0")
add_image_slide(prs, "구조도", "path/to/image.png", caption="그림 1")
add_two_column_slide(prs, "장단점", ["장점1"], ["단점1"], "장점", "단점")
add_footer_numbers(prs)                            # "n / 전체" 쪽 번호, 마지막에 호출
save(prs, next_version_path("presentation", "AI_발전_발표"))
```

| 함수 | 용도 |
|---|---|
| `new_deck(widescreen=True, template=None)` | 새 발표자료(16:9) 또는 템플릿 기반 발표자료 |
| `next_version_path(folder, base)` / `save(prs, path)` | 버전 붙은 경로; 덮어쓰지 않고 저장 |
| `add_title_slide`, `add_section_slide` | 표지와 구역 구분 슬라이드 |
| `add_bullet_slide(prs, title, items)` | 글머리표; 항목은 `"text"` 또는 `("text", level)` |
| `add_table_slide(prs, title, rows, col_widths)` | 머리글 행에 서식이 들어간 표 |
| `add_chart_slide(prs, title, cats, series, kind)` | `kind`: column, bar, stacked_column, line, pie, doughnut, area, radar, scatter |
| `add_image_slide(prs, title, path, caption)` | 영역에 맞춰 가운데 정렬한 그림 |
| `add_two_column_slide(...)` | 색 머리글이 있는 좌우 목록 |
| `add_textbox`, `set_text`, `add_paragraphs`, `style_run` | 텍스트 구성 요소; `style_run`은 한글(동아시아) 글꼴도 지정 |
| `set_notes`, `set_background`, `add_footer_numbers` | 노트, 배경색, 쪽 번호 |
| `delete_slide`, `move_slide`, `duplicate_slide` | python-pptx에 없는 슬라이드 관리 |
| `inspect(path)` | 검증용으로 발표자료의 텍스트 개요 출력 |

모든 생성 함수는 슬라이드(해당하면 표, 차트, 그림도)를 돌려주므로, 이어서 python-pptx로 직접
꾸밀 수 있다. 색상은 `THEME`(primary, accent, text, muted, light, white)에 있으니 다른 느낌을
원하면 거기서 바꾼다.

## 기존 발표자료 수정

`Presentation(path)`로 열고, 먼저 `inspect`로 구조를 본 뒤 고치고, 원본이 아니라 **다음 버전**으로
저장한다. 플레이스홀더의 글은 `set_text(shape.text_frame, ...)`로 바꿀 수 있고, 차트는
`chart.replace_data(...)`를 쓰면 서식이 유지된다.

## 더 필요할 때

`references/api-cookbook.md`에서 모든 기능 영역의 python-pptx 코드를 읽는다. 파일 속성, 레이아웃,
모든 도형 종류(기본 도형, 연결선, 자유형, 그룹), 텍스트와 문단 서식, 채우기·선·그라데이션, 그림
자르기와 동영상, 표 셀 병합, 차트 세부 설정(축, 범례, 데이터 레이블, 요소별 색상), 클릭 동작,
OLE 삽입, 단위, 그리고 **지원하지 않는 기능** 목록(애니메이션, 화면 전환, 렌더링, `.ppt`,
SmartArt)과 우회 방법이 있다. 사용자가 그 목록에 있는 기능을 요청하면 몰래 편법을 쓰지 말고,
지원하지 않는다고 알린 뒤 우회 방법을 제안한다.
