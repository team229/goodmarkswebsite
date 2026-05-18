import { useState } from "react";

export function useFormSubmit(formName: string) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: Record<string, any>) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    const payload = {
      formName,
      ...data,
      sourceUrl: window.location.href,
    };

    try {
      const response = await fetch("https://api-inform.bythub.in/?formId=LCKaS6XiKh1hrfOgsasy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting, isSuccess, error, setIsSuccess };
}
