# Slide Design System

Design reference for slide decks, based on the "Project Management Infographics" template
(a 4-column SWOT card layout). Use it with the `mk-ppt` skill and `ppt-rule-v1`.

## 1. Mood

Clean, bright and friendly. White background, bold condensed headings, and one vivid warm-to-cool
color per item. Thin black outlines and simple line icons keep it light and readable.

## 2. Canvas

- 16:9, 13.333 × 7.5 in, white background (`#FFFFFF`).
- Side margin about 1.0 in; keep every element at least 0.4 in inside the edges.

## 3. Colors

| Role | HEX | Use |
|---|---|---|
| Accent 1 – Yellow | `#FBB92F` | 1st item header, icon, subtitle |
| Accent 2 – Coral | `#FB8567` | 2nd item |
| Accent 3 – Pink | `#FB569B` | 3rd item |
| Accent 4 – Purple | `#9C28B1` | 4th item |
| Text | `#000000` | Title, body text, card outlines |
| Background | `#FFFFFF` | Slides, card fill, header label text |

- Assign accents in order (yellow → coral → pink → purple) so a sequence reads as a gradient.
- An item uses one accent everywhere: header fill, icon and subtitle.
- Use black only for text and outlines; no gray fills or gradients.

## 4. Fonts

| Element | Font | Size | Style |
|---|---|---|---|
| Slide title | Fira Sans Extra Condensed (Korean: Noto Sans KR) | 36–40pt | Bold, black, centered |
| Header label | Fira Sans Extra Condensed (Korean: Noto Sans KR) | 22–24pt | Bold, white, UPPERCASE for English |
| Card subtitle | Fira Sans Extra Condensed (Korean: Noto Sans KR) | 22–24pt | Bold, accent color |
| Body text | Roboto (Korean: Noto Sans KR) | 16–18pt | Regular, black, centered |

- Korean slides: set the East Asian font to Noto Sans KR; never go below 14pt.

## 5. Layout: card columns (signature layout)

```
          [ Slide title, centered ]
 ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
 │ HEADER │ │ HEADER │ │ HEADER │ │ HEADER │  ← accent fill, rounded top
 └────────┘ └────────┘ └────────┘ └────────┘
 ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
 │  icon  │ │  icon  │ │  icon  │ │  icon  │  ← white card, black outline
 │subtitle│ │subtitle│ │subtitle│ │subtitle│
 │  body  │ │  body  │ │  body  │ │  body  │
 └────────┘ └────────┘ └────────┘ └────────┘
```

| Element | Left / Top (in) | Size (in) |
|---|---|---|
| Title | centered / 0.7 | full width × 0.8 |
| Header bar | 1.03 + n × 2.89 / 1.9 | 2.62 × 0.85 |
| Card | same x / 2.93 | 2.62 × 3.52 |

- 4 columns, 0.27 in gap; the header sits 0.18 in above its card.
- Header bar: accent fill, no outline, rounded top corners only.
- Card: white fill, 1.5pt black outline, small corner radius (about 0.1 in).
- Inside the card, top to bottom: icon (about 0.7 in) → subtitle → 2–3 lines of body, all centered.
- For 2–3 items, keep the same card size and center the group.

## 6. Other slides

- **Title slide:** large centered title, subtitle in one accent color, a row of four small
  accent-colored bars or dots as decoration.
- **Bullet slide:** title at top; 3–6 bullets in a single white card with a black outline;
  a thin accent bar (one color) on the left of the card.
- **Table / chart:** header row or series colors follow the accent order; black text, thin lines.
- **Closing slide:** same style as the title slide.

## 7. Icons and graphics

- Simple line icons (outline only, about 2pt stroke) in the item's accent color.
- No photos, shadows, 3D effects or gradients.

## 8. Do / Don't

- **Do:** keep lots of white space, center-align card content, use one accent per item.
- **Don't:** mix several accents in one card, fill cards with color, add drop shadows,
  or put more than 3 lines of body text in a card.
