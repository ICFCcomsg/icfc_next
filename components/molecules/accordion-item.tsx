"use client";
import { useId, useState, type ReactNode } from "react";
import { Icon } from "@/components/atoms/icon";

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className = "",
}: {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div
      className={`mb-4 overflow-hidden rounded-lg border border-slate-200 bg-white text-[#2B3944] ${className}`}
    >
      <h3>
        <button
          type="button"
          className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold transition-colors ${open ? "bg-[#AB052D] text-white" : "hover:bg-slate-50"}`}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(!open)}
        >
          {title}
          <Icon name={open ? "up" : "down"} />
        </button>
      </h3>
      <div
        id={id}
        hidden={!open}
        className="px-6 py-5 text-base leading-relaxed text-[#616C74] [&_p]:mb-3"
      >
        {children}
      </div>
    </div>
  );
}
