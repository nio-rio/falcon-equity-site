# CLAUDE.md — Falcon Equity site (falconequity.ai)

Read this first, every session. Then read `HANDOVER.md` for the current state.

## Project
- Rebuild of the Falcon Equity website. Falcon is a high-risk business lender that "does everything".
- Stack: Astro 7 + Tailwind 4 (`@tailwindcss/vite`), GSAP, Manrope/Archivo/At Gambit fonts. Node >= 22.22 (`.nvmrc`). Deployed on Netlify.
- Branch: `cursor/falcon-astro-site-e383` (PR #1). Work here. Other bots also push here, so `git pull --rebase` before you start and before you push. Never force-push.

## The home page is approved. Don't change it.
- `src/pages/index.astro` is the spec. Do not restyle it or "fix" it to match anything.
- `DESIGN-SYSTEM.md` documents the home page design system and is the source of truth for every other page. If it disagrees with notes in `docs/`, `DESIGN-SYSTEM.md` wins.
- Tokens: `src/styles/tokens.css` and Tailwind `@theme` in `src/styles/global.css`. Use only these. Palette: white plus Martinique (`#332a4e` and its ramp) and Lilac (`#f3f2fb` and its ramp). No reds, no hex greys, no new solids. The old purple fills (`#A072C5`, `#5b21b6`) are retired. Don't bring them back.
- Type: display `--font-display` (At Gambit/Manrope), body `--font-sans` (Archivo). Use the `--type-*` scale. Spacing is the 8px `--bx-space-*` scale (`p-bx-8` and so on). Don't override Tailwind's numeric `--spacing-*`.
- Primary CTA: `Button040` (`light` = Lilac pill, `dark` = Martinique pill), labelled "Apply for funding". One Apply per band, nothing extra in the hero. Links take the colour of the text around them.
- Reuse the shared components: Header, Footer, SiteCta, Button040, Media, Eyebrow, CircleArrow, ArrowCta. Page layouts: `src/styles/pilot.css` and `src/styles/mca.css`.
- Never put a disclaimer, asterisk or legal line next to a CTA. Legal text goes in the footer (`src/data/disclosure.ts`).

## Other pages
- Every page except home and `/apply` was deleted on purpose (old URLs redirect in `astro.config.mjs`). Rebuild each one from scratch as a real redesign, not a patch of the old version.

## Method: structure first
1. Plan the page structure, section by section.
2. For each section, pick a section layout from blackstone.com (put the source URL in the plan). Pick it by checking whether its reading order, content size and content type are close enough to our content. If a layout doesn't fit, say so and adapt it or pick another one.
3. Then fit the content in.
- Use images now and then, as placeholders only. Never generate images of real people (staff, the founder) or any portraits.
- Blackstone references are in `docs/blackstone-*.md` and `docs/refs/`. Use `docs/mca-structure-plan.md` as the example of a plan.

## Content
- Hermes's drafts (`docs/redesign/content-*.md`, `src/data/content.ts`) are a reference. You don't have to use the text as written.
- You may learn page structure and how products are explained from lendini.com, ondeck.com and similar sites. Never copy their wording or numbers. Never copy Kandy Capital numbers.

## Facts (fixed)
- Fees: always write **"0% agreement fee"**. Never write "0% interest" or "0% APR". Rates are "competitive". Don't publish a specific rate.
- There are no restricted industries or states. Don't invent a restricted list.
- Collateral & Asset Loans include real-estate-secured loans.
- Founder: **Dwight Holly, Founder & CFO**.
- Keep `/how-it-works`, with the nav label "How It Works".
- Don't use a 95% satisfaction figure or a consolidation savings figure.
- Service figures (who, amounts, terms, requirements) must match the live site's `#services` section word for word (`src/data/services.ts`). Don't round them or reformat the ranges. Confirmed stats come only from `src/data/site.ts` `STATS`.
- Never make up people, testimonials, quotes or numbers. Mark placeholders clearly, for example "Falcon client".
- Never use real applicant data (for example from Jotform).
- Blog posts stay `draft: true` until Ling approves them.

## Workflow
- One page at a time. Write a structure plan (`docs/<page>-structure-plan.md`) and show it to Ling. Ling may skip the plan step and prefer to see a build; follow her lead per page.
- Push small, clearly described commits to this branch.
- `npm install`, then `npm run build`, which must pass before every push. Also run `npm run check` and the `npm run test:*` scripts when you touch nav, titles or testimonials.
- Preview: https://deploy-preview-1--falcon-equity-site.netlify.app/ (updates on every push).
- Update `HANDOVER.md` at the end of every session.
- Don't send emails, don't contact clients or Dwight, and don't spend money.
