# Credits & asset log

Every third-party asset used on the site, with its source and license. No paid assets are used.

## Photography

| File | Subject | Author | Source | License |
| --- | --- | --- | --- | --- |
| `src/assets/images/hero-falcon.webp` | Peregrine falcon perched on a weathered branch (1800×771, ~2.33:1). | Ling (site photo) | Home hero still | Used with permission |
| `src/assets/images/hero-meeting.webp` | Advisor meeting with two clients at a table (1774×887, 2:1). Previous home hero, kept in the repo unused. | Ling (site photo) | Unused | Used with permission |
| `src/assets/images/hero-falcon.png` | Peregrine falcon in profile, close-up on a warm green-gold background. Previous home hero, kept in the repo unused. | Ling (site photo) | Unused (OG generator source) | Used with permission |
| `src/assets/images/hero-falcon.jpg` | Previous launching-falcon still, kept in the repo unused. | Frank Cone | [Pexels photo 5247930](https://www.pexels.com/photo/a-falcon-flying-from-a-tree-branch-5247930/) | [Pexels License](https://www.pexels.com/license/) |

Photo alternatives considered (all free licenses) if the hero image should change:

- "Close-up of a Standing Peregrine Falcon" by chris clark: [Pexels 23963811](https://www.pexels.com/photo/close-up-of-a-standing-peregrine-falcon-23963811/)
- "A peregrine falcon is looking straight at the camera" by Dariia Lemesheva: [Unsplash 0V0-br36wiY](https://unsplash.com/photos/a-peregrine-falcon-is-looking-straight-at-the-camera-0V0-br36wiY) (Unsplash License; purple-toned background)

Avoid images marked **Unsplash+** or **Getty Images**; those require a paid license.

## Falcon Equity Group's own assets

| File | Description |
| --- | --- |
| `src/assets/brand/falcon-mark.svg` | Geometric mark from the live falconequity.ai nav/footer (viewBox `0 0 41 40`, `currentColor`). Inlined with the HTML wordmark. |
| `src/assets/brand/falcon-logo-full.svg` | Archived full image lockup (mark + wordmark, viewBox `0 0 159 22`). Not used in the header or footer. |
| `public/brand/falcon-logo-dark.png` | Official dark lockup PNG, kept for print or email use |
| `public/brand/falcon-logo-white.png` | Official white lockup PNG, kept for dark backgrounds |
| `public/favicon.png` | Favicon, from the current falconequity.ai Webflow site |
| `public/apple-touch-icon.png` | Webclip / touch icon, from the current site |
| `src/assets/images/dwight-holly.webp` | Portrait of Dwight Holly, Founder & CFO, from the current site |
| `public/images/partners/cardiff-logo.png` | Cardiff partner logo, used with the Cardiff partner link |

## Generated assets

Created by `scripts/generate-images.mjs` from brand colors, the official logo and the hero photo above:

- `public/og-default.jpg` (default social sharing image)
- `src/assets/blog/*.jpg` (blog cover images)

## Fonts & icons

- **At Gambit** (trial): Light/Regular/Semibold/Bold woff2 in `public/fonts`. Used for headings. Trial glyph set is A–Z, a–z, 0–9, space, and `! , - . : ; ?`. Buy the webfont license before launch.
- [Manrope](https://fonts.google.com/specimen/Manrope) by Mikhail Sharanda: SIL Open Font License 1.1, via `@fontsource/manrope` (weights 600, 700). Fallback for heading characters At Gambit does not include.
- [Archivo](https://fonts.google.com/specimen/Archivo) by Omnibus-Type: SIL Open Font License 1.1. Self-hosted variable woff2 (latin + latin-ext, weight axis) in `public/fonts`. Used for body, nav, buttons, labels, and other sans roles. License file: `public/fonts/OFL-Archivo.txt`.
- [Lucide](https://lucide.dev) icons: ISC License, via `@lucide/astro`
