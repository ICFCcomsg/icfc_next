import { CONTAINER } from "@/components/atoms/container";
import { getDictionary } from "@/lib/dictionary";
import { h2 } from "./styles";

export async function HomeTrustNumbers() {
  const t = await getDictionary();
  const h = t.home;
  return (
      <section className="bg-[#2B3944] pt-17.5 pb-17.5">
        <div className={CONTAINER}>
          <h2 className={`${h2} text-white! text-center text-[32px]!`}>{h.trust_title}</h2>
          <dl className="m-0 grid grid-cols-4 max-[991px]:grid-cols-2 gap-6 text-center">
            {h.stats.map(([n, label, note]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="m-0 text-[48px] font-bold leading-none text-white">{n}</dd>
                <dd className="m-0 mt-2 text-[17px] font-medium text-white">{label}</dd>
                <dd className="m-0 text-[14px] text-white/60">{note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
  );
}
