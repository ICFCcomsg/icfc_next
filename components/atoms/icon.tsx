import type { ComponentProps } from "react";

const paths: Record<string, string> = {
  search: "m21 21-5-5 M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  menu: "M3 5h18 M3 12h18 M3 19h18",
  close: "m6 6 12 12 M6 18 18 6",
  check: "m5 12 4 4 10-10",
  right: "M4 12h16 m-6-6 6 6-6 6",
  left: "M20 12H4 m6-6-6 6 6 6",
  up: "M12 20V4 m-6 6 6-6 6 6",
  down: "m5 9 7 7 7-7",
  diagonal: "M5 19 19 5 M5 5h14v14",
  mail: "M3 5h18v14H3z m0 1 9 7 9-7",
  phone: "M8 3H4v4c0 7 6 13 13 13h4v-4l-5-2-2 3c-3-1-6-4-7-7l3-2z",
  chat: "M21 11a9 9 0 0 1-9 9H3l2-4a9 9 0 1 1 16-5 M8 10h8 M8 14h5",
  shield: "m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6z m-5 10 3 3 5-5",
  globe:
    "M3 12h18 M12 3c-6 5-6 13 0 18 6-5 6-13 0-18 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  building:
    "M4 21V7h9v14 M13 11h7v10 M7 10h3 M7 14h3 M7 18h3 M16 14h1 M16 18h1 M2 21h20",
  user: "M20 21v-3a8 8 0 0 0-16 0v3 M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  star: "m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z",
  calendar: "M4 5h16v16H4z M4 10h16 M8 2v6 M16 2v6",
  clock: "M12 7v5l4 2 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  link: "m10 14 4-4 M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0 M16 8l1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0",
  plus: "M12 4v16 M4 12h16",
  facebook: "M14 22V12h4l1-4h-5V6c0-2 1-3 3-3h2V0h-3c-4 0-6 2-6 6v2H6v4h4v10",
  linkedin: "M4 9v12 M4 4v.1 M10 21V9h4v2c3-4 7-2 7 2v8 M14 12v9",
  x: "M4 3h4l12 18h-4z M20 3 4 21",
  play: "m9 6 10 6-10 6z",
  wechat:
    "M15 10a6 6 0 0 1-6 6H3l1-3a6 6 0 1 1 11-3 M10 16a6 6 0 0 0 6 5h5l-1-3a6 6 0 0 0-5-9 M6 9h.1 M10 9h.1 M15 15h.1 M18 15h.1",
  whatsapp:
    "M21 12a9 9 0 0 1-9 9H3l2-4a9 9 0 1 1 16-5 M9 7l-2 1c0 4 4 8 8 8l1-2-3-1-1 1-3-3 1-1z",
  card: "M3 5h18v14H3z M3 10h18 M6 15h4",
  heart: "M12 21 3 12C-3 5 7-1 12 6c5-7 15-1 9 6z M3 12h5l2-3 3 6 2-3h6",
  truck: "M3 5h12v12H3z M15 9h4l3 4v4h-7 M5 17v4h4v-4 M17 17v4h4v-4",
  hammer: "m5 4 3-3 8 8-3 3z M10 10 2 18l4 4 8-8 M15 4l4 4",
  shopping: "M4 7h16l1 14H3z M8 8V6a4 4 0 0 1 8 0v2",
  cloud: "M7 19a5 5 0 1 1-1-10 7 7 0 0 1 13 0 5 5 0 0 1-1 10z",
  food: "M5 2v7 M2 2v4c0 4 6 4 6 0V2 M5 9v13 M20 22V2c-5 0-5 12 0 12",
  education: "m2 8 10-5 10 5-10 5z M6 10v8c4 3 8 3 12 0v-8 M22 8v8",
  briefcase: "M3 7h18v14H3z M8 7V3h8v4 M3 12h18 M10 12v3h4v-3",
  leaf: "M20 3C4 1 0 16 8 19 18 22 23 9 20 3z M3 22 17 8",
  flask: "M8 2h8 M10 2v7L3 20v2h18v-2L14 9V2 M6 15h12",
  chart: "M3 3v18h18 M7 17v-5 M12 17V7 M17 17v-8",
  survey: "M8 4H4v18h16V4h-4 M8 2h8v5H8z M8 12h8 M8 17h8",
  file: "M6 3h9l5 5v13H6z M15 3v5h5 M3 7v14h13 M10 12h6 M10 16h6",
  info: "M12 11v6 M12 7v.1 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  alert: "m12 3 10 18H2z M12 9v5 M12 17v.1",
  tag: "M3 3h8l10 10-8 8L3 11z M7 7h.1",
  quote: "M10 4H3v9h4c0 3-2 5-4 6 M21 4h-7v9h4c0 3-2 5-4 6",
  merge: "M6 3v18 M18 3v6c0 5-12 2-12 8 M3 18l3 3 3-3 M15 6l3-3 3 3",
  presentation: "M3 3h18v14H3z M12 17v5 M7 22l5-5 5 5 M7 12l3-3 3 2 4-5",
  bulb: "M9 21h6 M9 17h6v-3c6-5 2-12-3-12s-9 7-3 12z",
};

export function Icon({
  name,
  className = "",
  ...props
}: Omit<ComponentProps<"svg">, "name"> & { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`inline-block size-[1em] shrink-0 align-middle ${className}`}
      {...props}
    >
      <path d={paths[name] ?? paths.building} />
    </svg>
  );
}
