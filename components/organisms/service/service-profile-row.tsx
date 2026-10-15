/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/atoms/container";
import { ViewToggle } from "@/components/molecules/view-toggle";
import { getDictionary, type ServiceContent } from "@/lib/dictionary";
import { SERVICE_GROUP_ICONS } from "@/lib/service-data";

/** Group icon and name, with the Quick view / Full detail switch. */
export async function ServiceProfileRow({ service: s }: { service: ServiceContent }) {
  const t = await getDictionary();
  return (
    <Container className="flex items-center justify-between gap-4 flex-wrap pt-16 max-[767px]:pt-10">
      <div className="flex items-center gap-4">
        <span className="grid size-15 shrink-0 place-items-center rounded-md bg-[#FBE3E8]">
          <img src={`/images/icfc/${SERVICE_GROUP_ICONS[s.group]}.svg`} alt="" width={34} height={34} />
        </span>
        <div>
          <span className="block text-[14px] font-medium uppercase tracking-[1.5px] text-[#616C74]">{t.service.fact_group}</span>
          <p className="m-0 text-[26px] font-medium leading-tight text-[#161D2E] max-[767px]:text-[20px]">{t.groups[s.group as keyof typeof t.groups]}</p>
        </div>
      </div>
      <ViewToggle />
    </Container>
  );
}
