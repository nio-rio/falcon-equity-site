# Design tokens (Goldman Sachs, measured 19 Oct 2026)

Computed styles from https://www.goldmansachs.com/ in headless Chrome at 1440, 1024, 768 and 390 CSS pixels. Falcon maps these values 1:1 except typeface (At Gambit + Inter) and color (white / ink / `#5b21b6` / tint `#F7F7FA`).

## Type

Goldman uses **GS Serif** (hero and section titles, weight 300–400) and **GS Sans** (UI, body, buttons). Line-height on display type is 1.0. Letter-spacing on display type is `normal`.

| Role | 1440 / 1024 | 768 | 390 | Weight | Notes |
| --- | --- | --- | --- | --- | --- |
| Inner-page H1 | 100px / 100px | 60px / 60px | 44px / 44px | 300 | GS Serif, line-height 1. Measured on `/insights`, `/what-we-do`, `/careers`. Falcon uses `clamp(44px, 8.83vw + 9.55px, 100px)` for every page H1, including the home hero. |
| Home overlay title | 80px / 80px | 50px / 50px | — | 300 | Live Goldman home currently uses an H2 for the photo overlay (“The Outlook for Global Inflation”). Falcon home keeps an H1 at the inner-page scale above. |
| Section h2 | 56px cap in Falcon (`clamp(32px … 56px)`) | ~46px | 32px | 400 | Steps clearly under H1 at every width (was matching H1 1:1). |
| Card / h3 | 26px / 32px | 22px / 26px | 20px / 24px | 500 | Service-card titles stay 1.5× this scale in component CSS. |
| Eyebrow | 12px / 16px, +1px tracking | 14px / 18px, +1px | 10px / 14px, +1px | 400 | Uppercase. Color `rgba(0,0,0,0.6)` |
| Body | 18px / 28px | 16px / 24px | 16px / 24px | 400 | Color `rgba(0,0,0,0.8)` |
| Small / footer | 16px | 16px | 16px | 400 | |
| Button | 16px / 20px | 16px / 20px | 16px / 20px | 500 | Padding 9px 11px, square corners |
| Nav link | 16px | 16px | — | 400 | |

Falcon: At Gambit 300/400/600/700 for all headings (Manrope fallback via `unicode-range`). Inter for body, nav, buttons, small print.

## Layout

| Token | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| Container max-width | 1440px | 1440px | 1440px | 100% |
| Gutter | 40px | 40px | 32px | 16px |
| Grid gap | 32px | 32px | 32px | 32px |
| Nav height | 64px | 64px | 64px | 40px |
| Nav position | sticky, in flow (not overlay) | same | same | same |
| Nav background | `rgb(114, 151, 197)` | same | same | same |

Falcon nav stays **white with black text** (site rule). Goldman’s pale panel `rgb(247, 247, 250)` is the secondary background: tint `#F7F7FA`.

Section interiors are whitespace-led rather than padded boxes. Falcon uses `64px` vertical padding on small screens and `80px` from 768 up.

## Buttons

Primary (hero “Explore Insights”): white fill, black text, 16px/20px, 9×11px padding, no radius, no shadow.
Outline (“Client Login”): 1px light border, transparent fill, 16px.
Falcon primary uses saturated `#5b21b6` on white pages; hero uses Goldman’s white fill.

## Home hero

Not a CSS `100vh` block. The sticky nav sits **above** the image. The image then fills the remaining first screen on a wide desktop, and shortens on tablet. Copy sits in the **lower left** of the image until the mobile breakpoint, where image and copy **stack**.

| Width | Nav | Image height | Image top | Headline | Copy placement |
| --- | --- | --- | --- | --- | --- |
| 1440 | 64px sticky | 810px (`≈ 100svh − nav`) | 64 | 80/80, weight 300, top ≈ 450 | Overlay, lower left |
| 1024 | 64px sticky | 576px (not remaining viewport) | 64 | 80/80, weight 300 | Overlay, lower left; next section already visible |
| 768 | 64px sticky | 500px | 64 | 50/50, weight 300 | Overlay, lower left |
| 390 | 40px sticky | image then text | 40 | 36/36, weight 300, white on black | **Stacked**: photo, then a dark panel |

No min/max height constraints beyond those intrinsic heights. One primary CTA in the hero, not two.

## Color mapping

| Goldman | Falcon |
| --- | --- |
| White page, `rgba(0,0,0,0.95)` type | `#ffffff` / `#0a0a0a` |
| Body `rgba(0,0,0,0.8)` | `#333333` |
| Muted `rgba(0,0,0,0.6)` | `#666666` |
| Pale panel `rgb(247, 247, 250)` | `#F7F7FA` |
| Links / selected UI | `#5b21b6` (`#4c1d95` hover) |

Contrast (`#F7F7FA`): ink ~19:1 AAA; `#5b21b6` 7.8:1 AA; `#666` 5.0:1 AA.

## Cards, lists, teasers

Goldman “The Firm in Action” article cards at 1440: **image (16:9), uppercase category, title, short excerpt**. No date on the card. Square corners, no shadow, 32px grid gap.

Falcon mapping (Ling exception): blog cards keep **image + category + title**, drop the excerpt, no date. Excerpt stays in RSS/SEO only.

Other teaser patterns on goldmansachs.com:

| Pattern | Structure | Falcon use |
| --- | --- | --- |
| Insight / article card | Image, uppercase kicker, title (excerpt dropped) | `PostCard` |
| Text capability card | Whitespace or tint background, no hairline. Title as link, one supporting sentence | `ServiceCard`, industries, partners, credit programs |
| Numbered / process list | Title and body, separated by space. No hairlines | Home process, credit-repair steps |
| Stat | Large display figure, muted label underneath. No eyebrow | `StatsBar` |
