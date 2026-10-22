const SWIPE_PX = 40;

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function bindMcaBlogSlider(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-mca-blog-slider]').forEach(setup);
}

function setup(slider: HTMLElement) {
  const copies = [...slider.querySelectorAll<HTMLElement>('[data-mca-blog-copy-slide]')];
  const media = [...slider.querySelectorAll<HTMLElement>('[data-mca-blog-media-slide]')];
  const prev = slider.querySelector<HTMLButtonElement>('[data-mca-blog-prev]');
  const next = slider.querySelector<HTMLButtonElement>('[data-mca-blog-next]');
  const live = slider.querySelector<HTMLElement>('[data-mca-blog-live]');
  const count = Math.min(copies.length, media.length);
  if (count < 1) return;

  let index = Math.max(
    0,
    copies.findIndex((el) => el.classList.contains('is-active')),
  );
  if (index < 0) index = 0;

  const titleOf = (i: number) => copies[i]?.querySelector('.mca-blog-title')?.textContent?.trim() || `Article ${i + 1}`;

  const paint = (i: number, announce: boolean) => {
    index = ((i % count) + count) % count;
    copies.forEach((el, n) => {
      const on = n === index;
      el.classList.toggle('is-active', on);
      el.toggleAttribute('hidden', !on);
      el.setAttribute('aria-hidden', String(!on));
    });
    media.forEach((el, n) => {
      const on = n === index;
      el.classList.toggle('is-active', on);
      el.toggleAttribute('hidden', !on);
      el.setAttribute('aria-hidden', String(!on));
    });
    slider.setAttribute('data-mca-blog-index', String(index));
    if (prev) prev.disabled = count < 2;
    if (next) next.disabled = count < 2;
    if (announce && live) live.textContent = `${titleOf(index)}, ${index + 1} of ${count}`;
  };

  const go = (delta: number) => {
    if (count < 2) return;
    paint(index + delta, true);
  };

  prev?.addEventListener('click', () => go(-1));
  next?.addEventListener('click', () => go(1));

  slider.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    }
  });

  let startX = 0;
  let startY = 0;
  let tracking = false;
  slider.addEventListener(
    'pointerdown',
    (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.target instanceof Element && e.target.closest('a, button')) return;
      tracking = true;
      startX = e.clientX;
      startY = e.clientY;
      slider.setPointerCapture?.(e.pointerId);
    },
    { passive: true },
  );
  slider.addEventListener(
    'pointerup',
    (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < Math.abs(dy)) return;
      go(dx < 0 ? 1 : -1);
    },
    { passive: true },
  );
  slider.addEventListener(
    'pointercancel',
    () => {
      tracking = false;
    },
    { passive: true },
  );

  paint(index, false);
  if (reduceMotion()) slider.setAttribute('data-mca-blog-reduce', '');
}
