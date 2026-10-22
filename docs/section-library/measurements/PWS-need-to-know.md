# PWS “What you need to know” live measurements

- **Captured:** 2026-10-22
- **Source:** https://www.blackstone.com/pws/accessing-private-markets/
- **Block:** `.bx-horizontal-static-list` — eyebrow `INTRODUCTION TO ACCESSING PRIVATE MARKETS` + title `What You Need to Know` + 3 title/paragraph cards (Choice Redefined / Adoption Gaining Momentum / Same Goals, Familiar Approach).
- **Used by:** MCA Process. Same 16-col / 5-6-5 card geometry as BXCI-07. No accordion, no intro under the heading. Live 01 / 02 / 03 are Scene7 number images (`.bx-horizontal-static-list-item-card__media`, 16:9, `object-fit: cover`, `--x:0; --y:0.5`) with alt `01` / `02` / `03`. MCA sets those as `--font-display` type at the image-box size.
- **Method:** Playwright + `getComputedStyle` / `getBoundingClientRect` at 1440 / 1024 / 390.

## How to reuse

- White band. 16-col / 1264 at 1440, 8-col / 688 at 1024, 4-col / 328 at 390.
- Eyebrow 16/24/400 ls 1.28 with 64px pad-bottom at 1440 (14/21 ls 1.12, pad-bottom 48 at 1024/390). Title 48/72/300 (40/60 at 1024, 32/48 at 390).
- Heading → cards is header `padding-bottom` + list `padding-top`: **104 / 88 / 72** (56+48 / 48+40 / 40+32).
- Cards span **5 / 6 / 5**. Boxes 384 / 464 / 384 with inner 352. Padding `0 32 0 0` / `0 56 0 56` / `0 0 0 32`.
- **Numbers (live images, mapped to type):** box **11.5rem / 10.938rem / 12.375rem** (184 / 175 / 198) at 390 / 1024 / 1440. Weight 300, letter-spacing `normal`. `.bx-horizontal-static-list-item-card__image-space` margin-bottom **32px** at every Falcon breakpoint (number → title).
- Card title 24/36/300 ls 0.192, margin-bottom 24 (title → body). Body 18/27/300 ls 0.32.
- At 1024 cards wrap 4+4 / 4 with **80px** row-gap and 24px side insets. At 390 they stack with **72px** row-gap.
- No rules. Card CTAs, when present on this component family, are `.bx-singular-link` (18/27/400 ls 0.288, 40px tall, label underline `background-size: 100% 0.063rem` on hover, icon scale 1.16667).

## 1440 CSS px

- **Section:** pad 56 / 160, white, 1425×932
- **Header inner:** 1264×160 at x 80.5
- **List inner:** 1264, pad-top 48, gap `104px 16px`, 16×64px tracks
- **Cards:** 384×452 / 464×452 / 384×452
- **Number image:** 352×198 (`22rem` × `12.375rem`), margin-bottom 32

## 1024 CSS px

- **Section:** pad 40 / 96, 1009×1310
- **Header:** 688, pad-bottom 48. Title 40/60/300
- **List:** pad-top 40, gap `80px 16px`, 8×72px
- **Cards:** 336 wide, inner 312, pad 24px toward the gutter, span 4 / 4 then 4
- **Number image:** 312×175 (`19.5rem` × `10.938rem`), margin-bottom 32

## 390 CSS px

- **Section:** pad 24 / 80, 375×1781
- **Header:** 328, pad-bottom 40. Title 32/48/300 (wraps)
- **List:** pad-top 32, gap `72px 16px`
- **Cards:** 328, pad 0, stack
- **Number image:** 328×184 (`20.5rem` × `11.5rem`), margin-bottom 32
