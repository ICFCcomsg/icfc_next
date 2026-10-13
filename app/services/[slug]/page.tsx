import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ServicePageContent,
  getService,
  services,
} from "@/components/pages/service";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  return {
    title: s?.title,
    description: s?.description,
    keywords: s?.keywords,
    alternates: { canonical: `/services/${s?.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  return <ServicePageContent service={s} />;
}
