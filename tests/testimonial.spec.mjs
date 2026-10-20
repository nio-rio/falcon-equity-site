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
    const ir = item?.getBoundingClientRect();
    const mr = media?.getBoundingClientRect();
    const nr = nav?.getBoundingClientRect();
    const br = name?.getBoundingClientRect();
    const qr = quote?.getBoundingClientRect();
    return {
      stacked: ir && nr ? nr.top >= ir.bottom - 2 : false,
      arrowAlign: mr && nr ? Math.abs(mr.bottom - nr.bottom) : null,
      nameAbove: br && nr ? br.bottom <= nr.top + 1 : false,
      nameGap: br && nr ? Math.round(nr.top - br.bottom) : null,
      quoteW: qr ? Math.round(qr.width) : null,
      mediaW: mr ? Math.round(mr.width) : null,
      navBottom: nr ? Math.round(nr.bottom) : null,
      mediaBottom: mr ? Math.round(mr.bottom) : null,
    };
  });

  const desktop = vp.width >= 768;
  log({
    vp: vp.name,
    check: 'layout-arrows',
    ok: desktop
      ? geom.nameAbove && geom.arrowAlign != null && geom.arrowAlign <= 8 && geom.nameGap >= 32
      : geom.stacked && geom.nameAbove && geom.nameGap >= 24,
    detail: JSON.stringify(geom),
  });

  await page.screenshot({ path: `${OUT}/testimonial-${vp.name}.png`, fullPage: false });
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
