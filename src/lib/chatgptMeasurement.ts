/** Called only after the enquiry endpoint confirms success. */
export function trackChatGPTLead(): void {
  try {
    const tracker = (window as unknown as {
      gmcChatGPT?: { lead: (eventId: string) => void };
    }).gmcChatGPT;
    tracker?.lead(crypto.randomUUID());
  } catch {
    // A blocked tracker must not turn a successful enquiry into an error.
  }
}
