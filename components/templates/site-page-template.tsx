import {
  SiteMotion,
  CursorFollower,
} from "@/components/atoms/animated-element";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/organisms/site-header";
import { SiteFooter } from "@/components/organisms/site-footer";
import { getSiteFlags } from "@/lib/frappe";

export async function SitePageTemplate({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
}) {
  const flags = await getSiteFlags();
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

        <SiteHeader route={route} onlineCourses={!!flags.enable_online_course} />
        {children}
        <SiteFooter onlineCourses={!!flags.enable_online_course} />
      </div>
    </SiteMotion>
  );
}
