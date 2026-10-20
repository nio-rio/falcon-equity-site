import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger);

const CLIP_ON = 'circle(50% at 50% 50%)';
const CLIP_OFF = 'circle(0% at 50% 50%)';

type Slide = {
  item: HTMLElement;
  textEl: HTMLElement | null;
  nameEl: HTMLElement | null;
  imgEl: HTMLElement | null;
  textSplit: SplitText | null;
  nameSplit: SplitText | null;
};

type WrapCleanup = () => void;

const cleanups = new WeakMap<HTMLElement, WrapCleanup>();

const isEditingTarget = (el: EventTarget | null) => {
  if (!(el instanceof HTMLElement)) return false;
  if (el.isContentEditable) return true;
  return Boolean(el.closest('input, textarea, select, [contenteditable="true"]'));
};

export function initTestimonialSliders(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-testimonial-wrap]').forEach(setupWrap);
}

function setupWrap(wrap: HTMLElement) {
  cleanups.get(wrap)?.();
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: reduce)', () => bindSlider(wrap, true));
  mm.add('(prefers-reduced-motion: no-preference)', () => bindSlider(wrap, false));
  const stop = () => mm.revert();
  cleanups.set(wrap, stop);
}

function bindSlider(wrap: HTMLElement, reduce: boolean) {
  const items = [...wrap.querySelectorAll<HTMLElement>('[data-testimonial-item]')];
  const prevBtn = wrap.querySelector<HTMLButtonElement>('[data-prev]');
  const nextBtn = wrap.querySelector<HTMLButtonElement>('[data-next]');
  const currentEl = wrap.querySelector('[data-current]');
  const totalEl = wrap.querySelector('[data-total]');
  if (!items.length) return;

  const canLoop = items.length > 1;
  const autoplayOn = wrap.dataset.autoplay === 'true' && canLoop;
  const durationMs = Number(wrap.dataset.autoplayDuration || 5000);
  const duration = Number.isFinite(durationMs) ? durationMs / 1000 : 5;

  if (totalEl) totalEl.textContent = String(items.length);
  prevBtn && (prevBtn.disabled = !canLoop);
  nextBtn && (nextBtn.disabled = !canLoop);
  prevBtn?.setAttribute('aria-disabled', String(!canLoop));
  nextBtn?.setAttribute('aria-disabled', String(!canLoop));

  let index = Math.max(
    0,
    items.findIndex((el) => el.classList.contains('is--active')),
  );
  let isAnimating = false;
  let inView = false;
  let autoplay: gsap.core.Tween | null = null;

  const slides: Slide[] = items.map((item) => ({
    item,
    textEl: item.querySelector<HTMLElement>('[data-testimonial-text]'),
    nameEl: item.querySelector<HTMLElement>('[data-testimonial-split]'),
    imgEl: item.querySelector<HTMLElement>('[data-testimonial-img]'),
    textSplit: null,
    nameSplit: null,
  }));

  const splitOne = (el: HTMLElement | null, active: boolean) => {
    if (!el || reduce) return null;
    return SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'text-line',
      autoSplit: true,
      onSplit(self) {
        gsap.set(self.lines, { yPercent: active ? 0 : 110 });
      },
    });
  };

  slides.forEach((slide, i) => {
    const active = i === index;
    slide.textSplit = splitOne(slide.textEl, active);
    slide.nameSplit = splitOne(slide.nameEl, active);
    if (slide.imgEl) {
      gsap.set(slide.imgEl, { clipPath: reduce ? 'none' : active ? CLIP_ON : CLIP_OFF });
    }
    gsap.set(slide.item, { autoAlpha: active ? 1 : 0 });
  });

  const linesOf = (slide: Slide) => [
    ...(slide.textSplit?.lines ?? []),
    ...(slide.nameSplit?.lines ?? []),
  ];

  const updateChrome = () => {
    items.forEach((el, i) => {
      const on = i === index;
      el.classList.toggle('is--active', on);
      el.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
    if (currentEl) currentEl.textContent = String(index + 1);
  };

  const stopAutoplay = () => {
    autoplay?.kill();
    autoplay = null;
  };

  const scheduleAutoplay = () => {
    stopAutoplay();
    if (!autoplayOn || reduce || !inView) return;
    autoplay = gsap.delayedCall(duration, () => {
      if (!inView || isAnimating) {
        scheduleAutoplay();
        return;
      }
      goTo(index + 1);
    });
  };

  const goTo = (raw: number) => {
    if (isAnimating || !canLoop) return;
    const next = ((raw % items.length) + items.length) % items.length;
    if (next === index) return;
    const outgoing = slides[index];
    const incoming = slides[next];
    isAnimating = true;
    stopAutoplay();

    const finish = () => {
      gsap.set(outgoing.item, { autoAlpha: 0 });
      index = next;
      updateChrome();
      isAnimating = false;
      scheduleAutoplay();
    };

    if (reduce) {
      gsap.set(incoming.item, { autoAlpha: 1 });
      const tl = gsap.timeline({ onComplete: finish });
      tl.to(outgoing.item, { autoAlpha: 0, duration: 0.4, ease: 'power2.out' }, 0);
      tl.fromTo(
        incoming.item,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4, ease: 'power2.out' },
        0,
      );
      return;
    }

    gsap.set(incoming.item, { autoAlpha: 1 });
    const inLines = linesOf(incoming);
    const outLines = linesOf(outgoing);
    if (inLines.length) gsap.set(inLines, { yPercent: 110 });

    const tl = gsap.timeline({ onComplete: finish });
    if (outLines.length) {
      tl.to(
        outLines,
        { yPercent: -110, duration: 0.6, ease: 'power4.inOut', stagger: { amount: 0.25 } },
        0,
      );
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
    if (incoming.imgEl) {
      tl.fromTo(
        incoming.imgEl,
        { clipPath: CLIP_OFF },
        { clipPath: CLIP_ON, duration: 0.75, ease: 'power4.inOut' },
        '<',
      );
    }
    tl.set(outgoing.item, { autoAlpha: 0 }, '>');
  };

  const onPrev = () => {
    goTo(index - 1);
    scheduleAutoplay();
  };
  const onNext = () => {
    goTo(index + 1);
    scheduleAutoplay();
  };

  prevBtn?.addEventListener('click', onPrev);
  nextBtn?.addEventListener('click', onNext);

  const onKey = (e: KeyboardEvent) => {
    if (!inView || !canLoop) return;
    if (isEditingTarget(e.target)) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onNext();
    }
  };
  document.addEventListener('keydown', onKey);

  const st = ScrollTrigger.create({
    trigger: wrap,
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
  updateChrome();

  return () => {
    stopAutoplay();
    st.kill();
    document.removeEventListener('keydown', onKey);
    prevBtn?.removeEventListener('click', onPrev);
    nextBtn?.removeEventListener('click', onNext);
    slides.forEach((slide) => {
      slide.textSplit?.revert();
      slide.nameSplit?.revert();
    });
  };
}

const boot = () => initTestimonialSliders();
boot();
document.addEventListener('astro:page-load', boot);
document.addEventListener('astro:before-swap', () => {
  document.querySelectorAll<HTMLElement>('[data-testimonial-wrap]').forEach((wrap) => {
    cleanups.get(wrap)?.();
    cleanups.delete(wrap);
  });
});
