# python-pptx API 쿡북 (v1.0.2)

`pptx_kit.py`가 감싸지 않는 기능을 위한 python-pptx 원본 코드 조각이다. 필요한 절로 바로 이동한다.

## 목차
1. 프레젠테이션 파일
2. 슬라이드
3. 도형
4. 텍스트
5. 서식 (채우기, 선, 색상)
6. 그림과 미디어
7. 표
8. 차트
9. 동작과 링크
10. OLE 객체
11. 단위
12. 지원하지 않는 기능과 우회 방법

공통 import:

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

## 1. 프레젠테이션 파일

```python
prs = Presentation()                       # 기본 4:3 빈 템플릿
prs = Presentation("template.pptx")        # 기존 발표자료/템플릿 사용 (마스터와 테마 유지)
prs.slide_width, prs.slide_height = Inches(13.333), Inches(7.5)   # 16:9
prs.save("out.pptx")                       # 또는 prs.save(io.BytesIO())

cp = prs.core_properties                   # 문서 속성
cp.title, cp.author, cp.subject, cp.keywords = "Title", "Kitty", "Subject", "ai, report"
```

## 2. 슬라이드

기본 템플릿 레이아웃: 0 제목, 1 제목+내용, 2 구역 머리글, 3 콘텐츠 2개, 4 비교,
5 제목만, 6 빈 화면, 7 캡션 있는 콘텐츠, 8 캡션 있는 그림.

```python
slide = prs.slides.add_slide(prs.slide_layouts[1])
for i, s in enumerate(prs.slides): ...
prs.slides.index(slide); prs.slides.get(slide_id)
for layout in prs.slide_master.slide_layouts: print(layout.name)

slide.background.fill.solid(); slide.background.fill.fore_color.rgb = RGBColor(0xF2, 0xF2, 0xF2)
slide.notes_slide.notes_text_frame.text = "Speaker notes"
for ph in slide.placeholders: print(ph.placeholder_format.idx, ph.placeholder_format.type, ph.name)
```

## 3. 도형

```python
shapes = slide.shapes
box = shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1), Inches(1), Inches(3), Inches(1))
tb = shapes.add_textbox(Inches(1), Inches(3), Inches(4), Inches(1))
line = shapes.add_connector(MSO_CONNECTOR.STRAIGHT, Inches(1), Inches(5), Inches(5), Inches(5))
line.begin_connect(box, 2); line.end_connect(other_shape, 0)   # 연결점에 붙이기

ff = shapes.build_freeform(Inches(1), Inches(1))               # 자유형 다각형
ff.add_line_segments([(Inches(2), Inches(1)), (Inches(1.5), Inches(2))], close=True)
tri = ff.convert_to_shape()

grp = shapes.add_group_shape([box, tb])                        # 그룹; grp.shapes.add_* 도 사용 가능
box.left, box.top, box.width, box.height = Inches(2), Inches(2), Inches(3), Inches(1)
box.rotation = 15
for shp in slide.shapes: print(shp.shape_id, shp.name, shp.shape_type, shp.has_text_frame)
```

## 4. 텍스트

```python
tf = box.text_frame
tf.word_wrap = True
tf.auto_size = MSO_AUTO_SIZE.TEXT_TO_FIT_SHAPE      # 또는 tf.fit_text(max_size=24) (글꼴 파일 필요)
tf.vertical_anchor = MSO_ANCHOR.MIDDLE
tf.margin_left = tf.margin_right = Inches(0.1)

p = tf.paragraphs[0]
p.alignment = PP_ALIGN.CENTER
p.level = 1                       # 글머리 들여쓰기 수준 0-8
p.line_spacing = 1.2              # 또는 Pt(24)
p.space_before, p.space_after = Pt(0), Pt(6)

run = p.add_run(); run.text = "Hello"
f = run.font
f.name, f.size, f.bold, f.italic, f.underline = "맑은 고딕", Pt(18), True, False, True
f.color.rgb = RGBColor(0x1F, 0x38, 0x64)            # 또는 f.color.theme_color = MSO_THEME_COLOR.ACCENT_1
run.hyperlink.address = "https://example.com"

all_text = "\n".join(s.text_frame.text for s in slide.shapes if s.has_text_frame)
```

한글 텍스트: `font.name`은 라틴 글꼴만 지정한다. 동아시아 글꼴도 지정하지 않으면 한글은 테마
글꼴로 대체된다. `pptx_kit.style_run()`은 `<a:ea typeface=...>`를 추가해 이를 처리한다.

## 5. 서식 (채우기, 선, 색상)

```python
fill = box.fill
fill.solid(); fill.fore_color.rgb = RGBColor(0x2E, 0x75, 0xB6)
fill.fore_color.brightness = 0.4                    # -1.0 더 어둡게 .. 1.0 더 밝게
fill.gradient(); fill.gradient_angle = 90
stops = fill.gradient_stops; stops[0].color.rgb = ...; stops[1].color.rgb = ...
fill.patterned()                                    # 이후 fill.pattern, fore_color, back_color
fill.background()                                   # 채우기 없음 (투명)

ln = box.line
ln.color.rgb = RGBColor(0, 0, 0); ln.width = Pt(1.5); ln.dash_style = MSO_LINE_DASH_STYLE.DASH
ln.fill.background()                                # 윤곽선 없음

box.shadow.inherit = False                          # 상속된 그림자 제거 (그림자 제어는 이것뿐)
```

## 6. 그림과 미디어

```python
pic = shapes.add_picture("img.png", Inches(1), Inches(1), width=Inches(4))   # 높이는 비율 유지
pic.crop_left = pic.crop_right = 0.1                # 0.0-1.0 비율
img = pic.image; img.blob, img.ext, img.size, img.content_type   # 이미지 데이터 추출
ph = slide.placeholders[1]; ph.insert_picture("img.png")          # 그림 플레이스홀더 (맞춰서 자름)

movie = shapes.add_movie("clip.mp4", Inches(1), Inches(1), Inches(6), Inches(3.4),
                         poster_frame_image="poster.png", mime_type="video/mp4")
```

형식: PNG, JPEG, GIF, BMP, TIFF, WMF/EMF. SVG는 지원하지 않으므로 먼저 PNG로 바꾼다.

## 7. 표

```python
gf = shapes.add_table(rows=4, cols=3, left=Inches(0.5), top=Inches(1.5), width=Inches(9), height=Inches(2))
table = gf.table
table.columns[0].width = Inches(3); table.rows[0].height = Inches(0.5)
table.first_row = True; table.horz_banding = True; table.last_row = False; table.first_col = False

cell = table.cell(1, 0)
cell.text = "value"                               # 서식이 필요하면 cell.text_frame 사용
cell.fill.solid(); cell.fill.fore_color.rgb = RGBColor(0xF2, 0xF2, 0xF2)
cell.vertical_anchor = MSO_ANCHOR.MIDDLE
cell.margin_left = Inches(0.1)

cell.merge(table.cell(1, 2))                      # 직사각형 범위 병합
cell.is_merge_origin; table.cell(1, 1).is_spanned; cell.split()
```

## 8. 차트

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
plot.gap_width = 80; plot.overlap = 0               # 가로/세로 막대
plot.has_data_labels = True
dl = plot.data_labels; dl.number_format = "0.0"; dl.number_format_is_linked = False
dl.position = XL_LABEL_POSITION.OUTSIDE_END; dl.show_percentage = True   # 원형

ser = plot.series[0]
ser.format.fill.solid(); ser.format.fill.fore_color.rgb = RGBColor(0x2E, 0x75, 0xB6)
ser.points[1].format.fill.solid()                   # 막대 하나 / 원형 조각 하나만 색칠
ser.smooth = False; ser.marker.style                # 꺾은선 차트

chart.replace_data(new_chart_data)                  # 서식은 유지하고 데이터만 교체
```

차트 종류(`XL_CHART_TYPE`): `BAR_CLUSTERED`, `BAR_STACKED`, `BAR_STACKED_100`,
`COLUMN_CLUSTERED`, `COLUMN_STACKED`, `COLUMN_STACKED_100`, `THREE_D_COLUMN`, `LINE`,
`LINE_MARKERS`, `LINE_STACKED`, `PIE`, `PIE_EXPLODED`, `DOUGHNUT`, `AREA`, `AREA_STACKED`,
`XY_SCATTER`, `XY_SCATTER_LINES`, `BUBBLE`, `RADAR`, `RADAR_FILLED` 등.

분산형과 거품형 데이터:

```python
xy = XyChartData(); s = xy.add_series("S1"); s.add_data_point(1.2, 3.4)
bub = BubbleChartData(); b = bub.add_series("S1"); b.add_data_point(1, 2, 10)   # x, y, 크기
```

차트 데이터는 내장 Excel 통합 문서로 저장되므로(XlsxWriter 사용) PowerPoint에서 편집할 수 있다.

## 9. 동작과 링크

```python
box.click_action.hyperlink.address = "https://example.com"
box.click_action.target_slide = prs.slides[3]       # 슬라이드로 이동
box.click_action.action                             # PP_ACTION.NEXT_SLIDE 등 (읽기)
run.hyperlink.address = "mailto:someone@example.com"
```

## 10. OLE 객체

```python
shapes.add_ole_object("data.xlsx", "Excel.Sheet.12", Inches(1), Inches(1), Inches(4), Inches(3))
# prog_id는 PROG_ID 열거형도 가능: from pptx.enum.shapes import PROG_ID; PROG_ID.XLSX / DOCX / PPTX
```

## 11. 단위

1인치 = 914400 EMU, 1cm = 360000 EMU, 1pt = 12700 EMU.
`Inches(1)`, `Cm(2.5)`, `Mm(10)`, `Pt(18)`, `Emu(914400)`, `Centipoints(1800)`. 모두 `int`의
하위 클래스이며 `.inches`, `.cm`, `.mm`, `.pt`, `.emu` 속성이 있다.

## 12. 지원하지 않는 기능과 우회 방법

| 기능 | 상태 | 우회 방법 |
|---|---|---|
| 슬라이드 삭제, 순서 변경, 복제 | 공식 API 없음 | `pptx_kit.delete_slide / move_slide / duplicate_slide` (XML 편집) |
| 애니메이션, 화면 전환 | 지원 안 함 | 템플릿 발표자료에 직접 설정한 뒤 python-pptx로 내용만 채우기 |
| 이미지/PDF로 렌더링 | 지원 안 함 | LibreOffice: `soffice --headless --convert-to pdf deck.pptx` (설치된 경우) |
| 구버전 `.ppt` | 지원 안 함 | 먼저 `.pptx`로 변환 |
| SmartArt | XML 읽기만 가능 | 도형과 연결선으로 직접 그리기 |
| 매크로 (`.pptm`) | 실행 안 함 | 범위 밖 |
| SVG 이미지 | 지원 안 함 | PNG로 변환 (예: cairosvg) |
| 그림자, 네온, 3D 효과 | `shadow.inherit`만 가능 | `shape._element`로 XML 직접 편집 |
