import { ServiceFinder } from "@/components/molecules/service-finder";
import { CONTAINER } from "@/components/atoms/container";
import { getDictionary, getServices } from "@/lib/dictionary";
import { SERVICE_GROUPS, offers } from "@/lib/service-data";
import { section, eyebrow, h2 } from "./styles";

export async function HomeServiceFinder() {
  const [t, services] = await Promise.all([getDictionary(), getServices()]);
  const h = t.home;
  return (
      <section id="finder" className={`${section} scroll-mt-24`}>
        <div className={CONTAINER}>
          <span className={eyebrow}>{h.finder_eyebrow}</span>
          <h2 className={h2}>{h.finder_title}</h2>
          <ServiceFinder
            services={services.map(({ slug, code, name, group }) => ({ slug, code, name, group, offers: offers(slug) }))}
            groups={SERVICE_GROUPS.map((g) => [g, t.groups[g as keyof typeof t.groups]])}
            needs={[
              ["audit", h.need_audit],
              ["consultation", h.need_consultation],
              ["training", h.need_training],
            ]}
            topicLabel={h.finder_topic}
          />
        </div>
      </section>
  );
}
