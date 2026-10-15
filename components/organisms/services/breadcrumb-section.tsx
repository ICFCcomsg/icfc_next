import { Tx } from "@/components/atoms/tx";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";

export function BreadcrumbSection() {
  return (
    <SiteBreadcrumb
      title={<Tx ns="services">{"Services"}</Tx>}
      description={<Tx ns="services">{"Standards, schemes and training in one place."}</Tx>}
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}
