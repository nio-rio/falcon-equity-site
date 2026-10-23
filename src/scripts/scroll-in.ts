import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __pilotRevealReady?: boolean;
  }
}

/** Home default: section top vs 90% of the viewport. Plays once. */
const START = 'top 90%';
const TOGGLE = 'play none none none';
const DURATION = 0.8;
const STAGGER = 0.4;

const armCurtain = (media: HTMLElement) => {
  if (media.classList.contains('is-on')) return;
  let curtain = media.querySelector<HTMLElement>('.pilot-reveal-curtain');
  if (!curtain) {
    curtain = document.createElement('span');
    curtain.className = 'pilot-reveal-curtain';
    curtain.setAttribute('aria-hidden', 'true');
    media.insertBefore(curtain, media.firstChild);
  }
  media.classList.add('is-on');
  curtain.classList.add('is-on');
};

const sectionStart = (section: HTMLElement) => section.dataset.revealStart || START;

/** Optional per-section fade length, e.g. the inner hero's quicker 0.55s. */
const sectionDuration = (section: HTMLElement) => {
  const raw = Number.parseFloat(section.dataset.revealDuration || '');
  return Number.isFinite(raw) && raw > 0 ? raw : DURATION;
};

const sectionStagger = (section: HTMLElement) => {
  const raw = Number.parseFloat(section.dataset.revealStagger || '');
  return Number.isFinite(raw) && raw >= 0 ? raw : STAGGER;
};

export function initScrollIn(root: ParentNode = document) {
  window.__pilotRevealReady = true;
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', () => {
    document.documentElement.classList.remove('has-js');
    root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.set(el, { clearProps: 'visibility,opacity,transform' });
    });
  });
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    document.documentElement.classList.add('has-js');
    const sections = [...root.querySelectorAll<HTMLElement>('[data-reveal-root]')];
    const animated: HTMLElement[] = [];
    sections.forEach((section) => {
      const items = [...section.querySelectorAll<HTMLElement>(':scope [data-reveal]')];
      const start = sectionStart(section);
      if (items.length) {
        animated.push(...items);
        gsap.set(items, { autoAlpha: 0, y: 20 });
        const lead = items.filter((el) => !el.hasAttribute('data-reveal-after'));
        const follow = items.filter((el) => el.hasAttribute('data-reveal-after'));
        const tween = {
          autoAlpha: 1,
          y: 0,
          duration: sectionDuration(section),
          stagger: sectionStagger(section),
          ease: 'power1.out',
        };
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start,
            toggleActions: TOGGLE,
          },
        });
        if (lead.length) tl.to(lead, { ...tween });
        if (follow.length) tl.to(follow, { ...tween });
      }

      const lines = [...section.querySelectorAll<HTMLElement>('[data-reveal-line]')];
      const stats = [...section.querySelectorAll<HTMLElement>('[data-reveal-stat]')];
      const medias = [...section.querySelectorAll<HTMLElement>('[data-reveal-media]')];
      if (!lines.length && !stats.length && !medias.length) return;

      ScrollTrigger.create({
        trigger: section,
        start,
        toggleActions: TOGGLE,
        onEnter: () => {
          lines.forEach((el) => el.classList.add('is-active'));
          stats.forEach((el) => el.classList.add('is-active'));
          medias.forEach(armCurtain);
        },
      });
    });

    return () => {
      gsap.set(animated, { clearProps: 'visibility,opacity,transform' });
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger instanceof HTMLElement && st.trigger.hasAttribute('data-reveal-root')) {
          st.kill();
        }
      });
    };
  });
}

initScrollIn();
