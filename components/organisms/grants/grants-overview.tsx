import { Container } from "@/components/atoms/container";
import { Icon } from "@/components/icons/icon";
import { getTranslator } from "@/lib/dictionary";

// Pack section 6, Grants (EDGE): what changed, what EDGE offers, standards support, eligibility.
export async function GrantsOverview() {
  const t = await getTranslator("grants");
  const cards = [
    ["What EDGE offers", "EDGE covers 8 business areas and more than 150 activities, including Standards. Support is up to 70% for SMEs and up to 50% for non-SMEs depending on the activity, with up to S$100,000 in total grant support per year across all activities. The cap refreshes on 1 April each year. Grants are paid as reimbursement after the activity is completed and paid for."],
    ["Standards support", "For most standards, EDGE supports up to 50% for SMEs and up to 30% for non-SMEs. Sustainability standards such as SS 587 are supported at up to 70% for SMEs and up to 50% for non-SMEs. Supported costs are professional services and first-year certification or testing by an accredited body. Surveillance and renewal audits, GST and software are not supported."],
    ["Who is eligible", "Businesses registered and operating in Singapore, with at least 30% local ownership by Singapore citizens or PRs, that have not applied before for the same standard (any version), and that have not started work or paid any vendor before applying. Projects must be completed within 12 months of approval."],
  ];
  return (
    <section className="py-20 max-[767px]:py-12">
      <Container>
        <div className="mb-12 flex gap-5 rounded-xl border border-[#FFE0B5] bg-[#FFF5E6] p-8 max-[767px]:p-6">
          <Icon name="info" className="size-7! shrink-0 text-[#AB052D]" />
          <div>
            <h2 className="mt-0 mb-2 text-[22px] font-semibold text-[#161D2E]">{t("What changed")}</h2>
            <p className="m-0 text-[17px] leading-7 text-[#4A5560]">
              {t("Enterprise Singapore's EDG, MRA and PSG schemes ceased on 29 September 2026. From 30 September 2026, business grant support is applied for under the EDGE Grant. Ongoing EDG, MRA and PSG projects continue to be processed.")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 max-[991px]:grid-cols-1 gap-6">
          {cards.map(([title, text]) => (
            <div key={title} className="rounded-xl bg-[#F0F4FC] p-8">
              <h2 className="mt-0 mb-3 text-[22px] font-semibold text-[#161D2E]">{t(title)}</h2>
              <p className="m-0 text-[16px] leading-7 text-[#4A5560]">{t(text)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
