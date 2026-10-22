# LS-04 live measurements (dark Life Sciences vertical-list)

- **Captured:** 2026-10-22 (library `meta.json` + `img/LS-04-d.png` / `LS-04-m.png`)
- **Source:** https://www.blackstone.com/our-businesses/life-sciences/
- **Used by:** MCA “What it helps”. Eyebrow + claim + 3:4 still left + stacked title/body pillars right. MCA has four pillars; intro line dropped. Scrolling Apply tape is Falcon chrome at the end of the band (not on live LS-04).
- **Fonts in situ:** Guardian Sans / Sanomat. Falcon maps headings → `--font-display`, body → `--font-sans`. Colors → Falcon white on `--color-surface-dark`.

The light FO LS-04 file (`LS-04.md`) is a different theme of the same block. Use this file for the dark MCA helps band.

## How to reuse

- Dark band. 16-col / 1264 at 1440. Areas: **image × 8, skip 2, content × 6**.
- Image **624×832**, aspect **0.75**. Content column **464px**.
- Section pads (theme-change base): **160 / 160** at 1440, **96 / 96** at 1024, **80 / 80** at 390.
- Eyebrow 16/24/400 white, tracking 1.28px. Claim 48/72/300 white. Pillar title 24/36/300. Body 18/27/300.
- Heading → inner **104 / 88 / 72** (same stacked header/list split as the light FO twin).

## 1440 CSS px

- **Section:** pad 160 / 160, background `rgb(0,0,0)`, 1425×1684
- **Image:** 624×832, cols 1–8
- **Copy:** 464px, cols 11–16

## 1024 CSS px

- **Section:** pad 96 / 96 (BX `.bx-component-base-padding` at 48em–80em)
- Image and pillars stack

## 390 CSS px

- **Section:** pad 80 / 80, 375×2354
- **Image:** 328×437, aspect 0.75
