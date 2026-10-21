# Blackstone site header (measured)

Source: `#masthead.site__header.site-header` on `https://www.blackstone.com/`.

Live `blackstone.com` is Cloudflare-blocked here. Values are from archived home HTML
(`/tmp/bxhero/bxhome.html`, dark: `is-color-theme-dark`) plus TAC Opps inner HTML
(`/tmp/bxtac/wb2.html`, light, no dark class) and `blackstone-v2` `frontend.css`
(`/tmp/bxtac/frontend.css`). **1280** = `80em`. **1440** = `90em`.

## Theme

| Surface | Home | Inner pages |
| --- | --- | --- |
| Header class | `is-color-theme-dark` | (none) |
| `--c-background` | `#000` | `#fff` |
| `--c-copy` / `--c-graphics` | `#fff` | `#000` |
| `--c-background-highlight` (promo card) | `#121317` | `#f4f5f7` (`--c-slate-3`) |
| Logo | black box, **1px white** outline, white mark | filled **black** box, white mark |
| Open item | 1px currentColor underline + chevron 180° | chevron 180° |

Nav hover is a 1px `currentColor` underline (`background-size` 0→100% in 0.3s). The yellow on “What We Do” in capture screenshots is a user annotation, not a hover style.

Blackstone does **not** change theme on scroll. Falcon home stays dark while any part of `[data-home-hero]` is still under the bar (`IntersectionObserver` with `rootMargin` = header height). It switches to the inner white bar only once the hero’s bottom edge has passed under the header, and returns to dark when scrolling back into the hero.

## Bar

| Token | Mobile | 26em | 48em (768) | 80em (1280) | 90em (1440) |
| --- | --- | --- | --- | --- | --- |
| `--h-site-header` (CSS unfixed) | **7rem** (112px) | **8rem** | **8.75rem** (140px) | **12.75rem** (204px) | same |
| Applied bar (Falcon / `--fixed`) | **6.375rem** (102px) | same | **6.75rem** (108px) | **6.75rem** | same |
| `--h-site-header--fixed` (scrolled) | **6.375rem** | same | **6.75rem** (108px) | same | same |
| Logo box `--w` × `--h` (BX) | **7.625 × 3rem** | same | **9.5 × 3.75rem** (152×60) | same | same |
| Falcon logo (live lockup, not 1.25×) | mark **2rem (32px)** + At Gambit **1.3rem (20.8px)** / 600 / lh 1.5, gap **1rem (16px)** | same through tablet (`<80em`) | same | mark **2.3rem (36.8px)** + **1.5rem (24px)** / 600, gap **1.5rem (24px)** | same |
| Default padding | container `2rem` top/bottom when `.bx-default-header__padding` | | | | |
| Fixed bar | `position: fixed; top: 0; transition: transform .3s ease-out` | | | | |

Falcon uses **`position: fixed`** like Blackstone (`position: fixed; top: 0`). Desktop bar height is `--h-site-header--fixed` (**108px**). A spacer holds document flow. Mega-menu panels use `top: 100%` of the bar, not a viewport offset, so they stay attached after scroll. Open menus lock page scroll (`html.has-scroll-lock`) with wheel/touch preventDefault — not `overflow: hidden` on html/body, which would trap the fixed bar off-screen after scroll. Escape / close releases that lock immediately (desktop and hamburger) so the page can scroll while the panel animates out. The resting bar has **no bottom border, box-shadow, or hairline**. While a dropdown is open, Blackstone draws a **1px `#d5d8df`** rule on the mega list (`--container-width`, same box as the logo/Apply row) — not a full-bleed header border. Falcon matches the placement with `.primary-nav__list-lvl-2 { border-top: 1px solid var(--nav-rule) }` at `80em+`; light `--nav-rule` is Lilac Dark `#e5e4f2`, dark is `--white-a16`. The logo matches live `falconequity.ai`: SVG mark + HTML wordmark in At Gambit at the measured live sizes (not 1.25×).

## Nav (desktop, `min-width: 90em`)

Hamburger `display: none`. Inner is `position: static; display: flex`.

| Token | 1280 | 1440 |
| --- | --- | --- |
| Top-level font | sans **16px**/400 | same |
| Top-level gap | **24px** (`--spacing-24`) | same |
| Chevron | **12px**, `margin-left: 8px`, `vertical-align: -0.5px`; `rotate(180deg)` when `aria-expanded=true` | same |
| Link hover | 1px `currentColor` underline, `background-size` **0 → 100%** in **0.3s** (mobile sets `background-image: none`) | same |
| Mega wrap | `position: absolute; top: 100%; left: 0; width: 100%`; bg `--c-background` | same |
| Mega list | flex, `border-top: 1px solid #d5d8df` (`--c-slate-2`) on `max-width: var(--container-width)` (Falcon `--bx-max`), not full-bleed; pad-bottom **48px**, column-gap **88px**. Line shows only while a panel is open. | column-gap **96px** |
| Column | max **20rem**, min **5rem**, pad-top **48px** | same |
| Two-col list | max **36.5rem**, `column-count: 2` | same |
| Column heading | sans **20px**/500 | same |
| L3 links | **16px**, item gap **16px**, heading→list **24px** | same |
| Promo card | flex-grow, margin-left auto, max **36.5rem**, bg highlight | max **39rem**; content pad **32px** |
| Promo image | **12.5rem** wide, min-height **192px**, cover | **14rem** |
| Promo title | **20px**/500, tracking **0.02rem**, lh 1.5 | same |
| Promo body | **18px**, margin-top **16px** | same |
| Promo CTA | “Learn More” + 40px circle-arrow | same |

Open/close is `display: none` on `[aria-hidden=true]` (no fade). Chevron rotates. Live `blackstone.com` (Chrome, 1440, 2026-10-20): header bar and mega-panel compute `backdrop-filter: none` with opaque `rgb(0, 0, 0)` / `rgb(255, 255, 255)`. Only the page overlay uses blur, and it has no saturate:

```
-webkit-backdrop-filter: blur(5px);
backdrop-filter: blur(5px);
background-color: rgba(0,0,0,.32);
position: fixed; inset: 0;
```

Falcon keeps the 5px blur and `.32` alpha; the overlay tint base is Martinique Darker (`rgba(20,16,31,.32)` / `--bx-overlay`) instead of pure black. Overlay is a `document.body` child (`z-index: 40`) so transform/filter/isolation on the header cannot clip the blur; header stays `z-index: 50`. The dark header/panel fill is also Martinique Darker. `.has-scroll-lock` plus wheel/touch preventDefault pins the header while a panel is open. Playwright coverage: `tests/nav.spec.mjs` (`npm run test:nav`) opens a menu at scrollY 0 / 800 / 2000, scrolls while open, and opens after scrolling on `/` and `/about` at 1440, 1280, 1024, 768, and 390. It also asserts overlay `blur(5px)` (no saturate) and header/panel `none` in each state, that the bar phone (`tel:+19172455277`) matches a primary menu link’s font, size, weight, color, and 1px `currentColor` hover underline, that the open panel’s first column left equals the logo left (±1px), and that the 1px divider (Lilac Dark on light, `--white-a16` on dark) is visible only while a menu is open.

## Mobile (`max-width: 89.9375em`)

Toggle **2.125 × 1.5rem**. Hamburger and X stack in that box; only lines show when `aria-expanded=false`, only the cross when `true`. Inner is absolute, full width, `top: 100%`, bg `--c-background`, `max-height: calc(100dvh - header)`, scroll. Items get a 1px top rule (BX `#d5d8df`; Falcon light uses Lilac Dark `#e5e4f2`) and 16px vertical padding. Chevron **16px**. Ling CTA rule: Apply stays on the bar next to the hamburger from **33em**; compact **33–38em**; phone joins from **50em**; Apply moves into the drawer only below **33em**. The header inner ignores the 23rem content cap from 33–48em so that row can fit, and the drawer inset matches `--bx-margin` in that range. Never wrap.

## Falcon mapping

Real pages only, grouped like the captures:

- **Our Firm** — two headings (`Our Firm` / `Contact`), light-inner pattern
- **Services** — two-col product list
- **Industries** — two-col list
- **Resources** — Blog / Tools / Help plus the Apply promo card (follows header theme: Darker + white on dark, Lilac + `#14101f` on light; Learn More + circle-arrow). Title, body, link, and button label stay AA against the card in both themes, including Learn More hover.

Home header is dark with an outlined logo and an underlined open item. Inner pages are white with a filled black logo tile. No invented social, people, or stats.
