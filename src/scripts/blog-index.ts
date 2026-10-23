/**
 * /blog — "Load More" + page dots.
 *
 * Server-renders every guide (no JavaScript = the whole list, which is what a
 * crawler and a no-JS reader get). With JS the grid reveals PAGE_SIZE cards at a
 * time, "Load More" appends the next page, and each dot jumps to a page. The row
 * is the reference's own pager (blackstone.com/insights): the button disappears
 * once the last page is showing.
 */

const archive = document.querySelector<HTMLElement>('[data-blg-archive]');

if (archive) {
  const pageSize = Number(archive.dataset.pageSize ?? 0) || 4;
  const cards = Array.from(archive.querySelectorAll<HTMLElement>('[data-blg-card]'));
  const pager = document.querySelector<HTMLElement>('[data-blg-pager]');
  const load = document.querySelector<HTMLButtonElement>('[data-blg-load]');
  const dots = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-blg-dot]'));

  let pages = 1;

  const render = () => {
    const limit = Math.min(pages * pageSize, cards.length);

    cards.forEach((card, index) => {
      card.hidden = index >= limit;
    });

    if (pager) pager.hidden = limit >= cards.length;

    dots.forEach((dot, index) => {
      dot.setAttribute('aria-current', String(index === pages - 1));
    });
  };

  load?.addEventListener('click', () => {
    pages += 1;
    render();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      pages = index + 1;
      render();
    });
  });

  render();
}
