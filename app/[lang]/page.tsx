import type { Metadata } from "next";
import { IndexPageContent } from "@/components/pages/index";
import { alternatesFor } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  return { alternates: alternatesFor((await params).lang, "/") };
}

export default function Home() {
  return <IndexPageContent />;
}
