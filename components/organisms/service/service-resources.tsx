import { Container } from "@/components/atoms/container";
import { Icon } from "@/components/atoms/icon";
import { SectionHeading } from "@/components/atoms/section-heading";
import { SiteLink } from "@/components/atoms/site-link";
import { getDictionary, type ServiceContent } from "@/lib/dictionary";

/** Service sheet downloads beside the related services list. */
export async function ServiceResources({ service: s }: { service: ServiceContent }) {
  const L = (await getDictionary()).service;
  return (
    <section className="pt-20 pb-20 max-[767px]:pt-12.5 max-[767px]:pb-12.5 pt-0!">
      <Container className="grid grid-cols-2 max-[991px]:grid-cols-1 gap-6">
        <div className="rounded-3xl border border-[#DBDEE1] bg-[#F8F8F9] p-10 max-[767px]:p-7">
          <span className="mb-5 grid size-14 place-items-center rounded-2xl bg-[#AB052D] text-white">
            <Icon name="download" className="size-7!" />
          </span>
          <SectionHeading className="text-[26px]! mb-2!">{L.sheet_title}</SectionHeading>
          <p className="mt-0 mb-0 text-[17px] text-[#616C74] leading-7 mb-6!">{L.sheet_text}</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={`/downloads/service-sheets/${s.download.pdf}`}
              download
              className="rounded-full bg-[#AB052D] hover:bg-[#9D0026] px-6 py-3 text-white font-medium"
            >
              {L.download_pdf}
            </a>
            <a
              href={`/downloads/service-sheets/${s.download.docx}`}
              download
              className="rounded-full border border-[#AB052D] bg-white px-6 py-3 text-[#AB052D] font-medium hover:bg-[#fdf2f4]"
            >
              {L.word}
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-[#DBDEE1] bg-white p-10 max-[767px]:p-7">
          <SectionHeading className="text-[26px]!">{L.related}</SectionHeading>
          <ul className="m-0 p-0 list-none divide-y divide-[#EEF0F1]">
            {s.related.map((r) => (
              <li key={r.url}>
                <SiteLink href={r.url} className="flex items-center justify-between gap-4 py-3.5 font-medium text-[#2B3944] hover:text-[#AB052D]">
                  {r.name}
                  <Icon name="right" className="size-4! shrink-0" />
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
