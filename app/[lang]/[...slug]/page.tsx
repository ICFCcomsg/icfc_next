import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/i18n";
import { getSitePage, sitePageRoutes } from "@/lib/site-pages";

type Props = { params: Promise<{ lang: string; slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sitePageRoutes().map((route) => ({ slug: route.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = getSitePage(slug.join("/"));
  const meta = pageMetadata(lang, page?.canonical ?? "/" + slug.join("/"), page?.title ?? "ICFC Pte Ltd", page?.description || undefined);
  return { ...meta, ...(page?.noindex && { robots: { index: false, follow: true } }) };
}

export default async function SitePage({ params }: Props) {
  const page = getSitePage((await params).slug.join("/"));
  if (!page) notFound();
  const Content = page.component;
  return <Content />;
}
