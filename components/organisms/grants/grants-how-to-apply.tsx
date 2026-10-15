import { ContentSection } from "@/components/molecules/content-section";
import { getTranslator } from "@/lib/dictionary";

const STEPS = [
  "Prepare the consultant's proposal and quotation, the consultant's SS 680 certification, the certification body's quotation and accreditation details, and projections of revenue and jobs.",
  "Apply yourself on the Business Grants Portal using Corppass, with your own authorised staff; consultants and other third parties cannot apply, manage the grant, pay or claim for you.",
  "Declare any relationship with your vendors; related parties cannot be used.",
  "Accept the Letter of Offer. Vendors cannot be changed after approval.",
  "Complete the project and submit deliverables, including the accredited certificate.",
  "Claim after full payment, with invoices billed by the consultant named in the Letter of Offer, by PayNow Corporate or GIRO.",
];

export async function GrantsHowToApply() {
  const t = await getTranslator("grants");
  return (
    <ContentSection id="how-to-apply" title={t("How to apply")} tinted>
      <ol className="m-0 p-0 list-none grid grid-cols-2 max-[991px]:grid-cols-1 gap-4">
        {STEPS.map((step, i) => (
          <li key={i} className="flex gap-5 rounded-xl bg-white p-6 shadow-[0_1px_3px_rgba(22,29,46,0.05)]">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#AB052D] font-semibold text-white">{i + 1}</span>
            <p className="m-0 text-[16px] leading-7 text-[#4A5560]">{t(step)}</p>
          </li>
        ))}
      </ol>
    </ContentSection>
  );
}
