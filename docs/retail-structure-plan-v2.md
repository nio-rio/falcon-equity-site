# Retail industry page — structure plan v2 (`/industries/retail`)

**Why this exists.** Ling's review of v1: *"the design is not good, lots of sections doesn't look like Blackstone."* v1 invented its own rhythm — eleven near-identical `ret-band` stacks, each opening with eyebrow → H2 → intro, then cards or rows. Blackstone never does that. This plan rebuilds the page out of the **measured** section library (`docs/section-library-live/LIBRARY.md`, 52 sections from the five pages Ling named plus the Blackstone and Falcon home pages), so every band on the page names the real section it was built from.

Copy is unchanged from the Notion outline (stage 1). Figures still come from `SERVICES` / `STATS`, never re-typed. Tokens, type and components stay Falcon's — the library supplies **layout order, grid, pad and type sizes**, not Blackstone's brand.

## The library numbers used throughout

| Property | Blackstone (measured) | This page |
| --- | --- | --- |
| Container | 1264px, 16 tracks × 64px, gutter 16px | same (`.ret-grid`, 4 → 8 → 16 columns) |
| Band pad | 160 top+bottom; 56 when the next band shares the theme | 80 / 96 / 144 / 160 via `--ret-band-pad` (matches MCA's measured rhythm) |
| Page-header pad | 48 top / 120 bottom | same |
| Eyebrow | 16/24/400, 1.28px, 56px rule | 14/21/400, 1.12px, 48×2px rule (Falcon token) |
| H1 | 56 / 84 / 300 | 40/48 → 56/84/300 at 1280 |
| Claim (H2) | 48 / 72 / 300 | 32/44 → 48/72/300 at 1280 |
| Body | 18 / 27 / 300, 0.32px | 18/27/300 for prose, 16/24 for dense rows and the table |
| Figure | 56px (BMX) → 160px (featured) | 32 → 48px glance values, 56px numerals in the cases row |
| Link | label + 40–44px outline circle | `.arrow-cta` + `CircleArrow` (44px) |

## Section map

| # | Section | Blackstone source — id + what it does | Our content | Adaptation, stated |
| --- | --- | --- | --- | --- |
| 1 | **Page header** | `TF-00` — https://www.blackstone.com/the-firm/ — H1 in cols 1–7 at 56/84/300, one lead paragraph in cols 10–13, no image, no CTA, 48 top / 120 bottom | H1 `Retail business loans`; lead "Stock the shelves before the money comes back…"; one circle-arrow Apply | Unchanged geometry. **Apply drops Button040 for `.arrow-cta`** — DESIGN-SYSTEM §Inner-page patterns allows one Apply-style arrow in an inner hero and forbids 040 there. v1 had a 040 pill in the hero. |
| 2 | **Glance figures** | `IR-00` / `PE-02` — ir.blackstone.com/overview — label above a 1px rule, figure under it, 3–4 across | Four cells: `Up to $5,000,000` · `24-48 hours` · `0% agreement fee` · `300+ businesses` | 4 cells instead of 3. Hairline **above** each cell (measured), values 48px display, labels 14px muted. Cells are not links. |
| 3 | **Header still** | `TF-01` — https://www.blackstone.com/the-firm/ — one 16:9 still across the 1264 content width with a caption strip under it | One labelled placeholder still: stocked shelves seen from the aisle | Kept the still, **dropped the caption strip** (there is nothing to credit and no second link to place). 16:9, no radius, no shadow. |
| 4 | **Answer first** | `TF-02` — https://www.blackstone.com/the-firm/ — near-black band; claim H2 in cols 1–8; three titled rows stacked in cols 10–16 on 1px rules at 16% white | Eyebrow `In short`, H2 `How retail businesses use Falcon.`, the 44-word direct answer, four takeaways | 3 rows → **4 numbered rows** (`01`–`04`) because each takeaway is a single sentence, not a title+body pair; the answer paragraph sits above them in the same right column. Band goes **Martinique** (`--color-martinique`), not black — Falcon's dark is Martinique Darker, used for `data-band="dark"`. |
| 5 | **Four cash pressures** | `TF-05` — https://www.blackstone.com/the-firm/ — "Our values": eyebrow + rule, then titled-prose columns with no card chrome, second row offset | Eyebrow `What it costs you`, H2 `Four things eat a retailer's cash`, intro, four title+body items | **3-up → 2×2 with the second row offset by 2 tracks** (exactly TF-05's staggered rhythm). No cards, no fills, no rules between items. **The 4:5 stockroom still is dropped** — TF-05 carries no image, and the page already has a header still plus three product stills. |
| 6 | **The retail year** | `TF-03` / `PE-05` — https://www.blackstone.com/the-firm/ , https://www.blackstone.com/our-businesses/private-equity/ — titled rows starting at column 5, hairline between, chevron right | Eyebrow `Why timing matters`, H2, intro, four period rows (period · title · body) | Rows kept, **chevrons removed**: nothing opens, and the copy must stay visible to search and to an AI answer (accordion only for the FAQ). Period label sits in cols 1–3 at 14px muted, title cols 5–9 at 24px, body cols 10–16. Band is `--color-lilac-light`. |
| 7 | **Which funding fits** | **No donor.** No Blackstone page has a five-column comparison table | Eyebrow `Find your situation`, H2, intro, 8-row × 5-column table | Built on our own `.r-table` (global.css) restyled to the library's table conventions: 14px uppercase headers, 1px `--color-line` rules, 16/24 cells, no zebra, no fills, row hover `--color-lilac-light`. This is the one band the library cannot source, and the plan says so. |
| 8 | **Three products** | `PE-04` — https://www.blackstone.com/our-businesses/private-equity/ — three cards: 16:9 still (352×198), 20px title, 16/24 body, circle-arrow at the foot | Eyebrow `Products`, H2, three products with live spec (who / amounts / terms / requirements) and a circle-arrow to each product page; one closing line, `No restricted industries or states`, with the two article links | Spec block as a `<dl>`: 14px muted `dt`, 16px `dd`, hairline above the pair, 56px gap to the link. Still placeholders only, no card border, no fill. **Requirements are not restated** — the card's own Requirements row is the verbatim spec, and the product page carries the full set; a summary table here repeated four of its five rows and repeated the FAQ's documents list. The closing line is one hairline, one sentence, two links, because the no-restricted fact is a differentiator nothing else on the page says. |
| 9 | **Not the right fit** | `APM-09` — https://www.blackstone.com/pws/accessing-private-markets/ — two-column link grid, each row a label with a right-aligned arrow | Eyebrow `Not the right fit`, H2, three exits (title, body, product link, read link) | 3 items in a 2-column grid (2 + 1). The product link is the circle-arrow; the article link stays a plain drawn underline so two links never compete. Band `--color-lilac-light`. |
| 10 | **Three files in practice** | `BMX-03…06` — https://www.bmacx.com/why-blackstone/ — 1/3 columns: title, one line, small-caps label over a 56px figure | Eyebrow `How it looks in practice`, H2, three numbered cases | The **figure slot holds the case number** (`01`–`03`) at 56px display, since these cases have no metric. Everything else is BMX's stat-card geometry: hairline above, title 20px, body 16/24. |
| 11 | **FAQ** | `APM-08` / `BMX-09` — https://www.blackstone.com/pws/accessing-private-markets/ — heading left, accordion rows right, hairline rows, chevron/circle-plus | Eyebrow `FAQ`, H2, seven questions | Heading in cols 1–4, rows in cols 6–16 (BMX-10's geometry). Question 20px display, answer 16/24 in a tinted panel-free block. Closed by default; `FAQPage` schema unchanged. |

Band rhythm, top to bottom: white → **Martinique (dark)** → white → lilac-light → white → white → lilac-light → white → white → SiteCta (dark). No two tinted bands touch. Eleven bands. The requirements band is gone rather than merged: its figures were already in each card's spec.

## Rejected candidates, and why

- **`HOME-07` email capture** — a form on a funding page competes with Apply. Rejected.
- **`HOME-01` promo carousel** — rotates featured stories we do not have; heaviest band in the library. Rejected.
- **`HOME-04` marquee** — brand moment with no information. Rejected.
- **`APM-04` heading-less continuation bands** — Blackstone uses them to make a long argument feel continuous, but they hide structure from scanning and from AI answers. Rejected for a page whose job is being quoted by an answer engine.
- **`TF-03` chevrons on the year rows / `BMX-09` circle-plus on the requirement rows** — accordions hide exactly the copy this page wants extracted. Kept the row geometry, dropped the disclosure control.
- **`IR-00` as a whole** — the only measurable investor-relations section; its financial-table modules are JavaScript-populated and returned empty shells to the extractor. Used for its stat-row shape only.

## Build notes

- One stylesheet, `src/styles/retail.css`, rewritten from the `mca.css` primitives (`ret-grid` 4/8/16, eyebrow, claim, card link, accordion) with the new bands under a dated block. No new tokens, no new fonts, no hex greys.
- Media is `Media.astro` with `labeled` placeholders: 16:9 for the header still and the three product cards. No people.
- No `Button040` on this page. Every CTA is `.arrow-cta` + `CircleArrow` except the global SiteCta in the layout.
- Schema unchanged: `FAQPage` (7), `BreadcrumbList` (3), three `Service` nodes.
- `/industries/retail` stays lifted out of the industry redirects; the route rules are untouched by this rebuild.
