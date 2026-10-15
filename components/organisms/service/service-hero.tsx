/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/atoms/container";
import { Icon } from "@/components/icons/icon";
import { QuoteButton } from "@/components/atoms/quote-button";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { getDictionary, type ServiceContent } from "@/lib/dictionary";
import { groupAnchor, serviceSketch } from "@/lib/service-data";

const btn = "inline-flex items-center gap-2.5 rounded-md px-7 py-4 font-semibold transition-colors justify-center";

/** Dark hero: full breadcrumb, code pill, name, summary, quote and service-sheet buttons, sketch. */
export async function ServiceHero({ service: s }: { service: ServiceContent }) {
  const t = await getDictionary();
  const L = t.service;
  const crumbs: [string, string?][] = [
    [L.breadcrumb_home, "/"],
    [L.breadcrumb_services, "/services"],
    [t.groups[s.group as keyof typeof t.groups], `/services#${groupAnchor(s.group)}`],
    [s.name],
  ];
  return (
    <section className="relative isolate overflow-hidden bg-[#161D2E] pt-16 pb-24 text-white max-[767px]:pt-10 max-[767px]:pb-16">
      <SiteImage src="/assets/bg/breadcrumb-bg-thumb-01.webp" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10" />
      <Container className="grid grid-cols-[1fr_auto] max-[991px]:grid-cols-1 items-end gap-12">
        <div>
          <nav aria-label="Breadcrumb">
            <ol className="m-0 p-0 list-none flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-medium tracking-wide text-white/80">
              {crumbs.map(([name, href], i) => (
                <li key={name} className="flex items-center gap-3">
                  {i > 0 && <Icon name="right" className="size-3.5! text-white/50" aria-hidden="true" />}
                  {href ? (
                    <SiteLink href={href} className="hover:text-white">{name}</SiteLink>
                  ) : (
                    <span aria-current="page" className="text-white">{name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#AB052D]/20 px-5 py-2 text-[15px] font-semibold tracking-wide">
            <span className="size-2.5 rounded-full bg-[#E0213F]" aria-hidden="true" />
            {s.code}
          </span>
          <h1 className="mt-6 mb-0 max-w-5xl text-[64px] font-semibold leading-[1.12] tracking-[-0.02em] max-[1199px]:text-[52px] max-[767px]:text-[38px]">
            {s.name}
          </h1>
          <p className="mt-8 mb-0 max-w-4xl text-[20px] leading-[1.75] text-white/80 max-[767px]:text-[17px]">{s.summary}</p>
          <div className="mt-12 flex flex-wrap gap-5 max-[480px]:flex-col">
            <QuoteButton className={`${btn} bg-[#AB052D] text-white hover:bg-[#9D0026]`}>
              <Icon name="diagonal" className="size-4.5!" />
            </QuoteButton>
            <a href={`/downloads/service-sheets/${s.download.pdf}`} download className={`${btn} bg-white/8 text-white hover:bg-white/15`}>
              <Icon name="download" className="size-5!" />
              {L.sheet_title} (PDF)
            </a>
            <a href={`/downloads/service-sheets/${s.download.docx}`} download className={`${btn} bg-white/8 text-white hover:bg-white/15`}>
              <Icon name="doc" className="size-5!" />
              {L.word}
            </a>
          </div>
        </div>
        <img src={serviceSketch(s)} alt="" className="h-auto w-80 rounded-2xl bg-white/95 p-6 max-[991px]:hidden" />
      </Container>
    </section>
  );
}
