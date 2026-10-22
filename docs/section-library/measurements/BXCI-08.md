# BXCI-08 live measurements — Portfolio Spotlight

- **Captured:** 2026-10-22 from library `meta.json` + live `frontend.css` (`.bx-featured-content-left__inner`, `.bx-featured-content__title`, `.bx-featured-content-title__min`) + 1440 / 390 library stills.
- **Source:** https://www.blackstone.com/our-businesses/credit-and-insurance-bxci/#Insurance
- **Used by:** MCA blog spotlight after FAQ.
- **Fonts in situ:** Guardian Sans / Sanomat. Falcon maps headings → `--font-display`, body → `--font-sans`. Colors → Falcon ink on white. Play overlay on the still is video-only and is not copied for the article.

## How to reuse

- Featured-content split. Eyebrow + short rule, then left copy (title + 18/27 body + singular-link) and a 16:9 still on the right.
- 16-col / 1264 at 1440. Areas at 90em: **Content × 5, skip 2, Image × 9**. Image **704×396**.
- At 80em: Content × 6, skip 1, Image × 9. Title 32px. Content column 24rem.
- Below 80em: stack eyebrow, title, copy, then still. Title 32px (390) / 40px (48em).
- Pads: stacked-same-theme top + base bottom → **56 / 160** at 1440, **40 / 96** at 48em, **40 / 80** at 390. MCA retunes these to the page even-gap system (stack / R) so light-next-to-light does not double.
- Eyebrow 16/24/400 ls 1.28 (14/21/400 ls 1.12 on small). Body 18/27/300 ls 0.32. Singular-link 18/27/400, 40px circle.

## 1440 CSS px

- **Section:** pad 56 / 160, background `rgb(255,255,255)`, ~1425×700
- **Grid:** 16 × 64px + 16px gap, width 1264
- **Copy:** cols 1–5 (384px)
- **Image:** cols 8–16, 704×396, aspect 1.778
- **Title (`.bx-featured-content__title`):** 32px, padding-bottom 32px, weight 300
- **Body:** 18/27/300 ls 0.32, padding-bottom 48px before the CTA
- **Eyebrow:** 16/24/400 ls 1.28 uppercase + 64px rule

## 1280 CSS px (80em)

- **Section:** pad 48 / 144
- **Areas:** Content × 6, skip 1, Image × 9
- **Title:** 32px, padding-bottom 32px
- **Image height:** 22.25rem (356px)

## 768 CSS px (48em)

- **Section:** pad 40 / 96
- **Stack:** eyebrow 8 cols, title 6 cols, copy 8, image 8
- **Title (`.bx-featured-content-title__min`):** 40px, padding-bottom 24px
- **Image height:** 24.188rem (full 688-wide 16:9)

## 390 CSS px

- **Section:** pad 40 / 80, ~375×760
- **Grid:** 4 × 70px + 16px, width 328
- **Title:** 32/48, padding-bottom 16px
- **Body:** 18/27/300
- **Image:** 328×185, 16:9
- **Order:** eyebrow, title, copy + CTA, then still
