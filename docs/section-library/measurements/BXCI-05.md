# BXCI-05 accordion motion

- **Captured:** 2026-10-22T02:20:00Z
- **Source:** https://www.blackstone.com/our-businesses/credit-and-insurance-bxci/ (Credit strategies accordion)
- **Used by:** MCA FAQ. Keep DC-06 dark-band type sizes; copy this file’s caret and hover-rule motion onto `mca-*` classes.
- **Method:** Playwright computed CSS / keyframes on `.bx-accordion__item-title` and the caret SVG.

## Caret

- Closed: `transform: none`
- Open: `transform: rotate(180deg)`
- `transition: transform 0.3s` (default easing, no delay)
- Hover (fine pointer): icon wrap `background: var(--c-copy)` (black on the live light accordion), `border-radius: 24px`; SVG flips to the inverse (white on light, black on our dark FAQ)
- Open + hover: icon wrap `background: rgba(0,0,0,0.25)` on light; map to `rgba(255,255,255,0.25)` on the dark FAQ

## Bottom rule draw

- Trigger `::after`: `border-bottom: solid 0.063rem`, `transform: scaleX(0)`, `transform-origin: left center`, `transition: transform 0.5s linear`
- Hover / focus-visible at `min-width: 80em`: `animation: Border-Bottom-Animate 0.5s linear both`
- Keyframes: `0% { scaleX(0); origin left }` → `100% { scaleX(1); origin left }`
- Hover-out: animation removed; the `0.5s linear` transition retracts `scaleX` back to `0` from the left
- Reduced motion: no animation; hover may hold `scaleX(1)`
