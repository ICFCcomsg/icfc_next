import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { TransferBanner } from "@/components/molecules/transfer-banner";
import { TrainingFormats } from "@/components/organisms/training/training-formats";
import { TrainingTerms } from "@/components/organisms/training/training-terms";
import { SitePageTemplate } from "@/components/templates/site-page-template";

// ponytail: course calendar block left out until the real LMS course feed exists (only sample data today).
export function TrainingPageContent() {
  return (
    <SitePageTemplate route="training">
      <main>
        <SiteBreadcrumb
          title={<Tx ns="training">{"Training and LMS"}</Tx>}
          description={<Tx ns="training">{"Formats, funding, discounts"}</Tx>}
          background="/assets/bg/breadcrumb-bg-thumb-01.webp"
        />
        <TrainingFormats />
        <TrainingTerms />
        <Container className="pb-20">
          <TransferBanner />
        </Container>
      </main>
    </SitePageTemplate>
  );
}
