import { SITE } from '@/data/site';

/** Home <title> when a page does not pass its own title. */
export const HOME_DOCUMENT_TITLE = `${SITE.name} | Fast Funding in 24–48 Hours`;

/** Exact string for the document <title> / og:title. Strings that already
 *  include `|` are used as-is so industry and baked post titles stay ≤60. */
export const toDocumentTitle = (title?: string) => {
  if (!title) return HOME_DOCUMENT_TITLE;
  return title.includes('|') ? title : `${title} | ${SITE.name}`;
};
