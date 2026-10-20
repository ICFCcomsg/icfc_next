/* eslint-disable @next/next/no-img-element */
import { CONTAINER } from "@/components/atoms/container";
import { getDictionary } from "@/lib/dictionary";
import { section, eyebrow, h2, p } from "./styles";

// Approved copy (Content and Structure Pack, section 6) lives in lib/i18n/site/{lang}.json under "home".
const WAY_IMAGES = ["sketch-audit", "sketch-consult", "sketch-train"];

export async function HomeWays() {
  const t = await getDictionary();
  const h = t.home;
  return (
      <section className={`${section} bg-[#F8F8F9]`}>
        <div className={CONTAINER}>
          <span className={eyebrow}>{h.ways_eyebrow}</span>
          <h2 className={h2}>{h.ways_title}</h2>
          <div className="grid grid-cols-3 max-[991px]:grid-cols-1 gap-6">
            {h.ways.map(([title, text], i) => (
              <div key={title} className="rounded-2xl bg-white p-7">
                <img src={`/images/icfc/${WAY_IMAGES[i]}.svg`} alt={title} width={213} height={160} className="mb-5 h-40 w-auto" loading="lazy" />
                <h3 className="mt-0 mb-2 text-[24px] font-semibold text-[#2B3944]">{title}</h3>
                <p className={p}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
