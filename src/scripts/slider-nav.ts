import gsap from 'gsap';

/**
 * Shared slider navigation behaviour (arrows + dots + the activation ring).
 *
 * Every slider that renders `src/components/SliderNav.astro` gets its dots and
 * ring from here — the blog slider (six service pages + retail) and the home
 * testimonial slider. One implementation, so the interaction cannot drift.
 *
 * Hooks (set by the component):
 *   [data-slider-prev] / [data-slider-next] / [data-slider-dot="i"]
 */

/** Reference ring draw: 0.9s, ease-out — measured off the reference capture. */
export const RING_DRAW_MS = 900;

const ringState = new WeakMap<Element, number>();

const dotsOf = (slider: Element) => [
  ...slider.querySelectorAll<HTMLButtonElement>('[data-slider-dot]'),
];

/**
 * Move the active state (and draw the ring) to `active`.
 *
 * Call it when a transition STARTS and again when it finishes; the internal
 * guard makes the second call a no-op, so the draw never restarts mid-way.
 * The first call for a slider paints the ring complete without animating, so a
 * freshly loaded page never plays a draw it did not earn.
 */
export function syncSliderNav(
  slider: Element,
  active: number,
  opts: { reduce?: boolean } = {},
): void {
  const dots = dotsOf(slider);
  if (!dots.length) return;

  const previous = ringState.get(slider);
  if (previous === active) return;
  ringState.set(slider, active);
  const firstPaint = previous === undefined;

  dots.forEach((dot, i) => {
    const on = i === active;
    dot.classList.toggle('is-active', on);
    dot.parentElement?.classList.toggle('is-active', on);
    if (on) dot.setAttribute('aria-current', 'true');
    else dot.removeAttribute('aria-current');

    const ring = dot.querySelector<SVGCircleElement>('circle');
    if (!ring) return;
    const circumference = Number(ring.dataset.circumference || 0);
    gsap.killTweensOf(ring);

    if (!on) {
      gsap.set(ring, { strokeDashoffset: circumference });
    } else if (firstPaint || opts.reduce) {
      gsap.set(ring, { strokeDashoffset: 0 });
    } else {
      gsap.fromTo(
        ring,
        { strokeDashoffset: circumference },
        { strokeDashoffset: 0, duration: RING_DRAW_MS / 1000, ease: 'power2.out' },
      );
    }
  });
}

/** Wire the two arrows. Returns a cleanup for the caller. */
export function bindSliderNavArrows(
  slider: Element,
  onPrev: () => void,
  onNext: () => void,
): () => void {
  const prev = slider.querySelector<HTMLButtonElement>('[data-slider-prev]');
  const next = slider.querySelector<HTMLButtonElement>('[data-slider-next]');
  prev?.addEventListener('click', onPrev);
  next?.addEventListener('click', onNext);
  return () => {
    prev?.removeEventListener('click', onPrev);
    next?.removeEventListener('click', onNext);
  };
}

/** Wire the dots to an index. Returns a cleanup for the caller. */
export function bindSliderNavDots(
  slider: Element,
  onSelect: (index: number) => void,
): () => void {
  const bound = dotsOf(slider).map((dot, i) => {
    const handler = () => onSelect(i);
    dot.addEventListener('click', handler);
    return { dot, handler };
  });
  return () => {
    bound.forEach(({ dot, handler }) => dot.removeEventListener('click', handler));
  };
}

/** Drop the remembered index and any running ring tweens (rebind safety). */
export function resetSliderNav(slider: Element): void {
  ringState.delete(slider);
  slider.querySelectorAll('circle').forEach((ring) => gsap.killTweensOf(ring));
}
