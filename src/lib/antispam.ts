/**
 * Shared anti-spam layer for every lead form on the site.
 *
 * Defences (all enforced client-side before anything is POSTed):
 *  1. Honeypot field — invisible to humans, filled by dumb bots.
 *  2. Minimum fill time — bots submit in milliseconds, humans take seconds.
 *  3. Indian mobile validation — rejects garbage phone numbers.
 *  4. Cloudflare Turnstile — bot-detection widget, token must be present.
 *
 * NOTE: these stop bots that drive the page. Bots POSTing straight at the
 * bythub endpoint bypass all client-side checks — that half must be handled
 * at bythub (formId rotation / their own rate limits / CAPTCHA).
 */

declare global {
  interface Window {
    turnstile?: {
      reset: (widgetId?: string) => void;
      render: (...args: unknown[]) => string;
    };
  }
}

/**
 * Cloudflare Turnstile sitekey.
 *
 * Currently the official Cloudflare TEST key (always passes) so the preview
 * can be verified end-to-end. BEFORE DEPLOYING TO PRODUCTION, create a real
 * key at dash.cloudflare.com → Turnstile → Add site, and paste it here.
 */
export const TURNSTILE_SITE_KEY = '1x00000000000000000000AA';

/** Name of the honeypot input. Must match the field rendered by <SpamGuard/>. */
export const HONEYPOT_FIELD = 'website';

/** Name of the hidden input Turnstile injects into each form. */
export const TURNSTILE_RESPONSE_FIELD = 'cf-turnstile-response';

/** Minimum milliseconds between form mount and submit. */
export const MIN_FILL_TIME_MS = 3000;

/** True for a plausible Indian mobile number (allows +91 / 91 / 0 prefixes, spaces, dashes). */
export function isValidIndianMobile(raw: unknown): boolean {
  if (typeof raw !== 'string') return false;
  let digits = raw.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits);
}

export type ValidationResult = { ok: true } | { ok: false; error: string };

/**
 * Runs every anti-spam check. `data` is the flat form payload (FormData
 * converted via Object.fromEntries), `elapsedMs` is mount→submit time.
 */
export function validateSubmission(
  data: Record<string, unknown>,
  elapsedMs: number,
): ValidationResult {
  const honeypot = data[HONEYPOT_FIELD];
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    // Deliberately generic — do not tell bots which check tripped.
    return { ok: false, error: 'Something went wrong. Please try again.' };
  }

  if (elapsedMs < MIN_FILL_TIME_MS) {
    return {
      ok: false,
      error: 'Please take a moment to review your details, then submit again.',
    };
  }

  const phone = data['phone'];
  if (typeof phone === 'string' && phone.trim() !== '' && !isValidIndianMobile(phone)) {
    return {
      ok: false,
      error: 'Please enter a valid 10-digit Indian mobile number.',
    };
  }

  const token = data[TURNSTILE_RESPONSE_FIELD];
  if (typeof token !== 'string' || token.trim() === '') {
    return {
      ok: false,
      error: 'Please complete the human-verification check above, then submit again.',
    };
  }

  return { ok: true };
}

/** Removes internal anti-spam fields so bythub only receives real lead data. */
export function stripInternalFields(data: Record<string, unknown>): Record<string, unknown> {
  const clean = { ...data };
  delete clean[HONEYPOT_FIELD];
  delete clean[TURNSTILE_RESPONSE_FIELD];
  return clean;
}

/** Resets every Turnstile widget on the page (call after a successful submit). */
export function resetTurnstile(): void {
  try {
    window.turnstile?.reset();
  } catch {
    /* widget API not loaded yet — nothing to reset */
  }
}
