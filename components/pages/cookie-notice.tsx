import { LegalPageTemplate } from "@/components/templates/legal-page-template";
import blocks from "@/lib/legal/cookie-notice.json";

export function CookieNoticePageContent() {
  return <LegalPageTemplate route="cookie-notice" blocks={blocks} />;
}
