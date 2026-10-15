import { Container } from "@/components/atoms/container";
import { Icon } from "@/components/atoms/icon";
import { getDictionary, type ServiceContent } from "@/lib/dictionary";

/** "What is X?" and "Who is X for?" cards; the first sentence is shown as a larger lead. */
export async function ServiceOverview({ service: s }: { service: ServiceContent }) {
  const L = (await getDictionary()).service;
  const cards = [
    // Question-led headings with the standard code (pack section 9); untranslated languages keep the plain label.
    ["shield", L.what_q?.replace("{code}", s.code) ?? L.what, s.what],
    ["building", L.who_q?.replace("{code}", s.code) ?? L.who, s.who],
  ];
  return (
    <section className="mt-16 bg-[#F8F8FD] py-20 max-[767px]:mt-10 max-[767px]:py-12">
      <Container className="grid grid-cols-2 max-[991px]:grid-cols-1 gap-12 max-[767px]:gap-6">
        {cards.map(([icon, title, text]) => {
          const cut = text.indexOf(". ") + 1;
          return (
            <div key={title} className="rounded-xl bg-white p-14 shadow-[0_1px_3px_rgba(22,29,46,0.05)] max-[767px]:p-7">
              <span className="mb-8 grid size-14 place-items-center rounded-sm bg-[#E3EAF7] text-[#161D2E]">
                <Icon name={icon} className="size-7!" />
              </span>
              <h2 className="mt-0 mb-5 text-[30px] font-semibold text-[#161D2E]">{title}</h2>
              <p className="m-0 text-[22px] leading-[1.6] text-[#4A5560] max-[767px]:text-[18px]">{cut ? text.slice(0, cut) : text}</p>
              {cut > 0 && <p className="mt-5 mb-0 text-[18px] leading-[1.75] text-[#4A5560]">{text.slice(cut + 1)}</p>}
            </div>
          );
        })}
      </Container>
    </section>
  );
}
