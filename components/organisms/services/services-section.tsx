/* eslint-disable @next/next/no-img-element */
import { SiteLink } from "@/components/atoms/site-link";
import { getDictionary, getServices } from "@/lib/dictionary";
import { SERVICE_GROUP_ICONS, SERVICE_GROUPS, groupAnchor, offers } from "@/lib/service-data";
import { CONTAINER } from "@/components/atoms/container";


// Services hub (Content Pack section 6): all services in their four groups, each card showing which of Audit, Consultation, Training ICFC offers.
export async function ServicesSection() {
  const [t, services] = await Promise.all([getDictionary(), getServices()]);
  const L = t.service;
  const needs = [
    ["audit", L.tab_audit],
    ["consultation", L.tab_consultation],
    ["training", L.tab_training],
  ] as const;
  return (
    <section className="pt-25 pb-25 max-[767px]:pt-15 max-[767px]:pb-15">
      <div className={CONTAINER}>
        <nav aria-label={L.fact_group} className="flex flex-wrap justify-center gap-3">
          {SERVICE_GROUPS.map((g) => (
            <a
              key={g}
              href={`#${groupAnchor(g)}`}
              className="rounded-full border border-[#DBDEE1] bg-white px-5 py-3 text-[16px] font-medium text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]"
            >
              {t.groups[g as keyof typeof t.groups]}
              <span className="ml-2 text-[#AB052D]">{services.filter((s) => s.group === g).length}</span>
            </a>
          ))}
        </nav>

        {SERVICE_GROUPS.map((g) => (
          <div key={g} id={groupAnchor(g)} className="mt-20 max-[767px]:mt-12.5 scroll-mt-32">
            <div className="mb-8 flex items-center gap-4 border-b border-[#DBDEE1] pb-5">
              <img src={`/images/icfc/${SERVICE_GROUP_ICONS[g]}.svg`} alt="" width={56} height={56} />
              <h2 className="m-0 font-semibold leading-[1.2] text-[#2B3944] text-[36px] max-[767px]:text-[26px] [word-break:break-word]">
                {t.groups[g as keyof typeof t.groups]}
              </h2>
            </div>
            <ul className="m-0 p-0 list-none grid grid-cols-3 max-[991px]:grid-cols-2 max-[575px]:grid-cols-1 gap-6">
              {services
                .filter((s) => s.group === g)
                .map((s) => {
                  const offer = offers(s.slug);
                  return (
                    <li key={s.slug}>
                      <SiteLink
                        href={`/services/${s.slug}`}
                        className="group/card flex h-full flex-col rounded-2xl border border-[#DBDEE1] bg-white p-7 hover:border-[#AB052D] hover:shadow-[0_20px_40px_rgba(171,5,45,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                      >
                        <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#AB052D]">{s.code}</span>
                        <h3 className="mt-2 mb-3 text-[20px] font-semibold leading-[1.4] text-[#2B3944] group-hover/card:text-[#AB052D]">
                          {s.name}
                        </h3>
                        <p className="mt-0 mb-6 text-[15px] leading-6 text-[#616C74] line-clamp-3">{s.summary}</p>
                        <ul className="mt-auto mb-0 p-0 list-none flex flex-wrap gap-2">
                          {needs.map(([key, label]) => (
                            <li
                              key={key}
                              className={`rounded-full px-3 py-1 text-[12px] font-medium ${offer[key] ? "bg-[#fdf2f4] text-[#AB052D]" : "bg-[#F1F2F3] text-[#9AA1A7] line-through"}`}
                            >
                              {label}
                            </li>
                          ))}
                        </ul>
                      </SiteLink>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
