import { SiteLink } from "@/components/atoms/site-link";
import { ContentSection } from "@/components/molecules/content-section";
import { getDictionary, getServices, getTranslator } from "@/lib/dictionary";

// Pack: "Funding at a glance" block, checked 11 October 2026. Each service's `funding` is "route - support".
export async function GrantsFundingTable() {
  const [t, d, services] = await Promise.all([getTranslator("grants"), getDictionary(), getServices()]);
  return (
    <ContentSection id="funding-at-a-glance" title={t("Funding at a glance")}>
      <div className="overflow-x-auto rounded-xl border border-[#DBDEE1]">
        <table className="w-full min-w-180 border-collapse text-left text-[15px]">
          <thead className="bg-[#F0F4FC] text-[#161D2E]">
            <tr>
              <th className="p-4 font-semibold">{t("Service")}</th>
              <th className="p-4 font-semibold">{t("Group")}</th>
              <th className="p-4 font-semibold">{t("Funding route")}</th>
              <th className="p-4 font-semibold">{t("Support")}</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => {
              const [route, ...rest] = s.funding.split(" - ");
              return (
                <tr key={s.slug} className="border-t border-[#EEF0F1] align-top">
                  <td className="p-4">
                    <SiteLink href={`/services/${s.slug}`} className="font-medium text-[#2B3944] hover:text-[#AB052D]">{s.name}</SiteLink>
                  </td>
                  <td className="p-4 text-[#4A5560]">{d.groups[s.group as keyof typeof d.groups]}</td>
                  <td className="p-4 text-[#4A5560]">{route}</td>
                  <td className="p-4 text-[#4A5560]">{rest.join(" - ")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 mb-0 text-[14px] text-[#616C74]">{t("Checked 11 October 2026.")}</p>
    </ContentSection>
  );
}
