# Credits & asset log

Every third-party asset used on the site, with its source and license. No paid assets are used.

## Photography

| File | Subject | Author | Source | License |
| --- | --- | --- | --- | --- |
| `src/assets/images/hero-falcon.jpg` | Peregrine falcon (*Falco peregrinus*) launching from a branch, wings spread. Wenatchee, WA. | Frank Cone | [Pexels photo 5247930](https://www.pexels.com/photo/a-falcon-flying-from-a-tree-branch-5247930/) | [Pexels License](https://www.pexels.com/license/): free for commercial use, attribution not required (credited here as good practice) |

Photo alternatives considered (all free licenses) if the hero image should change:

- "Close-up of a Standing Peregrine Falcon" by chris clark: [Pexels 23963811](https://www.pexels.com/photo/close-up-of-a-standing-peregrine-falcon-23963811/)
- "A peregrine falcon is looking straight at the camera" by Dariia Lemesheva: [Unsplash 0V0-br36wiY](https://unsplash.com/photos/a-peregrine-falcon-is-looking-straight-at-the-camera-0V0-br36wiY) (Unsplash License; purple-toned background)

Avoid images marked **Unsplash+** or **Getty Images**; those require a paid license.

## Falcon Equity Group's own assets

| File | Description |
| --- | --- |
| `src/assets/brand/falcon-logo-full.svg` | Official full logo lockup (mark + wordmark, viewBox `0 0 159 22`). Used inline in the header and footer. |
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

- [Manrope](https://fonts.google.com/specimen/Manrope) by Mikhail Sharanda: SIL Open Font License 1.1, via `@fontsource/manrope` (weights 600, 700, 800). Used for headings. A licensed At Gambit webfont can be swapped in later; trial files must not be shipped.
- [Inter](https://rsms.me/inter/) by Rasmus Andersson: SIL Open Font License 1.1, via `@fontsource-variable/inter`. Used for body text.
- [Lucide](https://lucide.dev) icons: ISC License, via `@lucide/astro`
