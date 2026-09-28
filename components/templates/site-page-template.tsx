import { SiteMotion } from "@/components/atoms/animated-element";
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
    <SiteMotion>
      <div className="overflow-x-clip">
        <SiteHeader route={route} />
        {children}
        <SiteFooter />
        <FloatingContact />
      </div>
    </SiteMotion>
  );
}
