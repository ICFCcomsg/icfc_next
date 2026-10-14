import type { ComponentProps } from "react";

export function SiteImage(props: ComponentProps<"img">) {
  // Reference images retain their intrinsic dimensions and responsive CSS.
  // Lazy by default; pass loading="eager" for images above the fold (such as the header logo).
  // eslint-disable-next-line @next/next/no-img-element
  return <img loading="lazy" decoding="async" {...props} alt={props.alt ?? ""} />;
}
