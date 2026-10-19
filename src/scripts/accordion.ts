export const bindAccordions = () => {
  document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((root) => {
    if (root.dataset.accBound === 'true') return;
    root.dataset.accBound = 'true';
    root.querySelectorAll<HTMLButtonElement>('[data-acc-trigger]').forEach((btn) => {
      const item = btn.closest('.bx-acc-item');
      if (!item) return;
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(open));
        item.classList.toggle('is-open', open);
      });
    });
  });
};
