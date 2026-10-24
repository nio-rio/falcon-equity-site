/** Largest $-amount in a published range string such as `$10,000 – $1,000,000`. */
export const parseUsdMax = (text: string): number | null => {
  const matches = [...text.matchAll(/\$[\d,]+/g)].map((m) => Number(m[0].replace(/[$,]/g, '')));
  if (!matches.length || matches.some((n) => !Number.isFinite(n))) return null;
  return Math.max(...matches);
};
