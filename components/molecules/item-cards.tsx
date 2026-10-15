import { Icon } from "@/components/atoms/icon";

// A service "extra" block from the content pack: plain text, a named-item list, or a scheme funding breakdown.
export type Extra = {
  heading: string;
  text: string;
  lead?: string;
  itemLabel?: string;
  ranked?: boolean;
  items?: { label?: string; name?: string; text?: string; icon?: string; highlight?: boolean }[];
  // Scheme funding block: shown as a breakdown inside the funding card, not in Key details.
  funding?: boolean;
  parts?: { heading: string; text: string }[];
};

// Extra block that lists named items (tiers, pillars, levels): a lead paragraph and one card per item.
// `ranked` adds a bar showing the item's position in the sequence (not a score).
export function ItemCards({ block: e }: { block: Extra }) {
  const items = e.items!;
  return (
    <div className="mb-16 max-[767px]:mb-10">
      <h3 className="mt-0 mb-3 text-[30px] font-semibold tracking-[-0.01em] text-[#161D2E] max-[767px]:text-[24px]">{e.heading}</h3>
      {e.lead && <p className="mt-0 mb-8 max-w-4xl text-[19px] leading-[1.75] text-[#4A5560]">{e.lead}</p>}
      <ol className="m-0 p-0 list-none grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
        {items.map((it, i) => {
          const red = it.highlight || (e.ranked && i === items.length - 1);
          return (
            <li key={i} className={`flex flex-col rounded-xl p-7 ${it.highlight ? "border-t-4 border-[#AB052D] bg-[#E6ECFA]" : "bg-[#F0F4FC]"}`}>
              {it.icon && (
                <span className={`mb-6 grid size-12 place-items-center rounded-md ${it.highlight ? "bg-white text-[#AB052D]" : "bg-[#E3EAF7] text-[#161D2E]"}`}>
                  <Icon name={it.icon} className="size-6!" />
                </span>
              )}
              <span className={`font-mono text-[15px] font-semibold uppercase tracking-[1px] ${red ? "text-[#AB052D]" : "text-[#4A5560]"}`}>
                {it.label ?? `${e.itemLabel} ${i + 1}`}
              </span>
              {it.name && <h4 className="mt-4 mb-0 text-[22px] font-semibold leading-snug text-[#161D2E]">{it.name}</h4>}
              {it.text && <p className="mt-2 mb-0 text-[16px] leading-7 text-[#4A5560]">{it.text}</p>}
              {e.ranked && (
                <span className="mt-auto block pt-8" aria-hidden="true">
                  <span className="block h-1.5 rounded-full bg-[#DFE7F7]">
                    <span className="block h-full rounded-full bg-[#AB052D]" style={{ width: `${((i + 1) / items.length) * 100}%` }} />
                  </span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
