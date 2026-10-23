/**
 * /blog archive — category filter + "Load More" pager.
 *
 * Server-renders every published post, so a reader with no JavaScript sees the
 * whole library (and so do crawlers). With JS: the archive reveals PAGE_SIZE
 * cards at a time, "Load More" appends a page, the dots jump to a page, and the
 * category rows filter the grid in place.
 *
 * The reference (blackstone.com/insights) page-loads a chunk per row and keeps a
 * dot per loaded chunk; the numbers here come from that behaviour, not from a
 * carousel.
 */

type Card = HTMLElement & { hidden: boolean };

const archive = document.querySelector<HTMLElement>('[data-blg-archive]');

if (archive) {
  const pageSize = Number(archive.dataset.pageSize ?? 0);
  const paged = archive.dataset.paged === 'true';
  const cards = Array.from(archive.querySelectorAll<Card>('[data-blg-card]'));
  const pager = document.querySelector<HTMLElement>('[data-blg-pager]');
  const load = document.querySelector<HTMLButtonElement>('[data-blg-load]');
  const dots = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-blg-dot]'));
  const count = document.querySelector<HTMLElement>('[data-blg-count]');
  const filters = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-blg-filter]'));

  let active = 'all';
  let pages = 1;

  const render = () => {
    const matching =
      active === 'all'
        ? cards
        : cards.filter((card) => card.dataset.category === active);

    // A filtered view shows every match: a pager inside a filtered list is a
    // second way to lose a guide the reader already asked for.
    const limit =
      active === 'all' && paged ? Math.min(pages * pageSize, matching.length) : matching.length;

    for (const card of cards) card.hidden = true;
    for (const card of matching.slice(0, limit)) card.hidden = false;

    if (pager) {
      pager.hidden = !paged || active !== 'all' || limit >= matching.length;
    }

    dots.forEach((dot, index) => {
      dot.setAttribute('aria-current', String(index === pages - 1));
    });

    if (count) {
      count.textContent = `${matching.length} ${matching.length === 1 ? 'guide' : 'guides'}`;
    }
  };

  load?.addEventListener('click', () => {
    pages += 1;
    render();
  });

  for (const dot of dots) {
    dot.addEventListener('click', () => {
      pages = Number(dot.dataset.blgDot ?? '0') + 1;
      render();
    });
  }

  for (const button of filters) {
    button.addEventListener('click', () => {
      active = button.dataset.blgFilter ?? 'all';
      pages = 1;
      for (const other of filters) {
        other.setAttribute('aria-pressed', String(other === button));
      }
      render();
    });
  }

  render();
}
