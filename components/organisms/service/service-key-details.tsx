import { Container } from "@/components/atoms/container";
import { Eyebrow } from "@/components/atoms/eyebrow";
import { SectionHeading } from "@/components/atoms/section-heading";
import { ItemCards, type Extra } from "@/components/molecules/item-cards";
import { NumberedCards } from "@/components/molecules/numbered-cards";
import { getDictionary, type ServiceContent } from "@/lib/dictionary";

/** Extra blocks from the pack (tiers, pillars, levels, notes); scheme funding goes to the funding card instead. */
export async function ServiceKeyDetails({ service: s }: { service: ServiceContent }) {
  const details = (s.extra as Extra[]).filter((e) => !e.funding);
  if (!details.length) return null;
  const L = (await getDictionary()).service;
  return (
    <section className="pt-20 pb-20 max-[767px]:pt-12.5 max-[767px]:pb-12.5">
      <Container>
        <Eyebrow>{s.code}</Eyebrow>
        <SectionHeading>{L.key_details}</SectionHeading>
        {details
          .filter((e) => e.items)
          .map((e) => (
            <ItemCards key={e.heading} block={e} />
          ))}
        {details.some((e) => !e.items) && <NumberedCards items={details.filter((e) => !e.items)} />}
      </Container>
    </section>
  );
}
