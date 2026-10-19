/** Compact published figures so BXCI featured stats stay one line. Do not invent amounts. */

const usdToken = /\$?\s*([\d,]+(?:\.\d+)?)\s*([MBKmbk])?/g;

const formatUsd = (n: number): string => {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `$${Number.isInteger(m) ? m : m}M`;
  }
  if (n >= 1_000) {
    const k = n / 1_000;
    return `$${Number.isInteger(k) ? k : k}K`;
  }
  return `$${n}`;
};

export const compactUsdRange = (value: string): string => {
  const trimmed = value.trim();
  if (/\$\d[\d.]*\s*[MBK]/i.test(trimmed) && !trimmed.includes(',')) {
    return trimmed.replace(/\s+/g, '');
  }
  usdToken.lastIndex = 0;
  const nums = [...trimmed.matchAll(usdToken)]
    .map((m) => {
      const n = Number(m[1].replace(/,/g, ''));
      if (!Number.isFinite(n)) return null;
      const suf = (m[2] || '').toUpperCase();
      if (suf === 'M') return n * 1_000_000;
      if (suf === 'K') return n * 1_000;
      if (suf === 'B') return n * 1_000_000_000;
      return n;
    })
    .filter((n): n is number => n != null);
  if (nums.length >= 2) {
    const [a, b] = nums;
    const bothK = a >= 1_000 && a < 1_000_000 && b >= 1_000 && b < 1_000_000;
    if (bothK) return `$${a / 1_000}-${b / 1_000}K`;
    return `${formatUsd(a)}-${formatUsd(b)}`;
  }
  if (nums.length === 1) {
    const core = formatUsd(nums[0]);
    return trimmed.includes('+') ? `${core}+` : core;
  }
  return trimmed;
};

export const compactTerms = (value: string): string =>
  value
    .replace(/\s*[–—-]\s*/g, '-')
    .replace(/\s*months?\b/gi, ' mo')
    .replace(/\s+/g, ' ')
    .trim();

export const compactSpeed = (value: string): string => {
  const v = value.toLowerCase();
  if (v.includes('2 days') && v.includes('2 weeks')) return '2 days-2 weeks';
  if (v.includes('same day') && v.includes('2 days')) return 'Same day-2 days';
  if (/same[-\s]?day/.test(v)) return 'Same day';
  return value.replace(/\s+/g, ' ').trim();
};

export const compactStatValue = (label: string, value: string): string => {
  if (/\$/.test(value) || /amount/i.test(label)) return compactUsdRange(value);
  if (/speed|funding time/i.test(label) || /day|week/i.test(value)) return compactSpeed(value);
  if (/term/i.test(label) || /month/i.test(value)) return compactTerms(value);
  return value;
};
