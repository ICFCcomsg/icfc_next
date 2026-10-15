import { SiteLink } from "@/components/atoms/site-link";
import { ContentSection, prose } from "@/components/molecules/content-section";
import { getTranslator } from "@/lib/dictionary";

// Pack: Funding, Discounts and Prices blocks, shown as cards. Used on /training and /training/funding.
const BLOCKS: [id: string, title: string, text: string][] = [
  ["funding", "Funding", "Some courses may be eligible for funding. Eligibility depends on each course's approval status and the learner's or company's profile, and is shown on the course page. We never show funded prices unless the course is approved for that funding."],
  // ponytail: pack note "[ICFC to confirm discount rates before publishing.]" — no rates are stated here; confirm with ICFC.
  ["discounts", "Discounts", "Clients taking a consulting or audit-preparation project with ICFC may receive a training discount for the same standard. Group bookings and alumni may also qualify. Rates and end dates are shown on the course page and in the LMS terms. We only show a discount against a price that was genuinely offered, and we never add charges at checkout that were not shown upfront."],
  ["prices", "Prices", "Course pages show the full fee in Singapore dollars. ICFC is not GST-registered, so no GST is charged. A funded fee is shown only for courses approved for that funding, together with the eligibility conditions."],
];

export async function TrainingTerms() {
  const t = await getTranslator("training");
  return (
    <ContentSection id="funding" title={t("Funding, discounts and prices")} tinted>
      <div className="grid grid-cols-3 max-[991px]:grid-cols-1 gap-6">
        {BLOCKS.map(([id, title, text]) => (
          <div key={id} className="rounded-xl bg-white p-8 shadow-[0_1px_3px_rgba(22,29,46,0.05)]">
            <h3 className="mt-0 mb-3 text-[22px] font-semibold text-[#161D2E]">{t(title)}</h3>
            <p className="m-0 text-[16px] leading-7 text-[#4A5560]">{t(text)}</p>
          </div>
        ))}
      </div>
      <SiteLink href="/training/lms-terms" className="mt-8 inline-block font-semibold text-[#AB052D] hover:underline">
        {t("LMS terms")} →
      </SiteLink>
    </ContentSection>
  );
}

// Pack: In-house training block.
export async function TrainingInHouse() {
  const t = await getTranslator("training");
  return (
    <ContentSection id="in-house" title={t("In-house training")}>
      <p className={prose}>{t("Courses tailored to your systems and delivered at your premises or online, for groups.")}</p>
    </ContentSection>
  );
}
