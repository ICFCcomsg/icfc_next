import { Container } from "@/components/atoms/container";
import { SectionHeading } from "@/components/atoms/section-heading";
import { ContentTabs } from "@/components/molecules/content-tabs";
import { NumberedCards } from "@/components/molecules/numbered-cards";
import { getDictionary, type ServiceContent } from "@/lib/dictionary";

/** Audit, Consultation and Training tabs; tabs with no content are left out. */
export async function ServiceHowWeHelp({ service: s }: { service: ServiceContent }) {
  const L = (await getDictionary()).service;
  const tabs = [
    { label: L.tab_audit, items: s.audit },
    { label: L.tab_consultation, items: s.consultation },
    { label: L.tab_training, items: s.training },
  ].filter((t) => t.items.length);
  return (
    <section className="pt-20 pb-20 max-[767px]:pt-12.5 max-[767px]:pb-12.5 bg-[#2B3944]">
      <Container>
        <SectionHeading className="text-white! text-center">{L.how_we_help}</SectionHeading>
        <ContentTabs items={tabs.map((t) => ({ label: t.label, content: <NumberedCards items={t.items} dark /> }))} />
      </Container>
    </section>
  );
}
