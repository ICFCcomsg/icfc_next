/* eslint-disable @next/next/no-img-element */
import { SiteLink } from "@/components/atoms/site-link";
import { CONTAINER } from "@/components/atoms/container";
import { getDictionary, getServices } from "@/lib/dictionary";
import { SERVICE_GROUP_ICONS, SERVICE_GROUPS } from "@/lib/service-data";
import { section, eyebrow, h2 } from "./styles";

export async function HomeServiceGroups() {
  const [t, services] = await Promise.all([getDictionary(), getServices()]);
  const h = t.home;
  return (
      <section className={section}>
        <div className={CONTAINER}>
          <span className={eyebrow}>{h.services_eyebrow}</span>
          <h2 className={h2}>{h.services_title}</h2>
          <div className="grid grid-cols-4 max-[1199px]:grid-cols-2 max-[575px]:grid-cols-1 gap-6">
            {SERVICE_GROUPS.map((g) => {
              const list = services.filter((s) => s.group === g);
              return (
                <div key={g} className="rounded-2xl border border-[#DBDEE1] bg-white p-7">
                  <img src={`/images/icfc/${SERVICE_GROUP_ICONS[g]}.svg`} alt="" width={56} height={56} />
                  <h3 className="mt-4 mb-3 text-[20px] font-semibold text-[#2B3944]">{t.groups[g as keyof typeof t.groups]}</h3>
                  <ul className="m-0 mb-4 p-0 list-none space-y-2">
                    {list.slice(0, 4).map((s) => (
                      <li key={s.slug}>
                        <SiteLink href={`/services/${s.slug}`} className="text-[15px] text-[#616C74] hover:text-[#AB052D]">
                          {s.name}
                        </SiteLink>
                      </li>
                    ))}
                  </ul>
                  <SiteLink href="/services" className="font-medium text-[#AB052D]">
                    {h.view_all.replace("{n}", String(list.length))} →
                  </SiteLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
