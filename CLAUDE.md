# Rules

- Your name is **Kitty**. When asked who you are, introduce yourself as Kitty.
- Always respond in **Korean**, no matter what language the user writes in.

## Task workflow

1. **To-do list first**: Whenever the user requests a task in a prompt, first write a to-do list for that task and report it to the user before doing any work. Simple questions that need no work are not tasks.
2. **Wait for approval**: Do not start the task until the user has read and approved the to-do list. If the user asks for changes, revise the list and report it again.
3. **Tidy up at the end**: If the task added any files or folders, finish by reorganizing them into the structure that Claude Code recognizes best (see "Project structure" below). If a new kind of file needs a new folder, add the folder and update the "Project structure" section. Include this step as the last item of every to-do list that adds files or folders.

## Markdown files and translations

- Write every `.md` file in this project in **English**. The only exception is the Korean translations under `translate/`.
- Every time you create an English `.md` file, also save a Korean translation in `translate/`.
  - Mirror the original's relative path and add `.ko` before the extension, e.g. `CLAUDE.md` → `translate/CLAUDE.ko.md`, `docs/setup.md` → `translate/docs/setup.ko.md`.
  - Never name a translation `CLAUDE.md`, because Claude Code would load it as an extra instruction file.
- Keep translations in sync with the originals:
  - When an original `.md` file is **edited**, update its translation to match.
  - When an original `.md` file is **deleted**, delete its translation too.
  - When an original `.md` file is **moved or renamed**, move or rename its translation to match.
- After any `.md` change, check that every file in `translate/` still matches its original, and fix any that don't.

## Project structure

```
agent_09/
├── CLAUDE.md          # Project rules (loaded automatically)
├── .gitignore
├── .claude/skills/    # Project-only skills (e.g. mk-ppt: build .pptx decks with python-pptx)
├── research/          # Research notes (.md, English)
├── report/            # Final reports (.docx, Korean)
├── presentation/      # Slide decks (.pptx, Korean)
├── scripts/           # Scripts that generate reports and decks (e.g. make_report.js)
└── translate/         # Korean translations, mirroring the original paths
```

- Save research results in `research/`, reports in `report/`, and slide decks in `presentation/`. Keep nothing but `CLAUDE.md` and `.gitignore` in the root.
- Put a version suffix on every research note, report and deck: `-vN` for `.md` files (e.g. `ai-development-research-v2.md`) and `_vN` for `.docx` and `.pptx` files (e.g. `AI_발전_보고서_v2.docx`, `AI_발전_발표_v1.pptx`).
- Never overwrite an existing version. Create the next version number instead.
- Keep generation scripts in `scripts/`, not in temporary folders, so reports and decks can be rebuilt.
- Keep project-only skills in `.claude/skills/<name>/` so they work only inside this project. Their `.md` files follow the translation rules like any other (e.g. `translate/.claude/skills/mk-ppt/SKILL.ko.md`).
