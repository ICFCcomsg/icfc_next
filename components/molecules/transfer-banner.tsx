"use client";

import { openEnquiry } from "@/lib/enquiry";

export function TransferBanner({
  title = "Transfer your services to ICFC",
  text = "Moving your consulting, internal audits or training to us is simple. We review your current system, certificates and plans, then pick up where your previous provider left off. Any transfer of certification between certification bodies is handled by the receiving certification body under accreditation rules.",
  cta = "Start a transfer",
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <aside className="icfc-transfer">
      <div>
        <p className="icfc-eyebrow">Thinking of switching providers?</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <button type="button" className="icfc-btn is-light" onClick={() => openEnquiry("Transfer")}>
        {cta}
      </button>
    </aside>
  );
}
