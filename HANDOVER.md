# HANDOVER.md — current state

Last updated: Oct 22, 2026. Update this file at the end of every session.

## Where things stand
- Branch `cursor/falcon-astro-site-e383` (PR #1). Home is unchanged. MCA measurement rebuild is on `cursor/mca-bx-measure-554e`.
- The home page (`/`) is approved and frozen. `/apply` stays as it is.
- Deleted on purpose (commit `5207b6b`): every other route, including the old service pages, industry pages, How It Works, About and the blog routes. Retired URLs redirect (commit `682f24a`, `astro.config.mjs`). The blog markdown is still in `src/content/blog/`.
- Merchant Cash Advance page: Ling's 2026-10-21 edited Notion outline (wording, sections, order). After `1223c04`, rebuilt again from **live** Blackstone computed styles at 1440 / 1024 / 390. Measurements live in `docs/section-library/measurements/{BXCI-01,BXCI-07,DC-03,LS-07,DC-06}.md`. MCA uses a measured `.mca-shell` (4×70 / 8×72 / 16×64, gap 16, widths 328 / 688 / 1264). Fonts stay At Gambit + Archivo; colors stay Falcon tokens. Styles stay in `src/styles/mca.css` (`mca-*` only).

## MCA page structure
Hero → Term facts + requirements + Apply → What it helps → Fit → Process → FAQ → SiteCta.

| MCA section | Library id | Why the shape fits |
| --- | --- | --- |
| Hero (H1 + lead) | BXCI-01 | One heading + one supporting paragraph. No still, no eyebrow. |
| Term facts (Who / Amounts / Terms) | BXCI-07 | Three title + paragraph cards, no images. Sentences, not giant figures (not BXCI-03). |
| Requirements + Apply + Direct | attached under BXCI-07 | Three-item list + one Apply + phone link. No matching library id; kept in her Hero close. |
| What it helps (4 uses + Apply) | BXCI-07 | Same title + paragraph cards, adapted to four items in a 2×2. No stills (not BXCI-04). |
| When a cash advance isn't the right fit | DC-03 | Eyebrow + H2 + intro + three title + paragraph cards. |
| Process (3 steps + 3 stills + Apply) | LS-07 | Three 16:9 stills with title + excerpt. Numbers and a second note line added; no people. |
| FAQ (7 expandable) | DC-06 | Seven accordion questions. No lead or PDF. Dark band like the reference. |
| Shared Apply CTA | SiteCta | Same band as home. Not restyled. |

## Standing rules
- Each new page uses its own page-prefixed classes (e.g. `mca-*`), not home component classes. Share only `.container-site`, Header / Footer / SiteCta and design tokens. Merge duplicate classes in one cleanup pass after all designs are approved.
- Keep all nav and footer links as they are (pages come later).
- Both phone numbers are intended; the main number in the nav is 917-245-5277.
- Never merge PR #1 or switch the domain without Ling's approval.
- Vera QAs only fully built pages.
- When referencing Blackstone, pick by **content shape** from `docs/section-library/LIBRARY.md`, then open that section on the live page at 1440 / 1024 / 390, write `docs/section-library/measurements/<id>.md`, and rebuild with those exact numbers (fonts → display/Archivo, colors → Falcon tokens).

## Next steps
1. Ling reviews the rebuilt MCA page on the preview and asks for changes. Vera (the QA bot) checks finished builds only.
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
