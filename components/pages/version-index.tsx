import { SitePageTemplate } from "@/components/templates/site-page-template";

export function VersionIndexPageContent() {
  return (
    <SitePageTemplate
      route="Version/index.html"
      stylesheets={[
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css?family=DM+Sans:300,300i,400,400i,600,600i,700,700i,800,800i",
        "https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,600,600i,700,700i,800,800i",
        "/styles/pages/version-index.css",
      ]}
    >
      <div className="page-not-found">
        <h1 className="title">{"This Page Does Not Exist"}</h1>
        <p className="text">
          {
            "\n            Sorry, the page you are looking for could not be found. It's just an\n            accident that was not intentional.\n        "
          }
        </p>
      </div>
    </SitePageTemplate>
  );
}
