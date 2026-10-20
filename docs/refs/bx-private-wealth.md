# Blackstone home — Private Wealth (measured)

Source: `blackstone.com` home `#private-wealth` (two-up + tickertape). Live
`blackstone.com` is Cloudflare-gated here; values from blackstone-v2
`frontend.css` / `frontend.js` plus `/tmp/bxhero/bxhome.html`.

Falcon mapping: home **Why choose us** (`.pilot-why-*`). At Gambit + Inter,
`--bx-black` `#14101f`. Rows are not links.

## Two-up (`.bx-two-up-content.is-color-theme-dark`)

Dark band `--c-background: #000` (Falcon `#14101f`). Card fill
`--c-background-highlight: #121317` on dark (Falcon
`color-mix(#fff 8%, #14101f)`).

| Token | Mobile | 48em | 80em | 90em |
| --- | --- | --- | --- | --- |
| Section pad | 80px | 96px | 144px | 160px |
| Grid | stack | 8 col / 16px | 16 col / 16px | same |
| Eyebrow → title | 48px | 48px | 56px | 64px |
| Title | serif 300 32px / 1.5 / 0.008em | 40px | 40px | 48px |
| Copy indent | — | cols 2–7 | cols 2–6 | same |
| Copy | 18px, mt 40px | 18px | mt 48px | mt 56px |
| CTA | mt 56px | same | 56px | 64px |
| Card pad | 48×16 | 56×88 | 56×72 | 64×80 |
| Card at desktop | full width below | full | cols 9–16, rowspan title/copy/cta | same |
| Row pad | 40 / 40 | 32 / 32 | 32 / 32 | 40 / 40 |
| Row rules | 1.5px first; 0.094rem middle | same | same | same |
| Row label | sans 300 24px | 24px | 24px | 24px (32 at 1920) |

Eyebrow is **not** in the scroll-in query. Title + copy + CTA: `{autoAlpha:0,y:20}` → `{autoAlpha:1,y:0,duration:800,stagger:400}`, start `"50% 90%"`, play once. Each row label: `{autoAlpha:0,rotateZ:2,y:20}` → `{autoAlpha:1,rotateZ:0,y:0,duration:800}`, default start `"top 90%"`.

## Tickertape (`.bx-tickertape`)

Stacked on the same dark theme (`padding-top: 0`). Title is Sanomat; one
word is `<strong>`. JS clones the item twice, then GSAP
`xPercent: -100`, `ease: none`, `repeat: -1`, duration = `offsetWidth / 125`
seconds (125px/s). Start `"0% 90%"`.

| Token | Mobile | 48em | 80em | 90em |
| --- | --- | --- | --- | --- |
| Type | 64px / 1.3 | 6.5rem | 10.5rem | 12rem |
| Item gap `--mx` | 120px | 136px | 192px | 216px |
| Disclaimer mt | 56px | 72px | 120px | 128px |
| Disclaimer | 14px / 0.016em | same | same | same |

Falcon marquee: **Apply for funding** (Apply bold), whole strip links to
`/apply`. CSS animation at 125px/s. `prefers-reduced-motion` sets
`animation: none`.
