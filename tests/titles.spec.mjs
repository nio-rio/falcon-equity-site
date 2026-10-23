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
if (aboutTitle !== 'About | Falcon Equity Group') {
  throw new Error(`About <title> was ${JSON.stringify(aboutTitle)}`);
}
if (h1Of('dist/about.html') !== 'About Falcon Equity Group') {
  throw new Error(`About <h1> was ${JSON.stringify(h1Of('dist/about.html'))}`);
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

console.log(`${home}\n${applyTitle}`);
for (const [route, name] of servicePages) {
  console.log(`${name} | Falcon Equity Group  <- dist/${route}.html`);
}
for (const [route, h1Expected] of industryPages) {
  console.log(`${h1Expected} | Falcon Equity Group  <- dist/${route}.html`);
}
