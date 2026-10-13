"use client";

import { openEnquiry } from "@/lib/enquiry";

export function QuoteButton({ light }: { light?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => openEnquiry("Quote")}
      className={`rounded-full px-7 py-3.5 font-medium ${light ? "bg-white text-[#AB052D] hover:bg-[#F8F8F9]" : "bg-[#AB052D] text-white hover:bg-[#9D0026]"}`}
    >
      Get a Quote
    </button>
  );
}
