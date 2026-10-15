import { Tx } from "@/components/atoms/tx";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";

export function BreadcrumbSection() {
  return (
    <SiteBreadcrumb
      title={<Tx ns="contact-us">{"Contact"}</Tx>}
      description={<Tx ns="contact-us">{"Position your agency bridge between a client's big picture"}</Tx>}
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}
