import type { ReactNode } from "react";
import { SiteHeader } from "@/components/organisms/site-header";
import { SiteFooter } from "@/components/organisms/site-footer";
import { FloatingContact } from "@/components/organisms/floating-contact";

export function SitePageTemplate({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-x-clip">
      <SiteHeader route={route} />
      {children}
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
