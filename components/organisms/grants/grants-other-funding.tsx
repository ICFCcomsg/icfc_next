import { ContentSection, prose } from "@/components/molecules/content-section";
import { getTranslator } from "@/lib/dictionary";

export async function GrantsOtherFunding() {
  const t = await getTranslator("grants");
  return (
    <ContentSection title={t("Other funding")} tinted>
      <p className={prose}>
        {t("CSA funds the first Cyber Trust certification (up to S$3,600 across the four pillars) and the first Cyber Essentials certification for Singapore-incorporated SMEs and non-profits until 6 February 2028, deducted by the CSA-appointed certification body. For the DPTM, IMDA points companies to Enterprise Singapore, now the EDGE Grant, and charities to NCSS Tech-and-GO!. IMDA indicates funding support for some CBPR and PRP costs. CSA also supports eligible SMEs through CSA-listed CISO-as-a-Service providers. Training funding depends on each course's approval status.")}
      </p>
      <p className="mt-8 mb-0 max-w-4xl border-t border-[#DBDEE1] pt-5 text-[14px] leading-6 text-[#616C74]">
        {t("Grant information is a summary for convenience, checked on 11 October 2026. Enterprise Singapore, CSA and IMDA decide eligibility and amounts. Always confirm on the official pages before applying.")}
      </p>
    </ContentSection>
  );
}
