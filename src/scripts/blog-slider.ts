import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger);

const SWIPE_PX = 40;
const AXIS_PX = 8;
const CLIP_ON = 'circle(75% at 50% 50%)';
const CLIP_OFF = 'circle(0% at 50% 50%)';

type Slide = {
  copy: HTMLElement;
  media: HTMLElement;
  titleEl: HTMLElement | null;
  linkEl: HTMLElement | null;
  imgEl: HTMLElement | null;
  titleSplit: SplitText | null;
};

type WrapCleanup = () => void;

const cleanups = new WeakMap<HTMLElement, WrapCleanup>();

// The slider is a global component (src/components/BlogSlider.astro), so it
// publishes one set of hooks and this binder is its only consumer.
const SEL = {
  slider: '[data-blog-slider]',
  copySlide: '[data-blog-copy-slide]',
  mediaSlide: '[data-blog-media-slide]',
  prev: '[data-blog-prev]',
  next: '[data-blog-next]',
  dot: '[data-blog-dot]',
  live: '[data-blog-live]',
  title: '[data-blog-title]',
  link: '.blog-link, [data-blog-link]',
  img: '[data-blog-img]',
};

export function bindBlogSlider(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>(SEL.slider).forEach(setupWrap);
}

function setupWrap(slider: HTMLElement) {
  cleanups.get(slider)?.();
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', () => bindSlider(slider, true));
  mm.add('(prefers-reduced-motion: no-preference)', () => bindSlider(slider, false));
  cleanups.set(slider, () => mm.revert());
}

function bindSlider(slider: HTMLElement, reduce: boolean) {
  const copies = [...slider.querySelectorAll<HTMLElement>(SEL.copySlide)];
  const media = [...slider.querySelectorAll<HTMLElement>(SEL.mediaSlide)];
  const prev = slider.querySelector<HTMLButtonElement>(SEL.prev);
  const next = slider.querySelector<HTMLButtonElement>(SEL.next);
  const dots = [...slider.querySelectorAll<HTMLButtonElement>(SEL.dot)];
  const live = slider.querySelector<HTMLElement>(SEL.live);
  const count = Math.min(copies.length, media.length);
  if (count < 1) return;

  const canLoop = count > 1;
  const autoplayOn = slider.dataset.autoplay === 'true' && canLoop;
  const durationMs = Number(slider.dataset.autoplayDuration || 5000);
  const duration = Number.isFinite(durationMs) ? durationMs / 1000 : 5;

  let index = Math.max(
    0,
    copies.findIndex((el) => el.classList.contains('is-active')),
  );
  if (index < 0) index = 0;
  let isAnimating = false;
  let inView = false;
  let paused = false;
  let autoplay: gsap.core.Tween | null = null;

  const slides: Slide[] = copies.slice(0, count).map((copy, i) => ({
    copy,
    media: media[i],
    titleEl: copy.querySelector<HTMLElement>(SEL.title),
    linkEl: copy.querySelector<HTMLElement>(SEL.link),
    imgEl: media[i].querySelector<HTMLElement>(SEL.img) || media[i],
    titleSplit: null,
  }));

  const titleOf = (i: number) =>
    slides[i]?.titleEl?.textContent?.trim() || `Article ${i + 1}`;

  const splitVars = (el: HTMLElement): SplitText.Vars => ({
    type: 'lines',
    mask: 'lines',
    linesClass: 'blog-line',
    autoSplit: true,
    onSplit(self) {
      if (isAnimating) return;
      const item = el.closest(SEL.copySlide);
      const on = item?.classList.contains('is-active');
      gsap.set(self.lines, { yPercent: on ? 0 : 110 });
    },
  });

  const splitOne = (el: HTMLElement | null) => {
    if (!el || reduce) return null;
    return SplitText.create(el, splitVars(el));
  };

  const withVisible = (el: HTMLElement, fn: () => void) => {
    const { visibility, opacity } = el.style;
    el.style.visibility = 'visible';
    el.style.opacity = '1';
    fn();
    el.style.visibility = visibility;
    el.style.opacity = opacity;
  };

  const linesOf = (slide: Slide) => [...(slide.titleSplit?.lines ?? [])];

  slides.forEach((slide, i) => {
    const active = i === index;
    slide.copy.removeAttribute('hidden');
    slide.media.removeAttribute('hidden');
    withVisible(slide.copy, () => {
      slide.titleSplit = splitOne(slide.titleEl);
    });
    if (!active) {
      gsap.set(linesOf(slide), { yPercent: 110 });
      if (slide.linkEl) gsap.set(slide.linkEl, { autoAlpha: 0, yPercent: 40 });
    } else if (slide.linkEl) {
      gsap.set(slide.linkEl, { autoAlpha: 1, yPercent: 0 });
    }
    if (slide.imgEl) {
      gsap.set(slide.imgEl, { clipPath: reduce ? 'none' : active ? CLIP_ON : CLIP_OFF });
    }
    gsap.set([slide.copy, slide.media], { autoAlpha: active ? 1 : 0 });
  });

  if (reduce) slider.setAttribute('data-blog-reduce', '');
  else slider.removeAttribute('data-blog-reduce');

  const updateChrome = (announce: boolean) => {
    slides.forEach((slide, i) => {
      const on = i === index;
      slide.copy.classList.toggle('is-active', on);
      slide.media.classList.toggle('is-active', on);
      slide.copy.setAttribute('aria-hidden', String(!on));
      slide.media.setAttribute('aria-hidden', String(!on));
      slide.copy.toggleAttribute('inert', !on);
      slide.media.toggleAttribute('inert', !on);
    });
    dots.forEach((dot, i) => {
      const on = i === index;
      dot.classList.toggle('is-active', on);
      dot.parentElement?.classList.toggle('is-active', on);
      if (on) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    slider.setAttribute('data-blog-index', String(index));
    if (prev) prev.disabled = !canLoop;
    if (next) next.disabled = !canLoop;
    if (announce && live) live.textContent = `${titleOf(index)}, ${index + 1} of ${count}`;
  };

  const stopAutoplay = () => {
    autoplay?.kill();
    autoplay = null;
  };

  const scheduleAutoplay = () => {
    stopAutoplay();
    if (!autoplayOn || reduce || !inView || paused) return;
    autoplay = gsap.delayedCall(duration, () => {
      if (!inView || isAnimating || paused) {
        scheduleAutoplay();
        return;
      }
      goTo(index + 1);
    });
  };

  const goTo = (raw: number) => {
    if (isAnimating || !canLoop) return;
    const nextIndex = ((raw % count) + count) % count;
    if (nextIndex === index) return;
    const outgoing = slides[index];
    const incoming = slides[nextIndex];
    isAnimating = true;
    stopAutoplay();

    const finish = () => {
      gsap.set([outgoing.copy, outgoing.media], { autoAlpha: 0 });
      index = nextIndex;
      updateChrome(true);
      isAnimating = false;
      scheduleAutoplay();
    };

    if (reduce) {
      gsap.set([incoming.copy, incoming.media], { autoAlpha: 1 });
      const tl = gsap.timeline({ onComplete: finish });
      tl.to([outgoing.copy, outgoing.media], { autoAlpha: 0, duration: 0.4, ease: 'power2.out' }, 0);
      tl.fromTo(
        [incoming.copy, incoming.media],
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4, ease: 'power2.out' },
        0,
      );
      return;
    }

    gsap.set([incoming.copy, incoming.media], { autoAlpha: 1 });
    if (incoming.titleEl) incoming.titleSplit?.split(splitVars(incoming.titleEl));
    const inLines = linesOf(incoming);
    const outLines = linesOf(outgoing);
    if (inLines.length) gsap.set(inLines, { yPercent: 110 });
    if (incoming.linkEl) gsap.set(incoming.linkEl, { autoAlpha: 0, yPercent: 40 });

    const tl = gsap.timeline({ onComplete: finish });
    if (outLines.length) {
      tl.to(
        outLines,
        { yPercent: -110, duration: 0.6, ease: 'power4.inOut', stagger: { amount: 0.25 } },
        0,
      );
    }
    if (outgoing.linkEl) {
      tl.to(outgoing.linkEl, { autoAlpha: 0, yPercent: -40, duration: 0.6, ease: 'power4.inOut' }, 0);
    }
    if (outgoing.imgEl) {
      tl.to(outgoing.imgEl, { clipPath: CLIP_OFF, duration: 0.6, ease: 'power4.inOut' }, 0);
    }
    if (inLines.length) {
      tl.to(
        inLines,
        { yPercent: 0, duration: 0.7, ease: 'power4.inOut', stagger: { amount: 0.4 } },
        '>-=0.3',
      );
    }
    if (incoming.linkEl) {
      tl.to(incoming.linkEl, { autoAlpha: 1, yPercent: 0, duration: 0.7, ease: 'power4.inOut' }, '<');
    }
    if (incoming.imgEl) {
      tl.fromTo(
        incoming.imgEl,
        { clipPath: CLIP_OFF },
        { clipPath: CLIP_ON, duration: 0.75, ease: 'power4.inOut' },
        '<',
      );
    }
    tl.set([outgoing.copy, outgoing.media], { autoAlpha: 0 }, '>');
  };

  const onPrev = () => {
    goTo(index - 1);
    scheduleAutoplay();
  };
  const onNext = () => {
    goTo(index + 1);
    scheduleAutoplay();
  };

  const dotHandlers = dots.map((dot, i) => {
    const handler = () => {
      goTo(i);
      scheduleAutoplay();
    };
    dot.addEventListener('click', handler);
    return { dot, handler };
  });

  prev?.addEventListener('click', onPrev);
  next?.addEventListener('click', onNext);

  const onKey = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onNext();
    }
  };
  slider.addEventListener('keydown', onKey);

  const unbindSwipe = bindSwipe(slider, (dir) => {
    if (dir < 0) onPrev();
    else onNext();
  });

  const pause = () => {
    paused = true;
    stopAutoplay();
  };
  const resume = () => {
    paused = false;
    scheduleAutoplay();
  };
  const onFocusOut = (e: FocusEvent) => {
    if (e.relatedTarget instanceof Node && slider.contains(e.relatedTarget)) return;
    resume();
  };
  slider.addEventListener('mouseenter', pause);
  slider.addEventListener('mouseleave', resume);
  slider.addEventListener('focusin', pause);
  slider.addEventListener('focusout', onFocusOut);

  const st = ScrollTrigger.create({
    trigger: slider,
    start: 'top bottom',
    end: 'bottom top',
    onToggle(self) {
      inView = self.isActive;
      if (inView) scheduleAutoplay();
      else stopAutoplay();
    },
  });
  inView = st.isActive;
  if (inView) scheduleAutoplay();
  updateChrome(false);

  return () => {
    stopAutoplay();
    st.kill();
    slider.removeEventListener('keydown', onKey);
    slider.removeEventListener('mouseenter', pause);
    slider.removeEventListener('mouseleave', resume);
    slider.removeEventListener('focusin', pause);
    slider.removeEventListener('focusout', onFocusOut);
    prev?.removeEventListener('click', onPrev);
    next?.removeEventListener('click', onNext);
    dotHandlers.forEach(({ dot, handler }) => dot.removeEventListener('click', handler));
    unbindSwipe();
    slides.forEach((slide) => slide.titleSplit?.revert());
  };
}

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
    const horizontal =
      axis === 'x' || (axis === null && Math.abs(dx) >= SWIPE_PX && Math.abs(dx) > Math.abs(dy));
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

  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length !== 1 || fromControl(e.target)) return;
    begin(e.touches[0].clientX, e.touches[0].clientY);
  };
  const onTouchMove = (e: TouchEvent) => {
    if (!tracking || e.touches.length !== 1) return;
    move(e.touches[0].clientX, e.touches[0].clientY, e);
  };
  const onTouchEnd = (e: TouchEvent) => {
    const t = e.changedTouches[0];
    if (t) finish(t.clientX, t.clientY);
    else cancel();
  };
  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType === 'touch') return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (fromControl(e.target)) return;
    pointerId = e.pointerId;
    begin(e.clientX, e.clientY);
  };
  const onPointerMove = (e: PointerEvent) => {
    if (!tracking || e.pointerType === 'touch' || e.pointerId !== pointerId) return;
    move(e.clientX, e.clientY, e);
  };
  const onPointerUp = (e: PointerEvent) => {
    if (e.pointerType === 'touch' || e.pointerId !== pointerId) return;
    finish(e.clientX, e.clientY);
  };
  const onPointerCancel = (e: PointerEvent) => {
    if (e.pointerType === 'touch' || e.pointerId !== pointerId) return;
    cancel();
  };

  slider.addEventListener('touchstart', onTouchStart, { passive: true });
  slider.addEventListener('touchmove', onTouchMove, { passive: false });
  slider.addEventListener('touchend', onTouchEnd, { passive: true });
  slider.addEventListener('touchcancel', cancel, { passive: true });
  slider.addEventListener('pointerdown', onPointerDown, { passive: true });
  slider.addEventListener('pointermove', onPointerMove, { passive: false });
  slider.addEventListener('pointerup', onPointerUp, { passive: true });
  slider.addEventListener('pointercancel', onPointerCancel, { passive: true });

  return () => {
    slider.removeEventListener('touchstart', onTouchStart);
    slider.removeEventListener('touchmove', onTouchMove);
    slider.removeEventListener('touchend', onTouchEnd);
    slider.removeEventListener('touchcancel', cancel);
    slider.removeEventListener('pointerdown', onPointerDown);
    slider.removeEventListener('pointermove', onPointerMove);
    slider.removeEventListener('pointerup', onPointerUp);
    slider.removeEventListener('pointercancel', onPointerCancel);
  };
}
