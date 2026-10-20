# Blackstone Credit & Insurance — scroll-in motion (measured)

Source: `blackstone-v2` `frontend.js` / `frontend.css` (same theme as
`https://www.blackstone.com/our-businesses/credit-and-insurance-bxci/`).
Live `blackstone.com` is Cloudflare-gated here; values are read from the
bundled GSAP + CSS, not guessed.

GSAP `ScrollTrigger` is registered globally. Durations in JS are
**milliseconds** because `gsap.globalTimeline.timeScale(1000)`.

## Global defaults

| Token | Value |
| --- | --- |
| `ScrollTrigger.defaults.start` | `"top 90%"` |
| `ScrollTrigger.defaults.toggleActions` | `"play none none none"` (plays **once**, no reverse) |
| `refreshPriority` | `1` |
| Reduced motion | `timeScale(10000)` (effectively instant) |

Most inner-page sections override start to **`"50% 90%"`** (trigger midpoint vs viewport 90%). Featured-content images/stats use `"55% 90%"` or `"45% 90%"`. Link-list row borders use `"top bottom"`.

## Presets in `frontend.js`

| Helper | From | To | Where used |
| --- | --- | --- | --- |
| Fade | `{ autoAlpha: 0 }` | `{ autoAlpha: 1 }` | generic |
| Scale fade | `{ autoAlpha: 0, scale: 0.95 }` | `{ autoAlpha: 1, scale: 1, ease: "power2.out" }` | generic |
| Slide | `{ autoAlpha: 0, y: 40 }` | `{ autoAlpha: 1, y: 0, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }` | unused on headers |
| **Headers / body** | `{ autoAlpha: 0, y: 20 }` | `{ autoAlpha: 1, y: 0, duration: 800, stagger: 400 }` | `.bx-headers-four__title, __description` and featured copy. No ease set → GSAP `power1.out`. |
| Char promo (hero-like) | `{ autoAlpha: 0, rotationX: 15, rotationZ: 15, y: "200%" }` | `{ autoAlpha: 1, rotationX: 0, rotationZ: 0, y: 0, stagger: 10 }` duration **1200**, SplitText `by: "chars"` | promo header only |
| Curtain wipe | `y: "0%"` 600ms easeOut, then `y: "-100%"` 600ms easeIn | announcement / hero image overlay |

Eyebrows are **not** in the headers query list. Title + description (and CTA when present) stagger.

## Stats (Tac Opps / featured)

IntersectionObserver (threshold default 0) adds `.active`:

| Element | Motion |
| --- | --- |
| Titles / labels | `@keyframes Fade-In` **0.75s** (opacity 0→1) |
| Values | `@keyframes data-text` **0.9s** delay **0.375s** — `background-size` 0→100% with `background-clip: text` |
| Underline | `@keyframes Divider-Line-Animate` `{0%,20%{scaleX(0)} 40%{scaleX(1)}}` **1.125s linear**, origin left (featured-content stats use **1.5s**) |

`.bx-animation-disabled` (no JS / reduced) forces visibility and kills animations.

## Images

`.bx-animation__image-wrapper` onEnter:

- Overlay `.bx-animation__curtain`: `@keyframes curtain-reveal` `{0%{bottom:0;height:0} 50%{bottom:0;height:100%} to{bottom:100%;height:0}}` **1s** forwards, fill `--c-black` (white on dark).
- Image `.bx-animation__curtain-image`: `@keyframes image-fade-in` **0.5s** delay **0.4s**.

## Falcon mapping

Home sections **below the hero** use the headers preset (`y: 20`, 800ms, stagger 400ms, start `50% 90%`, play once). Stats use Fade-In + data-text + 1.125s line. News stills use the curtain. **Not** applied to `.pilot-hero`, `.pilot-ann` (its own SplitText + clip), or `.site-cta` (rolling line). Content stays visible without JS (`html.has-js` is the only hide switch).
