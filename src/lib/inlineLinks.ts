export type InlinePart = { text: string; href?: string };

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

const isSafeHref = (href: string) =>
  href.startsWith('/') || href.startsWith('tel:') || href.startsWith('mailto:');

/** Split a copy string on markdown `[label](href)` links. Unsafe hrefs stay as text. */
export const splitInlineLinks = (value: string): InlinePart[] => {
  const parts: InlinePart[] = [];
  let last = 0;
  LINK.lastIndex = 0;
  for (const match of value.matchAll(LINK)) {
    const index = match.index ?? 0;
    if (index > last) parts.push({ text: value.slice(last, index) });
    const href = match[2];
    if (isSafeHref(href)) parts.push({ text: match[1], href });
    else parts.push({ text: match[0] });
    last = index + match[0].length;
  }
  if (last < value.length) parts.push({ text: value.slice(last) });
  return parts.length ? parts : [{ text: value }];
};
