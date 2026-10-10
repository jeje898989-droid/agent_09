"""Claude(Anthropic) 회사 소개 발표자료 생성 스크립트 (주황색 테마, 5장).

실행: python scripts/make_ppt_claude.py
"""
import sys

sys.path.insert(0, ".claude/skills/mk-ppt/scripts")
import pptx_kit
from pptx_kit import *
from pptx.dml.color import RGBColor

# 주황색 테마 (키트 원본은 수정하지 않고 여기서 덮어씀)
pptx_kit.THEME.update({
    "primary": RGBColor(0xE8, 0x73, 0x0C),   # 메인 주황
    "accent": RGBColor(0xF5, 0xA6, 0x23),    # 밝은 주황
    "light": RGBColor(0xFD, 0xF1, 0xE6),     # 연한 주황/베이지
})

prs = new_deck()

# 1. 표지
s = add_title_slide(prs, "Anthropic: Claude를 만드는 회사",
                    "회사 소개 · 2026년 10월")
set_notes(s, "오늘은 AI 어시스턴트 Claude를 개발한 회사 Anthropic을 소개합니다. "
             "회사 개요, 미션과 안전 철학, 제품군 순서로 설명드리겠습니다.")

# 2. 회사 개요
s = add_bullet_slide(prs, "회사 개요", [
    "설립: 2021년, 미국 샌프란시스코 본사",
    "창업: 다리오·다니엘라 아모데이 남매 등 전 OpenAI 연구진",
    ("CEO 다리오 아모데이, 사장 다니엘라 아모데이", 1),
    "형태: 공익법인(Public Benefit Corporation)",
    "목적: 인류의 장기적 이익을 위한 책임 있는 첨단 AI 개발",
    "거점: 샌프란시스코, 런던, 뉴욕 등",
])
set_notes(s, "Anthropic은 2021년 OpenAI 출신 연구자들이 세운 AI 안전·연구 회사입니다. "
             "이윤만이 아니라 공익 목적을 정관에 명시한 공익법인 형태라는 점이 특징입니다.")

# 3. 미션과 안전 철학
s = add_two_column_slide(
    prs, "미션과 안전 철학",
    ["Constitutional AI: 원칙(헌법)으로 모델 학습",
     "해석 가능성 연구: 모델 내부 작동 분석",
     "정렬(Alignment) 및 위험 평가 연구"],
    ["책임 있는 확장 정책(RSP)",
     "능력 수준별 안전 기준 단계 적용",
     "연구 결과와 정책을 외부에 공개"],
    "안전 연구", "책임 있는 운영",
)
set_notes(s, "Anthropic의 핵심 미션은 안전하고 신뢰할 수 있는 AI입니다. "
             "Constitutional AI와 해석 가능성 연구로 모델을 이해하고 통제하며, "
             "책임 있는 확장 정책으로 모델 능력이 커질수록 더 강한 안전 기준을 적용합니다.")

# 4. Claude 제품군
s, _ = add_table_slide(prs, "Claude 제품군", [
    ["구분", "제품", "특징"],
    ["모델", "Fable · Opus", "최고 성능, 복잡한 추론·장기 작업"],
    ["모델", "Sonnet · Haiku", "성능과 속도·비용의 균형 / 경량·고속"],
    ["서비스", "Claude 앱", "웹·데스크톱·모바일 AI 어시스턴트"],
    ["개발 도구", "Claude Code", "터미널·IDE에서 코딩을 돕는 에이전트"],
    ["플랫폼", "Claude API", "기업·개발자용 모델 연동"],
], col_widths=[1.2, 1.6, 3.4], font_size=16)
set_notes(s, "Claude는 용도에 따라 여러 등급의 모델로 제공됩니다. "
             "일반 사용자는 Claude 앱으로, 개발자는 Claude Code와 API로 Claude를 활용할 수 있습니다.")

# 5. 요약 및 마무리
s = add_bullet_slide(prs, "요약 및 마무리", [
    "Anthropic은 '안전한 AI'를 미션으로 하는 공익법인",
    "Constitutional AI·해석 가능성 등 안전 연구를 선도",
    "Claude 모델군과 앱·Claude Code·API로 폭넓게 제공",
    "안전과 유용성을 함께 추구하는 AI 회사",
])
set_notes(s, "정리하면, Anthropic은 안전 연구와 실제 제품을 함께 발전시키는 회사입니다. "
             "질문 있으시면 받겠습니다. 감사합니다.")

add_footer_numbers(prs)
print(save(prs, next_version_path("presentation", "Claude_회사소개_발표")))
