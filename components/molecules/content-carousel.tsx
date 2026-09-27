"use client";

import { useRef, type ReactNode } from "react";

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
    <div className="native-carousel">
      <div
        ref={track}
        className="native-carousel-track"
        style={{ "--carousel-items": items } as React.CSSProperties}
      >
        {children}
      </div>
      <div className="rs-swiper-btn-wrapper native-carousel-controls">
        <button
          type="button"
          className="rs-swiper-btn"
          aria-label="Previous slides"
          onClick={() => move(-1)}
        >
          <i className="ri-arrow-left-line" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="rs-swiper-btn"
          aria-label="Next slides"
          onClick={() => move(1)}
        >
          <i className="ri-arrow-right-line" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
