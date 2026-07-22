import { useState } from "react";

export function useFormSubmit(formName: string) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (data: Record<string, any>) => {
    setIsSubmitting(true);

    const payload = {
      formName,
      ...data,
      sourceUrl: window.location.href,
    };

    try {
      await fetch("https://api-inform.bythub.in/?formId=LCKaS6XiKh1hrfOgsasy", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
    } catch {}

    setIsSubmitting(false);
    window.location.href = "/thank-you";
  };

  return { submitForm, isSubmitting };
}
