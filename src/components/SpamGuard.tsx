import { useState } from 'react';
import {
  HONEYPOT_FIELD,
  MATH_A_FIELD,
  MATH_ANSWER_FIELD,
  MATH_B_FIELD,
} from '../lib/antispam';

/**
 * One-tag spam protection for every lead form: renders the honeypot input
 * plus a simple math check ("what is A + B?") with a fresh random question
 * on every render. Drop <SpamGuard /> inside any <form>, just above the
 * submit button — no other per-form wiring needed.
 */
export default function SpamGuard() {
  // Fresh operands per component mount — stable for the life of this form.
  const [operands] = useState(() => ({
    a: 1 + Math.floor(Math.random() * 9),
    b: 1 + Math.floor(Math.random() * 9),
  }));

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
      {/* Simple math check real users solve in a second, bots usually don't. */}
      <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
        <label htmlFor={`math-${operands.a}-${operands.b}`} className="font-semibold whitespace-nowrap">
          Quick check: {operands.a} + {operands.b} = ?
        </label>
        <input
          type="text"
          inputMode="numeric"
          id={`math-${operands.a}-${operands.b}`}
          name={MATH_ANSWER_FIELD}
          placeholder="?"
          required
          autoComplete="off"
          className="w-16 px-3 py-2 rounded-xl border border-slate-200 bg-white text-center focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm"
        />
        <input type="hidden" name={MATH_A_FIELD} value={operands.a} />
        <input type="hidden" name={MATH_B_FIELD} value={operands.b} />
      </div>
    </>
  );
}
