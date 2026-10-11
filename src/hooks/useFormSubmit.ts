import { useRef, useState } from "react";
import {
  stripInternalFields,
  validateSubmission,
} from "../lib/antispam";

export function useFormSubmit(formName: string) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  // Mount time of the form — bots submit in milliseconds, humans take seconds.
  const mountedAt = useRef<number>(Date.now());

  const submitForm = async (data: Record<string, any>): Promise<boolean> => {
    setFormError(null);

    // Anti-spam gate: honeypot, fill time, phone format, math check.
    const check = validateSubmission(data, Date.now() - mountedAt.current);
    if (!check.ok) {
      setFormError(check.error);
      return false;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    const payload = {
      formName,
      ...stripInternalFields(data),
      sourceUrl: window.location.href,
    };

    try {
      const response = await fetch("https://api-inform.bythub.in/?formId=LCKaS6XiKh1hrfOgsasy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Ads "Contact" conversion — fires here because lead forms show an
        // inline success message instead of navigating to /thank-you.
        // (Navbar modal navigates to /thank-you, which fires it there.)
        try {
          const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
          gtag?.('event', 'conversion', { send_to: 'AW-953167405/apR4COPk6Y4dEK3cwMYD' });
        } catch {
          /* analytics blocked — lead already saved */
        }
        return true;
      }
      setFormError("Something went wrong. Please try again.");
      return false;
    } catch {
      setFormError("Network error. Please check your connection and try again.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting, isSuccess, setIsSuccess, formError, setFormError };
}
