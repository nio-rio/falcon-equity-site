# BXCI-01 live measurements

- **Captured:** 2026-10-22T00:56:53.589Z
- **Source:** https://www.blackstone.com/our-businesses/credit-and-insurance-bxci/
- **Used by:** MCA Hero (H1 + lead)
- **Method:** Playwright + `getComputedStyle` / `getBoundingClientRect` at viewports 1440 / 1024 / 390 (`deviceScaleFactor: 1`). Cookie bar dismissed. Header pointer-events disabled.
- **Fonts in situ:** Guardian Sans / Sanomat. Falcon maps headings → `--font-display` (At Gambit), body → `--font-sans` (Archivo). Colors → Falcon tokens. Numbers below stay as measured.

## How to reuse
- Page header. No eyebrow, no cards, no still.
- At 1440 the title is not an 8/8 split: H1 sits on columns 1–9 (704px); lead sits on columns 12–16 (384px). Columns 10–11 are the gutter between them.
- Named grid areas: Title / Desc.
- Letter-spacing on the H1 is 0.008em (0.448px at 56px). Body tracking is a fixed 0.32px.

## 1440 CSS px

- **Viewport:** clientWidth 1440, innerHeight 900, scrollWidth 1425
- **Section:** 1425×311, background `rgb(255, 255, 255)`, color `rgb(0, 0, 0)`
- **Section padding:** top 48px / bottom 120px / left 0px / right 0px
- **Container:** width 1425, x 0, max-width `100%`, padding-left 0px, side margin 0px
- **Grid:** width 1264, x 81, side margin 81px
- **grid-template-columns:** `64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px`
- **Column count:** 16
- **column-gap:** 16px · **row-gap:** normal
- **Grid padding:** 0px 0px 0px 0px
- **Measured gaps:** {'headingToClaim': -135}

| Role | Tag | font-size | line-height | weight | letter-spacing | width | max-width | margin T/B | span | text |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| heading | H1 | 56px | 84px | 300 | 0.448px | 704 | none | 0px/0px | 1-9 (9 cols) | Credit & Insurance |
| body | P | 18px | 27px | 300 | 0.32px | 384 | none | 0px/0px | 12-16 (5 cols) | Blackstone is one of the largest credit asset managers in the world. W |

**Rules / borders:** none measured on the section root (accordion hairlines compute as 1px light on dark; map to `--color-white-a16`).

## 1024 CSS px

- **Viewport:** clientWidth 1024, innerHeight 800, scrollWidth 1009
- **Section:** 1009×346, background `rgb(255, 255, 255)`, color `rgb(0, 0, 0)`
- **Section padding:** top 56px / bottom 96px / left 0px / right 0px
- **Container:** width 1009, x 0, max-width `100%`, padding-left 0px, side margin 0px
- **Grid:** width 688, x 161, side margin 161px
- **grid-template-columns:** `72px 72px 72px 72px 72px 72px 72px 72px`
- **Column count:** 8
- **column-gap:** 16px · **row-gap:** normal
- **Grid padding:** 0px 0px 0px 0px
- **Measured gaps:** {'headingToClaim': 32}

| Role | Tag | font-size | line-height | weight | letter-spacing | width | max-width | margin T/B | span | text |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| heading | H1 | 48px | 72px | 300 | 0.384px | 688 | none | 0px/0px | 1-8 (8 cols) | Credit & Insurance |
| body | P | 20px | 30px | 300 | 0.32px | 688 | none | 0px/0px | 1-8 (8 cols) | Blackstone is one of the largest credit asset managers in the world. W |

**Rules / borders:** none measured on the section root (accordion hairlines compute as 1px light on dark; map to `--color-white-a16`).

## 390 CSS px

- **Viewport:** clientWidth 390, innerHeight 844, scrollWidth 375
- **Section:** 375×374, background `rgb(255, 255, 255)`, color `rgb(0, 0, 0)`
- **Section padding:** top 40px / bottom 80px / left 0px / right 0px
- **Container:** width 375, x 0, max-width `100%`, padding-left 0px, side margin 0px
- **Grid:** width 328, x 24, side margin 24px
- **grid-template-columns:** `70px 70px 70px 70px`
- **Column count:** 4
- **column-gap:** 16px · **row-gap:** normal
- **Grid padding:** 0px 0px 0px 0px
- **Measured gaps:** {'headingToClaim': 32}

| Role | Tag | font-size | line-height | weight | letter-spacing | width | max-width | margin T/B | span | text |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| heading | H1 | 40px | 60px | 300 | 0.32px | 328 | none | 0px/0px | 1-4 (4 cols) | Credit & Insurance |
| body | P | 18px | 27px | 300 | 0.32px | 328 | none | 0px/0px | 1-4 (4 cols) | Blackstone is one of the largest credit asset managers in the world. W |

**Rules / borders:** none measured on the section root (accordion hairlines compute as 1px light on dark; map to `--color-white-a16`).

