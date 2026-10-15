import { Tx } from "@/components/atoms/tx";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { TrainingTerms } from "@/components/organisms/training/training-terms";
import { SitePageTemplate } from "@/components/templates/site-page-template";

// Pack sitemap: /training/funding, "Minimal funding and discount content".
export function TrainingFundingPageContent() {
  return (
    <SitePageTemplate route="training/funding">
      <main>
        <SiteBreadcrumb
          title={<Tx ns="training">{"Funding and discounts"}</Tx>}
          background="/assets/bg/breadcrumb-bg-thumb-01.webp"
        />
        <TrainingTerms />
      </main>
    </SitePageTemplate>
  );
}
