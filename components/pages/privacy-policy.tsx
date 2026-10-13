import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import privacyPolicy from "@/lib/legal/privacy-policy.json";
import cookieNotice from "@/lib/legal/cookie-notice.json";
import lmsTerms from "@/lib/legal/lms-terms.json";

// Blocks are generated from the approved .docx files (title, h, p, li, table).
type Block = { t: string; text?: string; rows?: string[][] };

const h4 =
  "mt-8 mb-2.5 font-semibold leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]";
const p = "mt-0 mb-2.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7";
const li =
  "mb-1.25 text-[16px] text-[#616C74] relative ps-3.75 list-none after:absolute after:[content:''] after:inset-s-0 after:top-2 after:w-1.5 after:h-1.5 after:bg-[#AB052D] after:rounded-full";

// Group consecutive list items so they render inside one <ul>.
function group(blocks: Block[]) {
  const out: (Block | Block[])[] = [];
  for (const b of blocks) {
    const last = out[out.length - 1];
    if (b.t === "li" && Array.isArray(last)) last.push(b);
    else out.push(b.t === "li" ? [b] : b);
  }
  return out;
}

function LegalPage({ route, blocks }: { route: string; blocks: Block[] }) {
  const [title, ...rest] = blocks;
  return (
    <SitePageTemplate route={route}>
      <main>
        <SiteBreadcrumb
          title={title.text ?? ""}
          description="ICFC Pte Ltd, UEN 201402439E"
          background="/assets/images/logo/logo.png"
        />
        <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
          <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
            <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
              <div className="shrink-0 w-[83.33333333%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                <div className="z-1 relative pt-12.5 max-[575px]:pt-7.5 pr-12.5 max-[575px]:pr-5 pb-12.5 max-[575px]:pb-7.5 pl-12.5 max-[575px]:pl-5 bg-[#FFFFFF] shadow-[0px_4px_80px_rgba(0,0,0,0.12)]">
                  {group(rest).map((b, i) =>
                    Array.isArray(b) ? (
                      <ul key={i} className="pl-0 mt-0 mb-2.5">
                        {b.map((x, j) => (
                          <li key={j} className={li}>
                            {x.text}
                          </li>
                        ))}
                      </ul>
                    ) : b.t === "h" || b.t === "h3" ? (
                      <h4 key={i} className={h4}>
                        {b.text}
                      </h4>
                    ) : b.t === "table" && b.rows ? (
                      <div key={i} className="mb-5 overflow-x-auto">
                        <table className="w-full text-[15px] text-[#616C74] [border-collapse:collapse]">
                          <thead>
                            <tr>
                              {b.rows[0].map((c, j) => (
                                <th key={j} scope="col" className="text-left p-2.5 [border:1px_solid_#DBDEE1] bg-[#F8F8F9] text-[#2B3944]">
                                  {c}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.rows.slice(1).map((r, j) => (
                              <tr key={j}>
                                {r.map((c, k) => (
                                  <td key={k} className="p-2.5 align-top [border:1px_solid_#DBDEE1]">
                                    {c}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p key={i} className={p}>
                        {b.text}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SitePageTemplate>
  );
}

export function PrivacyPolicyPageContent() {
  return <LegalPage route="privacy-policy" blocks={privacyPolicy} />;
}

export function CookieNoticePageContent() {
  return <LegalPage route="cookie-notice" blocks={cookieNotice} />;
}

export function LmsTermsPageContent() {
  return <LegalPage route="training/lms-terms" blocks={lmsTerms} />;
}
