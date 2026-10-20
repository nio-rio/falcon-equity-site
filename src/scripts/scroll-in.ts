import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __pilotRevealReady?: boolean;
  }
}

/** Measured from blackstone-v2 frontend.js on BXCI / inner pages. */
const START = '50% 90%';
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
      if (items.length) {
        animated.push(...items);
        gsap.set(items, { autoAlpha: 0, y: 20 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: START,
              toggleActions: TOGGLE,
            },
          })
          .to(items, {
            autoAlpha: 1,
            y: 0,
            duration: DURATION,
            stagger: STAGGER,
            ease: 'power1.out',
          });
      }

      const lines = [...section.querySelectorAll<HTMLElement>('[data-reveal-line]')];
      const stats = [...section.querySelectorAll<HTMLElement>('[data-reveal-stat]')];
      const medias = [...section.querySelectorAll<HTMLElement>('[data-reveal-media]')];
      if (!lines.length && !stats.length && !medias.length) return;

      ScrollTrigger.create({
        trigger: section,
        start: section.dataset.revealStart || START,
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
