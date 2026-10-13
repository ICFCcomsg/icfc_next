import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageContent } from "@/components/pages/service";
import { alternatesFor } from "@/lib/i18n";
import { getService } from "@/lib/dictionary";
import { services } from "@/lib/service-data";

type Props = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const s = await getService(slug);
  return {
    title: s?.title,
    description: s?.description,
    keywords: s?.keywords,
    alternates: alternatesFor(lang, `/services/${slug}`),
  };
}

export default async function ServicePage({ params }: Props) {
  const s = await getService((await params).slug);
  if (!s) notFound();
  return <ServicePageContent service={s} />;
}
