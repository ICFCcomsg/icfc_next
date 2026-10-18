import { Tx } from "@/components/atoms/tx";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { TransferBanner } from "@/components/molecules/transfer-banner";
import { Container } from "@/components/atoms/container";
import { GrantsFundingTable } from "@/components/organisms/grants/grants-funding-table";
import { GrantsHowToApply } from "@/components/organisms/grants/grants-how-to-apply";
import { GrantsListedStandards } from "@/components/organisms/grants/grants-listed-standards";
import { GrantsOtherFunding } from "@/components/organisms/grants/grants-other-funding";
import { GrantsOverview } from "@/components/organisms/grants/grants-overview";
import { GrantsWithIcfc } from "@/components/organisms/grants/grants-with-icfc";
import { SitePageTemplate } from "@/components/templates/site-page-template";

export function GrantsEdgePageContent() {
  return (
    <SitePageTemplate route="grants/edge">
      <main>
        <SiteBreadcrumb
          title={<Tx ns="grants">{"Grants (EDGE)"}</Tx>}
          description={<Tx ns="grants">{"What EDGE covers, eligibility, step-by-step application, standards listed under EDGE, other schemes."}</Tx>}
        />
        <GrantsOverview />
        <GrantsHowToApply />
        <GrantsWithIcfc />
        <GrantsListedStandards />
        <GrantsFundingTable />
        <GrantsOtherFunding />
        <Container className="pb-20">
          <TransferBanner />
        </Container>
      </main>
    </SitePageTemplate>
  );
}
