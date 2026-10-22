# Blackstone learn-more pages — section library (round 2)

Four content pages plus the IR overview, measured 2026-10-22. Sits alongside `LIBRARY.md` (round 1) and uses the same picking rule: **choose by content shape, not by look.** Raw numbers are in `meta-learnmore.json`; crops are `img/<ID>-d.png` and `img/<ID>-m.png`.

## Provenance and method

- Live `blackstone.com` and `bmacx.com` return **403 Cloudflare** from this environment (curl and a headless browser both get "Just a moment…"). Everything here was measured from **Wayback snapshots**, rendered in local Chrome at 1440 and 390:

| Prefix | Page | Snapshot |
| --- | --- | --- |
| TF | `blackstone.com/the-firm/` | 2026-10-11 |
| PE | `blackstone.com/our-businesses/private-equity/` | 2026-10-17 |
| APM | `blackstone.com/pws/accessing-private-markets/` | 2026-05-21 |
| BMX | `bmacx.com/why-blackstone/` | 2026-03-29 |
| IR overview | `ir.blackstone.com/overview/default.aspx` | — (see note at the end) |

- Numbers are `getComputedStyle` / `getBoundingClientRect` at a 1440 and a 390 viewport, with the Wayback toolbar hidden.
- The round-1 shared geometry holds on all four pages: 16-column grid of 64px tracks, **16px gutter**, container **1264px**, base pad **160 / 160** on a theme change, **56** stacked top on the same theme, page-header pad **48 top / 120 bottom** (64 on APM). At 390 the same bands read **80**, header **40 / 80**, and H1 drops 56/84 → 40/60.
- Where a shape is already in `LIBRARY.md`, the entry below says so and does not re-describe it. The new ids exist to be *cited in a plan*, not to duplicate round 1.

---

## TF — The Firm (`blackstone.com/the-firm/`)

### TF-01 — Page header, long standfirst
- **CONTENT SHAPE:** H1 (56/84/300) plus a 2–3 sentence standfirst at body size. No eyebrow, no media, no CTA.
- **Counts:** 58 words total.
- **GEOMETRY:** 48 top / 120 bottom; container 1264. H1 56/84/300, body 18/27/300.
- **Mobile:** 40 / 80, H1 40/60, section grows 365 → 455.
- **Good for:** a page that opens with a claim rather than a product (About, Partners). Same family as **BXCI-01**, but BXCI-01 carries a 37-word body and this one runs to 58 — use TF-01 when the standfirst is longer.

### TF-02 — Hero media (full-width 16:9)
- **Matches BXCI-02** (1264 × 542, aspect 2.333, cover, pad 0 / 104). Listed only so plans can cite a The Firm source.

### TF-03 — What we do (3 pillars, dark, one 3:4 still)
- **Matches LS-04 / BXCI-04** in shape: eyebrow, 48/72 claim, then 3 title + paragraph pillars beside a 624 × 832 (0.75) still on a black band, pad 160 / 160. The Firm's pillars are short (~25 words); Life Sciences' are long. Use the LS-04 id when Falcon copy is dense, BXCI-04 when it is one line.

### TF-04 — Clients accordion (4 rows, light)
- **CONTENT SHAPE:** eyebrow, 48/72 claim, then accordion rows where the closed state is a title only.
- **Counts:** 4 rows, 50 words closed.
- **GEOMETRY:** pad 160 / 160, white, row title 24/36/300, hairline rules.
- **Good for:** "who is this for" with four audiences that each need one paragraph. **BXCI-05** is the same block with 4 strategy rows — cite BXCI-05.

### TF-05 — Quote (portrait + pull quote, dark)
- **Matches BXCI-10** (304 × 405 portrait left at 0.75, quote right, dark band, 160 / 160). Note the internal 4-column sub-grid at 784px for the attribution.

### TF-06 — Values grid (eyebrow + claim + a 3-up of titled prose, no media)
- **CONTENT SHAPE:** eyebrow (16/24 uppercase), one 48/72 claim, an optional singular link on the claim row ("Learn More About Our People"), then a **three-up row of titled prose items**: each item is a 24/36 title over a 2–4 sentence body. No rules, no borders, no fills, no numbers, no images. Six items wrap to two rows of three.
- **Counts:** 6 items, 134 words, 1 link. Each body 15–30 words.
- **GEOMETRY:** pad 160 / 160, white, container 1264. Each item is ~5 of 16 columns (**352–384px** at 1440) inside the standard 16 × 64px / 16px-gutter grid; title and body stack inside the item.
- **Mobile:** pad 80 / 80; the items stack to one column, so the section grows 1174 → 1707.
- **Good for:** *the most reusable new shape in this batch.* Three to six equal, non-hierarchical statements that each need two sentences: values, "four things that eat your cash", a seasonal calendar, a document checklist. It is prose in a grid — no card chrome at all, so it reads as part of the argument rather than as a component.
- **Falcon note:** this is the shape for content that a **table** would flatten and a **card grid** would over-decorate. Verified against the crop, not the class name: the density comes from the 5-column measure and the absence of rules, and both are lost if the items get borders or a fill.

### TF-07 — Featured video (full-width 16:9, dark-capable)
- **Matches LS-05.** No new information; the only novel detail is pad 56 / 160 when it follows a same-theme band.

---

## PE — Private Equity (`blackstone.com/our-businesses/private-equity/`)

### PE-01 — Page header
- **Matches BXCI-01**: H1 + 30-word standfirst, 48 / 120. Use BXCI-01.

### PE-02 — Hero media
- **Matches BXCI-02.**

### PE-03 — Featured stat + two side stats
- **CONTENT SHAPE:** one 32/48 H4 label over a very large figure, then two smaller label-over-value cells on the right, hairline rule above the small values, footnote line under the band.
- **Counts:** 3 figures + note, 24 words.
- **GEOMETRY:** `56 / 160`, white, container 1264; the featured figure is 160/224 Sanomat in BXCI-03 — PE-03 uses a 32/48 label with a smaller value, i.e. the **compact** variant of the same block.
- **Mobile:** 40 / 80, stacks to one column, 621 → 744.
- **Good for:** a 3-figure proof band where one number leads. This is the shape `PilotGlance` already implements in Falcon for 4 equal cells — cite **BXCI-03** for the 1 + 2, and PE-03 when all cells are the same weight.

### PE-04 — What we do (3 long pillars, dark, one 3:4 still)
- **Matches LS-04.** 125 words here, so LS-04's density note applies.

### PE-05 — Portfolio grid (2 columns of titled company cards, light)
- **CONTENT SHAPE:** eyebrow, 48/72 claim, then a **two-column grid of repeated cards**: a 24/36 name, a one-line descriptor, and a text link. No images.
- **Counts:** 12 companies, 235 words, 40 nested card nodes, 12 links.
- **GEOMETRY:** pad 160 / 160, container 1264, 16-col grid with each card spanning 8.
- **Mobile:** pad 80 / 80, one column, 2074 → 3310 (the long tail of a big grid).
- **Good for:** a directory of same-shaped entries that each link out — company lists, product lists, partner or resource directories. **Falcon use:** an "all resources" or "products" index with 6–12 entries.

### PE-06 — Accordion used as a name list
- **CONTENT SHAPE:** an accordion whose closed rows are just names (3 rows, 3 words).
- **GEOMETRY:** pad 16 / 160 — it hugs the grid above it.
- **Good for:** nothing on its own; it is PE-05's tail rendered as rows. **Skip** unless a list needs progressive disclosure with a very short closed state.

### PE-07 — News & insights (three 16:9 story cards with kicker)
- **CONTENT SHAPE:** eyebrow, 48/72 claim, then 3 cards: 16:9 still, small category or source line, 24/36 title, optional excerpt. Same family as **LS-07**; PE-07 adds the kicker line above the title and runs taller (30 card nodes, 9 links).
- **GEOMETRY:** `56 / 160`, container 1264.
- **Good for:** a blog or insight strip with a source/category label. **BXCI-09** is the same with 3 cards and no section claim; **LS-07** adds excerpts. Falcon's blog slider already uses BXCI-08 as a slider — PE-07 is the grid version, for a blog index.

### PE-08 — Quote (dark)
- **Matches LS-09 / BXCI-10.**

---

## APM — Accessing Private Markets (`blackstone.com/pws/accessing-private-markets/`)

### APM-01 — Page header with a download link
- **CONTENT SHAPE:** H1, 20-word standfirst, and a single text link with a document glyph ("Download brochure"). No eyebrow, no media.
- **GEOMETRY:** `48 / 64` — the tight variant; page-header bottom pad is 64 here, not 120.
- **Good for:** a page that opens into a downloadable asset. **Falcon use:** the calculator or the credit-prep page could open with one action rather than a CTA pill.

### APM-02 — "What you need to know" (3 still cards under one claim)
- **CONTENT SHAPE:** eyebrow ("INTRODUCTION TO…"), a small H2 ("What You Need to Know"), 48/72 claim, then **3 cards each with a 16:9 still (352 × 198), a 24/36 title and a 2–3 sentence body**, then optional small-type source note.
- **Counts:** 3 cards, 121 words, 18 card nodes.
- **GEOMETRY:** `56 / 160`, white, container 1264, equal thirds.
- **Mobile:** `24 / 80`; cards stack with the still above the title; 932 → 1781.
- **Good for:** three parallel explanations with imagery — a "three ways this works" or "three things to check" band. **Note the double head:** an eyebrow *and* a small H2 before the claim. That is how Blackstone labels a sub-topic inside a long page. **Falcon use:** good for an industries index intro, or the education half of Partners.

### APM-03 — Explainer + exhibit (dark, 40/60 claim, wide image)
- **CONTENT SHAPE:** 40/60 claim, then 3–4 prose paragraphs (~250 words) in a narrow measure, then one **full-width exhibit image** (1264 × 586, 2.157) with an 18/27 caption, then a note.
- **GEOMETRY:** `160 / 160`, black, container 1264.
- **Mobile:** `80 / 80`, claim 32/48, image full width.
- **Good for:** a genuine explainer that needs a diagram. **Falcon use:** the calculator page's "how the maths works" band, or credit repair's "what a lender reads" band — the exhibit slot can hold a labelled placeholder.

### APM-04 — Featured split, 48/72 claim + 16:9
- **CONTENT SHAPE:** 48/72 claim and 2 paragraphs on one side, a 704 × 397 (1.775) still on the other. This is the *light, no-CTA* variant of the featured split (**BXCI-06** carries a CTA link and a 704 × 396 still on `56 / 160`).
- **GEOMETRY:** `160 / 64` — top pad full, bottom pad short, because APM-05 continues the same band.
- **Good for:** the opening beat of a two-part argument that continues below.

### APM-05 — Continuation of a split (prose + chart, no heading)
- **CONTENT SHAPE:** no heading at all: 294 words in a narrow measure plus one chart image, pad `64 / 160`.
- **Good for:** a second beat under APM-04. **Pitfall:** heading-less bands are how Blackstone makes a long argument feel continuous — but they are terrible for scanability and for AEO. Falcon should use them only when the copy genuinely continues the same thought.

### APM-06 — Featured split, dark
- **CONTENT SHAPE:** 48/72 claim, 108 words, 3 links, 704 × 397 still, black band, `160 / 160`. Same as APM-04 with the dark treatment.

### APM-07 — Explainer + exhibit (light, 40/60 claim)
- **CONTENT SHAPE:** as APM-03 but light, a shorter claim and a wide 1264 × 433 (2.917) exhibit. `160 / 160`.
- **Good for:** a second explainer that must not repeat the first one's dark treatment.

### APM-08 — Download band (one line + still + link)
- **CONTENT SHAPE:** 8 words, a 704 × 396 still, one link. `56 / 88`.
- **Good for:** a mid-page asset hand-off. **Falcon use:** "Get the 24–48 hour checklist" band, if a checklist PDF exists. Do not invent one.

### APM-09 — FAQ accordion (5 rows, 48/72 heading)
- **CONTENT SHAPE:** 48/72 heading, then accordion rows with title-only closed state. `56 / 160`.
- **Matches PWS-09 / BXCI-05.** Falcon's `PilotAccordion` already implements it. Cite PWS-09.

### APM-10 — Explore links (dark, 48/72 heading + 12 titled links in 2 columns)
- **CONTENT SHAPE:** 48/72 heading, then **titled rows in two columns**, each a title plus a one-line descriptor, all links, on a dark band. 30 words, 12 links. `160 / 160`.
- **Good for:** a "keep reading" index. **PWS-10** is the single-column 8-row version; APM-10 is the 2-column 12-row version. **Falcon use:** the blog index's topic rails, or About's "resources" tail.

---

## BMX — Why Blackstone (`bmacx.com/why-blackstone/`)

A different site from blackstone.com with the same design language: same 16-col / 1264 / 16px grid, same type scale, pads 160 / 160, 56 same-theme, 48 / 120 header, 40 / 60 for H3-level claims. Treat its geometry as interchangeable with the marketing pages.

### BMX-01 — Page header, no description
- **CONTENT SHAPE:** H1 and nothing else. 2 words. `48 / 120`.
- **Good for:** an index or landing page whose first section is the content. **Falcon use:** `/resources`, `/partners`, `/faq` if they open straight into a band.

### BMX-02 — Promo carousel (one slide)
- **CONTENT SHAPE:** full-width 1264 × 542 (2.332) still, then a 40/60 title and a 2-sentence body with a link. `0 / 104`.
- **Matches DC-02.** Note the claim here is 40/60, one step down from the 48/72 used on content claims.

### BMX-03 — Featured row: claim + still + body + links (dark opener)
- **CONTENT SHAPE:** 40/60 claim, 2–3 sentences, a 704 × 396 still and 3 links, on a black band, `160 / 64`.
- **Good for:** the **first of a run** — the row that introduces a sequence of claims.

### BMX-04 / 05 / 06 / 07 — Featured rows (claim + figure + still, repeated)
- **CONTENT SHAPE:** each row is a **40/60 claim (or no heading), one or two figures with a label, one 704 × 396 still**, pad `64 / 64` (last row `64 / 160`), all on the same dark band. Together they read as **one long section of 4–5 alternating claim/evidence rows**, not as four separate sections.
- **Counts:** 11–32 words each; one figure per row (5,100+ issuers, 550+ relationships, $1.3T AUM, 50 data scientists).
- **Mobile:** each row stacks still → claim → figure; pad 32 / 32.
- **Good for:** *the most useful structural idea in this batch for Falcon's proof pages.* A run of short claim-plus-one-number rows builds an argument without a single card. **Falcon use:** Partners ("what a partner gets": one claim + one number per row) and About's "how we work". **Caution:** every figure must already be a confirmed Falcon stat — this pattern starves without numbers.

### BMX-08 — Quote (light)
- **CONTENT SHAPE:** portrait 304 × 403 + quote + name/title, light band, `160 / 160`. **Matches DC-07.**

### BMX-09 — Closing promo (line + still + link)
- **CONTENT SHAPE:** 13 words, 704 × 396 still, one link, `56 / 160`. Same as APM-08 with a light band.

### BMX-10 — Explore more (48/72 heading + titled link rows)
- **CONTENT SHAPE:** 48/72 heading, then titled rows with a one-line descriptor, 4 links, `56 / 160`. **PWS-10 family.**

### BMX-11 — Disclaimer / legal band
- **CONTENT SHAPE:** 40/72 small heading and dense small-type disclosure text, `160 / 160`.
- **Falcon note:** **do not copy this as a section.** Falcon's legal text lives in the footer (`src/data/disclosure.ts`) and never sits near a CTA.

---

## IR overview (`ir.blackstone.com/overview/default.aspx`) — nothing to take

Rendered 2026-10-22. The page is a Q4 investor microsite, and its content modules are populated by JavaScript that the archived copy cannot execute: the snapshot returns a **custom header (204px), a stock-header quote band, a "Latest Financials — Loading…" widget, a contact-information block, a footnotes block and the footer**. There is no hero, no claim, no cards, and no section we could measure.

- The IR geometry that *is* usable was already captured in round 1 from `ir.blackstone.com/bx-share-information/default.aspx` (IR-01 … IR-06), and `LIBRARY.md` already warns that **IR is a Q4 site — do not mix its geometry with the marketing tokens.**
- Verdict: the IR overview contributes **one idea and no geometry** — a page can open with a live-data band (today's figure, updated) instead of a marketing claim. Falcon has no live data feed, so nothing here is buildable. Recorded so the next agent does not spend an hour re-discovering it.

---

## What these five pages add, in one table

| New shape | Id | Use it for |
| --- | --- | --- |
| Values grid (eyebrow + claim + a 3-up of titled prose, no chrome) | **TF-06** | 3–6 equal statements needing two sentences each: cash pressures, a seasonal calendar, a document list |
| Featured row run (claim + one figure + still, repeated on one band) | **BMX-04 … 07** | proof pages: "what a partner gets", "how we work" — only where Falcon has confirmed figures |
| Explainer + exhibit (40/60 claim, ~250 words, wide diagram) | **APM-03 / APM-07** | calculator maths, "what a lender reads" |
| "What you need to know" (3 still cards, eyebrow + small H2 + claim) | **APM-02** | three parallel explanations with imagery; industries index intro |
| Two-column titled link grid (12 links) | **APM-10** | blog topics, resource rails |
| Page header with one download action | **APM-01** | a page that opens into an asset |
| Header with a long standfirst | **TF-01** | About / Partners |
| Portfolio directory grid (2-col, 12 entries) | **PE-05** | a directory of links: resources, products |
| News grid with kicker (3 cards) | **PE-07** | blog index |

Everything else in this batch is a duplicate of a round-1 id, and the closest round-1 id is named in the entry so a plan cites the original rather than a near-copy.
