/* eslint-disable @next/next/no-img-element */
import { SiteLink } from "@/components/atoms/site-link";
import { CONTAINER } from "@/components/atoms/container";
import { getDictionary } from "@/lib/dictionary";
import { section, eyebrow, h2, p } from "./styles";

export async function HomeEdge() {
  const t = await getDictionary();
  const h = t.home;
  return (
      <section className={section}>
        <div className={`${CONTAINER} grid grid-cols-[1fr_1.4fr] max-[991px]:grid-cols-1 items-center gap-12`}>
          <img src="/images/icfc/sketch-edge-grant.svg" alt={h.edge_title} width={600} height={450} className="w-full h-auto" loading="lazy" />
          <div>
            <span className={eyebrow}>{h.edge_eyebrow}</span>
            <h2 className={h2}>{h.edge_title}</h2>
            <p className={`${p} mb-6!`}>{h.edge_text}</p>
            <SiteLink href="/grants/edge" className="inline-block rounded-full bg-[#AB052D] px-7 py-3.5 font-medium text-white hover:bg-[#9D0026]">
              {h.edge_cta}
            </SiteLink>
            <p className="mt-4 mb-0 text-[14px] text-[#616C74]">{h.edge_small}</p>
          </div>
        </div>
      </section>
  );
}
