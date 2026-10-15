import { SiteLink } from "@/components/atoms/site-link";
import { ContentSection } from "@/components/molecules/content-section";
import { getServices, getTranslator } from "@/lib/dictionary";

/** Services whose EDGE status is "Listed under EDGE…" (the same 15 the pack names), linking to their pages. */
export async function GrantsListedStandards() {
  const [t, services] = await Promise.all([getTranslator("grants"), getServices()]);
  const listed = services.filter((s) => s.edgeStatus.startsWith("Listed under EDGE"));
  return (
    <ContentSection id="listed-standards" title={t("Standards we support that are listed under EDGE")} tinted>
      <ul className="m-0 p-0 list-none grid grid-cols-3 max-[991px]:grid-cols-2 max-[575px]:grid-cols-1 gap-3">
        {listed.map((s) => (
          <li key={s.slug}>
            <SiteLink href={`/services/${s.slug}`} className="block h-full rounded-xl border border-[#DBDEE1] bg-white p-4 text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]">
              <span className="block text-[13px] font-semibold text-[#AB052D]">{s.code}</span>
              {s.name}
            </SiteLink>
          </li>
        ))}
      </ul>
      <p className="mt-5 mb-0 text-[15px] text-[#4A5560]">{t("Check each activity page for current support levels.")}</p>
    </ContentSection>
  );
}
