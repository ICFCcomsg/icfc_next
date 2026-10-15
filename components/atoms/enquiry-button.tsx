"use client";

import type { ReactNode } from "react";
import { openEnquiry, type EnquiryType } from "@/lib/enquiry";

/** Opens the enquiry form with the type (and optionally the message) preset. */
export function EnquiryButton({
  type,
  message,
  className,
  children,
}: {
  type: EnquiryType;
  message?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button type="button" onClick={() => openEnquiry(type, message)} className={className}>
      {children}
    </button>
  );
}
