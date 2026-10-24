# Blackstone section spacing (measured)

Source: blackstone-v2 `frontend.css` component padding utilities. Live
`blackstone.com` is Cloudflare-gated here.

## Tokens

| Class | Mobile | 48em | 80em | 90em |
| --- | --- | --- | --- | --- |
| `.bx-component-base-padding-top/bottom` | 80px | 96px | 144px | 160px |
| `.bx-component-stacked-same-theme-padding-top` | 40px | 40px | 48px | 56px |

Same-colored neighbors: the **follower** swaps its top pad to the stacked
token. Content-to-content = `base bottom + stacked top`
(120 / 136 / 192 / 216px).

Different-colored neighbors: **both keep full base pad**. The background
change is the separator. Content-to-content = `2 × base`
(160 / 192 / 288 / 320px). Adjacent-theme `margin-top` in the bundle is
editor/`.bx-component` only; live blocks use the padding classes.

Hero / promo-header keeps its own pad (not the content-section scale).

## Falcon home mapping

Tokens: `--pilot-section-y` / `--pilot-section-y-stack`. Applied via
`[data-band='light'|'dark']`.

| Viewport | `--pilot-section-y` | `--pilot-section-y-stack` |
| --- | --- | --- |
| &lt;48em (390) | 80px | 40px |
| 48em (768 / 1024) | 96px | 40px |
| 80em (1280) | 144px | 48px |
| 90em (1440) | 160px | 56px |

| Section | Band | Top | Notes |
| --- | --- | --- | --- |
| Hero | (none) | own promo pad | not on the scale |
| Stats | light | full y | after dark hero |
| Services | light | stack | after stats |
| Testimonial | light | stack | after services |
| Industries | light | stack | after testimonial |
| Why choose us | dark | full y | after light tabs |
| Insights | light | full y | after dark why |
| Site CTA | dark | full y | after light insights |

`--bx-section` (64 / 88 / 120) stays on inner `.section` pages.
