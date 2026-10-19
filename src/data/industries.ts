export type Industry = {
  name: string;
  icon: string;
  /** Original Falcon copy. Do not reuse the current site's or competitors' text. */
  blurb: string;
  uses: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    name: 'Retail',
    icon: 'store',
    blurb: 'Stock the shelves before the rush, not after it. Capital that keeps pace with your selling seasons.',
    uses: ['Pre-season inventory buys', 'Storefront refreshes', 'Opening a second location'],
  },
  {
    name: 'Transportation & Logistics',
    icon: 'truck',
    blurb: 'Keep trucks rolling and routes covered, even when fuel spikes or a broker pays late.',
    uses: ['Adding trucks or trailers', 'Fuel and maintenance gaps', 'Covering freight receivables'],
  },
  {
    name: 'Restaurants & Food Service',
    icon: 'utensils',
    blurb: 'From a new walk-in cooler to a patio build-out, funding that respects thin margins and busy nights.',
    uses: ['Kitchen equipment', 'Renovations and build-outs', 'Payroll through slow weeks'],
  },
  {
    name: 'Real Estate',
    icon: 'landmark',
    blurb: 'Move on a property or finish a project without waiting on a slow bank committee.',
    uses: ['Bridge capital between deals', 'Property improvements', 'Carrying costs and operations'],
  },
  {
    name: 'Healthcare',
    icon: 'heart-pulse',
    blurb: 'Practices run on reimbursements that arrive on someone else’s schedule. We help close the gap.',
    uses: ['Diagnostic and treatment equipment', 'New providers and staff', 'Practice expansion'],
  },
  {
    name: 'Construction',
    icon: 'hard-hat',
    blurb: 'Win the bid, then mobilize. Capital for materials, crews and machinery before the first draw lands.',
    uses: ['Materials and mobilization', 'Heavy equipment', 'Payroll between progress payments'],
  },
  {
    name: 'E-Commerce',
    icon: 'shopping-cart',
    blurb: 'When a product takes off, inventory has to land fast. Fund the growth curve while it is climbing.',
    uses: ['Bulk inventory orders', 'Paid acquisition campaigns', 'Fulfillment and warehousing'],
  },
  {
    name: 'Auto Services',
    icon: 'wrench',
    blurb: 'More bays, better diagnostics and a deeper parts shelf mean more cars out the door every day.',
    uses: ['Lifts and diagnostic tools', 'Parts inventory', 'Adding service bays'],
  },
  {
    name: 'Manufacturing',
    icon: 'factory',
    blurb: 'Big orders need raw materials and machine time up front. We help you say yes to the contract.',
    uses: ['Raw materials for large orders', 'Production equipment', 'Scaling the workforce'],
  },
  {
    name: 'Professional Services',
    icon: 'briefcase',
    blurb: 'Agencies, firms and consultancies grow by hiring ahead of demand. Capital that funds your next hire.',
    uses: ['Key hires', 'Technology and software', 'Bridging long client payment cycles'],
  },
  {
    name: 'Education',
    icon: 'graduation-cap',
    blurb: 'Schools, academies and training centers invest before enrollment pays off. We fund the head start.',
    uses: ['Classroom and lab upgrades', 'Learning technology', 'New programs and campuses'],
  },
  {
    name: 'Travel & Hospitality',
    icon: 'plane',
    blurb: 'Peak season pays the bills, but preparation starts months earlier. Be ready when guests arrive.',
    uses: ['Off-season renovations', 'Pre-season staffing', 'Marketing ahead of peak demand'],
  },
];
