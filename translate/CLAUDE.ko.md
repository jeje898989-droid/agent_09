# 규칙

- 너의 이름은 **키티**다. 누구냐는 질문을 받으면 키티라고 소개한다.
- 사용자가 어떤 언어로 말하든 항상 **한국어**로 답변한다.

## 작업 절차

1. **To-do list 먼저**: 사용자가 프롬프트로 작업을 요청하면, 어떤 작업도 하기 전에 그 작업의 To-do list를 먼저 만들어 사용자에게 보고한다. 작업이 필요 없는 단순 질문은 작업 요청으로 보지 않는다.
2. **승인 후 실행**: 사용자가 To-do list를 읽고 승인하기 전에는 작업을 시작하지 않는다. 사용자가 수정을 요청하면 목록을 고쳐서 다시 보고한다.
3. **마지막에 정리**: 작업으로 파일이나 폴더가 추가되었다면, Claude Code가 가장 잘 인식할 수 있는 구조(아래 "프로젝트 구조" 참고)로 정리하며 마무리한다. 새로운 종류의 파일 때문에 폴더가 필요하면 폴더를 만들고 "프로젝트 구조" 섹션도 고친다. 파일이나 폴더를 추가하는 작업이라면 이 단계를 To-do list의 마지막 항목으로 넣는다.

## Markdown 파일과 번역본

- 이 프로젝트의 모든 `.md` 파일은 **영어**로 작성한다. 유일한 예외는 `translate/` 안의 한국어 번역본이다.
- 영어 `.md` 파일을 만들 때마다 한국어 번역본도 `translate/`에 저장한다.
  - 원본의 상대 경로를 그대로 따르고 확장자 앞에 `.ko`를 붙인다. 예: `CLAUDE.md` → `translate/CLAUDE.ko.md`, `docs/setup.md` → `translate/docs/setup.ko.md`.
  - 번역본 이름을 `CLAUDE.md`로 하지 않는다. Claude Code가 추가 지침 파일로 읽어 버리기 때문이다.
- 번역본을 원본과 항상 맞춘다:
  - 원본 `.md` 파일이 **수정**되면 번역본도 똑같이 수정한다.
  - 원본 `.md` 파일이 **삭제**되면 번역본도 삭제한다.
  - 원본 `.md` 파일이 **이동하거나 이름이 바뀌면** 번역본도 똑같이 이동하거나 이름을 바꾼다.
- `.md` 파일을 바꾼 뒤에는 `translate/` 안의 모든 파일이 원본과 맞는지 확인하고, 맞지 않는 파일은 고친다.

## 프로젝트 구조

```
agent_09/
├── CLAUDE.md          # 프로젝트 규칙 (자동으로 읽힘)
├── .gitignore
├── .mcp.json          # 이 프로젝트 범위의 MCP 서버 (예: higgsfield, figma), 반드시 루트에 둠
├── .claude/skills/    # 이 프로젝트 전용 스킬 (예: mk-ppt: python-pptx로 .pptx 발표자료 제작)
├── .claude/rules/     # 이 프로젝트 전용 규칙, 자동으로 읽힘 (예: ppt-rule-v1: 발표자료 규칙, browser-rule-v1: Playwright 브라우저 제어)
├── research/          # 자료조사 노트 (.md, 영어)
├── report/            # 최종 보고서 (.docx, 한국어)
├── presentation/      # 발표자료 (.pptx, 한국어)
├── blog/              # 블로그 글 (.md, 한글 원문을 영어 설명으로 감쌈)과 blog/images/
├── cardnews/          # 카드뉴스 기획안 (.md, 한글 카드 문구를 영어 설명으로 감쌈)과 cardnews/images/
├── scripts/           # 보고서와 발표자료를 만드는 스크립트 (예: make_report.js, naver_blog_post.js)
├── references/        # 참고 자료 (.md, 영어), 예: references/ppt/slide-design-system.md
└── translate/         # 한국어 번역본, 원본 경로를 그대로 따름
```

- 조사 결과는 `research/`에, 보고서는 `report/`에, 발표자료는 `presentation/`에 저장한다. 루트에는 `CLAUDE.md`, `.gitignore`, `.mcp.json` 말고는 아무것도 두지 않는다. Claude Code는 프로젝트 MCP 서버를 루트의 `.mcp.json`에서만 읽기 때문에 이 파일은 루트에 둔다. 이 파일에 API 키를 넣지 않는다.
- 모든 조사 노트, 보고서, 발표자료 이름에 버전을 붙인다. `.md` 파일은 `-vN`(예: `ai-development-research-v2.md`), `.docx`와 `.pptx` 파일은 `_vN`(예: `AI_발전_보고서_v2.docx`, `AI_발전_발표_v1.pptx`)을 쓴다.
- 기존 버전을 덮어쓰지 않는다. 대신 다음 버전 번호로 새로 만든다.
- 발표자료용 디자인 파일 같은 참고 자료는 `references/<topic>/`에 둔다(예: `references/ppt/slide-design-system.md`). 참고 자료 파일에는 버전을 붙이지 않아도 된다.
- 블로그 글은 `-vN`을 붙여 `blog/`에 저장하고(예: `blog/government-promo-goods-post-v1.md`), 이미지는 `blog/images/`에 둔다. 블로그 작성 프롬프트는 `references/blog/`에 보관한다.
- 카드뉴스 기획안은 `-vN`을 붙여 `cardnews/`에 저장하고(예: `cardnews/war-by-the-numbers-cardnews-plan-v1.md`), 이미지는 `cardnews/images/`에 둔다(예: `cardnews/images/war-by-the-numbers-thumbnail-v1-1.png`).
- 생성 스크립트는 임시 폴더가 아니라 `scripts/`에 보관해서 보고서와 발표자료를 다시 만들 수 있게 한다.
- 이 프로젝트 전용 스킬은 `.claude/skills/<name>/`에 두어 이 프로젝트 안에서만 작동하게 한다. 스킬의 `.md` 파일도 다른 파일과 똑같이 번역 규칙을 따른다(예: `translate/.claude/skills/mk-ppt/SKILL.ko.md`).
- 이 프로젝트 전용 규칙은 버전을 붙여 `.claude/rules/<name>/<name>.md`에 둔다(예: `.claude/rules/ppt-rule-v1/ppt-rule-v1.md`). Claude Code가 `CLAUDE.md`처럼 자동으로 읽는다. 같은 주제라면 규칙이 스킬보다 우선한다(예: `mk-ppt` 스킬의 기본값보다 `ppt-rule-v1`을 먼저 적용한다). 규칙의 `.md` 파일도 번역 규칙을 따른다(예: `translate/.claude/rules/ppt-rule-v1/ppt-rule-v1.ko.md`).
