"use client";

import { useId, useState, type ReactNode } from "react";

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className = "accordion-item",
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
      className={`${className.replace(/\bactive\b/g, "").trim()}${open ? " active" : ""}`}
    >
      <h3 className="accordion-header">
        <button
          type="button"
          className={`accordion-button${open ? "" : " collapsed"}`}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(!open)}
        >
          {title}
        </button>
      </h3>
      <div
        id={id}
        className={`accordion-collapse collapse${open ? " show" : ""}`}
        hidden={!open}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}
