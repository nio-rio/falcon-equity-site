# Blackstone section library — measured from live pages

Every entry below is one real section on one live page, captured in **Google Chrome on Ling's Mac on 22 Oct 2026** — not from an archive, not from a class name. Geometry, type sizes, band colours and item counts are read out of `getComputedStyle` / `getBoundingClientRect` at 1440px, with a second pass at 390px.

**How to pick:** count your own items and types first (figures, titled rows, stills, paragraphs, links), then find the id whose *content shape* matches. Steal its grid, pads and type sizes. If the shape is one item short or long, say so in the plan and adapt — never force copy into a prettier block that reads wrong.

Artifacts per id: `img/{id}-d.png` (desktop crop), `img/{id}-m.png` (mobile crop), `html/{id}.html` (the live outerHTML, so the markup can be inspected rather than guessed), and this entry's measured values.

Desktop and mobile artifacts are matched to their id by the section's **own selector path**, never by list index — a 390px layout that merges two adjacent blocks would otherwise file a crop under the wrong id. Where a mobile crop is missing, the entry says so rather than borrowing a neighbour's.

## Sources

| Code | Page | Sections |
| --- | --- | --- |
| `TF` | blackstone.com/the-firm/ | 7 |
| `PE` | blackstone.com/our-businesses/private-equity/ | 8 |
| `APM` | blackstone.com/pws/accessing-private-markets/ | 10 |
| `IR` | ir.blackstone.com/overview/default.aspx | 2 |
| `BMX` | bmacx.com/why-blackstone/ | 11 |
| `HOME` | blackstone.com/ (home, added on Ling's instruction) | 8 |
| `FAL` | falconequity.ai (home, approved design — added on Ling's instruction) | 7 |
| `OP` | blackstone.com/the-firm/our-people/ | 5 |

**58 sections** total.

## Shared geometry at 1440 (measured)

| Property | Value |
| --- | --- |
| Container | **1264px**, 16 column tracks of 64px, gutter **16px** |
| Band padding | **160px** top and bottom on a theme change; **56px** when the next band shares the theme |
| Page-header padding | **48px** top / **120px** bottom |
| Eyebrow | 16/24/400, uppercase, tracking 1.28px, 56px hairline rule to the right |
| H1 | 56 / 84 / weight 300 |
| Claim (H2/H3) | 48 / 72 / weight 300 |
| Body | 18 / 27 / weight 300, tracking 0.32px |
| Still | 16:9 cover, **352×198** in a card, **704×396** featured, **1264×542** hero (aspect 2.333) |
| Figures | 56px (BMX) → 160px (featured), Sanomat-like display, label in small caps above |
| Link | label + 40–44px outline circle-arrow, drawn underline on hover |
| Band colours | white `#ffffff`, near-black (BMX/HOME), and the BMACX cream/grey exhibit fields |

Mobile at 390: same type stack scaled to ~40px claims, band pad drops to **80px**, the 16-column grid becomes a single column, stills go full width.

## Blackstone marketing pages — `TF`

Source: blackstone.com/the-firm/

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `TF-00` | white | 48/120 | 365px | 56/84/300 | 18/27/300 | 0 (-) | 1 headings, 1 paras | 57 |
| `TF-01` | white | 0/104 | 646px | - | - | 1 (1264×542) | - | 0 |
| `TF-02` | near-black | 160/160 | 1488px | 48/72/300 | 18/27/300 | 1 (624×832) | 5 headings, 3 paras | 89 |
| `TF-03` | white | 160/160 | 1126px | 48/72/300 | 18/27/300 | 0 (-) | 6 headings, 13 paras | 145 |
| `TF-04` | near-black | 160/160 | 906px | - | 40/60/300 | 1 (304×405) | 3 paras | 68 |
| `TF-05` | white | 160/160 | 1174px | 24/36/300 | 18/27/300 | 0 (-) | 6 headings, 5 paras | 133 |
| `TF-06` | near-black | 56/160 | 927px | - | 16/23/400 | 2 (1264×711) | 4 paras, 4 list items | 141 |

### `TF-00` — page header: title + standfirst beside it

- **Anatomy (measured):** H1 in columns 1–7 at 56/84 weight 300; one lead paragraph in columns 10–13 at 18/27 weight 300. No image, no CTA. 48px top pad, 120px bottom.
- **Measured:** band `white`, pad `48/120`, height 365px; heading 56/84/300; body 18/27/300; still -; 57 words.
- **At 390:** height 455px, top pad 40px, single column.
- **Good for:** An inner-page opening where the answer can sit to the right of the title instead of under it.
- **Artifacts:** `img/TF-00-d.png`, `img/TF-00-m.png`
  · `html/TF-00.html`

### `TF-01` — full-bleed still with a credit/caption strip

- **Anatomy (measured):** One 16:9 still across the full 1264 content width, then a strip below: long caption sentence left (cols 1–10), source credit + one circle-arrow link right.
- **Measured:** band `white`, pad `0/104`, height 646px; heading -; body -; still 1264×542; 0 words.
- **At 390:** height 477px, top pad 0px, single column.
- **Good for:** A single proof image with one sentence of context and one link — not a hero.
- **Artifacts:** `img/TF-01-d.png`, `img/TF-01-m.png`
  · `html/TF-01.html`

### `TF-02` — dark claim band with three titled rows in the right column

- **Anatomy (measured):** Near-black band. Claim headline left in columns 1–8 at 48/72/300. Three rows stacked in columns 10–16, each a 20px title over a 18/27 body, separated by 1px rules at 16% white.
- **Measured:** band `near-black`, pad `160/160`, height 1488px; heading 48/72/300; body 18/27/300; still 624×832; 89 words.
- **At 390:** height 1610px, top pad 80px, single column.
- **Good for:** Three short supporting arguments that read *beside* a claim, not under it. The strongest Blackstone signature band.
- **Artifacts:** `img/TF-02-d.png`, `img/TF-02-m.png`
  · `html/TF-02.html`

### `TF-03` — titled row directory with chevrons

- **Anatomy (measured):** Eyebrow + H2 top-left. Four full-width rows starting at column 5: 24px title, chevron right, hairline between. Row body opens on click.
- **Measured:** band `white`, pad `160/160`, height 1126px; heading 48/72/300; body 18/27/300; still -; 145 words.
- **At 390:** height 933px, top pad 80px, single column.
- **Good for:** A directory of four audiences / four answers where the titles alone carry the scan.
- **Artifacts:** `img/TF-03-d.png`, `img/TF-03-m.png`
  · `html/TF-03.html`

### `TF-04` — media band only

- **Anatomy (measured):** A single full-bleed still (or video) with no heading and no copy above or below.
- **Measured:** band `near-black`, pad `160/160`, height 906px; heading -; body 40/60/300; still 304×405; 68 words.
- **At 390:** height 1131px, top pad 80px, single column.
- **Good for:** A breather between two arguments; pacing, not information.
- **Artifacts:** `img/TF-04-d.png`, `img/TF-04-m.png`
  · `html/TF-04.html`

### `TF-05` — 3-up titled prose columns, no card chrome

- **Anatomy (measured, re-checked 23 Oct 2026):** the "OUR VALUES" band on `blackstone.com/the-firm/`. A label at 16/24 w400, tracking 1.28px, uppercase, with a 56px rule beside it and 64px under it; then **five** cards in a 5 / 6 / 5 split of the 16 tracks — 384 / 464 / 384 with 16px gutters (cols 1–5, 6–11, 12–16), so the middle card is wider and wraps its title to two lines. Card text measure 352 (32px pad-right). Title **24/36 w300 tracking 0.192** with **24px** under it, body **18/27 w300 tracking 0.32**. No fills, no borders, no numbers, left-aligned. Row gap 104.
- **Measured:** band `white`, pad `160/160`, height 1174px; label 16/24/400; card title 24/36/300; body 18/27/300; still -; 133 words.
- **At 390 (measured):** pad 80/80, label 14/21 tracking 1.12 with 48px under it, single column 328, title 20/32 w300 tracking 0.16, body unchanged at 18/27, 72px row gap.
- **At 390:** height 1707px, top pad 80px, single column.
- **Good for:** Three to six short principles or categories that need no images.
- **Artifacts:** `img/TF-05-d.png`, `img/TF-05-m.png`
  · `html/TF-05.html`

### `TF-06` — large still with a caption strip

- **Anatomy (measured):** One large still occupying the content width with an overlay circle-arrow, then a caption strip with a long left sentence and a right-hand credit.
- **Measured:** band `near-black`, pad `56/160`, height 927px; heading -; body 16/23/400; still 1264×711; 141 words.
- **At 390:** height 557px, top pad 40px, single column.
- **Good for:** Evidence or a place photo with a single deep link.
- **Artifacts:** `img/TF-06-d.png`, `img/TF-06-m.png`
  · `html/TF-06.html`

## Blackstone marketing pages — `PE`

Source: blackstone.com/our-businesses/private-equity/

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `PE-00` | white | 48/120 | 284px | 56/84/300 | 18/27/300 | 0 (-) | 1 headings, 1 paras | 30 |
| `PE-01` | white | 0/104 | 646px | - | - | 1 (1264×542) | - | 0 |
| `PE-02` | white | 56/160 | 621px | 32/48/300 | 160/224/300 | 0 (-) | 3 headings, 4 paras | 24 |
| `PE-03` | near-black | 160/160 | 1488px | 48/72/300 | 18/27/300 | 1 (624×832) | 5 headings, 3 paras | 125 |
| `PE-04` | white | 160/160 | 2076px | 24/36/300 | 18/27/300 | 0 (-) | 5 headings, 4 paras | 343 |
| `PE-05` | white | 16/160 | 484px | 24/36/300 | 18/27/300 | 0 (-) | 3 headings, 3 paras | 166 |
| `PE-06` | white | 56/160 | 1183px | 24/36/300 | 18/27/300 | 0 (-) | 4 headings, 3 paras | 248 |
| `PE-07` | near-black | 160/160 | 723px | - | 40/60/300 | 1 (304×403) | 3 paras | 30 |

### `PE-00` — page header: title + standfirst (same as TF-00)

- **Anatomy (measured):** H1 columns 1–4 at 56/84/300, lead columns 10–16 at 18/27/300. Wide empty middle.
- **Measured:** band `white`, pad `48/120`, height 284px; heading 56/84/300; body 18/27/300; still -; 30 words.
- **At 390:** height 347px, top pad 40px, single column.
- **Good for:** Inner-page opening with a short lead — the emptier variant.
- **Artifacts:** `img/PE-00-d.png`, `img/PE-00-m.png`
  · `html/PE-00.html`

### `PE-01` — full-bleed still

- **Anatomy (measured):** One 16:9 still across the content width, no copy.
- **Measured:** band `white`, pad `0/104`, height 646px; heading -; body -; still 1264×542; 0 words.
- **At 390:** height 477px, top pad 0px, single column.
- **Good for:** Pacing still.
- **Artifacts:** `img/PE-01-d.png`, `img/PE-01-m.png`
  · `html/PE-01.html`

### `PE-02` — stat row: label left, two figures right

- **Anatomy (measured):** A section label in columns 1–3, then two cells in columns 9–16: small-caps label above, 1px rule under it, then the value. Values sit below the fold of the crop at 220px+.
- **Measured:** band `white`, pad `56/160`, height 621px; heading 32/48/300; body 160/224/300; still -; 24 words.
- **At 390:** height 744px, top pad 40px, single column.
- **Good for:** Two or three hard numbers with a section label — the 'at a glance' shape.
- **Artifacts:** `img/PE-02-d.png`, `img/PE-02-m.png`
  · `html/PE-02.html`

### `PE-03` — dark claim band with one supporting paragraph

- **Anatomy (measured):** Near-black band. Claim left in columns 1–8 at 48/72/300. Right column 10–16: bold 18px sub-head, then body.
- **Measured:** band `near-black`, pad `160/160`, height 1488px; heading 48/72/300; body 18/27/300; still 624×832; 125 words.
- **At 390:** height 1793px, top pad 80px, single column.
- **Good for:** A single claim plus one dense paragraph of support.
- **Artifacts:** `img/PE-03-d.png`, `img/PE-03-m.png`
  · `html/PE-03.html`

### `PE-04` — 3-up media cards with circle-arrow links

- **Anatomy (measured):** H2 spanning the left half, then three cards: 16:9 still (352×198), 20px title, 16/24 body, circle-arrow link at the foot.
- **Measured:** band `white`, pad `160/160`, height 2076px; heading 24/36/300; body 18/27/300; still -; 343 words.
- **At 390:** height 3314px, top pad 80px, single column.
- **Good for:** Three portfolio cases / three products with imagery and one link each.
- **Artifacts:** `img/PE-04-d.png`, `img/PE-04-m.png`
  · `html/PE-04.html`

### `PE-05` — titled row directory (same as TF-03)

- **Anatomy (measured):** Three rows: 24px title + chevron, hairline between.
- **Measured:** band `white`, pad `16/160`, height 484px; heading 24/36/300; body 18/27/300; still -; 166 words.
- **At 390:** height 356px, top pad 16px, single column.
- **Good for:** Three-item version of the row directory.
- **Artifacts:** `img/PE-05-d.png`, `img/PE-05-m.png`
  · `html/PE-05.html`

### `PE-06` — news card row

- **Anatomy (measured):** Eyebrow + H2, then three cards: 16:9 still with a play badge, 18px title, 16/24 body, muted source line.
- **Measured:** band `white`, pad `56/160`, height 1183px; heading 24/36/300; body 18/27/300; still -; 248 words.
- **At 390:** height 2284px, top pad 40px, single column.
- **Good for:** Article/insight teasers.
- **Artifacts:** `img/PE-06-d.png`, `img/PE-06-m.png`
  · `html/PE-06.html`

### `PE-07` — full-bleed still with caption strip

- **Anatomy (measured):** Same as TF-01.
- **Measured:** band `near-black`, pad `160/160`, height 723px; heading -; body 40/60/300; still 304×403; 30 words.
- **At 390:** height 913px, top pad 80px, single column.
- **Good for:** Pacing still with one link.
- **Artifacts:** `img/PE-07-d.png`, `img/PE-07-m.png`
  · `html/PE-07.html`

## Blackstone PWS (perpetual funds) — `APM`

Source: blackstone.com/pws/accessing-private-markets/

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `APM-00` | white | 48/64 | 228px | 56/84/300 | 18/27/300 | 0 (-) | 1 headings, 1 paras | 19 |
| `APM-01` | white | 56/160 | 932px | 24/36/300 | 18/27/300 | 3 (352×198) | 4 headings, 3 paras | 121 |
| `APM-02` | near-black | 160/160 | 1669px | 40/60/300 | 18/27/300 | 1 (1264×586) | 2 headings, 3 paras, 3 list items | 244 |
| `APM-03` | white | 160/64 | 944px | 48/72/300 | 18/27/300 | 1 (704×397) | 1 headings, 3 paras | 79 |
| `APM-04` | white | 64/160 | 1020px | - | 18/27/300 | 1 (704×397) | 4 paras | 293 |
| `APM-05` | near-black | 160/160 | 999px | 48/72/300 | 18/27/300 | 1 (704×397) | 1 headings, 2 paras | 105 |
| `APM-06` | white | 160/160 | 1216px | 40/60/300 | 18/27/300 | 1 (1264×433) | 2 headings, 2 paras | 102 |
| `APM-07` | white | 56/88 | 540px | 40/60/300 | - | 1 (704×396) | 2 headings | 14 |
| `APM-08` | white | 56/160 | 598px | 48/72/300 | 18/27/300 | 0 (-) | 3 headings, 2 paras | 149 |
| `APM-09` | near-black | 160/160 | 1346px | 48/72/300 | - | 0 (-) | 8 headings | 39 |

### `APM-00` — page header with one download action

- **Anatomy (measured):** H1 at the left edge, a two-line standfirst in the right column, and a single 'Download Brochure' link with a circle-arrow under it. 19 words in the whole band.
- **Measured:** band `white`, pad `48/64`, height 228px; heading 56/84/300; body 18/27/300; still -; 19 words.
- **At 390:** height 383px, top pad 40px, single column.
- **Good for:** A title band on an editorial page where the one useful action is a download, not a form.
- **Artifacts:** `img/APM-00-d.png`, `img/APM-00-m.png`
  · `html/APM-00.html`

### `APM-01` — three numbered columns under a claim

- **Anatomy (measured):** Eyebrow + H2, then three columns across the 16 tracks: a 96px numeral (01 / 02 / 03), a 20px title, and a 16/24 paragraph. No cards, no rules between them.
- **Measured:** band `white`, pad `56/160`, height 932px; heading 24/36/300; body 18/27/300; still 352×198; 121 words.
- **At 390:** height 1781px, top pad 24px, single column.
- **Good for:** Three steps, three reasons, or three audience types — the numeral does the sequencing so the copy does not have to.
- **Artifacts:** `img/APM-01-d.png`, `img/APM-01-m.png`
  · `html/APM-01.html`

### `APM-02` — dark comparison matrix

- **Anatomy (measured):** Near-black band. H2 + one line, then a feature matrix: rows of capabilities down the left, product/route columns across, ticks and dashes in each cell with one column highlighted, plus a footnote in small type.
- **Measured:** band `near-black`, pad `160/160`, height 1669px; heading 40/60/300; body 18/27/300; still 1264×586; 244 words.
- **At 390:** height 1530px, top pad 80px, single column.
- **Good for:** Showing where several routes differ on the same axes. Only works when every cell can honestly be tick, dash or a short word.
- **Artifacts:** `img/APM-02-d.png`, `img/APM-02-m.png`
  · `html/APM-02.html`

### `APM-03` — claim + paragraph left, chart right

- **Anatomy (measured):** H3 and a paragraph in columns 1–6; a labelled chart exhibit in columns 9–16 with its own caption line.
- **Measured:** band `white`, pad `160/64`, height 944px; heading 48/72/300; body 18/27/300; still 704×397; 79 words.
- **At 390:** height 950px, top pad 80px, single column.
- **Good for:** One claim that a single chart proves. Never put two charts side by side here.
- **Artifacts:** `img/APM-03-d.png`, `img/APM-03-m.png`
  · `html/APM-03.html`

### `APM-04` — no-heading continuation: data table left, prose right

- **Anatomy (measured):** No H2 at all. A small data table in columns 1–7, a two-paragraph column in columns 10–16, and a footnote beneath in 12px.
- **Measured:** band `white`, pad `64/160`, height 1020px; heading -; body 18/27/300; still 704×397; 293 words.
- **At 390:** height 1459px, top pad 32px, single column.
- **Good for:** Continuing an argument from the band above. Use sparingly — a heading-less band hides its structure from scanning and from AI answers.
- **Artifacts:** `img/APM-04-d.png`, `img/APM-04-m.png`
  · `html/APM-04.html`

### `APM-05` — dark band: chart left, paragraph right

- **Anatomy (measured):** Near-black band. H3 + one lead line, a big chart exhibit in columns 1–9 with captions under the bars, a paragraph column in columns 11–16.
- **Measured:** band `near-black`, pad `160/160`, height 999px; heading 48/72/300; body 18/27/300; still 704×397; 105 words.
- **At 390:** height 1126px, top pad 80px, single column.
- **Good for:** A trend that needs one number read off a chart. Dark keeps the chart from looking like a dashboard widget.
- **Artifacts:** `img/APM-05-d.png`, `img/APM-05-m.png`
  · `html/APM-05.html`

### `APM-06` — claim + prose over a tick/cross matrix

- **Anatomy (measured):** H3, a paragraph, then a second paragraph, then a matrix whose cells hold circle-check icons, with column labels above and row labels down the side, and a note beneath.
- **Measured:** band `white`, pad `160/160`, height 1216px; heading 40/60/300; body 18/27/300; still 1264×433; 102 words.
- **At 390:** height 961px, top pad 80px, single column.
- **Good for:** Comparing a handful of options on several dimensions without writing a table of sentences.
- **Artifacts:** `img/APM-06-d.png`, `img/APM-06-m.png`
  · `html/APM-06.html`

### `APM-07` — brochure lead magnet

- **Anatomy (measured):** H2 'Read the complete …' at the left, two brochure covers as stills on the right, and one 'Download Brochure' circle-arrow link.
- **Measured:** band `white`, pad `56/88`, height 540px; heading 40/60/300; body -; still 704×396; 14 words.
- **At 390:** height 521px, top pad 40px, single column.
- **Good for:** One downloadable asset with a preview of what it is.
- **Artifacts:** `img/APM-07-d.png`, `img/APM-07-m.png`
  · `html/APM-07.html`

### `APM-08` — FAQ accordion

- **Anatomy (measured):** H3 'Frequently Asked Questions', then hairline rows: question at 16px with a chevron at the right, closed by default.
- **Measured:** band `white`, pad `56/160`, height 598px; heading 48/72/300; body 18/27/300; still -; 149 words.
- **At 390:** height 462px, top pad 40px, single column.
- **Good for:** FAQ. The only place an accordion is honest on this site, because the answer is a detail, not the argument.
- **Artifacts:** `img/APM-08-d.png`, `img/APM-08-m.png`
  · `html/APM-08.html`

### `APM-09` — dark link directory

- **Anatomy (measured):** Near-black band. H3 'Explore Essentials' + seven full-width rows on hairlines, each a label with a 44px outline circle-chevron at the right edge.
- **Measured:** band `near-black`, pad `160/160`, height 1346px; heading 48/72/300; body -; still -; 39 words.
- **At 390:** height 1114px, top pad 80px, single column.
- **Good for:** A menu of deeper pages when there are more than four of them.
- **Artifacts:** `img/APM-09-d.png`, `img/APM-09-m.png`
  · `html/APM-09.html`

## Blackstone investor relations — `IR`

Source: ir.blackstone.com/overview/default.aspx

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `IR-00` | near-black | 0/0 | 2546px | 55/57/400 | 20/30/300 | 0 (-) | 10 headings, 10 paras, 30 list items | 2356 |

### `IR-00` — investor overview: H1 + lead + 3 figures + modules

- **Anatomy (measured):** H1 + one lead paragraph, then three figures in a row (label above, 40px value, muted caption), then H4 modules (Latest Financials, Shareholder Relations two-column).
- **Measured:** band `near-black`, pad `0/0`, height 2546px; heading 55/57/400; body 20/30/300; still -; 2356 words.
- **At 390:** height 3892px, top pad 0px, single column.
- **Good for:** A stats-led summary page. Note: the rest of this microsite's modules are JavaScript-populated, so only this block was measurable.
- **Artifacts:** `img/IR-00-d.png`, `no mobile crop`
  · `html/IR-00.html`

## BMACX (product microsite) — `BMX`

Source: bmacx.com/why-blackstone/

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `BMX-00` | white | 48/120 | 252px | 56/84/300 | - | 0 (-) | 1 headings | 2 |
| `BMX-01` | white | 0/104 | 982px | 40/60/300 | 20/30/300 | 1 (1264×542) | 1 headings, 1 paras | 51 |
| `BMX-02` | near-black | 160/64 | 921px | 40/60/300 | 18/27/300 | 1 (704×396) | 5 headings, 4 paras | 69 |
| `BMX-03` | near-black | 64/64 | 524px | 40/60/300 | 18/27/300 | 1 (704×396) | 4 headings, 3 paras | 42 |
| `BMX-04` | near-black | 64/64 | 524px | 40/60/300 | 18/27/300 | 1 (704×396) | 4 headings, 3 paras | 16 |
| `BMX-05` | near-black | 64/64 | 524px | 40/60/300 | 18/27/300 | 1 (704×396) | 4 headings, 3 paras | 31 |
| `BMX-06` | near-black | 64/160 | 620px | 40/60/300 | 18/27/300 | 1 (704×396) | 4 headings, 3 paras | 21 |
| `BMX-07` | white | 160/160 | 750px | - | 40/60/300 | 1 (304×403) | 3 paras | 37 |
| `BMX-08` | white | 56/160 | 612px | 40/60/300 | - | 1 (704×396) | 2 headings | 24 |
| `BMX-09` | white | 56/160 | 606px | 48/72/300 | - | 0 (-) | 3 headings | 11 |
| `BMX-10` | near-black | 160/160 | 464px | 40/72/300 | 16/24/300 | 0 (-) | 3 headings, 2 paras, 6 list items | 1203 |

### `BMX-00` — page header (two words)

- **Anatomy (measured):** H1 only, then whitespace.
- **Measured:** band `white`, pad `48/120`, height 252px; heading 56/84/300; body -; still -; 2 words.
- **At 390:** height 180px, top pad 40px, single column.
- **Good for:** A title band on a sparse page.
- **Artifacts:** `img/BMX-00-d.png`, `img/BMX-00-m.png`
  · `html/BMX-00.html`

### `BMX-01` — image + two-column claim/paragraph

- **Anatomy (measured):** 16:9 still across the content width, then 28px claim in columns 5–8 and 16/24 paragraph in columns 9–16.
- **Measured:** band `white`, pad `0/104`, height 982px; heading 40/60/300; body 20/30/300; still 1264×542; 51 words.
- **At 390:** height 718px, top pad 0px, single column.
- **Good for:** A claim that needs one paragraph of support under a single still.
- **Artifacts:** `img/BMX-01-d.png`, `img/BMX-01-m.png`
  · `html/BMX-01.html`

### `BMX-02` — dark claim + paragraph + figure

- **Anatomy (measured):** Near-black band. 24px claim in columns 3–5, paragraph in columns 8–14, then a small-caps label + 56px figure bottom-left.
- **Measured:** band `near-black`, pad `160/64`, height 921px; heading 40/60/300; body 18/27/300; still 704×396; 69 words.
- **At 390:** height 1041px, top pad 80px, single column.
- **Good for:** A claim, its support, and one number — all in one dark band.
- **Artifacts:** `img/BMX-02-d.png`, `img/BMX-02-m.png`
  · `html/BMX-02.html`

### `BMX-03` — stat card (one of three)

- **Anatomy (measured):** Dark 1/3 column: 20px title, one 16/24 line, then a small-caps label over a 56px figure.
- **Measured:** band `near-black`, pad `64/64`, height 524px; heading 40/60/300; body 18/27/300; still 704×396; 42 words.
- **At 390:** height 614px, top pad 32px, single column.
- **Good for:** A three-up of claim + metric. Only works when each item really has a number.
- **Artifacts:** `img/BMX-03-d.png`, `img/BMX-03-m.png`
  · `html/BMX-03.html`

### `BMX-04` — stat card (one of three)

- **Anatomy (measured):** Same as BMX-03.
- **Measured:** band `near-black`, pad `64/64`, height 524px; heading 40/60/300; body 18/27/300; still 704×396; 16 words.
- **At 390:** height 560px, top pad 32px, single column.
- **Good for:** Stat trio member.
- **Artifacts:** `img/BMX-04-d.png`, `img/BMX-04-m.png`
  · `html/BMX-04.html`

### `BMX-05` — stat card (one of three)

- **Anatomy (measured):** Same as BMX-03.
- **Measured:** band `near-black`, pad `64/64`, height 524px; heading 40/60/300; body 18/27/300; still 704×396; 31 words.
- **At 390:** height 587px, top pad 32px, single column.
- **Good for:** Stat trio member.
- **Artifacts:** `img/BMX-05-d.png`, `img/BMX-05-m.png`
  · `html/BMX-05.html`

### `BMX-06` — stat card (one of three)

- **Anatomy (measured):** Same as BMX-03.
- **Measured:** band `near-black`, pad `64/160`, height 620px; heading 40/60/300; body 18/27/300; still 704×396; 21 words.
- **At 390:** height 608px, top pad 32px, single column.
- **Good for:** Stat trio member.
- **Artifacts:** `img/BMX-06-d.png`, `img/BMX-06-m.png`
  · `html/BMX-06.html`

### `BMX-07` — continuation band

- **Anatomy (measured):** Copy continues from the band above with no new heading.
- **Measured:** band `white`, pad `160/160`, height 750px; heading -; body 40/60/300; still 304×403; 37 words.
- **At 390:** height 1009px, top pad 80px, single column.
- **Good for:** Continuation only.
- **Artifacts:** `img/BMX-07-d.png`, `img/BMX-07-m.png`
  · `html/BMX-07.html`

### `BMX-08` — news teaser band

- **Anatomy (measured):** One line of copy + one still + link.
- **Measured:** band `white`, pad `56/160`, height 612px; heading 40/60/300; body -; still 704×396; 24 words.
- **At 390:** height 593px, top pad 40px, single column.
- **Good for:** A single news item.
- **Artifacts:** `img/BMX-08-d.png`, `img/BMX-08-m.png`
  · `html/BMX-08.html`

### `BMX-09` — accordion with circle-plus icons

- **Anatomy (measured):** Rows spanning columns 3–14: 24px label, 44px outline circle-plus right, hairline between.
- **Measured:** band `white`, pad `56/160`, height 606px; heading 48/72/300; body -; still -; 11 words.
- **At 390:** height 462px, top pad 40px, single column.
- **Good for:** A short directory where each row opens a longer answer.
- **Artifacts:** `img/BMX-09-d.png`, `img/BMX-09-m.png`
  · `html/BMX-09.html`

### `BMX-10` — disclosure: title left, rows right

- **Anatomy (measured):** Title in columns 1–4, rows in columns 6–16: label + chevron, hairline between.
- **Measured:** band `near-black`, pad `160/160`, height 464px; heading 40/72/300; body 16/24/300; still -; 1203 words.
- **At 390:** height 428px, top pad 80px, single column.
- **Good for:** Legal or long-tail content that must stay findable but quiet.
- **Artifacts:** `img/BMX-10-d.png`, `img/BMX-10-m.png`
  · `html/BMX-10.html`

## Blackstone home — `HOME`

Source: blackstone.com/ (home, added on Ling's instruction)

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `HOME-00` | near-black | 48/120 | 337px | 72/72/300 | 24/36/300 | 0 (-) | 1 headings, 1 paras | 13 |
| `HOME-01` | near-black | 0/104 | 922px | 40/60/300 | 20/30/300 | 6 (1264×542) | 6 headings, 6 paras, 2 list items | 157 |
| `HOME-02` | white | 160/160 | 905px | 56/84/300 | 16/24/400 | 0 (-) | 2 headings, 5 paras | 83 |
| `HOME-03` | near-black | 160/160 | 951px | 48/72/300 | 16/24/400 | 0 (-) | 1 headings, 5 paras | 59 |
| `HOME-04` | near-black | 0/160 | 470px | - | 192/250/300 | 0 (-) | 4 paras | 19 |
| `HOME-05` | white | 160/160 | 813px | 40/60/300 | 16/24/400 | 1 (304×405) | 1 headings, 2 paras | 19 |
| `HOME-06` | white | 56/160 | 1123px | 48/72/300 | 16/24/400 | 4 (298×397) | 5 headings, 9 paras | 67 |
| `HOME-07` | near-black | 160/160 | 1083px | 48/72/300 | 18/27/300 | 0 (-) | 2 headings, 1 paras, 60 list items | 150 |

### `HOME-00` — hero: display line left, small type right

- **Anatomy (measured):** Near-black band. Two-line display H1 at the left edge, one 16px paragraph top-right in columns 12–16, no CTA, no image.
- **Measured:** band `near-black`, pad `48/120`, height 337px; heading 72/72/300; body 24/36/300; still -; 13 words.
- **At 390:** height 325px, top pad 40px, single column.
- **Good for:** A statement opening — the emptiest, most confident hero in the library.
- **Artifacts:** `img/HOME-00-d.png`, `img/HOME-00-m.png`
  · `html/HOME-00.html`

### `HOME-01` — promo carousel: still with floating card

- **Anatomy (measured):** Near-black band. 16:9 still with a white card floating over it, then title left / paragraph right beneath, dot pagination + prev/next circles.
- **Measured:** band `near-black`, pad `0/104`, height 922px; heading 40/60/300; body 20/30/300; still 1264×542; 157 words.
- **At 390:** height 672px, top pad 0px, single column.
- **Good for:** A featured story that rotates; heavy, use once per page at most.
- **Artifacts:** `img/HOME-01-d.png`, `img/HOME-01-m.png`
  · `html/HOME-01.html`

### `HOME-02` — centred claim + stat pair

- **Anatomy (measured):** Centred eyebrow with the 48px rule above, centred claim at 48/72/300, then two columns: small label + 16/24 paragraph left; 56px figure + 12px muted caption right; circle-arrow Learn more under the paragraph.
- **Measured:** band `white`, pad `160/160`, height 905px; heading 56/84/300; body 16/24/400; still -; 83 words.
- **At 390:** height 1045px, top pad 80px, single column.
- **Good for:** The strongest 'claim + one number' band: centred claim, asymmetric support.
- **Artifacts:** `img/HOME-02-d.png`, `img/HOME-02-m.png`
  · `html/HOME-02.html`

### `HOME-03` — two-up prose block

- **Anatomy (measured):** Heading stack left in columns 1–5, a bordered panel of rows right in columns 9–15.
- **Measured:** band `near-black`, pad `160/160`, height 951px; heading 48/72/300; body 16/24/400; still -; 59 words.
- **At 390:** height 1214px, top pad 80px, single column.
- **Good for:** A claim with three short linked answers.
- **Artifacts:** `img/HOME-03-d.png`, `img/HOME-03-m.png`
  · `html/HOME-03.html`

### `HOME-04` — marquee band

- **Anatomy (measured):** One giant display line clipped at both edges.
- **Measured:** band `near-black`, pad `0/160`, height 470px; heading -; body 192/250/300; still -; 19 words.
- **At 390:** height 222px, top pad 0px, single column.
- **Good for:** Brand moment. Not for information.
- **Artifacts:** `img/HOME-04-d.png`, `img/HOME-04-m.png`
  · `html/HOME-04.html`

### `HOME-05` — announcement band

- **Anatomy (measured):** Eyebrow + 28px title + one link, 19 words.
- **Measured:** band `white`, pad `160/160`, height 813px; heading 40/60/300; body 16/24/400; still 304×405; 19 words.
- **At 390:** height 1062px, top pad 80px, single column.
- **Good for:** One dated announcement.
- **Artifacts:** `img/HOME-05-d.png`, `img/HOME-05-m.png`
  · `html/HOME-05.html`

### `HOME-06` — featured news 4-up

- **Anatomy (measured):** H2 + four cards in a row with 16:9 stills and 16px titles.
- **Measured:** band `white`, pad `56/160`, height 1123px; heading 48/72/300; body 16/24/400; still 298×397; 67 words.
- **At 390:** height 1016px, top pad 40px, single column.
- **Good for:** Four teasers in one row.
- **Artifacts:** `img/HOME-06-d.png`, `img/HOME-06-m.png`
  · `html/HOME-06.html`

### `HOME-07` — email capture: heading left, form right

- **Anatomy (measured):** Near-black band. H2 + line left in columns 1–6, 6-field form right in columns 9–14.
- **Measured:** band `near-black`, pad `160/160`, height 1083px; heading 48/72/300; body 18/27/300; still -; 150 words.
- **At 390:** height 1025px, top pad 80px, single column.
- **Good for:** A capture form. Not for a funding page.
- **Artifacts:** `img/HOME-07-d.png`, `img/HOME-07-m.png`
  · `html/HOME-07.html`

## Falcon home (approved) — `FAL`

Source: falconequity.ai (home, approved design — added on Ling's instruction)

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `FAL-00` | near-black | 48/120 | 1312px | 72/72/300 | 24/36/300 | 1 (1425×610) | 2 headings, 2 paras | 35 |
| `FAL-01` | white | 160/160 | 540px | - | 32/48/300 | 0 (-) | 6 paras | 7 |
| `FAL-02` | white | 56/160 | 1580px | 48/60/400 | 13/20/400 | 0 (-) | 1 headings, 1 paras, 7 list items | 145 |
| `FAL-03` | white | 56/160 | 904px | - | 16/24/400 | 3 (304×600) | 8 paras | 116 |
| `FAL-04` | white | 56/160 | 830px | 40/50/400 | 13/20/400 | 12 (704×396) | 10 headings, 13 paras, 12 list items | 219 |
| `FAL-05` | near-black | 160/160 | 1402px | 48/72/400 | 13/20/400 | 0 (-) | 4 headings, 5 paras, 3 list items | 77 |
| `FAL-06` | white | 160/160 | 1107px | 48/72/400 | 16/24/400 | 3 (352×198) | 4 headings, 4 paras | 102 |

### `FAL-00` — Falcon hero: display H1 + aside + full-bleed still + caption bar

- **Anatomy (measured):** Darker band. Two-line display H1 left (32→72px, tracking 0.008em), aside end-aligned in columns 11–16, then the still bleeds to viewport width (1800/771), then a caption bar with H2 + body + circle-arrow CTA.
- **Measured:** band `near-black`, pad `48/120`, height 1312px; heading 72/72/300; body 24/36/300; still 1425×610; 35 words.
- **At 390:** height 815px, top pad 32px, single column.
- **Good for:** The only hero Falcon currently uses. One still, one CTA, no disclaimer.
- **Artifacts:** `img/FAL-00-d.png`, `img/FAL-00-m.png`
  · `html/FAL-00.html`

### `FAL-01` — Falcon stats: featured + two sides

- **Anatomy (measured):** Featured figure at 80–160px with its label above; two side stats with a 1px ink rule above each value.
- **Measured:** band `white`, pad `160/160`, height 540px; heading -; body 32/48/300; still -; 7 words.
- **At 390:** height 642px, top pad 80px, single column.
- **Good for:** Three confirmed stats from STATS. Never invent one.
- **Artifacts:** `img/FAL-01-d.png`, `img/FAL-01-m.png`
  · `html/FAL-01.html`

### `FAL-02` — Falcon services link list

- **Anatomy (measured):** Eyebrow + H2, then 8 full-width rows on 2px ink rules: title + muted range at columns 1–6, teaser at 8, circle at 12.
- **Measured:** band `white`, pad `56/160`, height 1580px; heading 48/60/400; body 13/20/400; still -; 145 words.
- **At 390:** height 1937px, top pad 40px, single column.
- **Good for:** A seven/eight-product menu where each row is a real route.
- **Artifacts:** `img/FAL-02-d.png`, `img/FAL-02-m.png`
  · `html/FAL-02.html`

### `FAL-03` — Falcon testimonial: serif quote + 3:4 still

- **Anatomy (measured):** Display quote left at 32–40px, 3:4 still right, 'Falcon client' credit, prev/next circles.
- **Measured:** band `white`, pad `56/160`, height 904px; heading -; body 16/24/400; still 304×600; 116 words.
- **At 390:** height 1197px, top pad 40px, single column.
- **Good for:** One real quote.
- **Artifacts:** `img/FAL-03-d.png`, `img/FAL-03-m.png`
  · `html/FAL-03.html`

### `FAL-04` — Falcon industries: dropdown + panel

- **Anatomy (measured):** Lilac Light field with a select, selected row in Lilac Darker, panel with title + blurbs + circle-arrow + 16:9 still.
- **Measured:** band `white`, pad `56/160`, height 830px; heading 40/50/400; body 13/20/400; still 704×396; 219 words.
- **At 390:** height 830px, top pad 40px, single column.
- **Good for:** A selector for 12 sectors.
- **Artifacts:** `img/FAL-04-d.png`, `img/FAL-04-m.png`
  · `html/FAL-04.html`

### `FAL-05` — Falcon why: dark band, heading left, numbered steps right

- **Anatomy (measured):** Darker band. Eyebrow + H2 + body + circle-arrow left; three numbered steps right on 1.5px rules; marquee under.
- **Measured:** band `near-black`, pad `160/160`, height 1402px; heading 48/72/400; body 13/20/400; still -; 77 words.
- **At 390:** height 1368px, top pad 80px, single column.
- **Good for:** Three process steps.
- **Artifacts:** `img/FAL-05-d.png`, `img/FAL-05-m.png`
  · `html/FAL-05.html`

### `FAL-06` — Falcon insights: three cards

- **Anatomy (measured):** Eyebrow + H2, then three 16:9 cards with titles and a circle-arrow.
- **Measured:** band `white`, pad `160/160`, height 1107px; heading 48/72/400; body 16/24/400; still 352×198; 102 words.
- **At 390:** height 1965px, top pad 80px, single column.
- **Good for:** Three published posts.
- **Artifacts:** `img/FAL-06-d.png`, `img/FAL-06-m.png`
  · `html/FAL-06.html`

## Blackstone — Our People (`OP`)

Source: blackstone.com/the-firm/our-people/ — captured live in Chrome over CDP on 23 Oct 2026 (page title
`Our People - Blackstone`; curl and headless Chrome both get the Cloudflare interstitial).

This page has **five bands and no dark section, no imagery, and no CTA anywhere** — it is a roster
page, and the whole design argument is type, rules and white space. Site header and footer were
deliberately excluded from the capture: they are page chrome, not a section layout.

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `OP-00` | white | 48/120 | 252px | 56/84/300 | - | 0 (-) | 1 heading | 2 |
| `OP-01` | white | 56/160 | 568px | 48/72/300 | 14/21/400 | 0 (-) | 6 headings, 5 person rows | 33 |
| `OP-02` | white | 56/160 | 344px | 48/72/300 | - | 0 (-) | 1 heading | 2 |
| `OP-03` | white | 56/160 | 663px | 48/72/300 | 14/21/400 | 0 (-) | 6 headings, 5 person rows | 55 |
| `OP-04` | white | 0/0 | 1291px | 32/48/300 | 18/27/300 | 0 (-) | 1 heading, 10 table rows, 3 dots | 126 |

### `OP-00` — page header: the title alone

- **Anatomy (measured, verified against the crop):** the H1 sits at the container's left edge, columns 1–7 at 56/84 weight 300 (Sanomat-like display face). Nothing else in the band: no standfirst, no eyebrow, no rule, no breadcrumb, no CTA. 48px top pad, 120px bottom — the same header rhythm as `TF-00`, minus its right-hand lead.
- **Measured:** band `white`, pad `48/120`, height 252px (= 48 + 84 + 120); heading 56/84/300; body -; still -; 2 words.
- **At 390:** height 180px, pad 40/80, heading 40/60/300, single column.
- **Good for:** opening a page whose answer is the content itself — a roster, an index, a lookup page. Do not add a standfirst here unless the page has an argument to make.
- **Duplicate of:** `BMX-00` (two-word title band) / `TF-00` without the standfirst — this entry confirms the shape, it does not add one.
- **Artifacts:** `img/OP-00-d.png`, `img/OP-00-m.png`
  · `html/OP-00.html`

### `OP-01` — 4-up name + role roster, no portraits

- **Anatomy (measured, verified against the crop):** H3 claim left at 48/72 weight 300 (tracking 0.384px), then a roster grid: **4 tracks of 244px, column gap 96px, row gap 64px** — 4 × 244 + 3 × 96 = **1264**, the full container. A fifth item wraps to a second row at the same x as the first. Each item is 244×56: a **name at 18/27 weight 300** (tracking 0.144px) over its **role at 14/21 weight 400** (tracking 0.32px), 10px between them. No rules, no card chrome, no portraits. The whole item is a `role="link"` div with `tabindex="0"`, id and anchor = the name slug (`#Stephen-A-Schwarzman`), so it is keyboard-focusable in place.
- **Measured:** band `white`, pad `56/160`, height 568px; heading 48/72/300; body 14/21/400; still -; 33 words. Items at x = 81 / 421 / 761 / 1101, second row y = 808 (56 + 64 row gap).
- **At 390:** height 876px, pad 40/80, claim 32/48/300, **single column at 328 wide** with the same 64px row gap — the roster reads as a list, name over role.
- **Good for:** a leadership, team or advisor list of 3–8 people where the name is the content and no photograph exists. This is the library's cleanest "many small units under one claim" band.
- **New shape.** `TF-05` is 3-up *prose*; `TF-03`/`PE-05` are full-width row directories with chevrons. Neither is a 4-track roster of name + role.
- **Hazard:** the reference marks two names with an asterisk and **no footnote exists anywhere on the page**. Don't copy the marker unless you ship the note.
- **Artifacts:** `img/OP-01-d.png`, `img/OP-01-m.png`
  · `html/OP-01.html`

### `OP-02` — heading-only band (do not ship as-is)

- **Anatomy (measured, verified against the crop):** an H3 claim at 48/72/300 in the same position as `OP-01`, with **nothing beneath it** — the live DOM contains the header block and an empty roster wrapper. 344px of band containing one line of text. Its siblings on this page render five people each; this one renders none.
- **Measured:** band `white`, pad `56/160`, height 344px; heading 48/72/300; body -; still -; 2 words.
- **At 390:** height 208px, pad 40/80, claim 32/48/300.
- **Good for:** nothing on its own. Recorded because the *spacing* is reusable — 56px above the claim, 160px below — and because a capture that silently accepted it would file an empty band as a layout.
- **Read it as a warning:** if the roster is populated by script, add people or cut the band; a heading floating over 160px of white reads as a broken page, not as restraint.
- **Artifacts:** `img/OP-02-d.png`, `img/OP-02-m.png`
  · `html/OP-02.html`

### `OP-03` — same roster, with bio-length roles

- **Anatomy (measured, verified against the crop):** identical grid and type to `OP-01` — 244px tracks, 96/64 gaps, name 18/27/300 over role 14/21/400 — but the roles are real titles that run **two to three lines** ("Chairman Emeritus & Former Chief Executive Officer, Ogilvy & Mather Worldwide"), so the band grows from 568px to 663px while every item stays 56px of name + role block. In this section the row gap is `96px` only, because the five items still fit one row.
- **Measured:** band `white`, pad `56/160`, height 663px; heading 48/72/300; body 14/21/400; still -; 55 words.
- **At 390:** height 948px, pad 40/80, single column, roles wrapping to two lines.
- **Good for:** the same roster when each role needs a sentence — and the honest test of whether your grid holds when one item's role is three lines while its neighbour's is one.
- **Duplicate of:** `OP-01` (same shape, longer copy). **Note:** the markup carries a `has-image` class and **no portrait ever paints** — don't infer photography from the class name, and don't add photos to a roster that was designed without them.
- **Artifacts:** `img/OP-03-d.png`, `img/OP-03-m.png`
  · `html/OP-03.html`

### `OP-04` — search + filter + 5-column record table, load-more and dots

The library's **first real data-table band**, and the most transferable thing on the page.

- **Anatomy (measured, verified against the crop):** an H4 "Directory" at 32/48/300 in columns 1–8 (704px box), then a **search field 464×66** at the container's left edge — fill `rgb(231,234,238)`, 1px `rgba(0,0,0,.2)` border, **radius 0**, padding 16/24, placeholder "Search", 32×32 magnifier SVG at its right end. A **Filter** control sits on the far right of the same row (88×24 at x = 1257) with a 27×20 sliders SVG rendered 22×16. Under them, a table 1264 wide inside an `overflow-x: auto` wrapper: header row **121px tall** (its top padding is the head gap), labels 16/24 weight 400, a **1px `rgb(220,223,229)` rule** beneath. Five columns — **Name 312 | Title 264 | Business Unit 272 | Location 329 | action 87** — every cell padded 24/40/24/0, rows **76px**, body copy 18/27.04 weight 300, a 1px `#dcdfe5` hairline between rows, the name cell marked up as `<th scope="row">`, and "Learn More" in the action cell at 18/400 (the whole row is the click target, `aria-expanded="false"`). Ten rows render; the rest arrive from a **foot band 1264×240** (pad 40/0/160): a second Filter at the left, then centred "Load More" (16/24/300) + a **40×40 circle-arrow** whose SVG path is a right-pointing arrow (CSS rotates it to down), a 1px 40px divider, and a **dot nav 80×40** — active dot 24×24 (12px filled core inside a ring), the others 12×12 at 28px pitch.
- **Measured:** band `white`, no band padding of its own (its space comes from `margin-bottom`), height 1291px (table 1019 + foot 240 + 32); heading 32/48/300; body 18/27.04/300; still -; 126 words.
- **At 390 — the table is replaced, not reflowed.** Measured on a fresh 390 load: the desktop `<table>` reports **height 0 with all five columns at 0px**, and a second component renders instead — `table.bx-accordion__table` (328 wide): caption (H4 36 + search 328×45), a 51px filter row, a 72px "Name" header, then **10 rows of 74px**, each just the name (16/300) and a **40px circle-down**. Opening a row takes it from **74px to 461px** and prints label/value pairs — Title, Business Unit, Location as 16/400 labels over 16/300 values in 40px rows — then "Learn More" at 18/400. The foot stacks: Filter 92px, then the Load More row 160px.
- **Good for:** any index of records where each row has one destination — team, offices, portfolio, filings, glossary. The reusable idea is the **desktop table → mobile accordion swap**: at 390 the column headings become labels inside the opened row, so nothing is squashed into a 328px table.
- **Capture caution:** the rows are **script-populated**. A fresh 390 load comes back with an empty table (10 `<tr>` in the DOM, none visible), so a mobile-first capture measures nothing — capture desktop first, then resize in the same session, or you will record the empty state as the design. The section also **ships every person's full biography inline**, hidden: 863 `bx-people__bio__biocontent` blocks in the captured `outerHTML` (2.0 MB, 1 726 `<img>`), which is what the row accordion opens. The stored `html/OP-04.html` keeps the first two bios and the full table shell; the blob is trimmed with a comment saying so.
- **Artifacts:** `img/OP-04-d.png`, `img/OP-04-m.png`
  · `html/OP-04.html`

### What this batch adds

| shape | id | status | use it for |
| --- | --- | --- | --- |
| title-only page header | `OP-00` | duplicate of `BMX-00` / `TF-00` | opening a roster/index page with no lead |
| 4-up name + role roster, no portraits | `OP-01` | **new** | 3–8 people, name + role, no photography |
| heading over an empty roster | `OP-02` | **new (as a hazard)** | never ship; populate it or cut the band |
| roster with bio-length roles | `OP-03` | duplicate of `OP-01` | same grid when roles run 2–3 lines |
| search + filter + 5-col table + load-more + dots | `OP-04` | **new — first data-table band** | any record index; also the table→accordion mobile swap |

Two things this page does that the rest of the library does not: **it never uses a dark band or an
image**, and **every band is separated by white space rather than by a rule or a colour change**. If a
plan cites this page, the page it builds should be prepared to be that quiet.

## What this library is missing, on purpose

- **Data tables were missing until `OP-04`.** Before 23 Oct 2026 no Blackstone page in this library had a table; the Our People directory changed that. Its five-column geometry (312 / 264 / 272 / 329 / 87 inside 1264, 76px rows, 1px `#dcdfe5` hairlines) is now the donor for a tabular band — but its columns hold *attributes* (name, title, unit, location) while ours hold interpretive prose, so a plan that borrows it must say which parts are geometry and which parts are copy shape.
- **The IR microsite is mostly JavaScript-populated.** Only its overview block (`IR-00`) could be measured; its financial tables and press-release modules return empty shells to any extractor. It also has **no usable mobile crop**: its cookie wall and header containers sit inside the same wrappers as the content, so removing either dissolves the page. `IR-00` has desktop crop + both sets of measurements, and says so.
- **PWS pages carry a legal-gate modal** that covers the content until dismissed; every APM crop here was taken after removing it, so the crops show the section, not the gate.
