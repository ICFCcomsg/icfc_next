import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { Icon } from "@/components/atoms/icon";

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
    <section className="relative isolate bg-[#2B3944] py-[105px] text-white max-[991px]:py-[75px]">
      <SiteImage
        src={background}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="mx-auto w-full px-[15px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] min-[1441px]:max-w-[1310px]">
        <div className="min-[992px]:max-w-[calc(75%_-_7.5px)] min-[1200px]:max-w-[calc(66.666667%_-_10px)]">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <SiteLink
                  href="/"
                  className="font-medium text-white/70 hover:text-[#AB052D]"
                >
                  Home
                </SiteLink>
              </li>
              <li aria-hidden="true">
                <Icon name="right" className="size-[18px]" />
              </li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
          <h1 className="mt-5 max-w-4xl text-[54px] leading-[1.12] font-medium max-[991px]:text-[50px] max-[767px]:text-[45px] max-[575px]:text-[40px] max-[480px]:text-[35px]">
            {title}
          </h1>
          <span className="relative mt-[25px] mb-5 inline-block w-[482px] max-w-full border-b border-white/15 after:absolute after:top-1/2 after:left-0 after:h-0.5 after:w-[145px] after:-translate-y-1/2 after:bg-white max-[767px]:w-full" />
          {description && (
            <p className="max-w-[843px] text-[17px] leading-7 text-white/70">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
