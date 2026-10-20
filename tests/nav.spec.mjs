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
  { name: '1440', width: 1440, height: 900, mode: 'desktop' },
  { name: '1280', width: 1280, height: 800, mode: 'desktop' },
  { name: '1024', width: 1024, height: 768, mode: 'mobile' },
  { name: '768', width: 768, height: 1024, mode: 'mobile' },
  { name: '390', width: 390, height: 844, mode: 'mobile' },
];

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'inner', path: '/about' },
];

const results = [];
const log = (entry) => {
  results.push(entry);
  const mark = entry.ok ? 'PASS' : 'FAIL';
  console.log(`${mark} [${entry.vp}/${entry.page}] ${entry.check}${entry.detail ? ' — ' + entry.detail : ''}`);
};

const browser = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
});

const shot = async (page, name) => {
  const file = `${OUT}/qa-${name}.png`;
  await page.screenshot({ path: file, fullPage: false });
  return file;
};

const headerPanelGeom = (page) =>
  page.evaluate(() => {
    const header = document.querySelector('[data-header]');
    const bar = document.querySelector('[data-header-bar]');
    const desktopPanel = document.querySelector('[data-nav-item].is-open [data-nav-panel]');
    const mobileInner = document.querySelector('[data-nav-inner].is-open');
    const panel = desktopPanel || mobileInner;
    const hr = header.getBoundingClientRect();
    const br = bar.getBoundingClientRect();
    const pr = panel ? panel.getBoundingClientRect() : null;
    const cs = getComputedStyle(header);
    const barCs = getComputedStyle(bar);
    const noHairline = (elCs) =>
      (elCs.borderBottomWidth === '0px' || elCs.borderBottomStyle === 'none') &&
      (elCs.boxShadow === 'none' || elCs.boxShadow === '');
    return {
      headerTop: Math.round(hr.top * 10) / 10,
      barBottom: Math.round(br.bottom * 10) / 10,
      panelTop: pr ? Math.round(pr.top * 10) / 10 : null,
      headerH: Math.round(hr.height * 10) / 10,
      headerBottom: Math.round(hr.bottom * 10) / 10,
      visible:
        br.height > 8 &&
        br.top >= -1 &&
        br.top <= 2 &&
        br.bottom > 40 &&
        cs.position === 'fixed' &&
        cs.visibility !== 'hidden' &&
        cs.display !== 'none',
      noHairline: noHairline(cs) && noHairline(barCs),
      pos: cs.position,
      locked: document.documentElement.classList.contains('has-scroll-lock'),
      y: Math.round(window.scrollY),
    };
  });

const openMenu = async (page, mode) => {
  if (mode === 'desktop') {
    await page.mouse.move(2, 2);
    await page.waitForTimeout(80);
    const trigger = page.locator('[data-nav-trigger]').first();
    await trigger.hover({ force: true });
    await page.waitForTimeout(200);
    const opened = await page.locator('[data-nav-item]').first().evaluate((el) => el.classList.contains('is-open'));
    if (!opened) await trigger.click();
  } else {
    const toggle = page.locator('[data-mobile-toggle]');
    const expanded = await toggle.getAttribute('aria-expanded');
    if (expanded !== 'true') await toggle.click();
  }
  await page.waitForTimeout(280);
};

const closeMenu = async (page, mode) => {
  await page.keyboard.press('Escape');
  await page.waitForTimeout(150);
  if (mode === 'mobile') {
    const toggle = page.locator('[data-mobile-toggle]');
    if ((await toggle.getAttribute('aria-expanded')) === 'true') {
      await toggle.click();
      await page.waitForTimeout(150);
    }
  }
};

const openCount = (page) =>
  page.locator('[data-nav-item].is-open, [data-nav-item]:has([data-nav-trigger][aria-expanded="true"])').count();

for (const vp of VIEWPORTS) {
  for (const pg of PAGES) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.width <= 390 ? 2 : 1,
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (err) => errors.push(String(err)));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    const tag = { vp: vp.name, page: pg.name };
    await page.goto(`${BASE}${pg.path}`, { waitUntil: 'networkidle' });
    await page.waitForSelector('[data-header]');

    const theme = await page.evaluate(() => {
      const h = document.querySelector('[data-header]');
      const cs = getComputedStyle(h);
      return {
        dark: h.classList.contains('is-color-theme-dark'),
        bg: cs.backgroundColor,
        color: cs.color,
      };
    });

    if (pg.name === 'home') {
      log({ ...tag, check: 'home-theme-dark-at-top', ok: theme.dark, detail: `bg=${theme.bg}` });
    } else {
      log({ ...tag, check: 'inner-theme-light', ok: !theme.dark, detail: `bg=${theme.bg}` });
    }

    const logoBox = await page.evaluate(() => {
      const el = document.querySelector('.site-header__logo');
      const mark = document.querySelector('.site-header__logo-mark');
      const cs = getComputedStyle(el);
      const r = mark.getBoundingClientRect();
      return {
        pad: cs.padding,
        border: cs.borderTopWidth,
        bg: cs.backgroundColor,
        w: Math.round(r.width * 10) / 10,
        h: Math.round(r.height * 10) / 10,
      };
    });
    const logoBare =
      (logoBox.pad === '0px' || logoBox.pad === '0px 0px') &&
      (logoBox.border === '0px' || logoBox.border === '0px none') &&
      (logoBox.bg === 'rgba(0, 0, 0, 0)' || logoBox.bg === 'transparent' || logoBox.bg === 'none');
    log({ ...tag, check: 'logo-unboxed', ok: logoBare, detail: JSON.stringify(logoBox) });

    const expectedLogo = vp.width < 768 ? { w: 152.5, h: 21.1 } : { w: 190, h: 26.3 };
    const logoSized =
      Math.abs(logoBox.w - expectedLogo.w) <= 2 && Math.abs(logoBox.h - expectedLogo.h) <= 2;
    log({
      ...tag,
      check: 'logo-125',
      ok: logoSized,
      detail: `got ${logoBox.w}x${logoBox.h} expected ${expectedLogo.w}x${expectedLogo.h}`,
    });

    const noHairline = async () =>
      page.evaluate(() => {
        const header = document.querySelector('[data-header]');
        const bar = document.querySelector('[data-header-bar]');
        const check = (el) => {
          const cs = getComputedStyle(el);
          return {
            borderBottom: cs.borderBottomWidth,
            borderBottomStyle: cs.borderBottomStyle,
            boxShadow: cs.boxShadow,
            outline: cs.outlineWidth,
          };
        };
        const h = check(header);
        const b = check(bar);
        const none = (x) =>
          (x.borderBottom === '0px' || x.borderBottomStyle === 'none') &&
          (x.boxShadow === 'none' || x.boxShadow === '');
        return { ok: none(h) && none(b), h, b };
      });

    const hairlineTop = await noHairline();
    log({ ...tag, check: 'header-no-bottom-rule', ok: hairlineTop.ok, detail: JSON.stringify(hairlineTop) });

    const overlap = await page.evaluate(() => {
      const logo = document.querySelector('.site-header__logo').getBoundingClientRect();
      const tools = document.querySelector('.site-header__tools').getBoundingClientRect();
      const nav = document.querySelector('.site-header__nav').getBoundingClientRect();
      const hits = (a, b) => a.right > b.left + 1 && a.left < b.right - 1 && a.bottom > b.top + 1 && a.top < b.bottom - 1;
      return {
        logoTools: hits(logo, tools),
        logoNav: hits(logo, nav),
        navTools: hits(nav, tools),
        logo: { l: Math.round(logo.left), r: Math.round(logo.right) },
        nav: { l: Math.round(nav.left), r: Math.round(nav.right) },
        tools: { l: Math.round(tools.left), r: Math.round(tools.right) },
      };
    });
    log({
      ...tag,
      check: 'logo-no-overlap',
      ok: !overlap.logoTools && !overlap.logoNav,
      detail: JSON.stringify(overlap),
    });

    const telHref = await page.locator('.site-header__tel--bar').getAttribute('href');
    log({ ...tag, check: 'tel-real-number', ok: telHref === 'tel:+19172455277', detail: telHref });

    const applyHref = await page.locator('a.site-header__apply[href="/apply"]').first().getAttribute('href');
    log({ ...tag, check: 'apply-href', ok: applyHref === '/apply' });

    if (vp.mode === 'desktop') {
      const first = page.locator('[data-nav-item]').first();
      const trigger = first.locator('[data-nav-trigger]');
      const panel = first.locator('[data-nav-panel]');
      const label = (await trigger.innerText()).trim().split('\n')[0];

      await trigger.hover();
      await page.waitForTimeout(200);
      const hoverOpen = await first.evaluate((el) => el.classList.contains('is-open') || el.querySelector('[data-nav-trigger]')?.getAttribute('aria-expanded') === 'true');
      const panelVisible = await panel.evaluate((el) => getComputedStyle(el).display !== 'none');
      log({ ...tag, check: 'hover-opens', ok: hoverOpen && panelVisible, detail: label });

      const chevron = await trigger.locator('.primary-nav__list-item-icon').evaluate((el) => getComputedStyle(el).transform);
      log({ ...tag, check: 'chevron-flips-on-open', ok: chevron !== 'none' && chevron !== 'matrix(1, 0, 0, 1, 0, 0)', detail: chevron });

      const backdropOn = await page.evaluate(() => {
        const b = document.querySelector('[data-nav-backdrop]');
        const cs = getComputedStyle(b);
        return !b.hidden && cs.display !== 'none' && cs.backgroundColor.includes('0, 0, 0');
      });
      log({ ...tag, check: 'backdrop-on-when-open', ok: backdropOn });

      const z = await page.evaluate(() => {
        const header = document.querySelector('[data-header]');
        const panel = document.querySelector('[data-nav-item].is-open [data-nav-panel], [data-nav-panel][aria-hidden="false"]') || document.querySelector('[data-nav-panel]');
        const hz = Number(getComputedStyle(header).zIndex) || 0;
        const main = document.querySelector('main');
        const mz = Number(getComputedStyle(main).zIndex) || 0;
        const tabs = document.querySelector('.pilot-tabs-menu');
        const tz = tabs ? Number(getComputedStyle(tabs).zIndex) || 0 : 0;
        const box = panel.getBoundingClientRect();
        const hit = document.elementFromPoint(Math.min(box.left + 40, innerWidth - 4), Math.min(box.top + 40, innerHeight - 4));
        return {
          hz,
          mz,
          tz,
          above: hz > mz && (tz === 0 || hz > tz),
          hit: hit && (panel.contains(hit) || header.contains(hit)) ? hit.className : hit?.className || String(hit),
        };
      });
      log({ ...tag, check: 'panel-above-content', ok: z.above, detail: JSON.stringify(z) });

      await shot(page, `${vp.name}-${pg.name}-hover-${label.toLowerCase().replace(/\s+/g, '-')}`);

      const panelBox = await panel.boundingBox();
      const triggerBox = await trigger.boundingBox();
      if (panelBox && triggerBox) {
        const midX = triggerBox.x + triggerBox.width / 2;
        const fromY = triggerBox.y + triggerBox.height;
        const toY = panelBox.y + 24;
        await page.mouse.move(midX, fromY - 2);
        await page.mouse.move(midX, (fromY + toY) / 2, { steps: 8 });
        await page.mouse.move(midX, toY, { steps: 8 });
        await page.waitForTimeout(250);
        const stillOpen = await first.evaluate((el) => el.classList.contains('is-open') || el.querySelector('[data-nav-trigger]')?.getAttribute('aria-expanded') === 'true');
        const stillVisible = await panel.evaluate((el) => getComputedStyle(el).display !== 'none');
        log({ ...tag, check: 'no-gap-close-into-panel', ok: stillOpen && stillVisible, detail: `from ${Math.round(fromY)} to ${Math.round(toY)}` });
      } else {
        log({ ...tag, check: 'no-gap-close-into-panel', ok: false, detail: 'missing boxes' });
      }

      const second = page.locator('[data-nav-item]').nth(1);
      await second.locator('[data-nav-trigger]').hover();
      await page.waitForTimeout(200);
      const openN = await page.locator('[data-nav-item].is-open').count();
      const visN = await page.locator('[data-nav-panel]').evaluateAll((els) => els.filter((el) => getComputedStyle(el).display !== 'none').length);
      log({ ...tag, check: 'only-one-open', ok: visN === 1 && openN <= 1, detail: `is-open=${openN} visible=${visN}` });

      await page.mouse.click(40, vp.height - 40);
      await page.waitForTimeout(250);
      const afterOutside = await page.locator('[data-nav-panel]').evaluateAll((els) => els.filter((el) => getComputedStyle(el).display !== 'none').length);
      const backdropOff = await page.evaluate(() => {
        const b = document.querySelector('[data-nav-backdrop]');
        return b.hidden || getComputedStyle(b).display === 'none';
      });
      log({ ...tag, check: 'outside-click-closes', ok: afterOutside === 0, detail: `visible=${afterOutside}` });
      log({ ...tag, check: 'backdrop-clears', ok: backdropOff });

      await trigger.hover();
      await page.waitForTimeout(150);
      await page.keyboard.press('Escape');
      await page.waitForTimeout(150);
      const afterEsc = await page.locator('[data-nav-panel]').evaluateAll((els) => els.filter((el) => getComputedStyle(el).display !== 'none').length);
      log({ ...tag, check: 'esc-closes', ok: afterEsc === 0, detail: `visible=${afterEsc}` });

      await trigger.hover();
      await page.waitForTimeout(150);
      await page.mouse.move(10, vp.height - 20);
      await page.waitForTimeout(400);
      const afterLeave = await page.locator('[data-nav-panel]').evaluateAll((els) => els.filter((el) => getComputedStyle(el).display !== 'none').length);
      log({ ...tag, check: 'leave-closes', ok: afterLeave === 0, detail: `visible=${afterLeave}` });

      await page.mouse.click(10, 10);
      await trigger.click();
      await page.waitForTimeout(200);
      const clickOpen = await panel.evaluate((el) => getComputedStyle(el).display !== 'none');
      log({ ...tag, check: 'click-opens', ok: clickOpen });

      const href = await panel.locator('a.primary-nav__list-lvl-3-link').first().getAttribute('href');
      await panel.locator('a.primary-nav__list-lvl-3-link').first().click();
      await page.waitForLoadState('networkidle');
      const url = page.url();
      log({ ...tag, check: 'link-navigates', ok: href && url.includes(href.replace(/\/$/, '')), detail: `${href} -> ${url}` });
      await page.goto(`${BASE}${pg.path}`, { waitUntil: 'networkidle' });

      await page.locator('.site-header__logo').focus();
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(200);
      const kbOpen = await page.locator('[data-nav-panel]').evaluateAll((els) => els.filter((el) => getComputedStyle(el).display !== 'none').length);
      log({ ...tag, check: 'keyboard-enter-opens', ok: kbOpen === 1, detail: `visible=${kbOpen}` });
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => document.activeElement?.className || document.activeElement?.tagName);
      log({ ...tag, check: 'keyboard-tab-into-panel', ok: /primary-nav__list-lvl-3-link|arrow-cta/.test(focused), detail: focused });
      await page.keyboard.press('Escape');

      if (pg.name === 'home') {
        await page.evaluate(() => window.scrollTo(0, 600));
        await page.waitForTimeout(200);
        const scrolled = await page.evaluate(() => {
          const h = document.querySelector('[data-header]');
          return {
            dark: h.classList.contains('is-color-theme-dark'),
            compact: h.classList.contains('is-compact'),
            bg: getComputedStyle(h).backgroundColor,
          };
        });
        log({ ...tag, check: 'home-theme-light-on-scroll', ok: !scrolled.dark, detail: JSON.stringify(scrolled) });
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(150);
      }
    } else {
      const toggle = page.locator('[data-mobile-toggle]');
      const visibleToggle = await toggle.isVisible();
      log({ ...tag, check: 'hamburger-visible', ok: visibleToggle });

      await toggle.click();
      await page.waitForTimeout(200);
      const innerOpen = await page.locator('[data-nav-inner]').evaluate((el) => el.classList.contains('is-open') && getComputedStyle(el).display !== 'none');
      log({ ...tag, check: 'mobile-opens', ok: innerOpen });
      await shot(page, `${vp.name}-${pg.name}-mobile-open`);

      const scrollable = await page.evaluate(() => {
        const inner = document.querySelector('[data-nav-inner]');
        const cs = getComputedStyle(inner);
        return {
          overflow: cs.overflowY,
          maxH: cs.maxHeight,
          client: inner.clientHeight,
          scroll: inner.scrollHeight,
        };
      });
      log({
        ...tag,
        check: 'mobile-scrolls',
        ok: scrollable.overflow === 'auto' || scrollable.overflow === 'scroll' || scrollable.scroll <= scrollable.client + 1,
        detail: JSON.stringify(scrollable),
      });

      await page.locator('[data-nav-trigger]').first().click();
      await page.waitForTimeout(150);
      const acc1 = await page.locator('[data-nav-item]').first().evaluate((el) => el.classList.contains('is-open'));
      log({ ...tag, check: 'mobile-accordion-opens', ok: acc1 });
      await shot(page, `${vp.name}-${pg.name}-mobile-accordion`);

      await page.locator('[data-nav-trigger]').nth(1).click();
      await page.waitForTimeout(150);
      const ones = await page.locator('[data-nav-item].is-open').count();
      log({ ...tag, check: 'mobile-only-one-accordion', ok: ones === 1, detail: `open=${ones}` });

      await page.keyboard.press('Escape');
      await page.waitForTimeout(150);
      const closedEsc = await page.locator('[data-nav-inner]').evaluate((el) => !el.classList.contains('is-open') || getComputedStyle(el).display === 'none');
      log({ ...tag, check: 'mobile-esc-closes', ok: closedEsc });

      await toggle.click();
      await page.waitForTimeout(100);
      await toggle.click();
      await page.waitForTimeout(150);
      const closedToggle = await page.locator('[data-nav-inner]').evaluate((el) => !el.classList.contains('is-open') || getComputedStyle(el).display === 'none');
      log({ ...tag, check: 'mobile-toggle-closes', ok: closedToggle });

      await toggle.focus();
      await page.keyboard.press('Enter');
      await page.waitForTimeout(150);
      const kbOpen = await page.locator('[data-nav-inner]').evaluate((el) => el.classList.contains('is-open'));
      log({ ...tag, check: 'mobile-keyboard-enter-opens', ok: kbOpen });
      await page.keyboard.press('Escape');
    }

    await closeMenu(page, vp.mode);
    const maxY = await page.evaluate(() => Math.max(0, document.documentElement.scrollHeight - innerHeight));
    for (const y of [0, 800, 2000]) {
      const target = Math.min(y, maxY);
      await page.evaluate((n) => window.scrollTo({ top: n, left: 0, behavior: 'auto' }), target);
      await page.waitForTimeout(350);
      await openMenu(page, vp.mode);
      const g = await headerPanelGeom(page);
      const attached = g.panelTop != null && Math.abs(g.panelTop - g.barBottom) <= 2;
      log({
        ...tag,
        check: `open-at-y${y}-header-in-view`,
        ok: g.visible && g.noHairline,
        detail: JSON.stringify(g),
      });
      log({
        ...tag,
        check: `open-at-y${y}-panel-under-header`,
        ok: attached,
        detail: JSON.stringify(g),
      });
      await shot(page, `${vp.name}-${pg.name}-open-y${y}`);
      await closeMenu(page, vp.mode);
    }

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(100);
    await openMenu(page, vp.mode);
    const beforeY = await page.evaluate(() => window.scrollY);
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(200);
    const afterScroll = await headerPanelGeom(page);
    const yUnchanged = Math.abs(afterScroll.y - beforeY) <= 2;
    const stillAttached =
      afterScroll.panelTop != null && Math.abs(afterScroll.panelTop - afterScroll.barBottom) <= 2;
    log({
      ...tag,
      check: 'scroll-while-open-locks',
      ok: yUnchanged && afterScroll.locked,
      detail: JSON.stringify({ beforeY, ...afterScroll }),
    });
    log({
      ...tag,
      check: 'scroll-while-open-header-stays',
      ok: afterScroll.visible && stillAttached && afterScroll.noHairline,
      detail: JSON.stringify(afterScroll),
    });
    await closeMenu(page, vp.mode);

    const mid = Math.min(1200, await page.evaluate(() => Math.max(0, document.documentElement.scrollHeight - innerHeight)));
    await page.evaluate((n) => window.scrollTo({ top: n, left: 0, behavior: 'auto' }), mid);
    await page.waitForTimeout(350);
    await openMenu(page, vp.mode);
    const after = await headerPanelGeom(page);
    log({
      ...tag,
      check: 'open-after-scroll-header-in-view',
      ok: after.visible && after.noHairline,
      detail: JSON.stringify(after),
    });
    log({
      ...tag,
      check: 'open-after-scroll-panel-under-header',
      ok: after.panelTop != null && Math.abs(after.panelTop - after.barBottom) <= 2,
      detail: JSON.stringify(after),
    });
    await closeMenu(page, vp.mode);

    log({ ...tag, check: 'no-console-errors', ok: errors.length === 0, detail: errors.join(' | ') });
    await context.close();
  }
}

await browser.close();

const failed = results.filter((r) => !r.ok);
console.log('\n==== SUMMARY ====');
console.log(`total=${results.length} pass=${results.length - failed.length} fail=${failed.length}`);
if (failed.length) {
  console.log('FAILURES:');
  for (const f of failed) console.log(` - [${f.vp}/${f.page}] ${f.check}: ${f.detail || ''}`);
}
process.exit(failed.length ? 1 : 0);
