import { Container } from "@/components/atoms/container";
import { Eyebrow } from "@/components/atoms/eyebrow";
import { SectionHeading } from "@/components/atoms/section-heading";
import { AccordionGroup, AccordionItem } from "@/components/molecules/accordion-item";
import { getDictionary, type ServiceContent } from "@/lib/dictionary";

export async function ServiceFaq({ service: s }: { service: ServiceContent }) {
  const L = (await getDictionary()).service;
  return (
    <section className="pt-20 pb-20 max-[767px]:pt-12.5 max-[767px]:pb-12.5">
      <Container className="max-w-225!">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading>{L.faq_title}</SectionHeading>
        </div>
        <AccordionGroup>
          {s.faqs.map((f) => (
            <AccordionItem key={f.q} title={f.q}>
              {f.a}
            </AccordionItem>
          ))}
        </AccordionGroup>
      </Container>
    </section>
  );
}
