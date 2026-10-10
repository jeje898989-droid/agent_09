---
name: mk-ppt
description: Build or edit PowerPoint decks (.pptx) in this project with python-pptx. Covers title, bullet, table, chart, image and two-column slides, speaker notes, backgrounds, links, and slide reordering, deletion or duplication. Use this skill whenever the user asks for a PPT, PowerPoint, slides, a slide deck, a presentation or 발표자료, wants to turn a research note or report into slides, or wants to change an existing .pptx, even if they don't say "pptx".
---

# mk-ppt: build PowerPoint decks with python-pptx

This skill turns content into a `.pptx` file through a Python script, so the deck can be rebuilt
and versioned the same way as the project's reports.

## Project conventions (from CLAUDE.md)

- **Output:** save decks in `presentation/` as `<Korean_name>_vN.pptx`, e.g. `AI_발전_발표_v1.pptx`.
- **Never overwrite** a version. Use `next_version_path()`; `save()` refuses to overwrite.
- **Generation script:** each deck gets a script in `scripts/`, e.g. `scripts/make_ppt_ai.py`,
  so it can be rebuilt later. Don't leave it in a temp folder.
- **Language:** slide text is Korean unless the user asks otherwise. Font: 맑은 고딕.
- **Sources:** when building from project material, read `research/*.md` or the report script
  (`scripts/make_report.js`) for content and cite the source note on the title slide.

## Workflow

1. **Plan the outline.** Decide the slide list first: one message per slide, a title of ≤ 1 line,
   3–6 bullets of ≤ 1 line each. Dense prose belongs in speaker notes, not on the slide. Pick a
   slide type per message: numbers → chart, comparisons → table or two-column, a sequence → bullets.
2. **Write the script** in `scripts/` using the helper kit (below). Reach for raw python-pptx
   (see the cookbook) only for things the kit doesn't wrap.
3. **Run it** with `python scripts/<script>.py`.
4. **Verify** with `python .claude/skills/mk-ppt/scripts/pptx_kit.py inspect <deck>`. Check the
   slide count, that each slide has its title and content, the chart series, and that no shape is
   flagged `!! OFF-SLIDE`. Rough overflow check: at 20pt, about 45 Korean characters fit on one line
   of a 16:9 content area; more than 7 lines of bullets will overflow.
5. **Report** the output path, the slide list (one line per slide), and the script path.

## Helper kit: `.claude/skills/mk-ppt/scripts/pptx_kit.py`

```python
import sys
sys.path.insert(0, ".claude/skills/mk-ppt/scripts")
from pptx_kit import *

prs = new_deck()                                   # 16:9; new_deck(template="x.pptx") for a template
add_title_slide(prs, "AI 발전 동향", "2024–2026 핵심 정리 · 출처: research/ai-development-research-v2.md")
add_section_slide(prs, "Ⅰ. 기술 발전")
s = add_bullet_slide(prs, "핵심 포인트", ["첫째", ("세부 항목", 1), "둘째"])
set_notes(s, "발표자 노트")
add_table_slide(prs, "비교", [["항목", "미국", "중국"], ["투자", "2,859억$", "124억$"]], col_widths=[2, 1, 1])
add_chart_slide(prs, "투자 추이", ["2023", "2024", "2025"], {"투자(억$)": [1000, 2500, 5817]},
                kind="column", data_labels=True, number_format="#,##0")
add_image_slide(prs, "구조도", "path/to/image.png", caption="그림 1")
add_two_column_slide(prs, "장단점", ["장점1"], ["단점1"], "장점", "단점")
add_footer_numbers(prs)                            # "n / total" page numbers, call last
save(prs, next_version_path("presentation", "AI_발전_발표"))
```

| Function | Purpose |
|---|---|
| `new_deck(widescreen=True, template=None)` | New deck (16:9) or one based on a template |
| `next_version_path(folder, base)` / `save(prs, path)` | Versioned path; save without overwriting |
| `add_title_slide`, `add_section_slide` | Cover and section divider slides |
| `add_bullet_slide(prs, title, items)` | Bullets; an item is `"text"` or `("text", level)` |
| `add_table_slide(prs, title, rows, col_widths)` | Table with a styled header row |
| `add_chart_slide(prs, title, cats, series, kind)` | `kind`: column, bar, stacked_column, line, pie, doughnut, area, radar, scatter |
| `add_image_slide(prs, title, path, caption)` | Picture fitted and centered |
| `add_two_column_slide(...)` | Side-by-side lists with colored headers |
| `add_textbox`, `set_text`, `add_paragraphs`, `style_run` | Text building blocks; `style_run` also sets the Korean (East Asian) font |
| `set_notes`, `set_background`, `add_footer_numbers` | Notes, background color, page numbers |
| `delete_slide`, `move_slide`, `duplicate_slide` | Slide management that python-pptx lacks |
| `inspect(path)` | Print a text outline of a deck for verification |

All builders return the slide (and the table, chart or picture where relevant), so you can keep
styling it with raw python-pptx. Colors are in `THEME` (primary, accent, text, muted, light, white);
change them there for a different look.

## Editing an existing deck

Open it with `Presentation(path)`, run `inspect` first to see its structure, make the changes,
and save as the **next version**, never over the original. Text in placeholders can be replaced
with `set_text(shape.text_frame, ...)`; charts keep their formatting with `chart.replace_data(...)`.

## When you need more

Read `references/api-cookbook.md` for raw python-pptx code covering every feature area: file
properties, layouts, all shape kinds (autoshapes, connectors, freeforms, groups), text and
paragraph formatting, fills, lines and gradients, picture cropping and video, table merging, full
chart customization (axes, legends, data labels, per-point colors), click actions, OLE embedding,
units, and the list of **unsupported features** (animations, transitions, rendering, `.ppt`,
SmartArt) with workarounds. If the user asks for something on that list, tell them it isn't
supported and offer the workaround instead of hacking around it silently.
