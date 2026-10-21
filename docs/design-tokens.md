# Design tokens (Goldman Sachs, measured 19 Oct 2026)

> **Canonical Falcon system:** [`/DESIGN-SYSTEM.md`](../DESIGN-SYSTEM.md). This file is a historical Goldman measurement. Purple fills (`#5b21b6`, `#A072C5`) are retired. Current palette is white + Martinique / Lilac only.

Computed styles from https://www.goldmansachs.com/ in headless Chrome at 1440, 1024, 768 and 390 CSS pixels. Historical note: Falcon no longer uses `#5b21b6` button fills. Current buttons are ink/white or button-040 Lilac/Martinique.

## Type

Goldman uses **GS Serif** (hero and section titles, weight 300–400) and **GS Sans** (UI, body, buttons). Line-height on display type is 1.0. Letter-spacing on display type is `normal`.

| Role | 1440 / 1024 | 768 | 390 | Weight | Notes |
| --- | --- | --- | --- | --- | --- |
| Inner-page H1 | 100px / 100px | 60px / 60px | 44px / 44px | 300 | GS Serif, line-height 1. Measured on `/insights`, `/what-we-do`, `/careers`. Falcon page H1s (home hero, inner pages, `/blog` index) use `clamp(44px, 8.83vw + 9.55px, 100px)`. |
| Article H1 | 60px / 60px | 50px / 50px | 36px / 36px | 400 | GS Sans Condensed, line-height 1. Measured on `/insights/the-markets/how-higher-rates-and-ai-issuance-are-affecting-credit-markets`. Falcon blog post H1s use `clamp(36px, 3.79vw + 21.24px, 60px)`. |
| Home overlay title | 80px / 80px | 50px / 50px | — | 300 | Live Goldman home currently uses an H2 for the photo overlay (“The Outlook for Global Inflation”). Falcon home keeps an H1 at the inner-page scale above. |
| Section h2 | 56px cap in Falcon (`clamp(32px … 56px)`) | ~46px | 32px | 400 | Steps clearly under H1 at every width (was matching H1 1:1). |
| Card / h3 | 26px / 32px | 22px / 26px | 20px / 24px | 500 | Service-card titles stay 1.5× this scale in component CSS. |
| Eyebrow | 12px / 16px, +1px tracking | 14px / 18px, +1px | 10px / 14px, +1px | 400 | Uppercase. Color `rgba(0,0,0,0.6)` |
| Body | 18px / 28px | 16px / 24px | 16px / 24px | 400 | Color `rgba(0,0,0,0.8)` |
| Small / footer | 16px | 16px | 16px | 400 | |
| Button | 16px / 20px | 16px / 20px | 16px / 20px | 500 | Padding 9px 11px, square corners |
| Nav link | 16px | 16px | — | 400 | |

Falcon: At Gambit 300/400/600/700 for all headings (Manrope fallback via `unicode-range`). Archivo for body, nav, buttons, small print.

## Layout

| Token | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| Container max-width | 1440px | 1440px | 1440px | 100% |
| Article column | 896px (8/12, `max-width` 66.6667%) | 619px (8/12) | 522px (9/12 / 75%) | 358px (100% − 16px gutters) |
| Gutter | 40px | 40px | 32px | 16px |
| Grid gap | 32px | 32px | 32px | 32px |
| Nav height | 64px | 64px | 64px | 40px |
| Nav position | sticky, in flow (not overlay) | same | same | same |
| Nav background | `rgb(114, 151, 197)` | same | same | same |

Falcon nav stays **white with black text** (site rule). Goldman’s pale panel `rgb(247, 247, 250)` mapped to leftover `#F7F7FA`; Falcon now uses Lilac Light `#f6f5fc`. Falcon blog post shells use `max-width: 56rem` (896px) to match the measured article column at 1440.

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
| Muted `rgba(0,0,0,0.6)` | leftover `#666666` → Martinique Lighter `#605a7b` |
| Pale panel `rgb(247, 247, 250)` | leftover `#F7F7FA` → Lilac Light `#f6f5fc` |
| Subscribe to Briefings band `rgb(114, 151, 197)` (HSL 213° / 42% / 61%) | Hue rotated to lilac: `#A072C5` (`rgb(160, 114, 197)`, HSL 273° / 42% / 61%). CTA bands use this with dark ink text. Ink on `#A072C5` is **5.4:1** (AA for body). |
| Links / selected UI | `#5b21b6` (`#4c1d95` hover) |

Contrast (Lilac Light `#f6f5fc`): ink ~19:1 AAA. Historical Goldman `#5b21b6` / `#A072C5` fills are no longer used; current buttons are ink/white or button-040 Lilac/Martinique.

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
