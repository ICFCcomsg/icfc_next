/* eslint-disable @next/next/no-img-element */
import { QuoteButton } from "@/components/atoms/quote-button";
import { CONTAINER } from "@/components/atoms/container";
import { getDictionary } from "@/lib/dictionary";
import { eyebrow, p } from "./styles";

export async function HomeHero() {
  const t = await getDictionary();
  const h = t.home;
  return (
      <section className="pt-40 pb-25 max-[991px]:pt-32 max-[767px]:pb-15 bg-[#F8F8F9]">
        <div className={`${CONTAINER} grid grid-cols-[1.1fr_1fr] max-[991px]:grid-cols-1 items-center gap-12`}>
          <div>
            <span className={eyebrow}>{h.eyebrow}</span>
            <h1 className="mt-0 mb-6 font-semibold leading-[1.1] text-[#2B3944] text-[64px] max-[1199px]:text-[48px] max-[575px]:text-[36px]">
              {h.title}
            </h1>
            <p className={`${p} text-[19px]! mb-8!`}>{h.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#finder" className="rounded-full border border-[#2B3944] px-7 py-3.5 font-medium text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]">
                {h.find_standard}
              </a>
              <QuoteButton />
            </div>
          </div>
          <img src="/images/icfc/sketch-hero-assurance.svg" alt={h.title} width={800} height={600} className="w-full h-auto" />
        </div>
      </section>
  );
}
