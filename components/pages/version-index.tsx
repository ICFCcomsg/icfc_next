import { SitePageTemplate } from "@/components/templates/site-page-template";

export function VersionIndexPageContent() {
  return (
    <SitePageTemplate route="Version/index.html">
      <div className="mt-[0] mb-[24px] pt-[0] pr-[16px] pb-[0] pl-[16px] flex [flex-direction:column] items-center justify-center h-auto [vertical-align:middle] [border-style:none] max-w-[650px] object-contain text-center text-[16px] leading-[24px] font-normal text-[#6D7081]">
        <h1 className="mt-[0] mb-[8px] font-bold leading-[32px] text-[#2B3944] text-[24px] [word-break:break-word] text-center">
          {"This Page Does Not Exist"}
        </h1>
        <p className="mt-[0] mb-[0] text-[16px] font-normal text-[#6D7081] leading-[24px] text-center max-w-[650px]">
          {
            "\n            Sorry, the page you are looking for could not be found. It's just an\n            accident that was not intentional.\n        "
          }
        </p>
      </div>
    </SitePageTemplate>
  );
}
