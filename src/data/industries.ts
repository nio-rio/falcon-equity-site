export const INDUSTRY_SLUGS = [
  'retail',
  'transportation-logistics',
  'restaurants-food-service',
  'real-estate',
  'healthcare',
  'construction',
  'e-commerce',
  'auto-services',
  'manufacturing',
  'professional-services',
  'education',
  'travel-hospitality',
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export type IndustryNeed = {
  title: string;
  body: string;
};

export type IndustryProduct = {
  slug: string;
  copy: string;
};

export type IndustryUseCase = {
  title: string;
  body: string;
};

export type Industry = {
  slug: IndustrySlug;
  name: string;
  icon: string;
  /** Original Falcon copy. Do not reuse the current site's or competitors' text. */
  blurb: string;
  uses: string[];
  seoTitle: string;
  seoDescription: string;
  h1: string;
  subtitle: string;
  /** Optional note under the subtitle (eligibility, product scope). */
  note?: string;
  needs: IndustryNeed[];
  products: IndustryProduct[];
  useCases: IndustryUseCase[];
  faqs: { q: string; a: string }[];
  /**
   * Live page for this industry, once it is built. Omitted industries keep
   * pointing at the home Industries section. Set this in the same commit that
   * lifts the route out of the industry redirects.
   */
  href?: string;
  /** Extra live posts to mix into related (older guides the spec still links). */
  relatedPostIds?: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: 'retail',
    name: 'Retail',
    icon: 'store',
    href: '/industries/retail',
    blurb: 'Stock the shelves before the rush, not after it. Capital that keeps pace with your selling seasons.',
    uses: ['Pre-season inventory buys', 'Storefront refreshes', 'Opening a second location'],
    seoTitle: 'Retail Business Loans & Inventory Funding | Falcon',
    seoDescription:
      'Retail business loans for inventory, holiday stock, payroll and store upgrades. Lines of credit up to $500K and advances up to $5M. Apply in minutes.',
    h1: 'Retail business loans',
    subtitle: 'Stock up before the rush, cover payroll through the lull and upgrade the store without draining the register.',
    needs: [
      {
        title: 'Buying inventory months before it sells',
        body: 'Holiday and back-to-school orders are usually placed and paid for long before the selling season, so cash leaves the account well ahead of revenue.',
      },
      {
        title: 'Vendor terms and bulk discounts',
        body: 'Paying a wholesaler early or ordering in volume can lower unit cost, but only if cash is on hand when the offer is.',
      },
      {
        title: 'Seasonal staffing',
        body: 'Extra hands for peak weeks have to be hired and paid before peak sales land.',
      },
      {
        title: 'Store fixtures, POS and security systems',
        body: "One-time purchases that are hard to fund out of a single month's margin.",
      },
    ],
    products: [
      {
        slug: 'business-line-of-credit',
        copy: 'Draw for each inventory order, repay as it sells, draw again next season. Requires 6+ months in business, $10K+ monthly revenue and an active bank account.',
      },
      {
        slug: 'merchant-cash-advance',
        copy: "Built for card-heavy stores that need cash fast and can't wait for a bank; repayment flexes with sales. It is one of the more expensive options, so it fits short, high-return needs. Requires 3+ months in business and $10K+ monthly revenue.",
      },
      {
        slug: 'collateral-asset-loans',
        copy: 'For fixtures, POS hardware, refrigeration or a delivery van. Requires an equipment quote or invoice and 6+ months in business.',
      },
    ],
    useCases: [
      {
        title: 'Stocking for the holiday quarter',
        body: 'A boutique draws on its line of credit in late summer to place holiday orders, then pays the balance down from November and December sales.',
      },
      {
        title: "Taking a vendor's early-pay discount",
        body: 'A hardware store uses a short draw to pay a supplier invoice early and keep the discount, which can be worth more than the cost of the draw for that period.',
      },
      {
        title: 'Refitting the sales floor',
        body: "A specialty grocer finances new refrigerated cases and a POS upgrade over a fixed term so the purchase doesn't eat its operating cash.",
      },
    ],
    faqs: [
      {
        q: 'What do I need to apply for a retail business loan?',
        a: 'Usually your last several months of business bank statements, basic business and owner details, and for equipment, a quote or invoice. See the [funding checklist](/blog/24-48-hour-funding-checklist).',
      },
      {
        q: 'Is a line of credit or a cash advance better for inventory?',
        a: 'If you buy inventory on a repeating cycle, a line of credit is usually cheaper and reusable. A cash advance is faster to qualify for but costs more, so it suits one-off, short-turn purchases.',
      },
      {
        q: 'Can I get funded if most of my sales are card transactions?',
        a: 'Yes. Card-heavy stores are a common fit for a [merchant cash advance](/services/merchant-cash-advance), where repayment is tied to sales.',
      },
      {
        q: 'How much can a retail store borrow?',
        a: "Falcon's products range from $5,000 to $5,000,000 depending on the product, your revenue and your history. Lines of credit go up to $500,000.",
      },
      {
        q: 'Will applying hurt my credit?',
        a: 'Ask your specialist how your file will be reviewed before you submit; requirements differ by product.',
      },
    ],
    relatedPostIds: ['how-to-read-a-factor-rate', '24-48-hour-funding-checklist'],
  },
  {
    slug: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: 'truck',
    blurb: 'Keep trucks rolling and routes covered, even when fuel spikes or a broker pays late.',
    uses: ['Adding trucks or trailers', 'Fuel and maintenance gaps', 'Covering freight receivables'],
    seoTitle: 'Trucking Business Loans & Freight Factoring | Falcon',
    seoDescription:
      'Funding for carriers, fleets and logistics firms: freight factoring up to $3M, truck and trailer loans up to $1M, and cash for fuel and repairs.',
    h1: 'Trucking and logistics financing',
    subtitle: 'Get paid for delivered loads now, keep trucks on the road and add capacity when the freight is there.',
    needs: [
      {
        title: 'The gap between delivery and payment',
        body: 'Brokers and shippers often pay on net terms, while fuel, tolls, insurance and drivers are paid every week.',
      },
      {
        title: 'Unplanned repairs and downtime',
        body: 'A truck in the shop earns nothing, and the repair bill arrives at the same time.',
      },
      {
        title: 'Adding trucks or trailers',
        body: 'Taking on a new lane or contract usually means equipment first, revenue later.',
      },
      {
        title: 'Insurance renewals and permits',
        body: "Large lump-sum bills that don't line up with the weekly cash cycle.",
      },
    ],
    products: [
      {
        slug: 'invoice-factoring-tool',
        copy: "Turn delivered-load invoices into cash; approval leans on your customers' credit. Requires B2B invoices, creditworthy customers and 3+ months in business.",
      },
      {
        slug: 'collateral-asset-loans',
        copy: 'For tractors, trailers, reefers and liftgates. Requires an equipment quote or invoice and 6+ months in business.',
      },
      {
        slug: 'business-line-of-credit',
        copy: 'For repairs and renewals between invoices. Requires 6+ months, $10K+ monthly revenue.',
      },
    ],
    useCases: [
      {
        title: 'Covering fuel while brokers pay',
        body: 'A small fleet factors its delivered loads each week so fuel cards and payroll are funded without waiting on net terms.',
      },
      {
        title: 'Adding a reefer for a new contract',
        body: "A carrier finances a refrigerated trailer over a fixed term, so the new lane's revenue pays for the asset.",
      },
      {
        title: 'Getting a truck back on the road',
        body: 'An owner-operator draws on a line of credit for an engine repair and repays it over the next few weeks of loads.',
      },
    ],
    faqs: [
      {
        q: 'Is factoring a loan?',
        a: "No. Factoring is the sale of an invoice you've already earned. You get cash now and the factor collects from your customer.",
      },
      {
        q: 'Can a newer carrier qualify?',
        a: "Factoring through Falcon starts at 3+ months in business, and approval weighs your customers' credit heavily.",
      },
      {
        q: 'Can I finance a used truck?',
        a: 'Ask your specialist. Collateral & Asset Loans need an equipment quote or invoice for the specific unit.',
      },
      {
        q: 'Should I factor or take a loan?',
        a: 'Factor when the problem is timing (money owed, not yet paid). Borrow when the problem is a purchase. See [trucking factoring vs. a business loan](/blog/trucking-factoring-vs-business-loan).',
      },
    ],
    relatedPostIds: ['invoice-factoring-vs-ar-financing'],
  },
  {
    slug: 'restaurants-food-service',
    name: 'Restaurants & Food Service',
    icon: 'utensils',
    blurb: 'From a new walk-in cooler to a patio build-out, funding that respects thin margins and busy nights.',
    uses: ['Kitchen equipment', 'Renovations and build-outs', 'Payroll through slow weeks'],
    seoTitle: 'Restaurant Business Loans & Kitchen Financing | Falcon',
    seoDescription:
      'Restaurant business loans for kitchen equipment, renovations and slow months. Equipment loans up to $1M, credit lines up to $500K. Built for NYC kitchens.',
    h1: 'Restaurant business loans',
    subtitle: 'Replace the walk-in, refresh the dining room and keep payroll steady when covers dip.',
    needs: [
      {
        title: 'Equipment that fails without warning',
        body: "A walk-in, a range or a dish machine can't wait weeks for a bank decision.",
      },
      {
        title: 'Thin margins and daily costs',
        body: 'Food, labor and rent are paid constantly, so one weak week shows up fast.',
      },
      {
        title: 'Renovations and outdoor seating',
        body: 'Planned projects with a defined cost that pay back over years, not weeks.',
      },
      {
        title: 'Opening or preparing a second location',
        body: 'Build-out, deposits and opening inventory before the first ticket prints.',
      },
    ],
    products: [
      {
        slug: 'collateral-asset-loans',
        copy: 'For ranges, hoods, walk-ins, POS and delivery vehicles. Requires an equipment quote or invoice and 6+ months in business.',
      },
      {
        slug: 'business-line-of-credit',
        copy: 'For food costs and payroll in softer weeks. Requires 6+ months, $10K+ monthly revenue.',
      },
      {
        slug: 'merchant-cash-advance',
        copy: 'For card-heavy restaurants that need cash quickly. Repayment follows sales, but it is expensive; use it for short, urgent needs.',
      },
    ],
    useCases: [
      {
        title: 'Emergency walk-in replacement',
        body: 'A café finances a new walk-in cooler over a fixed term rather than emptying its operating account in one week.',
      },
      {
        title: 'Dining room refresh',
        body: 'A neighborhood restaurant funds new seating and lighting with a term structure sized to how long the upgrade will last.',
      },
      {
        title: 'Covering the January lull',
        body: 'A bistro draws on a line of credit for payroll in a slow month and repays as spring traffic returns.',
      },
    ],
    faqs: [
      {
        q: 'How fast can a restaurant get funded?',
        a: 'It depends on the product and how complete your file is. Having bank statements and an equipment quote ready helps the most.',
      },
      {
        q: 'Are restaurant loans hard to get?',
        a: "Lenders see restaurants as higher-risk, so expect them to look closely at bank statements and deposits. Falcon's MCA starts at 3+ months in business and $10K+ monthly revenue.",
      },
      {
        q: 'Should I use an MCA to buy kitchen equipment?',
        a: 'Usually not if you can qualify for equipment financing. An equipment loan spreads the cost over the life of the asset; an MCA is short and costly.',
      },
      {
        q: 'Can I consolidate several advances?',
        a: 'Yes. [Consolidation of Positions](/services/consolidation-of-positions) can reduce daily or weekly payments, in some cases by 30%–50%.',
      },
    ],
    relatedPostIds: ['bridging-a-slow-season'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: 'landmark',
    blurb: 'Move on a property or finish a project without waiting on a slow bank committee.',
    uses: ['Bridge capital between deals', 'Property improvements', 'Carrying costs and operations'],
    seoTitle: 'Real Estate Business Loans & Credit Lines | Falcon',
    seoDescription:
      'Working capital for brokerages, property managers, investors: credit lines up to $500K plus real-estate and collateral secured business loans.',
    h1: 'Real estate business financing',
    subtitle:
      'Working capital for the business side of real estate: carrying costs, commission gaps and the surprises between closings.',
    note: 'Falcon funds brokerages, property managers, investors’ operating companies and real estate service firms, and offers real-estate and collateral secured business loans.',
    needs: [
      {
        title: 'Lumpy commission income',
        body: 'Brokerages pay rent, staff and marketing monthly, but income arrives at closings.',
      },
      {
        title: 'Carrying costs and overruns',
        body: 'Taxes, insurance, utilities and contractor surprises during a rehab or a vacancy.',
      },
      {
        title: 'Property management float',
        body: 'Repairs and vendor bills that come due before owner reimbursements land.',
      },
      {
        title: 'Growth spending',
        body: 'New agents, listings marketing, software and vehicles.',
      },
    ],
    products: [
      {
        slug: 'collateral-asset-loans',
        copy: 'Offering real-estate and collateral secured business loans. Real estate loans typically fund in about two weeks. Requires an equipment quote or invoice (or property documentation) and 6+ months in business.',
      },
      {
        slug: 'business-line-of-credit',
        copy: 'Draw between closings, repay when commissions or proceeds arrive. Requires 6+ months, $10K+ monthly revenue, an active bank account.',
      },
      {
        slug: 'business-term-loan',
        copy: 'For a defined project like opening an office or acquiring a book of management contracts. Requires 6+ months, $15K+ monthly revenue, 550+ credit score.',
      },
    ],
    useCases: [
      {
        title: 'Bridging a slow closing month',
        body: 'A brokerage draws on its credit line to cover agent support and rent while a few deals finish, then repays at closing.',
      },
      {
        title: 'Absorbing a rehab overrun',
        body: "An investor's operating company uses a short draw to pay a contractor when the scope grows mid-project.",
      },
      {
        title: 'Opening a second office',
        body: 'A property manager uses a term loan for build-out and hiring, with a fixed payment it can plan around.',
      },
    ],
    faqs: [
      {
        q: 'Can I use a business line of credit to buy a property?',
        a: 'A line of credit is for operating costs and short gaps, not a property purchase. Falcon also offers real-estate and collateral secured business loans through [Collateral & Asset Loans](/services/collateral-asset-loans). Ask your specialist which fits.',
      },
      {
        q: 'Do commission-based businesses qualify?',
        a: "Yes, if deposits show consistent revenue. Falcon's line of credit asks for $10K+ monthly revenue and 6+ months in business.",
      },
      {
        q: 'What counts as revenue for an investor?',
        a: 'Underwriters generally look at deposits into the business bank account, such as rents, fees and sale proceeds. Keep business and personal accounts separate.',
      },
      {
        q: 'Is a term loan or a line better for a renovation?',
        a: 'A line suits unpredictable overruns; a term loan suits a fixed, known project budget. For work secured by real estate or other assets, ask about Collateral & Asset Loans.',
      },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: 'heart-pulse',
    blurb: 'Practices run on reimbursements that arrive on someone else’s schedule. We help close the gap.',
    uses: ['Diagnostic and treatment equipment', 'New providers and staff', 'Practice expansion'],
    seoTitle: 'Medical Practice Loans & Healthcare Funding | Falcon',
    seoDescription:
      'Funding for practices, clinics and dental offices: credit lines for reimbursement gaps, equipment loans up to $1M and term loans up to $2M. Apply online.',
    h1: 'Medical practice loans',
    subtitle: 'Keep payroll and supplies funded while claims are processed, and add equipment without draining reserves.',
    needs: [
      {
        title: 'Reimbursement lag',
        body: 'Care is delivered today, but insurance payments arrive after claims are processed, reviewed and sometimes reworked.',
      },
      {
        title: 'Credentialing a new provider',
        body: 'A new clinician may start before every payer has enrolled them, so salary runs ahead of billable revenue.',
      },
      {
        title: 'Clinical equipment',
        body: 'Imaging, dental chairs, lasers and EHR hardware are large purchases with long useful lives.',
      },
      {
        title: 'Build-outs and second locations',
        body: 'Fit-out, deposits and staffing before patient volume ramps.',
      },
    ],
    products: [
      {
        slug: 'business-line-of-credit',
        copy: 'Draw when claims are slow, repay when remittances land. Requires 6+ months, $10K+ monthly revenue, an active bank account.',
      },
      {
        slug: 'collateral-asset-loans',
        copy: 'For clinical and diagnostic equipment. Requires an equipment quote or invoice and 6+ months in business.',
      },
      {
        slug: 'business-term-loan',
        copy: 'For a build-out or adding a provider. Requires 6+ months, $15K+ monthly revenue, 550+ credit score.',
      },
    ],
    useCases: [
      {
        title: 'Smoothing a payer slowdown',
        body: "A physical therapy clinic draws on its line of credit when a large payer's remittances slow, and pays it back as claims clear.",
      },
      {
        title: 'Upgrading imaging equipment',
        body: 'A dental office finances a new imaging unit over a fixed term, matching payments to the years it will be in use.',
      },
      {
        title: 'Hiring ahead of credentialing',
        body: "A primary care group uses a term loan to cover a new provider's first months while payer enrollment is completed.",
      },
    ],
    faqs: [
      {
        // TODO(Dwight): confirm whether Falcon factors medical/insurance claims before stating it as a Falcon product.
        q: 'Can a medical practice borrow against insurance receivables?',
        a: 'Some funders factor commercial insurance claims. Government payer claims have assignment restrictions, so a line of credit or term loan is often simpler. Ask your specialist.',
      },
      {
        q: 'Do I need perfect credit?',
        a: "No single score applies to every product. Falcon's term loan asks for 550+; the line of credit focuses on revenue and time in business.",
      },
      {
        q: 'Can I finance used medical equipment?',
        a: 'Bring the quote or invoice for the specific unit and your specialist can tell you whether it fits.',
      },
      {
        q: 'What documents should a practice prepare?',
        a: 'Recent business bank statements, owner ID, and for equipment, the vendor quote. A clean collections history helps.',
      },
    ],
    relatedPostIds: ['what-your-bank-statements-say'],
  },
  {
    slug: 'construction',
    name: 'Construction',
    icon: 'hard-hat',
    blurb: 'Win the bid, then mobilize. Capital for materials, crews and machinery before the first draw lands.',
    uses: ['Materials and mobilization', 'Heavy equipment', 'Payroll between progress payments'],
    seoTitle: 'Construction Business Loans and Contractor Funding | Falcon',
    seoDescription:
      'Working capital and equipment financing for contractors: mobilize before the first draw, cover payroll during retainage and buy machinery. Up to $3M.',
    h1: 'Construction business loans',
    subtitle: 'Mobilize before the first draw, make payroll through retainage and add equipment to bid on bigger jobs.',
    needs: [
      {
        title: 'Costs before payment',
        body: 'Materials, labor and mobilization are paid before the first progress payment is released.',
      },
      {
        title: 'Retainage and slow pay apps',
        body: 'A share of each payment may be held until completion, and general contractors or owners can take weeks to approve pay applications.',
      },
      {
        title: 'Heavy equipment',
        body: 'Excavators, lifts, trucks and trailers that let a crew take on more work.',
      },
      {
        title: 'Weather and seasonality',
        body: 'Delays push revenue out while overhead stays the same.',
      },
    ],
    products: [
      {
        slug: 'invoice-factoring-tool',
        copy: 'For subcontractors billing creditworthy GCs or commercial owners. Requires B2B invoices, creditworthy customers and 3+ months in business.',
      },
      {
        slug: 'collateral-asset-loans',
        copy: 'For machinery and work vehicles. Requires an equipment quote or invoice and 6+ months in business.',
      },
      {
        slug: 'business-line-of-credit',
        copy: 'For payroll and materials between draws. Requires 6+ months, $10K+ monthly revenue.',
      },
    ],
    useCases: [
      {
        title: 'Mobilizing a new contract',
        body: 'An electrical sub draws on its credit line to buy materials and staff up before the first draw, then repays from progress payments.',
      },
      {
        title: 'Turning approved pay apps into cash',
        body: 'A drywall contractor factors invoices owed by a creditworthy GC instead of waiting on the payment cycle.',
      },
      {
        title: 'Buying a skid steer to stop renting',
        body: 'A site-work contractor finances a machine over a fixed term when rental costs on repeat jobs add up.',
      },
    ],
    faqs: [
      {
        q: 'Can subcontractors factor invoices from general contractors?',
        a: 'Often yes, if the GC is creditworthy and the invoice is for completed, approved work. Ask how retainage and lien waivers are handled.',
      },
      {
        q: "What if I'm bidding on public work?",
        a: 'Public jobs often pay slowly. In New York City, eligible contractors on City contracts may also look at the [NYC Contract Financing Loan Fund](https://nyc-business.nyc.gov/nycbusiness/business-services/financial-assistance/contract-financing-loan-fund).',
      },
      {
        q: 'Can I finance used equipment?',
        a: 'Bring a quote or invoice for the specific machine and your specialist will confirm fit.',
      },
      {
        q: 'Is a line of credit better than a term loan for contractors?',
        a: 'A line suits repeating gaps between draws; a term loan suits a one-time investment like a yard or office.',
      },
    ],
    relatedPostIds: ['equipment-financing-break-even'],
  },
  {
    slug: 'e-commerce',
    name: 'E-Commerce',
    icon: 'shopping-cart',
    blurb: 'When a product takes off, inventory has to land fast. Fund the growth curve while it is climbing.',
    uses: ['Bulk inventory orders', 'Paid acquisition campaigns', 'Fulfillment and warehousing'],
    seoTitle: 'E-Commerce Business Loans & Inventory Funding | Falcon',
    seoDescription:
      'Funding for online stores: inventory, ad spend and fulfillment. Credit lines up to $500K, sales-based advances up to $5M. Apply with Falcon Equity Group.',
    h1: 'E-commerce business loans',
    subtitle: 'Fund inventory and ad spend ahead of demand, without waiting on marketplace payouts.',
    needs: [
      {
        title: 'Inventory paid months ahead',
        body: 'Manufacturers and freight are paid up front, while units sell over weeks or months.',
      },
      {
        title: 'Payout timing',
        body: "Marketplace and payment-processor payouts follow the platform's schedule, not yours.",
      },
      {
        title: 'Ad spend that runs ahead of revenue',
        body: 'Paid acquisition is billed now; the sales it drives settle later.',
      },
      {
        title: 'Q4 peaks',
        body: 'Holiday demand requires the biggest orders at the time cash is tightest.',
      },
    ],
    products: [
      {
        slug: 'business-line-of-credit',
        copy: 'Draw for each purchase order and repay as stock sells. Requires 6+ months, $10K+ monthly revenue.',
      },
      {
        slug: 'merchant-cash-advance',
        copy: "Repaid from sales. Fast and flexible but expensive, so best for inventory you know will turn quickly. Requires 3+ months and $10K+ monthly revenue.",
      },
      {
        slug: 'business-term-loan',
        copy: 'For a defined project like a new product line or 3PL migration. Requires 6+ months, $15K+ monthly revenue, 550+ credit score.',
      },
    ],
    useCases: [
      {
        title: 'Placing the Q4 purchase order',
        body: 'A home-goods brand draws on its line of credit for its largest order of the year and pays it down through the holiday season.',
      },
      {
        title: 'Restocking a fast seller',
        body: 'A supplement store uses a short sales-based advance to reorder a SKU that is about to stock out.',
      },
      {
        title: 'Launching a new product line',
        body: 'An apparel brand uses a term loan for tooling, samples and the first production run.',
      },
    ],
    faqs: [
      {
        q: 'Do I need a physical location?',
        a: 'No. Underwriting focuses on deposits, sales history and time in business.',
      },
      {
        q: 'Which platforms count?',
        a: 'Revenue from your own store, marketplaces and wholesale accounts can all show up in your bank deposits; keep them flowing into a business account.',
      },
      {
        q: 'Is a sales-based advance a good idea for ads?',
        a: 'Only if you know your return on ad spend well. The advance is costly and must be repaid whether the campaign works or not.',
      },
      {
        q: 'How much can an online store borrow?',
        a: "It depends on revenue and history; Falcon's products range from $5,000 up to $5,000,000.",
      },
    ],
    relatedPostIds: ['how-to-read-a-factor-rate'],
  },
  {
    slug: 'auto-services',
    name: 'Auto Services',
    icon: 'wrench',
    blurb: 'More bays, better diagnostics and a deeper parts shelf mean more cars out the door every day.',
    uses: ['Lifts and diagnostic tools', 'Parts inventory', 'Adding service bays'],
    seoTitle: 'Auto Repair Shop Financing & Equipment Loans | Falcon',
    seoDescription:
      'Financing for repair shops, body shops and detailers: lifts, alignment, diagnostic and ADAS tools up to $1M, plus working capital for parts and payroll.',
    h1: 'Auto repair shop financing',
    subtitle: 'Add bays, upgrade diagnostics and keep parts stocked without tying up the cash that runs the shop.',
    needs: [
      {
        title: 'Tools that keep up with new vehicles',
        body: 'Diagnostic platforms, calibration rigs and EV-capable equipment are expensive and change often.',
      },
      {
        title: 'Lifts and bays',
        body: "More lifts mean more billable hours, but they're a large up-front cost.",
      },
      {
        title: 'Parts and payroll',
        body: 'Parts are bought before the customer pays, and technicians are paid every week.',
      },
      {
        title: 'Fleet and insurance work',
        body: 'Fleet accounts and insurer-paid repairs can pay on terms rather than at pickup.',
      },
    ],
    products: [
      {
        slug: 'collateral-asset-loans',
        copy: 'For lifts, alignment machines, paint booths, scan tools and tow trucks. Requires an equipment quote or invoice and 6+ months in business.',
      },
      {
        slug: 'business-line-of-credit',
        copy: 'For parts inventory and slower weeks. Requires 6+ months, $10K+ monthly revenue.',
      },
      {
        slug: 'invoice-factoring-tool',
        copy: 'For shops with creditworthy fleet or commercial accounts on terms. Requires B2B invoices and 3+ months in business.',
      },
    ],
    useCases: [
      {
        title: 'Adding a fourth lift',
        body: 'A general repair shop finances an extra lift so it can book more jobs per day, with payments set over the equipment’s useful life.',
      },
      {
        title: 'Taking on ADAS calibration',
        body: 'A collision shop finances calibration equipment so it can keep that work in-house instead of subletting it.',
      },
      {
        title: 'Serving a delivery fleet',
        body: "A shop with a commercial fleet account factors its invoices so it isn't carrying weeks of parts and labor on its own balance sheet.",
      },
    ],
    faqs: [
      {
        q: 'Can I finance used shop equipment?',
        a: 'Bring a quote or invoice for the specific unit; your specialist will confirm whether it qualifies.',
      },
      {
        q: 'Should I lease or finance diagnostic tools?',
        a: "For tools likely to be outdated quickly, a shorter term keeps you from paying for equipment after it's obsolete. Match the term to how long you'll actually use it.",
      },
      {
        q: 'Do body shops qualify?',
        a: 'Yes. Body, collision, tire, detailing and mobile mechanics are all auto services businesses.',
      },
      {
        q: 'What does a shop need to apply?',
        a: "Bank statements, owner details, and for equipment, the vendor's quote. See the [funding checklist](/blog/24-48-hour-funding-checklist).",
      },
    ],
    relatedPostIds: ['equipment-financing-break-even'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: 'factory',
    blurb: 'Big orders need raw materials and machine time up front. We help you say yes to the contract.',
    uses: ['Raw materials for large orders', 'Production equipment', 'Scaling the workforce'],
    seoTitle: 'Manufacturing Business Loans and Equipment Funding | Falcon',
    seoDescription:
      'Fund raw materials, large production runs and new machinery. Equipment loans up to $1M, factoring up to $3M for net-terms customers, lines to $500K.',
    h1: 'Manufacturing business loans',
    subtitle: 'Buy materials for the big order, add machine capacity and get paid sooner on net-terms invoices.',
    needs: [
      {
        title: 'Materials before the order ships',
        body: 'Raw materials and components are paid for weeks before finished goods are invoiced.',
      },
      {
        title: 'Net-terms customers',
        body: 'Distributors and larger buyers often pay 30, 60 or more days after delivery.',
      },
      {
        title: 'Machine capacity',
        body: 'A new CNC, press, packaging line or forklift can unlock orders the shop currently turns away.',
      },
      {
        title: 'Price swings in inputs',
        body: 'Buying ahead when material prices are favorable takes cash on hand.',
      },
    ],
    products: [
      {
        slug: 'invoice-factoring-tool',
        copy: 'Advance against invoices to creditworthy B2B customers so the next run is funded. Requires B2B invoices, creditworthy customers and 3+ months.',
      },
      {
        slug: 'collateral-asset-loans',
        copy: 'For production machinery and material-handling equipment. Requires an equipment quote or invoice and 6+ months.',
      },
      {
        slug: 'business-term-loan',
        copy: 'For a defined expansion such as a new line or facility fit-out. Requires 6+ months, $15K+ monthly revenue, 550+ credit score.',
      },
    ],
    useCases: [
      {
        title: 'Funding a larger-than-usual order',
        body: 'A contract manufacturer factors invoices from its current customers to buy materials for a new, larger purchase order.',
      },
      {
        title: 'Adding a second CNC',
        body: 'A machine shop finances a second machine over a fixed term so it can run two jobs at once.',
      },
      {
        title: 'Fitting out a packaging line',
        body: 'A food producer uses a term loan to add packaging equipment and installation in one planned project.',
      },
    ],
    faqs: [
      {
        q: 'Can I get funding for a single big purchase order?',
        a: "Factoring works on invoices you've already issued, so it funds the next order from the last one. For a first-time order, ask about a term loan or line of credit.",
      },
      {
        q: 'Does equipment financing cover installation?',
        a: 'It depends on how the vendor quote is written; ask your specialist to review it.',
      },
      {
        q: 'What do factors look at?',
        a: "Mainly your customers' credit and the quality of the invoices, plus your time in business.",
      },
      {
        q: 'Can I use several products together?',
        a: 'Many manufacturers pair equipment financing for machines with factoring or a credit line for working capital.',
      },
    ],
    relatedPostIds: ['invoice-factoring-vs-ar-financing'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    icon: 'briefcase',
    blurb: 'Agencies, firms and consultancies grow by hiring ahead of demand. Capital that funds your next hire.',
    uses: ['Key hires', 'Technology and software', 'Bridging long client payment cycles'],
    seoTitle: 'Professional Services Business Loans | Falcon Equity',
    seoDescription:
      'Working capital for agencies, consultancies, law and accounting firms: credit lines for slow-paying clients, factoring up to $3M and growth loans.',
    h1: 'Financing for professional services firms',
    subtitle: 'Make payroll while clients take their time to pay, and invest in people before the next engagement starts.',
    needs: [
      {
        title: 'Payroll runs ahead of collections',
        body: 'Your biggest cost is people, paid twice a month, while clients pay on net terms or at milestones.',
      },
      {
        title: 'Project and retainer gaps',
        body: 'A large engagement ending before the next one starts leaves a temporary revenue hole.',
      },
      {
        title: 'Hiring ahead of a win',
        body: 'New staff often need to be onboarded before the first invoice can go out.',
      },
      {
        title: 'Pass-through costs',
        body: 'Agencies may pay media, vendors or contractors before the client reimburses them.',
      },
    ],
    products: [
      {
        slug: 'business-line-of-credit',
        copy: 'For payroll between collections. Requires 6+ months, $10K+ monthly revenue, active bank account.',
      },
      {
        slug: 'invoice-factoring-tool',
        copy: 'For firms billing creditworthy business clients. Requires B2B invoices and 3+ months in business.',
      },
      {
        slug: 'business-term-loan',
        copy: 'For an office move, an acquisition or a new practice area. Requires 6+ months, $15K+ monthly revenue, 550+ credit score.',
      },
    ],
    useCases: [
      {
        title: 'Covering payroll on net terms',
        body: 'A marketing agency draws on its line to cover two payroll cycles while a corporate client processes its invoice.',
      },
      {
        title: 'Fronting media spend',
        body: 'An agency factors approved invoices so it can pay a media buy before the client reimburses it.',
      },
      {
        title: 'Opening a second office',
        body: 'An accounting firm uses a term loan to lease, furnish and staff a new location ahead of tax season.',
      },
    ],
    faqs: [
      {
        q: 'Can a service business with no inventory or equipment get funding?',
        a: 'Yes. Underwriting relies on revenue, deposits, receivables and time in business rather than hard assets.',
      },
      {
        q: 'Can law firms use factoring?',
        a: "Business-to-business invoices are the usual fit. Contingency fees and consumer billing generally aren't factorable invoices; ask your specialist.",
      },
      {
        q: 'Line of credit or factoring?',
        a: 'A line is simpler if your gaps are short. Factoring can scale further when you have large invoices to creditworthy clients.',
      },
      {
        q: "How do I show a lender we're stable?",
        a: 'Clean, consistent bank deposits and a clear accounts-receivable aging report help most.',
      },
    ],
    relatedPostIds: ['what-your-bank-statements-say'],
  },
  {
    slug: 'education',
    name: 'Education',
    icon: 'graduation-cap',
    blurb: 'Schools, academies and training centers invest before enrollment pays off. We fund the head start.',
    uses: ['Classroom and lab upgrades', 'Learning technology', 'New programs and campuses'],
    seoTitle: 'Education & Childcare Business Loans | Falcon Equity',
    seoDescription:
      'Funding for tutoring centers, private schools, daycares and training providers: summer-gap working capital, classroom build-outs and buses. Apply online.',
    h1: 'Education business loans',
    subtitle: 'Cover the months between tuition cycles, fit out classrooms and grow enrollment.',
    // TODO(Dwight): confirm for-profit-only eligibility for education/childcare before publish.
    note: "Falcon's products are for for-profit businesses. Nonprofit schools and centers should check with their specialist before applying.",
    needs: [
      {
        title: 'Uneven tuition timing',
        body: 'Enrollment and tuition can cluster at the start of a term, while rent and staff are paid every month, including summer.',
      },
      {
        title: 'Build-outs to meet licensing standards',
        body: 'Classrooms, restrooms, playground and safety upgrades often must be done before enrollment can increase.',
      },
      {
        title: 'Staffing ratios',
        body: 'Adding students can mean adding qualified staff first.',
      },
      {
        title: 'Vehicles and technology',
        body: 'Vans or buses, devices and learning software.',
      },
    ],
    products: [
      {
        slug: 'business-line-of-credit',
        copy: 'For summer and holiday gaps. Requires 6+ months, $10K+ monthly revenue, active bank account.',
      },
      {
        slug: 'business-term-loan',
        copy: 'For build-outs or opening a new location. Requires 6+ months, $15K+ monthly revenue, 550+ credit score.',
      },
      {
        slug: 'collateral-asset-loans',
        copy: 'For vans, buses, playground equipment and classroom technology. Requires an equipment quote or invoice.',
      },
    ],
    useCases: [
      {
        title: 'Getting through summer',
        body: 'A tutoring center draws on a credit line in July and August and repays it after fall enrollment.',
      },
      {
        title: 'Adding an infant room',
        body: 'A childcare center uses a term loan to renovate a room to licensing standards and hire staff before new families start.',
      },
      {
        title: 'Buying a passenger van',
        body: 'A private school finances a van for field trips and after-school pickup over a fixed term.',
      },
    ],
    faqs: [
      {
        q: 'Can a daycare get a business loan?',
        a: 'Yes, for-profit childcare centers can qualify based on revenue, deposits and time in business.',
      },
      {
        q: 'Are SBA loans better for schools?',
        a: "SBA-backed loans can be cheaper but slower; they also exclude nonprofits. Falcon's products are faster options for for-profit operators.",
      },
      {
        q: 'Can a new center qualify?',
        a: 'Most Falcon products need at least 6 months in business; the merchant cash advance starts at 3 months.',
      },
      {
        q: 'Can I finance playground equipment?',
        a: 'Yes, with a vendor quote, through Collateral & Asset Loans.',
      },
    ],
  },
  {
    slug: 'travel-hospitality',
    name: 'Travel & Hospitality',
    icon: 'plane',
    blurb: 'Peak season pays the bills, but preparation starts months earlier. Be ready when guests arrive.',
    uses: ['Off-season renovations', 'Pre-season staffing', 'Marketing ahead of peak demand'],
    seoTitle: 'Hospitality & Hotel Business Loans | Falcon Equity',
    seoDescription:
      'Working capital for hotels, inns, tour operators and travel agencies: off-season payroll, FF&E refreshes and supplier deposits. Credit lines to $500K.',
    h1: 'Hospitality business loans',
    subtitle: 'Fund the off-season, refresh rooms before peak and pay supplier deposits before guests pay you.',
    needs: [
      {
        title: 'Seasonality',
        body: 'Peak months carry the year; off-season overhead still has to be paid.',
      },
      {
        title: 'Deposits before revenue',
        body: 'Tour operators and agencies may pay hotels, transport and guides before the trip, or before final payment arrives.',
      },
      {
        title: 'FF&E refreshes',
        body: 'Beds, linens, furniture and in-room technology wear out and affect reviews.',
      },
      {
        title: 'Unexpected repairs',
        body: 'HVAC, plumbing or elevator issues can take rooms offline at the worst time.',
      },
    ],
    products: [
      {
        slug: 'business-line-of-credit',
        copy: 'For off-season gaps and deposits. Requires 6+ months, $10K+ monthly revenue.',
      },
      {
        slug: 'collateral-asset-loans',
        copy: 'For furniture, kitchen equipment, shuttles and HVAC units. Requires an equipment quote or invoice.',
      },
      {
        slug: 'merchant-cash-advance',
        copy: 'For card-heavy properties that need speed. Repayment follows sales, which can help in slow weeks, but it is costly; use it for short, urgent needs.',
      },
    ],
    useCases: [
      {
        title: 'Refreshing rooms before summer',
        body: 'A boutique hotel finances new furniture and bedding in early spring so the rooms are ready for peak season.',
      },
      {
        title: 'Paying group-tour deposits',
        body: 'A tour operator draws on its credit line to secure hotel blocks, then repays when travelers’ final payments arrive.',
      },
      {
        title: 'Replacing a failed HVAC unit',
        body: 'An inn finances a replacement unit so rooms come back online without draining the off-season reserve.',
      },
    ],
    faqs: [
      {
        q: 'Can seasonal businesses qualify?',
        a: 'Yes. Underwriters look at deposits over time, so expect them to see the seasonal pattern; explain it up front.',
      },
      {
        q: 'What is FF&E financing?',
        a: 'Furniture, fixtures and equipment. With a vendor quote, these can be financed through Collateral & Asset Loans.',
      },
      {
        q: 'Do travel agencies qualify for factoring?',
        a: 'Only if they bill creditworthy businesses on invoice terms, such as corporate travel accounts.',
      },
      {
        q: 'Is an MCA a good idea in the off-season?',
        a: "Be careful. It's fast, but expensive, and the off-season is when margins are thinnest.",
      },
    ],
    relatedPostIds: ['bridging-a-slow-season'],
  },
];

export const getIndustry = (slug: string) => INDUSTRIES.find((industry) => industry.slug === slug);

export type IndustryPlaceholder = {
  intent: string;
  alt: string;
};

/** Object/space stills only. Do not commission or generate people in these frames. */
export const INDUSTRY_PLACEHOLDERS: Record<
  IndustrySlug,
  { hero: IndustryPlaceholder; needs: IndustryPlaceholder; setting: IndustryPlaceholder }
> = {
  retail: {
    hero: {
      intent: 'empty retail store interior with stocked shelves and a POS counter',
      alt: 'Placeholder for a retail store interior with shelves and a register, no people',
    },
    needs: {
      intent: 'holiday inventory cartons stacked in a stockroom',
      alt: 'Placeholder for stacked inventory boxes in a retail stockroom',
    },
    setting: {
      intent: 'refrigerated cases and store fixtures on an empty sales floor',
      alt: 'Placeholder for retail fixtures and refrigerated cases, no people',
    },
  },
  'transportation-logistics': {
    hero: {
      intent: 'tractor-trailer at an empty loading dock at dusk',
      alt: 'Placeholder for a tractor-trailer parked at a warehouse dock, no people',
    },
    needs: {
      intent: 'freight pallets and rate-confirmation paperwork on a warehouse floor',
      alt: 'Placeholder for palletized freight on a warehouse floor',
    },
    setting: {
      intent: 'open trailer interior with a liftgate lowered',
      alt: 'Placeholder for an open trailer and liftgate, no people',
    },
  },
  'restaurants-food-service': {
    hero: {
      intent: 'commercial kitchen with a walk-in cooler, range and hood, lights on, empty',
      alt: 'Placeholder for an empty commercial kitchen with a walk-in, range and hood',
    },
    needs: {
      intent: 'stainless prep line and dish machine after close',
      alt: 'Placeholder for a closed restaurant prep line and dish machine',
    },
    setting: {
      intent: 'empty dining room with new seating and pendant lights',
      alt: 'Placeholder for an empty restaurant dining room with new seating',
    },
  },
  'real-estate': {
    hero: {
      intent: 'mid-rise commercial building facade with ground-floor glass',
      alt: 'Placeholder for a commercial building exterior, no people',
    },
    needs: {
      intent: 'empty brokerage office with desks, listing boards and a conference table',
      alt: 'Placeholder for an empty real estate office interior',
    },
    setting: {
      intent: 'vacant unit mid-rehab with exposed framing and contractor tools',
      alt: 'Placeholder for a vacant property under renovation, no people',
    },
  },
  healthcare: {
    hero: {
      intent: 'empty exam room with a treatment chair and diagnostic monitor',
      alt: 'Placeholder for an empty clinical exam room with equipment',
    },
    needs: {
      intent: 'medical imaging unit in a quiet procedure room',
      alt: 'Placeholder for a clinical imaging unit, no people',
    },
    setting: {
      intent: 'clinic reception desk and waiting area after hours',
      alt: 'Placeholder for an empty clinic reception and waiting area',
    },
  },
  construction: {
    hero: {
      intent: 'job-site materials, lumber stacks and a skid steer before the crew arrives',
      alt: 'Placeholder for construction materials and a skid steer on a job site, no people',
    },
    needs: {
      intent: 'excavator and compacted earth on an empty lot',
      alt: 'Placeholder for an excavator on a graded lot, no people',
    },
    setting: {
      intent: 'subcontractor invoices and a hard hat on a job-box lid',
      alt: 'Placeholder for construction paperwork and gear on a job box',
    },
  },
  'e-commerce': {
    hero: {
      intent: 'warehouse aisle of boxed SKUs with a packing station in the foreground',
      alt: 'Placeholder for an e-commerce warehouse aisle and packing station, no people',
    },
    needs: {
      intent: 'open cartons of product next to a shipping scale',
      alt: 'Placeholder for packed product cartons beside a shipping scale',
    },
    setting: {
      intent: 'racks of inventory with shipping labels ready to go out',
      alt: 'Placeholder for warehouse racks of labeled inventory, no people',
    },
  },
  'auto-services': {
    hero: {
      intent: 'empty service bay with a four-post lift and a tool chest',
      alt: 'Placeholder for an empty auto shop bay with a lift, no people',
    },
    needs: {
      intent: 'diagnostic scan tools and an alignment rack',
      alt: 'Placeholder for auto diagnostic tools and an alignment rack',
    },
    setting: {
      intent: 'parts shelves and a tire machine in a quiet shop',
      alt: 'Placeholder for auto parts shelves and a tire machine, no people',
    },
  },
  manufacturing: {
    hero: {
      intent: 'CNC machine on a clean shop floor with raw stock nearby',
      alt: 'Placeholder for a CNC machine and raw materials on a shop floor, no people',
    },
    needs: {
      intent: 'pallets of components staged for a production run',
      alt: 'Placeholder for palletized manufacturing components',
    },
    setting: {
      intent: 'packaging line and finished-goods crates at the end of a run',
      alt: 'Placeholder for a packaging line and finished-goods crates, no people',
    },
  },
  'professional-services': {
    hero: {
      intent: 'empty conference room with a long table and city-facing windows',
      alt: 'Placeholder for an empty professional-services conference room',
    },
    needs: {
      intent: 'office desks and dual monitors after hours',
      alt: 'Placeholder for an empty office with desks and monitors',
    },
    setting: {
      intent: 'law or accounting library shelves and a side table of files',
      alt: 'Placeholder for professional-services library shelves and files, no people',
    },
  },
  education: {
    hero: {
      intent: 'empty classroom with low tables, cubbies and a whiteboard',
      alt: 'Placeholder for an empty classroom with tables and cubbies, no people',
    },
    needs: {
      intent: 'outdoor playground equipment on a fenced lot',
      alt: 'Placeholder for playground equipment at a childcare center, no people',
    },
    setting: {
      intent: 'passenger van parked beside a school building',
      alt: 'Placeholder for a school passenger van beside a building, no people',
    },
  },
  'travel-hospitality': {
    hero: {
      intent: 'made-up boutique hotel room with new furniture and bedding',
      alt: 'Placeholder for an empty hotel room with refreshed furniture, no people',
    },
    needs: {
      intent: 'hotel lobby seating and a reception desk before open',
      alt: 'Placeholder for an empty hotel lobby and reception desk',
    },
    setting: {
      intent: 'rooftop HVAC unit and a linen cart in a service corridor',
      alt: 'Placeholder for hotel HVAC equipment and a linen cart, no people',
    },
  },
};
