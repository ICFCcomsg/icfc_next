import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { TransferBanner } from "@/components/molecules/transfer-banner";
import { TrainingCalendar } from "@/components/organisms/training/training-calendar";
import { TrainingFormats } from "@/components/organisms/training/training-formats";
import { TrainingInHouse, TrainingTerms } from "@/components/organisms/training/training-terms";
import { SitePageTemplate } from "@/components/templates/site-page-template";

export function TrainingPageContent() {
  return (
    <SitePageTemplate route="training">
      <main>
        <SiteBreadcrumb
          title={<Tx ns="training">{"Training and LMS"}</Tx>}
          description={<Tx ns="training">{"Formats, calendar, funding, discounts"}</Tx>}
        />
        <TrainingFormats />
        <TrainingCalendar />
        <TrainingTerms />
        <TrainingInHouse />
        <Container className="pb-20">
          <TransferBanner />
        </Container>
      </main>
    </SitePageTemplate>
  );
}
