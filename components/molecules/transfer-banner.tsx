"use client";

import { useI18n } from "@/components/atoms/i18n-provider";
import { openEnquiry } from "@/lib/enquiry";

export function TransferBanner() {
  const { common: c } = useI18n().dict;
  return (
    <aside className="icfc-transfer">
      <div>
        <p className="icfc-eyebrow">{c.transfer_eyebrow}</p>
        <h2>{c.transfer_title}</h2>
        <p>{c.transfer_text}</p>
      </div>
      <button type="button" className="icfc-btn is-light" onClick={() => openEnquiry("Transfer")}>
        {c.transfer_cta}
      </button>
    </aside>
  );
}
