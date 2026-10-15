import { Container } from "@/components/atoms/container";
import { TransferBanner } from "@/components/molecules/transfer-banner";
import { HomeHero } from "@/components/organisms/home/home-hero";
import { HomeServiceFinder } from "@/components/organisms/home/home-service-finder";
import { HomeTrustNumbers } from "@/components/organisms/home/home-trust-numbers";
import { HomeServiceGroups } from "@/components/organisms/home/home-service-groups";
import { HomeWays } from "@/components/organisms/home/home-ways";
import { HomeEdge } from "@/components/organisms/home/home-edge";
import { HomeWhy } from "@/components/organisms/home/home-why";
import { HomeIndustries } from "@/components/organisms/home/home-industries";
import { HomeInsights } from "@/components/organisms/home/home-insights";
import { HomeContact } from "@/components/organisms/home/home-contact";
import { SitePageTemplate } from "@/components/templates/site-page-template";

export function IndexPageContent() {
  return (
    <SitePageTemplate route="index">
      <main>
        <HomeHero />
        <HomeServiceFinder />
        <HomeTrustNumbers />
        <HomeServiceGroups />
        <HomeWays />
        <HomeEdge />
        <HomeWhy />
        <HomeIndustries />
        <HomeInsights />
        <Container className="pt-20">
          <TransferBanner />
        </Container>
        <HomeContact />
      </main>
    </SitePageTemplate>
  );
}
