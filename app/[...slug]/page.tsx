import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPageTitle,
  readSitePage,
  sitePageRoutes,
} from "@/lib/site-pages";
import { SitePageTemplate } from "@/components/templates/site-page-template";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sitePageRoutes().map((route) => ({ slug: route.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = (await params).slug.join("/");
  const source = await readSitePage(route);
  return { title: source ? getPageTitle(source) : "ICFC PTE LTD" };
}

export default async function SitePage({ params }: Props) {
  const route = (await params).slug.join("/");
  const source = await readSitePage(route);
  if (!source) notFound();

  return <SitePageTemplate source={source} route={route} />;
}
