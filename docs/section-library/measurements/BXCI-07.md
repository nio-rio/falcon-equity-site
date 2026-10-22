# BXCI-07 live measurements

- **Captured:** 2026-10-22T00:56:53.589Z
- **Source:** https://www.blackstone.com/our-businesses/credit-and-insurance-bxci/#Insurance
- **Used by:** MCA term facts (3 cards) and What it helps (4 cards, 2×2 adaptation)
- **Method:** Playwright + `getComputedStyle` / `getBoundingClientRect` at viewports 1440 / 1024 / 390 (`deviceScaleFactor: 1`). Cookie bar dismissed. Header pointer-events disabled.
- **Fonts in situ:** Guardian Sans / Sanomat. Falcon maps headings → `--font-display` (At Gambit), body → `--font-sans` (Archivo). Colors → Falcon tokens. Numbers below stay as measured.

## How to reuse
- Horizontal static list. Eyebrow + long claim + 3 title+paragraph cards. No images.
- Cards span 5 / 6 / 5. Card boxes are 384 / 464 / 384. Text inside every card is 352px: first card padding-right 32px; middle padding 56px 56px; last padding-left 32px. Inter-card text gutter is 104px.
- Inner list grid row-gap is 104px at 1440 (heading → cards). Mobile stacked row-gap is 72px.
- Claim between eyebrow and cards is 48px / 72px / 300 (inferred from 320px eyebrow-bottom → cards = 3×72 + 104).
- Four-card MCA adaptation keeps these type, pad, gap and inset numbers and uses 8 / 8 spans (624px tracks) in two rows.

## 1440 CSS px

- **Viewport:** clientWidth 1440, innerHeight 900, scrollWidth 1425
- **Section:** 1425×846, background `rgb(255, 255, 255)`, color `rgb(0, 0, 0)`
- **Section padding:** top 56px / bottom 160px / left 0px / right 0px
- **Container:** width 1425, x 0, max-width `100%`, padding-left 0px, side margin 0px
- **Grid:** width 1264, x 81, side margin 81px
- **grid-template-columns:** `64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px 64px`
- **Column count:** 16
- **column-gap:** 16px · **row-gap:** 0px
- **Grid padding:** 0px 0px 0px 0px
- **Measured gaps:** {'headingToClaim': 380, 'headingToCards': 320, 'claimToCards': -222}

| Role | Tag | font-size | line-height | weight | letter-spacing | width | max-width | margin T/B | span | text |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| heading | H2 | 16px | 24px | 400 | 1.28px | 1264 | none | 0px/0px | 1-16 (16 cols) | BLACKSTONE INSURANCE |
| heading | H3 | 24px | 36px | 300 | 0.192px | 352 | none | 0px/24px | 1-5 (5 cols) | Proven track record |
| heading | H3 | 24px | 36px | 300 | 0.192px | 352 | none | 0px/24px | 6-11 (6 cols) | Tailored approach |
| heading | H3 | 24px | 36px | 300 | 0.192px | 352 | none | 0px/24px | 12-16 (5 cols) | Global perspective |
| body | P | 18px | 27px | 300 | 0.32px | 352 | none | 0px/0px | 1-5 (5 cols) | Our 100+ insurance focused professionals bring deep expertise across i |
| body | P | 18px | 27px | 300 | 0.32px | 352 | none | 0px/0px | 6-11 (6 cols) | Our scalable solutions span from customized separately managed account |
| body | P | 18px | 27px | 300 | 0.32px | 352 | none | 0px/0px | 12-16 (5 cols) | Our view across industries, asset classes and markets positions us to  |

| Card | box W×H | padding (T R B L) | grid-column | inferred span | title | body | image |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 384×222 | 0px 32px 0px 0px | `1 / span 5` | 1-5 (5 cols) | 24px/36px/300 ls 0.192px w 352 m 0px/24px | 18px/27px/300 ls 0.32px w 352 | — |
| 5 | 464×222 | 0px 56px 0px 56px | `6 / span 6` | 6-11 (6 cols) | 24px/36px/300 ls 0.192px w 352 m 0px/24px | 18px/27px/300 ls 0.32px w 352 | — |

**Rules / borders:** none measured on the section root (accordion hairlines compute as 1px light on dark; map to `--color-white-a16`).

## 1024 CSS px

- **Viewport:** clientWidth 1024, innerHeight 800, scrollWidth 1009
- **Section:** 1009×1022, background `rgb(255, 255, 255)`, color `rgb(0, 0, 0)`
- **Section padding:** top 40px / bottom 96px / left 0px / right 0px
- **Container:** width 1009, x 0, max-width `100%`, padding-left 0px, side margin 0px
- **Grid:** width 688, x 161, side margin 161px
- **grid-template-columns:** `72px 72px 72px 72px 72px 72px 72px 72px`
- **Column count:** 8
- **column-gap:** 16px · **row-gap:** 0px
- **Grid padding:** 0px 0px 0px 0px
- **Measured gaps:** {'headingToClaim': 384, 'headingToCards': 328, 'claimToCards': -245}

| Role | Tag | font-size | line-height | weight | letter-spacing | width | max-width | margin T/B | span | text |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| heading | H2 | 14px | 21px | 400 | 1.12px | 688 | none | 0px/0px | 1-8 (8 cols) | BLACKSTONE INSURANCE |
| heading | H3 | 20px | 32px | 300 | 0.16px | 312 | none | 0px/24px | 1-4 (4 cols) | Proven track record |
| heading | H3 | 20px | 32px | 300 | 0.16px | 312 | none | 0px/24px | 5-8 (4 cols) | Tailored approach |
| heading | H3 | 20px | 32px | 300 | 0.16px | 312 | none | 0px/24px | 1-4 (4 cols) | Global perspective |
| body | P | 18px | 27px | 300 | 0.32px | 312 | none | 0px/0px | 1-4 (4 cols) | Our 100+ insurance focused professionals bring deep expertise across i |
| body | P | 18px | 27px | 300 | 0.32px | 312 | none | 0px/0px | 5-8 (4 cols) | Our scalable solutions span from customized separately managed account |
| body | P | 18px | 27px | 300 | 0.32px | 312 | none | 0px/0px | 1-4 (4 cols) | Our view across industries, asset classes and markets positions us to  |

| Card | box W×H | padding (T R B L) | grid-column | inferred span | title | body | image |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 336×245 | 0px 24px 0px 0px | `1 / span 4` | 1-4 (4 cols) | 20px/32px/300 ls 0.16px w 312 m 0px/24px | 18px/27px/300 ls 0.32px w 312 | — |
| 5 | 336×245 | 0px 0px 0px 24px | `5 / span 4` | 5-8 (4 cols) | 20px/32px/300 ls 0.16px w 312 m 0px/24px | 18px/27px/300 ls 0.32px w 312 | — |

**Rules / borders:** none measured on the section root (accordion hairlines compute as 1px light on dark; map to `--color-white-a16`).

## 390 CSS px

- **Viewport:** clientWidth 390, innerHeight 844, scrollWidth 375
- **Section:** 375×1293, background `rgb(255, 255, 255)`, color `rgb(0, 0, 0)`
- **Section padding:** top 40px / bottom 80px / left 0px / right 0px
- **Container:** width 375, x 0, max-width `100%`, padding-left 0px, side margin 0px
- **Grid:** width 328, x 24, side margin 24px
- **grid-template-columns:** `70px 70px 70px 70px`
- **Column count:** 4
- **column-gap:** 16px · **row-gap:** 0px
- **Grid padding:** 0px 0px 0px 0px
- **Measured gaps:** {'headingToClaim': 416, 'headingToCards': 360, 'claimToCards': -245}

| Role | Tag | font-size | line-height | weight | letter-spacing | width | max-width | margin T/B | span | text |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| heading | H2 | 14px | 21px | 400 | 1.12px | 328 | none | 0px/0px | 1-4 (4 cols) | BLACKSTONE INSURANCE |
| heading | H3 | 20px | 32px | 300 | 0.16px | 328 | none | 0px/24px | 1-4 (4 cols) | Proven track record |
| heading | H3 | 20px | 32px | 300 | 0.16px | 328 | none | 0px/24px | 1-4 (4 cols) | Tailored approach |
| heading | H3 | 20px | 32px | 300 | 0.16px | 328 | none | 0px/24px | 1-4 (4 cols) | Global perspective |
| body | P | 18px | 27px | 300 | 0.32px | 328 | none | 0px/0px | 1-4 (4 cols) | Our 100+ insurance focused professionals bring deep expertise across i |
| body | P | 18px | 27px | 300 | 0.32px | 328 | none | 0px/0px | 1-4 (4 cols) | Our scalable solutions span from customized separately managed account |
| body | P | 18px | 27px | 300 | 0.32px | 328 | none | 0px/0px | 1-4 (4 cols) | Our view across industries, asset classes and markets positions us to  |

| Card | box W×H | padding (T R B L) | grid-column | inferred span | title | body | image |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 328×245 | 0px 0px 0px 0px | `1 / span 4` | 1-4 (4 cols) | 20px/32px/300 ls 0.16px w 328 m 0px/24px | 18px/27px/300 ls 0.32px w 328 | — |
| 5 | 328×191 | 0px 0px 0px 0px | `1 / span 4` | 1-4 (4 cols) | 20px/32px/300 ls 0.16px w 328 m 0px/24px | 18px/27px/300 ls 0.32px w 328 | — |

**Rules / borders:** none measured on the section root (accordion hairlines compute as 1px light on dark; map to `--color-white-a16`).

