import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const decode = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const titleOf = (file) => {
  const html = readFileSync(resolve(file), 'utf8');
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!match) throw new Error(`No <title> in ${file}`);
  return decode(match[1].trim());
};

const h1Of = (file) => {
  const html = readFileSync(resolve(file), 'utf8');
  const match = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  if (!match) throw new Error(`No <h1> in ${file}`);
  return decode(match[1].replace(/<[^>]+>/g, '').trim());
};

const cases = [
  {
    file: 'dist/contact.html',
    title: 'Contact Us | Falcon Equity Group',
    h1: 'Contact',
    min: 30,
    max: 60,
  },
  {
    file: 'dist/industries/construction.html',
    title: 'Construction Business Loans and Contractor Funding | Falcon',
    min: 1,
    max: 60,
  },
  {
    file: 'dist/industries/manufacturing.html',
    title: 'Manufacturing Business Loans and Equipment Funding | Falcon',
    min: 1,
    max: 60,
  },
  {
    file: 'dist/blog/invoice-factoring-vs-ar-financing.html',
    title: 'Invoice Factoring vs. AR Financing | Falcon Equity Group',
    h1: 'Invoice factoring vs. AR financing: paid on day 3 instead of day 60',
    min: 30,
    max: 60,
  },
  {
    file: 'dist/blog/how-to-read-a-factor-rate.html',
    title: 'How to Read a Factor Rate | Falcon Equity Group',
    min: 30,
    max: 60,
  },
  {
    file: 'dist/blog/bridging-a-slow-season.html',
    title: 'Bridging a Slow Season | Falcon Equity Group',
    min: 30,
    max: 60,
  },
  {
    file: 'dist/blog/consolidation-of-positions-stacked-advances.html',
    title: 'Consolidation of Positions | Falcon Equity Group',
    min: 30,
    max: 60,
  },
  {
    file: 'dist/blog/merchant-cash-advance-vs-business-term-loan.html',
    title: 'Merchant Cash Advance vs. Term Loan | Falcon Equity Group',
    min: 30,
    max: 60,
  },
  {
    file: 'dist/blog/equipment-financing-break-even.html',
    title: 'Equipment Financing Break-Even | Falcon Equity Group',
    min: 30,
    max: 60,
  },
  {
    file: 'dist/blog/what-your-bank-statements-say.html',
    title: 'What Your Bank Statements Say | Falcon Equity Group',
    min: 30,
    max: 60,
  },
];

const home = titleOf('dist/index.html');
if (home !== 'Falcon Equity Group | Fast Funding in 24–48 Hours') {
  throw new Error(`Home <title> was ${JSON.stringify(home)}`);
}

for (const item of cases) {
  const title = titleOf(item.file);
  if (title !== item.title) {
    throw new Error(`${item.file} <title> was ${JSON.stringify(title)}, expected ${JSON.stringify(item.title)}`);
  }
  if (title.length < item.min || title.length > item.max) {
    throw new Error(`${item.file} <title> length ${title.length} is outside ${item.min}–${item.max}: ${title}`);
  }
  if (item.h1) {
    const h1 = h1Of(item.file);
    if (h1 !== item.h1) {
      throw new Error(`${item.file} <h1> was ${JSON.stringify(h1)}, expected ${JSON.stringify(item.h1)}`);
    }
  }
}

console.log(
  cases
    .map((item) => `${item.file}: ${item.title.length} ${item.title}`)
    .join('\n'),
);
