import { LegalPageTemplate } from "@/components/templates/legal-page-template";
import blocks from "@/lib/legal/privacy-policy.json";

export function PrivacyPolicyPageContent() {
  return <LegalPageTemplate route="privacy-policy" blocks={blocks} />;
}
