/**
 * Partner row on `/partners`. Add a partner here and the row grows — no markup edit.
 *
 * Rules (CLAUDE.md, the 23 Oct 2026 partners contract):
 * - A mark goes in only after the partner has given written permission.
 * - One plain line per partner, not a sales pitch. No invented partners, funders or logos.
 * - Outbound partner links are `rel="noopener sponsored"` — they are referral links.
 *
 * Cardiff's name, URL and logo already live in `SITE.partner`; this list reads them
 * from there so the two cannot drift.
 */
import { SITE } from '@/data/site';

export type PartnerType = 'Service partner' | 'Funding partner' | 'Broker / ISO';

export type Partner = {
  name: string;
  type: PartnerType;
  /** One plain line about what the partner does. */
  line: string;
  /** Path under /public, or omit for a text-only tile. */
  logo?: string;
  /** Logo's intrinsic size, so the tile reserves its box before the image loads. */
  logoSize?: { width: number; height: number };
  url?: string;
  /** External links open in a new tab and carry rel="noopener sponsored". */
  external?: boolean;
};

export const PARTNERS: Partner[] = [
  {
    name: SITE.partner.name,
    type: 'Service partner',
    line: 'A small-business financing marketplace for products Falcon does not place, business credit cards among them.',
    logo: SITE.partner.logo,
    logoSize: { width: 416, height: 94 },
    url: SITE.partner.url,
    external: true,
  },
];
