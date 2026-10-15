import { Tx } from "@/components/atoms/tx";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";

export function BreadcrumbSection() {
  return (
    <SiteBreadcrumb
      title={<Tx ns="industry">{"Industry"}</Tx>}
      description={<Tx ns="industry">{"Position your agency bridge between a client's big picture"}</Tx>}
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}
