import { SitePageTemplate } from "@/components/templates/site-page-template";

export function VersionIndexPageContent() {
  return (
    <SitePageTemplate route="Version/index">
      <div className="mt-0 mb-6 pt-0 pr-4 pb-0 pl-4 flex flex-col items-center justify-center h-auto align-middle border-none max-w-162.5 object-contain text-center text-[16px] leading-6 font-normal text-[#6D7081]">
        <h1 className="mt-0 mb-2 font-bold leading-8 text-[#2B3944] text-[24px] [word-break:break-word] text-center">
          {"This Page Does Not Exist"}
        </h1>
        <p className="mt-0 mb-0 text-[16px] font-normal text-[#6D7081] leading-6 text-center max-w-162.5">
          {
            "\n            Sorry, the page you are looking for could not be found. It's just an\n            accident that was not intentional.\n        "
          }
        </p>
      </div>
    </SitePageTemplate>
  );
}
