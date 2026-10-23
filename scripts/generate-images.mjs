// Generates the default OG image and the seed blog covers from brand colors.
// Run with: node scripts/generate-images.mjs
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';

const BRAND = '#332a4e';
const DARK = '#1a1529';
const LILAC = '#f3f2fb';
const LILAC_DEEP = '#b9b0e8';

const MARK = `
  <path d="M39.3284 25.4951L15.0049 1.17157C14.2548 0.421427 13.2373 0 12.1765 0H0.5V13.3333H9.83333C12.0425 13.3333 13.8333 15.1242 13.8333 17.3333V26.6667H23.1667C25.3758 26.6667 27.1667 28.4575 27.1667 30.6667V40H40.5V28.3235C40.5 27.2627 40.0786 26.2452 39.3284 25.4951Z"/>
  <path d="M27.1667 0H36.5C38.7092 0 40.5 1.79086 40.5 4V13.3333H27.1667V0Z"/>
  <path d="M0.5 26.6667H9.83334C12.0425 26.6667 13.8333 28.4575 13.8333 30.6667V40H0.5V26.6667Z"/>`;

const LOGO_INNER = (await readFile('src/assets/brand/falcon-logo-full.svg', 'utf8'))
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .replace(/fill="#332A4E"/gi, 'fill="currentColor"');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

async function ogDefault() {
  const W = 1200;
  const H = 630;
  const falcon = await sharp('src/assets/images/hero-falcon.webp')
    .resize(560, H, { fit: 'cover', position: 'attention' })
    .toBuffer();
  const overlay = Buffer.from(`
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" x2="1">
        <stop offset="0" stop-color="${DARK}" stop-opacity="1"/>
        <stop offset="1" stop-color="${DARK}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect x="640" y="0" width="200" height="${H}" fill="url(#fade)"/>
    <g transform="translate(72,72) scale(2.2)" color="white">${LOGO_INNER}</g>
    <text x="72" y="300" font-family="Manrope, Helvetica, Arial, sans-serif" font-size="62" font-weight="800" letter-spacing="-1.5" fill="white">Capital for businesses</text>
    <text x="72" y="376" font-family="Manrope, Helvetica, Arial, sans-serif" font-size="62" font-weight="800" letter-spacing="-1.5" fill="white">that play to win.</text>
    <text x="72" y="460" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="${LILAC_DEEP}">Funding in as little as 24–48 hours</text>
    <text x="72" y="560" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="${LILAC}">falconequity.ai</text>
  </svg>`);
  await sharp({ create: { width: W, height: H, channels: 3, background: DARK } })
    .composite([
      { input: falcon, left: W - 560, top: 0 },
      { input: overlay, left: 0, top: 0 },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile('public/og-default.jpg');
}

async function cover(file, label, lines, variant) {
  const W = 1600;
  const H = 900;
  const shapes = {
    layers: `<g fill="none" stroke="${LILAC_DEEP}" stroke-opacity="0.55" stroke-width="3">
        ${[0, 1, 2, 3].map((i) => `<rect x="${1000 + i * 40}" y="${200 + i * 90}" width="420" height="260" rx="28" />`).join('')}
      </g>`,
    versus: `<g fill="none" stroke="${LILAC_DEEP}" stroke-opacity="0.6" stroke-width="3">
        <circle cx="1130" cy="450" r="210"/><circle cx="1330" cy="450" r="210"/></g>`,
    checklist: `<g fill="none" stroke="${LILAC_DEEP}" stroke-opacity="0.6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        ${[0, 1, 2, 3].map((i) => `<rect x="1060" y="${230 + i * 120}" width="64" height="64" rx="14"/><path d="M1076 ${262 + i * 120} l14 14 l26 -30"/><line x1="1160" y1="${262 + i * 120}" x2="1440" y2="${262 + i * 120}"/>`).join('')}
      </g>`,
  };
  const svg = Buffer.from(`
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g" cx="0.85" cy="0.1" r="0.9">
        <stop offset="0" stop-color="#524a68"/>
        <stop offset="0.6" stop-color="${BRAND}"/>
        <stop offset="1" stop-color="${DARK}"/>
      </radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    ${shapes[variant]}
    <g transform="translate(110,110) scale(1.6)" fill="${LILAC_DEEP}">${MARK}</g>
    <text x="110" y="330" font-family="Helvetica, Arial, sans-serif" font-size="30" letter-spacing="5" fill="${LILAC_DEEP}">${escape(label.toUpperCase())}</text>
    ${lines.map((l, i) => `<text x="110" y="${430 + i * 92}" font-family="Manrope, Helvetica, Arial, sans-serif" font-size="76" font-weight="800" letter-spacing="-2" fill="white">${escape(l)}</text>`).join('')}
  </svg>`);
  await sharp(svg).jpeg({ quality: 82, mozjpeg: true }).toFile(file);
}

await mkdir('src/assets/blog', { recursive: true });
await ogDefault();
await cover('src/assets/blog/consolidation-of-positions.jpg', 'Consolidation', ['Stacked advances,', 'one smarter payment'], 'layers');
await cover('src/assets/blog/mca-vs-term-loan.jpg', 'Working Capital', ['MCA vs. Term Loan:', 'which wins?'], 'versus');
await cover('src/assets/blog/funding-checklist.jpg', 'How-To', ['Your 24–48 hour', 'funding checklist'], 'checklist');
await cover('src/assets/blog/collection-frequency.jpg', 'Cash Flow', ['Daily, weekly or', 'monthly collection?'], 'versus');
await cover('src/assets/blog/factoring-quote-comparison.jpg', 'Factoring', ['Three quotes,', 'one spreadsheet'], 'layers');
await cover('src/assets/blog/vetting-a-lender.jpg', 'Compare Options', ['Check the lender', 'before you sign'], 'checklist');
console.log('Images generated.');
