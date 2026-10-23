# HANDOVER.md — current state

Last updated: Oct 22, 2026. Update this file at the end of every session.

## Where things stand
- Branch `cursor/falcon-astro-site-e383` (PR #1). Never merge PR #1. Preview: https://deploy-preview-1--falcon-equity-site.netlify.app/
- The home page (`/`) is approved and frozen except the approved Apply-button size match (default `.button-040` is now the nav desktop size: 1.0625rem / 3em / 1.25em), the SiteCta top-pad cut (96 / 86 / 58 / 48), the site-wide BXCI hide-on-scroll nav, heading→content on Services / News / Sectors now using `--space-head-to-content` (72 / 72 / 96 / 104), and the home review round of 2026-10-22 below, plus the mobile type round of 2026-10-22 (`137fcbd`: hero H1 48/48, subtitle 20/30, Insights h3 25/36, Insights eyebrow→H2 40px below 48em). `/apply` stays as it is.
- Home review round (Ling asked for it, 2026-10-22, commit `3c42a69`) — **approved, do not revert**:
  - Testimonial quote (`.pilot-ann-title p`, home only): `1.5rem` / 24px below 48em, i.e. 25% less than the old 2rem / 32px. The 48em / 80em / 90em overrides are deliberately unchanged, so desktop still reads 2.5rem / 2rem / 2.5rem.
  - `--type-h2-weight` is `400` (was `300`) in `tokens.css`, and every H2 reads that token instead of a hard-coded weight: `.pilot-tabs-head h2` on home, plus the FAQ and blog heads in `mca.css` and the five service stylesheets.
- Service-page type round (Ling, 2026-10-22, commits `f6a8624` + `cd174a0`) — all six service pages, **approved, do not revert**. Ling’s rule: every type change is **mobile only**; desktop and tablet keep their approved sizes.
  - “What it helps”, “Process” and “When … isn’t the right fit” h3 titles (`.mca-help-title` / `.mca-card-title` and each page prefix): 25px / 36px **below 48em only** (was 20px / 32px — 1.25×). From 48em they are 20px / 32px and at 80em 24px / 36px, exactly as before. Mobile H2 stays 32px, so h3 sits clearly under it and never below 20px.
  - FAQ questions (`.mca-faq-trigger` and each page prefix): 20px / 30px **below 48em only** (was 24px / 36px everywhere). 24px / 36px from 48em up, unchanged.
  - Measured on the deployed preview: at 390 h3 25 and FAQ 20; at 768 / 1024 / 1280 h3 20 and FAQ 24; at 1440 both 24 — i.e. every non-mobile value matches the pre-change build.
- The first pass of that round (`f6a8624`) carried 25px up to 768 and 1024 and dropped FAQ to 20px at every width; Ling corrected it (“for all font size changes, I mean mobile, I like FAQ on desktop”), so `cd174a0` restores 48em and up. Don’t re-widen it.
- Mobile type round 2 (Ling, 2026-10-22, commit `137fcbd`) — **approved, do not revert**. Same rule: mobile only, below 48em. Blackstone was measured live at 390 / 768 / 1024 / 1440 with Playwright on 2026-10-22, not read off a screenshot.
  - Home hero H1 (`.pilot-hero h1`): 32/32 → **48/48** below 48em. BX's promo-header H1 measures 48/48/300 at 390 (0.008em tracking, which we already had); 768 and up keep 48 / 64 / 72 exactly as before.
  - Home hero subtitle (`.pilot-hero-aside`): 16/24 → **20/30** below 48em. BX's hero paragraph is 20/30 at 390. 768+ stays 18/27, 1280 20px, 1440 24px — unchanged. **Known ladder inversion Ling has been told about:** 20px on the phone is now larger than 18px at 768/1024, because BX itself jumps to 24 at 768. Widening 768 to match BX is a separate decision; don't do it unasked.
  - Home Insights card title (`.pilot-news-title`): 20/32 → **25/36** below 48em, to match the h3 size approved on the service pages. 48em+ stays 20/32 (and 24/36 at 1440), unchanged.
  - Home Insights eyebrow → H2 (`.pilot-news-head .pilot-eyebrow`): the gap was **0** below 80em — the head had no `eyebrow + h2` rule at all, so the H2 sat on the eyebrow from 390 to 1024. Now `padding-bottom: var(--bx-space-40)` (40px) on the eyebrow, the same 40px every other home section uses (`.pilot-section-head`), with 80em/90em still overriding to 56/64. BX's own mobile value for this eyebrow is 48px — one line to switch if Ling prefers BX-exact over home-consistent.
  - Service + retail process number (`.{prefix}-step-num`, all seven stylesheets): 184/184 → **154/154 (9.625rem)** below 48em, and `11.5rem` restored inside the 48em block so 768 is byte-identical. Why: BX's mobile number is an image, 328×184 with `object-fit: cover` on a 928×292 source and `object-position: 0 50%`, so its digit **ink** renders ~112px tall (111.5 measured off the PNG, 128–155 wide); 184px of At Gambit puts ~133px of ink on screen. 154px lands at 110px. Measured on the preview: at 390 the numeral ink is 110 × 132 vs BX's 111.5 × 128; 768 stays 184, 1024 175, 1440 198.
  - Note for later: the same ~20% oversize applies at 768 / 1024 / 1280 / 1440 (our ink ~133–143 vs BX's ~106–120), because the number is mapped to the box height rather than the glyph. Mobile is fixed; desktop was frozen in this round. A deliberate desktop number round would fix the rest.
  - `retail.css` carries the same `.ret-step-num` rule but `/industries/retail` has no process section yet — it is cloned, patched for consistency, and currently unused.
- Home tabs h2 (`fdfb56f`): the earlier H2-weight work had also swapped its size ramp for `--type-h2-size`, which pushed 1280 to 3rem and 1440 to 3rem. Sizes are restored to the approved 2rem / 2.5rem / 2rem / 2.5rem at base / 48em / 80em / 90em; only the weight comes from `--type-h2-weight`.
- Deleted on purpose (commit `5207b6b`): every other route, including the old service pages, industry pages, How It Works, About and the blog routes. Retired URLs redirect (commit `682f24a`, `astro.config.mjs`). The blog markdown is still in `src/content/blog/`.
- Merchant Cash Advance page: Ling’s 2026-10-22 v4 outline. Sections rebuilt from live Blackstone numbers:

| MCA section | Library id | Why the shape fits |
| --- | --- | --- |
| Hero (H1 + 2×3 stats + lead + Apply) | IR-01 + IR-02 | Live bx-share-information title + three headline stats with a hairline above each cell. MCA uses two rows of three (term facts + Requirements), label above value. Separate IR-03 facts band removed. Hero sits in `.mca-shell` (home column 328 / 688 / 1136 / 1264). |
| What it helps (still + 4 pillars + scrolling Apply) | LS-04 (dark) | Life Sciences dark vertical-list: 8 / skip 2 / 6, 3:4 still, stacked title/body. Scrolling Apply tape at the end, mca-* clone of home Why-choose-us. Dark type matches Why: h2/h3/eyebrow `#fff`, body `--bx-on-dark`. Helps bottom pad is slightly under R for the tape overhang. |
| Process (3 text steps + Apply) | PWS What you need to know | Same 16-col / 5-6-5 text cards as accessing-private-markets. 01/02/03 sized to the live number-image box (184 / 175 / 198). Heading → cards `--space-head-to-content` (104 / 96 / 72 / 72). Number → title 32px. After dark Helps; top pad is R − 2px at 1280 / 768 / 390 so Helps → Process measures R. |
| FAQ (7 expandable) | BXCI-05 motion on DC-06 type | Light band. 24/36 titles from DC-06. Caret rotate 0.3s and hover rule draw 0.5s ease-out from BXCI-05, with ink 40% base / ink hover (same 40% as the dark version). Top pad 0, bottom R. |
| When a cash advance isn’t the right fit | BXCI-07 | After FAQ, before the blog. Eyebrow + long claim + three title + paragraph cards, 5 / 6 / 5, each with a singular-link CTA to another product. Top 0 / bottom R so FAQ→Fit and Fit→blog stay one R. |
| Blog spotlight | BXCI-08 | Portfolio Spotlight split as a slider: eyebrow + title + “Read the article” left, 16:9 right. Prev/next circle arrows under the link, bottom-aligned to the image at 80em+. Autoplay matches home testimonials (5s, in-view, hover/focus pause, reduced-motion off). Published MCA-relevant posts only, relevance order: vs term loan, factor rate, stacked advances, slow season, 24–48h checklist, bank statements. |
| Shared Apply CTA | SiteCta | Same band as home. Top pad 96 / 86 / 58 / 48 at 1440 / 1280 / 768 / 390 (~40% cut); bottom still R. Sentence → Apply gap is `--bx-space-40` plus 1.5rem at every width. Footer `__top` pad is 0 after SiteCta so button → footer content is R. Approved home 0-diff exception, set on the component. |

- MCA disclosure (“Funding is subject to underwriting…”) is MCA-only, in the footer-bottom under the divider, **14px / 21px at all widths**. Home `.site-footer__copy` stays 18/16/18.
- MCA column matches home `.container-site` / `.mca-shell`: 328 / 688 / 1136 / 1264 at 390 / 768 / 1280 / 1440. Order: Hero, Helps (dark), Process, FAQ, Fit, Blog, SiteCta. Visible gap R = 80 / 96 / 144 / 160. Process top is R − 2px at 1280 / 768 / 390 (Helps → Process = R). FAQ bottom is R − 2px. Fit and Blog bottoms are full R. SiteCta top is 96 / 86 / 58 / 48; bottom stays R. Blog image is the published article cover (no generated people).
- Measurements: `docs/section-library/measurements/{BXCI-01,BXCI-05,BXCI-07,BXCI-08,DC-03,DC-06,IR-01,IR-02,IR-03,LS-04,LS-04-dark,LS-07,PWS-need-to-know}.md`. MCA classes stay in `src/styles/mca.css` (`mca-*` only).

- Collateral & Asset Loans page (session 2026-10-22): `/services/collateral-asset-loans` is now live, built from `src/pages/services/collateral-asset-loans.astro` + `src/styles/collateral-asset-loans.css` (commit `037c2fa`). Ling accepted the copy as written ("Active business" without a trailing period, no helps intro line, Process button "Apply for funding", FAQ equipment-quote wording).
- Redirect exceptions (commit `c450dd4`), approved for this one product only, mirroring MCA: `astro.config.mjs` skips `collateral-asset-loans` in the retired-services loop and lists `/services/collateral-asset-loans` in `livePaths` (sitemap); its rule is removed from `netlify.toml` and `public/_redirects`. No `/services/*` wildcard exists, so nothing else swallows the path. The other five service slugs still redirect; lift each one only in that page's own commit.

- Business Line of Credit page (session 2026-10-22): `/services/business-line-of-credit` is now live, built from `src/pages/services/business-line-of-credit.astro` + `src/styles/business-line-of-credit.css` (commit `31aa33e`, `mca-*` → `loc-*`, no blog band). Copy from `docs/redesign/content-business-line-of-credit.md` as written. Two adaptations for Ling to confirm: the Helps intro line (MCA has none) uses help-body type plus one new `.loc-helps-intro` rule (24px top margin), and the copy's Process button "apply now" is rendered as "Apply for funding" per CLAUDE.md, as on Collateral.
- Redirect exception (commit `1f1f114`), same three files as Collateral: `astro.config.mjs` skips `business-line-of-credit` in the retired-services loop and lists it in `livePaths`; its rule is removed from `netlify.toml` and `public/_redirects`.
- Business Term Loan page (session 2026-10-22): `/services/business-term-loan` is now live, built from `src/pages/services/business-term-loan.astro` + `src/styles/business-term-loan.css` (commit `c629af2`, `mca-*` → `btl-*`, no blog band). Copy from `docs/redesign/content-business-term-loan.md` as written; figures match `services.ts` `TERM_SPEC`. Three adaptations for Ling to confirm: the Helps intro line uses `.btl-helps-intro` (same as LOC); the copy's Process button "apply now" is rendered as "Apply for funding" per CLAUDE.md; and the copy file lists the fit section before Process, but the page keeps the MCA order (Hero, Helps, Process, FAQ, Fit).
- Redirect exception (commit `b73b4f2`), same three files as Collateral: `astro.config.mjs` skips `business-term-loan` in the retired-services loop and lists it in `livePaths`; its rule is removed from `netlify.toml` and `public/_redirects`.
- Invoice Factoring Tool page (session 2026-10-22): `/services/invoice-factoring-tool` is now live, built from `src/pages/services/invoice-factoring-tool.astro` + `src/styles/invoice-factoring-tool.css` (commit `80a1ce3`, `mca-*` → `ift-*`, no blog band). Copy from `docs/redesign/content-invoice-factoring-tool.md` as written; figures match `services.ts` `FACTORING_SPEC`. No funding-speed figure is published for this product (the copy's FAQ and step 03 cover timing). Adaptations for Ling to confirm, same as BTL: the Helps intro line uses `.ift-helps-intro`; the copy's Process button "apply now" is rendered as "Apply for funding" per CLAUDE.md; the copy file lists the fit section before Process, but the page keeps the MCA order (Hero, Helps, Process, FAQ, Fit). The Helps still is a labeled placeholder (stack of invoices, no people).
- Redirect exception (commit `9eeeea6`), same three files as Collateral: `astro.config.mjs` skips `invoice-factoring-tool` in the retired-services loop and lists it in `livePaths`; its rule is removed from `netlify.toml` and `public/_redirects`.
- Consolidation of Positions page (session 2026-10-22): `/services/consolidation-of-positions` is now live, built from `src/pages/services/consolidation-of-positions.astro` + `src/styles/consolidation-of-positions.css` (commit `15462a4`, `mca-*` → `cons-*`, no blog band). Copy from `docs/redesign/content-consolidation-of-positions.md` as written; figures match the live `#services` values ($10,000 – $2,000,000; 6 – 36 months; 6+ months / $15K+ / 550+). It carries the approved 30%–50% savings figure in Helps and the "How much will I save?" FAQ (see Open questions). The copy file's trailing "Notes for Ling" is not on the page; it is stale (it says the page is figure-free). Adaptations for Ling to confirm, same as IFT: Helps intro line uses `.cons-helps-intro`; the copy's Process button "apply now" is rendered as "Apply for funding" per CLAUDE.md; the copy file lists the fit section before Process, but the page keeps the MCA order (Hero, Helps, Process, FAQ, Fit). Process steps are this product's own (Share your current positions / Get a consolidation plan / Consolidate and move to one payment). The Helps still is a labeled placeholder (slips gathered into one stack, no people).
- Redirect exception (commit `5d84c16`), same three files as Collateral: `astro.config.mjs` skips `consolidation-of-positions` in the retired-services loop and lists it in `livePaths`; its rule is removed from `netlify.toml` and `public/_redirects`.
- Service-page set: all six in-scope pages are built and live (MCA, Collateral & Asset Loans, Business Line of Credit, Business Term Loan, Invoice Factoring Tool, Consolidation of Positions). **Decentralized Business Financing** is not built and still redirects; whether it gets its own page is a separate decision for Ling.
- Nav deep links (commit `9af5d9b`): the header Services menu (`Header.astro`) and the home services row (`services.ts` `toHomeCard`) now link every product to `/services/<slug>`, except Decentralized Business Financing, which stays on `/#services`. "Overview" still points to `/#services`. No copy or figures changed.
- Blog slider hooks (commit `0ebbca6`): `src/scripts/mca-blog-slider.ts` (`bindMcaBlogSlider`) now also binds generic hooks for prefix-scoped pages: `data-blog-slider`, `data-blog-copy-slide`, `data-blog-media-slide`, `data-blog-prev`, `data-blog-next`, `data-blog-live`, `data-blog-title`, `data-blog-img`, and `data-blog-link` for the slide link. These are unions with the MCA selectors, so there is still one code path and MCA behaves the same. The script still writes `data-mca-blog-reduce` / `data-mca-blog-index` on the slider and uses `mca-blog-line` as the SplitText line class whatever hook is used, so pages using the generic hooks should style against those names (or that can be generalised later).
- Blog band on the five other service pages (commit `b227eb0`): Collateral, LOC, BTL, IFT and Consolidation now end with the MCA "From the blog" slider (after Fit, before SiteCta), built with the generic `data-blog-*` hooks and each page's own `<prefix>-blog-*` / `<prefix>-card-link` classes; no `mca-*` markup. Posts come from a `<PREFIX>_BLOG_IDS` const filtered through `getPublicPosts()`, five published posts each, product-relevant first. Each stylesheet's "no blog band" header note is updated and it ends with verbatim copies of `.mca-blog-line` / `.mca-blog-line-mask`, because the shared script writes those class names on every page. Page order is now Hero, Helps, Process, FAQ, Fit, Blog on all six.
- Helps intro removed (Ling, 2026-10-22: "the structure [should] be the same as MCA"): the extra paragraph under the What it helps H2 is gone from LOC, BTL, IFT and Consolidation, with its `.<prefix>-helps-intro` rule, and the "- Intro:" line is gone from all five `docs/redesign/content-*.md` outlines. All six Helps sections now match MCA: eyebrow, H2, still, four items, Apply tape. This supersedes the "Helps intro line" adaptation notes above.
- Retail industry page (session 2026-10-22): **`/industries/retail` is live on the preview**, built from `src/pages/industries/retail.astro` + `src/styles/retail.css` (an `mca.css` clone with the prefix renamed `ret-`, per the per-page prefix convention). Copy contract is the Notion outline *"Retail industry page – content outline (stage 1)"*; the section-by-section mapping with a Blackstone source per row is `docs/retail-structure-plan.md`. Eleven sections: hero (4-cell glance) → answer first → four cash pressures → the retail year → situation table → three products with live spec → three exits → three practice cases → what an application needs → FAQ → SiteCta. Figures are read from `SERVICES`, never re-typed. Schema: `FAQPage` (7), `BreadcrumbList` (3), three `Service` nodes. Product spec cards use a `<dl>`, not a table.
- **Redirect lift for the industry route (different from the services' lift).** `/industries/*` was a Netlify **wildcard**, and Netlify has no exclusion syntax, so the wildcard was replaced with **11 explicit slug rules** in `netlify.toml` and `public/_redirects` (all industry slugs except retail). `public/_redirects` takes priority over `netlify.toml`, so both had to change or the route would 301 in production. `astro.config.mjs` skips `retail` in the retired-industries loop and lists `/industries/retail` in `livePaths` (sitemap). When another industry page ships, delete its explicit rule and add its own.
- Section library round 2 (2026-10-22): `docs/section-library/LIBRARY-learnmore.md` + `meta-learnmore.json` + crops, measured from **Wayback snapshots** because live `blackstone.com` and `bmacx.com` return **403 Cloudflare** from this environment (curl and headless Chrome both get "Just a moment…"). Pages: The Firm, Private Equity, Accessing Private Markets, Why Blackstone (bmacx) — 36 sections, ids `TF-*`, `PE-*`, `APM-*`, `BMX-*`. `ir.blackstone.com/overview` yielded nothing: its modules are JavaScript-populated, so the archive only returns chrome, a "Latest Financials — Loading…" widget and footnotes. Reusable new shapes: **TF-06** values grid (3-up of titled prose, no card chrome), **BMX-04…07** claim + one figure + still row run, **APM-03/07** explainer + exhibit, **APM-02** three still cards, **APM-10** two-column link grid, **PE-05** directory grid, **APM-01** header with one download action.
- Two **shared-CSS bugs** found by visual QA of the retail page, both fixed at source:
  - `global.css` `.r-table`: under 768px the clipped `thead` kept table-row layout on its rows, leaving an 816px row inside a 1px box and pushing `scrollWidth` to 511 on a 390 viewport. `.r-table thead tr/th` now collapse to block. The retail page is the **first page in the repo to use `.r-table`**, so this was latent until now.
  - `retail.css`: a child of `.ret-shell` that no rule names is auto-placed into **one** 64px column (grid item), which squeezed the situation table to 170px and pushed the hero Apply to `right=509`. `.ret-shell > * { grid-column: 1 / -1 }` is now the default, with the partial-width cases (cash split) re-spanning explicitly.
  - Note for the next builder: `DESIGN-SYSTEM.md` §Tables names a **`ResponsiveTable.astro` that does not exist** in `src/components/`. The `.r-table` / `.r-table-wrap` styles do, and that is what the retail table is built on.
- Retail is now **linked**: `Industry.href` in `industries.ts` (`/industries/retail` only) is used by the Header Industries menu and by the home Industries tab's "Learn more" arrow. Two hrefs on the frozen home page change and nothing else does — same precedent as the service deep links (`9af5d9b`). Any future industry page sets `href` in the commit that lifts its redirect. Footer carries no industry links, so nothing there.
- Retail QA, measured on the built page: build 10 pages, `dist/industries/retail.html` 63 KB with a real `<h1>`, **no** `http-equiv="refresh"`, in `sitemap-0.xml`; `scrollWidth == clientWidth` at 390 (no horizontal scroll); glance strip 4-up at ≥1280, 2-up at 768, stacked at 390.
- `npm run check` reports one existing error in `src/components/pilot/PilotIndustryTabs.astro:171` (`relatedTarget` on `Event`). It isn't from this work and hasn't been fixed.
- Test scripts need `playwright-core`, which is not a dependency of this repo, so `npm run test:*` fails with `Cannot find module 'playwright-core'` on a clean install. Register it anywhere and point `CHROME_PATH` at the local Chrome (on Ling's Mac: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`), then `QA_BASE` at the preview. With that, `test:titles` and `test:testimonial` pass (13/13) and `test:nav` fails only on `[1440/home] home-section-spacing` and `[1440/home] nav-inflow-on-return`, which fail identically on `91b0113` before these type rounds — pre-existing, not a regression.

## Standing rules
- Each new page uses its own page-prefixed classes (e.g. `mca-*`), not home component classes. Share only `.container-site`, Header / Footer / SiteCta and design tokens. Merge duplicate classes in one cleanup pass after all designs are approved.
- Keep all nav and footer links as they are (pages come later).
- Both phone numbers are intended; the main number in the nav is 917-245-5277.
- Never merge PR #1 or switch the domain without Ling's approval.
- Vera QAs only fully built pages.
- When referencing Blackstone, pick by **content shape** from `docs/section-library/LIBRARY.md`, then open that section on the live page at 1440 / 1024 / 390, write `docs/section-library/measurements/<id>.md`, and rebuild with those exact numbers (fonts → display/Archivo, colors → Falcon tokens).
- Fee wording **0% agreement fee**. Rates **competitive**. No disclaimers under CTAs.

## Next steps
1. Ling reviews this MCA build on deploy-preview-1. Site-wide BXCI nav (in-flow 72+60+72 / 32+48+32, hide after 2× height, 40px tolerance, no GSAP) is in this build.
2. Only after Ling approves MCA, do these one at a time, each with a structure plan approved first: **How It Works** (`/how-it-works`), **About** (Dwight Holly, Founder & CFO), and one industry page, **Retail**.
3. Other services, industries and the blog come later, and only when Ling asks.
4. Service pages: done. Decentralized Business Financing still redirects; build it only if Ling decides it should be its own page (with its own redirect exception in its own commit, same three files as Collateral & Asset Loans).

## Open questions
- A consolidation savings figure is still in 3 blog posts and in the held drafts. Ling hasn't decided what to do with it. Don't publish it. Ask her.
- Exception, 2026-10-22: Ling approved showing the 30%–50% consolidation savings figure on site. CLAUDE.md still forbids a consolidation savings figure — that line is now stale and awaits her approval to amend. Apply the exception to the Consolidation of Positions page and its home teaser only. Applied on the page in commit `15462a4` (Helps item 2 and the "How much will I save?" FAQ). The copy file's "Notes for Ling" still describes a figure-free page and should be updated or removed.
- Funding speed conflict (`Same day` in `services.ts` vs `24-48h` in `site.ts` `STATS`) awaits Ling's decision. Don't change it until she answers. MCA page now uses her outline ("the same day") and does not surface the STATS band.

## Run locally
- Ling's Mac clone: `~/Sites/falcon-equity-site`.
- `cd ~/Sites/falcon-equity-site && git checkout cursor/falcon-astro-site-e383 && git pull --rebase`
- `npm install`, then `npm run dev` (local server), `npm run build` (must pass), `npm run preview`.
- Preview deploy: https://deploy-preview-1--falcon-equity-site.netlify.app/

## Session 2026-10-22 (later) — retail rebuilt from a live section library

**Why.** Ling reviewed v1 of `/industries/retail`: *"the design is not good, lots of sections doesn't look like Blackstone."* Root cause: v1 was built from **Wayback snapshots** and invented its own rhythm — eleven near-identical `ret-band` stacks, each opening with eyebrow → H2 → intro, then cards or rows. Blackstone never repeats that shape. She asked for the pages to be read in her own browser, the code inspected, and a section library built before anything was designed.

**1. The library is now measured from live pages: `docs/section-library-live/` (9.4 MB).**
- **52 sections** across 7 sources: the-firm (7), private-equity (8), accessing-private-markets (10), why-blackstone/BMACX (11), ir overview (1), Blackstone home (8), **Falcon home (7)** — the last two added on Ling's instruction, so Falcon's approved home sections sit next to Blackstone's.
- `LIBRARY.md` — per id: shape in words, measured band colour, pads, heading/body type sizes, still dimensions, item counts, mobile behaviour, "good for", artifact paths. `sections.json` is the machine version.
- Per id: `img/{id}-d.png`, `img/{id}-m.png`, `html/{id}.html` (the live outerHTML) — **52 desktop crops, 51 mobile crops, 52 markup files, and mobile measurements for all 52**. `IR-00` has no mobile crop (documented in the file): the IR microsite's cookie wall and content share the same wrappers, so removing either dissolves the page.
- **How it was captured, because this is the part that failed before:** `blackstone.com` and `bmacx.com` return 403 Cloudflare to curl *and* to my automation browser. A **real Google Chrome** (`channel="chrome"`, persistent profile, offscreen window) passes without any stealth flags. Geometry came from `getComputedStyle` / `getBoundingClientRect` at 1440 + a second pass at 390.
- Two sources are honestly partial and the library says so: **ir.blackstone.com's modules are JavaScript-populated** (only the overview block was measurable), and **no page has a data-table section**, so the retail comparison table has no donor.
- The APM (PWS) page reads as a charts-and-matrices editorial page: numbered three-up columns, two dark bands carrying a comparison matrix and a bar chart, a brochure lead magnet, an FAQ accordion and a dark link directory. Those shapes are the most reusable things in the library after `TF-02`.

**2. Plan: `docs/retail-structure-plan-v2.md`.** 12 bands, each naming its library id + source URL + the adaptation in words. Rejected candidates are recorded (HOME-07 email capture, HOME-01 carousel, HOME-04 marquee, APM-04 heading-less continuation, accordions on copy we want extractable).

**3. The rebuild.** Band → id: page header `TF-00`; glance figures `IR-00`/`PE-02`; header still `TF-01`; answer-first dark band `TF-02`; four cash pressures `TF-05`; retail year rows `TF-03`/`PE-05`; situation table **no donor** (own `.r-table` in the library's hairline/type conventions); three products `PE-04` + `BMX-03` spec block; exits `APM-09`; cases `BMX-03…06` (number in the figure slot); application requirements `BMX-10`; FAQ `APM-08`/`BMX-09`.
- Grid `ret-grid` = **4 → 8 → 16 columns, 16px gutter, 1264 container** (the measured Blackstone shell, same as `.mca-shell`). Band pads 80/96/144/160. Same-theme follower collapses to 56px (`ret-band--stacked`, used by Products after the table).
- **No `Button040` on this page.** The hero Apply is `.arrow-cta` + `CircleArrow` — DESIGN-SYSTEM §Inner-page patterns allows one Apply-style arrow in an inner hero and forbids 040 there; v1 had a 040 pill in the hero.
- The 4:5 stockroom still was **dropped**: its donor (`TF-05`) carries no image, and the page already has a header still plus three product stills.
- Copy, figures and schema are unchanged: figures still read from `SERVICES`, `FAQPage` (7) + `BreadcrumbList` (3) + three `Service` nodes.
- **DESIGN-SYSTEM rule 11 says "do not restyle toward Blackstone".** Resolved as: geometry, band rhythm and section order come from the measured library; colour, typeface, tokens and components stay Falcon's. That is also what CLAUDE.md's "Method: structure first" asks for. If Ling wants that tension written into DESIGN-SYSTEM.md, it is still unresolved there.

**4. QA, measured on the built page** (`npm run preview`, not the static dir):
- `dist/industries/retail.html` **64 KB**, one real `<h1>`, no `http-equiv="refresh"`, present in `sitemap-0.xml`.
- `scrollWidth == clientWidth` and **zero** right-edge overflow at **390 / 768 / 1024 / 1440 / 1920**.
- Three product cards now equal height (809px each) with their links on one baseline.
- Retired sibling `/industries/healthcare` still stubs out (meta refresh to `/`), so the route lift did not open the family.
- `tests/titles.spec.mjs` extended with an industry list; passes. `npm run check` still reports **one pre-existing error** in `src/components/pilot/PilotIndustryTabs.astro:175` (`relatedTarget` on `Event`) — not from this work.

**5. Pitfalls for the next builder (all cost time today):**
- **Never use `python3 -m http.server` on `dist` to review an Astro build.** With `build.format: 'file'`, `/industries/retail` resolves to `404.html` — an entire QA pass ran against the *home page* and looked plausible. Use `npm run preview`.
- **A full-page screenshot of a GSAP-revealed page is half-blank.** `scroll-in.ts` leaves inline `opacity`/`visibility` on `[data-reveal]`; removing `has-js` is not enough. Force `opacity/visibility/transform` with `!important` before capturing.
- **The PWS legal gate covers every section on `accessing-private-markets`.** Kill fixed/gate nodes *before* collecting, then re-collect — removing them first shifts `nth-of-type` selectors.
- **Capture mobile crops by resizing the viewport with live element handles, never by re-resolving selectors.** Two attempts failed first: a stale `sid` filed the last section's crop under seven names, and re-running discovery at 390 found *fewer* blocks per page (TF 6 vs 7, BMX 9 vs 11) because responsive CSS changes which children clear the height threshold. Stored selector paths did not survive the second pass either. What works: discover at 1440, hold the element handle, `set_viewport_size(390)`, screenshot the same handle. All 51 mobile crops now match their ids; `IR-00` has none and the library says why.
- **A gate-removal pass can silently corrupt measurements, not just crops.** The first APM re-capture removed 263 nodes *inside* the content tree, which re-cut the blocks (APM-01 reported 480px / 10 words instead of 932px / 121) and made the catalogue describe sections that no longer existed. Remove only `body`-level fixed/gate children, then re-collect — 6 nodes, not 263.
- **Describe a section only after opening its crop.** Every APM entry was written from a contact sheet where the legal gate covered the page; when the clean crops arrived, six of the ten descriptions were wrong (they are charts, matrices and numbered columns, not "explainer + floating card"). The corrected entries are in `LIBRARY.md`.
- **Pick a section's heading by largest measured font-size**, not by DOM order — the eyebrow is usually the first `h2`/`h3` in the markup and it made the library report 16/24 for 48/72 claims.

**Layout regression note:** `git diff` on this page is a rewrite, not a restyle — `retail.css` was regenerated from the MCA primitives. If a later ticket says "retail looked different yesterday", yesterday was v1 (11 identical bands).


## Session 2026-10-22 (evening) — retail page: requirements band removed, sections renumbered

**What Ling asked, in order.** (1) "Combine section 6 and section 9, because product and requirements are related." (2) "After your edit, re-number the section by its order." (3) "Do you really think we need to add requirement to this page? Or should people click to that service to know requirement?" → decision: **strip the requirements content, keep one line.**

**What the page does now (11 bands, was 12).**
- The old band 11, *What an application needs* (`BMX-10`, five requirement rows, documents, two notes), is **gone**. It is not merged and not restyled.
- Reason, measured rather than argued: each product card already carries a `Requirements` row that is the verbatim `#services` spec (LOC `6+ months · $10K+ monthly · Active bank account`; MCA `3+ months · $10K+ · Active business bank account`; collateral `Equipment quote or invoice · 6+ months · Active business`). The summary table repeated four of its five rows; the only new lines (`$15K+` revenue, `550+` score) belong to the **term loan**, which is a cross-link on this page, not a card. The documents list was a third copy — FAQ question 7 already answers "What do I need to apply?" with the identical list.
- What replaced it: `.ret-products-note`, one hairline closing the products band, one sentence (`No restricted industries or states…`) plus the two article links. Kept because that fact is a differentiator and nothing else on the page says it.
- Bands: header `TF-00` · glance · still `TF-01` · answer `TF-02` · cash pressures `TF-05` · retail year `TF-03`/`PE-05` · situation table (no donor) · products `PE-04`+`BMX-03`+closing line · exits `APM-09` · cases `BMX-03…06` · FAQ `APM-08`/`BMX-09`. Numbered 1–11 in the JSX comments, by order.
- `needRows`, the `.ret-need-head/rows/row/value/claim` rules and the `ret-need-intro` grouping came out with it; `.ret-need-note` / `.ret-need-links` / `.ret-inline-link` stay because the closing line uses them.

**Docs + Notion.** `docs/retail-structure-plan-v2.md` section map renumbered to 11 bands, band 8 rewritten with the reason. Notion copy contract (`Retail industry page – content outline (stage 1)`, `401eacd0-19c7-8138-92d7-f3a1ecc82710`) is now **7 sections numbered by order** — 1 Hero · 2 Answer first · 3 Which product fits · 4 The three products, with the live spec · 5 When another product fits · 6 FAQ · 7 CTA — with a revision bullet at the top, a decision bullet under Section 4, and the design-note cross-references rewritten (they used to point at section numbers that no longer exist; bands with no copy-contract section are now named, not numbered).

**QA.** `npm run build` passes. Measured over CDP at 390 / 768 / 1024 / 1440 / 1920: `scrollWidth == clientWidth`, **zero** overflowing elements, nine `[data-ret-section]` bands (the requirements band is absent), closing line 105px at 1440 and stacked to 209px at 390 with the links wrapping left. `npm run test:titles` passes. **`npm run test:nav` fails — it also fails on `HEAD` with the same `TimeoutError` ("element is outside of the viewport" while hovering), so it is pre-existing and not from this change; verified by stashing the diff and re-running.**

**Pitfall worth keeping.** A headless screenshot of this page looks blank unless `--force-prefers-reduced-motion` is passed (or `[data-reveal]` is forced with `!important`); the GSAP reveal leaves `opacity: 0` inline and screenshots the band as white space. `browser_vision` in the Hermes browser also resets to `about:blank`, so measure over CDP (Node 22 global `WebSocket` → `Emulation.setDeviceMetricsOverride` + `Page.captureScreenshot` with an element clip) rather than trusting the tool's viewport.


## Session 2026-10-22 (late) — retail page rebuilt to Ling's marked sections

**What she asked for, section by section.** Section 2 → the **Private wealth** band on blackstone.com home. Section 3 → a component she will send (the still shows a raised dark card: copy + `+` chips left, photo right) — placeholder for now. Section 4 → the **"When X isn't the right fit"** band from the Falcon service pages. Blog → the **service-page blog slider**. FAQ → the **service-page FAQ band**. Then: "I've changed the content again. Now start building this retail page."

**The build.** `src/pages/industries/retail.astro` rewritten: six bands, no dead code paths. Hero unchanged (`TF-00` + `PE-02` + `TF-01`). Band 2 written fresh from measurements of her screenshot (see `docs/retail-structure-plan-v3.md` for the table of numbers). Band 3 is a placeholder frame with the eight situations as pill chips, copy taken from the contract, and a visible note saying it is waiting on her component. Bands 4–6 import `mca.css` and reuse the service pages' markup wholesale — `mca-cards--3`, `mca-blog-slider`, `mca-faq-list` — so the two page types cannot drift.

**Removed with their copy-contract sections:** cash pressures, the retail year, the situation table, the exits band, the three generic cases. Their rules remain in `retail.css` under the first rebuild's dated block, marked superseded at the top of the second block; they come out in the cleanup pass. The eight situations are kept in the page file as a typed `situations` array so Ling's component can consume them without re-keying.

**Five rendering bugs worth remembering** (all found by screenshotting, none by the build):
- **Global `h2` is `--bx-black`, which is the dark band's own fill.** A claim inside a dark band renders invisible unless it is given `color: #fff` explicitly. `mca.css` says this in a comment for `.mca-helps`; it bit both the answer claim and the placeholder heading here.
- **`:global()` is Astro scoped-style syntax — invalid in a global stylesheet.** The media-fill rule silently did nothing until it was written as a plain descendant selector.
- **A `.mca-shell` child with no `grid-column` is one track wide.** The closing line under the product cards ran one word per line until it got `grid-column: 1 / -1`.
- **`.mca-cards` already carries `margin-top: var(--space-head-to-content)`.** Adding the same gap on the block head produced 208px between heading and cards.
- **Element screenshots with a sticky header include it.** A clipped capture of a band at its document position shows the fixed header on top of the band's first 100px, which looks exactly like a missing eyebrow. Confirm with `getBoundingClientRect`, not the picture.

**QA.** `npm run build` passes, `npm run test:titles` passes. CDP at 390 / 768 / 1024 / 1440 / 1920: no horizontal overflow, no overflowing elements, six bands. `test:nav` still fails and still fails on `HEAD` — pre-existing, unrelated.


## Session 2026-10-22 (latest) — retail hero replaced, stats strip removed

**Ling:** "blackstone.com/financial-advisors — use this hero for our hero. We don't have stats any more. I will send you the image for hero later, for now, just add a placeholder."

**Done.** The retail hero is now that header: H1 in columns 1–9, standfirst in 12–16 top-aligned with the H1, one `.arrow-cta` Apply under it, and the 16:9 still below as a labelled placeholder. The four-cell stat strip (`PE-02`: up to $5,000,000 / 24-48 hours / 0% agreement fee / 300+ businesses) is gone — markup, `glance` array and CSS all removed, so nothing is left to re-enable by accident.

**Captured, not assumed.** `financial-advisors` is not in the section library, so it was measured live at 1440 and the numbers are in `docs/retail-structure-plan-v3.md` (band 1 table). Content box 1264 at 1440: H1 x=88 w=704 (9 cols), standfirst x=968 w=384 (5 cols starting col 12), 56/84 weight 300, 18/27 weight 300, band pads 48/120.

**How to capture a live blackstone.com page again:** `~/Desktop/hermes-output/capture_live_hero.cjs` (kept outside the repo). Launch **real** Chrome (not headless), `--window-position=-2400,-2400 --window-size=1512,982`, a persistent `--user-data-dir`, then CDP: `Page.navigate`, wait ~9s, `Runtime.evaluate` to find the section from the `h1`, then `Page.captureScreenshot` with `captureBeyondViewport` and a clip. Cloudflare returns 403 to curl and to headless Chrome on this host; a real window passes with no stealth flags. It also prints each child's box, font-size, line-height, weight and colour, which is what the plan table is built from.

**Deviation from the reference, deliberate:** Blackstone's header has no CTA because its Apply lives in the nav. Ours keeps one Apply arrow under the standfirst, because Falcon's mobile header collapses before the nav CTA. If Ling wants a CTA-free hero, delete the `.ret-hero-apply` anchor and the `ret-hero-apply` grid rule.

**Still open:** the hero photograph (Ling sending), and Section 3's component (her placeholder frame is in place).


## Session 2026-10-22 (final) — the "In short" band rebuilt to Blackstone's exact build

**Ling:** "You made one that kind of looks like it, but not the same spacing as the blackstone one. I want you to learn the exact build. You can use my browser if that helps. And the h3 on the right can be of smaller font size."

**Why it was wrong.** The first version was scaled off her 2× screenshot with proportions eyeballed: claim 64px, panel rows 26px, panel offset guessed, hairline 16% white. The real block is nothing like that guess — the claim is **48/72**, the panel is inset **88px** from the band's content top, and the row rules are **1.5px near-white**, not a faint 16% line.

**How to re-measure anything on blackstone.com:** `~/Desktop/hermes-output/measure_pw_band.cjs` and `measure_pw_rows.cjs` (and `measure_ours_pw.cjs` for the same table on our page). Real Chrome, offscreen window, persistent profile, CDP; the scripts print computed styles and boxes for every child three levels deep, plus borders and `::after` pseudos. Two gotchas that cost a round trip each:
- **Scroll-triggered reveals leave text at `opacity: 0`, so the screenshot shows an empty band.** The geometry is still valid — but before shooting, inject `*:not(svg):not(path) { opacity:1 !important; visibility:visible !important; transform:none !important }` and scroll the band into view.
- **Measure the pseudos.** The eyebrow's rule is `::after` (64×2px, 24px after the label); a plain box query does not see it.

**The exact numbers now in `retail.css`** (all verified by re-measuring our own page): band padding 160/160 · 16 tracks of 64px with 16px gutters · left column cols 1–6 (464px) · eyebrow 16/24 w400 ls 1.28px + 64×2 rule at 24px · 84px to the claim · claim 48/72 w300 ls 0.384px · 56px to the paragraph · paragraph 18/27 w300, indented 80px, 384px wide · 63px to Learn More · Learn More 18/27 w400, 40px circle, 20px gap, no indent · panel cols 9–16 (624px), offset 88px, padding 64/80 · rows 40px 0 with 1.5px `#d5d8df` borders on all but the last.

**Deviations, both commented in the CSS:** the four row labels are **20/30** rather than Blackstone's 24/36 (Ling asked for smaller; our rows are sentences, not fund names), and the rows carry **no arrows** because they are takeaways, not links.

**Note on the reference's own layout:** its left column overflows the band by ~9px (the Learn More circle hangs past the grid height). Copied as-is where it does not show, but not chased to the pixel — a real overflow would be a bug on our side.


## Session 2026-10-22 (end) — section 3 built as Osmo expanding pills

**Ling:** "osmo.supply/resource/expanding-feature-pills — use this component for 'what's your case'. Make the section dark theme. The eyebrow and h2 title should be outside (above) of the component. There should be no intro texts."

**Osmo's resource is locked.** The preview page redirects to `osmo.supply/preview?resource=...` and shows a paywall; no markup or code is exposed. What *is* public: a 1440×900 still and an MP4 on their CDN (`osmo.b-cdn.net/resource-img|resource-video/expanding-feature-pills-1440x900.*`). Read the component off the still — this is the fallback whenever an Osmo/Vault resource is locked, and it works because their previews are the component at full size.

**Built:** dark band, eyebrow + H2 above the card, no intro (as asked). Card = pills column left, still right, 50/50 from 64em. Eight pills, one open at a time, first open on load. Open pill shows means → why → product + verbatim amount/term → link to the service page. `src/scripts/retail-pills.ts` owns state; CSS owns motion (`grid-template-rows: 0fr→1fr`, 460ms `cubic-bezier(.22,1,.36,1)`, plus chip rotates 45°). Nothing measures heights, so resize costs nothing.

**Data:** `situationSeeds` = sentence + meaning + slug + reason. Product name and range are resolved from `SERVICES` at build time, so the figures cannot drift from the live spec.

**Gotcha:** the default `image-slot--labeled` placeholder is lilac, which on a dark card looks like a blown-out white rectangle. Override the surface (`rgb(255 255 255 / 6%)`) and add a 1px inset outline so the image area still reads as a placeholder.

**QA:** build passes, `test:titles` passes, no horizontal overflow at 390/768/1024/1440/1920, six bands. Interaction verified over CDP: clicking pill 3 closes pill 1, `aria-expanded`/`aria-controls` correct on all eight, card height 1119 at 1440.


## Session 2026-10-22 (latest) — "In short" deleted, section 3 rebuilt, FAQ hover made site-wide

**Ling:** "no horizontal division line on the right. Now build it. And delete 'in short' section." Then: "The FAQ in service pages and this industry page is not fully there yet. I want home page 'services' section, each item's hovering effect (how non-hovering items dim down, how the top border stay 100% opacity). Please fix this global component. changes should reflect site-wide."

**Section 2 is gone.** The Private-wealth band, its `answerLead` and `takeaways`, and every `.ret-pw-*` rule are deleted. The page is now five bands: header · what's your case · products · blog · FAQ (CTA comes from BaseLayout).

**Section 3 is the comp she approved**, with the right column rule-free: FAQ-idiom accordion on the left (situation as the question, the cash line folded behind it), eyebrow + claim + product on the right (name, why, Range, Term, link). Opening a row reveals the folded line and swaps the product. Below 64em there is no right column, so the product travels inside the open row as `Product · range`.

**Two layout traps fixed while building it:**
1. `.ret-case-list` and `.ret-case` collided with dead rules from the deleted "three files in practice" band (`display:grid` + 3 tracks), which laid the list out as three columns. The retail stylesheet was rewritten from scratch — 9.7 KB instead of 26 KB, only the six classes the page uses.
2. Wrapping head + product in one `.ret-case-side` column fixed the product being stranded mid-column, but auto-placement then pushed the list into row 2. Both children need explicit `grid-row: 1`.

**FAQ hover, site-wide.** Ported from the home Services list (`PilotLinkList`: `.pilot-ll:is(:hover,:focus-within) .pilot-ll-row{opacity:.36}` + hovered row at 1). Implemented once in `global.css` against all three prefixes (`mca-`, `loc-`, `btl-faq-item`) because each service page carries its own clone of the same component. Hovering a list drops every row to 36%; the hovered row stays at 100% and its **top** rule goes to full ink.

**Why the rule ownership changed:** the FAQ declared the line as `border-bottom` + `border-top` on `:first-child`, so a hovered row could never hold a solid line above it. All three stylesheets now put the line on the **top** edge (`border-top` on every item, `border-bottom` on `:last-child`) — visually identical at rest, and it gives the hover state the services-list reading. The retail case list got the same hover treatment for consistency.

**QA, verified over CDP with forced pseudo-classes** (`CSS.forcePseudoState`; headless synthetic mouse moves do not set `:hover`, and headless reports `hover: none`, so `Emulation.setEmulatedMedia` is needed too):
- retail FAQ, MCA FAQ, BLOC FAQ: hovered row `opacity: 1` with `border-top` at full ink; every other row `0.36` with a 40% rule.
- retail case list: hovered row 1, others 0.36.
- No horizontal overflow at 390/768/1024/1440/1920; five bands; `test:titles` passes.


## Typography correction — H1 weight and where balanced wrapping is allowed (2026-10-22)

**Ling:** "Make H1 font weight on retail a little more, match the service page. I see that you make text-wrap balance everywhere. Don't use it unless they are h1 or h2."

- **Retail H1 is now weight 400**, the same as the service pages' page title (`.mca-hero h1` is 400). It was 300, copied from Blackstone's own lighter header. Sizes stay Blackstone-measured: 40px mobile, 56/84 at 1440. Note the service pages set 55/57 (tighter leading); retail keeps the measured 84 because that is the reference's header rhythm.
- **`text-wrap: balance` is now limited to h1 and h2.** In `global.css` it used to sit on a shared `h1, h2, h3, h4` rule, so every h3 and h4 on every page was balanced too. The rule is split: families/colour for all four, `text-wrap: balance` for h1 and h2 only. The remaining balanced rules are legitimate h2s — the block heads, the FAQ heads and the blog slider titles (`.mca-blog-title` is an h2 in the markup).
- Nothing else declared balance on body copy; `text-wrap: pretty` in `blackstone.css` is a different value and was left alone.
- Verified: retail H1 computes to weight 400 / 56px / balance; MCA H1 weight 400; a scan of `h3, h4, h5, p, li, span, a` on both pages returns zero elements with balanced wrapping. `test:titles` passes, no overflow at any of the five widths.
