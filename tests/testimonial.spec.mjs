import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const pickChromium = (mod) => mod?.chromium || mod?.default?.chromium;
const loadChromium = async () => {
  const candidates = [
    new URL('../node_modules/playwright-core/index.js', import.meta.url).pathname,
    '/tmp/nav-qa/node_modules/playwright-core/index.js',
  ];
  for (const file of candidates) {
    if (!existsSync(file)) continue;
    const mod = await import(pathToFileURL(file).href);
    const chromium = pickChromium(mod);
    if (chromium) return chromium;
  }
  return pickChromium(require('playwright-core'));
};

const chromium = await loadChromium();
const BASE = process.env.QA_BASE || 'http://127.0.0.1:4321';
const OUT = process.env.QA_OUT || '/opt/cursor/artifacts/screenshots';
const CHROME = process.env.CHROME_PATH || '/usr/local/bin/google-chrome';
await mkdir(OUT, { recursive: true });

const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1024', width: 1024, height: 768 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
];

const results = [];
const log = (entry) => {
  results.push(entry);
  console.log(`${entry.ok ? 'PASS' : 'FAIL'} [${entry.vp}] ${entry.check}${entry.detail ? ' — ' + entry.detail : ''}`);
};

const browser = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
});

for (const vp of VIEWPORTS) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.width <= 390 ? 2 : 1,
  });
  const page = await context.newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.locator('.pilot-ann').scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);

  const geom = await page.evaluate(() => {
    const wrap = document.querySelector('[data-testimonial-wrap]');
    const item = wrap?.querySelector('[data-testimonial-item].is--active');
    const media = item?.querySelector('[data-testimonial-img]');
    const name = item?.querySelector('[data-testimonial-split]');
    const nav = wrap?.querySelector('.pilot-ann-nav');
    const quote = item?.querySelector('[data-testimonial-text]');
    const prev = wrap?.querySelector('[data-prev] .circle-arrow');
    const next = wrap?.querySelector('[data-next] .circle-arrow');
    const ir = item?.getBoundingClientRect();
    const mr = media?.getBoundingClientRect();
    const nr = nav?.getBoundingClientRect();
    const br = name?.getBoundingClientRect();
    const qr = quote?.getBoundingClientRect();
    const red = 'rgb(184, 0, 0)';
    const redHit = wrap
      ? [...wrap.querySelectorAll('*')].some((el) => {
          const cs = getComputedStyle(el);
          return cs.color === red || cs.backgroundColor === red || cs.borderColor === red;
        })
      : true;
    return {
      stacked: ir && nr ? nr.top >= ir.bottom - 2 : false,
      arrowAlign: mr && nr ? Math.abs(mr.bottom - nr.bottom) : null,
      nameAbove: br && nr ? br.bottom <= nr.top + 1 : false,
      nameGap: br && nr ? Math.round(nr.top - br.bottom) : null,
      quoteW: qr ? Math.round(qr.width) : null,
      mediaW: mr ? Math.round(mr.width) : null,
      navBottom: nr ? Math.round(nr.bottom) : null,
      mediaBottom: mr ? Math.round(mr.bottom) : null,
      itemCount: wrap ? wrap.querySelectorAll('[data-testimonial-item]').length : 0,
      markCount: wrap ? wrap.querySelectorAll('.pilot-ann-mark').length : -1,
      quoteColor: quote ? getComputedStyle(quote).color : null,
      quoteText: quote?.textContent.replace(/\s+/g, ' ').trim() || '',
      prevTransform: prev ? getComputedStyle(prev).transform : null,
      nextTransform: next ? getComputedStyle(next).transform : null,
      circleW: next ? Math.round(next.getBoundingClientRect().width * 10) / 10 : null,
      circleH: next ? Math.round(next.getBoundingClientRect().height * 10) / 10 : null,
      redHit,
    };
  });

  const desktop = vp.width >= 768;
  const prevMirrored =
    geom.prevTransform === 'matrix(-1, 0, 0, 1, 0, 0)' ||
    (typeof geom.prevTransform === 'string' && geom.prevTransform.includes('matrix(-1,'));
  log({
    vp: vp.name,
    check: 'layout-arrows',
    ok: desktop
      ? geom.nameAbove && geom.arrowAlign != null && geom.arrowAlign <= 8 && geom.nameGap >= 32
      : geom.stacked && geom.nameAbove && geom.nameGap >= 24,
    detail: JSON.stringify(geom),
  });
  log({
    vp: vp.name,
    check: 'circle-arrow-chrome',
    ok:
      geom.itemCount === 3 &&
      geom.markCount === 0 &&
      geom.redHit === false &&
      geom.quoteColor === 'rgb(20, 16, 31)' &&
      geom.quoteText.startsWith('“') &&
      geom.quoteText.endsWith('”') &&
      prevMirrored &&
      (geom.nextTransform === 'none' || geom.nextTransform === 'matrix(1, 0, 0, 1, 0, 0)') &&
      geom.circleW != null &&
      Math.abs(geom.circleW - 44) <= 1 &&
      geom.circleH != null &&
      Math.abs(geom.circleH - 44) <= 1,
    detail: JSON.stringify({
      itemCount: geom.itemCount,
      markCount: geom.markCount,
      redHit: geom.redHit,
      quoteColor: geom.quoteColor,
      prevTransform: geom.prevTransform,
      nextTransform: geom.nextTransform,
      circleW: geom.circleW,
      circleH: geom.circleH,
    }),
  });

  if (vp.name === '1440') {
    await page.locator('[data-next]').click();
    await page.waitForTimeout(1600);
    const after = await page.evaluate(() => {
      const item = document.querySelector('[data-testimonial-item].is--active');
      return {
        quote: item?.querySelector('[data-testimonial-text]')?.textContent.replace(/\s+/g, ' ').trim() || '',
        business: item?.querySelector('[data-testimonial-split]')?.textContent.trim() || '',
      };
    });
    log({
      vp: vp.name,
      check: 'next-advances',
      ok:
        after.business === 'Retail business' &&
        after.quote.includes('game-changer for my retail business') &&
        after.quote.startsWith('“') &&
        after.quote.endsWith('”'),
      detail: JSON.stringify(after),
    });
  }

  await page.locator('.pilot-ann').screenshot({ path: `${OUT}/testimonial-${vp.name}.png` });
  await context.close();
}

await browser.close();
const failed = results.filter((r) => !r.ok);
console.log('\n==== TESTIMONIAL ====');
console.log(`total=${results.length} pass=${results.length - failed.length} fail=${failed.length}`);
if (failed.length) {
  for (const f of failed) console.log(` - [${f.vp}] ${f.check}: ${f.detail || ''}`);
}
process.exit(failed.length ? 1 : 0);
