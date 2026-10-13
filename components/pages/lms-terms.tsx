import { LegalPageTemplate } from "@/components/templates/legal-page-template";
import { getLegal } from "@/lib/dictionary";

export async function LmsTermsPageContent() {
  const blocks = await getLegal("lms-terms");
  return <LegalPageTemplate route="training/lms-terms" blocks={blocks} />;
}
