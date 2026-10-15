import { Container } from "@/components/atoms/container";
import { SiteLink } from "@/components/atoms/site-link";
import { getDictionary, getServices, type ServiceContent } from "@/lib/dictionary";
import { groupAnchor } from "@/lib/service-data";

/** Key facts strip: standard, type, group and funding, each with a note underneath. */
export async function ServiceFacts({ service: s }: { service: ServiceContent }) {
  const t = await getDictionary();
  const L = t.service;
  const groupCount = (await getServices()).filter((x) => x.group === s.group).length;
  // [label, value, note under the value]; the group note links to that group on /services.
  const facts = [
    [L.fact_code, s.code, s.owner],
    [L.fact_type, s.type, s.typeNote],
    [L.fact_group, t.groups[s.group as keyof typeof t.groups], t.home.view_all.replace("{n}", String(groupCount))],
    [L.fact_funding, s.edgeStatus, s.funding.replace(/^.*? - /, "")],
  ];
  return (
    <section className="pt-16 max-[767px]:pt-10">
      <Container>
        <dl className="m-0 grid grid-cols-4 max-[991px]:grid-cols-2 max-[480px]:grid-cols-1 gap-8 rounded-2xl bg-[#F0F4FC] px-9 py-11">
          {facts.map(([k, v, note], i) => (
            <div key={k}>
              <dt className="text-[15px] font-semibold uppercase tracking-[1.5px] text-[#AB052D]">{k}</dt>
              <dd className={`m-0 mt-2 text-[24px] font-medium leading-snug max-[767px]:text-[20px] ${i === 3 ? "text-[#AB052D]" : "text-[#161D2E]"}`}>{v}</dd>
              {note && (
                <dd className="m-0 mt-2 text-[15px] leading-6 text-[#4A5560]">
                  {i === 2 ? (
                    <SiteLink href={`/services#${groupAnchor(s.group)}`} className="text-[#4A5560] hover:text-[#AB052D]">{note} →</SiteLink>
                  ) : (
                    note
                  )}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
