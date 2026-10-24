# Blog slider — global component + Blackstone hero navigation

Scope: the blog band on the six service pages and `/industries/retail`. Two
instructions from Ling, one build:

1. Take the **slider navigation** from the blackstone.com home hero carousel.
   Navigation only — no other element of that band.
2. The blog slider must be a **global component**: a change shows on every page.

## What the navigation is, measured live

Captured from `https://www.blackstone.com/` in a real Chrome over CDP at 1440 on
23 Oct 2026 (section `#bxPromoCarousel1`, `.bx-promo-carousel__nav`), then the
motion read off Ling's screen recording of the same component.

| Property | Reference (measured) | Ours (measured) |
| --- | --- | --- |
| row | flex, align-items centre, height 40 | same |
| order | prev · dots · next | same |
| gap, arrow ↔ dots | 48 at 1440 (40 base, 56 at ≥1920) | 48 at 1440 (40 base) |
| arrow | 40 × 40, 1.5px ring + 40-unit line arrow | same, paths copied verbatim |
| prev arrow | whole button rotated 180° | same |
| arrow hover | icon `scale(1.16667)`; line arrow fades out, solid disc with the arrow **knocked out** fades in; 300ms | same, verified 1 → 0 / 0 → 1 and 40 → 47px |
| dot hit area | 24 × 24 | same (never reduced) |
| dot mark | 12px solid circle, centred | same |
| dot pitch | 32 (8px gap at 1440, 16px base) | same |
| active dot | 24px ring, 1.5px stroke | same |
| **ring on activation** | **drawn clockwise from 12 o'clock, 0 → full, ~0.9s ease-out, then holds** | dashoffset tween, 900ms `power2.out` |
| outgoing ring | cleared instantly when its slide goes inactive | same |

Reference numbers that were *not* imported: its near-black band, Guardian Sans,
its hero furniture, and its 25%-ish resting dash offset (a paused-state artefact
on the live site — the recording shows a full ring at rest).

### The ring animation, from the recording

Frame-by-frame (30fps, dot centres at 2× — dot 24px, ring outer 48px, stroke 3px):

| time after the slide activates | arc drawn |
| --- | --- |
| 0.03s | 14% |
| 0.10s | 26% |
| 0.30s | 57% |
| 0.50s | 79% |
| 0.70s | 93% |
| 0.90s | 99% |
| 0.97s | 100% |

Arc geometry checked by sampling ink at r = 22.5px every 2°: at 30% coverage the
inked run is 4°–110°, at 50% it is 4°–182°, at 81% 4°–294° — it **starts at 12
o'clock and grows clockwise**. The fitted ease is `power2.out` (easeOutQuad):
predicted 87.7% at 0.63s vs 89% measured on the reference, and 98.2% at 0.63s vs
97% measured on ours.

Implementation: the circle ships with `stroke-dasharray` = circumference
(70.686 for r 11.25 in a 24 canvas) and a `-90°` rotation so the dash starts at
the top. The active dot ships with `stroke-dashoffset="0"` and the rest with a
full offset, so with JS off the static state is still correct (full ring on the
active dot). `syncDots()` in `src/scripts/blog-slider.ts` animates the offset
70.686 → 0 on activation and snaps the outgoing ring back; it is called when the
transition *starts*, and again from `updateChrome` where a guard makes it a
no-op. Reduced motion sets the full ring immediately.

## The global component

| Before | After |
| --- | --- |
| 7 copies of the band markup, one per page | `src/components/BlogSlider.astro` |
| 7 prefix-scoped slider blocks (`mca-`, `loc-`, `btl-`, `cal-`, `cons-`, `ift-`, plus retail reusing `mca-`) | `src/styles/blog-slider.css`, one prefix (`blog-`) |
| `mca-blog-slider.ts` writing `mca-`-prefixed SplitText classes that every clone had to re-declare | `blog-slider.ts`, imported by the component itself |

~1,900 lines of duplicated CSS removed. Pages pass identity only:

```astro
<BlogSlider
  posts={blogSlides}
  label="Retail funding articles"
  bandClass="ret-band ret-blog-band"
  sectionKey="ret"
/>
```

Band padding stays in the page stylesheet, keyed on that band class; everything
inside the band is owned by the component.

## Deviations, and why

- **Mobile gaps step down.** The reference's 40px arrow gap and 16px dot gap are
  built for its two dots. Ours carry 5–6: measured at 390, six dots needed 384px
  against a 328px content box — the row hung 56px into the gutter. Below 48em the
  gaps become 24/8, and 16/4 below 360. Dot hit areas stay 24px.
- **The nav lives in the copy column**, under "Read the article" (`margin-top:
  auto` at ≥80em, so it sits on the media's baseline). The reference's hero puts
  its nav under the slide title; the anatomy of the row is what was borrowed.
- **Focus rings added** (`:focus-visible`, 2px ink, offset 3). The reference has
  no visible keyboard treatment on these controls; ours are buttons.

## Verified

- Built HTML: one `.blog-nav` per page, one dot per post (5 or 6), 2 arrows,
  zero `mca-blog-*` hooks left.
- Dot click: index 0 → 2, ring moves, `aria-current` moves, live region reads the
  new title, correct headline visible.
- Ring draw measured on our page: 70.686 → 0 over 900ms, monotonic, gap trailing
  at 332°–358° at 92% (clockwise from 12) — same shape as the reference.
- No horizontal overflow at 320 / 390 / 768 / 1024 / 1440 / 1920 on all seven
  routes; nav fits inside the content column at every width.
- `npm run build` passes. `npm run test:titles` passes, `test:testimonial` 13/13.
  `astro check` reports one pre-existing error in `PilotIndustryTabs.astro`
  (untouched here). `test:nav` needs a server on `127.0.0.1:4321` and failed on a
  home-page header-logo hover, not on this band.

## Shared with the home testimonial slider (same day)

Ling: *"Home page testimonial slider nav should also look like this."* Rather
than copy the nav a second time — the drift this task existed to remove — the
navigation became its own component and both sliders render it:

| File | Role |
| --- | --- |
| `src/components/SliderNav.astro` | prev arrow · dots · next arrow, one dot per slide |
| `src/styles/slider-nav.css` | every `.slider-nav*` rule; no page may re-declare them |
| `src/scripts/slider-nav.ts` | `syncSliderNav` (activation ring), arrow + dot binding |

Hooks are generic now: `data-slider-prev`, `data-slider-next`,
`data-slider-dot="i"`. The blog slider keeps its own `data-blog-*` slide hooks;
the testimonial keeps `data-testimonial-*`. Both pass a class for placement
only (`class="blog-nav"`, `class="pilot-ann-nav"`).

The home testimonial band was otherwise untouched — it is approved. Three
changes were unavoidable and all are placement, not restyling:

- `.pilot-ann-btn` and its `CircleArrow` spans are gone; the arrows are the
  shared 40px ring buttons. `--pilot-ann-btn` drops 2.75rem → 2.5rem because it
  is what reserves the meta column's space for the row.
- The nav's grid slot widens from 3 tracks to 4 — `5 / 9` at 48em (was `6 / 9`)
  and `13 / 17` at 80em (was `14 / 17`). Three tracks gave 224px; the row needs
  264px at 1440 (two 40px arrows, 48px gaps, three 24px dots at an 8px pitch).
- A single testimonial now renders no nav at all, where it used to render two
  disabled buttons. Home ships three, so nothing visible changes today.

Measured on the home page at 1440: prev arrow x=1041, dots at 1129 / 1161 /
1193 (32px pitch), next arrow x=1265 — 48px gaps either side, 264px of content
inside a 304px cell. No horizontal overflow at 320 / 390 / 768 / 1024 / 1440 /
1920, and the row's right edge stays inside the content box at every width.
Clicking the third dot moves the slide, moves `aria-current`, reads "3" in the
live region, and draws the ring (38% → 65% → 79% at ~120ms steps).

`tests/testimonial.spec.mjs` was updated for the new design: arrow box 44 → 40,
selectors `[data-prev]`/`[data-next]` → `[data-slider-prev]`/`[data-slider-next]`,
plus assertions that there is one dot per testimonial and that dot 0 is active.
13/13 pass. **Note the suite reads `QA_BASE` from the environment**, which on
this machine is set to the deploy preview — run it as
`QA_BASE=http://127.0.0.1:4321 npm run test:testimonial` against a fresh
`dist`, or it tests the last deployed build instead of the working tree.
