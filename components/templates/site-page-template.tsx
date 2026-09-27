import type { ReactNode } from "react";
import { SiteHeader } from "@/components/organisms/site-header";
import { SiteFooter } from "@/components/organisms/site-footer";
import { FloatingContact } from "@/components/organisms/floating-contact";

export function SitePageTemplate({
  route,
  stylesheets,
  children,
}: {
  route: string;
  stylesheets: string[];
  children: ReactNode;
}) {
  return (
    <>
      {stylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      {/* Static public styles preserve the reference CSS cascade. */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" href="/styles/native-components.css" />
      <div className="icfc-site">
        <SiteHeader route={route} />
        {children}
        <SiteFooter />
        <FloatingContact />
      </div>
    </>
  );
}
