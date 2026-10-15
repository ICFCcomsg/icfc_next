import { SitePageTemplate } from "@/components/templates/site-page-template";
import { BreadcrumbSection } from "@/components/organisms/contact/breadcrumb-section";
import { ContactSection } from "@/components/organisms/contact/contact-section";
import { MissionSection } from "@/components/organisms/contact/mission-section";

export function ContactUsPageContent() {
  return (
    <SitePageTemplate route="contact-us">
      <main>
        <BreadcrumbSection />
        <ContactSection />
        <MissionSection />
      </main>
    </SitePageTemplate>
  );
}
