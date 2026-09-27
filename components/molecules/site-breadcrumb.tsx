import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";

export function SiteBreadcrumb({
  title,
  description,
  background,
}: {
  title: string;
  description?: string;
  background: string;
}) {
  return (
    <section className="relative isolate bg-[#2B3944] py-20 text-white md:py-28">
      <SiteImage
        src={background}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#2B3944]/80" />
      <div className="mx-auto max-w-[1310px] px-6">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-3">
            <li>
              <SiteLink href="/" className="text-white/70 hover:text-white">
                Home
              </SiteLink>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>
        <div className="my-7 h-px max-w-lg bg-white/15">
          <div className="h-px w-1/3 bg-white" />
        </div>
        {description && <p className="max-w-xl text-white/70">{description}</p>}
      </div>
    </section>
  );
}
