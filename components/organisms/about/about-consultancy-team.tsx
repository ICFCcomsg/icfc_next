import { SiteLink } from "@/components/atoms/site-link";
import { Container } from "@/components/atoms/container";
import { getTranslator } from "@/lib/dictionary";

// Pack: SS 680 certified consultancy summary and Our team (roles only, no names).
const ROLES = ["Principal Auditor", "Senior Auditor", "Principal Consultant", "Senior Consultant", "Lead Trainer"];

export async function AboutConsultancyTeam() {
  const t = await getTranslator("about");
  return (
    <section className="py-20 max-[767px]:py-12">
      <Container className="grid grid-cols-2 max-[991px]:grid-cols-1 gap-6">
        <div id="ss-680" className="scroll-mt-32 rounded-xl bg-[#161D2E] p-10 text-white max-[767px]:p-7">
          <h2 className="mt-0 mb-4 text-[26px] font-semibold text-white">{t("SS 680 certified consultancy")}</h2>
          <p className="m-0 text-[17px] leading-7 text-white/80">
            {t("ICFC's consultancy is led by management consultants certified to SS 680:2021, the Singapore Standard for management consultants. SS 680 certification is awarded to individuals by SAC-accredited certification bodies, so it is held by our consultants and not by ICFC as a company. Enterprise Singapore requires it for consultancy support under EDGE Standards activities. For our consultants' roles, certificate numbers, issuing body and expiry dates, or a link to the issuing body's register, please email us through the contact form.")}
          </p>
          <SiteLink href="/about/ss-680-certified-consultancy" className="mt-6 inline-block font-semibold text-white underline hover:text-[#FBE3E8]">
            {t("SS 680 certified consultancy")} →
          </SiteLink>
        </div>
        <div id="team" className="scroll-mt-32 rounded-xl bg-[#F0F4FC] p-10 max-[767px]:p-7">
          <h2 className="mt-0 mb-4 text-[26px] font-semibold text-[#161D2E]">{t("Our team")}</h2>
          <ul className="m-0 mb-5 p-0 list-none flex flex-wrap gap-2">
            {ROLES.map((r) => (
              <li key={r} className="rounded-full bg-white px-4 py-2 text-[15px] font-medium text-[#2B3944]">{t(r)}</li>
            ))}
          </ul>
          <p className="m-0 text-[17px] leading-7 text-[#4A5560]">{t("Each holding lead auditor training in their domains.")}</p>
        </div>
      </Container>
    </section>
  );
}
