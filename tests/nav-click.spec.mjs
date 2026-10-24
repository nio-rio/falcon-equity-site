/*
 * A click on a nav dropdown trigger always opens its panel, whatever its previous
 * state (Ling, 23 Oct). Desktop hover opens the menu after 120ms, so the old toggle
 * closed the panel on the very click meant to open it. Escape, the backdrop and a
 * click outside still close it.
 *
 * Standalone on purpose: like every other check here it drives a real browser, but
 * it is kept out of nav.spec.mjs because that suite runs one long sequential page
 * session and an extra open/close moves the scroll state the later checks assume.
 *
 *   QA_BASE=http://localhost:4321 npm run test:nav-click
 */
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';

const require = createRequire(import.meta.url);

const loadChromium = async () => {
  const candidates = [
    new URL('../node_modules/playwright-core/index.js', import.meta.url).pathname,
    '/tmp/nav-qa/node_modules/playwright-core/index.js',
  ];
  for (const file of candidates) {
    if (!existsSync(file)) continue;
    const mod = await import(`file://${file}`);
    const chromium = mod?.chromium || mod?.default?.chromium;
    if (chromium) return chromium;
  }
  const mod = require('playwright-core');
  return mod?.chromium || mod?.default?.chromium;
};

const chromium = await loadChromium();
const BASE = process.env.QA_BASE || 'http://127.0.0.1:4321';
const CHROME = process.env.CHROME_PATH || '/usr/local/bin/google-chrome';

let failures = 0;
const log = (check, ok, detail = '') => {
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'} [desktop] ${check}${detail ? ` — ${detail}` : ''}`);
};

const browser = await chromium.launch({ executablePath: CHROME });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${BASE}/`, { waitUntil: 'load' });
  await page.waitForTimeout(700);

  const trigger = page.locator('[data-dropdown-toggle="services"]');
  const expanded = () => trigger.getAttribute('aria-expanded');
  const openPanel = () =>
    page.evaluate(() => {
      const panel = document.querySelector('[data-nav-content="services"]');
      if (!panel) return false;
      const cs = getComputedStyle(panel);
      return cs.visibility !== 'hidden' && Number(cs.opacity) > 0.05;
    });

  log('closed-at-rest', (await expanded()) === 'false');

  await page.mouse.move(2, 2);
  await page.waitForTimeout(150);
  await trigger.hover({ force: true });
  await page.waitForTimeout(500);
  log('hover-opens', (await expanded()) === 'true');

  /* The regression: hover got there first, so the click used to close it again. */
  await trigger.click({ force: true });
  await page.waitForTimeout(450);
  log('click-while-hover-open-stays-open', (await expanded()) === 'true' && (await openPanel()));

  await page.keyboard.press('Escape');
  await page.waitForTimeout(700);
  log('escape-still-closes', (await expanded()) === 'false');

  await page.mouse.move(2, 2);
  await page.waitForTimeout(150);
  await trigger.click({ force: true });
  await page.waitForTimeout(450);
  log('click-when-closed-opens', (await expanded()) === 'true' && (await openPanel()));

  await trigger.click({ force: true });
  await page.waitForTimeout(450);
  log('second-click-stays-open', (await expanded()) === 'true');

  await page.keyboard.press('Escape');
  await page.waitForTimeout(600);
  await page.mouse.move(2, 2);
  await page.waitForTimeout(250);
  await trigger.focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  log('keyboard-enter-opens', (await expanded()) === 'true');

  /* Enter moves focus into the panel, so come back to the trigger before pressing
     it again — that second activation used to collapse the panel. */
  await trigger.focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(450);
  log('keyboard-enter-while-open-stays-open', (await expanded()) === 'true' && (await openPanel()));

  await page.keyboard.press('Escape');
  await page.waitForTimeout(700);
  log('escape-after-keyboard-closes', (await expanded()) === 'false');
} finally {
  await browser.close();
}

console.log(failures === 0 ? '\nall nav click checks passed' : `\n${failures} nav click check(s) failed`);
process.exit(failures === 0 ? 0 : 1);
