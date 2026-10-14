"use client";
import { useState } from "react";
import consentText from "@/lib/data/marketing-consent.json";

/** Lets a person update their email and phone marketing opt-ins. Boxes start unticked and are separate. */
export function MarketingPreferencesForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch("/api/marketing-preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: fd.get("email"),
          marketing_email: fd.get("marketing_email") === "on",
          marketing_phone: fd.get("marketing_phone") === "on",
          version: consentText.version,
          lang: document.documentElement.lang || "en",
          website: fd.get("website"),
        }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }
  if (state === "done")
    return <p role="status">Thank you. We will apply your choices within 10 business days.</p>;
  return (
    <form onSubmit={submit} className="space-y-4 max-w-xl">
      <label className="block">
        Email address used in your enquiry
        <input name="email" type="email" required className="mt-1 block w-full rounded border border-[#DBDEE1] px-3 py-2" />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="flex gap-2"><input type="checkbox" name="marketing_email" /> <span>{consentText.email}</span></label>
      <label className="flex gap-2"><input type="checkbox" name="marketing_phone" /> <span>{consentText.phone}</span></label>
      <p className="text-sm text-[#616C74]">Leave a box unticked to opt out of that channel.</p>
      <button disabled={state === "sending"} className="rounded-full bg-[#AB052D] px-6 py-3 text-white font-medium">
        Save preferences
      </button>
      {state === "error" && <p role="alert">Sorry, that did not go through. Please email admin@icfc.com.sg.</p>}
    </form>
  );
}
