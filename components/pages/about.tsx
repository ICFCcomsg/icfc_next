import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { TransferBanner } from "@/components/molecules/transfer-banner";
import { AboutConsultancyTeam } from "@/components/organisms/about/about-consultancy-team";
import { AboutReach } from "@/components/organisms/about/about-reach";
import { AboutStory } from "@/components/organisms/about/about-story";
import { SitePageTemplate } from "@/components/templates/site-page-template";

export function AboutPageContent() {
  return (
    <SitePageTemplate route="about">
      <main>
        <SiteBreadcrumb
          title={<Tx ns="about">{"About ICFC"}</Tx>}
          description={<Tx ns="about">{"Audit, consulting and training in Singapore since 2014."}</Tx>}
        />
        <AboutStory />
        <AboutReach />
        <AboutConsultancyTeam />
        <Container className="pb-20">
          <TransferBanner />
        </Container>
      </main>
    </SitePageTemplate>
  );
}
