"use client";

import { useId, type ComponentProps, type FormEvent } from "react";

export function EmailForm({
  children,
  subject = "ICFC consultation enquiry",
  ...props
}: Omit<ComponentProps<"form">, "onSubmit" | "action"> & { subject?: string }) {
  const hintId = useId();
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = Array.from(new FormData(event.currentTarget).entries())
      .map(([name, value]) => `${name}: ${value}`)
      .join("\n");
    window.location.href = `mailto:admin@icfc.com.sg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fields)}`;
  }
  return (
    <>
      <form {...props} aria-describedby={hintId} onSubmit={submit}>
        {children}
      </form>
      <p id={hintId} className="native-email-hint">
        Submitting opens your email app with a draft.
      </p>
    </>
  );
}
