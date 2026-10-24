/**
 * Business loan calculator — /resources/business-loan-calculator
 *
 * Two quotes, one vocabulary. `term` amortizes an APR over monthly payments;
 * `factor` multiplies the advance by a factor rate and spreads the total over
 * daily / weekly / monthly remittances. The annualized figure on the factor tab
 * uses the same arithmetic as our own guide (src/content/blog/how-to-read-a-factor-rate.md):
 * cost ÷ advance × 365 ÷ days in the term. Keep the two in step — a calculator
 * that disagrees with the blog is worse than no calculator.
 *
 * No Falcon rate is published here. The APR field starts empty on purpose and
 * is labelled as the rate on the reader's own offer; the factor tab is seeded
 * with the guide's worked example ($50,000 at 1.30 over 12 months).
 */

type Mode = 'term' | 'factor';

/** Remittances per month: business days for daily, weeks for weekly. */
const PER_MONTH = { daily: 21, weekly: 52 / 12, monthly: 1 } as const;
type Frequency = keyof typeof PER_MONTH;

const FREQ_LABEL: Record<Frequency, string> = {
  daily: 'daily',
  weekly: 'weekly',
  monthly: 'monthly',
};

const UNIT_LABEL: Record<Frequency, string> = {
  daily: '/day',
  weekly: '/week',
  monthly: '/month',
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const toNumber = (raw: string): number => {
  const cleaned = raw.replace(/[^0-9.]/g, '');
  const n = Number.parseFloat(cleaned);
  return Number.isFinite(n) ? n : Number.NaN;
};

/** 0 decimals at scale, 2 decimals for small figures like a daily remittance. */
const money = (n: number): string => {
  const decimals = Math.abs(n) < 100 ? 2 : 0;
  return n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/** Whole percents from 10% up, one decimal below — matches the guide's published
 *  figures (1.30 over 12 months reads 30%, over 6 months 61%). */
const percent = (n: number): string => (n >= 10 ? `${Math.round(n)}%` : `${n.toFixed(1)}%`);

const init = (root: HTMLElement) => {
  const pick = <T extends Element>(selector: string) => root.querySelector<T>(selector);
  const numInput = (key: string) => pick<HTMLInputElement>(`[data-calc-number="${key}"]`);
  const slider = (key: string) => pick<HTMLInputElement>(`[data-calc-range="${key}"]`);
  const out = (key: string) => pick<HTMLElement>(`[data-calc-out="${key}"]`);

  const results = (mode: Mode) => pick<HTMLElement>(`[data-calc-results="${mode}"]`);
  const fields = (mode: Mode) => pick<HTMLElement>(`[data-calc-fields="${mode}"]`);
  const modeInput = () => pick<HTMLInputElement>('[data-calc-mode]:checked');

  const read = (key: string): number => {
    const input = numInput(key);
    return input ? toNumber(input.value) : Number.NaN;
  };

  const formatInput = (key: string) => {
    const input = numInput(key);
    if (!input) return;
    const min = Number(input.dataset.min);
    const max = Number(input.dataset.max);
    const n = toNumber(input.value);
    if (!Number.isFinite(n)) {
      input.value = '';
      return;
    }
    const value = clamp(n, min, max);
    const kind = input.dataset.format ?? 'plain';
    input.value =
      kind === 'money' ? money(value) : kind === 'factor' ? value.toFixed(2) : String(value);
  };

  const setText = (key: string, value: string) => {
    const node = out(key);
    if (node) node.textContent = value;
  };

  const setBar = (mode: Mode, principal: number, cost: number) => {
    const wrap = pick<HTMLElement>(`[data-calc-out="${mode}-bar"]`);
    const principalBar = pick<HTMLElement>(`[data-calc-out="${mode}-bar-principal"]`);
    const costBar = pick<HTMLElement>(`[data-calc-out="${mode}-bar-cost"]`);
    const total = principal + cost;
    if (!wrap || !principalBar || !costBar || total <= 0) {
      if (wrap) wrap.hidden = true;
      return;
    }
    wrap.hidden = false;
    principalBar.style.width = `${(principal / total) * 100}%`;
    costBar.style.width = `${(cost / total) * 100}%`;
  };

  const renderTerm = () => {
    const panel = results('term');
    if (!panel) return;
    const amount = read('term-amount');
    const months = read('term-months');
    const apr = read('term-apr');
    const prompt = pick<HTMLElement>('[data-calc-out="term-prompt"]');
    const valid =
      Number.isFinite(amount) &&
      amount > 0 &&
      Number.isFinite(months) &&
      months > 0 &&
      Number.isFinite(apr) &&
      apr > 0;

    if (!valid) {
      panel.classList.add('is-empty');
      setText('term-payment', '—');
      setText('term-interest', '—');
      setText('term-total', '—');
      setBar('term', 0, 0);
      if (prompt) prompt.hidden = false;
      return;
    }

    const monthlyRate = apr / 100 / 12;
    const payment =
      monthlyRate === 0
        ? amount / months
        : (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const total = payment * months;
    const interest = Math.max(0, total - amount);

    panel.classList.remove('is-empty');
    setText('term-payment', money(payment));
    setText('term-interest', `$${money(interest)}`);
    setText('term-total', `$${money(total)}`);
    setText('term-legend-principal', `$${money(amount)}`);
    setText('term-legend-interest', `$${money(interest)}`);
    setBar('term', amount, interest);
    if (prompt) prompt.hidden = true;
  };

  const renderFactor = () => {
    const panel = results('factor');
    if (!panel) return;
    const amount = read('factor-amount');
    const factor = read('factor-factor');
    const months = read('factor-months');
    const freqInput = pick<HTMLSelectElement>('[data-calc-freq]');
    const freq = (freqInput?.value ?? 'weekly') as Frequency;
    const perMonth = PER_MONTH[freq] ?? PER_MONTH.weekly;
    const prompt = pick<HTMLElement>('[data-calc-out="factor-prompt"]');
    const valid =
      Number.isFinite(amount) &&
      amount > 0 &&
      Number.isFinite(factor) &&
      factor > 1 &&
      Number.isFinite(months) &&
      months > 0;

    if (!valid) {
      panel.classList.add('is-empty');
      setText('factor-payment', '—');
      setText('factor-total', '—');
      setText('factor-cost', '—');
      setText('factor-annual', '—');
      setBar('factor', 0, 0);
      if (prompt) prompt.hidden = false;
      return;
    }

    const total = amount * factor;
    const cost = total - amount;
    const payments = Math.max(1, months * perMonth);
    const payment = total / payments;
    // Same method as the factor-rate guide: a linear annualization of the cost.
    const annual = (cost / amount) * (365 / (months * 30)) * 100;

    panel.classList.remove('is-empty');
    setText('factor-payment-label', `Payment (${FREQ_LABEL[freq]})`);
    setText('factor-payment-unit', UNIT_LABEL[freq]);
    setText('factor-payment', money(payment));
    setText('factor-total', `$${money(total)}`);
    setText('factor-cost', `$${money(cost)}`);
    setText('factor-annual', percent(annual));
    setText('factor-legend-amount', `$${money(amount)}`);
    setText('factor-legend-cost', `$${money(cost)}`);
    setBar('factor', amount, cost);
    if (prompt) prompt.hidden = true;
  };

  const render = () => {
    const mode: Mode = (modeInput()?.value as Mode) ?? 'factor';
    root.dataset.calcMode = mode;
    (['term', 'factor'] as const).forEach((key) => {
      const fieldGroup = fields(key);
      const panel = results(key);
      if (fieldGroup) fieldGroup.hidden = key !== mode;
      if (panel) panel.hidden = key !== mode;
    });
    if (mode === 'term') renderTerm();
    else renderFactor();
  };

  const keys = [
    'term-amount',
    'term-months',
    'term-apr',
    'factor-amount',
    'factor-factor',
    'factor-months',
  ];

  keys.forEach((key) => {
    const input = numInput(key);
    if (!input) return;
    const rail = slider(key);
    const min = Number(input.dataset.min);
    const max = Number(input.dataset.max);

    input.addEventListener('input', () => {
      const n = toNumber(input.value);
      if (rail && Number.isFinite(n)) rail.value = String(clamp(n, min, max));
      render();
    });

    input.addEventListener('blur', () => {
      formatInput(key);
      const n = toNumber(input.value);
      if (rail && Number.isFinite(n)) rail.value = String(clamp(n, min, max));
      render();
    });

    rail?.addEventListener('input', () => {
      const value = Number(rail.value);
      const kind = input.dataset.format ?? 'plain';
      input.value =
        kind === 'money' ? money(value) : kind === 'factor' ? value.toFixed(2) : String(value);
      render();
    });
  });

  root.querySelectorAll<HTMLInputElement>('[data-calc-mode]').forEach((input) => {
    input.addEventListener('change', render);
  });

  pick<HTMLSelectElement>('[data-calc-freq]')?.addEventListener('change', render);

  keys.forEach((key) => {
    const input = numInput(key);
    const rail = slider(key);
    if (!input || !rail) return;
    formatInput(key);
    const n = toNumber(input.value);
    if (Number.isFinite(n)) rail.value = String(clamp(n, Number(input.dataset.min), Number(input.dataset.max)));
  });

  render();
};

const root = document.querySelector<HTMLElement>('[data-calc-tool]');
if (root) init(root);
