import {
  SiteMotion,
  CursorFollower,
} from "@/components/atoms/animated-element";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/organisms/site-header";
import { SiteFooter } from "@/components/organisms/site-footer";

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
        {[
          "about",
          "blog-details",
          "blog-sidebar",
          "blogGreenPlan2030",
          "blog_ISO27701_vs_PDPA_Singapore",
          "blog_ISO42001_AI",
          "blog_LeadAuditor_vs_InternalAuditor",
          "blog_LegacyToCloud_ISO27001",
          "blog_bizsafe",
          "blog_mas",
          "blog_wsh_mom",
          "blogcybersecurity",
          "blogedg",
          "industry",
          "privacy-policy",
          "services",
        ].includes(route) && <CursorFollower />}

        <SiteHeader route={route} />
        {children}
        <SiteFooter />
      </div>
    </SiteMotion>
  );
}
