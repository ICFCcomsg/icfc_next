import { SitePageTemplate } from "@/components/templates/site-page-template";
import { BreadcrumbSection } from "@/components/organisms/about/breadcrumb-section";
import { AboutSection } from "@/components/organisms/about/about-section";
import { JourneySection } from "@/components/organisms/about/journey-section";
import { ServicesSection } from "@/components/organisms/about/services-section";
import { WhyChooseSection } from "@/components/organisms/about/why-choose-section";
import { StatsSection } from "@/components/organisms/about/stats-section";
import { FeaturesSection } from "@/components/organisms/about/features-section";
import { IndustriesSection } from "@/components/organisms/about/industries-section";

export function AboutPageContent() {
  return (
    <SitePageTemplate route="about">
      <main>
        <BreadcrumbSection />
        <AboutSection />
        <JourneySection />
        <ServicesSection />
        <WhyChooseSection />
        <StatsSection />
        <FeaturesSection />
        <IndustriesSection />
      </main>
    </SitePageTemplate>
  );
}
