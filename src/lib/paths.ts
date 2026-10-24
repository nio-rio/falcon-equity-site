/** Normalizes build-time pathnames (`/about.html`, `/index.html`) to public URLs (`/about`, `/`). */
export const cleanPath = (pathname: string) => {
  const p = pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '');
  return p === '' ? '/' : p;
};
