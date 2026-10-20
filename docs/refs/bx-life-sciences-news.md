# Blackstone Life Sciences — News & Insights (measured)

Source: `blackstone-v2/horizontal-static-list` on
`https://www.blackstone.com/our-businesses/life-sciences/`
(“NEWS & INSIGHTS” / “Updates from Life Sciences”).

Live `blackstone.com` is Cloudflare-blocked here. Headless Chrome measured a
local replica of the archived section HTML (`Wayback 20260329154119`) plus
`blackstone-v2` `frontend.css` at **1440px** and **1280px**. Values below are
`getComputedStyle` / `getBoundingClientRect`.

Component classes: `.bx-horizontal-static-list`, `.bx-headers-one`,
`.bx-horizontal-static-list-item-card__*`, `.bx-singular-link`.

| Token | 1280 (`80em`) | 1440 (`90em`) |
| --- | --- | --- |
| Section padding-top (`.bx-component-stacked-same-theme-padding-top`) | **48px** | **56px** |
| Section padding-bottom (`.bx-component-article-stacked-padding-bottom`) | **112px** | **120px** |
| Eyebrow | sans **16px** / 400 / lh **24px** / tracking **0.08em** (1.28px) / uppercase | same |
| Eyebrow rule `::after` | **56×2px**, margin-left **24px**, currentColor | **64×2px**, margin-left **24px** |
| Eyebrow → H2 (eyebrow `padding-bottom`) | **56px** | **64px** |
| H2 | serif 300, **40px**, lh **60px** (1.5), tracking normal | **48px**, lh **72px** (1.5) |
| Heading → cards | header pad-bottom **48px** + inner pad-top **48px** = **96px** | **56px** + **48px** = **104px** |
| Column grid | **16** cols, gutter **16px**, container **1136px**; tracks **56px** | **16** / **16px**, container **1264px**; tracks **64px** |
| Card columns | 1–5 / 6–11 / 12–16 (span **5 / 6 / 5**) | same |
| Card extra padding | 0+**24** / **48**+**48** / **24**+0 | 0+**32** / **56**+**56** / **32**+0 |
| Image | **16:9**, **320×180** (20rem × 11.25rem), cover | **352×198** (22rem × 12.375rem) |
| Image → title | **32px** | **32px** |
| Title | serif 300, **20px**, lh **32px** (2rem), tracking **0.008em** | **24px**, lh **36px**, tracking **0.008em** |
| Title → excerpt | **24px** | **24px** |
| Excerpt | sans 300, **16px**, lh **24px** (1.5rem) | **18px**, lh **27px** |
| Excerpt → Read More (min; CTA is `margin-top: auto`) | **32px** | **40px** |
| Read More | sans 400, **18px**, lh **27px**, tracking **0.016em** | same |
| Circled arrow | **40×40** SVG | **40×40** |
| Label → circle | **16px** (`margin-right` on `.bx-singular-link__label`) | **16px** |

**Hover** (`.bx-horizontal-static-list-item-card__media:hover` + singular-link):
circle `scale(1.1666666667)`; fill opacity 1 / arrow opacity 0; label underline
draws `background-size: 100% 0.063rem`. Read More sits at the **bottom** of each
card (`margin-top: auto` on the CTA).
