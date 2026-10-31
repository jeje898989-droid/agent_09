# PPT Rules (v1)

These rules apply whenever you build or edit a slide deck (.pptx) in this project.
Use them together with the `mk-ppt` skill.

## 1. Slide count

- Make **8 slides** by default, counting the title slide.
- Use a different count only when the user asks for one.
- If the content does not fit in 8 slides, tell the user and ask before adding slides.

## 2. Design reference

- Before building a deck, read the design `.md` file the user provides, and follow its colors,
  fonts, layout and style.
- If the user has not provided a design file, ask for one before you start. If the user says to go
  ahead without it, use the default theme of the `mk-ppt` skill.
- When the design file conflicts with the default theme of the `mk-ppt` skill, the design file wins.
- In the final report, name the design file you followed.

## 3. Readability: no overflow, no overlap

- **Keep text inside the slide.** Every text box and shape must sit fully within the slide area
  with a safe margin (at least 0.4 in / 1 cm) from each edge.
- **Limit text per slide.** One line for the title, 3–6 bullets of one line each. Move long
  explanations into speaker notes, or split the content across slides. Never shrink the font
  below 14pt just to make text fit.
- **Do not let elements overlap.** Compute the position and size of each text box, shape, image,
  table and chart so that none of them covers another, unless the overlap is deliberate (for
  example, text on a background shape) and the text stays readable.
- **Check after building.** Run `python .claude/skills/mk-ppt/scripts/pptx_kit.py inspect <deck>`
  and confirm that no shape is flagged `!! OFF-SLIDE`. `inspect` does not measure text or the safe
  margin, so check separately that no text runs past its box and that shapes keep the margin. Fix
  every problem and rebuild before you report the deck as done.
