import { Container } from "@/components/atoms/container";
import { Icon } from "@/components/atoms/icon";
import { SiteLink } from "@/components/atoms/site-link";
import type { Extra } from "@/components/molecules/item-cards";
import { getDictionary, type ServiceContent } from "@/lib/dictionary";

// Date the grant facts in the content matrix were last checked.
const FUNDING_CHECKED = "11 October 2026";

/** Funding card (status, headline, note, optional breakdown) beside the impartiality card. */
export async function ServiceFunding({ service: s }: { service: ServiceContent }) {
  const L = (await getDictionary()).service;
  const parts = (s.extra as Extra[]).find((e) => e.parts)?.parts ?? [];
  return (
    <section className="pt-20 pb-20 max-[767px]:pt-12.5 max-[767px]:pb-12.5 bg-[#F8F8FD]">
      <Container className="grid grid-cols-[1.4fr_1fr] max-[991px]:grid-cols-1 gap-8">
        <div className="rounded-xl border-l-8 border-[#AB052D] bg-white p-12 shadow-[0_1px_3px_rgba(22,29,46,0.05)] max-[767px]:p-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FBE3E8] px-4 py-1.5 text-[15px] font-medium tracking-wide text-[#AB052D]">
            <Icon name="tag" className="size-4.5!" />
            {s.edgeStatus}
          </span>
          {s.funding && (
            <h2 className="mt-6 mb-4 text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#161D2E] max-[767px]:text-[26px]">{s.funding.split(", ")[0]}</h2>
          )}
          <p className="m-0 text-[18px] leading-[1.75] text-[#4A5560]">{s.edgeNote}</p>
          {parts.length > 0 && (
            <ul className="mt-8 mb-0 p-0 list-none space-y-4">
              {parts.map((x, i) => (
                <li key={x.heading} className={`rounded-md px-6 py-5 ${i === parts.length - 1 ? "bg-[#E6ECFA]" : "bg-[#F0F4FC]"}`}>
                  <h3 className="mt-0 mb-1 text-[17px] font-semibold text-[#161D2E]">{x.heading}</h3>
                  <p className="m-0 text-[16px] leading-7 text-[#4A5560]">{x.text}</p>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <SiteLink href="/blogedg" className="font-semibold text-[#AB052D] hover:underline">
              {L.about_edge} →
            </SiteLink>
            <span className="font-mono text-[13px] text-[#4A5560]">{L.info_checked.replace("{date}", FUNDING_CHECKED)}</span>
          </div>
        </div>
        {s.impartiality.map((x) => (
          <div key={x.heading} className="flex flex-col rounded-xl bg-[#F0F4FC] p-12 max-[767px]:p-7">
            <span className="mb-8 grid size-16 place-items-center rounded-md bg-[#E3EAF7] text-[#161D2E]">
              <Icon name="scale" className="size-8!" />
            </span>
            <h3 className="mt-0 mb-5 text-[32px] font-semibold tracking-[-0.01em] text-[#161D2E] max-[767px]:text-[26px]">{L.impartiality}</h3>
            <p className="m-0 text-[18px] leading-[1.75] text-[#4A5560]">{x.text}</p>
            {L.role_text && (
              <div className="mt-auto pt-10">
                <div className="rounded-md bg-white px-6 py-5">
                  <h4 className="mt-0 mb-1 text-[15px] font-semibold tracking-wide text-[#161D2E]">{L.role_title}</h4>
                  <p className="m-0 text-[16px] leading-7 text-[#4A5560]">{L.role_text}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}
