import { Container } from "@/components/atoms/container";
import { EnquiryButton } from "@/components/atoms/enquiry-button";
import { SiteLink } from "@/components/atoms/site-link";
import { Tx } from "@/components/atoms/tx";
import { ContentSection, prose } from "@/components/molecules/content-section";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { getServices, getTranslator } from "@/lib/dictionary";

// Pack section 6, "SS 680 certified consultancy page".
const COMMITMENTS = [
  "We keep consulting and auditing roles separate",
  "We do not offer rebates or incentives linked to grants",
  "We quote the same price whether or not you use a grant",
  "We tell you clearly when a standard is not covered by EDGE",
];

export async function Ss680PageContent() {
  const [t, services] = await Promise.all([getTranslator("ss-680"), getServices()]);
  const listed = services.filter((s) => s.edgeStatus.startsWith("Listed under EDGE"));
  return (
    <SitePageTemplate route="about/ss-680-certified-consultancy">
      <main>
        <SiteBreadcrumb
          title={<Tx ns="ss-680">{"Consultancy led by SS 680 certified consultants"}</Tx>}
          description={<Tx ns="ss-680">{"SS 680:2021 is the Singapore Standard for management consultants. It covers the consultancy process, competence, ethics and continuing professional development. ICFC's consultancy is led by consultants who hold SS 680:2021 certification, which Enterprise Singapore requires for consultancy support under EDGE Standards activities. The certification is held by our individual consultants, not by ICFC as a company."}</Tx>}
          background="/assets/bg/breadcrumb-bg-thumb-01.webp"
        />
        <section className="py-20 max-[767px]:py-12">
          <Container className="grid grid-cols-2 max-[991px]:grid-cols-1 gap-6">
            {[
              ["What SS 680 certification means", "SS 680 certification is awarded to individual consultants by certification bodies accredited by the Singapore Accreditation Council under ISO/IEC 17024. Certification bodies assess qualifications, consulting experience, skills and ethics, and certification is typically renewed every three years with continuing professional development."],
              ["What it means for your EDGE project", "Our proposal names the SS 680 certified consultant who will lead your project and includes their certification details, so you have the documents EDGE asks for. The named consultant appears in your Letter of Offer and bills the claim invoices. You apply, pay and claim yourself; we do not act for you on the Business Grants Portal."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl bg-[#F0F4FC] p-10 max-[767px]:p-7">
                <h2 className="mt-0 mb-4 text-[26px] font-semibold text-[#161D2E]">{t(title)}</h2>
                <p className="m-0 text-[17px] leading-7 text-[#4A5560]">{t(text)}</p>
              </div>
            ))}
          </Container>
        </section>
        <ContentSection title={t("Consultant details")} tinted>
          <p className={prose}>
            {t("For our SS 680 certified consultants' roles, certificate numbers, issuing body and expiry dates, or a link to the issuing body's register, please email us through the contact form.")}
          </p>
          <EnquiryButton
            type="Other"
            message="SS 680 consultant details"
            className="mt-6 rounded-full bg-[#AB052D] px-7 py-3.5 font-medium text-white hover:bg-[#9D0026]"
          >
            {t("Contact us")}
          </EnquiryButton>
        </ContentSection>
        <ContentSection title={t("Our commitments")}>
          <ul className="m-0 p-0 list-none grid grid-cols-2 max-[767px]:grid-cols-1 gap-4">
            {COMMITMENTS.map((c) => (
              <li key={c} className="flex gap-3 rounded-xl border border-[#DBDEE1] p-5 text-[17px] text-[#2B3944]">
                <span className="text-[#AB052D]" aria-hidden="true">✓</span>
                {t(c)}
              </li>
            ))}
          </ul>
        </ContentSection>
        <ContentSection title={t("Related")} tinted>
          <div className="mb-6 flex flex-wrap gap-x-8 gap-y-2">
            <SiteLink href="/grants/edge" className="font-semibold text-[#AB052D] hover:underline">{t("Grants (EDGE)")} →</SiteLink>
            <SiteLink href="/about#impartiality" className="font-semibold text-[#AB052D] hover:underline">{t("Impartiality")} →</SiteLink>
          </div>
          <ul className="m-0 p-0 list-none flex flex-wrap gap-2">
            {listed.map((s) => (
              <li key={s.slug}>
                <SiteLink href={`/services/${s.slug}`} className="inline-block rounded-full border border-[#DBDEE1] bg-white px-4 py-2 text-[14px] text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]">
                  {s.name}
                </SiteLink>
              </li>
            ))}
          </ul>
        </ContentSection>
      </main>
    </SitePageTemplate>
  );
}
