import { SiteLink } from "@/components/atoms/site-link";

export function SiteBreadcrumb({
  title,
  description,
  background,
  className,
}: {
  title: string;
  description?: string;
  background: string;
  className?: string;
}) {
  return (
    <section
      className={
        className ??
        "rs-breadcrumb-area rs-breadcrumb-one p-relative section-space"
      }
    >
      <div
        className="rs-breadcrumb-bg-thumb include-bg"
        style={{ backgroundImage: `url("${background}")` }}
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-9">
            <div className="rs-breadcrumb-wrapper">
              <div className="rs-breadcrumb-menu">
                <nav aria-label="Breadcrumb">
                  <ul>
                    <li className="rs-breadcumb-item">
                      <span>
                        <SiteLink href="/">Home</SiteLink>
                      </span>
                    </li>
                    <li className="rs-breadcumb-item" aria-current="page">
                      {title}
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="rs-breadcrumb-title-wrapper">
                <h1 className="rs-breadcrumb-title">{title}</h1>
                <span className="rs-breadcrumb-line" />
              </div>
              {description && (
                <p className="rs-breadcrumb-desc">{description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
