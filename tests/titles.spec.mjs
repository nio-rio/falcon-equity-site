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
if (h1Of('dist/apply.html') !== 'Apply') {
  throw new Error(`Apply <h1> was ${JSON.stringify(h1Of('dist/apply.html'))}`);
}

const mcaTitle = titleOf('dist/services/merchant-cash-advance.html');
if (mcaTitle !== 'Merchant Cash Advance | Falcon Equity Group') {
  throw new Error(`MCA <title> was ${JSON.stringify(mcaTitle)}`);
}
if (h1Of('dist/services/merchant-cash-advance.html') !== 'Merchant Cash Advance') {
  throw new Error(`MCA <h1> was ${JSON.stringify(h1Of('dist/services/merchant-cash-advance.html'))}`);
}

console.log(`${home}\n${applyTitle}\n${mcaTitle}`);
