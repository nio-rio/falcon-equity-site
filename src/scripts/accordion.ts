/**
 * Accordions: at most one open per list.
 *
 * Osmo's accordion behaviour (osmo.supply/resource/accordion-css-animation) is
 * one open at a time — opening a row closes the row above it, and clicking the
 * open row closes it. We keep the buttons and aria wiring (more robust than a
 * CSS-only accordion for screen readers and keyboard), and enforce the same
 * rule here so every list on the site acts the same way.
 */
export const bindAccordions = () => {
  document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((root) => {
    if (root.dataset.accBound === 'true') return;
    root.dataset.accBound = 'true';

    const items = [
      ...root.querySelectorAll<HTMLElement>('[data-acc-item], .bx-acc-item, .pilot-acc-item'),
    ];

    const setOpen = (item: HTMLElement, open: boolean) => {
      item.classList.toggle('is-open', open);
      item
        .querySelector<HTMLButtonElement>('[data-acc-trigger]')
        ?.setAttribute('aria-expanded', String(open));
    };

    items.forEach((item) => {
      const btn = item.querySelector<HTMLButtonElement>('[data-acc-trigger]');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const wasOpen = item.classList.contains('is-open');

        // Close the whole list first, then open this row unless it was already
        // open — which leaves every list with zero or one open row.
        items.forEach((other) => setOpen(other, false));
        if (!wasOpen) setOpen(item, true);
      });
    });
  });
};
