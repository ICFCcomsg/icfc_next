import type { ReactNode } from "react";
import { SiteLink } from "@/components/atoms/site-link";
import { Icon } from "@/components/icons/icon";

export function SiteBreadcrumb({
  title,
  description,
}: {
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative isolate bg-[#2B3944] py-26.25 text-white max-[991px]:py-18.75">
      <div className="mx-auto w-full px-3.75 min-[576px]:max-w-135 min-[768px]:max-w-180 min-[992px]:max-w-240 min-[1200px]:max-w-285 min-[1400px]:max-w-330 min-[1441px]:max-w-327.5">
        <div className="min-[992px]:max-w-[calc(75%-7.5px)] min-[1200px]:max-w-[calc(66.666667%-10px)]">
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
                <Icon name="right" className="size-4.5" />
              </li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
          <h1 className="mt-5 max-w-4xl text-[54px] leading-[1.12] font-medium max-[991px]:text-[50px] max-[767px]:text-[45px] max-[575px]:text-[40px] max-[480px]:text-[35px]">
            {title}
          </h1>
          <span className="relative mt-6.25 mb-5 inline-block w-120.5 max-w-full border-b border-white/15 after:absolute after:top-1/2 after:left-0 after:h-0.5 after:w-36.25 after:-translate-y-1/2 after:bg-white max-[767px]:w-full" />
          {description && (
            <p className="max-w-210.75 text-[17px] leading-7 text-white/70">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
