# Partners page — structure plan (23 Oct 2026)

Route `/partners`. The copy contract is the 23 Oct 2026 partners note in nio rio Notion, used word for
word **as Ling edited it that day**. Before this the route 301'd to `/` and every Partners link in the
nav pointed at `/#main`.

Layout IDs come from `docs/section-library-live/LIBRARY.md` (TF, PE, APM, HOME, FAL) and
`docs/section-library/LIBRARY.md` (BXCI, PWS). I picked each one by content shape: reading order, item
count and content type. Where a donor is one item short or long, the row says so.

Contact details come from `SITE`. The partner row comes from `src/data/partners.ts`.

| # | Band | Theme | Donor | Why it fits / adaptation | Content |
| --- | --- | --- | --- | --- | --- |
| 1 | Hero | white | **TF-00** + **TF-01** | Title with the standfirst beside it, then one wide still. Same geometry as `/about`. No CTA, as the contract asks. | H1 `Brokers, ISOs and funding partners`, lead, 5:2 still (`hero-falcon.webp`, a placeholder: a peregrine falcon on a branch, no people). The alt text describes that image. No eyebrow above the H1. |
| 2 | Partner types | white | **TF-05** / **BXCI-07** | Three equal text cards, no art. Uses the house 1/5 · 6/6 · 12/5 split from `/about` values. | Eyebrow, H2, lede, three cards (Brokers and ISOs · Funding partners · Service partners). |
| 3 | Our partners | white | **PE-04** (3-up cards with circle-arrow links) | Cards with a mark, a line and a link, rendered from `PARTNERS`. The "Become a partner" text tile always takes the last track (`grid-column: -2 / -1`). With one partner the row reads as two bookends on one standing rule: Cardiff on the left (Lilac `tile-card`), the dark text tile on the right. No ghost tiles, no centring, no "coming soon". | Eyebrow, H2, lede, partner tiles plus the Become tile, growth line under the row. |
| 4 | Become a partner | dark | **HOME-07** (no form) | Heading on the left, content on the right. The donor's form is replaced by two text columns and contact rows: this is an enquiry band, not a capture form. | `id="become-a-partner"`, eyebrow, H2, `What to send` / `What happens next`, Email / Subject / Direct rows, closing line. |
| 5 | FAQ | white | **PWS-09** / **APM-08** | A short FAQ of five rows. Uses the shared `FaqList` and the FAQPage schema. | Eyebrow `FAQ`, H2 `Partner questions.` (the contract has no FAQ H2, so this one was added), five Q&As. |
| 6 | CTA | dark | `SiteCta`, static variant (**DC-08** shape) | The sitewide band, given a heading and a line in place of the wheel. | H2 `Send the first file.`, body, Button040 light `Email the partner desk` (mailto, subject `Partner enquiry`), ArrowCta `Direct line +1 (917) 245-5277`. Nothing sits beside the buttons. |

Bands run white → white → white → dark → white → dark. Same-theme followers collapse their top padding
through the global `[data-band]` rule.

## Bands deleted from the contract, and so deleted from the build

Ling edited the Notion note twice on 23 Oct. Everything she removed came out of `partners.astro` and
`partners.css` in the same pass — no dead classes, no orphaned data blocks, and the imports and the
page-header comment were retuned to what is left:

- **`In short`** (answer-first paragraph plus four takeaways) — deleted in her first edit.
- **`Product shelf`** (the seven-row product list) — deleted in her second edit.
- **`Submission`** (the four-document list and the two paragraphs) — deleted in her second edit.
- **`The shared client`** (four owner commitments) — deleted in her second edit.
- **`Speed`** (three `STANDARD_STEPS` columns plus the `24-48h` figure) — deleted in her second edit.
- **`Cardiff`, the dedicated split band** — deleted in her second edit. Cardiff now appears only in the
  partner row, where its tile carries the same outbound link and the `sponsored` rel.

## Decisions to review

- **One stale cross-reference, fixed.** The FAQ answer "Do you accept broker and ISO submissions?" read
  *"…with the subject "Partner enquiry", using the document list above."* The document list was deleted
  with the `Submission` band, so the phrase points at nothing. The build drops those five words and
  keeps the rest of the sentence as written. If she wants the document list back, the answer returns
  unchanged.
- **SiteCta static variant.** `SiteCta` gained optional `heading` / `body` props and an `actions` slot.
  `BaseLayout` renders a page's `slot="cta"` in place of the default band. When the props are omitted
  the markup is unchanged, and every other built page is byte-identical apart from the Partners href.
  The variant's CSS lives in `partners.css` while this is the only page that uses it.
- **Small additions to the contract:** the link label "Visit Cardiff" on the partner tile, and the FAQ
  H2. Both were flagged to Ling when the page was first built.
