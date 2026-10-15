import { ContentSection, prose } from "@/components/molecules/content-section";
import { getTranslator } from "@/lib/dictionary";

// Pack: Regional reach text and the "Regional reach block" table.
const MARKETS: [string, string][] = [
  ["Singapore", "Headquarters and core team"],
  ["Malaysia", "Partners and associate consultants"],
  ["China", "Partners and associate consultants"],
  ["Hong Kong", "Partners and associate consultants"],
  ["India", "Partners and associate consultants"],
];

export async function AboutReach() {
  const t = await getTranslator("about");
  return (
    <ContentSection id="regional-reach" title={t("Regional reach")} tinted>
      <p className={`${prose} mb-8!`}>
        {t("From Singapore, we work with partners and associate consultants in Malaysia, China, Hong Kong and India, so clients with regional operations get consistent support.")}
      </p>
      <ul className="m-0 p-0 list-none grid grid-cols-5 max-[991px]:grid-cols-2 max-[480px]:grid-cols-1 gap-4">
        {MARKETS.map(([market, how], i) => (
          <li key={market} className={`rounded-xl p-6 ${i === 0 ? "bg-[#AB052D] text-white" : "bg-white"}`}>
            <h3 className={`mt-0 mb-2 text-[20px] font-semibold ${i === 0 ? "text-white" : "text-[#161D2E]"}`}>{t(market)}</h3>
            <p className={`m-0 text-[15px] leading-6 ${i === 0 ? "text-white/85" : "text-[#4A5560]"}`}>{t(how)}</p>
          </li>
        ))}
      </ul>
    </ContentSection>
  );
}
