"use client";
/* eslint-disable @next/next/no-img-element */

import { useI18n } from "@/components/atoms/i18n-provider";
import { Icon } from "@/components/icons/icon";
import { openEnquiry } from "@/lib/enquiry";

export function TransferBanner() {
  const { common: c } = useI18n().dict;
  return (
    <aside className="flex items-center justify-between gap-10 rounded-lg bg-[#A8213A] px-17.5 py-16 text-white shadow-[0_10px_30px_rgba(168,33,58,0.15)] max-[991px]:flex-col max-[991px]:items-start max-[767px]:px-7 max-[767px]:py-10">
      <div className="max-w-185">
        <p className="m-0 text-[13px] font-semibold uppercase tracking-[1.5px] text-white/85">{c.transfer_eyebrow}</p>
        <h2 className="mt-2 mb-4 text-[40px] font-bold leading-tight tracking-[-0.02em] text-white max-[767px]:text-[28px]">{c.transfer_title}</h2>
        <p className="m-0 text-[17px] leading-7 text-white/90">{c.transfer_text}</p>
      </div>
      <img src="/images/icfc/sketch-transfer.svg" alt={c.transfer_title} width={224} height={168} className="w-56 h-auto shrink-0 rounded-lg max-[1199px]:hidden" loading="lazy" />
      <button
        type="button"
        onClick={() => openEnquiry("Transfer")}
        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-11 py-4 text-[16px] font-semibold text-[#A8213A] transition-colors hover:bg-[#FBE3E8] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {c.transfer_cta}
        <Icon name="right" className="size-4.5!" />
      </button>
    </aside>
  );
}
