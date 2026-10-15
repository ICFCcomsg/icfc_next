import { SitePageTemplate } from "@/components/templates/site-page-template";
import { BreadcrumbSection } from "@/components/organisms/industry/breadcrumb-section";
import { WorkingSection } from "@/components/organisms/industry/working-section";
import { IndustryExplorer } from "@/components/organisms/industry-explorer";
import { FeaturesSection } from "@/components/organisms/industry/features-section";
import { ContactSection } from "@/components/organisms/industry/contact-section";

export function IndustryPageContent() {
  return (
    <SitePageTemplate route="industry">
      <main>
        <BreadcrumbSection />
        <WorkingSection />
        <IndustryExplorer />
        <FeaturesSection />
        <ContactSection />
      </main>
    </SitePageTemplate>
  );
}
