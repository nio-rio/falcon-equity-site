# HANDOVER.md — current state

Last updated: Oct 22, 2026. Update this file at the end of every session.

## Where things stand
- Branch `cursor/falcon-astro-site-e383` (PR #1). Never merge PR #1. Preview: https://deploy-preview-1--falcon-equity-site.netlify.app/
- The home page (`/`) is approved and frozen except the approved Apply-button size match (default `.button-040` is now the nav desktop size: 1.0625rem / 3em / 1.25em), the SiteCta top-pad cut (96 / 86 / 58 / 48), the site-wide BXCI hide-on-scroll nav, and heading→content on Services / News / Sectors now using `--space-head-to-content` (72 / 72 / 96 / 104). `/apply` stays as it is.
- Deleted on purpose (commit `5207b6b`): every other route, including the old service pages, industry pages, How It Works, About and the blog routes. Retired URLs redirect (commit `682f24a`, `astro.config.mjs`). The blog markdown is still in `src/content/blog/`.
- Merchant Cash Advance page: Ling’s 2026-10-22 v4 outline. Sections rebuilt from live Blackstone numbers:

| MCA section | Library id | Why the shape fits |
| --- | --- | --- |
| Hero (H1 + 2×3 stats + lead + Apply) | IR-01 + IR-02 | Live bx-share-information title + three headline stats with a hairline above each cell. MCA uses two rows of three (term facts + Requirements), label above value. Separate IR-03 facts band removed. Hero sits in `.mca-shell` (home column 328 / 688 / 1136 / 1264). |
| What it helps (still + 4 pillars + scrolling Apply) | LS-04 (dark) | Life Sciences dark vertical-list: 8 / skip 2 / 6, 3:4 still, stacked title/body. Scrolling Apply tape at the end, mca-* clone of home Why-choose-us. Dark type matches Why: h2/h3/eyebrow `#fff`, body `--bx-on-dark`. Helps bottom pad is slightly under R for the tape overhang. |
| Process (3 text steps + Apply) | PWS What you need to know | Same 16-col / 5-6-5 text cards as accessing-private-markets. 01/02/03 sized to the live number-image box (184 / 175 / 198). Heading → cards `--space-head-to-content` (104 / 96 / 72 / 72). Number → title 32px. After dark Helps; top pad is R − 2px at 1280 / 768 / 390 so Helps → Process measures R. |
| FAQ (7 expandable) | BXCI-05 motion on DC-06 type | Light band. 24/36 titles from DC-06. Caret rotate 0.3s and hover rule draw 0.5s ease-out from BXCI-05, with ink 40% base / ink hover (same 40% as the dark version). Top pad 0, bottom R. |
| When a cash advance isn’t the right fit | BXCI-07 | After FAQ, before the blog. Eyebrow + long claim + three title + paragraph cards, 5 / 6 / 5, each with a singular-link CTA to another product. Top 0 / bottom R so FAQ→Fit and Fit→blog stay one R. |
| Blog spotlight | BXCI-08 | Portfolio Spotlight split as a slider: eyebrow + title + “Read the article” left, 16:9 right. Prev/next circle arrows under the link, bottom-aligned to the image at 80em+. Published MCA-relevant posts only, relevance order: vs term loan, factor rate, stacked advances, slow season, 24–48h checklist, bank statements. |
| Shared Apply CTA | SiteCta | Same band as home. Top pad 96 / 86 / 58 / 48 at 1440 / 1280 / 768 / 390 (~40% cut); bottom still R. Approved home 0-diff exception, set on the component. |

- MCA disclosure (“Funding is subject to underwriting…”) is MCA-only, in the footer-bottom under the divider, **14px / 21px at all widths**. Home `.site-footer__copy` stays 18/16/18.
- MCA column matches home `.container-site` / `.mca-shell`: 328 / 688 / 1136 / 1264 at 390 / 768 / 1280 / 1440. Order: Hero, Helps (dark), Process, FAQ, Fit, Blog, SiteCta. Visible gap R = 80 / 96 / 144 / 160. Process top is R − 2px at 1280 / 768 / 390 (Helps → Process = R). FAQ bottom is R − 2px. Fit and Blog bottoms are full R. SiteCta top is 96 / 86 / 58 / 48; bottom stays R. Blog image is the published article cover (no generated people).
- Measurements: `docs/section-library/measurements/{BXCI-01,BXCI-05,BXCI-07,BXCI-08,DC-03,DC-06,IR-01,IR-02,IR-03,LS-04,LS-04-dark,LS-07,PWS-need-to-know}.md`. MCA classes stay in `src/styles/mca.css` (`mca-*` only).

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

## Open questions
- A consolidation savings figure is still in 3 blog posts and in the held drafts. Ling hasn't decided what to do with it. Don't publish it. Ask her.
- Funding speed conflict (`Same day` in `services.ts` vs `24-48h` in `site.ts` `STATS`) awaits Ling's decision. Don't change it until she answers. MCA page now uses her outline ("the same day") and does not surface the STATS band.

## Run locally
- Ling's Mac clone: `~/Sites/falcon-equity-site`.
- `cd ~/Sites/falcon-equity-site && git checkout cursor/falcon-astro-site-e383 && git pull --rebase`
- `npm install`, then `npm run dev` (local server), `npm run build` (must pass), `npm run preview`.
- Preview deploy: https://deploy-preview-1--falcon-equity-site.netlify.app/
