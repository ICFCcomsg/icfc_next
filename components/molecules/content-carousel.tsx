"use client";
import { useRef, type ReactNode } from "react";
import { Icon } from "@/components/atoms/icon";

const widths = [
  "",
  "xl:[&>*]:basis-full",
  "xl:[&>*]:basis-[calc((100%-24px)/2)]",
  "xl:[&>*]:basis-[calc((100%-48px)/3)]",
  "xl:[&>*]:basis-[calc((100%-72px)/4)]",
  "xl:[&>*]:basis-[calc((100%-96px)/5)]",
  "xl:[&>*]:basis-[calc((100%-120px)/6)]",
];
export function ContentCarousel({
  children,
  items = 3,
}: {
  children: ReactNode;
  items?: number;
}) {
  const track = useRef<HTMLDivElement>(null);
  function move(direction: number) {
    track.current?.scrollBy({
      left: direction * track.current.clientWidth,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div
        ref={track}
        className={`flex snap-x snap-mandatory gap-6 overflow-x-auto pt-1 pb-3 [&>*]:min-w-0 [&>*]:shrink-0 [&>*]:basis-full [&>*]:snap-start md:[&>*]:basis-[calc((100%-24px)/2)] ${widths[items] ?? widths[3]}`}
      >
        {children}
      </div>
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
    </div>
  );
}
