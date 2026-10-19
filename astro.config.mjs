// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/** Keep in sync with `headingId` in `src/lib/blog.ts` so TOC anchors match. */
function headingId(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function textFromNode(node) {
  if (!node) return '';
  if (node.type === 'text' || node.type === 'raw') return node.value ?? '';
  if (Array.isArray(node.children)) return node.children.map(textFromNode).join('');
  return '';
}

function rehypeHeadingIds() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) {
        node.properties ??= {};
        if (!node.properties.id) node.properties.id = headingId(textFromNode(node));
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: 'https://falconequity.ai',
  output: 'static',
  // Match the existing Webflow URLs (/about, /industries, ...) exactly.
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  markdown: {
    rehypePlugins: [rehypeHeadingIds],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
