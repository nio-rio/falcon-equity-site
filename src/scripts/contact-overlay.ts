/** Contact panel. There is no contact page: any [data-contact-open] element
 *  (the header's Our Firm → Contact item, and anything added later) opens the
 *  right-hand panel instead. Closes on the cross, the scrim, and Escape; focus
 *  goes back to whatever opened it.
 *
 *  Scroll lock mirrors nav.ts rather than sharing it: html.has-scroll-lock plus
 *  wheel / touch / key suppression and a scroll hold, so a scrolled document
 *  does not become the containing block for position: fixed. If the mobile
 *  drawer is open when the panel opens, the drawer is closed first (and its
 *  lock released) so the two locks never fight. */

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const SCROLL_KEYS = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Spacebar'];

export function initContactOverlay() {
  const root = document.querySelector<HTMLElement>('[data-contact-overlay]');
  const panel = root?.querySelector<HTMLElement>('[data-contact-panel]');
  if (!root || !panel) return;

  const closeButton = root.querySelector<HTMLElement>('.contact-overlay__close');

  let isOpen = false;
  let lastFocus: HTMLElement | null = null;
  let lockedHere = false;
  let lockY = 0;

  const inPanel = (target: EventTarget | null) =>
    target instanceof Element && !!target.closest('[data-contact-panel]');

  const preventPointerScroll = (e: Event) => {
    if (inPanel(e.target)) return;
    e.preventDefault();
  };

  const preventScrollKeys = (e: KeyboardEvent) => {
    if (!SCROLL_KEYS.includes(e.key)) return;
    if (e.target instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (inPanel(e.target)) return;
    e.preventDefault();
  };

  const holdScroll = () => {
    if (window.scrollY === lockY) return;
    window.scrollTo({ top: lockY, left: 0, behavior: 'auto' });
  };

  const lockScroll = () => {
    const html = document.documentElement;
    // The nav drawer may already hold the lock; only release what we took.
    if (html.classList.contains('has-scroll-lock')) return;
    lockedHere = true;
    lockY = window.scrollY;
    html.classList.add('has-scroll-lock');
    window.addEventListener('wheel', preventPointerScroll, { passive: false });
    window.addEventListener('touchmove', preventPointerScroll, { passive: false });
    window.addEventListener('keydown', preventScrollKeys);
    window.addEventListener('scroll', holdScroll, { passive: true });
  };

  const unlockScroll = () => {
    if (!lockedHere) return;
    lockedHere = false;
    document.documentElement.classList.remove('has-scroll-lock');
    window.removeEventListener('wheel', preventPointerScroll);
    window.removeEventListener('touchmove', preventPointerScroll);
    window.removeEventListener('keydown', preventScrollKeys);
    window.removeEventListener('scroll', holdScroll);
  };

  /** The header's mobile drawer, when open, owns the scrollbar and the focus
   *  trap. Close it through its own toggle so nav.ts stays in charge. */
  const closeMobileDrawer = () => {
    const burger = document.querySelector<HTMLElement>('[data-mobile-toggle][aria-expanded="true"]');
    burger?.click();
  };

  const focusables = () =>
    [...panel.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => {
      const cs = getComputedStyle(el);
      return cs.display !== 'none' && cs.visibility !== 'hidden';
    });

  const open = (trigger?: HTMLElement | null) => {
    if (isOpen) return;
    isOpen = true;
    lastFocus = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);

    root.removeAttribute('inert');
    // Force the closed transform to be the starting frame before animating.
    void root.offsetWidth;
    root.classList.add('is-open');
    lockScroll();
    (closeButton ?? panel).focus({ preventScroll: true });
  };

  const close = () => {
    if (!isOpen) return;
    isOpen = false;
    root.classList.remove('is-open');
    unlockScroll();

    const target = lastFocus;
    lastFocus = null;
    target?.focus({ preventScroll: true });

    // Keep it out of the tab order once the slide-out has finished.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => {
      if (!isOpen) root.setAttribute('inert', '');
    }, reduce ? 0 : 520);
  };

  document.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) return;
    const opener = e.target.closest<HTMLElement>('[data-contact-open]');
    if (opener) {
      e.preventDefault();
      if (opener.closest('[data-nav-inner]')) closeMobileDrawer();
      open(opener);
      return;
    }
    if (e.target.closest('[data-contact-close]')) {
      e.preventDefault();
      close();
    }
  });

  document.addEventListener(
    'keydown',
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const pool = focusables();
      if (!pool.length) return;
      const first = pool[0];
      const last = pool[pool.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    true,
  );

  // /contact redirects to /#contact, so an old link or bookmark lands with the
  // panel already open.
  if (window.location.hash === '#contact') open(null);
}

initContactOverlay();
