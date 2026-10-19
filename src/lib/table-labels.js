/**
 * Sätteri hast plugin: class markdown tables as `.r-table` and stamp
 * `data-label` from the header row onto body cells after the first column.
 */
export const tableDataLabelsPlugin = {
  name: 'table-data-labels',
  element: {
    filter: ['table'],
    visit(node, ctx) {
      const existing = node.properties?.className;
      const classes = existing == null ? [] : Array.isArray(existing) ? [...existing] : [String(existing)];
      if (!classes.includes('r-table')) classes.push('r-table');
      ctx.setProperty(node, 'className', classes);

      ctx.wrapNode(node, {
        type: 'element',
        tagName: 'div',
        properties: { className: ['r-table-wrap'] },
        children: [],
      });

      const headers = headerLabels(node, ctx);
      if (headers.length === 0) return;

      for (const row of bodyRows(node)) {
        const cells = (row.children ?? []).filter(
          (child) => child.type === 'element' && (child.tagName === 'th' || child.tagName === 'td'),
        );
        cells.forEach((cell, i) => {
          if (i === 0) return;
          const label = headers[i];
          if (label) ctx.setProperty(cell, 'data-label', label);
        });
      }
    },
  },
};

function elements(node, tag) {
  return (node.children ?? []).filter((child) => child.type === 'element' && child.tagName === tag);
}

function headerLabels(table, ctx) {
  const thead = elements(table, 'thead')[0];
  const headerRow = thead ? elements(thead, 'tr')[0] : elements(elements(table, 'tbody')[0] ?? table, 'tr')[0];
  if (!headerRow) return [];
  return (headerRow.children ?? [])
    .filter((child) => child.type === 'element' && (child.tagName === 'th' || child.tagName === 'td'))
    .map((cell) => ctx.textContent(cell).replace(/\s+/g, ' ').trim());
}

function bodyRows(table) {
  const bodies = elements(table, 'tbody');
  const sections = bodies.length > 0 ? bodies : [table];
  const rows = [];
  for (const section of sections) {
    const start = section === table ? 1 : 0;
    rows.push(...elements(section, 'tr').slice(start));
  }
  return rows;
}
