import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternatesFor } from "@/lib/i18n";
import { getSitePage, sitePageRoutes } from "@/lib/site-pages";

type Props = { params: Promise<{ lang: string; slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sitePageRoutes().map((route) => ({ slug: route.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = getSitePage(slug.join("/"));
  return {
    title: page?.title ?? "ICFC Pte Ltd",
    description: page?.description,
    alternates: alternatesFor(lang, "/" + slug.join("/")),
  };
}

export default async function SitePage({ params }: Props) {
  const page = getSitePage((await params).slug.join("/"));
  if (!page) notFound();
  const Content = page.component;
  return <Content />;
}
