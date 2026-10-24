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
| 1 | Hero | white | **TF-00** + **TF-01** | Title with the standfirst beside it, then one wide still. Same geometry as `/about`. No CTA, as the contract asks. | H1 `Brokers, ISOs and funding partners`, lead, 5:2 still — the supplied boardroom photograph (`src/assets/images/partners-hero.webp`, Ling 23 Oct): four colleagues in a glass-walled boardroom, two shaking hands. The alt text describes that image. No eyebrow above the H1. |
| 2 | Partner types | white | **TF-05** / **BXCI-07** | Three equal text cards, no art. Uses the house 1/5 · 6/6 · 12/5 split from `/about` values. | Eyebrow, H2, lede, three cards (Brokers and ISOs · Funding partners · Service partners). |
| 3 | Our partners | white | a plain list, measured off **PE-04** and then stripped back | Ling, 23 Oct: minimal, no tinted card, no divider line, no "Become a partner" tile. Each partner is one row — logo on the left (14rem track), type label, one plain line and a link on the right. Adding an entry to `PARTNERS` adds a row in the same shape. | Eyebrow, H2, lede, one row per partner (Cardiff today). |
| 4 | Partner enquiries | dark | **HOME-07** (form variant) | Heading on the left, the enquiry form in the right-hand tracks — the donor shape, used as intended now that the band is a form. | `id="become-a-partner"`, eyebrow `Partner enquiries`, H2 `Want to partner with us?`, and **a form placeholder** in place of copy. Ling supplies the form; the placeholder is the only thing to swap. |
| 5 | FAQ | white | **PWS-09** / **APM-08** | A short FAQ of five rows. Uses the shared `FaqList` and the FAQPage schema. | Eyebrow `FAQ`, H2 `Partner questions.` (the contract has no FAQ H2, so this one was added), five Q&As. |
Bands run white → white → white → dark → white. Same-theme followers collapse their top padding through
the global `[data-band]` rule. **The page has no closing CTA band:** Ling deleted the last section above
the footer, so it now ends on the FAQ. The layout's default pre-footer band is switched off with
`cta={false}` on `BaseLayout` — the prop already existed for `/apply`, so no shared component changed.

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
- **The SiteCta static variant is gone.** The first build added optional `heading` / `body` props and
  an `actions` slot to `SiteCta`, plus a `slot="cta"` branch in `BaseLayout`, for the closing band. With
  that band deleted there is no user, so both files are reverted to their pre-partners state and the
  variant's CSS is out of `partners.css`. Other pages' CTA bands are untouched — checked in the built
  output: `/about` and `/faq` still carry theirs.
- **Small additions to the contract:** the link label "Visit Cardiff" on the partner item, and the FAQ
  H2. Both were flagged to Ling when the page was first built.
- **Hero still is the client's own photograph (Ling, 23 Oct).** `partners-hero.webp` (1440×617) replaces the
  falcon placeholder, cropped to the house 5:2 ratio — the crop takes a little off the top and bottom and
  leaves the faces and the handshake intact. It is the only image on the site with people in it, which
  `CLAUDE.md`'s "no people" rule otherwise guards: supplied by the owner, so it is her call, but the licence
  for the stock photo is worth confirming before launch.
- **The enquiry band is a form now, and the form is a placeholder (Ling, 23 Oct).** The H2 is
  `Want to partner with us?`; the "what to send" / "what happens next" columns, the Email / Subject /
  Direct rows and the closing line are deleted, because the band will hold a form she has not sent yet.
  `[data-form-placeholder]` marks the slot — swap that one div for the real form and delete the
  `.ptn-form-slot*` rules with it. `PARTNER_MAILTO`, `PARTNER_SUBJECT`, `DIRECT` and the `SITE` import
  came out of the page with the contact rows; the header/footer still carry the phone and email.
- **The partner row is a list, not a card row (Ling, 23 Oct).** Her three instructions: the lede becomes
  the "we are actively adding partners in three areas" line, the horizontal divider goes, and the partner
  item must not sit in a card with a different background — so the Lilac tile, the 2px rule above the row,
  the empty grid tracks and the "Become a partner" tile are all gone. `BECOME_A_PARTNER` came out of
  `src/data/partners.ts` with its only user.
