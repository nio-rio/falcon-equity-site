# Blackstone section library

Pick Falcon layouts by **content shape** (what the section holds and how it reads), not by whether it “looks like Blackstone.”

Each entry is one live section. Desktop crops are 1440 CSS px wide; mobile crops are 390. Geometry is `getComputedStyle` / `getBoundingClientRect` from headless Chrome on 2026-10-22. Accordion word counts are the **closed** state (row titles + lead only).

**How to use:** count Falcon’s items and types (stats, pillars, FAQ rows, cards, quote, chart). Find an id whose CONTENT SHAPE matches. Then steal that id’s grid, pad, and type sizes. If the shape does not fit, say so and adapt — do not force Falcon copy into a prettier but wrong block.

Images live in `docs/section-library/img/`:

- `{ID}-d.png` desktop crop
- `{ID}-m.png` mobile crop
- `{PAGE}-contact-sheet.png` all desktop crops stacked with ids labeled

Raw measurements: `docs/section-library/meta.json`.

---

## Shared Blackstone (marketing) geometry at 1440

Marketing pages (BXCI, PWS, DC, LS) share blackstone-v2:

| Token | 1440 | 390 |
| --- | --- | --- |
| Grid | 16 cols × 64px tracks, gutter **16px** | single column, ~360px content |
| Container | **1264px** (`--container-width` at 90em) | full bleed + page pad |
| Section width measured | 1425px (viewport minus scrollbar) | 375–390px |
| Base pad (theme change) | **160px** top + bottom | **80px** |
| Stacked same-theme top | **56px** | **40px** |
| Page-header pad | **48px** top / **120px** bottom | 48 / ~80–120 |
| Eyebrow | Guardian Sans 16/24/400, tracking 1.28px, uppercase + 56–64px rule | same type, stacks |
| H1 | 56px / 84px / 300 | same, full width |
| Claim (H2/H3) | 48px / 72px / 300 | wraps, ~40px on some bands |
| Body | Guardian Sans 18/27/300, tracking 0.32px | same |
| Featured figure | Sanomat 160px / 224px / 300 | smaller, still dominant |
| News still | 352×198, **16:9**, cover | full width, 16:9 |
| Featured still | 704×396, **16:9**, cover | full width, 16:9 |
| Hero media | 1264×542, aspect **2.333**, cover | ~360×~280, ~4:3–16:9 |
| Pillar still | 624×832, **3:4**, cover, left | full width, then copy |
| Quote portrait | 304×403, **~3:4**, cover, left | stacks above quote |

IR (`ir.blackstone.com`) is a **Q4** site: 1200px title/stats, full-bleed quote widgets, different type. Do not mix IR geometry with marketing tokens.

---

## Unique chrome (not catalogued as sections)

Skipped on every page: global header, global footer, cookie bar.

**Noted, not cropped as content:**

- **Announcement + nav (marketing pages).** First pass measured header **204px** — global nav plus an “Inside Blackstone” / “Private Markets Allocator Tool” announcement. Falcon should not copy the announcement.
- **IR Q4 chrome.** Custom header/footer embeds of the marketing site, plus an **in-page IR nav** (Overview · Events · BX Share Information · SEC Filings · Corporate Governance · Contact Us · Dividends & Tax Info · Press Releases) sitting on `IR-03`. That nav is unique to the IR microsite.
- **Cookie consent** (`.cc-window`, “I Understand”) is site chrome, not a section.

---

## Index

| Page | Count | Ids |
| --- | --- | --- |
| [BXCI](#1-credit--insurance-bxci) | 10 | BXCI-01 … BXCI-10 |
| [PWS](#2-essentials-of-private-markets) | 10 | PWS-01 … PWS-10 |
| [IR](#3-bx-share-information) | 6 | IR-01 … IR-06 |
| [DC](#4-defined-contribution) | 8 | DC-01 … DC-08 |
| [LS](#5-life-sciences) | 9 | LS-01 … LS-09 |

---

## 1. Credit & Insurance (BXCI)

Source: https://www.blackstone.com/our-businesses/credit-and-insurance-bxci/#Insurance  
Contact sheet: `docs/section-library/img/BXCI-contact-sheet.png`

`#Insurance` lands on **BXCI-07**.

### BXCI-01 — Page header (Credit & Insurance)

- **Page + section:** BXCI · page header
- **CONTENT SHAPE:** one H1 + one supporting paragraph. No image, no CTA, no eyebrow.
- **Counts:** 1 heading (~3 words) + 1 lead (~34 words). Total ~37 words.
- **GEOMETRY (1440):** 16-col / 1264px. Split ~8 / 8 (H1 left, lead right). Pad 48 / 120. H1 56/84/300. Body 18/27/300. White `rgb(255,255,255)`. No image.
- **Interactions:** none
- **Mobile:** H1 then lead, full width. 374px tall.
- **Good for:** inner-page hero that is only a name + one-sentence job. Falcon MCA-style “title + lead + still” needs an extra band (see BXCI-02).

Desktop: `img/BXCI-01-d.png` · Mobile: `img/BXCI-01-m.png`

### BXCI-02 — Hero media

- **Page + section:** BXCI · full-bleed still (bridge)
- **CONTENT SHAPE:** one wide still, no copy. Optional play affordance on other pages; this instance is a still.
- **Counts:** 0 words. 1 image.
- **GEOMETRY (1440):** 16-col / 1264. Image 1264×542, aspect **2.333**, `object-fit: cover`. Pad 0 / 104. White.
- **Interactions:** video-capable (`hero-media`); this crop is static.
- **Mobile:** still goes full width, shorter (~477px).
- **Good for:** a single atmospheric still under a type-only header. Not a card grid.

Desktop: `img/BXCI-02-d.png` · Mobile: `img/BXCI-02-m.png`

### BXCI-03 — Featured stat + two side stats

- **Page + section:** BXCI · stats
- **CONTENT SHAPE:** 3 big stats with labels. One featured figure (label over huge number) plus two smaller label+number+rule stats on the right. Footnotes under.
- **Counts:** 3 stats. Labels ~4–6 words each. Featured value `$547B`. Sides `5,200+` / `575+`. ~64 words including notes.
- **GEOMETRY (1440):** 16-col / 1264. Featured spans ~8 cols; two sides share ~8. Pad 56 / 160 (stacked after media). Featured number 160/224/300 Sanomat. Side labels 16/24/300; featured label 32/48/300. 1px rules under side values. White.
- **Interactions:** none
- **Mobile:** all three stack (featured, then two small). 927px.
- **Good for:** a glance row with one hero number and two supporting figures (Falcon amounts / speed / count).

Desktop: `img/BXCI-03-d.png` · Mobile: `img/BXCI-03-m.png`

### BXCI-04 — What we do (3 image+title+paragraph pillars)

- **Page + section:** BXCI · What we do
- **CONTENT SHAPE:** eyebrow + long claim + 3 stacked pillars. Each pillar is portrait still (left) + title + short paragraph (right). Dark band.
- **Counts:** 3 pillars. Claim ~20 words. Each body ~25–40 words. Total ~106 words. 1 shared/left still visible in crop (3:4).
- **GEOMETRY (1440):** 16-col / 1264. Pad **160 / 160**. Dark `rgb(0,0,0)`. Eyebrow 16/24/400. Claim 48/72/300. Pillar title 24/36/300. Body 18/27/300. Still 624×832, aspect **0.75**, cover, left.
- **Interactions:** none
- **Mobile:** claim, then each pillar stacks image then type. 1766px.
- **Good for:** three equal “how we work” explanations with optional stills. Not a 3-up card row (that is BXCI-07).

Desktop: `img/BXCI-04-d.png` · Mobile: `img/BXCI-04-m.png`

### BXCI-05 — Credit strategies accordion (4 rows)

- **Page + section:** BXCI · Blackstone’s Credit Strategies
- **CONTENT SHAPE:** eyebrow + long claim + accordion of 4 titled strategies. Closed rows are title + chevron. Open row adds a paragraph and child strategy links.
- **Counts:** 4 rows. Closed ~37 words. Each title 2–5 words.
- **GEOMETRY (1440):** 16-col / 1264. Pad 160 / 160. White. Eyebrow 16/24/400. Claim 48/72/300. Row title 24/36/300. Row pad ~32px. Hairline rules.
- **Interactions:** accordion (chevron). Hover on row.
- **Mobile:** same stack, full-width rows. 1019px closed.
- **Good for:** 4–8 product/term rows that need a title now and a paragraph later. Falcon MCA terms / FAQ-with-structure.

Desktop: `img/BXCI-05-d.png` · Mobile: `img/BXCI-05-m.png`

### BXCI-06 — Featured split (copy + 16:9 + CTA)

- **Page + section:** BXCI · Value Creation Program
- **CONTENT SHAPE:** title + 2 short paragraphs + text+arrow CTA on the left; 16:9 still with play disc on the right; footnote under.
- **Counts:** 1 title, 2 paras, 1 CTA, 1 still, 1 footnote. ~166 words.
- **GEOMETRY (1440):** 16-col / 1264. ~8 / 8 split. Pad 56 / 160. Still 704×396, **16:9**. Body 18/27/300. White.
- **Interactions:** play overlay; “View the 2025 Report” singular-link (underline + circle arrow).
- **Mobile:** copy, then still, then footnote. 1139px.
- **Good for:** one program/story with a single still and one outbound. Not a 3-card news row.

Desktop: `img/BXCI-06-d.png` · Mobile: `img/BXCI-06-m.png`

### BXCI-07 — Insurance (3 short text cards) `#Insurance`

- **Page + section:** BXCI · Blackstone Insurance
- **CONTENT SHAPE:** eyebrow + long claim + 3 short cards (title + one paragraph). No icons, no images.
- **Counts:** 3 cards. Claim ~20 words. Each card ~25–40 words. Total ~105 words.
- **GEOMETRY (1440):** 16-col / 1264. Cards ~5 / 6 / 5 (384px tracks, 352px inner). Heading→cards gap **104px**. Pad 56 / 160. Eyebrow 16/24/400. Claim ~40–48/72. Card title 24/36/300. Body 18/27/300. White.
- **Interactions:** none
- **Mobile:** claim, then 3 cards stack. 1293px.
- **Good for:** three equal promises or differentiators with no art. Falcon “why this product” / three-fit tests.

Desktop: `img/BXCI-07-d.png` · Mobile: `img/BXCI-07-m.png`

### BXCI-08 — Portfolio spotlight (eyebrow + claim + 16:9)

- **Page + section:** BXCI · Portfolio Spotlight / Financing the Real Economy
- **CONTENT SHAPE:** eyebrow + title + paragraph + Watch CTA on the left; 16:9 still + play on the right.
- **Counts:** 1 eyebrow, 1 title, 1 para (~40 words), 1 CTA, 1 still. Total ~43 words.
- **GEOMETRY (1440):** same featured-content split as BXCI-06. Pad 56 / 160. Still 704×396, 16:9. White.
- **Interactions:** video play; Watch Now link.
- **Mobile:** type then still. 760px.
- **Good for:** one case/story with a still. Same shape as BXCI-06 with less footnote weight.

Desktop: `img/BXCI-08-d.png` · Mobile: `img/BXCI-08-m.png`

### BXCI-09 — News & insights (3 cards)

- **Page + section:** BXCI · News & Insights
- **CONTENT SHAPE:** eyebrow + H2 + 3 cards (16:9 still + title + Read/Watch + circle arrow). Cards 2 and 3 are video thumbs (no excerpt). Card 1 is article (title only in this crop).
- **Counts:** 3 cards. ~41 words closed. Stills 3× 352×198.
- **GEOMETRY (1440):** 16-col / 1264. Card columns 5 / 6 / 5. Heading→cards **104px**. Pad 56 / 160. Eyebrow 16/24/400. H2 48-ish. Card title 24/36/300. White.
- **Interactions:** card hover (image zoom / singular-link underline + circle scale — same family as Falcon Insights).
- **Mobile:** cards stack. 1533px.
- **Good for:** a 3-item insights strip. Prefer **LS-07** if cards also need a 1–2 line excerpt.

Desktop: `img/BXCI-09-d.png` · Mobile: `img/BXCI-09-m.png`

### BXCI-10 — Quote (portrait + pull quote + name)

- **Page + section:** BXCI · Gilles Dellaert quote
- **CONTENT SHAPE:** 3:4 portrait left; large quote + name + title right. Dark band. Carousel chrome (1 slide).
- **Counts:** 1 quote (~28 words) + name/title. Total ~32 words. 1 portrait 304×403.
- **GEOMETRY (1440):** 16-col / 1264. Pad 160 / 160. Dark. Quote 40/60/300. Portrait ~3:4 left.
- **Interactions:** carousel (single slide here).
- **Mobile:** portrait, then quote, then attribution. 949px.
- **Good for:** one attributed quote. Falcon must not invent a speaker — only use if a real named quote exists.

Desktop: `img/BXCI-10-d.png` · Mobile: `img/BXCI-10-m.png`

---

## 2. Essentials of Private Markets

Source: https://www.blackstone.com/pws/essentials-of-private-markets/  
Contact sheet: `docs/section-library/img/PWS-contact-sheet.png`

### PWS-01 — Page header + two text downloads

- **Page + section:** PWS · page header
- **CONTENT SHAPE:** H1 + lead + two inline text links (`Download brochure | Download flyer`). No still.
- **Counts:** 1 H1, 1 lead, 2 links. ~26 words.
- **GEOMETRY (1440):** 16-col / 1264. H1 left, lead+links right. Pad 48 / 64. H1 56/84/300. Body 18/27/300. White.
- **Interactions:** 2 text links
- **Mobile:** stack. 383px.
- **Good for:** education landing hero that offers files, not a primary Apply.

Desktop: `img/PWS-01-d.png` · Mobile: `img/PWS-01-m.png`

### PWS-02 — Featured split (video explainer)

- **Page + section:** PWS · Closing the Knowledge Gap
- **CONTENT SHAPE:** title + paragraph + play still (16:9). Same family as BXCI-06/08.
- **Counts:** 1 title, 1 para (~30 words), 1 still. Total ~36 words.
- **GEOMETRY (1440):** 8 / 8 split, still 704×396 16:9. Pad 40 / 160. White.
- **Interactions:** video
- **Mobile:** type then still. 659px.
- **Good for:** one explainer video under a short claim.

Desktop: `img/PWS-02-d.png` · Mobile: `img/PWS-02-m.png`

### PWS-03 — Explore the essentials (8 accordion rows)

- **Page + section:** PWS · Explore the Essentials
- **CONTENT SHAPE:** eyebrow + short claim + long accordion (8 rows). Dark. Each row is a titled lesson; several are outbound.
- **Counts:** 8 rows. Closed ~50 words.
- **GEOMETRY (1440):** 16-col / 1264. Pad 160 / 160. Dark. Eyebrow 16/24/400. Claim 48/72/300. Row title 24/36/300.
- **Interactions:** accordion
- **Mobile:** same list. 1315px.
- **Good for:** 6–8 named topics (product list, lesson list) that expand or link out. Heavier than BXCI-05 (4 rows).

Desktop: `img/PWS-03-d.png` · Mobile: `img/PWS-03-m.png`

### PWS-04 — Heading + one paragraph

- **Page + section:** PWS · Why Invest in Private Markets?
- **CONTENT SHAPE:** one claim + one supporting paragraph. No CTA, no image, no list.
- **Counts:** 1 heading (~6 words) + 1 para (~21 words). Total ~27 words.
- **GEOMETRY (1440):** 16-col / 1264. Heading left-ish, body beside/under. Pad 160 / 104. H3 48/84/300. Body 18/27/300. White.
- **Interactions:** none
- **Mobile:** stack. 488px.
- **Good for:** a short “why” band between a list and a chart. Falcon AEO one-liner + support sentence.

Desktop: `img/PWS-04-d.png` · Mobile: `img/PWS-04-m.png`

### PWS-05 — Heading + lead + two charts + long source

- **Page + section:** PWS · Allocating to Private Markets
- **CONTENT SHAPE:** H3 + lead on the top row; then two side-by-side donut charts with legends and a 3-row metric table under each; long source/disclaimer (~300 words) under.
- **Counts:** 2 charts, 2 legends, 2×3 metric rows. ~387 words (mostly disclaimer).
- **GEOMETRY (1440):** 16-col / 1264. Top row heading 40/60/300 + body 20/30/300. Charts flex, gap **64px**, each ~600×701 (portrait chart stack). Pad 56 / 104. White.
- **Interactions:** none (static illustration)
- **Mobile:** charts and tables stack. 2352px.
- **Good for:** comparing two portfolios with charts + a legal paragraph. Not a Falcon product page unless real figures exist.

Desktop: `img/PWS-05-d.png` · Mobile: `img/PWS-05-m.png`

### PWS-06 — Heading + lead + one wide bar chart

- **Page + section:** PWS · Private Markets Exposure
- **CONTENT SHAPE:** title + one sentence + one full-width bar/comparison chart + source line.
- **Counts:** 1 chart. ~118 words including source.
- **GEOMETRY (1440):** 16-col / 1264. Chart 1264×313, aspect **~4:1**. Title 40/60/300. Body 20/30/300. Pad 56 / 160. White.
- **Interactions:** none
- **Mobile:** chart shrinks, still one column. 871px.
- **Good for:** one comparison graphic under a short claim (allocation bars, not a stat trio).

Desktop: `img/PWS-06-d.png` · Mobile: `img/PWS-06-m.png`

### PWS-07 — Long prose on a dark band

- **Page + section:** PWS · Manager Selection Matters
- **CONTENT SHAPE:** one heading + one long paragraph (~130 words). No list, no CTA, no image. Dark.
- **Counts:** 1 heading, 1 para. ~131 words.
- **GEOMETRY (1440):** 16-col / 1264. Pad 160 / 160. Dark. H3 40/60/300. Body 20/30/300.
- **Interactions:** none
- **Mobile:** same, more wraps. 1016px.
- **Good for:** a caution / “what to watch” essay. Too long for a card; too unstructured for an accordion.

Desktop: `img/PWS-07-d.png` · Mobile: `img/PWS-07-m.png`

### PWS-08 — Download pack (3 links + still)

- **Page + section:** PWS · Read the complete Essentials
- **CONTENT SHAPE:** short title + 3 download links + 16:9 still.
- **Counts:** 3 links. ~17 words. 1 still 704×396.
- **GEOMETRY (1440):** featured split. Pad 160 / 88. White.
- **Interactions:** 3 file links
- **Mobile:** links then still. 594px.
- **Good for:** a resource footer for an education page.

Desktop: `img/PWS-08-d.png` · Mobile: `img/PWS-08-m.png`

### PWS-09 — FAQ accordion (5 questions)

- **Page + section:** PWS · Frequently Asked Questions
- **CONTENT SHAPE:** H3 + 5 accordion questions. No lead. Light band.
- **Counts:** 5 rows. Closed ~38 words.
- **GEOMETRY (1440):** same accordion chrome as BXCI-05. Pad 56 / 160. H3 48/72/300. Row title 24/36/300. White.
- **Interactions:** accordion
- **Mobile:** full-width rows. 936px.
- **Good for:** a short FAQ (4–6). For 7 questions with a lead + download see **DC-06**.

Desktop: `img/PWS-09-d.png` · Mobile: `img/PWS-09-m.png`

### PWS-10 — Link list (8 titled rows)

- **Page + section:** PWS · Explore Essentials
- **CONTENT SHAPE:** H3 + 8 full-width titled links (same 8 topics as PWS-03, but as a jump list, not accordion). Dark.
- **Counts:** 8 links. ~41 words.
- **GEOMETRY (1440):** 16-col / 1264. Pad 160 / 160. Dark. H3 48/72/300. Row title 24/36/300. Hairline rows, space-between.
- **Interactions:** row hover / link
- **Mobile:** stack. 1150px.
- **Good for:** a closing “more like this” index. Not a FAQ (no hidden answer).

Desktop: `img/PWS-10-d.png` · Mobile: `img/PWS-10-m.png`

---

## 3. BX Share Information

Source: https://ir.blackstone.com/bx-share-information/default.aspx  
Contact sheet: `docs/section-library/img/IR-contact-sheet.png`

Q4 investor-relations page. Different grid and type than marketing.

### IR-01 — Page title

- **Page + section:** IR · BX Share Information
- **CONTENT SHAPE:** H1 only (the marketing lead from the HTML is not a visible module on desktop).
- **Counts:** 3 words.
- **GEOMETRY (1440):** 1200×57. H1 55/57/400. Transparent. Pad 0.
- **Interactions:** none
- **Mobile:** title wraps, 122px.
- **Good for:** a bare IR/data-page title. Not a Falcon marketing hero.

Desktop: `img/IR-01-d.png` · Mobile: `img/IR-01-m.png`

### IR-02 — Three headline stats

- **Page + section:** IR · share headline
- **CONTENT SHAPE:** 3 equal stats in a row (price+change · total dividends since IPO · LTM yield). Label under or beside the number. Top rules.
- **Counts:** 3 stats. ~17 words.
- **GEOMETRY (1440):** 1200×137. Three equal columns. Numbers ~large sans. Transparent.
- **Interactions:** price may link to details
- **Mobile:** stacks or compresses to 177px (price + “View share details”).
- **Good for:** a compact 3-up ticker. Smaller and more “data” than BXCI-03 (no featured 160px figure).

Desktop: `img/IR-02-d.png` · Mobile: `img/IR-02-m.png`

### IR-03 — Stock quote grid + IR subnav

- **Page + section:** IR · Blackstone Inc. (NYSE: BX)
- **CONTENT SHAPE:** H2 + unique IR subnav + featured last price + 6 labeled quotes in a 3×2 grid (open / 52w high / 52w low / intraday high / intraday low / previous close) + as-of line.
- **Counts:** 1 featured + 6 cells. ~36 words.
- **GEOMETRY (1440):** full 1440, pad 0 / 60. H2 44/48/400. Featured left; 3-col flex cells ~217px. Rules under numbers.
- **Interactions:** none (live quote). **Unique:** in-page IR nav.
- **Mobile:** cells stack, 983px.
- **Good for:** a live quote dashboard. Not a Falcon product glance unless the content is really a 1+6 metric sheet.

Desktop: `img/IR-03-d.png` · Mobile: `img/IR-03-m.png`

### IR-04 — Stock history lookup

- **Page + section:** IR · Stock History
- **CONTENT SHAPE:** H2 + date lookup + 5 labeled fields (high / volume / last / low / open).
- **Counts:** 5 fields. ~10 words plus control.
- **GEOMETRY (1440):** 1440×638. Pad 60 / 60. H2 38/48/400.
- **Interactions:** date picker / look-up
- **Mobile:** 636px, fields stack.
- **Good for:** a lookup widget. Not a static stats band.

Desktop: `img/IR-04-d.png` · Mobile: `img/IR-04-m.png`

### IR-05 — Share related items (3 figures + notes)

- **Page + section:** IR · Share Related Items
- **CONTENT SHAPE:** H2 + 3 figures (market cap, LTM dividend, LTM yield) + date + two legal paragraphs.
- **Counts:** 3 stats + ~80 words of notes.
- **GEOMETRY (1440):** 1440×666. Pad 60 / 60. H2 38/48/400. Notes 15/22.5/300.
- **Interactions:** none
- **Mobile:** 806px, figures stack.
- **Good for:** three corporate figures with a disclaimer. Closer to a data table than BXCI-03.

Desktop: `img/IR-05-d.png` · Mobile: `img/IR-05-m.png`

### IR-06 — Footnotes

- **Page + section:** IR · footnotes
- **CONTENT SHAPE:** 2–3 short legal lines.
- **Counts:** ~36 words.
- **GEOMETRY (1440):** 1200×204. Pad 30 / 90. Body 15/22.5/300.
- **Interactions:** none
- **Mobile:** 249px.
- **Good for:** page-level footnotes. Marketing equivalent is **LS-08** (much longer).

Desktop: `img/IR-06-d.png` · Mobile: `img/IR-06-m.png`

---

## 4. Defined Contribution

Source: https://www.blackstone.com/defined-contribution/  
Contact sheet: `docs/section-library/img/DC-contact-sheet.png`

### DC-01 — Page header + brochure link

- **Page + section:** DC · page header
- **CONTENT SHAPE:** H1 + longer lead + one `Download Brochure` link. No still.
- **Counts:** 1 H1, 1 lead (~35 words), 1 link. Total ~40 words.
- **GEOMETRY (1440):** same page-header as BXCI-01. Pad 48 / 120. H1 56/84/300. Body 18/27/300. White.
- **Interactions:** 1 text link
- **Mobile:** stack. 515px.
- **Good for:** a product-line hero with a file, slightly longer lead than BXCI-01.

Desktop: `img/DC-01-d.png` · Mobile: `img/DC-01-m.png`

### DC-02 — Promo carousel (one video slide)

- **Page + section:** DC · Expanding Access
- **CONTENT SHAPE:** one full-width 2.33 still + title + 2-line caption. Carousel chrome (1 slide).
- **Counts:** 1 slide. Title ~14 words, caption ~25. Total ~45 words. Image 1264×542.
- **GEOMETRY (1440):** 16-col / 1264. Pad 0 / 104. Title 40/60/300. Body 20/30/300. White.
- **Interactions:** carousel + video
- **Mobile:** still then type. 808px.
- **Good for:** one featured conversation/video under the header. Same media ratio as BXCI-02 but **with** title/caption.

Desktop: `img/DC-02-d.png` · Mobile: `img/DC-02-m.png`

### DC-03 — What we do (3 text cards + intro)

- **Page + section:** DC · What we do
- **CONTENT SHAPE:** eyebrow + short platform intro + 3 title+paragraph cards. No images (same family as BXCI-07, plus a lead line above the cards).
- **Counts:** 3 cards. ~138 words.
- **GEOMETRY (1440):** 16-col / 1264. Cards 5/6/5, heading→cards 104px. Pad 56 / 160. Eyebrow 16/24/400. Card title 24/36/300. Body 18/27/300. White.
- **Interactions:** none
- **Mobile:** intro + 3 stacked cards. 1449px.
- **Good for:** three pillars with a one-line setup. Use BXCI-04 instead if each pillar needs a still.

Desktop: `img/DC-03-d.png` · Mobile: `img/DC-03-m.png`

### DC-04 — Education featured split

- **Page + section:** DC · Education Resources & Insights
- **CONTENT SHAPE:** eyebrow + article title + excerpt + 16:9 still + Read link. Featured-content split.
- **Counts:** 1 story. ~56 words. Still 704×396.
- **GEOMETRY (1440):** pad 56 / 64. Eyebrow 16/24/400. Body 18/27/300. White.
- **Interactions:** Read / play
- **Mobile:** type then still. 859px.
- **Good for:** a single highlighted insight, not a 3-card row.

Desktop: `img/DC-04-d.png` · Mobile: `img/DC-04-m.png`

### DC-05 — Featured split (access story)

- **Page + section:** DC · Expanding Retirement Investors’ Access
- **CONTENT SHAPE:** title + paragraph + 16:9 still (same featured-content as DC-04, no eyebrow in the crop).
- **Counts:** ~49 words. 1 still.
- **GEOMETRY (1440):** pad 64 / 160. Still 704×396 16:9. White.
- **Interactions:** optional play/link
- **Mobile:** stack. 809px.
- **Good for:** a second story beat. Do not stack more than two of these in a row without a shape change.

Desktop: `img/DC-05-d.png` · Mobile: `img/DC-05-m.png`

### DC-06 — FAQ accordion (7 questions, dark)

- **Page + section:** DC · Role of Private Assets in 401(k) Plans FAQ
- **CONTENT SHAPE:** long H3 + supporting paragraph + Download PDF + 7 accordion questions. Dark. Some open panels include charts (nested, not separate sections).
- **Counts:** 7 rows. Closed ~103 words. Lead ~30 words.
- **GEOMETRY (1440):** 16-col / 1264. Pad 160 / 160. Dark. H3 40/60/300 left; lead 20/30/300 right. Row title 24/36/300.
- **Interactions:** accordion; PDF link; charts inside some answers
- **Mobile:** lead drops under title; rows stack. 1812px.
- **Good for:** a long FAQ with a setup paragraph. Closest match for Falcon MCA FAQ if the list is 6–8 questions.

Desktop: `img/DC-06-d.png` · Mobile: `img/DC-06-m.png`

### DC-07 — Quote (light)

- **Page + section:** DC · Heather von Zuben quote
- **CONTENT SHAPE:** 3:4 portrait + large quote + name/title. Light band (same block as BXCI-10, inverted theme).
- **Counts:** ~50 words. Portrait 304×405.
- **GEOMETRY (1440):** pad 160 / 160. Quote 40/60/300. White.
- **Interactions:** carousel (1 slide)
- **Mobile:** portrait then quote. 1059px.
- **Good for:** one real attributed quote on a light band.

Desktop: `img/DC-07-d.png` · Mobile: `img/DC-07-m.png`

### DC-08 — Contact / subscribe CTA

- **Page + section:** DC · Contact Us (`#contact`)
- **CONTENT SHAPE:** one claim + Contact CTA + 16:9 still (this capture’s still failed to load — black 16:9 box). Page-level CTA, **not** the global footer.
- **Counts:** ~2–9 words + 1 CTA + 1 still slot (544×306, 16:9).
- **GEOMETRY (1440):** 16-col / 1264. Pad 56 / 160. Claim large, muted. White.
- **Interactions:** Contact Us singular-link
- **Mobile:** claim + CTA, still under. 609px.
- **Good for:** an in-page contact band (Falcon SiteCta cousin). Do not treat as footer.

Desktop: `img/DC-08-d.png` · Mobile: `img/DC-08-m.png`

---

## 5. Life Sciences

Source: https://www.blackstone.com/our-businesses/life-sciences/  
Contact sheet: `docs/section-library/img/LS-contact-sheet.png`

### LS-01 — Page header

- **Page + section:** LS · Blackstone Life Sciences (BXLS)
- **CONTENT SHAPE:** H1 + one-sentence goal. No CTA, no still.
- **Counts:** ~28 words.
- **GEOMETRY (1440):** identical page-header to BXCI-01. Pad 48 / 120. H1 56/84/300. Body 18/27/300. White.
- **Interactions:** none
- **Mobile:** stack. 380px.
- **Good for:** a business-line name + mandate. Pair with LS-02 if a still is required.

Desktop: `img/LS-01-d.png` · Mobile: `img/LS-01-m.png`

### LS-02 — Hero media

- **Page + section:** LS · lab still
- **CONTENT SHAPE:** one wide still, no copy. Same block as BXCI-02.
- **Counts:** 0 words. Image 1264×542, 2.333.
- **GEOMETRY (1440):** pad 0 / 104. White.
- **Interactions:** video-capable
- **Mobile:** ~477px.
- **Good for:** the still under a type-only header.

Desktop: `img/LS-02-d.png` · Mobile: `img/LS-02-m.png`

### LS-03 — Featured stat + two side stats

- **Page + section:** LS · stats (200+ / 20 / 86%)
- **CONTENT SHAPE:** same 1+2 stat shape as BXCI-03. Featured `200+`, sides `20` and `86%`, plus a one-line as-of note.
- **Counts:** 3 stats. ~28 words.
- **GEOMETRY (1440):** pad 56 / 160. Featured 160/224/300. Side labels 16/24/300. White.
- **Interactions:** footnote links
- **Mobile:** stack. 744px.
- **Good for:** three proof points. Prefer this or BXCI-03 when Falcon has exactly three figures and one should dominate.

Desktop: `img/LS-03-d.png` · Mobile: `img/LS-03-m.png`

### LS-04 — What we do (3 long pillars, dark)

- **Page + section:** LS · What we do
- **CONTENT SHAPE:** eyebrow + long claim + 3 title+long-paragraph pillars with a 3:4 still. Same family as BXCI-04; copy is denser (~213 words).
- **Counts:** 3 pillars. ~213 words. Still 624×832, 3:4.
- **GEOMETRY (1440):** pad 160 / 160. Dark. Claim 48/72/300. Title 24/36/300. Body 18/27/300.
- **Interactions:** footnote links
- **Mobile:** long stack. 2354px.
- **Good for:** three dense explanations. If Falcon copy is 1–2 sentences per pillar, BXCI-04 / DC-03 is closer.

Desktop: `img/LS-04-d.png` · Mobile: `img/LS-04-m.png`

### LS-05 — Featured video (full-width 16:9, dark)

- **Page + section:** LS · Nick Galakatos interview still/video
- **CONTENT SHAPE:** one 16:9 video, no adjacent copy. Dark, stacked after What we do.
- **Counts:** 0 words. Video/poster 1264×711, **16:9**.
- **GEOMETRY (1440):** pad 56 / 160. Dark.
- **Interactions:** video modal
- **Mobile:** 16:9 full width. 557px.
- **Good for:** a single interview/reel. Different from DC-02 (which adds title+caption on the still).

Desktop: `img/LS-05-d.png` · Mobile: `img/LS-05-m.png`

### LS-06 — Case studies tabs (3)

- **Page + section:** LS · Case Studies
- **CONTENT SHAPE:** eyebrow + long claim + 3 tabs. Active tab: title + ~80-word story + Read more + 16:9 still.
- **Counts:** 3 tabs. Visible panel ~88 words + 1 still 704×396.
- **GEOMETRY (1440):** 16-col / 1264. Pad 160 / 160. White. Eyebrow 16/24/400. Claim 48/72/300. Tab labels 18/27/400. Body 18/27/300. Split story / still.
- **Interactions:** tabs (Moderna / Alnylam / Anthos)
- **Mobile:** tabs become a stacked or wrapping control; panel stacks. 1473px.
- **Good for:** 3 named case studies that share one viewport. Not a 3-card row (use LS-07) and not an accordion (use BXCI-05).

Desktop: `img/LS-06-d.png` · Mobile: `img/LS-06-m.png`

### LS-07 — News & insights (3 cards with excerpts)

- **Page + section:** LS · News & Insights
- **CONTENT SHAPE:** eyebrow + H2 + 3 cards: 16:9 still + title + 2–3 line excerpt + Read more. The measured Life Sciences news pattern Falcon already uses.
- **Counts:** 3 cards. ~147 words. Stills 3× 352×198, 16:9.
- **GEOMETRY (1440):** 16-col / 1264. Cards 5/6/5. Heading→cards 104px. Pad 56 / 120 (article-stacked bottom). Eyebrow 16/24/400. Title 24/36/300. Excerpt 18/27/300. White.
- **Interactions:** card hover / Read more
- **Mobile:** stack. 2144px.
- **Good for:** Falcon Insights / updates. Prefer this over BXCI-09 when cards need excerpts.

Desktop: `img/LS-07-d.png` · Mobile: `img/LS-07-m.png`

### LS-08 — Footnotes

- **Page + section:** LS · numbered notes
- **CONTENT SHAPE:** long numbered legal paragraphs (6 notes).
- **Counts:** ~629 words. 6 items.
- **GEOMETRY (1440):** 16-col / 1264. Pad 40 / 160. Body 14/21/300. White.
- **Interactions:** none
- **Mobile:** 1945px of small type.
- **Good for:** a real footnote block. Falcon should keep this in the footer or a compact notes band — do not hero it.

Desktop: `img/LS-08-d.png` · Mobile: `img/LS-08-m.png`

### LS-09 — Quote (dark)

- **Page + section:** LS · Nick Galakatos quote
- **CONTENT SHAPE:** 3:4 portrait + large quote + name/title. Same as BXCI-10.
- **Counts:** ~46 words. Portrait 304×403.
- **GEOMETRY (1440):** pad 160 / 160. Dark. Quote 40/60/300.
- **Interactions:** carousel (1 slide)
- **Mobile:** stack. 1093px.
- **Good for:** one real quote. Same rule: no invented speaker.

Desktop: `img/LS-09-d.png` · Mobile: `img/LS-09-m.png`

---

## Shape cheat sheet (pick by Falcon content)

| Falcon content | Start with |
| --- | --- |
| Name + one lead, no still | BXCI-01 / LS-01 |
| Name + lead + downloads | PWS-01 / DC-01 |
| One wide still under the header | BXCI-02 / LS-02 |
| Wide still **with** title/caption | DC-02 |
| 3 stats, one featured | BXCI-03 / LS-03 |
| 3 equal compact stats | IR-02 |
| 3 text-only pillars | BXCI-07 / DC-03 |
| 3 pillars with stills | BXCI-04 / LS-04 |
| 4–8 expandable rows | BXCI-05 / PWS-03 |
| Short FAQ (5) | PWS-09 |
| Long FAQ (7) + lead | DC-06 |
| 3 news cards, titles only | BXCI-09 |
| 3 news cards + excerpts | LS-07 |
| One story + 16:9 | BXCI-06 / BXCI-08 / DC-04 |
| 3 tabbed case studies | LS-06 |
| One quote + portrait | BXCI-10 / DC-07 / LS-09 |
| One interview video, no copy | LS-05 |
| Two charts + disclaimer | PWS-05 |
| One wide chart | PWS-06 |
| Heading + one paragraph | PWS-04 |
| Long essay, no chrome | PWS-07 |
| 8 jump links | PWS-10 |
| In-page contact CTA | DC-08 |
| Live quote / history widgets | IR-03 / IR-04 (rarely Falcon) |
