import gsap from 'gsap';

/** Timings from Osmo Mega Navigation (Directional Hover). */
export const NAV_DUR = {
  bgMorph: 0.4,
  contentIn: 0.3,
  contentOut: 0.2,
  stagger: 0.25,
  backdropIn: 0.3,
  backdropOut: 0.2,
  openScale: 0.35,
  closeScale: 0.25,
} as const;

export const NAV_HOVER_ENTER = 120;
export const NAV_HOVER_LEAVE = 150;

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function initNav() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktopMq = window.matchMedia('(min-width: 80em)');
  const d = (sec: number) => (reduce.matches ? 0 : sec);

  const menuWrap = document.querySelector<HTMLElement>('[data-menu-wrap]');
  const header = document.querySelector<HTMLElement>('[data-header]');
  const navList = document.querySelector<HTMLElement>('[data-nav-list]');
  const dropWrapper = document.querySelector<HTMLElement>('[data-dropdown-wrapper]');
  const dropContainer = document.querySelector<HTMLElement>('[data-dropdown-container]');
  const backdrop = document.querySelector<HTMLElement>('[data-menu-backdrop], [data-nav-backdrop]');
  if (backdrop) document.body.appendChild(backdrop);
  const toggles = [...document.querySelectorAll<HTMLElement>('[data-dropdown-toggle]')];
  const panels = [...document.querySelectorAll<HTMLElement>('[data-nav-content]')];
  const items = [...document.querySelectorAll<HTMLElement>('[data-nav-item]')];
  const burger = document.querySelector<HTMLButtonElement>('[data-burger-toggle], [data-mobile-toggle]');
  const backBtn = document.querySelector<HTMLElement>('[data-mobile-back]');
  const logo = document.querySelector<HTMLElement>('[data-menu-logo]');
  const inner = document.querySelector<HTMLElement>('[data-nav-inner]');
  const isHomeHeader = header?.hasAttribute('data-home') ?? false;

  const state = {
    isOpen: false,
    activePanel: null as string | null,
    isMobile: !desktopMq.matches,
    mobileMenuOpen: false,
    mobilePanelActive: null as string | null,
    hoverTimer: 0,
    leaveTimer: 0,
    tl: null as gsap.core.Timeline | null,
    mobileTl: null as gsap.core.Timeline | null,
    mobilePanelTl: null as gsap.core.Timeline | null,
    lockY: 0,
    trap: null as ((e: KeyboardEvent) => void) | null,
  };

  const getPanel = (name: string | null) =>
    name ? document.querySelector<HTMLElement>(`[data-nav-content="${name}"]`) : null;
  const getToggle = (name: string | null) =>
    name ? document.querySelector<HTMLElement>(`[data-dropdown-toggle="${name}"]`) : null;
  const getFade = (el: HTMLElement | null) => (el ? el.querySelectorAll<HTMLElement>('[data-menu-fade]') : []);
  const getNavItems = () => inner?.querySelectorAll<HTMLElement>(':scope > [data-nav-list] [data-nav-list-item], :scope > [data-nav-list-item]') ?? [];
  const getIndex = (name: string | null) => {
    const t = getToggle(name);
    return t ? toggles.indexOf(t) : -1;
  };
  const stagger = (n: number) => (n <= 1 ? 0 : { amount: d(NAV_DUR.stagger) });

  const clearTimers = () => {
    window.clearTimeout(state.hoverTimer);
    window.clearTimeout(state.leaveTimer);
    state.hoverTimer = state.leaveTimer = 0;
  };

  const killTl = (key: 'tl' | 'mobileTl' | 'mobilePanelTl') => {
    state[key]?.kill();
    state[key] = null;
  };

  const killDropdown = () => {
    killTl('tl');
    if (dropContainer) gsap.killTweensOf(dropContainer);
    if (backdrop) gsap.killTweensOf(backdrop);
    panels.forEach((p) => {
      gsap.killTweensOf(p);
      gsap.killTweensOf(getFade(p));
    });
  };

  const eventInDrawer = (target: EventTarget | null) =>
    state.isMobile && target instanceof Element && !!target.closest('[data-nav-inner]');

  const preventScroll = (e: Event) => {
    if (eventInDrawer(e.target)) return;
    e.preventDefault();
  };

  const preventScrollKeys = (e: KeyboardEvent) => {
    if (!['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Spacebar'].includes(e.key)) return;
    if (e.target instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (eventInDrawer(e.target)) return;
    e.preventDefault();
  };

  const holdScroll = () => {
    if (window.scrollY === state.lockY) return;
    window.scrollTo({ top: state.lockY, left: 0, behavior: 'auto' });
  };

  const setScrollLock = (lock: boolean) => {
    const root = document.documentElement;
    if (lock) {
      if (root.classList.contains('has-scroll-lock')) return;
      state.lockY = window.scrollY;
      root.classList.add('has-scroll-lock');
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventScrollKeys);
      window.addEventListener('scroll', holdScroll);
      return;
    }
    root.classList.remove('has-scroll-lock');
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
    window.removeEventListener('keydown', preventScrollKeys);
    window.removeEventListener('scroll', holdScroll);
  };

  const setBackdropEl = (on: boolean) => {
    if (!backdrop) return;
    backdrop.classList.toggle('primary-nav__backdrop--hidden', !on);
    backdrop.hidden = !on;
  };

  const setBurger = (open: boolean) => {
    if (!burger) return;
    burger.setAttribute('aria-expanded', String(open));
    const label = burger.querySelector('[data-mobile-label]');
    if (label) label.textContent = open ? 'Close menu' : 'Open menu';
  };

  const syncItemOpen = (name: string | null) => {
    items.forEach((item) => {
      const trigger = item.querySelector<HTMLElement>('[data-dropdown-toggle]');
      const id = trigger?.getAttribute('data-dropdown-toggle');
      item.classList.toggle('is-open', Boolean(name && id === name));
    });
    toggles.forEach((t) => t.setAttribute('aria-expanded', String(t.getAttribute('data-dropdown-toggle') === name)));
    panels.forEach((p) => p.setAttribute('aria-hidden', String(p.getAttribute('data-nav-content') !== name)));
  };

  const focusablesIn = (root: ParentNode) =>
    [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => {
      if (el.closest('[hidden]')) return false;
      const cs = getComputedStyle(el);
      return cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0;
    });

  const setFocusTrap = (on: boolean) => {
    if (state.trap) document.removeEventListener('keydown', state.trap, true);
    state.trap = null;
    if (!on || !header) return;
    state.trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !state.isMobile) return;
      const pool = focusablesIn(header);
      if (!pool.length) return;
      const first = pool[0];
      const last = pool[pool.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', state.trap, true);
  };

  const measurePanel = (name: string) => {
    const el = getPanel(name);
    if (!el) return 0;
    const prev = { visibility: el.style.visibility, opacity: el.style.opacity, pointerEvents: el.style.pointerEvents };
    Object.assign(el.style, { visibility: 'visible', opacity: '0', pointerEvents: 'none' });
    const h = Math.max(el.getBoundingClientRect().height, el.scrollHeight);
    Object.assign(el.style, prev);
    return h;
  };

  const resetDesktop = () => {
    panels.forEach((p) => {
      gsap.set(p, { visibility: 'hidden', opacity: 0, pointerEvents: 'none', x: 0, y: 0, xPercent: 0 });
      gsap.set(getFade(p), { autoAlpha: 0, x: 0, y: 0, xPercent: 0 });
    });
    if (dropContainer) gsap.set(dropContainer, { height: 0, clearProps: 'transform' });
    setBackdropEl(false);
    menuWrap?.setAttribute('data-menu-open', 'false');
    header?.classList.remove('is-open');
    syncItemOpen(null);
    setScrollLock(false);
  };

  const setupMobile = () => {
    panels.forEach((p) => {
      gsap.set(p, { autoAlpha: 0, xPercent: 0, visibility: 'visible', pointerEvents: 'none' });
      gsap.set(getFade(p), { xPercent: 20, autoAlpha: 0 });
    });
    gsap.set(getNavItems(), { xPercent: 0, y: 0, autoAlpha: 1 });
    if (navList) gsap.set(navList, { autoAlpha: 0, x: 0 });
    if (backBtn) gsap.set(backBtn, { autoAlpha: 0, pointerEvents: 'none' });
    if (logo) gsap.set(logo, { autoAlpha: 1 });
    if (dropContainer) gsap.set(dropContainer, { clearProps: 'height' });
    setBackdropEl(false);
    inner?.classList.remove('is-drilled', 'is-open');
    header?.classList.remove('is-drilled', 'is-open');
    syncItemOpen(null);
  };

  const openDropdown = (panelName: string) => {
    if (state.isOpen && state.activePanel === panelName) return;
    if (state.isOpen && state.activePanel) return switchPanel(state.activePanel, panelName);

    const height = measurePanel(panelName);
    const el = getPanel(panelName);
    if (!el || !height || !dropContainer) return;

    killDropdown();
    resetDesktop();

    state.isOpen = true;
    state.activePanel = panelName;
    menuWrap?.setAttribute('data-menu-open', 'true');
    header?.classList.add('is-open');
    syncItemOpen(panelName);
    setBackdropEl(true);
    setScrollLock(true);

    const fade = getFade(el);
    gsap.set(dropContainer, { height: 0 });
    const tl = gsap.timeline();
    state.tl = tl;
    tl.to(dropContainer, { height, duration: d(NAV_DUR.openScale), ease: 'power3.out' }, 0);
    tl.set(el, { visibility: 'visible', opacity: 1, pointerEvents: 'auto' }, d(0.05));
    if (fade.length) {
      tl.fromTo(
        fade,
        { autoAlpha: 0, y: 8 },
        { autoAlpha: 1, y: 0, duration: d(NAV_DUR.contentIn), stagger: stagger(fade.length), ease: 'power3.out' },
        d(0.1),
      );
    }
  };

  const closeDropdown = (escaped = false) => {
    if (!state.isOpen) return;
    const el = getPanel(state.activePanel);
    const fade = el ? getFade(el) : [];
    if (escaped) {
      const item = items.find((i) => i.querySelector(`[data-dropdown-toggle="${state.activePanel}"]`));
      item?.classList.add('is-escaped');
    }
    setScrollLock(false);
    setBackdropEl(false);
    killDropdown();
    const tl = gsap.timeline({
      onComplete() {
        state.isOpen = false;
        state.activePanel = null;
        state.tl = null;
        resetDesktop();
      },
    });
    state.tl = tl;
    if (fade.length) tl.to(fade, { autoAlpha: 0, y: -4, duration: d(NAV_DUR.contentOut * 0.7), ease: 'power2.in' }, 0);
    if (dropContainer) tl.to(dropContainer, { height: 0, duration: d(NAV_DUR.closeScale), ease: 'power2.in' }, d(0.05));
    if (el) tl.set(el, { visibility: 'hidden', opacity: 0, pointerEvents: 'none' });
  };

  const switchPanel = (fromName: string, toName: string) => {
    const dir = getIndex(toName) > getIndex(fromName) ? 1 : -1;
    const fromEl = getPanel(fromName);
    const toEl = getPanel(toName);
    if (!fromEl || !toEl || !dropContainer) return;
    const toHeight = measurePanel(toName);
    if (!toHeight) return;

    killDropdown();
    panels.forEach((p) => {
      gsap.set(p, { visibility: 'hidden', opacity: 0, pointerEvents: 'none', xPercent: 0 });
      gsap.set(getFade(p), { autoAlpha: 0, x: 0, y: 0 });
    });
    const fromFade = getFade(fromEl);
    const toFade = getFade(toEl);
    gsap.set(fromEl, { visibility: 'visible', opacity: 1, pointerEvents: 'auto', x: 0 });
    if (fromFade.length) gsap.set(fromFade, { autoAlpha: 1, x: 0, y: 0 });

    state.activePanel = toName;
    syncItemOpen(toName);

    const xOut = dir * -30;
    const xIn = dir * 30;
    const tl = gsap.timeline();
    state.tl = tl;
    if (fromFade.length) tl.to(fromFade, { autoAlpha: 0, x: xOut, duration: d(NAV_DUR.contentOut), ease: 'power2.in' }, 0);
    tl.set(fromEl, { visibility: 'hidden', opacity: 0, pointerEvents: 'none', xPercent: 0 }, d(NAV_DUR.contentOut));
    if (fromFade.length) tl.set(fromFade, { x: 0 }, d(NAV_DUR.contentOut));
    tl.to(dropContainer, { height: toHeight, duration: d(NAV_DUR.bgMorph), ease: 'power3.out' }, d(0.05));
    tl.set(toEl, { visibility: 'visible', opacity: 1, pointerEvents: 'auto', xPercent: 0 }, d(NAV_DUR.contentOut * 0.5));
    if (toFade.length) {
      tl.fromTo(
        toFade,
        { autoAlpha: 0, x: xIn },
        { autoAlpha: 1, x: 0, duration: d(NAV_DUR.contentIn), stagger: stagger(toFade.length), ease: 'power3.out' },
        d(NAV_DUR.contentOut * 0.6),
      );
    }
  };

  const openMobileMenu = () => {
    if (!burger || !inner) return;
    killTl('mobileTl');
    state.mobileMenuOpen = true;
    menuWrap?.setAttribute('data-menu-open', 'true');
    header?.classList.add('is-open');
    inner.classList.add('is-open');
    setBurger(true);
    setBackdropEl(true);
    setScrollLock(true);
    setFocusTrap(true);
    const listItems = getNavItems();
    const tl = gsap.timeline();
    state.mobileTl = tl;
    if (navList) tl.to(navList, { autoAlpha: 1, duration: d(0.3), ease: 'power2.out' }, 0);
    if (listItems.length) {
      tl.fromTo(
        listItems,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: d(0.3), stagger: 0.04, ease: 'power3.out' },
        d(0.15),
      );
    }
  };

  const closeMobileMenu = () => {
    const hadPanel = state.mobilePanelActive;
    const panelEl = hadPanel ? getPanel(hadPanel) : null;
    killTl('mobileTl');
    killTl('mobilePanelTl');
    menuWrap?.setAttribute('data-menu-open', 'false');
    state.mobileMenuOpen = false;
    state.mobilePanelActive = null;
    header?.classList.remove('is-drilled');
    inner?.classList.remove('is-drilled');
    setBurger(false);
    const tl = gsap.timeline({
      onComplete() {
        setBackdropEl(false);
        setScrollLock(false);
        setFocusTrap(false);
        setupMobile();
        state.mobileTl = null;
      },
    });
    state.mobileTl = tl;
    if (hadPanel && panelEl) {
      tl.to(panelEl, { autoAlpha: 0, duration: d(0.3), ease: 'power2.inOut' }, d(0.05));
      if (backBtn) tl.to(backBtn, { autoAlpha: 0, duration: d(0.2), ease: 'power2.in' }, d(0.05));
    }
    if (navList) tl.to(navList, { autoAlpha: 0, duration: d(0.3), ease: 'power2.inOut' }, d(0.05));
  };

  const openMobilePanel = (panelName: string) => {
    const el = getPanel(panelName);
    if (!el) return;
    killTl('mobilePanelTl');
    state.mobilePanelActive = panelName;
    syncItemOpen(panelName);
    inner?.classList.add('is-drilled');
    header?.classList.add('is-drilled');
    const navItems = getNavItems();
    const panelFade = getFade(el);
    const tl = gsap.timeline();
    state.mobilePanelTl = tl;
    if (navItems.length) {
      tl.to(navItems, { xPercent: -10, autoAlpha: 0, duration: d(0.35), stagger: 0.03, ease: 'power2.in' }, 0);
    }
    if (logo) {
      logo.setAttribute('tabindex', '-1');
      tl.to(logo, { autoAlpha: 0, duration: d(0.2), ease: 'power2.in' }, 0);
    }
    if (backBtn) {
      gsap.set(backBtn, { pointerEvents: 'auto' });
      tl.to(backBtn, { autoAlpha: 1, duration: d(0.25), ease: 'power2.inOut' }, d(0.15));
    }
    tl.set(el, { autoAlpha: 1, xPercent: 0, pointerEvents: 'auto', visibility: 'visible' }, d(0.2));
    if (panelFade.length) {
      tl.fromTo(
        panelFade,
        { xPercent: 8, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: d(0.3), stagger: stagger(panelFade.length), ease: 'power3.out' },
        d(0.25),
      );
    }
  };

  const closeMobilePanel = () => {
    if (!state.mobilePanelActive) return;
    const el = getPanel(state.mobilePanelActive);
    if (!el) return;
    killTl('mobilePanelTl');
    state.mobilePanelActive = null;
    inner?.classList.remove('is-drilled');
    header?.classList.remove('is-drilled');
    syncItemOpen(null);
    const navItems = getNavItems();
    const panelFade = getFade(el);
    const tl = gsap.timeline({
      onComplete() {
        state.mobilePanelTl = null;
      },
    });
    state.mobilePanelTl = tl;
    if (panelFade.length) tl.to(el, { xPercent: 20, autoAlpha: 0, duration: d(0.3), ease: 'power2.in' }, 0);
    tl.set(el, { autoAlpha: 0, pointerEvents: 'none' }, d(0.25));
    if (backBtn) tl.to(backBtn, { autoAlpha: 0, pointerEvents: 'none', duration: d(0.2), ease: 'power2.in' }, 0);
    if (logo) {
      logo.removeAttribute('tabindex');
      tl.to(logo, { autoAlpha: 1, duration: d(0.25), ease: 'power2.out' }, d(0.15));
    }
    if (navItems.length) {
      tl.fromTo(
        navItems,
        { xPercent: -20, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: d(0.35), stagger: 0.03, ease: 'power3.out' },
        d(0.25),
      );
    }
  };

  const handleToggleEnter = (e: Event) => {
    if (state.isMobile) return;
    const name = (e.currentTarget as HTMLElement).getAttribute('data-dropdown-toggle');
    if (!name) return;
    window.clearTimeout(state.leaveTimer);
    state.leaveTimer = 0;
    window.clearTimeout(state.hoverTimer);
    state.hoverTimer = window.setTimeout(() => openDropdown(name), state.isOpen || reduce.matches ? 0 : NAV_HOVER_ENTER);
  };

  const handleToggleLeave = () => {
    if (state.isMobile) return;
    window.clearTimeout(state.hoverTimer);
    state.hoverTimer = 0;
    state.leaveTimer = window.setTimeout(() => closeDropdown(), reduce.matches ? 0 : NAV_HOVER_LEAVE);
  };

  const handleWrapperEnter = () => {
    if (state.isMobile) return;
    window.clearTimeout(state.leaveTimer);
    state.leaveTimer = 0;
  };

  const handleWrapperLeave = () => {
    if (state.isMobile) return;
    state.leaveTimer = window.setTimeout(() => closeDropdown(), reduce.matches ? 0 : NAV_HOVER_LEAVE);
  };

  const focusFirstLink = (name: string) => {
    window.setTimeout(() => {
      const link = getPanel(name)?.querySelector<HTMLElement>('a');
      if (!link) return;
      gsap.set(link, { visibility: 'visible' });
      link.focus();
    }, 80);
  };

  toggles.forEach((btn) => {
    btn.addEventListener('mouseenter', handleToggleEnter);
    btn.addEventListener('mouseleave', handleToggleLeave);
    btn.addEventListener('click', (e) => {
      const name = btn.getAttribute('data-dropdown-toggle');
      if (!name) return;
      e.preventDefault();
      if (state.isMobile) {
        if (state.mobileMenuOpen) openMobilePanel(name);
        return;
      }
      if (state.isOpen && state.activePanel === name) closeDropdown();
      else openDropdown(name);
    });
    btn.addEventListener('keydown', (e) => {
      if (state.isMobile) return;
      const name = btn.getAttribute('data-dropdown-toggle');
      if (!name) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (state.isOpen && state.activePanel === name) closeDropdown();
        else {
          openDropdown(name);
          focusFirstLink(name);
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!state.isOpen || state.activePanel !== name) openDropdown(name);
        focusFirstLink(name);
      }
      if (e.key === 'Tab' && !e.shiftKey && state.isOpen && state.activePanel === name) {
        e.preventDefault();
        getPanel(name)?.querySelector<HTMLElement>('a')?.focus();
      }
    });
  });

  dropWrapper?.addEventListener('mouseenter', handleWrapperEnter);
  dropWrapper?.addEventListener('mouseleave', handleWrapperLeave);

  panels.forEach((p) => {
    p.addEventListener('keydown', (e) => {
      if (state.isMobile || !state.isOpen) return;
      const el = getPanel(state.activePanel);
      if (!el) return;
      const links = [...el.querySelectorAll<HTMLElement>('a')];
      const idx = links.indexOf(document.activeElement as HTMLElement);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        links[(idx + 1) % links.length]?.focus();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (idx <= 0) getToggle(state.activePanel)?.focus();
        else links[idx - 1]?.focus();
      }
      if (e.key === 'Tab' && !e.shiftKey && idx === links.length - 1) {
        e.preventDefault();
        const cur = getIndex(state.activePanel);
        const next = cur < toggles.length - 1 ? toggles[cur + 1] : null;
        closeDropdown();
        next?.focus();
      }
      if (e.key === 'Tab' && e.shiftKey && idx === 0) {
        e.preventDefault();
        getToggle(state.activePanel)?.focus();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (state.isMobile) {
      if (state.mobilePanelActive) closeMobilePanel();
      else if (state.mobileMenuOpen) {
        closeMobileMenu();
        burger?.focus();
      }
      return;
    }
    if (state.isOpen) {
      const t = getToggle(state.activePanel);
      closeDropdown(true);
      t?.focus();
    }
  });

  const inOpenChrome = (target: EventTarget | null) =>
    target instanceof Element &&
    Boolean(
      target.closest('[data-header-bar]') ||
        target.closest('[data-dropdown-container]') ||
        target.closest('[data-dropdown-toggle]') ||
        target.closest('[data-nav-content]'),
    );

  document.addEventListener('click', (e) => {
    if (state.isMobile) {
      if (!state.mobileMenuOpen) return;
      if (inOpenChrome(e.target) || (e.target instanceof Element && e.target.closest('[data-nav-inner]'))) return;
      closeMobileMenu();
      return;
    }
    if (!state.isOpen) return;
    if (!inOpenChrome(e.target)) closeDropdown();
  });

  backdrop?.addEventListener('click', () => {
    if (state.isMobile) closeMobileMenu();
    else closeDropdown();
  });

  burger?.addEventListener('click', () => {
    if (state.mobileMenuOpen) closeMobileMenu();
    else openMobileMenu();
  });
  backBtn?.addEventListener('click', closeMobilePanel);

  desktopMq.addEventListener('change', () => {
    const was = state.isMobile;
    state.isMobile = !desktopMq.matches;
    clearTimers();
    killDropdown();
    killTl('mobileTl');
    killTl('mobilePanelTl');
    if (was && !state.isMobile) {
      if (navList) gsap.set(navList, { clearProps: 'all' });
      gsap.set(getNavItems(), { clearProps: 'all' });
      if (backBtn) gsap.set(backBtn, { autoAlpha: 0, pointerEvents: 'none' });
      if (logo) {
        logo.removeAttribute('tabindex');
        gsap.set(logo, { clearProps: 'all' });
      }
      panels.forEach((p) => {
        gsap.set(p, { clearProps: 'all' });
        gsap.set(getFade(p), { clearProps: 'all' });
      });
      state.mobileMenuOpen = false;
      state.mobilePanelActive = null;
      setBurger(false);
      setFocusTrap(false);
      resetDesktop();
    }
    if (!was && state.isMobile) {
      state.isOpen = false;
      state.activePanel = null;
      setupMobile();
    }
  });

  const setCompact = () => {
    const scrolled = window.scrollY > 24;
    header?.classList.toggle('is-compact', scrolled);
    if (isHomeHeader) header?.classList.toggle('is-color-theme-dark', !scrolled);
    items.forEach((item) => item.classList.remove('is-escaped'));
  };
  setCompact();
  window.addEventListener('scroll', setCompact, { passive: true });

  if (state.isMobile) setupMobile();
  else resetDesktop();
}

initNav();
