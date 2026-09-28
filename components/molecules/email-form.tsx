"use client";

import { useId, useRef, useState, type ComponentProps, type FormEvent } from "react";

export function EmailForm({
  children,
  subject = "ICFC consultation enquiry",
  crm = false,
  ...props
}: Omit<ComponentProps<"form">, "onSubmit" | "action"> & { subject?: string; crm?: boolean }) {
  const hintId = useId();
  const submitting = useRef(false);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (crm) {
      if (submitting.current) return;
      submitting.current = true;
      setPending(true);
      setMessage("Sending...");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(data)),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Unable to submit your inquiry.");
        setMessage("Thank you! Your inquiry has been submitted.");
        form.reset();
      } catch (error) {
        setMessage(error instanceof Error ? error.message : "Unable to submit your inquiry. Please try again.");
      } finally {
        submitting.current = false;
        setPending(false);
      }
      return;
    }
    const fields = Array.from(data.entries())
      .map(([name, value]) => `${name}: ${value}`)
      .join("\n");
    window.location.href = `mailto:admin@icfc.com.sg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fields)}`;
  }
  return (
    <>
      <form {...props} aria-describedby={hintId} aria-busy={pending} onSubmit={submit}>
        {crm ? <fieldset disabled={pending} className="m-0 min-w-0 border-0 p-0">{children}</fieldset> : children}
      </form>
      <p id={hintId} role="status" className="mt-2.5 text-xs leading-relaxed">
        {crm ? message : "Submitting opens your email app with a draft."}
      </p>
    </>
  );
}
