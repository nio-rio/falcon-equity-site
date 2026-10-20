# Osmo mega-nav — Falcon adaptation

Reference (behavior only, not look): [Mega Navigation (Directional Hover)](https://www.osmo.supply/resource/mega-navigation-directional-hover) and the live demo at https://osmo-mega-navigation-directional-hover.webflow.io/. Logic follows Osmo’s `script.js` (GSAP 3.15). Falcon keeps its own fonts, palette, full-bleed mega, divider, overlay blur, button-040, and phone.

Desktop breakpoint stays **80em** (our header chrome). Osmo’s 991px is not used for layout.

## Measured timings (from Osmo `DUR` / hover constants)

| Token | Seconds | Ease | Use |
| --- | --- | --- | --- |
| `HOVER_ENTER` | **120ms** | — | First desktop open delay |
| `HOVER_LEAVE` | **150ms** | — | Close after leave |
| `openScale` | **0.35** | power3.out | Shared container 0 → panel height |
| `closeScale` | **0.25** | power2.in | Container → 0 |
| `bgMorph` | **0.40** | power3.out | Height morph between menus |
| `contentIn` | **0.30** | power3.out | Fade items in (stagger amount **0.25s**) |
| `contentOut` | **0.20** | power2.in | Fade items out (`× 0.7` on close) |
| `backdropIn` / `Out` | **0.30** / **0.20** | power2 | Our overlay still uses CSS show + existing blur |
| Directional slide | **30px** | — | Content exits `-dir`, enters `+dir` |

## Mobile (our `<80em` header)

| Step | Timing |
| --- | --- |
| Open list fade | 0.30s power2.out |
| Items from `y:12` | 0.30s, stagger **0.04**, start **0.15s** |
| Drill: items `xPercent -10` | 0.35s, stagger 0.03, power2.in |
| Logo out / Back in | 0.20s / 0.25s at 0.15s |
| Panel fade items from `xPercent 8` | 0.30s from 0.25s |
| Back: panel `xPercent 20` | 0.30s; items return from `-20` in 0.35s |
| Esc | Closes the drilled panel first, then the menu |
| Burger → X | Our existing 34×24 SVG swap (not Osmo’s 3-line morph) |

Reduced motion: durations go to 0. Focus is trapped in the header while the mobile menu is open. Scroll lock is our existing `has-scroll-lock` (not `body.overflow`).
