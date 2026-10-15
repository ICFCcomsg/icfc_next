import { SiteLink } from "@/components/atoms/site-link";
import { ContentSection, prose } from "@/components/molecules/content-section";
import { getTranslator } from "@/lib/dictionary";

export async function GrantsWithIcfc() {
  const t = await getTranslator("grants");
  return (
    <ContentSection title={t("Working with ICFC on EDGE")}>
      <p className={prose}>
        {t("ICFC's consultancy is led by SS 680:2021 certified consultants. Our proposal names the certified consultant, includes their SS 680 certification details, and sets out the scope and quotation EDGE asks for. We do not apply, pay or claim on your behalf, we do not offer rebates or other incentives linked to a grant, and we do not quote different prices because a grant is involved. For our SS 680 certified consultants' roles, certificate numbers, issuing body and expiry dates, or a link to the issuing body's register, please email us through the contact form.")}
      </p>
      <SiteLink href="/about/ss-680-certified-consultancy" className="mt-6 inline-block font-semibold text-[#AB052D] hover:underline">
        {t("SS 680 certified consultancy")} →
      </SiteLink>
    </ContentSection>
  );
}
