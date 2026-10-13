import { LegalPageTemplate } from "@/components/templates/legal-page-template";
import blocks from "@/lib/legal/lms-terms.json";

export function LmsTermsPageContent() {
  return <LegalPageTemplate route="training/lms-terms" blocks={blocks} />;
}
