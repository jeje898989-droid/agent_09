# Browser Control Rules (v1)

These rules apply whenever a task could involve opening, browsing or controlling a web page in this
project.

## 1. Default tool

- Use the **Playwright MCP** (`mcp__playwright__*` tools) for browser work by default.
- Use Claude in Chrome (`mcp__claude-in-chrome__*`) only when the user asks for it by name.

## 2. Automatic call: trigger keywords

- If the user's message contains a browser-control keyword, call the Playwright MCP right away,
  without asking first.
- Trigger keywords include the following, plus close variations in Korean or English:
  - "브라우저를 열어서 작업" / "브라우저 열어서" / "브라우저 열어줘" (open the browser and work)
  - "웹 제어" / "웹 브라우저 제어" (web control)
  - "직접 작업" / "직접 해줘" / "직접 들어가서" (do it yourself, hands-on)
  - "사이트에 들어가서" / "페이지에 접속해서" (go to the site and ...)
  - "open the browser", "control the browser", "do it in the browser"

## 3. Consent first: no trigger keyword

- If the message has no trigger keyword but the task could be done or checked with the Playwright
  MCP (for example: viewing a web page, filling a form, taking a screenshot, checking a published
  page, logging in to a site), **ask the user for consent before calling it**.
- Explain in one or two lines what you would do in the browser and why, then wait for a clear
  "yes". Do not call any `mcp__playwright__*` tool until the user agrees.
- If the user declines, do the task another way (for example with WebFetch or WebSearch) or explain
  what cannot be done without the browser.
- Consent covers only the task it was given for. Ask again for a new task.

## 4. Safety while controlling the browser

- Even after an automatic call or consent, confirm with the user before any action that is hard to
  undo or reaches outside: payments, purchases, deleting data, submitting forms, sending messages,
  or publishing posts.
- Never type passwords or payment details on the user's behalf. Ask the user to enter them.
- Do not trigger JavaScript alert, confirm or prompt dialogs on purpose. If one appears, handle it
  with `browser_handle_dialog`.
- If a page fails to load or a step fails 2–3 times, stop and ask the user how to proceed.

## 5. Finishing

- Close the browser with `browser_close` when the task is done, unless the user wants it left open.
- Report what you did, and save any screenshots or files you need to keep in the right project
  folder (for example `blog/images/`), not in a temporary folder.
