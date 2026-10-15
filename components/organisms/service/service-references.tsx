import { Container } from "@/components/atoms/container";
import { Icon } from "@/components/icons/icon";
import { getDictionary, type ServiceContent } from "@/lib/dictionary";

/** Official sources from the content matrix, as outbound links. */
export async function ServiceReferences({ service: s }: { service: ServiceContent }) {
  const L = (await getDictionary()).service;
  return (
    <section className="mt-10 bg-[#F8F8FD] py-16 max-[767px]:py-10">
      <Container>
        <h2 className="mt-0 mb-5 text-[22px] font-semibold text-[#161D2E]">{L.references}</h2>
        <ul className="m-0 p-0 list-none flex flex-wrap gap-x-10 gap-y-3">
          {s.sources.map((r) => (
            <li key={r.url}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-[16px] text-[#4A5560] hover:text-[#AB052D] hover:underline"
              >
                {r.name}
                <Icon name="diagonal" className="size-3.5!" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
