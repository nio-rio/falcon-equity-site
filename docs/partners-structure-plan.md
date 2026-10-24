# Partners page — structure plan (23 Oct 2026)

Route `/partners`. The copy contract is the 23 Oct 2026 partners brief, used word for word. Before this
the route 301'd to `/` and every Partners link in the nav pointed at `/#main`.

Layout IDs come from `docs/section-library-live/LIBRARY.md` (TF, PE, APM, HOME, FAL) and
`docs/section-library/LIBRARY.md` (BXCI, PWS). I picked each one by content shape: reading order, item
count and content type. Where a donor is one item short or long, the row says so.

Figures come from the data layer and are never retyped. Amounts, speeds and terms come from
`SERVICES` (`src/data/services.ts`). The three steps come from `STANDARD_STEPS`. The funding-time
figure comes from `STATS` (`src/data/site.ts`). Contact details come from `SITE`. The partner row
comes from `src/data/partners.ts`.

| # | Band | Theme | Donor | Why it fits / adaptation | Content |
| --- | --- | --- | --- | --- | --- |
| 1 | Hero | white | **TF-00** + **TF-01** | Title with the standfirst beside it, then one wide still. Same geometry as `/about`. No CTA, as the contract asks. | Eyebrow `Partners`, H1, lead, 5:2 still (`hero-falcon.webp`, a placeholder: a peregrine falcon on a branch, no people). The alt text describes that image. |
| 2 | In short | white | **TF-02**, on white | A claim read beside a few short rows. Here the claim is the direct-answer paragraph and the rows are the four takeaways. TF-02 has three rows; this band has four. | Eyebrow `In short`, answer paragraph, four takeaways with 8×2 ticks. The section is labelled with `aria-label`, because the contract gives no H2. |
| 3 | Partner types | white | **TF-05** / **BXCI-07** | Three equal text cards, no art. Uses the house 1/5 · 6/6 · 12/5 split from `/about` values. | Eyebrow, H2, lede, three cards (Brokers and ISOs · Funding partners · Service partners). |
| 4 | Product shelf | dark | **PWS-10** (shape shared with **FAL-02**) | A list of titled rows where each row is a real route. PWS-10 has 8 rows; this band has 7. | Seven rows: name, `Amount`, and `Speed`, or `Terms` where the product has no `speed` in the data. Closing line under the list. |
| 5 | Submission | white | **BMX-10**, on white | Title on the left, labelled rows on the right. The donor's chevron rows become static `dt`/`dd` rows. | Eyebrow, H2, four document rows, two paragraphs. |
| 6 | The shared client | dark | **TF-02** | A dark claim band with titled rows in the right-hand tracks. TF-02 has three rows; this band has four, each led by a numeral (numbers, not arrows: design-system rule 7). | Eyebrow, H2, lede, four numbered commitments. |
| 7 | Speed | white | **APM-01** | Three numbered columns under a claim. One partner line is added under each column, then the STATS figure on a 2px rule. | Eyebrow, H2, lede, `STANDARD_STEPS` ×3 unchanged, with "For the partner:" lines, then `24-48h` / `Average funding time`. |
| 8 | Our partners | white | **PE-04** (3-up cards with circle-arrow links) | Cards with a mark, a line and a link. Rendered from `PARTNERS`. The "Become a partner" text tile always takes the last track (`grid-column: -2 / -1`). With one partner the row reads as two bookends on one standing rule: Cardiff on the left (Lilac `tile-card`), the dark text tile on the right. No ghost tiles, no centring, no "coming soon". | Eyebrow, H2, lede, partner tiles plus the Become tile, closing line. |
| 8b | Cardiff | Lilac | **BXCI-06** featured split | One programme, one outbound link. The logo stands where the 16:9 still would be (tracks 1–6). Copy sits in tracks 9–16. | Eyebrow `Service partner`, H2 `Cardiff.`, body, `Open Cardiff's application` (`rel="noopener sponsored"`, new tab). |
| 9 | Become a partner | dark | **HOME-07** (no form) | Heading on the left, content on the right. The donor's form is replaced by two text columns and contact rows: this is an enquiry band, not a capture form. | `id="become-a-partner"`, eyebrow, H2, `What to send` / `What happens next`, Email / Subject / Direct rows, closing line. |
| 10 | FAQ | white | **PWS-09** / **APM-08** | A short FAQ of five rows. Uses the shared `FaqList` and the FAQPage schema. | Eyebrow `FAQ`, H2 `Partner questions.` (the contract has no FAQ H2, so this one was added), five Q&As. |
| 11 | CTA | dark | `SiteCta`, static variant (**DC-08** shape) | The sitewide band, given a heading and a line in place of the wheel. | H2 `Send the first file.`, body, Button040 light `Email the partner desk` (mailto, subject `Partner enquiry`), ArrowCta `Direct line +1 (917) 245-5277`. Nothing sits beside the buttons. |

Bands run white → white → white → dark → white → dark → white → white → Lilac → dark → white → dark. Same-theme
followers collapse their top padding through the global `[data-band]` rule. The Lilac band and the
band after it take full padding, because their surfaces differ.

## Decisions to review

- **Invoice Factoring row label.** The data name is `Invoice Factoring Tool`. The contract's row says
  `Invoice Factoring`, so the contract's label is used. The figures still come from the data.
- **Rows with no `speed`.** Invoice Factoring, Consolidation and Decentralized have no `speed` in
  `services.ts`, so these rows show their published `Terms` instead: `Ongoing facility`,
  `6 – 36 months`, `Consultative`. No speed is invented.
- **Decentralized Business Financing has no `/services/*` page.** Its row links to `/#services`, the
  same link the home page uses.
- **SiteCta static variant.** `SiteCta` gained optional `heading` / `body` props and an `actions` slot.
  `BaseLayout` renders a page's `slot="cta"` in place of the default band. When the props are omitted
  the markup is unchanged, and every other built page is byte-identical apart from the Partners href.
  The variant's CSS lives in `partners.css` while this is the only page that uses it.
- **Small additions to the contract:** the label "For the partner:" before each speed line, the link
  label "Visit Cardiff" on the tile, and the FAQ H2.
