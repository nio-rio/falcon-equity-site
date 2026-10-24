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

const home = titleOf('dist/index.html');
if (home !== 'Falcon Equity Group | Fast Funding in 24–48 Hours') {
  throw new Error(`Home <title> was ${JSON.stringify(home)}`);
}

const applyTitle = titleOf('dist/apply.html');
if (applyTitle !== 'Apply for Business Funding | Falcon Equity Group') {
  throw new Error(`Apply <title> was ${JSON.stringify(applyTitle)}`);
}
if (h1Of('dist/apply.html') !== 'Apply today to get same day funding.') {
  throw new Error(`Apply <h1> was ${JSON.stringify(h1Of('dist/apply.html'))}`);
}

const aboutTitle = titleOf('dist/about.html');
if (aboutTitle !== 'About Falcon Equity Group | Business funding, New York') {
  throw new Error(`About <title> was ${JSON.stringify(aboutTitle)}`);
}
/** The About H1 is two lines in two spans, so collapse the markup's whitespace. */
const aboutH1 = h1Of('dist/about.html').replace(/\s+/g, ' ');
if (aboutH1 !== 'We’re more than a funding provider. We’re your partner.') {
  throw new Error(`About <h1> was ${JSON.stringify(aboutH1)}`);
}

/** Resource tools that are real pages, not redirects. */
const toolPages = [
  [
    'resources/business-loan-calculator',
    'Business loan calculator',
    'Business Loan Calculator | Falcon Equity Group',
  ],
  [
    'resources/credit-repair-loan-prep',
    'Credit Repair & Loan Prep',
    'Credit repair and loan prep | Falcon Equity Group',
  ],
];

for (const [route, h1Expected, titleExpected] of toolPages) {
  const file = `dist/${route}.html`;
  const title = titleOf(file);
  if (title !== titleExpected) {
    throw new Error(`${file} <title> was ${JSON.stringify(title)}`);
  }
  const h1 = h1Of(file);
  if (h1 !== h1Expected) {
    throw new Error(`${file} <h1> was ${JSON.stringify(h1)}`);
  }
}

/** Every service page that has been rebuilt onto its own route. */
const servicePages = [
  ['services/merchant-cash-advance', 'Merchant Cash Advance'],
  ['services/collateral-asset-loans', 'Collateral & Asset Loans'],
  ['services/business-line-of-credit', 'Business Line of Credit'],
  ['services/business-term-loan', 'Business Term Loan'],
  ['services/invoice-factoring-tool', 'Invoice Factoring Tool'],
  ['services/consolidation-of-positions', 'Consolidation of Positions'],
];

for (const [route, name] of servicePages) {
  const file = `dist/${route}.html`;
  const title = titleOf(file);
  if (title !== `${name} | Falcon Equity Group`) {
    throw new Error(`${file} <title> was ${JSON.stringify(title)}`);
  }
  const h1 = h1Of(file);
  if (h1 !== name) {
    throw new Error(`${file} <h1> was ${JSON.stringify(h1)}`);
  }
}

/**
 * `/services` — the home Services band reused as its own page. It shipped on
 * 24 Oct 2026, so the route must render a document, not the old 301 stub. Its
 * H1 is the plain page label and it carries no eyebrow (Ling, 24 Oct).
 */
const servicesTitle = titleOf('dist/services.html');
if (servicesTitle !== 'Services | Seven funding products | Falcon Equity Group') {
  throw new Error(`Services <title> was ${JSON.stringify(servicesTitle)}`);
}
if (h1Of('dist/services.html') !== 'Services') {
  throw new Error(`Services <h1> was ${JSON.stringify(h1Of('dist/services.html'))}`);
}
/** Ling, 24 Oct: no eyebrow on this page. */
const servicesHtml = readFileSync('dist/services.html', 'utf8');
if (servicesHtml.includes('class="eyebrow')) {
  throw new Error('dist/services.html renders an eyebrow; Ling removed it 24 Oct 2026');
}

/** Rebuilt industry pages. The H1 is the page's label, not the route slug. */
const industryPages = [['industries/retail', 'Retail business loans']];

for (const [route, h1Expected] of industryPages) {
  const file = `dist/${route}.html`;
  const title = titleOf(file);
  if (title !== `${h1Expected} | Falcon Equity Group`) {
    throw new Error(`${file} <title> was ${JSON.stringify(title)}`);
  }
  const h1 = h1Of(file);
  if (h1 !== h1Expected) {
    throw new Error(`${file} <h1> was ${JSON.stringify(h1)}`);
  }
}

/** Blog index — /blog. */
const blogTitle = titleOf('dist/blog.html');
if (blogTitle !== 'Blog | Falcon Equity Group') {
  throw new Error(`Blog <title> was ${JSON.stringify(blogTitle)}`);
}
if (h1Of('dist/blog.html') !== 'Blog') {
  throw new Error(`Blog <h1> was ${JSON.stringify(h1Of('dist/blog.html'))}`);
}

/**
 * Partners — /partners plus the partner application page (Ling's 24 Oct round):
 * the hero sentence about "one specialist" is gone, the types band opens with
 * "Let’s grow our businesses together.", and the fit band links to /partners/apply.
 */
const partnersTitle = titleOf('dist/partners.html');
if (partnersTitle !== 'Partners | Brokers, ISOs and funding partners | Falcon Equity Group') {
  throw new Error(`Partners <title> was ${JSON.stringify(partnersTitle)}`);
}
const partnersHtml = readFileSync('dist/partners.html', 'utf8');
if (partnersHtml.includes('One specialist stays on the relationship')) {
  throw new Error('dist/partners.html still carries the hero sentence Ling removed on 24 Oct 2026');
}
if (!partnersHtml.includes('Let’s grow our businesses together.')) {
  throw new Error('dist/partners.html is missing the 24 Oct "Let’s grow our businesses together." H2');
}
if (!partnersHtml.includes('I acknowledge that my business meets all requirements above.')) {
  throw new Error('dist/partners.html is missing the partner acknowledgement checkbox');
}
if (!partnersHtml.includes('href="/partners/apply"')) {
  throw new Error('dist/partners.html has no link to /partners/apply');
}

const partnerApplyTitle = titleOf('dist/partners/apply.html');
if (partnerApplyTitle !== 'Partner application | Falcon Equity Group') {
  throw new Error(`Partner application <title> was ${JSON.stringify(partnerApplyTitle)}`);
}
if (h1Of('dist/partners/apply.html') !== 'Apply to become a Falcon partner.') {
  throw new Error(`Partner application <h1> was ${JSON.stringify(h1Of('dist/partners/apply.html'))}`);
}

console.log(`${home}\n${applyTitle}\n${servicesTitle}  <- dist/services.html`);
for (const [route, name] of servicePages) {
  console.log(`${name} | Falcon Equity Group  <- dist/${route}.html`);
}
for (const [route, h1Expected] of industryPages) {
  console.log(`${h1Expected} | Falcon Equity Group  <- dist/${route}.html`);
}
