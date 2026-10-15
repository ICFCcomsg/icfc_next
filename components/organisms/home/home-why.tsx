import { CONTAINER } from "@/components/atoms/container";
import { getDictionary } from "@/lib/dictionary";
import { section, eyebrow, h2, p } from "./styles";

export async function HomeWhy() {
  const t = await getDictionary();
  const h = t.home;
  return (
      <section className={`${section} bg-[#2B3944]`}>
        <div className={CONTAINER}>
          <span className={`${eyebrow} bg-transparent! border border-white/15 text-[#E4606F]!`}>{h.why_eyebrow}</span>
          <h2 className={`${h2} text-white!`}>{h.why_title}</h2>
          <div className="grid grid-cols-4 max-[1199px]:grid-cols-2 max-[575px]:grid-cols-1 gap-x-10 gap-y-8 mt-12">
            {h.why.map(([title, text]) => (
              <div key={title} className="border-l-2 border-[#AB052D]/70 pl-5 py-1">
                <h3 className="mt-0 mb-2 text-[20px] font-semibold text-white">{title}</h3>
                <p className={`${p} text-white/70! text-[15px]!`}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
