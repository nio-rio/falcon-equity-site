/**
 * Section 3 — "What's your case?" is one control in two halves: the FAQ-style
 * list on the left and the product column on the right. Opening a row reveals
 * its folded line and swaps the product; only one row is ever open.
 */
export const bindRetailCase = () => {
  document.querySelectorAll<HTMLElement>('[data-case-root]').forEach((root) => {
    if (root.dataset.caseBound === 'true') return;
    root.dataset.caseBound = 'true';

    const items = [...root.querySelectorAll<HTMLElement>('[data-case-item]')];
    const products = [...root.querySelectorAll<HTMLElement>('[data-case-product]')];

    const setItem = (item: HTMLElement, open: boolean) => {
      item.classList.toggle('is-open', open);
      item.querySelector<HTMLButtonElement>('[data-case-trigger]')?.setAttribute('aria-expanded', String(open));
    };

    const setProduct = (index: number) => {
      products.forEach((product, i) => {
        const active = i === index;
        product.classList.toggle('is-active', active);
        product.hidden = !active;
      });
    };

    items.forEach((item, index) => {
      const trigger = item.querySelector<HTMLButtonElement>('[data-case-trigger]');
      if (!trigger) return;
      trigger.addEventListener('click', () => {
        const wasOpen = item.classList.contains('is-open');
        items.forEach((other) => setItem(other, false));
        if (wasOpen) return;
        setItem(item, true);
        setProduct(index);
      });
    });
  });
};
