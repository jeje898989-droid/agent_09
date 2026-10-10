# python-pptx API cookbook (v1.0.2)

Raw python-pptx snippets for anything `pptx_kit.py` doesn't wrap. Jump to the section you need.

## Contents
1. Presentation file
2. Slides
3. Shapes
4. Text
5. Formatting (fill, line, color)
6. Pictures and media
7. Tables
8. Charts
9. Actions and links
10. OLE objects
11. Units
12. Not supported, and workarounds

Common imports:

```python
from pptx import Presentation
from pptx.util import Inches, Cm, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE, MSO_CONNECTOR, MSO_SHAPE_TYPE
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR, MSO_AUTO_SIZE
from pptx.enum.dml import MSO_THEME_COLOR, MSO_LINE_DASH_STYLE
from pptx.chart.data import CategoryChartData, XyChartData, BubbleChartData
from pptx.enum.chart import XL_CHART_TYPE, XL_LEGEND_POSITION, XL_LABEL_POSITION, XL_TICK_MARK
from pptx.enum.action import PP_ACTION
```

## 1. Presentation file

```python
prs = Presentation()                       # default 4:3 blank template
prs = Presentation("template.pptx")        # use an existing deck/template (keeps its masters and theme)
prs.slide_width, prs.slide_height = Inches(13.333), Inches(7.5)   # 16:9
prs.save("out.pptx")                       # or prs.save(io.BytesIO())

cp = prs.core_properties                   # document properties
cp.title, cp.author, cp.subject, cp.keywords = "Title", "Kitty", "Subject", "ai, report"
```

## 2. Slides

Default template layouts: 0 Title, 1 Title+Content, 2 Section Header, 3 Two Content,
4 Comparison, 5 Title Only, 6 Blank, 7 Content w/ Caption, 8 Picture w/ Caption.

```python
slide = prs.slides.add_slide(prs.slide_layouts[1])
for i, s in enumerate(prs.slides): ...
prs.slides.index(slide); prs.slides.get(slide_id)
for layout in prs.slide_master.slide_layouts: print(layout.name)

slide.background.fill.solid(); slide.background.fill.fore_color.rgb = RGBColor(0xF2, 0xF2, 0xF2)
slide.notes_slide.notes_text_frame.text = "Speaker notes"
for ph in slide.placeholders: print(ph.placeholder_format.idx, ph.placeholder_format.type, ph.name)
```

## 3. Shapes

```python
shapes = slide.shapes
box = shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1), Inches(1), Inches(3), Inches(1))
tb = shapes.add_textbox(Inches(1), Inches(3), Inches(4), Inches(1))
line = shapes.add_connector(MSO_CONNECTOR.STRAIGHT, Inches(1), Inches(5), Inches(5), Inches(5))
line.begin_connect(box, 2); line.end_connect(other_shape, 0)   # glue to connection points

ff = shapes.build_freeform(Inches(1), Inches(1))               # freeform polygon
ff.add_line_segments([(Inches(2), Inches(1)), (Inches(1.5), Inches(2))], close=True)
tri = ff.convert_to_shape()

grp = shapes.add_group_shape([box, tb])                        # group; grp.shapes.add_* also works
box.left, box.top, box.width, box.height = Inches(2), Inches(2), Inches(3), Inches(1)
box.rotation = 15
for shp in slide.shapes: print(shp.shape_id, shp.name, shp.shape_type, shp.has_text_frame)
```

## 4. Text

```python
tf = box.text_frame
tf.word_wrap = True
tf.auto_size = MSO_AUTO_SIZE.TEXT_TO_FIT_SHAPE      # or tf.fit_text(max_size=24) (needs font file)
tf.vertical_anchor = MSO_ANCHOR.MIDDLE
tf.margin_left = tf.margin_right = Inches(0.1)

p = tf.paragraphs[0]
p.alignment = PP_ALIGN.CENTER
p.level = 1                       # bullet indent level 0-8
p.line_spacing = 1.2              # or Pt(24)
p.space_before, p.space_after = Pt(0), Pt(6)

run = p.add_run(); run.text = "Hello"
f = run.font
f.name, f.size, f.bold, f.italic, f.underline = "맑은 고딕", Pt(18), True, False, True
f.color.rgb = RGBColor(0x1F, 0x38, 0x64)            # or f.color.theme_color = MSO_THEME_COLOR.ACCENT_1
run.hyperlink.address = "https://example.com"

all_text = "\n".join(s.text_frame.text for s in slide.shapes if s.has_text_frame)
```

Korean text: `font.name` only sets the Latin font. Set the East Asian font too, or Hangul falls
back to the theme font. `pptx_kit.style_run()` does this by adding `<a:ea typeface=...>`.

## 5. Formatting (fill, line, color)

```python
fill = box.fill
fill.solid(); fill.fore_color.rgb = RGBColor(0x2E, 0x75, 0xB6)
fill.fore_color.brightness = 0.4                    # -1.0 darker .. 1.0 lighter
fill.gradient(); fill.gradient_angle = 90
stops = fill.gradient_stops; stops[0].color.rgb = ...; stops[1].color.rgb = ...
fill.patterned()                                    # then fill.pattern, fore_color, back_color
fill.background()                                   # no fill (transparent)

ln = box.line
ln.color.rgb = RGBColor(0, 0, 0); ln.width = Pt(1.5); ln.dash_style = MSO_LINE_DASH_STYLE.DASH
ln.fill.background()                                # no outline

box.shadow.inherit = False                          # remove inherited shadow (only shadow control available)
```

## 6. Pictures and media

```python
pic = shapes.add_picture("img.png", Inches(1), Inches(1), width=Inches(4))   # height keeps aspect
pic.crop_left = pic.crop_right = 0.1                # fractions 0.0-1.0
img = pic.image; img.blob, img.ext, img.size, img.content_type   # extract image data
ph = slide.placeholders[1]; ph.insert_picture("img.png")          # picture placeholder (crops to fit)

movie = shapes.add_movie("clip.mp4", Inches(1), Inches(1), Inches(6), Inches(3.4),
                         poster_frame_image="poster.png", mime_type="video/mp4")
```

Formats: PNG, JPEG, GIF, BMP, TIFF, WMF/EMF. SVG is not supported; convert to PNG first.

## 7. Tables

```python
gf = shapes.add_table(rows=4, cols=3, left=Inches(0.5), top=Inches(1.5), width=Inches(9), height=Inches(2))
table = gf.table
table.columns[0].width = Inches(3); table.rows[0].height = Inches(0.5)
table.first_row = True; table.horz_banding = True; table.last_row = False; table.first_col = False

cell = table.cell(1, 0)
cell.text = "value"                               # or cell.text_frame for rich formatting
cell.fill.solid(); cell.fill.fore_color.rgb = RGBColor(0xF2, 0xF2, 0xF2)
cell.vertical_anchor = MSO_ANCHOR.MIDDLE
cell.margin_left = Inches(0.1)

cell.merge(table.cell(1, 2))                      # merge a rectangular range
cell.is_merge_origin; table.cell(1, 1).is_spanned; cell.split()
```

## 8. Charts

```python
data = CategoryChartData()
data.categories = ["2024", "2025", "2026"]
data.add_series("Revenue", (12.5, 18.2, 25.0), number_format="0.0")
gf = shapes.add_chart(XL_CHART_TYPE.COLUMN_CLUSTERED, Inches(1), Inches(1.5), Inches(8), Inches(5), data)
chart = gf.chart

chart.has_title = True; chart.chart_title.text_frame.text = "Revenue"
chart.has_legend = True; chart.legend.position = XL_LEGEND_POSITION.BOTTOM; chart.legend.include_in_layout = False
chart.font.size = Pt(12); chart.font.name = "맑은 고딕"

va = chart.value_axis
va.minimum_scale, va.maximum_scale = 0, 30; va.major_unit = 5
va.has_major_gridlines = True; va.tick_labels.number_format = '0"%"'; va.tick_labels.number_format_is_linked = False
va.has_title = True; va.axis_title.text_frame.text = "USD bn"
chart.category_axis.tick_labels.font.size = Pt(11)

plot = chart.plots[0]
plot.gap_width = 80; plot.overlap = 0               # bar/column
plot.has_data_labels = True
dl = plot.data_labels; dl.number_format = "0.0"; dl.number_format_is_linked = False
dl.position = XL_LABEL_POSITION.OUTSIDE_END; dl.show_percentage = True   # pie

ser = plot.series[0]
ser.format.fill.solid(); ser.format.fill.fore_color.rgb = RGBColor(0x2E, 0x75, 0xB6)
ser.points[1].format.fill.solid()                   # color a single bar / pie slice
ser.smooth = False; ser.marker.style                # line charts

chart.replace_data(new_chart_data)                  # swap data, keep formatting
```

Chart types (`XL_CHART_TYPE`): `BAR_CLUSTERED`, `BAR_STACKED`, `BAR_STACKED_100`,
`COLUMN_CLUSTERED`, `COLUMN_STACKED`, `COLUMN_STACKED_100`, `THREE_D_COLUMN`, `LINE`,
`LINE_MARKERS`, `LINE_STACKED`, `PIE`, `PIE_EXPLODED`, `DOUGHNUT`, `AREA`, `AREA_STACKED`,
`XY_SCATTER`, `XY_SCATTER_LINES`, `BUBBLE`, `RADAR`, `RADAR_FILLED`, and more.

XY and bubble data:

```python
xy = XyChartData(); s = xy.add_series("S1"); s.add_data_point(1.2, 3.4)
bub = BubbleChartData(); b = bub.add_series("S1"); b.add_data_point(1, 2, 10)   # x, y, size
```

Chart data is stored as an embedded Excel workbook (via XlsxWriter), so users can edit it in PowerPoint.

## 9. Actions and links

```python
box.click_action.hyperlink.address = "https://example.com"
box.click_action.target_slide = prs.slides[3]       # jump to a slide
box.click_action.action                             # PP_ACTION.NEXT_SLIDE etc. (read)
run.hyperlink.address = "mailto:someone@example.com"
```

## 10. OLE objects

```python
shapes.add_ole_object("data.xlsx", "Excel.Sheet.12", Inches(1), Inches(1), Inches(4), Inches(3))
# prog_id may also be a PROG_ID enum: from pptx.enum.shapes import PROG_ID; PROG_ID.XLSX / DOCX / PPTX
```

## 11. Units

1 inch = 914400 EMU, 1 cm = 360000 EMU, 1 pt = 12700 EMU.
`Inches(1)`, `Cm(2.5)`, `Mm(10)`, `Pt(18)`, `Emu(914400)`, `Centipoints(1800)`. All are `int`
subclasses with `.inches`, `.cm`, `.mm`, `.pt`, `.emu` properties.

## 12. Not supported, and workarounds

| Feature | Status | Workaround |
|---|---|---|
| Delete, reorder, duplicate slides | No public API | `pptx_kit.delete_slide / move_slide / duplicate_slide` (XML edits) |
| Animations, transitions | Not supported | Build in a template deck by hand, then fill it with python-pptx |
| Rendering to image/PDF | Not supported | LibreOffice: `soffice --headless --convert-to pdf deck.pptx` (if installed) |
| Legacy `.ppt` | Not supported | Convert to `.pptx` first |
| SmartArt | Read-only XML | Draw it with shapes and connectors instead |
| Macros (`.pptm`) | Not executed | Out of scope |
| SVG images | Not supported | Convert to PNG (e.g. with cairosvg) |
| Shadows, glow, 3D effects | Only `shadow.inherit` | Edit the XML directly via `shape._element` |
