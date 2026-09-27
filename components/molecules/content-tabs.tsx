"use client";

import { useId, useState, type ReactNode } from "react";

export function ContentTabs({
  items,
}: {
  items: { label: string; content: ReactNode }[];
}) {
  const [selected, setSelected] = useState(0);
  const id = useId();
  return (
    <div className="space-y-[60px]">
      <div>
        <div
          className="flex flex-wrap justify-center gap-[22px] border-y border-white/5 py-[22px]"
          role="tablist"
          aria-label="Featured work"
        >
          {items.map((item, index) => (
            <button
              key={item.label}
              id={`${id}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls={`${id}-panel-${index}`}
              tabIndex={selected === index ? 0 : -1}
              className={`rounded-full border px-[15px] py-[5px] text-[15px] font-medium transition-colors max-[480px]:w-full max-[480px]:py-2.5 ${selected === index ? "border-[#AB052D] bg-[#AB052D] text-white" : "border-white/10 bg-transparent text-white hover:border-[#AB052D] hover:bg-[#AB052D]"}`}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                if (
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(
                    event.key,
                  )
                )
                  return;
                event.preventDefault();
                const next =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? items.length - 1
                      : (selected +
                          (event.key === "ArrowRight" ? 1 : -1) +
                          items.length) %
                        items.length;
                setSelected(next);
                document.getElementById(`${id}-tab-${next}`)?.focus();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        {items.map((item, index) => (
          <div
            key={item.label}
            role="tabpanel"
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            hidden={selected !== index}
            className="focus-visible:outline-2 focus-visible:outline-[#AB052D]"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
