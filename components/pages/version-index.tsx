import { SitePageTemplate } from "@/components/templates/site-page-template";

export function VersionIndexPageContent() {
  return (
    <SitePageTemplate route="Version/index.html">
      <div>
        <h1 className="font-bold leading-tight text-[#2B3944] text-4xl md:text-6xl">
          {"This Page Does Not Exist"}
        </h1>
        <p className="leading-relaxed mb-4">
          {
            "\n            Sorry, the page you are looking for could not be found. It's just an\n            accident that was not intentional.\n        "
          }
        </p>
      </div>
    </SitePageTemplate>
  );
}
