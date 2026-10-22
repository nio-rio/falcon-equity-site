# Blackstone section library — measured from live pages

Every entry below is one real section on one live page, captured in **Google Chrome on Ling's Mac on 22 Oct 2026** — not from an archive, not from a class name. Geometry, type sizes, band colours and item counts are read out of `getComputedStyle` / `getBoundingClientRect` at 1440px, with a second pass at 390px.

**How to pick:** count your own items and types first (figures, titled rows, stills, paragraphs, links), then find the id whose *content shape* matches. Steal its grid, pads and type sizes. If the shape is one item short or long, say so in the plan and adapt — never force copy into a prettier block that reads wrong.

Artifacts per id: `img/{id}-d.png` (desktop crop), `img/{id}-m.png` (mobile crop), `html/{id}.html` (the live outerHTML, so the markup can be inspected rather than guessed), and this entry's measured values.

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

**53 sections** total.

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
- **Artifacts:** `img/TF-00-d.png`, `img/TF-06-m.png`, `html/TF-00.html`

### `TF-01` — full-bleed still with a credit/caption strip

- **Anatomy (measured):** One 16:9 still across the full 1264 content width, then a strip below: long caption sentence left (cols 1–10), source credit + one circle-arrow link right.
- **Measured:** band `white`, pad `0/104`, height 646px; heading -; body -; still 1264×542; 0 words.
- **At 390:** height 477px, top pad 0px, single column.
- **Good for:** A single proof image with one sentence of context and one link — not a hero.
- **Artifacts:** `img/TF-01-d.png`, `img/TF-06-m.png`, `html/TF-01.html`

### `TF-02` — dark claim band with three titled rows in the right column

- **Anatomy (measured):** Near-black band. Claim headline left in columns 1–8 at 48/72/300. Three rows stacked in columns 10–16, each a 20px title over a 18/27 body, separated by 1px rules at 16% white.
- **Measured:** band `near-black`, pad `160/160`, height 1488px; heading 48/72/300; body 18/27/300; still 624×832; 89 words.
- **At 390:** height 1610px, top pad 80px, single column.
- **Good for:** Three short supporting arguments that read *beside* a claim, not under it. The strongest Blackstone signature band.
- **Artifacts:** `img/TF-02-d.png`, `img/TF-06-m.png`, `html/TF-02.html`

### `TF-03` — titled row directory with chevrons

- **Anatomy (measured):** Eyebrow + H2 top-left. Four full-width rows starting at column 5: 24px title, chevron right, hairline between. Row body opens on click.
- **Measured:** band `white`, pad `160/160`, height 1126px; heading 48/72/300; body 18/27/300; still -; 145 words.
- **At 390:** height 933px, top pad 80px, single column.
- **Good for:** A directory of four audiences / four answers where the titles alone carry the scan.
- **Artifacts:** `img/TF-03-d.png`, `img/TF-06-m.png`, `html/TF-03.html`

### `TF-04` — media band only

- **Anatomy (measured):** A single full-bleed still (or video) with no heading and no copy above or below.
- **Measured:** band `near-black`, pad `160/160`, height 906px; heading -; body 40/60/300; still 304×405; 68 words.
- **At 390:** height 1131px, top pad 80px, single column.
- **Good for:** A breather between two arguments; pacing, not information.
- **Artifacts:** `img/TF-04-d.png`, `img/TF-06-m.png`, `html/TF-04.html`

### `TF-05` — 3-up titled prose columns, no card chrome

- **Anatomy (measured):** Eyebrow with a 56px rule, then three columns of 20px title over 16/24 body, no fills, no borders, left-aligned; a second row of two items sits offset below.
- **Measured:** band `white`, pad `160/160`, height 1174px; heading 24/36/300; body 18/27/300; still -; 133 words.
- **At 390:** height 1707px, top pad 80px, single column.
- **Good for:** Three to six short principles or categories that need no images.
- **Artifacts:** `img/TF-05-d.png`, `img/TF-06-m.png`, `html/TF-05.html`

### `TF-06` — large still with a caption strip

- **Anatomy (measured):** One large still occupying the content width with an overlay circle-arrow, then a caption strip with a long left sentence and a right-hand credit.
- **Measured:** band `near-black`, pad `56/160`, height 927px; heading -; body 16/23/400; still 1264×711; 141 words.
- **At 390:** height 557px, top pad 40px, single column.
- **Good for:** Evidence or a place photo with a single deep link.
- **Artifacts:** `img/TF-06-d.png`, `img/TF-06-m.png`, `html/TF-06.html`

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
- **Artifacts:** `img/PE-00-d.png`, `img/PE-07-m.png`, `html/PE-00.html`

### `PE-01` — full-bleed still

- **Anatomy (measured):** One 16:9 still across the content width, no copy.
- **Measured:** band `white`, pad `0/104`, height 646px; heading -; body -; still 1264×542; 0 words.
- **At 390:** height 477px, top pad 0px, single column.
- **Good for:** Pacing still.
- **Artifacts:** `img/PE-01-d.png`, `img/PE-07-m.png`, `html/PE-01.html`

### `PE-02` — stat row: label left, two figures right

- **Anatomy (measured):** A section label in columns 1–3, then two cells in columns 9–16: small-caps label above, 1px rule under it, then the value. Values sit below the fold of the crop at 220px+.
- **Measured:** band `white`, pad `56/160`, height 621px; heading 32/48/300; body 160/224/300; still -; 24 words.
- **At 390:** height 744px, top pad 40px, single column.
- **Good for:** Two or three hard numbers with a section label — the 'at a glance' shape.
- **Artifacts:** `img/PE-02-d.png`, `img/PE-07-m.png`, `html/PE-02.html`

### `PE-03` — dark claim band with one supporting paragraph

- **Anatomy (measured):** Near-black band. Claim left in columns 1–8 at 48/72/300. Right column 10–16: bold 18px sub-head, then body.
- **Measured:** band `near-black`, pad `160/160`, height 1488px; heading 48/72/300; body 18/27/300; still 624×832; 125 words.
- **At 390:** height 1793px, top pad 80px, single column.
- **Good for:** A single claim plus one dense paragraph of support.
- **Artifacts:** `img/PE-03-d.png`, `img/PE-07-m.png`, `html/PE-03.html`

### `PE-04` — 3-up media cards with circle-arrow links

- **Anatomy (measured):** H2 spanning the left half, then three cards: 16:9 still (352×198), 20px title, 16/24 body, circle-arrow link at the foot.
- **Measured:** band `white`, pad `160/160`, height 2076px; heading 24/36/300; body 18/27/300; still -; 343 words.
- **At 390:** height 3314px, top pad 80px, single column.
- **Good for:** Three portfolio cases / three products with imagery and one link each.
- **Artifacts:** `img/PE-04-d.png`, `img/PE-07-m.png`, `html/PE-04.html`

### `PE-05` — titled row directory (same as TF-03)

- **Anatomy (measured):** Three rows: 24px title + chevron, hairline between.
- **Measured:** band `white`, pad `16/160`, height 484px; heading 24/36/300; body 18/27/300; still -; 166 words.
- **At 390:** height 356px, top pad 16px, single column.
- **Good for:** Three-item version of the row directory.
- **Artifacts:** `img/PE-05-d.png`, `img/PE-07-m.png`, `html/PE-05.html`

### `PE-06` — news card row

- **Anatomy (measured):** Eyebrow + H2, then three cards: 16:9 still with a play badge, 18px title, 16/24 body, muted source line.
- **Measured:** band `white`, pad `56/160`, height 1183px; heading 24/36/300; body 18/27/300; still -; 248 words.
- **At 390:** height 2284px, top pad 40px, single column.
- **Good for:** Article/insight teasers.
- **Artifacts:** `img/PE-06-d.png`, `img/PE-07-m.png`, `html/PE-06.html`

### `PE-07` — full-bleed still with caption strip

- **Anatomy (measured):** Same as TF-01.
- **Measured:** band `near-black`, pad `160/160`, height 723px; heading -; body 40/60/300; still 304×403; 30 words.
- **At 390:** height 913px, top pad 80px, single column.
- **Good for:** Pacing still with one link.
- **Artifacts:** `img/PE-07-d.png`, `img/PE-07-m.png`, `html/PE-07.html`

## Blackstone PWS (perpetual funds) — `APM`

Source: blackstone.com/pws/accessing-private-markets/

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `APM-00` | white | 48/64 | 228px | 56/84/300 | 18/27/300 | 0 (-) | 1 headings, 1 paras | 19 |
| `APM-01` | white | 56/160 | 480px | 16/24/400 | - | 0 (-) | 1 headings | 10 |
| `APM-02` | near-black | 160/160 | 789px | 40/60/300 | 18/27/300 | 0 (-) | 1 headings, 2 paras, 3 list items | 89 |
| `APM-03` | white | 160/64 | 352px | 48/72/300 | - | 0 (-) | 1 headings | 4 |
| `APM-04` | white | 64/160 | 224px | - | - | 0 (-) | - | 0 |
| `APM-05` | near-black | 160/160 | 999px | 48/72/300 | 18/27/300 | 1 (704×397) | 1 headings, 2 paras | 105 |
| `APM-06` | white | 160/160 | 600px | 40/60/300 | 18/27/300 | 0 (-) | 1 headings, 1 paras | 49 |
| `APM-07` | white | 56/88 | 540px | 40/60/300 | - | 1 (704×396) | 2 headings | 12 |
| `APM-08` | white | 56/160 | 598px | 48/72/300 | 18/27/300 | 0 (-) | 3 headings, 2 paras | 149 |
| `APM-09` | near-black | 160/160 | 1346px | 48/72/300 | - | 0 (-) | 9 headings | 39 |

### `APM-00` — page header (short)

- **Anatomy (measured):** H1 only, 19 words total in the band.
- **Measured:** band `white`, pad `48/64`, height 228px; heading 56/84/300; body 18/27/300; still -; 19 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** Title band on a long editorial page.
- **Artifacts:** `img/APM-00-d.png`, `no mobile crop`, `html/APM-00.html`

### `APM-01` — explainer + exhibit with a floating copy card

- **Anatomy (measured):** H2 spanning columns 1–8, then a full-width exhibit (chart/mockup) with a white card floating over it: paragraph + two links. Text floats, the exhibit bleeds.
- **Measured:** band `white`, pad `56/160`, height 480px; heading 16/24/400; body -; still -; 10 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** Explaining a mechanism with a supporting visual; the card keeps the copy readable over art.
- **Artifacts:** `img/APM-01-d.png`, `no mobile crop`, `html/APM-01.html`

### `APM-02` — three still cards + list

- **Anatomy (measured):** H3, then three 16:9 stills in a row with captions, plus a 3-item list beneath.
- **Measured:** band `near-black`, pad `160/160`, height 789px; heading 40/60/300; body 18/27/300; still -; 89 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** Three options side by side with imagery.
- **Artifacts:** `img/APM-02-d.png`, `no mobile crop`, `html/APM-02.html`

### `APM-03` — explainer + exhibit (same as APM-01)

- **Anatomy (measured):** Chart exhibit with a floating white copy card.
- **Measured:** band `white`, pad `160/64`, height 352px; heading 48/72/300; body -; still -; 4 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** Mechanism explainer.
- **Artifacts:** `img/APM-03-d.png`, `no mobile crop`, `html/APM-03.html`

### `APM-04` — continuation band, no heading

- **Anatomy (measured):** Exhibit + four paragraphs, no H2 — the argument continues from the band above.
- **Measured:** band `white`, pad `64/160`, height 224px; heading -; body -; still -; 0 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** Long-form continuation. Use sparingly: heading-less bands hide structure from scanning and from AI answers.
- **Artifacts:** `img/APM-04-d.png`, `no mobile crop`, `html/APM-04.html`

### `APM-05` — explainer + exhibit

- **Anatomy (measured):** H3 + chart + floating card.
- **Measured:** band `near-black`, pad `160/160`, height 999px; heading 48/72/300; body 18/27/300; still 704×397; 105 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** Trend explainer with one chart.
- **Artifacts:** `img/APM-05-d.png`, `no mobile crop`, `html/APM-05.html`

### `APM-06` — two-column comparison + exhibit

- **Anatomy (measured):** H3 + H4 pair, two paragraphs side by side, exhibit beneath.
- **Measured:** band `white`, pad `160/160`, height 600px; heading 40/60/300; body 18/27/300; still -; 49 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** Comparing two routes.
- **Artifacts:** `img/APM-06-d.png`, `no mobile crop`, `html/APM-06.html`

### `APM-07` — lead-magnet band

- **Anatomy (measured):** H5 title + 16:9 still + one action.
- **Measured:** band `white`, pad `56/88`, height 540px; heading 40/60/300; body -; still 704×396; 12 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** One downloadable asset.
- **Artifacts:** `img/APM-07-d.png`, `no mobile crop`, `html/APM-07.html`

### `APM-08` — FAQ accordion

- **Anatomy (measured):** H3 'Frequently Asked Questions' + H4 question rows, closed by default.
- **Measured:** band `white`, pad `56/160`, height 598px; heading 48/72/300; body 18/27/300; still -; 149 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** FAQ.
- **Artifacts:** `img/APM-08-d.png`, `no mobile crop`, `html/APM-08.html`

### `APM-09` — two-column link grid

- **Anatomy (measured):** H3 + two columns of rows, each row a label with a right-aligned arrow; 39 words total.
- **Measured:** band `near-black`, pad `160/160`, height 1346px; heading 48/72/300; body -; still -; 39 words.
- **At 390:** height -px, top pad -px, single column.
- **Good for:** A menu of deeper pages.
- **Artifacts:** `img/APM-09-d.png`, `no mobile crop`, `html/APM-09.html`

## Blackstone investor relations — `IR`

Source: ir.blackstone.com/overview/default.aspx

| id | band | pad | height | heading | body | stills | rows/items | words |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `IR-00` | near-black | 0/0 | 2546px | 55/57/400 | 20/30/300 | 0 (-) | 10 headings, 10 paras, 30 list items | 2356 |

### `IR-00` — investor overview: H1 + lead + 3 figures + modules

- **Anatomy (measured):** H1 + one lead paragraph, then three figures in a row (label above, 40px value, muted caption), then H4 modules (Latest Financials, Shareholder Relations two-column).
- **Measured:** band `near-black`, pad `0/0`, height 2546px; heading 55/57/400; body 20/30/300; still -; 2356 words.
- **At 390:** height 3852px, top pad 0px, single column.
- **Good for:** A stats-led summary page. Note: the rest of this microsite's modules are JavaScript-populated, so only this block was measurable.
- **Artifacts:** `img/IR-00-d.png`, `img/IR-01-m.png`, `html/IR-00.html`

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
- **Artifacts:** `img/BMX-00-d.png`, `img/BMX-10-m.png`, `html/BMX-00.html`

### `BMX-01` — image + two-column claim/paragraph

- **Anatomy (measured):** 16:9 still across the content width, then 28px claim in columns 5–8 and 16/24 paragraph in columns 9–16.
- **Measured:** band `white`, pad `0/104`, height 982px; heading 40/60/300; body 20/30/300; still 1264×542; 51 words.
- **At 390:** height 718px, top pad 0px, single column.
- **Good for:** A claim that needs one paragraph of support under a single still.
- **Artifacts:** `img/BMX-01-d.png`, `img/BMX-10-m.png`, `html/BMX-01.html`

### `BMX-02` — dark claim + paragraph + figure

- **Anatomy (measured):** Near-black band. 24px claim in columns 3–5, paragraph in columns 8–14, then a small-caps label + 56px figure bottom-left.
- **Measured:** band `near-black`, pad `160/64`, height 921px; heading 40/60/300; body 18/27/300; still 704×396; 69 words.
- **At 390:** height 1041px, top pad 80px, single column.
- **Good for:** A claim, its support, and one number — all in one dark band.
- **Artifacts:** `img/BMX-02-d.png`, `img/BMX-10-m.png`, `html/BMX-02.html`

### `BMX-03` — stat card (one of three)

- **Anatomy (measured):** Dark 1/3 column: 20px title, one 16/24 line, then a small-caps label over a 56px figure.
- **Measured:** band `near-black`, pad `64/64`, height 524px; heading 40/60/300; body 18/27/300; still 704×396; 42 words.
- **At 390:** height 614px, top pad 32px, single column.
- **Good for:** A three-up of claim + metric. Only works when each item really has a number.
- **Artifacts:** `img/BMX-03-d.png`, `img/BMX-10-m.png`, `html/BMX-03.html`

### `BMX-04` — stat card (one of three)

- **Anatomy (measured):** Same as BMX-03.
- **Measured:** band `near-black`, pad `64/64`, height 524px; heading 40/60/300; body 18/27/300; still 704×396; 16 words.
- **At 390:** height 560px, top pad 32px, single column.
- **Good for:** Stat trio member.
- **Artifacts:** `img/BMX-04-d.png`, `img/BMX-10-m.png`, `html/BMX-04.html`

### `BMX-05` — stat card (one of three)

- **Anatomy (measured):** Same as BMX-03.
- **Measured:** band `near-black`, pad `64/64`, height 524px; heading 40/60/300; body 18/27/300; still 704×396; 31 words.
- **At 390:** height 587px, top pad 32px, single column.
- **Good for:** Stat trio member.
- **Artifacts:** `img/BMX-05-d.png`, `img/BMX-10-m.png`, `html/BMX-05.html`

### `BMX-06` — stat card (one of three)

- **Anatomy (measured):** Same as BMX-03.
- **Measured:** band `near-black`, pad `64/160`, height 620px; heading 40/60/300; body 18/27/300; still 704×396; 21 words.
- **At 390:** height 608px, top pad 32px, single column.
- **Good for:** Stat trio member.
- **Artifacts:** `img/BMX-06-d.png`, `img/BMX-10-m.png`, `html/BMX-06.html`

### `BMX-07` — continuation band

- **Anatomy (measured):** Copy continues from the band above with no new heading.
- **Measured:** band `white`, pad `160/160`, height 750px; heading -; body 40/60/300; still 304×403; 37 words.
- **At 390:** height 1009px, top pad 80px, single column.
- **Good for:** Continuation only.
- **Artifacts:** `img/BMX-07-d.png`, `img/BMX-10-m.png`, `html/BMX-07.html`

### `BMX-08` — news teaser band

- **Anatomy (measured):** One line of copy + one still + link.
- **Measured:** band `white`, pad `56/160`, height 612px; heading 40/60/300; body -; still 704×396; 24 words.
- **At 390:** height 593px, top pad 40px, single column.
- **Good for:** A single news item.
- **Artifacts:** `img/BMX-08-d.png`, `img/BMX-10-m.png`, `html/BMX-08.html`

### `BMX-09` — accordion with circle-plus icons

- **Anatomy (measured):** Rows spanning columns 3–14: 24px label, 44px outline circle-plus right, hairline between.
- **Measured:** band `white`, pad `56/160`, height 606px; heading 48/72/300; body -; still -; 11 words.
- **At 390:** height 462px, top pad 40px, single column.
- **Good for:** A short directory where each row opens a longer answer.
- **Artifacts:** `img/BMX-09-d.png`, `img/BMX-10-m.png`, `html/BMX-09.html`

### `BMX-10` — disclosure: title left, rows right

- **Anatomy (measured):** Title in columns 1–4, rows in columns 6–16: label + chevron, hairline between.
- **Measured:** band `near-black`, pad `160/160`, height 464px; heading 40/72/300; body 16/24/300; still -; 1203 words.
- **At 390:** height 428px, top pad 80px, single column.
- **Good for:** Legal or long-tail content that must stay findable but quiet.
- **Artifacts:** `img/BMX-10-d.png`, `img/BMX-10-m.png`, `html/BMX-10.html`

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
- **Artifacts:** `img/HOME-00-d.png`, `img/HOME-07-m.png`, `html/HOME-00.html`

### `HOME-01` — promo carousel: still with floating card

- **Anatomy (measured):** Near-black band. 16:9 still with a white card floating over it, then title left / paragraph right beneath, dot pagination + prev/next circles.
- **Measured:** band `near-black`, pad `0/104`, height 922px; heading 40/60/300; body 20/30/300; still 1264×542; 157 words.
- **At 390:** height 672px, top pad 0px, single column.
- **Good for:** A featured story that rotates; heavy, use once per page at most.
- **Artifacts:** `img/HOME-01-d.png`, `img/HOME-07-m.png`, `html/HOME-01.html`

### `HOME-02` — centred claim + stat pair

- **Anatomy (measured):** Centred eyebrow with the 48px rule above, centred claim at 48/72/300, then two columns: small label + 16/24 paragraph left; 56px figure + 12px muted caption right; circle-arrow Learn more under the paragraph.
- **Measured:** band `white`, pad `160/160`, height 905px; heading 56/84/300; body 16/24/400; still -; 83 words.
- **At 390:** height 1045px, top pad 80px, single column.
- **Good for:** The strongest 'claim + one number' band: centred claim, asymmetric support.
- **Artifacts:** `img/HOME-02-d.png`, `img/HOME-07-m.png`, `html/HOME-02.html`

### `HOME-03` — two-up prose block

- **Anatomy (measured):** Heading stack left in columns 1–5, a bordered panel of rows right in columns 9–15.
- **Measured:** band `near-black`, pad `160/160`, height 951px; heading 48/72/300; body 16/24/400; still -; 59 words.
- **At 390:** height 1214px, top pad 80px, single column.
- **Good for:** A claim with three short linked answers.
- **Artifacts:** `img/HOME-03-d.png`, `img/HOME-07-m.png`, `html/HOME-03.html`

### `HOME-04` — marquee band

- **Anatomy (measured):** One giant display line clipped at both edges.
- **Measured:** band `near-black`, pad `0/160`, height 470px; heading -; body 192/250/300; still -; 19 words.
- **At 390:** height 222px, top pad 0px, single column.
- **Good for:** Brand moment. Not for information.
- **Artifacts:** `img/HOME-04-d.png`, `img/HOME-07-m.png`, `html/HOME-04.html`

### `HOME-05` — announcement band

- **Anatomy (measured):** Eyebrow + 28px title + one link, 19 words.
- **Measured:** band `white`, pad `160/160`, height 813px; heading 40/60/300; body 16/24/400; still 304×405; 19 words.
- **At 390:** height 1062px, top pad 80px, single column.
- **Good for:** One dated announcement.
- **Artifacts:** `img/HOME-05-d.png`, `img/HOME-07-m.png`, `html/HOME-05.html`

### `HOME-06` — featured news 4-up

- **Anatomy (measured):** H2 + four cards in a row with 16:9 stills and 16px titles.
- **Measured:** band `white`, pad `56/160`, height 1123px; heading 48/72/300; body 16/24/400; still 298×397; 67 words.
- **At 390:** height 1016px, top pad 40px, single column.
- **Good for:** Four teasers in one row.
- **Artifacts:** `img/HOME-06-d.png`, `img/HOME-07-m.png`, `html/HOME-06.html`

### `HOME-07` — email capture: heading left, form right

- **Anatomy (measured):** Near-black band. H2 + line left in columns 1–6, 6-field form right in columns 9–14.
- **Measured:** band `near-black`, pad `160/160`, height 1083px; heading 48/72/300; body 18/27/300; still -; 150 words.
- **At 390:** height 1025px, top pad 80px, single column.
- **Good for:** A capture form. Not for a funding page.
- **Artifacts:** `img/HOME-07-d.png`, `img/HOME-07-m.png`, `html/HOME-07.html`

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
- **At 390:** height 807px, top pad 32px, single column.
- **Good for:** The only hero Falcon currently uses. One still, one CTA, no disclaimer.
- **Artifacts:** `img/FAL-00-d.png`, `img/FAL-06-m.png`, `html/FAL-00.html`

### `FAL-01` — Falcon stats: featured + two sides

- **Anatomy (measured):** Featured figure at 80–160px with its label above; two side stats with a 1px ink rule above each value.
- **Measured:** band `white`, pad `160/160`, height 540px; heading -; body 32/48/300; still -; 7 words.
- **At 390:** height 642px, top pad 80px, single column.
- **Good for:** Three confirmed stats from STATS. Never invent one.
- **Artifacts:** `img/FAL-01-d.png`, `img/FAL-06-m.png`, `html/FAL-01.html`

### `FAL-02` — Falcon services link list

- **Anatomy (measured):** Eyebrow + H2, then 8 full-width rows on 2px ink rules: title + muted range at columns 1–6, teaser at 8, circle at 12.
- **Measured:** band `white`, pad `56/160`, height 1580px; heading 48/60/400; body 13/20/400; still -; 145 words.
- **At 390:** height 1937px, top pad 40px, single column.
- **Good for:** A seven/eight-product menu where each row is a real route.
- **Artifacts:** `img/FAL-02-d.png`, `img/FAL-06-m.png`, `html/FAL-02.html`

### `FAL-03` — Falcon testimonial: serif quote + 3:4 still

- **Anatomy (measured):** Display quote left at 32–40px, 3:4 still right, 'Falcon client' credit, prev/next circles.
- **Measured:** band `white`, pad `56/160`, height 904px; heading -; body 16/24/400; still 304×600; 116 words.
- **At 390:** height 1197px, top pad 40px, single column.
- **Good for:** One real quote.
- **Artifacts:** `img/FAL-03-d.png`, `img/FAL-06-m.png`, `html/FAL-03.html`

### `FAL-04` — Falcon industries: dropdown + panel

- **Anatomy (measured):** Lilac Light field with a select, selected row in Lilac Darker, panel with title + blurbs + circle-arrow + 16:9 still.
- **Measured:** band `white`, pad `56/160`, height 830px; heading 40/50/400; body 13/20/400; still 704×396; 219 words.
- **At 390:** height 830px, top pad 40px, single column.
- **Good for:** A selector for 12 sectors.
- **Artifacts:** `img/FAL-04-d.png`, `img/FAL-06-m.png`, `html/FAL-04.html`

### `FAL-05` — Falcon why: dark band, heading left, numbered steps right

- **Anatomy (measured):** Darker band. Eyebrow + H2 + body + circle-arrow left; three numbered steps right on 1.5px rules; marquee under.
- **Measured:** band `near-black`, pad `160/160`, height 1402px; heading 48/72/400; body 13/20/400; still -; 77 words.
- **At 390:** height 1368px, top pad 80px, single column.
- **Good for:** Three process steps.
- **Artifacts:** `img/FAL-05-d.png`, `img/FAL-06-m.png`, `html/FAL-05.html`

### `FAL-06` — Falcon insights: three cards

- **Anatomy (measured):** Eyebrow + H2, then three 16:9 cards with titles and a circle-arrow.
- **Measured:** band `white`, pad `160/160`, height 1107px; heading 48/72/400; body 16/24/400; still 352×198; 102 words.
- **At 390:** height 1965px, top pad 80px, single column.
- **Good for:** Three published posts.
- **Artifacts:** `img/FAL-06-d.png`, `img/FAL-06-m.png`, `html/FAL-06.html`

## What this library is missing, on purpose

- **No data-table section exists on any of these pages.** A five-column comparison table has no donor; it has to be styled from our own `.r-table` using these hairlines and type sizes, and the plan must say so.
- **The IR microsite is mostly JavaScript-populated.** Only its overview block (`IR-00`) could be measured; its financial tables and press-release modules return empty shells to any extractor.
- **PWS pages carry a legal-gate modal** that covers the content until dismissed; every APM crop here was taken after removing it, so the crops show the section, not the gate.
