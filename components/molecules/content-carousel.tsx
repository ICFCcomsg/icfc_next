"use client";
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
  type ReactElement,
  type HTMLAttributes,
} from "react";
import { animate, useReducedMotion } from "motion/react";
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
  const reduced = useReducedMotion();
  const loop = variant !== "portfolio";
  const slides = Children.toArray(children);
  const animation = useRef<ReturnType<typeof animate> | null>(null);
  const move = useCallback(
    (direction: number) => {
      const element = track.current;
      if (!element || !element.getClientRects().length) return;
      const step =
        element.firstElementChild?.getBoundingClientRect().width ??
        element.clientWidth;
      const gap = variant === "brands" ? 0 : 30;
      const cycle = slides.length * (step + gap);
      if (cycle - gap <= element.clientWidth + 1) return;
      const maximum = element.scrollWidth - element.clientWidth;
      let target = element.scrollLeft + direction * (step + gap);
      if (!loop) target = Math.max(0, Math.min(maximum, target));
      else if (target < 0) {
        element.scrollLeft += cycle;
        target += cycle;
      }
      animation.current?.stop();
      element.dataset.animating = "true";
      const finish = () => {
        if (loop && element.scrollLeft >= cycle) element.scrollLeft -= cycle;
        delete element.dataset.animating;
      };
      if (reduced) {
        element.scrollLeft = target;
        finish();
        return;
      }
      animation.current = animate(element.scrollLeft, target, {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
        onUpdate: (value) => {
          element.scrollLeft = value;
        },
        onComplete: finish,
      });
    },
    [loop, reduced, slides.length, variant],
  );
  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(
      () => {
        if (!paused.current) move(1);
      },
      variant === "brands" ? 3000 : 3500,
    );
    return () => {
      window.clearInterval(timer);
      animation.current?.stop();
    };
  }, [move, reduced, variant]);
  const widths =
    items === 1
      ? "*:basis-full"
      : variant === "brands"
        ? "*:basis-full min-[481px]:*:basis-1/2 min-[768px]:*:basis-1/3 min-[992px]:*:basis-1/4 min-[1200px]:*:basis-1/5 min-[1600px]:*:basis-1/6"
        : variant === "testimonials"
          ? "*:basis-full min-[768px]:*:basis-[calc((100%-30px)/2)] min-[1600px]:*:basis-[calc((100%-60px)/3)]"
          : "*:basis-full min-[768px]:*:basis-[calc((100%-30px)/2)] min-[1200px]:*:basis-[calc((100%-60px)/3)]";
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
        className={`flex snap-x snap-mandatory data-animating:snap-none overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden *:min-w-0 *:shrink-0 *:snap-start ${variant === "brands" ? "gap-0 *:flex *:items-center *:justify-center" : "gap-7.5"} ${widths}`}
      >
        {children}
        {loop &&
          slides.map((slide, index) =>
            isValidElement(slide)
              ? cloneElement(
                  slide as ReactElement<HTMLAttributes<HTMLDivElement>>,
                  { key: `loop-${index}`, "aria-hidden": true, inert: true },
                )
              : null,
          )}
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
