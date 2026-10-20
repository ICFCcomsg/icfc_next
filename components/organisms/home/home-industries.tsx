/* eslint-disable @next/next/no-img-element */
import { SiteLink } from "@/components/atoms/site-link";
import { CONTAINER } from "@/components/atoms/container";
import { getDictionary } from "@/lib/dictionary";
import { section, eyebrow, h2 } from "./styles";

export async function HomeIndustries() {
  const t = await getDictionary();
  const h = t.home;
  return (
      <section className={section}>
        <div className={CONTAINER}>
          <span className={eyebrow}>{h.industries_eyebrow}</span>
          <h2 className={h2}>{h.industries_title}</h2>
          <ul className="m-0 p-0 list-none grid grid-cols-4 max-[991px]:grid-cols-2 gap-4">
            {Object.entries(h.industries).map(([key, name]) => (
              <li key={key}>
                {/* ponytail: links to the existing industry page until per-industry pages exist */}
                <SiteLink href="/industry" className="flex h-full items-center gap-3 rounded-xl border border-[#DBDEE1] p-4 text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]">
                  <img src={`/images/icfc/icon-industry-${key}.svg`} alt={name} width={40} height={40} loading="lazy" />
                  <span className="text-[15px] font-medium">{name}</span>
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
  );
}
