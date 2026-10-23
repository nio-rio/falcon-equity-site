/**
 * Expanding feature pills — one open at a time.
 * Osmo's component (osmo.supply/resource/expanding-feature-pills) opens a pill
 * into a card and closes the previously open one. The motion is CSS
 * (`grid-template-rows: 0fr -> 1fr`), so this only owns the state.
 */
export const bindExpandingPills = () => {
  document.querySelectorAll<HTMLElement>('[data-ret-pills]').forEach((root) => {
    if (root.dataset.pillsBound === 'true') return;
    root.dataset.pillsBound = 'true';

    const items = [...root.querySelectorAll<HTMLElement>('[data-pill-item]')];

    const setOpen = (item: HTMLElement, open: boolean) => {
      item.classList.toggle('is-open', open);
      item.querySelector<HTMLButtonElement>('[data-pill-trigger]')?.setAttribute('aria-expanded', String(open));
    };

    items.forEach((item) => {
      const trigger = item.querySelector<HTMLButtonElement>('[data-pill-trigger]');
      if (!trigger) return;
      trigger.addEventListener('click', () => {
        const wasOpen = item.classList.contains('is-open');
        items.forEach((other) => setOpen(other, false));
        if (!wasOpen) setOpen(item, true);
      });
    });
  });
};
