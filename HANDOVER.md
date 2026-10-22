# HANDOVER.md — current state

Last updated: Oct 22, 2026. Update this file at the end of every session.

## Where things stand
- Branch `cursor/falcon-astro-site-e383` (PR #1). Never merge PR #1. Preview: https://deploy-preview-1--falcon-equity-site.netlify.app/
- The home page (`/`) is approved and frozen except the approved Apply-button size match (default `.button-040` is now the nav desktop size: 1.0625rem / 3em / 1.25em). `/apply` stays as it is.
- Deleted on purpose (commit `5207b6b`): every other route, including the old service pages, industry pages, How It Works, About and the blog routes. Retired URLs redirect (commit `682f24a`, `astro.config.mjs`). The blog markdown is still in `src/content/blog/`.
- Merchant Cash Advance page: Ling’s 2026-10-22 v3 outline. Sections rebuilt from live Blackstone numbers:

| MCA section | Library id | Why the shape fits |
| --- | --- | --- |
| Hero (H1 + 2×3 stats + lead + Apply) | IR-01 + IR-02 | Live bx-share-information title + three headline stats with a hairline above each cell. MCA uses two rows of three (term facts + Requirements), label above value. Separate IR-03 facts band removed. |
| What it helps (still + 4 pillars + Apply) | LS-04 (light FO) | Family-offices light vertical-list: 8 / skip 2 / 6, 3:4 still, stacked title/body. Intro dropped. |
| When a cash advance isn’t the right fit | BXCI-07 | Eyebrow + long claim + three title + paragraph cards, 5 / 6 / 5, each with a singular-link CTA to another product. |
| Process (3 text steps + Apply) | PWS What you need to know | Same 16-col / 5-6-5 text cards as accessing-private-markets. No stills. Heading → cards 104 / 88 / 72. |
| FAQ (7 expandable) | BXCI-05 motion on DC-06 type | Dark band and 24/36 titles from DC-06. Caret rotate 0.3s and hover rule draw 0.5s linear from BXCI-05. |
| Shared Apply CTA | SiteCta | Same band as home. Not restyled (already ≥ nav). |

- MCA disclosure (“Funding is subject to underwriting…”) is MCA-only, in the footer-bottom under the divider, styled like `.site-footer__copy`. Home has no disclosure.
- Measurements: `docs/section-library/measurements/{BXCI-01,BXCI-05,BXCI-07,DC-03,DC-06,IR-01,IR-02,IR-03,LS-04,LS-07,PWS-need-to-know}.md`. MCA classes stay in `src/styles/mca.css` (`mca-*` only).

## Standing rules
- Each new page uses its own page-prefixed classes (e.g. `mca-*`), not home component classes. Share only `.container-site`, Header / Footer / SiteCta and design tokens. Merge duplicate classes in one cleanup pass after all designs are approved.
- Keep all nav and footer links as they are (pages come later).
- Both phone numbers are intended; the main number in the nav is 917-245-5277.
- Never merge PR #1 or switch the domain without Ling's approval.
- Vera QAs only fully built pages.
- When referencing Blackstone, pick by **content shape** from `docs/section-library/LIBRARY.md`, then open that section on the live page at 1440 / 1024 / 390, write `docs/section-library/measurements/<id>.md`, and rebuild with those exact numbers (fonts → display/Archivo, colors → Falcon tokens).
- Fee wording **0% agreement fee**. Rates **competitive**. No disclaimers under CTAs.

## Next steps
1. Ling reviews this MCA build on deploy-preview-1.
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
