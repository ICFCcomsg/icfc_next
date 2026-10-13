import { LegalPageTemplate } from "@/components/templates/legal-page-template";
import { getLegal } from "@/lib/dictionary";

export async function CookieNoticePageContent() {
  const blocks = await getLegal("cookie-notice");
  return <LegalPageTemplate route="cookie-notice" blocks={blocks} />;
}
