"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { Icon } from "@/components/atoms/icon";

export function ContentCarousel({
  children,
  items = 3,
  variant = items === 6 ? "brands" : "portfolio",
}: {
  children: ReactNode;
  items?: number;
  variant?: "brands" | "portfolio" | "testimonials";
}) {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const step =
      element.firstElementChild?.getBoundingClientRect().width ??
      element.clientWidth;
    const gap = variant === "brands" ? 0 : 30;
    const next = element.scrollLeft + direction * (step + gap);
    element.scrollTo({
      left:
        next > element.scrollWidth - element.clientWidth + 1
          ? 0
          : next < 0
            ? element.scrollWidth - element.clientWidth
            : next,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!paused.current) move(1);
    }, 3000);
    return () => window.clearInterval(timer);
  });
  const widths =
    items === 1
      ? "[&>*]:basis-full"
      : variant === "brands"
        ? "[&>*]:basis-1/2 min-[576px]:[&>*]:basis-1/3 min-[992px]:[&>*]:basis-1/4 min-[1200px]:[&>*]:basis-1/5 min-[1400px]:[&>*]:basis-1/6"
        : variant === "testimonials"
          ? "[&>*]:basis-full min-[768px]:[&>*]:basis-[calc((100%-30px)/2)] min-[1600px]:[&>*]:basis-[calc((100%-60px)/3)]"
          : "[&>*]:basis-full min-[768px]:[&>*]:basis-[calc((100%-30px)/2)] min-[1200px]:[&>*]:basis-[calc((100%-60px)/3)]";
  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          paused.current = false;
      }}
    >
      <div
        ref={track}
        className={`flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:min-w-0 [&>*]:shrink-0 [&>*]:snap-start ${variant === "brands" ? "gap-0 [&>*]:flex [&>*]:items-center [&>*]:justify-center" : "gap-[30px]"} ${widths}`}
      >
        {children}
      </div>
      {variant !== "brands" && (
        <div className="mt-5 flex justify-center gap-4">
          {([-1, 1] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              className="grid size-12 place-items-center rounded-full border border-current transition-colors hover:bg-[#AB052D] hover:text-white"
              aria-label={direction === -1 ? "Previous slides" : "Next slides"}
              onClick={() => move(direction)}
            >
              <Icon name={direction === -1 ? "left" : "right"} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
