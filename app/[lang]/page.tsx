import type { Metadata } from "next";
import { IndexPageContent } from "@/components/pages/index";
import { pageMetadata } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  return pageMetadata(
    (await params).lang,
    "/",
    "ICFC Pte Ltd | Audit, Consulting and Training Singapore",
    "Audit, consulting and training for ISO management systems, cybersecurity, data protection and sustainability standards in Singapore.",
  );
}

export default function Home() {
  return <IndexPageContent />;
}
