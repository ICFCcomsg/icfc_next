import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSitePage, sitePageRoutes } from "@/lib/site-pages";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sitePageRoutes().map((route) => ({ slug: route.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getSitePage((await params).slug.join("/"));
  return {
    title: page?.title ?? "ICFC PTE LTD",
    description: page?.description,
  };
}

export default async function SitePage({ params }: Props) {
  const page = getSitePage((await params).slug.join("/"));
  if (!page) notFound();
  const Content = page.component;
  return <Content />;
}
