import type { ComponentProps } from "react";

export function SiteImage(props: ComponentProps<"img">) {
  // Reference images retain their intrinsic dimensions and responsive CSS.
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt ?? ""} />;
}
