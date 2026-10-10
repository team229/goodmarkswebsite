import { HONEYPOT_FIELD, TURNSTILE_SITE_KEY } from '../lib/antispam';

/**
 * One-tag spam protection for every lead form: renders the honeypot input
 * plus the Cloudflare Turnstile widget. Drop <SpamGuard /> inside any <form>,
 * just above the submit button — no other per-form wiring needed.
 *
 * The Turnstile API script (loaded once in BaseLayout) auto-renders every
 * `.cf-turnstile` div, including ones mounted later by React islands, and
 * injects the `cf-turnstile-response` token input into the parent form.
 */
export default function SpamGuard() {
  return (
    <>
      {/* Honeypot — positioned off-screen, never display:none (bots sniff that out). */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0">
        <label>
          Website
          <input
            type="text"
            name={HONEYPOT_FIELD}
            autoComplete="off"
            tabIndex={-1}
            defaultValue=""
          />
        </label>
      </div>
      {/* Cloudflare Turnstile bot-check widget. */}
      <div
        className="cf-turnstile flex justify-center"
        data-sitekey={TURNSTILE_SITE_KEY}
        data-theme="light"
      />
    </>
  );
}
