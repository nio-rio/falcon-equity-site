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

Copied from the current falconequity.ai (Webflow) site:

| File | Description |
| --- | --- |
| Inline SVG in `src/components/Logo.astro` | Logo mark (viewBox `0 0 41 40`), copied from the current site navbar |
| `public/favicon.png` | Favicon |
| `public/apple-touch-icon.png` | Webclip / touch icon |
| `src/assets/images/dwight-holly.webp` | Portrait of Dwight Holly, Founder & CFO |
| `public/images/partners/cardiff-logo.png` | Cardiff partner logo, used with the Cardiff partner link |

## Generated assets

Created by `scripts/generate-images.mjs` from brand colors, the logo mark and the hero photo above:

- `public/og-default.jpg` (default social sharing image)
- `src/assets/blog/*.jpg` (blog cover images)

## Fonts & icons

- [Fraunces](https://fonts.google.com/specimen/Fraunces) by Undercase Type: SIL Open Font License 1.1, via `@fontsource-variable/fraunces`. Free substitute for At Gambit until a web license is confirmed.
- [Inter](https://rsms.me/inter/) by Rasmus Andersson: SIL Open Font License 1.1, via `@fontsource-variable/inter`
- [Lucide](https://lucide.dev) icons: ISC License, via `@lucide/astro`
