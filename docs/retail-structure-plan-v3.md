# Retail page — structure plan v3 (22 Oct 2026)

Supersedes `retail-structure-plan-v2.md` for the current build. Ling marked the sections herself and
named most of the donors, so this plan is short on purpose: it records what she chose, the measurements
behind the one band that had no library entry, and what is deliberately not on the page.

Copy contract: Notion `Retail industry page – content outline (stage 1)` (`401eacd0-19c7-8138-92d7-f3a1ecc82710`),
read 22 Oct 2026 after her edit (7 sections; the old "What you need to apply" is gone).

## Bands

| # | Band | Donor | Source | Ours |
| --- | --- | --- | --- | --- |
| 1 | Hero | blackstone.com **/financial-advisors/** header (not in the library — captured live 22 Oct) | https://www.blackstone.com/financial-advisors/ | H1 cols 1–9, standfirst cols 12–16, one `.arrow-cta` Apply, 16:9 still below as a placeholder until Ling sends the photograph. **No stats strip** — she cut it: "we don't have stats any more." |
| 2 | Answer first | blackstone.com home, **Private wealth** band | https://www.blackstone.com/ | Eyebrow + rule, 64px claim, indented 18/27 lead, "Learn more", raised panel of four takeaway rows |
| 3 | What's your case? | **Osmo "Expanding Feature Pills"** | https://www.osmo.supply/resource/expanding-feature-pills | Dark band. Eyebrow + H2 above the component, **no intro copy**. One rounded card: eight pills stacked left, still filling the right half; the open pill grows into a card holding the situation, its product, the amount/term and a link. |
| 4 | Products | the service pages' "When X isn't the right fit" band (`mca-cards--3`) | falconequity.ai redesign `/services/merchant-cash-advance` | Three cards: product name, fit line, `See <product>` + arrow; one closing line on restricted industries |
| 5 | Blog | the service pages' blog slider (`mca-blog-slider`) | same | Five published retail-relevant posts, autoplay 5s, arrows, live region |
| 6 | FAQ | the service pages' FAQ band (`mca-faq-list`) | same | Seven questions, `FAQPage` schema from the same array |
| — | CTA | sitewide `SiteCta` in `BaseLayout` | — | Unchanged |

No `Button040` except the hero's arrow CTA; the home page is untouched.

## Band 1, measured live

`blackstone.com/financial-advisors` has no library entry, so it was captured with a real Chrome window
(Cloudflare 403s curl and headless Chrome on this host) and measured at 1440:

| Property | Measured | Built |
| --- | --- | --- |
| Band | white, pad `48px 0 120px`, no image inside the header block | same pads (`.ret-hero` at ≥80em) |
| H1 | x 88, 704px wide, 56/84 weight 300, Sanomat | cols 1–9 of 16, `--font-display` 56/84 weight 300 |
| Standfirst | x 968, 384px wide, 18/27 weight 300, top-aligned with the H1 | cols 12–16, `.ret-body` 18/27, `align-self: start` |
| CTA | none in the reference (Blackstone's sits in the nav) | one `.arrow-cta` Apply kept under the standfirst — Falcon has no Apply in the mobile header |
| Image | none in the header block | 16:9 still below, `Media labeled` placeholder, 56px above |

The stat strip that used to sit here (`PE-02`: up to $5,000,000 · 24-48 hours · 0% agreement fee ·
300+ businesses) is gone from the page and from the page file. Those four facts still exist on the home
page and in `STATS`; this page just stops repeating them.

## Band 2, measured exactly (CDP, live page, 1440)

`blackstone.com` home has no library entry for this band, so it was measured live with a real Chrome
window (`~/Desktop/hermes-output/measure_pw_band.cjs`, `measure_pw_rows.cjs`; raw JSON in
`bs-pw-band.json`). Ling's note: *"I want you to learn the exact build."* These are the numbers the CSS
now uses, and a second script (`measure_ours_pw.cjs`) prints the same table for our page so the two can
be diffed.

| Property | Reference (live, 1440) | Ours (measured the same way) |
| --- | --- | --- |
| Band | full-bleed, `#000`, padding **160px 0** | `--color-surface-dark`, padding 160px 0 |
| Grid | 16 tracks × **64px**, 16px gutters, content **1264 at x=88** | identical |
| Left column | cols **1–6** = 464px | 464px, x 88 |
| Eyebrow | **16/24**, weight 400, uppercase, letter-spacing **1.28px**; `::after` rule **64×2px, 24px** after the label | identical (rule overridden from the sitewide 48px) |
| Eyebrow → claim | **84px** | 84px |
| Claim | **48/72**, weight 300, letter-spacing **0.384px**, white, no max-width | 48/72, 0.384px, none |
| Claim → paragraph | **56px** | 56px |
| Paragraph | **18/27**, weight 300, letter-spacing 0.32px, indented **80px**, **384px** wide | identical |
| Paragraph → Learn More | **63px** | 63px |
| Learn More | **18/27**, weight 400, circle **40px**, **20px** gap, at the column edge (no indent) | identical |
| Panel | cols **9–16** = 624px, offset **88px** from the band's content top, bg `#121317`, padding **64px 80px** | 624px at x 728, offset 88px, padding 64/80 |
| Rows | padding **40px 0** (first: no top, last: no bottom), border-bottom **1.5px `#d5d8df`** on all but the last | same structure; 1px rendered at DPR 1 |
| Row label | **24/36**, weight 300, letter-spacing 0.32px, 302px column + 40px arrow | **20/30 on purpose** — Ling asked for smaller, and our rows are full sentences rather than fund names |

Two deliberate deviations, both stated in the CSS comments: **no arrows** on our rows (the reference's
rows are links to funds; ours are takeaways, so an arrow would promise a destination), and the row type
at 20/30 rather than 24/36.


## Band 3 — the Osmo pills

Ling: "use this component for 'whats you case' section. Make the section dark theme. The eyebrow and h2 title should be outside (above) of the component. There should be no intro texts."

Osmo's resource is **locked behind a paid membership** — the code is not readable, so the build comes from their public preview: a still (`osmo.b-cdn.net/resource-img/expanding-feature-pills-1440x900.avif`) and a 361 KB MP4 (`resource-video/...-1440x900.mp4`). Read off the still: one rounded card (radius 20), pills stacked down the left at ~17px with a 20px plus chip, the open pill growing into a card with a 19px title and 17px body over a slightly lighter fill, and a media half on the right.

Built to that shape, with our content: each pill is a situation sentence; opening one shows what it means for cash, why that product, the product name and the verbatim amount/term, and a link to the service page. Eight pills, one open at a time, first open by default.

- State lives in `src/scripts/retail-pills.ts` (delegated clicks, single-open, `aria-expanded` + `aria-controls`).
- Motion is CSS only: `grid-template-rows: 0fr -> 1fr` on the panel, 460ms `cubic-bezier(.22,1,.36,1)`, plus a 45° rotation on the plus chip. No height measurement, nothing to recalculate on resize.
- The media half is a labelled placeholder with a quiet surface and a 1px inset outline — the default lilac placeholder reads as a blown-out block on a dark card.
- On mobile the pills come first and the media drops below them; the 50/50 split only applies from 64em.
- Product names and ranges are read from `SERVICES`, never typed: `situationSeeds` holds the sentence, the meaning, the slug and the reason.

## Not on the page

The copy contract no longer has these, so they came out with their bands:

- **Four cash pressures** (`TF-05`, "what it costs you") and **the retail year** (`TF-03`/`PE-05`).
- **The situation table** — its eight situations now live inside Ling's pending component (band 3); the
  copy is in the page file as `situations` so the component can consume it without re-keying.
- **When another product fits better** (the old Section 5) — the note's numbering still jumps 4 → Blog → 6,
  which is where it used to sit. Its *layout* is what band 4 now uses.
- **Three files in practice** — the generic cases were ours, not the contract's.

Their CSS is still in `retail.css` under the first rebuild's dated blocks; retired rules are marked as
superseded at the top of the second-rebuild block and come out in the cleanup pass.

## QA

- `npm run build` passes; `npm run test:titles` passes.
- Over CDP at 390 / 768 / 1024 / 1440 / 1920: `scrollWidth == clientWidth`, zero overflowing elements,
  six `[data-ret-section]` bands (header, answer, situations, products, blog, faq).
- Band 2 at 1440: panel 624 wide, claim 64px, rows 25.9px — matches the measured reference within a
  few percent. Gap above the product cards settled at 104px (`.mca-cards` already carries
  `--space-head-to-content`; a second gap read as 208px).
- Blog slider renders all five slides and keeps the service page's live region and arrow labels.
