/**
 * Industry page copy. One source for all twelve /industries/<slug> pages, which
 * render through `src/components/IndustryPage.astro`.
 *
 * Source: nio rio Notion, "<Industry> industry page – content outline (stage 1)",
 * approved by Ling 23 Oct 2026. Verbatim; only the paragraph breaks are ours.
 * Retail is transcribed from the shipped page (approved 22 Oct) rather than the
 * older stage-1 note, so nothing on it changed.
 *
 * Amounts and terms are NOT stored here — every page reads them from SERVICES so
 * the figures cannot drift from the live #services spec. Blog ids are the note's
 * "relevant few", padded to five from the site fallback order so every slider has
 * the same slide count as the service pages.
 */
import type { IndustrySlug } from './industries';

export type IndustrySituation = {
  /** The situation, as the accordion question. */
  if: string;
  /** "What it means for your cash" — one line. */
  means: string;
  /** Why this product answers it. */
  why: string;
  /** Falcon product slug; the name/range/term resolve from SERVICES. */
  slug: string;
};

export type IndustryProductCard = {
  slug: string;
  fit: string;
};

export type IndustryPageContent = {
  slug: IndustrySlug;
  name: string;
  h1: string;
  standfirst: string;
  description: string;
  /** Placeholder brief for the hero still, until the photograph lands. */
  heroIntent: string;
  situationsLabel: string;
  situationsHeading: string;
  situations: IndustrySituation[];
  productsLabel: string;
  productsHeading: string;
  products: IndustryProductCard[];
  blogIds: string[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
};

export const INDUSTRY_PAGES: Record<IndustrySlug, IndustryPageContent> = {
  "retail": {
    slug: "retail",
    name: "Retail",
    h1: "Retail business loans",
    standfirst: "Stock the shelves before the money comes back. Funding that moves with your selling season, not against it.",
    description: "Retail business loans for inventory, seasonal payroll and store fit-outs. A line of credit up to $500,000, advances up to $5,000,000, and equipment loans. 0% agreement fee.",
    heroIntent: "stocked shop shelves seen from the aisle, boxes still on the floor",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your store right now?",
    situations: [
      {
        if: "You place the holiday order in July and pay for it in August",
        means: "Cash leaves the account months before the season pays it back.",
        why: "Draw what each order needs, repay as the stock sells, draw again next season.",
        slug: "business-line-of-credit",
      },
      {
        if: "A supplier offers a bulk price or an early-pay discount that expires this week",
        means: "The saving is real, but only if the cash is on hand now.",
        why: "The fastest product to fund; you repay from sales rather than a fixed monthly bill.",
        slug: "merchant-cash-advance",
      },
      {
        if: "Card sales are strong, but settlement runs behind rent and payroll in a slow month",
        means: "The money exists, it just has not landed yet.",
        why: "Repayment moves with your daily or weekly sales, so quiet weeks cost less.",
        slug: "merchant-cash-advance",
      },
      {
        if: "You need refrigeration, shelving, POS, security or a delivery van",
        means: "A one-time purchase a single month's margin cannot cover.",
        why: "What you buy secures the loan, and the term matches how long it keeps earning.",
        slug: "collateral-asset-loans",
      },
      {
        if: "You need seasonal staff on the floor weeks before the traffic arrives",
        means: "Payroll is a fixed cost against sales that have not started.",
        why: "Draw for the hire-up, repay it from the peak-season sales.",
        slug: "business-line-of-credit",
      },
      {
        if: "You are opening a second store or finishing a build-out with a known end date",
        means: "The spend lands now; the sales build over the following year.",
        why: "One fixed monthly payment, sized to what the new store should do.",
        slug: "business-term-loan",
      },
      {
        if: "Your wholesale or trade customers pay you on 30–60 day terms",
        means: "You made the sale, but you are financing your customer's float.",
        why: "Turns outstanding business-to-business invoices into cash now.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "Two or three advances from last season still take a bite out of every day's sales",
        means: "Stacked payments are how a good month turns into a bad one.",
        why: "Pays off the positions you have and rolls them into one payment sized to your sales.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a retail business",
    products: [
      {
        slug: "business-line-of-credit",
        fit: "The default for a repeating buying cycle. Draw what each order needs, repay as the stock sells, and keep the facility for next season.",
      },
      {
        slug: "merchant-cash-advance",
        fit: "For card-heavy stores that need money quickly and cannot wait on a bank. Repayment follows sales, but it costs more than a line of credit, so use it for short, high-turn purchases rather than planned buying.",
      },
      {
        slug: "collateral-asset-loans",
        fit: "For the assets behind the shop — refrigeration, fixtures, POS hardware or a delivery van. A fixed term spreads the cost over the years the equipment keeps working.",
      },
    ],
    blogIds: [
      "bridging-a-slow-season",
      "equipment-financing-break-even",
      "what-your-bank-statements-say",
      "how-to-read-a-factor-rate",
      "24-48-hour-funding-checklist",
    ],
    faqHeading: "Retail funding questions",
    faqs: [
      {
        q: "What can a retail business use funding for?",
        a: "Stock, seasonal payroll, a supplier's early-pay discount, store fit-outs and equipment such as refrigeration, shelving, POS or a delivery vehicle. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "How much can a retail store borrow?",
        a: "$5,000 to $5,000,000 depending on the product. A line of credit runs $10,000 – $500,000, an advance $5,000 – $5,000,000, and a collateral loan $10,000 – $1,000,000. The final number depends on your sales, your time in business and your bank activity.",
      },
      {
        q: "Is a line of credit or a cash advance better for inventory?",
        a: "If you buy on a repeating cycle, a line of credit is usually cheaper and reusable. An advance is faster to qualify for but costs more, so it fits a one-off, short-turn purchase rather than a planned seasonal buy.",
      },
      {
        q: "Can I get funding if most of my sales are on cards?",
        a: "Yes. Card-heavy stores are a common fit for a merchant cash advance, where repayment is a share of sales rather than a fixed monthly payment.",
      },
      {
        q: "How fast can funding land before a holiday order?",
        a: "Many products fund within 24-48 hours of approval. Timing depends on how quickly you send documents, so start before the supplier's deadline rather than on it.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. For a sales-linked product, the total amount you are selling and the percentage of sales that goes toward it are both spelled out on the agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check, a list of any current advances or loans, and a quote or invoice for equipment.",
      },
    ],
  },
  "transportation-logistics": {
    slug: "transportation-logistics",
    name: "Transportation & Logistics",
    h1: "Trucking and logistics financing",
    standfirst: "Get paid for delivered loads now, keep trucks on the road and add capacity when the freight is there.",
    description: "Funding for carriers, fleets and logistics firms: freight factoring up to $3M, truck and trailer loans up to $1M, and cash for fuel and repairs.",
    heroIntent: "Tractor-trailer backed into a warehouse dock at first light.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your operation right now?",
    situations: [
      {
        if: "A broker pays net-30, or a shipper offers a good lane on 60-day terms you cannot afford to carry",
        means: "You have run the miles and paid the fuel, and the wait lands on your balance sheet instead of theirs.",
        why: "You sell an invoice you have already earned, so the wait comes off your books and approval leans on your customer's credit rather than your own.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "A tractor throws a fault code on a Sunday and the shop wants paying before Monday's load",
        means: "A parked truck earns nothing while the repair bill lands in full.",
        why: "Draw what the repair costs, repay it across the next few weeks of loads, and keep the facility for the next surprise.",
        slug: "business-line-of-credit",
      },
      {
        if: "Insurance, plates and permits all come due in the same month",
        means: "Three lump sums land against a weekly cash cycle.",
        why: "One draw covers the renewals and you repay it across the weeks they cover.",
        slug: "business-line-of-credit",
      },
      {
        if: "Fuel and driver pay leave the account every week while settlements arrive twice a month",
        means: "Your biggest costs run on a weekly clock and your revenue runs on a net-30 one.",
        why: "A revolving facility covers the weeks the two clocks do not line up, and you draw only what that week is short.",
        slug: "business-line-of-credit",
      },
      {
        if: "You are adding a reefer trailer for a contract that starts next month",
        means: "The asset is paid for now; the lane pays it back over the year.",
        why: "The trailer secures the loan, and the term matches how long it keeps earning.",
        slug: "collateral-asset-loans",
      },
      {
        if: "A contract is ready but the bank wants three months of paperwork you do not have",
        means: "The opportunity closes before the committee decides.",
        why: "It funds fastest and repays out of settlements rather than a fixed monthly bill, but it costs more than a line of credit, so treat it as a bridge.",
        slug: "merchant-cash-advance",
      },
      {
        if: "You are buying out a small fleet, or leasing a yard with a known number attached",
        means: "The spend is fixed and lands before the new revenue does.",
        why: "One fixed monthly payment, sized to what the added capacity should earn.",
        slug: "business-term-loan",
      },
      {
        if: "Two advances from last winter still come out of every settlement",
        means: "Stacked payments are how a decent week turns into a thin one.",
        why: "Pays off the positions you have and rolls them into one payment sized to your settlements.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a trucking business",
    products: [
      {
        slug: "invoice-factoring-tool",
        fit: "For carriers and brokers billing creditworthy shippers and manufacturers on net terms. You sell the invoice once the load delivers, so the wait stops sitting on your own balance sheet.",
      },
      {
        slug: "collateral-asset-loans",
        fit: "For tractors, trailers, reefers and liftgates. What you buy secures the loan, and a 12 – 60 month term spreads the cost over the miles the unit will run.",
      },
      {
        slug: "business-line-of-credit",
        fit: "For the costs that will not wait for a settlement: repairs, fuel, insurance renewals, permits. Draw what the week needs and repay it as the loads pay.",
      },
    ],
    blogIds: [
      "invoice-factoring-vs-ar-financing",
      "how-to-read-a-factor-rate",
      "24-48-hour-funding-checklist",
      "what-your-bank-statements-say",
      "equipment-financing-break-even",
    ],
    faqHeading: "Trucking and logistics funding questions",
    faqs: [
      {
        q: "What can a carrier or logistics company use funding for?",
        a: "Fuel, repairs, tires, insurance renewals, permits, payroll, deposits on a lane, and the gap between delivering a load and getting paid for it. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "How much can a trucking company borrow?",
        a: "$5,000 to $3,000,000 depending on the product. Factoring runs $10,000 – $3,000,000, an asset loan $10,000 – $1,000,000, and a line of credit $10,000 – $500,000. The final number depends on your revenue, your time in business and your customers' credit.",
      },
      {
        q: "Is factoring a loan?",
        a: "No. Factoring is the sale of an invoice you have already earned. You get cash now and the factor collects from your customer, which is why approval weighs their credit as much as yours.",
      },
      {
        q: "Do you fund broker freight bills or only direct shippers?",
        a: "Both kinds of payer issue freight bills, and funders differ: some buy broker invoices and some work only with direct shippers. Send the load confirmation and your customer's details, and your specialist will tell you which side your file sits on before you commit to the lane.",
      },
      {
        q: "Can a newer carrier qualify?",
        a: "Factoring starts at 3+ months in business. An asset loan or a line of credit generally asks for 6+ months, so a new authority usually starts with factoring and adds the other products once the history is there.",
      },
      {
        q: "How fast can funding land?",
        a: "Many products fund within 24-48 hours of approval. Factoring depends on verifying the invoice with the broker, so a clean invoice and the customer's contact details move it fastest.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. For factoring and other sales-linked products, the total amount and the percentage taken are both spelled out on the agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check, a list of any current advances or loans, and for equipment, a quote or invoice for the unit. Factoring also needs the invoices and your customer's details.",
      },
    ],
  },
  "restaurants-food-service": {
    slug: "restaurants-food-service",
    name: "Restaurants & Food Service",
    h1: "Restaurant business loans",
    standfirst: "Replace the walk-in, refresh the dining room and keep payroll steady when covers dip.",
    description: "Restaurant business loans for kitchen equipment, renovations and slow months. Equipment loans up to $1M, credit lines up to $500K. Built for NYC kitchens.",
    heroIntent: "An empty dining room set for service, no guests or staff in frame.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your kitchen right now?",
    situations: [
      {
        if: "The walk-in fails on a Friday and the replacement is quoted today",
        means: "You cannot trade without it, and it has to pass inspection before the room opens again.",
        why: "What you buy secures the loan, and the term spreads the cost over the years the unit will run.",
        slug: "collateral-asset-loans",
      },
      {
        if: "January's covers drop but payroll still lands every two weeks",
        means: "Revenue is seasonal; labor is not.",
        why: "Draw for the soft weeks, repay as covers come back, and keep the facility for next January.",
        slug: "business-line-of-credit",
      },
      {
        if: "The landlord approves the patio build-out and the work is quoted to the dollar",
        means: "The spend lands over one summer; the extra covers pay it back over years.",
        why: "One fixed monthly payment, sized to the seats the build-out adds.",
        slug: "business-term-loan",
      },
      {
        if: "Card sales are strong but the settlement lands after the weekend's invoices",
        means: "The money is in the pipeline, not in the account, and the produce delivery does not wait for it.",
        why: "It is the fastest product to fund, and repayment comes out of sales rather than a fixed monthly bill.",
        slug: "merchant-cash-advance",
      },
      {
        if: "You are signing a second lease and paying deposits, staff and opening stock",
        means: "Every cost arrives before the first ticket prints.",
        why: "Draw what the opening needs and repay it from the new room's sales rather than the existing one's.",
        slug: "business-line-of-credit",
      },
      {
        if: "Catering and wholesale accounts pay you on 30-day terms",
        means: "You made the sale and bought the food; the payment is a month out.",
        why: "It turns business-to-business invoices into cash now, and approval leans on the customer's credit.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "Two advances from last year still come out of every card batch",
        means: "Stacked payments turn a good Friday into an average week.",
        why: "Pays off the positions you have and rolls them into one payment sized to your sales.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a restaurant",
    products: [
      {
        slug: "collateral-asset-loans",
        fit: "For the equipment a kitchen cannot open without — walk-ins, ranges, hoods, dish machines, POS and delivery vehicles. A 12 – 60 month term spreads the cost over the years the equipment works.",
      },
      {
        slug: "business-line-of-credit",
        fit: "For the rhythm of the trade: food bought weekly, payroll every two weeks, covers that move with the season. Draw in a soft month and repay when the room fills again.",
      },
      {
        slug: "merchant-cash-advance",
        fit: "For a card-heavy room that needs money this week. Repayment follows sales, which helps in a quiet stretch, but it costs more than a line of credit — use it for a short, urgent gap, not a planned purchase.",
      },
    ],
    blogIds: [
      "bridging-a-slow-season",
      "equipment-financing-break-even",
      "merchant-cash-advance-vs-business-term-loan",
      "what-your-bank-statements-say",
      "24-48-hour-funding-checklist",
    ],
    faqHeading: "Restaurant funding questions",
    faqs: [
      {
        q: "What can a restaurant use funding for?",
        a: "Equipment and repairs, food and payroll through a soft month, a renovation or build-out, opening costs for a second site, and deposits. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "How much can a restaurant borrow?",
        a: "$5,000 to $5,000,000 depending on the product. An asset loan runs $10,000 – $1,000,000, a line of credit $10,000 – $500,000, and an advance $5,000 – $5,000,000. The final number depends on your sales, your time in business and your bank activity.",
      },
      {
        q: "Should I use an advance to buy kitchen equipment?",
        a: "Usually not if you can finance it. An asset loan spreads the cost over the life of the machine; an advance is short and costs more, so it suits a gap in cash rather than a purchase you can quote.",
      },
      {
        q: "Are restaurants hard to get funding for?",
        a: "Lenders read restaurant files closely, because margins are thin and a weak month shows in the statements. An advance starts at 3+ months in business and $10K+ monthly revenue; an asset loan or a line of credit generally asks for 6+ months.",
      },
      {
        q: "My covers swing with the season. Does a thin month count against me?",
        a: "A seasonal file is normal in this trade, and a thin January inside six months of statements is expected rather than disqualifying. What a lender reads is whether the full year covers the payments you take on, so send the statements you have and let your specialist size the facility to the quiet months.",
      },
      {
        q: "How fast can funding land before a repair or a season?",
        a: "Many products fund within 24-48 hours of approval. An equipment loan moves fastest when the vendor quote is ready, so get the quote before the unit fails if you can.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. For a sales-linked product, the total amount and the percentage of sales that goes toward it are both spelled out on the agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check, a list of any current advances or loans, and a quote or invoice for equipment.",
      },
    ],
  },
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    h1: "Real estate business financing",
    standfirst: "Working capital for the business side of real estate: carrying costs, commission gaps and the surprises between closings.",
    description: "Working capital for brokerages, property managers, investors: credit lines up to $500K plus real-estate and collateral secured business loans.",
    heroIntent: "A quiet building lobby with mailboxes, nobody in frame.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your business right now?",
    situations: [
      {
        if: "Closings land next month, but rent, payroll and a contractor's change order land this one",
        means: "Income arrives at the closing table; the operating cost arrives on the first.",
        why: "Draw against the gap and repay it when the commissions fund, then keep the facility for the next dry spell.",
        slug: "business-line-of-credit",
      },
      {
        if: "You own the building your brokerage or management company works from",
        means: "The asset is already yours, and the cash tied up in it is doing nothing.",
        why: "An asset you already own can carry the loan, and the term is set against how long you intend to hold it.",
        slug: "collateral-asset-loans",
      },
      {
        if: "You are opening a second office with a build-out quoted to the dollar",
        means: "The spend lands now; the agents and listings that pay it back take a year to build.",
        why: "One fixed monthly payment, sized to what the new office should produce.",
        slug: "business-term-loan",
      },
      {
        if: "You are buying a book of management contracts or another agency's listings",
        means: "The price is due at closing, and the fees from that book arrive monthly afterwards.",
        why: "An amortising term turns a lump-sum acquisition into a payment the acquired revenue covers.",
        slug: "business-term-loan",
      },
      {
        if: "Your property management arm bills owners on 30-day terms",
        means: "Repairs and vendor bills come due before the owner reimburses you.",
        why: "The approved invoice becomes cash now, so the float is not yours to carry.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "A closing falls out after the inspection and payroll is already committed",
        means: "Your biggest cost is fixed and the revenue that covered it just moved to next quarter.",
        why: "It funds fastest and repays out of deposits rather than a fixed monthly bill, but it costs more than a line of credit, so treat it as a bridge.",
        slug: "merchant-cash-advance",
      },
      {
        if: "Two advances from last year still take a slice of every commission check",
        means: "Stacked payments turn a closing month into an ordinary one.",
        why: "Pays off the positions you have and rolls them into one payment sized to your deposits.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a real estate business",
    products: [
      {
        slug: "collateral-asset-loans",
        fit: "Borrow against what you already own — real estate, equipment or vehicles — when the asset is the strength of the file. The term follows how long you intend to hold it.",
      },
      {
        slug: "business-line-of-credit",
        fit: "For the gap between closings: rent, marketing, agent support and carrying costs while commissions are in flight. Draw and repay as the deals land.",
      },
      {
        slug: "business-term-loan",
        fit: "For one defined move with a known price — a second office, a book of management contracts, a new practice area. Fixed payment, fixed end date.",
      },
    ],
    blogIds: [
      "bridging-a-slow-season",
      "what-your-bank-statements-say",
      "24-48-hour-funding-checklist",
      "how-to-read-a-factor-rate",
      "equipment-financing-break-even",
    ],
    faqHeading: "Real estate funding questions",
    faqs: [
      {
        q: "What can a real estate business use funding for?",
        a: "Carrying costs, commission gaps, marketing, agent support, property management float, a build-out or a book of contracts. What these products do not do is buy a property.",
      },
      {
        q: "How much can a real estate business borrow?",
        a: "The products run from $10,000 to $2,000,000 depending on which one you use: a line of credit up to $500,000, an asset loan to $1,000,000, and a term loan to $2,000,000. The final number depends on deposits, time in business and, for a term loan, credit.",
      },
      {
        q: "Can I use a business line of credit to buy a property?",
        a: "No. A line of credit is for operating costs and short gaps. If the property itself is the collateral, ask about Collateral & Asset Loans, which can be secured by real estate as well as equipment.",
      },
      {
        q: "Is a line of credit or an advance the better fit for a gap between closings?",
        a: "A line of credit, when the gap is timing and the deposits behind it are real: it is reusable and cheaper than an advance. An advance suits the gap you did not see coming, because it funds fastest and you pay for that speed.",
      },
      {
        q: "Do commission-based businesses qualify?",
        a: "Yes, if the deposits show consistent revenue. A line of credit asks for 6+ months in business and $10K+ monthly revenue, which a steady closing schedule usually meets even when individual months vary.",
      },
      {
        q: "How fast can funding land between closings?",
        a: "Many products fund within 24-48 hours of approval. Secured lending takes longer because the asset and its documentation are part of the review, so start before the gap, not during it.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. Amounts, terms and costs are disclosed in your agreement before you sign. No specific rate is published here, because it depends on your file and, for secured loans, on the asset.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check and a list of any current advances or loans. Secured lending also needs the documentation for the asset — for property, the ownership and valuation paperwork.",
      },
    ],
  },
  "healthcare": {
    slug: "healthcare",
    name: "Healthcare",
    h1: "Medical practice loans",
    standfirst: "Keep payroll and supplies funded while claims are processed, and add equipment without draining reserves.",
    description: "Funding for practices, clinics and dental offices: credit lines for reimbursement gaps, equipment loans up to $1M and term loans up to $2M. Apply online.",
    heroIntent: "An empty treatment room with a chair and equipment, no people.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your practice right now?",
    situations: [
      {
        if: "Claims went out weeks ago, the remittance has not landed, and payroll is Friday",
        means: "Care is delivered today; payment follows the payer's timetable.",
        why: "Draw for the payroll run, repay as the remittances clear, and keep the facility for the next slow cycle.",
        slug: "business-line-of-credit",
      },
      {
        if: "A payer recoups a batch of claims and the adjustment lands in one deposit",
        means: "One deposit can pull back revenue you already spent on staff and supplies.",
        why: "Draw the amount of the adjustment and repay it across the weeks that follow, so no other month absorbs it.",
        slug: "business-line-of-credit",
      },
      {
        if: "The imaging unit, the chairs or the hardware behind the front desk are at the end of their useful life",
        means: "A large purchase with a long service life, in a month that also carries a full payroll.",
        why: "The equipment secures the loan, with a term set to how long each item stays in use: longer for a scanner, shorter for front-desk hardware.",
        slug: "collateral-asset-loans",
      },
      {
        if: "A new provider starts Monday and payer enrollment is not finished",
        means: "Salary runs ahead of the billable revenue that provider will produce.",
        why: "A fixed payment bridges the enrollment window and is sized to the caseload the hire should carry.",
        slug: "business-term-loan",
      },
      {
        if: "You are opening a second location or buying out a retiring partner's share",
        means: "One priced move that the operating account should not be asked to carry on its own.",
        why: "One fixed monthly payment over a defined term, sized to the visits the new site or the bought share should add.",
        slug: "business-term-loan",
      },
      {
        if: "You invoice employers, schools or facilities for screening work on 30-day terms",
        means: "The service is delivered and the staff are paid; the invoice pays on their cycle.",
        why: "Turns the business-to-business invoice into cash now, and approval leans on that payer's credit.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "Most of your revenue is patient card payments, and the supply order is due",
        means: "The money exists, it has not posted yet.",
        why: "For a short, urgent gap only: it costs more than a line of credit, so use it when timing is the whole problem.",
        slug: "merchant-cash-advance",
      },
      {
        if: "Two advances taken on at opening still come out of every deposit",
        means: "Stacked payments hold back the month you were counting on.",
        why: "Pays off the positions you have and rolls them into one payment sized to your deposits.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a practice",
    products: [
      {
        slug: "business-line-of-credit",
        fit: "For the gap between care delivered and claims paid. Draw when remittances slow, repay as they clear, and keep the facility for the next cycle rather than applying again.",
      },
      {
        slug: "collateral-asset-loans",
        fit: "For imaging, dental chairs, lasers, surgical equipment and the hardware behind the front desk. The equipment secures the loan and the term matches its service life.",
      },
      {
        slug: "business-term-loan",
        fit: "For one defined move with a known cost — a build-out, a second location, or a provider hired ahead of enrollment. Fixed payment, fixed end date.",
      },
    ],
    blogIds: [
      "what-your-bank-statements-say",
      "equipment-financing-break-even",
      "24-48-hour-funding-checklist",
      "how-to-read-a-factor-rate",
      "invoice-factoring-vs-ar-financing",
    ],
    faqHeading: "Practice funding questions",
    faqs: [
      {
        q: "What can a medical or dental practice use funding for?",
        a: "Payroll and supplies while claims are processing, equipment and front-desk hardware, a build-out or second location, and the cost of a new provider before their paneling completes. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "Can funding cover a build-out or a second location?",
        a: "Yes, as one priced move on a fixed term with a fixed end date. A build-out, a second site or buying a retiring partner's share are all costs you can put a number on before you start, which is what a term loan is for.",
      },
      {
        q: "How much can a practice borrow?",
        a: "The products run from $5,000 to $2,000,000 depending on which one you use: a line of credit up to $500,000, an equipment loan to $1,000,000, and a term loan to $2,000,000. The final number depends on deposits, time in business and, for a term loan, credit.",
      },
      {
        q: "Can a practice borrow against insurance receivables?",
        a: "Some funders buy commercial insurance claims. Government payer claims carry assignment restrictions, so a line of credit or a term loan is usually the simpler route against the same cash-flow problem. Ask your specialist which fits your payer mix.",
      },
      {
        q: "Does a practice need perfect credit?",
        a: "No single score applies to every product. A term loan asks for 550+; a line of credit and an equipment loan weigh revenue, time in business and bank activity more heavily.",
      },
      {
        q: "How fast can funding land between payroll runs?",
        a: "Many products fund within 24-48 hours of approval. Timing depends on how quickly the documents arrive, so a complete statement set and a vendor quote are the two things worth having ready.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. Amounts, terms and costs are disclosed in your agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check, a list of any current advances or loans, and a quote or invoice for equipment. A practice needs nothing from its payers to apply.",
      },
    ],
  },
  "construction": {
    slug: "construction",
    name: "Construction",
    h1: "Construction business loans",
    standfirst: "Mobilize before the first draw, make payroll through retainage and add equipment to bid on bigger jobs.",
    description: "Working capital and equipment financing for contractors: mobilize before the first draw, cover payroll during retainage and buy machinery. Up to $3M.",
    heroIntent: "A framed building under construction with stacked materials, nobody on site.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your business right now?",
    situations: [
      {
        if: "You won the bid and have to buy materials and staff up before the first draw",
        means: "Materials, labor and mobilization are paid before anyone releases a progress payment.",
        why: "Draw the mobilization cost, repay it out of the first two draws, and keep the facility for the next award.",
        slug: "business-line-of-credit",
      },
      {
        if: "The GC approved your pay app and will pay it in 45 days",
        means: "The work is done and accepted, and your supplier wants paying long before the GC does.",
        why: "Turns the approved invoice into cash now, and approval leans on the GC's credit rather than yours.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "Retainage holds a slice of every payment until closeout",
        means: "You are carrying the last ten percent of a finished job while paying for the next one.",
        why: "Draw against what is being held and repay it when retainage releases at closeout.",
        slug: "business-line-of-credit",
      },
      {
        if: "You rent the same machine on every job and the rental invoices are adding up",
        means: "Repeat rental is a cost that never ends, where ownership would be a fixed term that does.",
        why: "The machine secures the loan and the term is set against how many jobs it will work.",
        slug: "collateral-asset-loans",
      },
      {
        if: "The change order is built and signed off on site, but it has not been papered yet",
        means: "You have already paid the extra labor and material, and you cannot bill any of it until the paperwork catches up.",
        why: "A line of credit carries the extra cost until the change order becomes a billable invoice.",
        slug: "business-line-of-credit",
      },
      {
        if: "You want to buy the shop, the yard or the office at a known price",
        means: "A one-time purchase your working capital should not have to absorb.",
        why: "One fixed monthly payment over a defined term, sized to the overhead it replaces.",
        slug: "business-term-loan",
      },
      {
        if: "Two advances from last season still come out of every draw",
        means: "Stacked payments are how a profitable job turns into a thin one.",
        why: "Pays off the positions you have and rolls them into one payment sized to your deposits.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a construction business",
    products: [
      {
        slug: "invoice-factoring-tool",
        fit: "For subs and specialty trades billing creditworthy GCs or commercial owners. Approved work becomes cash instead of a 45-day wait, and retainage is handled on the invoice.",
      },
      {
        slug: "collateral-asset-loans",
        fit: "For excavators, lifts, skid steers, trucks and trailers. Stop renting the machine you use every week and put it on a term that ends.",
      },
      {
        slug: "business-line-of-credit",
        fit: "For mobilization, materials and payroll between draws. Draw what the phase needs, repay it when the payment lands, draw again on the next job.",
      },
    ],
    blogIds: [
      "invoice-factoring-vs-ar-financing",
      "equipment-financing-break-even",
      "what-your-bank-statements-say",
      "24-48-hour-funding-checklist",
      "how-to-read-a-factor-rate",
    ],
    faqHeading: "Construction funding questions",
    faqs: [
      {
        q: "What can a contractor use funding for?",
        a: "Materials, mobilization, payroll between draws, equipment, a change order you have built but not papered, and the wait on an approved pay app. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "Can subcontractors factor invoices from general contractors?",
        a: "Often yes, if the GC is creditworthy and the invoice is for completed, approved work. Ask how retainage and lien waivers are handled before you sign anything, because both change what gets funded.",
      },
      {
        q: "How much can a contractor borrow?",
        a: "$10,000 to $3,000,000 depending on the product. Factoring runs $10,000 – $3,000,000, an equipment loan $10,000 – $1,000,000, and a line of credit $10,000 – $500,000. The final number depends on your deposits, your time in business and your customers' credit.",
      },
      {
        q: "Is a line of credit or a term loan better for a contractor?",
        a: "A line suits the repeating gap between draws. A term loan suits one purchase you can price once, such as a yard, a shop or a machine. Most contractors end up using the line for the job and the term for the asset.",
      },
      {
        q: "How fast can funding land on a job that is already running?",
        a: "Many products fund within 24-48 hours of approval. Factoring adds a verification step with the GC, so a clean, approved invoice and the right contact at the payer move it fastest.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. For factoring and other sales-linked products, the total amount and the percentage taken are both spelled out on the agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check, a list of any current advances or loans, and a quote or invoice for equipment. Factoring also needs the invoices and your customer's details.",
      },
    ],
  },
  "e-commerce": {
    slug: "e-commerce",
    name: "E-Commerce",
    h1: "E-commerce business loans",
    standfirst: "Fund inventory and ad spend ahead of demand, without waiting on marketplace payouts.",
    description: "Funding for online stores: inventory, ad spend and fulfillment. Credit lines up to $500K, sales-based advances up to $5M. Apply with Falcon Equity Group.",
    heroIntent: "Packed parcels and a label printer on a packing bench, nobody in frame.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your store right now?",
    situations: [
      {
        if: "The Q4 purchase order is due in July and the cash comes back in December",
        means: "The biggest order of the year is paid for in the year's tightest month.",
        why: "Draw for the purchase order and repay it down through the season, instead of tying up the whole reserve at once.",
        slug: "business-line-of-credit",
      },
      {
        if: "A best seller is about to stock out and the reorder takes six weeks",
        means: "You know this SKU turns, and the money to reorder it is the only thing in the way.",
        why: "The fastest product to fund, and repayment follows sales, which suits a short, high-turn reorder.",
        slug: "merchant-cash-advance",
      },
      {
        if: "The marketplace settles on its own schedule and your supplier does not",
        means: "Revenue is earned and confirmed, and the payout lands days or weeks later.",
        why: "Bridges the settlement window and is repaid the moment the payout posts.",
        slug: "business-line-of-credit",
      },
      {
        if: "Ad spend is billed weekly while the revenue it drives settles later",
        means: "You pay for demand before you collect on it.",
        why: "Only if you already know what a dollar of ad spend returns, because the advance is repaid whether the campaign works or not.",
        slug: "merchant-cash-advance",
      },
      {
        if: "You are launching a new line, and the tooling, samples and first run are all paid up front",
        means: "The whole launch is paid for before a single unit sells.",
        why: "One fixed monthly payment over a defined term, sized to what the line should sell rather than to one season.",
        slug: "business-term-loan",
      },
      {
        if: "The freight and duty bill lands with the container, weeks before the units sell",
        means: "The landed cost of the stock arrives as one payment, on top of the purchase order you have already paid.",
        why: "A line of credit covers the landing cost and is repaid as the units sell through.",
        slug: "business-line-of-credit",
      },
      {
        if: "You also sell wholesale, and those retailers pay on 30 or 60 day terms",
        means: "The wholesale order ships now and pays a season later.",
        why: "Turns the business-to-business invoice into cash and leaves the consumer side of the business untouched.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "Two advances taken before last Q4 still come out of every payout",
        means: "Stacked payments can turn a record month into a cash-tight one.",
        why: "Pays off the positions you have and rolls them into one payment sized to your deposits.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund an online store",
    products: [
      {
        slug: "business-line-of-credit",
        fit: "For the buying cycle that repeats every season: draw per purchase order, repay as the stock sells, draw again on the next buy.",
      },
      {
        slug: "merchant-cash-advance",
        fit: "For a fast, high-turn reorder or a settlement gap you can measure. Repayment follows sales, but it costs more than a line of credit — it fits short money, not a seasonal buy.",
      },
      {
        slug: "business-term-loan",
        fit: "For one defined project: a new product line, a 3PL migration, a warehouse fit-out. Fixed payment over a term you can plan the launch against.",
      },
    ],
    blogIds: [
      "merchant-cash-advance-vs-business-term-loan",
      "how-to-read-a-factor-rate",
      "what-your-bank-statements-say",
      "24-48-hour-funding-checklist",
      "equipment-financing-break-even",
    ],
    faqHeading: "E-commerce funding questions",
    faqs: [
      {
        q: "What can an online store use funding for?",
        a: "Inventory and purchase orders, freight and duty on landed stock, ad spend, fulfilment and warehousing, a new product line, and the wait between a sale and a payout. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "Do I need a physical location?",
        a: "No. Underwriting focuses on deposits, sales history and time in business. A home office and a 3PL address are normal.",
      },
      {
        q: "Can I fund a purchase order before the stock ships?",
        a: "A line of credit is how a purchase order usually gets paid, because the draw happens before the stock exists. Factoring works off an invoice for goods already delivered, so it does not fit a PO you have just placed.",
      },
      {
        q: "Is a sales-based advance a good idea for ad spend?",
        a: "Only if you already know your return on ad spend well enough to say what a dollar of it returns. The advance is repaid whether the campaign works or not, so it fits a measured reorder far better than a test.",
      },
      {
        q: "How much can an online store borrow?",
        a: "$5,000 to $5,000,000 depending on the product. A line of credit runs $10,000 – $500,000, a term loan $10,000 – $2,000,000, and an advance $5,000 – $5,000,000. The final number depends on your revenue, your time in business and your bank activity.",
      },
      {
        q: "How fast can funding land before a purchase order closes?",
        a: "Many products fund within 24-48 hours of approval. The supplier's deadline is the thing to work backwards from, so start the file before the order window opens.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. For a sales-linked product, the total amount and the percentage of sales that goes toward it are both spelled out on the agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check and a list of any current advances or loans. Keep marketplace and processor payouts flowing into the business account, because that is what the file is read from.",
      },
    ],
  },
  "auto-services": {
    slug: "auto-services",
    name: "Auto Services",
    h1: "Auto repair shop financing",
    standfirst: "Add bays, upgrade diagnostics and keep parts stocked without tying up the cash that runs the shop.",
    description: "Financing for repair shops, body shops and detailers: lifts, alignment, diagnostic and ADAS tools up to $1M, plus working capital for parts and payroll.",
    heroIntent: "An empty repair bay with a lift and tool chest, no vehicles or people.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your shop right now?",
    situations: [
      {
        if: "You turn away work because you do not have a fourth lift",
        means: "Every empty bay is billable hours you cannot sell, and the lift has to be paid for before the first car goes on it.",
        why: "The lift secures the loan and the term spreads its cost across the years of work the extra bay brings in.",
        slug: "collateral-asset-loans",
      },
      {
        if: "Your scan tool cannot read the newest models, so the work goes down the street",
        means: "Diagnostic platforms and calibration rigs cost real money and they date quickly.",
        why: "Match a shorter term to equipment that will be replaced rather than paying for it after it is obsolete.",
        slug: "collateral-asset-loans",
      },
      {
        if: "Parts are paid for before the customer pays, and the techs are paid every Friday",
        means: "One slow week of collections shows up in the operating account, and a single big job can put a month of parts on the same statement.",
        why: "Draw for the parts order or the big job, repay it when the tickets settle, and keep the facility for the next tight week.",
        slug: "business-line-of-credit",
      },
      {
        if: "A fleet account pays you on 30-day terms",
        means: "The work is done and invoiced, and the fleet's payment cycle is not yours.",
        why: "Turns the fleet invoice into cash now, and approval leans on the account's credit rather than yours.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "You want to add a bay, and the permits, concrete and equipment are a fixed number",
        means: "A project priced once and paid for before the extra hours start.",
        why: "One fixed monthly payment over a defined term, sized to the tickets the new bay produces.",
        slug: "business-term-loan",
      },
      {
        if: "Two advances taken on when you opened still come out of every deposit",
        means: "Stacked payments hold back the month the shop finally has a full book.",
        why: "Pays off the positions you have and rolls them into one payment sized to your deposits.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a shop",
    products: [
      {
        slug: "collateral-asset-loans",
        fit: "For lifts, alignment machines, paint booths, scan tools and tow trucks. The equipment secures the loan, so a shop with a modest deposit history can still add the tool that wins the work.",
      },
      {
        slug: "business-line-of-credit",
        fit: "For parts, payroll and the weeks when the tickets have not settled. Draw what the week needs and repay it as the work pays.",
      },
      {
        slug: "invoice-factoring-tool",
        fit: "For shops with commercial accounts — fleets, dealers, insurers — that pay on terms. The approved invoice becomes cash instead of a 30-day wait.",
      },
    ],
    blogIds: [
      "equipment-financing-break-even",
      "invoice-factoring-vs-ar-financing",
      "what-your-bank-statements-say",
      "24-48-hour-funding-checklist",
      "how-to-read-a-factor-rate",
    ],
    faqHeading: "Auto shop funding questions",
    faqs: [
      {
        q: "What can a repair shop use funding for?",
        a: "Lifts, diagnostic and calibration equipment, paint booths, parts inventory, payroll, a bay build-out and tow vehicles. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "Can I finance used shop equipment?",
        a: "Bring a quote or invoice for the specific unit and your specialist will confirm whether it qualifies, including what is needed if the machine still carries a lien. Used equipment is normal in this trade, so the quote matters more than the age.",
      },
      {
        q: "Do body shops and mobile mechanics qualify?",
        a: "Yes. Body, collision, tire, detailing and mobile mechanics are all auto services businesses, and the same three products apply.",
      },
      {
        q: "How fast can funding land on a repair that cannot wait?",
        a: "Many products fund within 24-48 hours of approval. Timing depends on how quickly the documents arrive and, for equipment, on having the vendor's quote.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. Amounts, terms and costs are disclosed in your agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check, a list of any current advances or loans, and a quote or invoice for equipment. Factoring also needs the invoices and the account's details.",
      },
    ],
  },
  "manufacturing": {
    slug: "manufacturing",
    name: "Manufacturing",
    h1: "Manufacturing business loans",
    standfirst: "Buy materials for the big order, add machine capacity and get paid sooner on net-terms invoices.",
    description: "Fund raw materials, large production runs and new machinery. Equipment loans up to $1M, factoring up to $3M for net-terms customers, lines to $500K.",
    heroIntent: "A machine shop floor with a CNC mill and stacked bar stock, nobody in frame.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your shop right now?",
    situations: [
      {
        if: "A customer pays 60 days after delivery, but the mill and the anodizer want paying on order",
        means: "Raw material and outside processing are paid weeks before the finished parts are invoiced.",
        why: "The invoices you have already earned become the cash for the next run, so a bigger order does not need a bigger balance sheet.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "Your material price is good this month and buying ahead would hold the margin",
        means: "The saving is real only if the cash is on hand while the price holds.",
        why: "Draw for the buy, repay as the material turns into shipped product, and keep the facility open for the next window.",
        slug: "business-line-of-credit",
      },
      {
        if: "You turn away work because the bottleneck is a machine, a forklift or the racking",
        means: "Throughput stalls before the order book does, and the fix is a capital purchase rather than another hire.",
        why: "The machine or the material handling secures the loan, and the term is set against the years it will run.",
        slug: "collateral-asset-loans",
      },
      {
        if: "You are fitting out a line or moving to a bigger unit on a budget you already know",
        means: "Rigging, power, air and commissioning all land before the first saleable part.",
        why: "One fixed payment over a defined term, sized to the capacity the line adds.",
        slug: "business-term-loan",
      },
      {
        if: "A new contract needs a second shift, and payroll runs weekly before the contract pays",
        means: "Labor scales in week one; the revenue against it scales over the quarter.",
        why: "Draw for the ramp and repay it as the contract invoices clear, rather than carrying it on the operating account.",
        slug: "business-line-of-credit",
      },
      {
        if: "A customer's program needs tooling, dies or fixtures built before you ship the first part",
        means: "The tooling is paid for up front and earned back over the life of the program.",
        why: "A fixed term spreads that cost across the months the program pays it back, instead of one quarter absorbing it.",
        slug: "business-term-loan",
      },
      {
        if: "Two advances from last year still come out of every deposit",
        means: "Stacked payments are how a full order book turns into a thin quarter.",
        why: "Pays off the positions you have and rolls them into one payment sized to your deposits.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a manufacturing business",
    products: [
      {
        slug: "invoice-factoring-tool",
        fit: "For shops and producers billing creditworthy distributors and larger buyers on net terms. The invoice you have earned funds the materials for the next run.",
      },
      {
        slug: "collateral-asset-loans",
        fit: "For production machinery and material handling — CNC, presses, packaging lines, forklifts, racking. A 12 – 60 month term against the years the asset will run.",
      },
      {
        slug: "business-term-loan",
        fit: "For one defined expansion: a fit-out, a second line, a facility move. Fixed payment, fixed end date, sized to the added capacity.",
      },
    ],
    blogIds: [
      "invoice-factoring-vs-ar-financing",
      "equipment-financing-break-even",
      "how-to-read-a-factor-rate",
      "what-your-bank-statements-say",
      "24-48-hour-funding-checklist",
    ],
    faqHeading: "Manufacturing funding questions",
    faqs: [
      {
        q: "What can a manufacturer use funding for?",
        a: "Raw materials and components, machine capacity, material handling, a fit-out, tooling, and the time between delivery and payment. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "Can I get funding for a single big purchase order?",
        a: "Factoring works on invoices you have already issued, so it funds the next order from the last one. For a first or one-off order, a term loan or a line of credit is usually the better fit, so ask your specialist which one applies to your file.",
      },
      {
        q: "Does equipment financing cover installation?",
        a: "It depends how the vendor quote is written. Send the quote with installation and commissioning itemised and your specialist can tell you what is covered.",
      },
      {
        q: "Can I finance a used machine?",
        a: "Ask before you commit to one. What is already financed against the machine and how the seller quotes it both change the answer, so send the quote and the machine's details to your specialist first.",
      },
      {
        q: "What do factors look at?",
        a: "Mainly your customers' credit and the quality of the invoices, plus your time in business. Factoring starts at 3+ months in business, which is why a shop with steady distributor invoices can qualify earlier than it could for a bank line.",
      },
      {
        q: "How fast can funding land on a materials deadline?",
        a: "Many products fund within 24-48 hours of approval. Factoring adds invoice verification with your customer, so the customer contact matters as much as the paperwork.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. For factoring, the total amount and the percentage taken are spelled out on the agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check, a list of any current advances or loans, and a quote or invoice for equipment. Factoring also needs the invoices and your customers' details.",
      },
    ],
  },
  "professional-services": {
    slug: "professional-services",
    name: "Professional Services",
    h1: "Financing for professional services firms",
    standfirst: "Make payroll while clients take their time to pay, and invest in people before the next engagement starts.",
    description: "Working capital for agencies, consultancies, law and accounting firms: credit lines for slow-paying clients, factoring up to $3M and growth loans.",
    heroIntent: "An empty conference room with a table and whiteboard, nobody in frame.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your firm right now?",
    situations: [
      {
        if: "Payroll runs twice a month and clients pay when their process allows",
        means: "Your biggest cost is on a fixed clock, your income is not, and the gap widens in the weeks between one engagement and the next.",
        why: "Draw across the gap and repay it when the invoices clear, rather than holding a cushion that sits unused in a good month.",
        slug: "business-line-of-credit",
      },
      {
        if: "You pay media, experts or contractors before the client reimburses you",
        means: "Pass-through cost sits on your balance sheet for 30 to 60 days.",
        why: "The approved invoice becomes cash now, and the decision leans on the client's credit rather than yours.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "You are hiring ahead of a contract that is signed but not yet invoiced",
        means: "Salaries start on the first; the engagement starts billing in month two or three.",
        why: "A fixed payment sized to the contract carries the ramp and then stops being a cost.",
        slug: "business-term-loan",
      },
      {
        if: "You are buying a smaller firm or a book of clients",
        means: "The purchase price is due at closing; the fees from those clients arrive monthly afterwards.",
        why: "An amortising term turns a lump sum into a payment the acquired revenue covers.",
        slug: "business-term-loan",
      },
      {
        if: "A second office or a new practice area needs fit-out, desks and hardware",
        means: "The rooms and equipment are paid for before the first invoice goes out.",
        why: "The fit-out and hardware can be financed as assets instead of drained from working capital.",
        slug: "collateral-asset-loans",
      },
      {
        if: "Two advances taken on in a slow quarter still come out of every deposit",
        means: "Stacked payments turn a good month into an average one.",
        why: "Pays off the positions you have and rolls them into one payment sized to your deposits.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a firm",
    products: [
      {
        slug: "business-line-of-credit",
        fit: "For payroll and overhead between collections. Draw when the invoices are out, repay when they clear, and keep the facility for the next gap.",
      },
      {
        slug: "invoice-factoring-tool",
        fit: "For firms billing creditworthy business clients, and especially where you front pass-through cost. The approved invoice becomes cash, not a 45-day receivable.",
      },
      {
        slug: "business-term-loan",
        fit: "For one defined move with a known price — an acquisition, a new practice area, a second office, or a team hired ahead of a signed contract.",
      },
    ],
    blogIds: [
      "what-your-bank-statements-say",
      "invoice-factoring-vs-ar-financing",
      "bridging-a-slow-season",
      "24-48-hour-funding-checklist",
      "how-to-read-a-factor-rate",
    ],
    faqHeading: "Professional services funding questions",
    faqs: [
      {
        q: "Can a service business with no inventory or equipment get funding?",
        a: "Yes. Underwriting relies on revenue, deposits, receivables and time in business rather than on hard assets. A firm with clean bank statements and recurring client payments is a normal file.",
      },
      {
        q: "How much can a firm borrow?",
        a: "The products run from $10,000 to $3,000,000 depending on which one you use: a line of credit up to $500,000, a term loan to $2,000,000, and factoring to $3,000,000. The final number depends on deposits, time in business and the credit of the clients you invoice.",
      },
      {
        q: "Can a law firm use factoring?",
        a: "Business-to-business invoices are the usual fit. Contingency fees and consumer billing work differently, so ask your specialist before you assume a case will fund.",
      },
      {
        q: "Line of credit or factoring?",
        a: "A line is simpler if the gaps are short and you want one facility for everything. Factoring scales further when you have large invoices to creditworthy clients, especially where you are carrying pass-through cost.",
      },
      {
        q: "Can I get funding on work I have not invoiced yet?",
        a: "Factoring works from an issued invoice, so delivered work that has not been billed does not fund that way. A line of credit covers the weeks between finishing the work and billing it, and you repay it when the invoice clears.",
      },
      {
        q: "How fast can funding land before a pay run?",
        a: "Many products fund within 24-48 hours of approval. Factoring adds a verification step with your client, so a clean invoice and the right accounts-payable contact are what make the difference.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. For factoring, the total amount and the percentage taken are spelled out on the agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check and a list of any current advances or loans. Factoring also needs the invoices and your client's details; an accounts-receivable aging report helps most.",
      },
    ],
  },
  "education": {
    slug: "education",
    name: "Education",
    h1: "Education business loans",
    standfirst: "Cover the months between tuition cycles, fit out classrooms and grow enrollment.",
    description: "Funding for tutoring centers, private schools, daycares and training providers: summer-gap working capital, classroom build-outs and buses. Apply online.",
    heroIntent: "An empty classroom with small chairs and a bookshelf, nobody in frame.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your school right now?",
    situations: [
      {
        if: "Tuition lands at the start of term, but rent and payroll run all summer",
        means: "The staff who make the fall term possible are a fixed cost in the months that pay least.",
        why: "Draw across the gap and repay it out of fall enrollment, instead of holding a reserve that sits idle the rest of the year.",
        slug: "business-line-of-credit",
      },
      {
        if: "Licensing requires the restroom, kitchen or playground fixed before you can take more children",
        means: "The work has to be finished and inspected before one new place can be filled.",
        why: "One fixed payment sized to the places the upgrade adds, worked back from the date the license has to be signed off.",
        slug: "business-term-loan",
      },
      {
        if: "You are adding an infant room or opening a second site",
        means: "Build-out, deposits, equipment and new staff all arrive before the first new family does.",
        why: "A known budget on a fixed term, with an end date you can plan the enrollment ramp against.",
        slug: "business-term-loan",
      },
      {
        if: "You need a van, classroom technology or new playground equipment",
        means: "A one-time purchase that a single term's surplus cannot absorb.",
        why: "The vehicle or equipment secures the loan, and the term matches how long it stays in service.",
        slug: "collateral-asset-loans",
      },
      {
        if: "A company books a training program and pays on 30-day terms",
        means: "You deliver the program now, and the invoice pays after the client's own close.",
        why: "The approved invoice becomes cash, and the decision leans on the client's credit rather than yours.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "You bill the state for subsidized places and get paid after the month is served",
        means: "The children are in the room and the staff are paid while the reimbursement is still in the pipeline.",
        why: "Draw against that gap and repay it when the state pays, so a subsidy-heavy roll does not empty the operating account.",
        slug: "business-line-of-credit",
      },
      {
        if: "Two advances taken on during a build-out still come out of every tuition deposit",
        means: "Stacked payments turn a full enrollment into a tight cash month.",
        why: "Pays off the positions you have and rolls them into one payment sized to your deposits.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a school or center",
    products: [
      {
        slug: "business-line-of-credit",
        fit: "For the summer and holiday gaps: tuition arrives at the start of term, rent and staff are paid every month. Draw in the lean months and repay after enrollment.",
      },
      {
        slug: "business-term-loan",
        fit: "For one defined project with a known cost — a licensing upgrade, an infant room, a second site. Fixed payment over a term you can plan the intake against.",
      },
      {
        slug: "collateral-asset-loans",
        fit: "For vans and buses, classroom technology and playground equipment. The asset secures the loan and the term follows its service life.",
      },
    ],
    blogIds: [
      "bridging-a-slow-season",
      "equipment-financing-break-even",
      "what-your-bank-statements-say",
      "24-48-hour-funding-checklist",
      "how-to-read-a-factor-rate",
    ],
    faqHeading: "Education funding questions",
    faqs: [
      {
        q: "What can a school or center use funding for?",
        a: "Summer and holiday gaps, licensing and classroom upgrades, a second site, staff ahead of enrollment, vehicles, technology and playground equipment. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "How much can a school or center borrow?",
        a: "The products run from $10,000 to $2,000,000 depending on which one you use: a line of credit up to $500,000, an equipment loan to $1,000,000, and a term loan to $2,000,000. The final number depends on tuition and subsidy deposits, time in business and, for a term loan, credit.",
      },
      {
        q: "Can a daycare get a business loan?",
        a: "A for-profit center can qualify on enrollment revenue, deposits and time in business. If your center is a nonprofit, tell your specialist how it is structured before you apply, because that decides which entity borrows.",
      },
      {
        q: "Can a new center qualify?",
        a: "Most products ask for 6+ months in business, and the merchant cash advance starts at 3+ months. A center that has not opened yet is usually better served by the owner's own capital or a partner than by this kind of debt.",
      },
      {
        q: "Does a center have to own its building to qualify?",
        a: "No. The requirements published for these products are time in business and monthly revenue, and the documents are bank statements, photo ID and a voided check — nothing there asks for a deed. A leased space is the normal case for a center, and it is not a barrier to applying.",
      },
      {
        q: "Do thin summer bank statements count against my application?",
        a: "A summer dip is normal for a center, but how it reads depends on the file. Ask your specialist before you send statements, and say plainly which months are the term break.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. Amounts, terms and costs are disclosed in your agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check, a list of any current advances or loans, and a quote or invoice for equipment or vehicles.",
      },
    ],
  },
  "travel-hospitality": {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    h1: "Hospitality business loans",
    standfirst: "Fund the off-season, refresh rooms before peak and pay supplier deposits before guests pay you.",
    description: "Working capital for hotels, inns, tour operators and travel agencies: off-season payroll, FF&E refreshes and supplier deposits. Credit lines to $500K.",
    heroIntent: "A made-up hotel room with curtains open, nobody in frame.",
    situationsLabel: "What's your case?",
    situationsHeading: "Which funding fits your property right now?",
    situations: [
      {
        if: "Four months of revenue have to cover twelve months of fixed cost",
        means: "The off-season overhead comes due whether or not there are guests.",
        why: "Draw through the quiet months and repay from the peak, instead of holding a reserve that earns nothing all year.",
        slug: "business-line-of-credit",
      },
      {
        if: "You pay hotel blocks, transport and guides before travellers pay you in full",
        means: "Deposits leave the account months before the trip runs.",
        why: "One draw covers the deposits and is repaid as the final payments land, season after season.",
        slug: "business-line-of-credit",
      },
      {
        if: "Beds, linens, kitchen equipment or the HVAC need replacing before or during peak",
        means: "Either a planned refresh or a failure that takes rooms offline in your busiest weeks.",
        why: "The asset secures the loan and the term follows its service life, so a boiler is spread over years and a short-lived unit over fewer.",
        slug: "collateral-asset-loans",
      },
      {
        if: "Most bookings are card payments and a supplier wants paying this week",
        means: "The money is booked and paid; the settlement has not landed.",
        why: "For a short, urgent gap only: it costs more than a line of credit, and the off-season is when that costs the most.",
        slug: "merchant-cash-advance",
      },
      {
        if: "You are renovating a floor or adding rooms, with a build cost you already have",
        means: "The spend lands in one closed season; the extra room nights pay it back over years.",
        why: "One fixed monthly payment over a defined term, sized to the occupancy the rooms should add.",
        slug: "business-term-loan",
      },
      {
        if: "Corporate accounts and travel agents book on invoice terms",
        means: "The stay happened last month; the payment is on their cycle.",
        why: "Turns the business invoice into cash now, with approval leaning on the account's credit rather than yours.",
        slug: "invoice-factoring-tool",
      },
      {
        if: "Two advances taken on to get through a slow winter still come out of every settlement",
        means: "Stacked payments take a slice of the season you were counting on.",
        why: "Pays off the positions you have and rolls them into one payment sized to your deposits.",
        slug: "consolidation-of-positions",
      },
    ],
    productsLabel: "Products",
    productsHeading: "Three ways to fund a property",
    products: [
      {
        slug: "business-line-of-credit",
        fit: "For a business whose year is not twelve equal months: draw through the off-season and the deposit months, repay from the peak, repeat.",
      },
      {
        slug: "collateral-asset-loans",
        fit: "For FF&E, kitchen equipment, shuttles and HVAC. The asset secures the loan, and the term is set against the seasons it will serve.",
      },
      {
        slug: "merchant-cash-advance",
        fit: "For a card-heavy property facing a short, urgent gap. Repayment follows sales, but it costs more than a line of credit — the off-season is the worst time to carry it, so use it sparingly and briefly.",
      },
    ],
    blogIds: [
      "bridging-a-slow-season",
      "equipment-financing-break-even",
      "merchant-cash-advance-vs-business-term-loan",
      "what-your-bank-statements-say",
      "24-48-hour-funding-checklist",
    ],
    faqHeading: "Hospitality funding questions",
    faqs: [
      {
        q: "What can a hotel or operator use funding for?",
        a: "Off-season overhead, supplier and block deposits, room refreshes and FF&E, equipment repairs, a renovation or added rooms. Falcon does not restrict the use of proceeds to one category.",
      },
      {
        q: "Can a seasonal business qualify?",
        a: "Yes. Underwriters read deposits over time, so expect them to see the pattern: a strong peak and a quiet winter is normal in this sector. Explain the season up front rather than letting a quiet month read as a decline.",
      },
      {
        q: "What is FF&E financing?",
        a: "Furniture, fixtures and equipment: beds, linens, seating, kitchen equipment and in-room technology. With a vendor quote these sit inside Collateral & Asset Loans, on a term matched to how long the items stay in service.",
      },
      {
        q: "Can I finance a renovation or added rooms?",
        a: "Yes, when the build cost is a number you already have. That is a term loan: one fixed payment over a defined term, sized to the room nights the work should add, rather than a draw you repay as sales come in.",
      },
      {
        q: "Is an advance a good idea in the off-season?",
        a: "Be careful. It is fast, but it costs more than a line of credit, and the off-season is when margins are thinnest and repayment takes the largest share of a small month's sales.",
      },
      {
        q: "How much can a property borrow?",
        a: "The products run from $5,000 to $5,000,000 depending on which one you use: a line of credit up to $500,000, an asset loan to $1,000,000, and an advance to $5,000,000. The final number depends on deposits, time in business and, for a term loan, credit.",
      },
      {
        q: "What does it cost?",
        a: "Falcon charges a 0% agreement fee. For a sales-linked product, the total amount and the percentage of sales that goes toward it are both spelled out on the agreement before you sign. No specific rate is published here, because it depends on your file.",
      },
      {
        q: "What do I need to apply?",
        a: "Six months of business bank statements, a photo ID, a voided check, a list of any current advances or loans, and a quote or invoice for equipment or FF&E.",
      },
    ],
  },
};
