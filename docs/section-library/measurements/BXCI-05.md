# BXCI-05 accordion motion

- **Captured:** 2026-10-22T02:54:00Z
- **Source:** https://www.blackstone.com/our-businesses/credit-and-insurance-bxci/ (Credit strategies accordion)
- **Used by:** MCA FAQ. Keep DC-06 dark-band type sizes; copy this file’s caret and hover-rule motion onto `mca-*` classes.
- **Method:** Playwright computed CSS / keyframes / hover+open on live `.bx-accordion__animated`.

## Wrapper (the line is attached here)

Each row is `.bx-accordion__animated` wrapping the **whole** `.bx-accordion__item` (title + panel). Hairlines are in-flow pseudos on that wrapper, not on the title:

- `::before` — `display: block`, `border-top: solid 0.063rem`, `transform: scaleX(0)` then `scaleX(1)` in-viewport. First empty wrapper hides `::before`.
- `::after` — `display: block`, `box-sizing: content-box`, `border-bottom: solid 0.063rem`, `height: 0`, `width: 100%`, `transform-origin: left center`, `transition: transform 0.5s linear`. Last empty wrapper hides `::after`.
- In viewport: `transform: scaleX(1); transform-origin: 0px 50%; width: 100%` — the hairline is always drawn.
- Dark theme maps the border to white; light is black/`var(--c-copy)`.
- Because `::after` is in-flow after the item, opening the panel (JS `max-height`) grows the wrapper and the line stays at the **bottom of the open row**.

## Hover redraw (`min-width: 80em`)

- Selector: `.bx-accordion__is-in-viewport.bx-accordion__animated:hover::after` (hover anywhere on the row, including the open answer).
- `animation: Border-Bottom-Animate 0.5s linear both`
- `transform-origin: left center`
- `transition-timing-function: ease-out` on the hover rule; animation itself is linear
- Keyframes: `0% { scaleX(0) }` → `100% { scaleX(1); origin left center }`
- Hover-out: animation removed; in-viewport `scaleX(1)` remains (line stays drawn; it does not retract). `transition: transform 0.5s linear` is still on the pseudo.

## Caret

- Closed: `transform: none`
- Open: `transform: rotate(180deg)`
- `transition: transform 0.3s` (default easing, no delay)
- Hover (fine pointer): icon wrap `background: var(--c-copy)` (black on the live light accordion), `border-radius: 24px`; SVG flips to the inverse (white on light, black on our dark FAQ)
- Open + hover: icon wrap `background: rgba(0,0,0,0.25)` on light; map to `rgba(255,255,255,0.25)` on the dark FAQ
