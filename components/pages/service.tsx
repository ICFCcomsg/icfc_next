import { Container } from "@/components/atoms/container";
import { TransferBanner } from "@/components/molecules/transfer-banner";
import { ServiceFacts } from "@/components/organisms/service/service-facts";
import { ServiceFaq } from "@/components/organisms/service/service-faq";
import { ServiceFunding } from "@/components/organisms/service/service-funding";
import { ServiceHero } from "@/components/organisms/service/service-hero";
import { ServiceHowWeHelp } from "@/components/organisms/service/service-how-we-help";
import { ServiceKeyDetails } from "@/components/organisms/service/service-key-details";
import { ServiceOverview } from "@/components/organisms/service/service-overview";
import { ServiceProfileRow } from "@/components/organisms/service/service-profile-row";
import { ServiceReferences } from "@/components/organisms/service/service-references";
import { ServiceResources } from "@/components/organisms/service/service-resources";
import { ServiceStructuredData } from "@/components/organisms/service/service-structured-data";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import type { ServiceContent } from "@/lib/dictionary";

export function ServicePageContent({ service }: { service: ServiceContent }) {
  return (
    <SitePageTemplate route={`services/${service.slug}`}>
      <main>
        <ServiceHero service={service} />
        <ServiceStructuredData service={service} />
        <ServiceProfileRow service={service} />
        <ServiceFacts service={service} />
        <ServiceOverview service={service} />
        <ServiceKeyDetails service={service} />
        <ServiceFunding service={service} />
        <ServiceHowWeHelp service={service} />
        <ServiceFaq service={service} />
        <ServiceResources service={service} />
        <Container>
          <TransferBanner />
        </Container>
        <ServiceReferences service={service} />
      </main>
    </SitePageTemplate>
  );
}
