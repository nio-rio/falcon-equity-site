# HANDOVER.md — current state

Last updated: Oct 21, 2026, ~5:15 PM ET. Update this file at the end of every session.

## Where things stand
- Branch `cursor/falcon-astro-site-e383` (PR #1). Home is unchanged.
- The home page (`/`) is approved and frozen. `/apply` stays as it is.
- Deleted on purpose (commit `5207b6b`): every other route, including the old service pages, industry pages, How It Works, About and the blog routes. Retired URLs redirect (commit `682f24a`, `astro.config.mjs`). The blog markdown is still in `src/content/blog/`.
- Merchant Cash Advance page: plan in `docs/mca-structure-plan.md` (commit `52741f7`). Built at `src/pages/services/merchant-cash-advance.astro` with styles in `src/styles/mca.css`. `5330e24` / `da88d78` matched live Blackstone layouts. Vera QA of `da88d78` passed function; the follow-up commit on this branch answers her major/minor notes (FAQ chevrons, hero type, glance figure, process stills, Get in touch eyebrow). Funding speed is still `Same day` from `services.ts`. Ling has not approved the page.

## MCA page structure
Hero → Glance → What we do → Terms → Fit → Process → FAQ → Get in touch → SiteCta.

| Section | Blackstone reference |
| --- | --- |
| Hero | Credit & Insurance hero |
| Glance | Credit & Insurance stats |
| What we do | Credit & Insurance / Technology & Innovations What we do |
| Terms | Credit & Insurance Credit strategies accordion |
| Fit | Technology & Innovations Our roles |
| Process | Charitable Foundation Our programs |
| FAQ | Credit & Insurance News list layout, Terms/Fit chevrons |
| Get in touch | Insights subscribe CTA |

## Standing rules
- Each new page uses its own page-prefixed classes (e.g. `mca-*`), not home component classes. Share only `.container-site`, Header / Footer / SiteCta and design tokens. Merge duplicate classes in one cleanup pass after all designs are approved.
- Keep all nav and footer links as they are (pages come later).
- Both phone numbers are intended; the main number in the nav is 917-245-5277.
- Never merge PR #1 or switch the domain without Ling's approval.
- Vera QAs only fully built pages.
- When referencing Blackstone, screenshot the real sections and match layout, not just headings.

## Next steps
1. Ling reviews the MCA page on the preview and asks for changes. Vera (the QA bot) checks finished builds only.
2. Only after Ling approves MCA, do these one at a time, each with a structure plan approved first: **How It Works** (`/how-it-works`), **About** (Dwight Holly, Founder & CFO), and one industry page, **Retail**.
3. Other services, industries and the blog come later, and only when Ling asks.

## Open questions
- A consolidation savings figure is still in 3 blog posts and in the held drafts. Ling hasn't decided what to do with it. Don't publish it. Ask her.
- Funding speed conflict (`Same day` in `services.ts` vs `24-48h` in `site.ts` `STATS`) awaits Ling's decision. Don't change it until she answers.

## Run locally
- Ling's Mac clone: `~/Sites/falcon-equity-site`.
- `cd ~/Sites/falcon-equity-site && git checkout cursor/falcon-astro-site-e383 && git pull --rebase`
- `npm install`, `npm run dev` (local server), `npm run build` (must pass), `npm run preview`.
- Preview deploy: https://deploy-preview-1--falcon-equity-site.netlify.app/
