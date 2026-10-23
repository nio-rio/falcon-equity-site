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
| 3 | What's your case? | **Ling's own component — pending** | her reference still, 22 Oct | Placeholder: raised dark card, copy + eight pill chips left, 4:5 still right |
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

## Band 2, measured because the library has no entry for it

The Private Wealth band sits on the Blackstone home page, which was captured into the library only as
`HOME-00…07`; none of those is this module. Measured from Ling's 2× screenshot (3112×1840) with the
content box resolved to 1264px:

| Property | Measured | Built |
| --- | --- | --- |
| Band fill | `#000000` | `--color-surface-dark` (Martinique Darker) — colour stays Falcon's |
| Panel fill | `#121317`, panel = 8 of 16 columns | `rgb(255 255 255 / 5.5%)`, cols 9–16 = 624px |
| Panel inner pad | 80px left and right | 80px |
| Row pitch | ~153px; hairline between rows | 40px block pad + `--bx-on-dark-rule` hairline |
| Circle arrow | 40px, top-aligned to the first title line | **omitted** — our rows are takeaways, not links |
| Eyebrow | 15–16px, letterspaced, 60px rule after it | `.eyebrow--line` |
| Claim | ~64px / 1.12, 3 lines at 410px wide | `clamp(36px, 4.6vw, 64px)`, `max-width: 13ch` |
| Lead | 18/27, 370px wide, indented 80px from the claim | `max-width: 23em`, `margin-left: 80px` at ≥80em |
| Lead → Learn more | 78px | `margin-top: 40px` (Falcon's rhythm is tighter) |

Two things the reference does that we don't, both deliberate: its three rows are **links to funds**, so
they carry arrows — our four rows are takeaways and carry none; and its claim is a brand statement,
while ours has to stay answer-first for search, so the paragraph sits directly under it.

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
