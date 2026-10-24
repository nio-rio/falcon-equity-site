# Catch-up brief — state of the Falcon Equity rebuild, 23 Oct 2026

**Read this before `HANDOVER.md`.** This is the map: what exists, where it lives, how pages get built here, and what is still open. `HANDOVER.md` below is append-only history (1,000+ lines, newest at the bottom) — use it for "why", not for "what".

Written by Hermes at handover to Claude. If this file disagrees with the built site, **the built site wins** — re-measure, then fix this file.

> **`CLAUDE.md` is out of date and could not be rewritten** (it is a protected file; the write needs Ling's approval). Where it disagrees with this brief, this brief wins. Specifically: CLAUDE.md still says "every page except home and `/apply` was deleted on purpose — rebuild each one from scratch", which is no longer true. 26 pages exist. It also predates the section library, the design system pass, and the blogs being published.

---

## Status in one paragraph

The rebuild is **almost complete**: 47 pages build clean (26 site pages + 20 blog guides + 404), navigation is wired, and every page except home was built from scratch in this repo. The home page is approved and **frozen**. Five routes are **not built** and currently redirect to `/`: `/how-it-works`, `/partners` (in progress in another worktree), `/privacy-policy`, `/terms-conditions`, and the `/services` index. Nothing is live — `falconequity.ai` is still served by **Webflow**; this repo exists only as a Netlify deploy preview.

---

## Run it

```bash
npm install          # node_modules may be a symlink between worktrees — if so, do not reinstall
npm run build        # 47 pages
npm run check        # must stay 0 errors / 0 warnings (6 hints are fine)
npm run test:titles  # page titles + the /apply H1
npm run test:nav     # needs playwright-core; 10 known baseline failures, see Workflow
```

Node 22 (`.nvmrc`, `engines.node >= 22.22`). Astro 7, `output: 'static'`, `trailingSlash: 'never'`, `build.format: 'file'`, Tailwind 4 via `@tailwindcss/vite`, GSAP.

- Branch: **`cursor/falcon-astro-site-e383`** (PR #1 — **never merge it**, never force-push).
- Preview: https://deploy-preview-1--falcon-equity-site.netlify.app/ — rebuilds on every push.
- `git pull --rebase origin cursor/falcon-astro-site-e383` before you start and before you push; other agents push here.
- Production is still Webflow. `netlify.toml` sets `X-Robots-Tag: noindex, nofollow` on production too — **delete that block in the same commit that points DNS at Netlify**.

### Several lanes work in this repo — stay in yours
Each lane has its own worktree and branch. Never edit another lane's checkout; it will look like abandoned uncommitted work and you will fight over it.

| Checkout | Branch | Owner |
| --- | --- | --- |
| `~/Sites/falcon-equity-site` | `cursor/falcon-astro-site-e383` | shared main lane |
| `~/Sites/falcon-partners` | `hermes/partners-page` | `/partners` build |
| `~/Sites/falcon-hermes-claude` | `hermes/page-images` | page images |
| `~/Sites/falcon-blog`, `falcon-blog-live`, `falcon-blog-posts` | `hermes/blog-*` | blog work |

---

## Home is the spec

- `src/pages/index.astro` is approved and frozen. Don't restyle it or "fix" it toward anything.
- `DESIGN-SYSTEM.md` is the source of truth for anything visual, and it beats any note in `docs/` or `HANDOVER.md`.
- Tokens only: `src/styles/tokens.css` + Tailwind `@theme` in `src/styles/global.css`. Palette is white plus Martinique (`#332a4e` + ramp) and Lilac (`#f3f2fb` + ramp). No reds, no hex greys, no new solids; the old purples (`#A072C5`, `#5b21b6`) are retired.
- Type: `--font-display` (At Gambit/Manrope) for headings, `--font-sans` (Archivo) for body, the `--type-*` scale for sizes. Spacing is the 8px `--bx-space-*` scale; don't override Tailwind's numeric `--spacing-*`.
- CTA: `Button040` (`light` = Lilac pill, `dark` = Martinique pill), label "Apply for funding", one per band. Links inherit the surrounding text colour.
- Shared components: `Header`, `Footer`, `SiteCta`, `Button040`, `Media`, `Eyebrow`, `CircleArrow`, `ArrowCta`, `FaqList`, `JsonLd`, `ShareRow`, `ResponsiveTable`. Layouts: `src/styles/pilot.css`, `src/styles/mca.css`.
- **No disclaimer, asterisk or legal line next to a CTA.** Legal copy lives in the footer (`src/data/disclosure.ts`).

### The one type ladder (from the 23 Oct consistency pass — these are tokens now, don't hand-tune per page)

| Slot | Token | 390 | 768 | 1280 | 1440 |
| --- | --- | --- | --- | --- | --- |
| Page H1 | `--page-title-size` / `--page-title-lh` | 40 / 44 | 48 | 48 | 56 / 61.6 |
| Section H2 | `--type-h2-size` / `--type-h2-lh` / `--type-h2-weight` | 32 / 40 | 40 | 48 / 60 | 48 / 60 |
| Hero band | `--page-header-pt` / `--page-header-pb` | 40 / 80 | 48 / 96 | 48 / 96 | 48 / 120 |
| Band rhythm | `--pilot-section-y` | 80 | 96 | 144 | 160 |
| Heading → content | `--space-head-to-content` | 72 | 72 | 96 | 104 |

Two deliberate exceptions, both Ling's calls — keep them: `/apply` has its own 100px H1 (single-purpose form page), and **Ling's 16px eyebrow floor** on `/resources/business-loan-calculator`, the twelve industry pages and `/resources/credit-repair-loan-prep` (`.calc-page .eyebrow`, the `.ind-*` bands, `.cr-page .eyebrow`), where the shared eyebrow would otherwise drop to 14px below 1280.

---

## Method: pages are built from the measured section library

Falcon pages are **not** designed from a blank file. Every band is borrowed from a measured section of blackstone.com (a few from bmacx.com, Osmo and Falcon's own home page) and rebuilt with Falcon tokens. Two libraries, both committed — **47 MB, 353 files: do not delete, do not "tidy"**.

| Library | Path | Contents |
| --- | --- | --- |
| Wayback-measured | `docs/section-library/` | `LIBRARY.md`, `LIBRARY-learnmore.md`, `measurements/<ID>.md`, `img/<ID>-d.png` + `-m.png`, `meta.json`. 36 sections, ids `TF-* PE-* APM-* BMX-*`. **`LIBRARY.md` ends with a Shape cheat sheet — start there.** |
| Live-measured | `docs/section-library-live/` | `LIBRARY.md`, `sections.json`, `html/<ID>.html`, `img/`, `meta-our-people.json`. 58 sections across 8 pages (TF, PE, APM, IR, BMX, HOME, FAL, OP), captured live in Chrome on 22 Oct 2026 with `getComputedStyle` / `getBoundingClientRect` at 1440 and 390, plus each section's real `outerHTML`. |

**The method, in order:**

1. Count your own content first — figures, titled rows, stills, paragraphs, links, and the reading order they need.
2. Find the id whose **content shape** matches. Never pick by "looks like Blackstone".
3. Read that section's measurements (`measurements/<id>.md`, or `sections.json` + `html/<id>.html`) and its crops at 1440 / 390.
4. Write `docs/<page>-structure-plan.md`: one row per band, **naming the library id** and why the shape fits, plus what you adapted. References: `docs/mca-structure-plan.md`, `docs/retail-structure-plan-v3.md`.
5. Build with Falcon tokens. If the shape doesn't fit, say so in the plan and adapt — never force Falcon copy into a prettier but wrong block.

The reference is the **spec for layout, hover states and type**; a copy contract that disagrees with it loses.

---

## Routes

Every route below is real (no meta-refresh stub). One `.astro` per route in `src/pages/`, one namespaced stylesheet per page in `src/styles/` (`.mca-*`, `.ind-*`, `.abt-*`, `.cr-*`, `.bl-*`, …).

| Route | Source | Notes |
| --- | --- | --- |
| `/` | `index.astro` + `pilot.css`, `blackstone.css` | **Approved, frozen.** The spec for everything else. |
| `/about` | `about.astro`, `about.css` | Library values grid + PWS steps + DC-06 FAQ. |
| `/apply` | `apply.astro` | H1 + Jotform embed + contact block; **no CTA band** (`BaseLayout cta={false}`). |
| `/faq` | `faq.astro`, `faq.css`, `faq-list.css` | Shared `FaqList`. |
| `/industries` | `industries/index.astro`, `industries-index.css` | Index of the twelve. |
| `/industries/<slug>` ×12 | `industries/*.astro`, `industry.css`, data `src/data/industry-pages.ts` | 6–8 situations, 3 product cards, 6–8 FAQs; copy lives in the data file. |
| `/services/<slug>` ×6 | `services/*.astro`, one stylesheet each | MCA, line of credit, term loan, collateral & asset, invoice factoring, consolidation. |
| `/blog` | `blog.astro`, `blog-index.css`, `blog-slider.css` | 12 guides per page, Load More + dots. |
| `/blog/<slug>` ×20 | `blog/[slug].astro`, `blog-article.css`, `src/content/blog/*.md` | All 20 published. |
| `/resources/business-loan-calculator` | `resources/business-loan-calculator.astro`, `loan-calculator.css`, `scripts/loan-calculator.ts` | Factor-rate + APR modes; no Falcon rate published. |
| `/resources/credit-repair-loan-prep` | `resources/credit-repair-loan-prep.astro`, `credit-repair.css` | Ten bands. Copy was rewritten because the live page was Kandy Capital's word for word. |
| `/404` | `404.astro` | — |

**Not built — redirect stubs in `astro.config.mjs` (`retired`), `netlify.toml` and `public/_redirects`, all currently pointing at `/`:**

| Route | State |
| --- | --- |
| `/partners` | **In progress** in the `falcon-partners` worktree. Nav entries in `Header.astro` and `data/site.ts` (`FIRM_LINKS`, `COMPANY_LINKS`) must stay on `/#main` until it ships. |
| `/how-it-works` | Not built; nav label must stay "How It Works". |
| `/privacy-policy`, `/terms-conditions` | **Not built.** A lender site needs both before launch; the footer links to them today and they land on the home page. |
| `/services` (index) | Not built; the six product pages are reached from nav and `/industries`. |
| `/services/decentralized-business-financing` | Seventh product named in `data/services.ts`; no page. |
| `/contact` | Redirects to `/#contact`; the footer's "Get in Touch" column now carries `id="contact"`, so the jump lands on real contact details. |
| `/blog/category/<4>` | Category indexes don't exist; the four URLs redirect to `/` even though guides show category chips. |
| `/resources/loan-calculator` | Legacy alias → `/apply`. |

---

## Copy comes from `src/data/`, not from templates

| File | Holds |
| --- | --- |
| `src/data/services.ts` | `ServiceSpec` per product (who / amounts / terms / requirements / speed) + `STANDARD_STEPS`. **Word for word.** |
| `src/data/site.ts` | `SITE` (phone, fax, email, address, socials), `STATS` (the only confirmed numbers), `FIRM_LINKS`, `COMPANY_LINKS`. |
| `src/data/industry-pages.ts` | All twelve industry pages: situations, product cards, FAQs. |
| `src/data/industries.ts`, `industry-stills.ts` | Home industry selector + stills. |
| `src/data/faq.ts`, `service-faqs.ts` | FAQ sets behind `/faq` and the service pages. |
| `src/data/blog.ts` | Blog index categories and cards. |
| `src/data/home-testimonial.ts` | The three approved home quotes — the only quotes allowed anywhere. |
| `src/data/disclosure.ts` | `PAGE_DISCLOSURE` + legal copy → footer only. |
| `src/content/blog/*.md` | 20 guides. |

---

## Facts (fixed — don't re-derive, don't soften)

- Fees: always **"0% agreement fee"**. Never "0% interest" or "0% APR". Rates are "competitive"; never publish a specific rate.
- **No restricted industries and no restricted states.** Never invent a restricted list.
- Collateral & Asset Loans include real-estate-secured loans.
- Founder: **Dwight Holly, Founder & CFO**.
- No 95% or 98% satisfaction figure, and no consolidation-savings percentage.
- Service figures (who, amounts, terms, requirements) match the live `#services` spec word for word (`src/data/services.ts`). Don't round or reformat ranges. Confirmed stats come only from `STATS` in `src/data/site.ts`.
- Never make up people, testimonials, quotes, partners or numbers. Mark placeholders plainly ("Falcon client").
- Never use real applicant data (e.g. from Jotform) or an image of a real person.
- Never copy another lender's wording or numbers — that is why the credit-repair page was rewritten.

## Blogs

- 20 guides in `src/content/blog/*.md`; **all 20 are published** (`draft: false`) as of 23 Oct 2026 — Ling asked for the held drafts to ship at handover. `draft: true` still hides a post from the build; keep using it for anything new until approved.
- Frontmatter that matters: `title`, `seoTitle` (≤60 chars), `description`, `excerpt`, `date`, `updated`, `category`, `author` / `byline`, `cover` (`../../assets/blog/<slug>.jpg`), `coverAlt`, `takeaways`, `FAQ` pairs (rendered as FAQPage schema), `primaryKeyword`, `industry`, `draft`.
- `reviewedBy: 'Dwight'` sits in frontmatter but is **never rendered** — it stays pending until Dwight confirms the credit. Don't print it.
- A published post is added to `livePaths` in `astro.config.mjs` automatically (the directory is read at config time), so new posts need no config edit.
- Cover images: `src/assets/blog/`. Keep uploads under ~200 KB.

---

## Workflow

1. **One page at a time.** Structure plan first (`docs/<page>-structure-plan.md`, library id per band), shown to Ling. She may skip the plan step — follow her lead per page.
2. Build from the library. Reuse shared components before writing a new one.
3. `npm run build` must pass; `npm run check` must stay 0 errors / 0 warnings (6 hints fine); `npm run test:titles` must pass.
   `npm run test:nav` needs `playwright-core` and has **10 known baseline failures** — `home-testimonial-slider`, `home-section-spacing`, `nav-inflow-on-return`, `site-cta-lead-heading-font`, `backdrop-on-when-open`, `no-gap-close-into-panel`, the theme-on-scroll family, `apply-040-theme-scrolled`, `open-at-y0-panel-under-header`. All nine `nav-widget-*` checks pass. If the suite can't run, say so; don't install anything.
4. Verify on the **built** output in `dist/`, not by eye: exactly one `<h1>`, no `http-equiv="refresh"`, route present in `dist/sitemap-0.xml`, no horizontal overflow at 390 / 768 / 1024 / 1440, every accordion opened once.
5. Small, clearly described commits. Push only to `cursor/falcon-astro-site-e383`.
6. Append a dated entry to the **bottom** of `HANDOVER.md` at the end of every session; update this brief's status lines if they changed.

### Don't
- Don't merge PR #1, don't force-push, don't push to `main`.
- Don't send emails, contact Dwight or the client, or spend money.
- Don't edit `DESIGN-SYSTEM.md` or another page's `.astro` / `.css` when the task is one page. If a shared token is genuinely wrong, say so first.
- Don't work in another lane's worktree.

---

## Open items (the shortest true list)

**Waiting on Dwight / Ling — do not guess:**
- Credit repair: the 76% success-rate provenance, whether the prep programs fall under CROA, what a program costs and when it is charged, whether the 7th business card is a real product, the FICO-certification claim, whether any CPN or second-file product is actually sold.
- Daycare guide: confirm for-profit-only eligibility for education/childcare.
- Medical guide: confirm whether Falcon factors medical/insurance claims — the page describes the market and does **not** claim Falcon does it.
- `/apply` H1 says "same day funding"; `services.ts` gives ~2 days for term loans and ~2 weeks for real-estate collateral. It is Ling's own copy — revisit only if the claim is tightened.

**Build gaps:** `/how-it-works`, `/partners`, `/privacy-policy`, `/terms-conditions`, `/services` index, `/services/decentralized-business-financing`, four blog category indexes.

**Known micro-drifts from the 23 Oct pass, none urgent:**
- `/industries/retail` carries one flat 32/48/weight-300 H2 (its claim heading) instead of the token ladder.
- `/about`'s first H2 renders `letter-spacing: normal` where its siblings read `0.008em`.
- `/blog/<slug>` articles keep their own reading ladder (48/72 H1, 40/60 H2) by design — a different context from landing pages. If you unify it, do it deliberately and re-measure.

**Launch gaps:** no production deploy exists, DNS is still Webflow, and the `noindex` header comes off only when it moves.
