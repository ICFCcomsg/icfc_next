import { SitePageTemplate } from "@/components/templates/site-page-template";
import { BreadcrumbSection } from "@/components/organisms/services/breadcrumb-section";
import { ServicesSection } from "@/components/organisms/services/services-section";
import { ExcellenceSection } from "@/components/organisms/services/excellence-section";

export function ServicesPageContent() {
  return (
    <SitePageTemplate route="services">
      <main>
        <BreadcrumbSection />
        <ServicesSection />
        <ExcellenceSection />
      </main>
    </SitePageTemplate>
  );
}
