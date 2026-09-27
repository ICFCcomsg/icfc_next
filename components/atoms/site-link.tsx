import Link from "next/link";
import type { ComponentProps } from "react";

export function SiteLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}
