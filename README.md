# Falcon Equity Group website

The rebuild of [falconequity.ai](https://falconequity.ai), built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) as a fully static site.

> **Status: preview / pre-launch.** Nothing here is deployed to production. The current Webflow site stays live until Ling approves the cutover.

## Quick start

Requires **Node.js 22.22 or newer** (Node 24 recommended; see `.nvmrc`).

```bash
nvm use            # or install Node 24 another way
npm install
npm run dev        # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload. **Draft blog posts are visible here.** |
| `npm run build` | Build the production site to `dist/`. **Draft posts are excluded.** |
| `npm run preview` | Serve the built `dist/` locally to check the production output |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `node scripts/generate-images.mjs` | Regenerate the default OG image and the blog covers |

## Project structure

```
public/                 Static files served as-is (favicon, robots.txt, _redirects, OG image, partner logo)
scripts/                One-off asset generation
src/
  assets/               Images optimized at build time (hero, founder photo, blog covers)
  components/           Header, Footer, SEO, cards, sections
  content/blog/         Blog posts (Markdown)
  content.config.ts     Blog collection schema
  data/                 Site content as data: contact info, stats, services, industries, FAQs
  layouts/              Base and legal page layouts
  legal/                Privacy Policy and Terms text (ported verbatim from the current site)
  lib/                  Blog helpers, JSON-LD schema builders
  pages/                One file per route
  styles/global.css     Tailwind setup, brand palette and fonts
```

### Where to edit content

- **Phone numbers, email, address, social, partner link:** `src/data/site.ts`
- **Published stats** ($100M+ deployed, 15 years, 300+ businesses helped, 24–48h funding, 98% approval for qualified applicants): `STATS` in `src/data/site.ts`. Every page reads from here. Do **not** add a customer-satisfaction figure.
- **Services** (names, amounts, speed, terms, requirements, FAQs): `src/data/services.ts`. Interest rates and factor rates are not published.
- **Industries:** `src/data/industries.ts`
- **Home page sections, FAQ, illustrative client stories, departments:** `src/data/content.ts`

## Sitemap

| Route | Notes |
| --- | --- |
| `/` | Home: hero, stats, why Falcon, how it works, qualify, when to apply, funding options, industries, client stories, FAQ, CTA |
| `/services` | Index, comparison table, and process section (`/services#process`) |
| `/services/collateral-asset-loans` | Collateral & Asset Loans |
| `/services/business-line-of-credit` | Business Line of Credit |
| `/services/merchant-cash-advance` | Merchant Cash Advance |
| `/services/business-term-loan` | Business Term Loan |
| `/services/invoice-factoring-tool` | Invoice Factoring Tool |
| `/services/consolidation-of-positions` | Consolidation of Positions, with an illustrative savings example |
| `/services/decentralized-business-financing` | Decentralized Business Financing (crypto onboarding, crypto custodial services) |
| `/industries` | 12 industries, original copy |
| `/about` | Story, values, Dwight Holly bio, department cards |
| `/contact` | Contact details plus a CTA to `/apply` (no contact form yet) |
| `/apply` | The existing Jotform embed (form 252856411020144) |
| `/partners` | Brokers, ISOs, funders; Cardiff partner link |
| `/blog`, `/blog/category/*`, `/blog/*` | The Falcon Brief |
| `/resources/loan-calculator` | JS amortization calculator |
| `/resources/credit-repair-loan-prep` | Credit Repair & Loan Prep |
| `/faq` | General and per-product FAQs |
| `/privacy-policy`, `/terms-conditions` | Legal (text ported from the current site) |
| `/rss.xml`, `/sitemap-index.xml`, `/robots.txt` | Feeds and crawl files |
| `404` | Custom not-found page |

The fraud disclosure lives in the footer on every page. A licensing/disclosure placeholder sits under it until Dwight provides the official copy.

## Type

Headings use **Manrope** (weights 600, 700, 800, tight letter-spacing on large sizes) via `@fontsource/manrope`. Body text uses **Inter** via `@fontsource-variable/inter`. Do not ship At Gambit trial files.

## Logo

The official lockup is `src/assets/brand/falcon-logo-full.svg` (159×22). `src/components/Logo.astro` inlines it, swaps the fill to `currentColor`, and keeps the native proportions so it works on the light header and the dark footer.

## Blog

Posts are Markdown files in `src/content/blog/`. Frontmatter:

```yaml
---
title: 'Post title'
date: 2026-10-19
category: Consolidation   # Working Capital | How-To | Consolidation | Equipment | Factoring | Digital Assets
author: Falcon Equity Group
excerpt: 'One or two sentences for cards and RSS.'
description: 'SEO meta description, max 170 characters.'
cover: ../../assets/blog/my-cover.jpg   # optional
coverAlt: 'Describe the image for screen readers.'
draft: true             # true = visible in `npm run dev` only, never in production builds
---
```

**Publishing a draft:** after Dwight approves a post, change `draft: true` to `draft: false`, commit and deploy. Drafts are filtered out of production pages, category pages, the RSS feed and the sitemap.

The three seed posts are AI-written drafts awaiting Dwight's approval:

1. Consolidation of Positions: how stacked advances can cost you less
2. Merchant Cash Advance vs. Business Term Loan: which wins for your business?
3. Your 24–48 hour funding checklist

Until one is published, the production `/blog` page shows a "new articles are on the way" message.

## SEO & accessibility

- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter card tags (`src/components/SEO.astro`)
- JSON-LD: `FinancialService` + `Organization` on every page; `Service`, `FAQPage`, `BreadcrumbList` and `Article` where relevant (`src/lib/schema.ts`)
- `@astrojs/sitemap`, RSS via `@astrojs/rss`, `robots.txt`
- URLs have no trailing slash, matching the existing Webflow URLs
- Semantic landmarks, skip link, visible focus styles, keyboard-operable menus (Escape closes them), native `<details>` FAQ accordions, alt text on all images, `prefers-reduced-motion` respected
- Brand colors pass WCAG AA contrast in the combinations used

## Redirects

Existing URLs `/industries`, `/about`, `/apply`, `/resources/credit-repair-loan-prep`, `/privacy-policy` and `/terms-conditions` keep the same paths, so they need no rules. One redirect is added:

| From | To | Type |
| --- | --- | --- |
| `/resources/business-loan-calculator` | `/resources/loan-calculator` | 301 |

It is defined twice so either host works: `public/_redirects` (Netlify) and `vercel.json` (Vercel).

## Deploying

The output is plain static files in `dist/`, so either free tier works. **Do not point the falconequity.ai DNS at a new host until Ling approves the launch.**

### Netlify

1. Add a new site from the GitHub repo.
2. Netlify reads `netlify.toml`: build command `npm run build`, publish directory `dist`, Node 20.
3. `public/_redirects` is copied into `dist/` and applied automatically.
4. Every pull request gets a Deploy Preview URL once the site is connected.

### Vercel

1. Import the GitHub repo. The framework preset is detected as Astro.
2. `vercel.json` sets the build command, `dist` output, clean URLs, no trailing slash and the redirect.
3. Set the Node.js version to 22.x or newer in Project Settings if the default is older.
4. Every pull request gets a Preview Deployment URL.

### Going live (Ling)

1. Connect the repo to the chosen host and confirm a preview build passes.
2. Add `falconequity.ai` and `www.falconequity.ai` as custom domains; set the apex as primary so `www` redirects to it.
3. Update DNS at the registrar as the host instructs, and wait for HTTPS to provision.
4. Submit `https://falconequity.ai/sitemap-index.xml` in Google Search Console.
5. Keep Webflow running until the new site is verified, then decide on cancelling it.

## TODO checklist

Items that still need a human before launch. None of these block the preview.

- [ ] **Dwight:** swap the illustrative client stories on Home for real stories, with written permission. No names, photos or star ratings until then.
- [ ] **Dwight:** confirm interest rates and factor rates. None are published on the site today (`src/data/services.ts`).
- [ ] **Dwight:** provide licensing / NMLS / state-disclosure copy for the footer placeholder.
- [ ] **Dwight:** approve the three draft blog posts (`draft: true` in `src/content/blog/`). They are visible in `npm run dev` only and never in production builds.
- [ ] **Dwight / Ling:** review Privacy Policy and Terms & Conditions (ported from the current site; last privacy update October 21, 2025).
- [ ] **Ling:** confirm photo credits in [CREDITS.md](./CREDITS.md). Hero is Frank Cone on Pexels; swap if a preferred falcon image is chosen.
- [ ] **Ling:** license At Gambit as a webfont if we want it; swap it in for Manrope later. Trial files must not be shipped.
- [ ] **Ling:** add a Contact Jotform later if one is created. The Contact page currently has details plus a CTA to `/apply`.
- [ ] **Ling:** connect Netlify or Vercel for preview deploys, then point falconequity.ai DNS only after approval. No production deploy from this PR.
- [ ] **Future blog topics** (after the three seed posts):
  - MCA vs line of credit (12-month cost)
  - How to read a factor rate and convert it to APR
  - Bridging a slow season
  - Invoice factoring vs AR financing
  - What your bank statements tell underwriters
  - How to tell if you're over-leveraged on stacked advances
  - Equipment financing break-even
  - Term loan vs short-term loan
  - Crypto-backed business financing and digital asset custody

## Credits

See [CREDITS.md](./CREDITS.md) for photo, font and icon licenses.
