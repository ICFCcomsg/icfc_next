import { ContentSection } from "@/components/molecules/content-section";
import { getTranslator } from "@/lib/dictionary";

// Pack section 6, About: Our story, What we do, Impartiality, Our auditors.
const BLOCKS: [id: string, title: string, text: string][] = [
  ["story", "Our story", "ICFC Pte Ltd was founded in Singapore in 2014 to help organisations build management systems that work in practice, not just on paper. Over 12 years we have grown from management system consulting into a full audit, consulting and training firm, serving more than 250 clients."],
  ["what-we-do", "What we do", "We deliver third-party audits through our auditors on behalf of accredited certification bodies, second-party supplier audits and internal audits; consulting with or without grant support; readiness support for SOC 1 and SOC 2 reports, HIPAA, GDPR and CMMI; and training in class and online through our ICFC Digital learning platform."],
  ["impartiality", "Impartiality", "Impartiality is our primary principle on every service. We check for conflicts of interest before accepting work, keep consulting and auditing roles apart, and decline engagements that could compromise an audit outcome. We do not certify organisations ourselves; certificates are issued by accredited certification bodies or scheme owners."],
  ["auditors", "Our auditors", "Our auditors are third-party auditors who support leading global certification bodies. They are experienced in integrated management system audits, combining standards such as quality, environment, safety, information security and privacy in one efficient audit."],
];

export async function AboutStory() {
  const t = await getTranslator("about");
  return (
    <ContentSection title={t("About ICFC")}>
      <div className="grid grid-cols-2 max-[991px]:grid-cols-1 gap-6">
        {BLOCKS.map(([id, title, text]) => (
          <div key={id} id={id} className={`scroll-mt-32 rounded-xl p-10 max-[767px]:p-7 ${id === "impartiality" ? "border-l-8 border-[#AB052D] bg-white shadow-[0_1px_3px_rgba(22,29,46,0.08)]" : "bg-[#F0F4FC]"}`}>
            <h3 className="mt-0 mb-4 text-[26px] font-semibold text-[#161D2E]">{t(title)}</h3>
            <p className="m-0 text-[17px] leading-7 text-[#4A5560]">{t(text)}</p>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}
