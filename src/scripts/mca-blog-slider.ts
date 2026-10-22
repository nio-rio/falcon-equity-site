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

  bindSwipe(slider, (dir) => go(dir));

  paint(index, false);
  if (reduceMotion()) slider.setAttribute('data-mca-blog-reduce', '');
}

const AXIS_PX = 8;

function bindSwipe(slider: HTMLElement, onSwipe: (dir: 1 | -1) => void) {
  let startX = 0;
  let startY = 0;
  let tracking = false;
  let axis: 'x' | 'y' | null = null;
  let pointerId: number | null = null;

  const fromControl = (target: EventTarget | null) =>
    target instanceof Element && Boolean(target.closest('button'));

  const begin = (x: number, y: number) => {
    tracking = true;
    axis = null;
    startX = x;
    startY = y;
  };

  const move = (x: number, y: number, e: Event) => {
    if (!tracking) return;
    const dx = x - startX;
    const dy = y - startY;
    if (!axis && (Math.abs(dx) >= AXIS_PX || Math.abs(dy) >= AXIS_PX)) {
      axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    }
    if (axis === 'x') e.preventDefault();
  };

  const finish = (x: number, y: number) => {
    if (!tracking) return;
    const dx = x - startX;
    const dy = y - startY;
    const horizontal = axis === 'x' || (axis === null && Math.abs(dx) >= SWIPE_PX && Math.abs(dx) > Math.abs(dy));
    tracking = false;
    axis = null;
    pointerId = null;
    if (!horizontal || Math.abs(dx) < SWIPE_PX) return;
    onSwipe(dx < 0 ? 1 : -1);
    const swallow = (ev: Event) => {
      ev.preventDefault();
      ev.stopPropagation();
      slider.removeEventListener('click', swallow, true);
    };
    slider.addEventListener('click', swallow, true);
    window.setTimeout(() => slider.removeEventListener('click', swallow, true), 400);
  };

  const cancel = () => {
    tracking = false;
    axis = null;
    pointerId = null;
  };

  slider.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches.length !== 1 || fromControl(e.target)) return;
      begin(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: true },
  );
  slider.addEventListener(
    'touchmove',
    (e) => {
      if (!tracking || e.touches.length !== 1) return;
      move(e.touches[0].clientX, e.touches[0].clientY, e);
    },
    { passive: false },
  );
  slider.addEventListener(
    'touchend',
    (e) => {
      const t = e.changedTouches[0];
      if (t) finish(t.clientX, t.clientY);
      else cancel();
    },
    { passive: true },
  );
  slider.addEventListener('touchcancel', cancel, { passive: true });

  slider.addEventListener(
    'pointerdown',
    (e) => {
      if (e.pointerType === 'touch') return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (fromControl(e.target)) return;
      pointerId = e.pointerId;
      begin(e.clientX, e.clientY);
    },
    { passive: true },
  );
  slider.addEventListener(
    'pointermove',
    (e) => {
      if (!tracking || e.pointerType === 'touch' || e.pointerId !== pointerId) return;
      move(e.clientX, e.clientY, e);
    },
    { passive: false },
  );
  slider.addEventListener(
    'pointerup',
    (e) => {
      if (e.pointerType === 'touch' || e.pointerId !== pointerId) return;
      finish(e.clientX, e.clientY);
    },
    { passive: true },
  );
  slider.addEventListener(
    'pointercancel',
    (e) => {
      if (e.pointerType === 'touch' || e.pointerId !== pointerId) return;
      cancel();
    },
    { passive: true },
  );
}
