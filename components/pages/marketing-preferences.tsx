import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { MarketingPreferencesForm } from "@/components/molecules/marketing-preferences-form";

export function MarketingPreferencesPageContent() {
  return (
    <SitePageTemplate route="marketing-preferences">
      <main>
        <SiteBreadcrumb
          title="Marketing preferences"
          description="Choose whether ICFC may contact you with marketing by email or by phone and messaging."
          background="/assets/bg/breadcrumb-bg-thumb-01.webp"
        />
        <section className="py-16 px-6 mx-auto max-w-225">
          <MarketingPreferencesForm />
        </section>
      </main>
    </SitePageTemplate>
  );
}
