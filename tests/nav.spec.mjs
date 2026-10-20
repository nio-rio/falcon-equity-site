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

const isBlur5 = (value) =>
  typeof value === 'string' && /blur\(\s*5px\s*\)/.test(value) && !/saturate/i.test(value);

const isFilterNone = (value) => !value || value === 'none';

const readFilters = (page) =>
  page.evaluate(() => {
    const read = (el) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        backdropFilter: cs.backdropFilter || cs.webkitBackdropFilter || 'none',
        webkitBackdropFilter: cs.webkitBackdropFilter || '',
        backgroundColor: cs.backgroundColor,
        display: cs.display,
        isolation: cs.isolation,
        transform: cs.transform,
        filter: cs.filter,
      };
    };
    const header = document.querySelector('[data-header]');
    const bar = document.querySelector('[data-header-bar]');
    const overlay = document.querySelector('[data-nav-backdrop]');
    const panel =
      document.querySelector('[data-nav-item].is-open [data-nav-panel]') ||
      document.querySelector('[data-nav-inner].is-open') ||
      null;
    let ancestorTrap = false;
    for (let n = overlay?.parentElement; n && n !== document.documentElement; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.transform !== 'none' || cs.filter !== 'none' || cs.isolation === 'isolate') ancestorTrap = true;
    }
    return {
      header: read(header),
      bar: read(bar),
      overlay: read(overlay),
      panel: read(panel),
      overlayParent: overlay?.parentElement?.tagName || null,
      ancestorTrap,
    };
  });

const readTypeChrome = (page) =>
  page.evaluate(() => {
    const tel = document.querySelector('.site-header__tel--bar');
    const menu = document.querySelector('.primary-nav__list-item-link');
    const telLabel = document.querySelector('.site-header__tel--bar .site-header__tel-label');
    const menuLabel = document.querySelector('.primary-nav__list-item-label');
    const typeOf = (el) => {
      const cs = getComputedStyle(el);
      return {
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        color: cs.color,
        letterSpacing: cs.letterSpacing,
        textTransform: cs.textTransform,
        textDecorationLine: cs.textDecorationLine,
        fontStyle: cs.fontStyle,
      };
    };
    const labelOf = (el) => {
      const cs = getComputedStyle(el);
      return {
        backgroundImage: cs.backgroundImage,
        backgroundSize: cs.backgroundSize,
        backgroundPosition: cs.backgroundPosition,
        backgroundRepeat: cs.backgroundRepeat,
      };
    };
    const chromeOf = (el) => {
      const cs = getComputedStyle(el);
      return {
        backgroundColor: cs.backgroundColor,
        borderWidth: cs.borderTopWidth,
        boxShadow: cs.boxShadow,
        padding: cs.padding,
      };
    };
    return {
      tel: typeOf(tel),
      menu: typeOf(menu),
      telLabel: labelOf(telLabel),
      menuLabel: labelOf(menuLabel),
      telChrome: chromeOf(tel),
    };
  });

const openCount = (page) =>
  page.locator('[data-nav-item].is-open, [data-nav-item]:has([data-nav-trigger][aria-expanded="true"])').count();

const SLATE_2 = 'rgb(213, 216, 223)';

const readPanelChrome = (page) =>
  page.evaluate(() => {
    const logo = document.querySelector('.site-header__logo');
    const apply = document.querySelector('.site-header__apply--bar');
    const heading = document.querySelector(
      '[data-nav-item].is-open .primary-nav__list-lvl-2-link, [data-nav-inner].is-open .primary-nav__list-lvl-2-link',
    );
    const list = document.querySelector(
      '[data-nav-item].is-open [data-nav-panel-list], [data-nav-inner].is-open [data-nav-panel-list]',
    );
    const panel =
      document.querySelector('[data-nav-item].is-open [data-nav-panel]') ||
      document.querySelector('[data-nav-inner].is-open');
    const header = document.querySelector('[data-header]');
    const bar = document.querySelector('[data-header-bar]');
    const lr = logo.getBoundingClientRect();
    const hr = heading?.getBoundingClientRect();
    const pr = list?.getBoundingClientRect();
    const ar = apply?.getBoundingClientRect();
    const listCs = list ? getComputedStyle(list) : null;
    const panelCs = panel ? getComputedStyle(panel) : null;
    const headerCs = getComputedStyle(header);
    const barCs = getComputedStyle(bar);
    const panelVisible = panelCs && panelCs.display !== 'none';
    return {
      logoLeft: Math.round(lr.left * 10) / 10,
      colLeft: hr ? Math.round(hr.left * 10) / 10 : null,
      listLeft: pr ? Math.round(pr.left * 10) / 10 : null,
      listRight: pr ? Math.round(pr.right * 10) / 10 : null,
      applyRight: ar ? Math.round(ar.right * 10) / 10 : null,
      applyDisplay: apply ? getComputedStyle(apply).display : null,
      borderTopWidth: listCs?.borderTopWidth ?? null,
      borderTopColor: listCs?.borderTopColor ?? null,
      borderTopStyle: listCs?.borderTopStyle ?? null,
      panelVisible: Boolean(panelVisible),
      headerBorder: headerCs.borderBottomWidth,
      barBorder: barCs.borderBottomWidth,
      dark: header.classList.contains('is-color-theme-dark'),
    };
  });

const parseSitemapLocs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

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

    const typeRest = await readTypeChrome(page);
    const typeMatch =
      typeRest.tel.fontFamily === typeRest.menu.fontFamily &&
      typeRest.tel.fontSize === typeRest.menu.fontSize &&
      typeRest.tel.fontWeight === typeRest.menu.fontWeight &&
      typeRest.tel.color === typeRest.menu.color &&
      typeRest.tel.letterSpacing === typeRest.menu.letterSpacing &&
      typeRest.tel.textTransform === typeRest.menu.textTransform &&
      typeRest.tel.textDecorationLine === typeRest.menu.textDecorationLine &&
      typeRest.tel.fontStyle === typeRest.menu.fontStyle;
    const noButtonChrome =
      (typeRest.telChrome.backgroundColor === 'rgba(0, 0, 0, 0)' ||
        typeRest.telChrome.backgroundColor === 'transparent') &&
      (typeRest.telChrome.borderWidth === '0px' || typeRest.telChrome.borderWidth === '0px none') &&
      (typeRest.telChrome.boxShadow === 'none' || typeRest.telChrome.boxShadow === '') &&
      (typeRest.telChrome.padding === '0px' || typeRest.telChrome.padding === '0px 0px');
    log({
      ...tag,
      check: 'tel-matches-menu-link',
      ok: typeMatch && noButtonChrome,
      detail: JSON.stringify(typeRest),
    });

    const filtersClosed = await readFilters(page);
    log({
      ...tag,
      check: 'overlay-blur-5px',
      ok:
        isBlur5(filtersClosed.overlay?.backdropFilter) &&
        !filtersClosed.ancestorTrap &&
        filtersClosed.overlayParent === 'BODY',
      detail: JSON.stringify(filtersClosed.overlay),
    });
    log({
      ...tag,
      check: 'header-backdrop-none',
      ok: isFilterNone(filtersClosed.header?.backdropFilter) && isFilterNone(filtersClosed.bar?.backdropFilter),
      detail: JSON.stringify({ header: filtersClosed.header, bar: filtersClosed.bar }),
    });

    const applyHref = await page.locator('a.site-header__apply[href="/apply"]').first().getAttribute('href');
    log({ ...tag, check: 'apply-href', ok: applyHref === '/apply' });

    const ctaN = await page.locator('[data-site-cta]').count();
    log({ ...tag, check: 'site-cta-once', ok: ctaN === 1, detail: `count=${ctaN}` });
    const ctaChrome = await page.evaluate(() => {
      const cta = document.querySelector('[data-site-cta]');
      const footer = document.querySelector('.site-footer');
      const btn = document.querySelector('.site-cta__btn');
      const cs = btn ? getComputedStyle(btn) : null;
      return {
        beforeFooter: Boolean(cta && footer && cta.nextElementSibling === footer),
        href: btn?.getAttribute('href') || null,
        bg: cs?.backgroundColor || null,
        radius: cs?.borderRadius || null,
        color: cs?.color || null,
      };
    });
    log({
      ...tag,
      check: 'site-cta-above-footer',
      ok: ctaChrome.beforeFooter,
      detail: JSON.stringify(ctaChrome),
    });
    log({
      ...tag,
      check: 'site-cta-white-pill',
      ok:
        ctaChrome.href === '/apply' &&
        ctaChrome.bg === 'rgb(255, 255, 255)' &&
        (ctaChrome.radius === '100rem' || parseFloat(ctaChrome.radius) >= 100) &&
        ctaChrome.color === 'rgb(32, 32, 32)',
      detail: JSON.stringify(ctaChrome),
    });

    const dividerClosed = await readPanelChrome(page);
    log({
      ...tag,
      check: 'divider-hidden-when-closed',
      ok: !dividerClosed.panelVisible && dividerClosed.headerBorder === '0px' && dividerClosed.barBorder === '0px',
      detail: JSON.stringify(dividerClosed),
    });

    if (vp.mode === 'desktop') {
      const first = page.locator('[data-nav-item]').first();
      const trigger = first.locator('[data-nav-trigger]');
      const panel = first.locator('[data-nav-panel]');
      const label = (await trigger.innerText()).trim().split('\n')[0];

      await page.locator('.site-header__tel--bar').hover();
      await page.waitForTimeout(350);
      const telHoverSize = await page
        .locator('.site-header__tel--bar .site-header__tel-label')
        .evaluate((el) => getComputedStyle(el).backgroundSize);
      await page.mouse.move(2, 2);
      await page.waitForTimeout(80);
      await trigger.hover();
      await page.waitForTimeout(350);
      const menuHoverSize = await page
        .locator('.primary-nav__list-item-label')
        .first()
        .evaluate((el) => getComputedStyle(el).backgroundSize);
      const restSizes = typeRest;
      log({
        ...tag,
        check: 'tel-hover-matches-menu',
        ok:
          telHoverSize === menuHoverSize &&
          telHoverSize === '100% 1px' &&
          restSizes.telLabel.backgroundSize === restSizes.menuLabel.backgroundSize &&
          restSizes.telLabel.backgroundImage === restSizes.menuLabel.backgroundImage,
        detail: JSON.stringify({
          telHoverSize,
          menuHoverSize,
          telRest: restSizes.telLabel,
          menuRest: restSizes.menuLabel,
        }),
      });

      const hoverOpen = await first.evaluate((el) => el.classList.contains('is-open') || el.querySelector('[data-nav-trigger]')?.getAttribute('aria-expanded') === 'true');
      const panelVisible = await panel.evaluate((el) => getComputedStyle(el).display !== 'none');
      log({ ...tag, check: 'hover-opens', ok: hoverOpen && panelVisible, detail: label });

      const openChrome = await readPanelChrome(page);
      const aligned =
        openChrome.colLeft != null && Math.abs(openChrome.colLeft - openChrome.logoLeft) <= 1;
      log({
        ...tag,
        check: 'panel-aligns-logo',
        ok: aligned,
        detail: JSON.stringify(openChrome),
      });
      const applyAligned =
        openChrome.applyDisplay === 'none' ||
        (openChrome.applyRight != null &&
          openChrome.listRight != null &&
          Math.abs(openChrome.listRight - openChrome.applyRight) <= 1);
      log({
        ...tag,
        check: 'panel-aligns-apply',
        ok: applyAligned,
        detail: JSON.stringify(openChrome),
      });
      log({
        ...tag,
        check: 'divider-open-color',
        ok:
          openChrome.panelVisible &&
          openChrome.borderTopWidth === '1px' &&
          openChrome.borderTopStyle === 'solid' &&
          openChrome.borderTopColor === SLATE_2 &&
          openChrome.headerBorder === '0px',
        detail: JSON.stringify(openChrome),
      });

      const chevron = await trigger.locator('.primary-nav__list-item-icon').evaluate((el) => getComputedStyle(el).transform);
      log({ ...tag, check: 'chevron-flips-on-open', ok: chevron !== 'none' && chevron !== 'matrix(1, 0, 0, 1, 0, 0)', detail: chevron });

      const backdropOn = await page.evaluate(() => {
        const b = document.querySelector('[data-nav-backdrop]');
        const cs = getComputedStyle(b);
        return !b.hidden && cs.display !== 'none' && cs.backgroundColor.includes('0, 0, 0');
      });
      log({ ...tag, check: 'backdrop-on-when-open', ok: backdropOn });

      const filtersOpen = await readFilters(page);
      log({
        ...tag,
        check: 'overlay-blur-5px-open',
        ok:
          isBlur5(filtersOpen.overlay?.backdropFilter) &&
          filtersOpen.overlay?.display !== 'none' &&
          !filtersOpen.ancestorTrap,
        detail: JSON.stringify(filtersOpen.overlay),
      });
      log({
        ...tag,
        check: 'panel-backdrop-none',
        ok: isFilterNone(filtersOpen.panel?.backdropFilter),
        detail: JSON.stringify(filtersOpen.panel),
      });
      log({
        ...tag,
        check: 'header-backdrop-none-open',
        ok: isFilterNone(filtersOpen.header?.backdropFilter) && isFilterNone(filtersOpen.bar?.backdropFilter),
        detail: JSON.stringify({ header: filtersOpen.header, bar: filtersOpen.bar }),
      });

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
        const typeScrolled = await readTypeChrome(page);
        log({
          ...tag,
          check: 'tel-matches-menu-link-scrolled',
          ok:
            typeScrolled.tel.fontFamily === typeScrolled.menu.fontFamily &&
            typeScrolled.tel.fontSize === typeScrolled.menu.fontSize &&
            typeScrolled.tel.fontWeight === typeScrolled.menu.fontWeight &&
            typeScrolled.tel.color === typeScrolled.menu.color &&
            typeScrolled.tel.textDecorationLine === typeScrolled.menu.textDecorationLine,
          detail: JSON.stringify(typeScrolled),
        });
        const filtersScrolled = await readFilters(page);
        log({
          ...tag,
          check: 'overlay-blur-5px-scrolled',
          ok: isBlur5(filtersScrolled.overlay?.backdropFilter) && isFilterNone(filtersScrolled.header?.backdropFilter),
          detail: JSON.stringify(filtersScrolled),
        });
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

      await page.locator('.site-header__tel--bar').hover();
      await page.waitForTimeout(200);
      const mobileHover = await readTypeChrome(page);
      log({
        ...tag,
        check: 'tel-hover-matches-menu',
        ok:
          mobileHover.tel.fontFamily === mobileHover.menu.fontFamily &&
          mobileHover.tel.fontSize === mobileHover.menu.fontSize &&
          mobileHover.tel.fontWeight === mobileHover.menu.fontWeight &&
          mobileHover.tel.color === mobileHover.menu.color &&
          mobileHover.telLabel.backgroundSize === mobileHover.menuLabel.backgroundSize,
        detail: JSON.stringify(mobileHover),
      });

      const filtersOpen = await readFilters(page);
      log({
        ...tag,
        check: 'overlay-blur-5px-open',
        ok:
          isBlur5(filtersOpen.overlay?.backdropFilter) &&
          filtersOpen.overlay?.display !== 'none' &&
          !filtersOpen.ancestorTrap,
        detail: JSON.stringify(filtersOpen.overlay),
      });
      log({
        ...tag,
        check: 'panel-backdrop-none',
        ok: isFilterNone(filtersOpen.panel?.backdropFilter),
        detail: JSON.stringify(filtersOpen.panel),
      });
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
      const mobileChrome = await readPanelChrome(page);
      log({
        ...tag,
        check: 'panel-aligns-logo',
        ok: mobileChrome.colLeft != null && Math.abs(mobileChrome.colLeft - mobileChrome.logoLeft) <= 1,
        detail: JSON.stringify(mobileChrome),
      });
      const mobileRule = await page.evaluate(() => {
        const item = document.querySelector('[data-nav-inner].is-open .primary-nav__list-item');
        if (!item) return null;
        const cs = getComputedStyle(item);
        return { width: cs.borderTopWidth, color: cs.borderTopColor, style: cs.borderTopStyle };
      });
      log({
        ...tag,
        check: 'divider-open-color',
        ok:
          mobileChrome.panelVisible &&
          mobileChrome.headerBorder === '0px' &&
          mobileChrome.barBorder === '0px' &&
          mobileRule?.width === '1px' &&
          mobileRule?.color === SLATE_2,
        detail: JSON.stringify({ ...mobileChrome, mobileRule }),
      });
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

      if (pg.name === 'home') {
        await page.evaluate(() => window.scrollTo(0, 600));
        await page.waitForTimeout(200);
        const typeScrolled = await readTypeChrome(page);
        log({
          ...tag,
          check: 'tel-matches-menu-link-scrolled',
          ok:
            typeScrolled.tel.fontFamily === typeScrolled.menu.fontFamily &&
            typeScrolled.tel.fontSize === typeScrolled.menu.fontSize &&
            typeScrolled.tel.fontWeight === typeScrolled.menu.fontWeight &&
            typeScrolled.tel.color === typeScrolled.menu.color &&
            typeScrolled.tel.textDecorationLine === typeScrolled.menu.textDecorationLine,
          detail: JSON.stringify(typeScrolled),
        });
        const filtersScrolled = await readFilters(page);
        log({
          ...tag,
          check: 'overlay-blur-5px-scrolled',
          ok: isBlur5(filtersScrolled.overlay?.backdropFilter) && isFilterNone(filtersScrolled.header?.backdropFilter),
          detail: JSON.stringify(filtersScrolled),
        });
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(150);
      }
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

const sitemapPaths = async () => {
  const paths = new Set();
  try {
    const indexXml = await fetch(`${BASE}/sitemap-index.xml`).then((r) => r.text());
    let maps = parseSitemapLocs(indexXml).filter((u) => /sitemap/i.test(u));
    if (!maps.length) maps = [`${BASE}/sitemap-0.xml`];
    if (indexXml.includes('<url>')) {
      for (const loc of parseSitemapLocs(indexXml)) {
        try {
          paths.add(new URL(loc).pathname);
        } catch {
          paths.add(loc);
        }
      }
    }
    for (const map of maps) {
      const url = map.startsWith('http') ? map.replace(/^https?:\/\/[^/]+/, BASE) : `${BASE}${map}`;
      const xml = await fetch(url).then((r) => r.text()).catch(() => '');
      for (const loc of parseSitemapLocs(xml)) {
        try {
          paths.add(new URL(loc).pathname);
        } catch {
          paths.add(loc);
        }
      }
    }
  } catch (err) {
    console.log(`WARN sitemap crawl: ${err}`);
  }
  paths.add('/');
  paths.add('/about');
  paths.add('/404');
  return [...paths];
};

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const routes = await sitemapPaths();
  log({
    vp: 'all',
    page: 'sitemap',
    check: 'site-cta-route-count',
    ok: routes.length > 2,
    detail: `routes=${routes.length}`,
  });
  for (const route of routes) {
    const candidates = route.endsWith('.html') ? [route] : [route, `${route === '/' ? '/index.html' : `${route}.html`}`];
    let used = route;
    let loaded = false;
    for (const candidate of candidates) {
      const res = await page.goto(`${BASE}${candidate}`, { waitUntil: 'domcontentloaded' }).catch(() => null);
      if (res && res.ok()) {
        used = candidate;
        loaded = true;
        break;
      }
    }
    const count = loaded ? await page.locator('[data-site-cta]').count() : -1;
    const beforeFooter = loaded
      ? await page.evaluate(() => {
          const cta = document.querySelector('[data-site-cta]');
          const footer = document.querySelector('.site-footer');
          return Boolean(cta && footer && cta.nextElementSibling === footer);
        })
      : false;
    log({
      vp: 'all',
      page: used,
      check: 'site-cta-once-every-page',
      ok: loaded && count === 1 && beforeFooter,
      detail: `count=${count} beforeFooter=${beforeFooter} loaded=${loaded}`,
    });
  }
  await context.close();
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
