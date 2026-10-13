import { LegalPageTemplate } from "@/components/templates/legal-page-template";
import { getLegal } from "@/lib/dictionary";

export async function PrivacyPolicyPageContent() {
  const blocks = await getLegal("privacy-policy");
  return <LegalPageTemplate route="privacy-policy" blocks={blocks} />;
}
