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
    <div className="rs-portfolio-tab-wrapper">
      <div className="rs-portfolio-tab">
        <div
          className="nav nav-pills"
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
              className={`nav-link${selected === index ? " active" : ""}`}
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
      <div className="tab-content">
        {items.map((item, index) => (
          <div
            key={item.label}
            role="tabpanel"
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            hidden={selected !== index}
            className={`tab-pane${selected === index ? " show active" : ""}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
