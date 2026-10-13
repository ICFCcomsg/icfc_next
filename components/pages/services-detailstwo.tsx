import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailstwoPageContent() {
  return (
    <SitePageTemplate route="services-detailstwo">
      <main>
        <BreadcrumbAreaSection />
        <ServicesAreaSection />
        <CtaAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="ISO 37001:2025 · Anti-Bribery Management System · Singapore · CPIB-aligned"
      description="Anti-bribery management — ISO 37001:2025 consulting, PCA-aligned, EDGE Grant guidance"
      background="/assets/images/services/services-thumb-30.webp"
    />
  );
}

function ServicesAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 37001 Anti-Bribery Management System"
                  className="align-middle max-w-full w-full rounded-md"
                />
              </div>
              <p className="mt-7.5 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "ISO 37001:2025 is the world's leading standard for Anti-Bribery Management Systems (ABMS). In Singapore, it is nationally adopted as SS ISO 37001 — jointly launched by SPRING Singapore and the Corrupt Practices Investigation Bureau (CPIB) — and aligned to the Prevention of Corruption Act (PCA). The 2025 edition introduces critical updates including climate change risk, enhanced conflicts of interest management, and stronger compliance culture requirements. ICFC delivers full ABMS audit, consultation, and training with EDGE Grant proposal support (you apply on the Business Grants Portal), across all 35 major Singapore industries."
                }
              </p>
              <div className="flex flex-wrap mt-7.5 -mr-6 -ml-6 mb-10">
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-6 pr-6 pb-6 pl-6 [background:#f8f9fa] rounded-2xl text-center [border:1px_solid_#e9ecef] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-2 text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"2025"}
                    </div>
                    <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"New ISO 37001 edition"}
                    </p>
                    <small className="text-[.875em]">
                      {"climate risk + CoI"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-6 pr-6 pb-6 pl-6 [background:#f8f9fa] rounded-2xl text-center [border:1px_solid_#e9ecef] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-2 text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"6–12"}
                    </div>
                    <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"Months typical ABMS"}
                    </p>
                    <small className="text-[.875em]">
                      {"certification timeline"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-6 pr-6 pb-6 pl-6 [background:#f8f9fa] rounded-2xl text-center [border:1px_solid_#e9ecef] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-2 text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"EDGE"}
                    </div>
                    <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"Grant guidance (subject to eligibility)"}
                    </p>
                    <small className="text-[.875em]">
                      {"for qualifying SMEs"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-6 pr-6 pb-6 pl-6 [background:#f8f9fa] rounded-2xl text-center [border:1px_solid_#e9ecef] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-2 text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"35+"}
                    </div>
                    <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"Singapore industries"}
                    </p>
                    <small className="text-[.875em]">{"served"}</small>
                  </div>
                </div>
              </div>
              <div className="pt-6! pr-6! pb-6! pl-6! rounded-2xl! mb-10 [background:rgba(200,16,46,0.05)]">
                <h4 className="mt-0 mb-4! font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Icon
                    name="alert"
                    className="mr-2! inline-block not-italic"
                  />
                  {
                    "ISO 37001:2025 — what changed and why it matters for Singapore organisations"
                  }
                </h4>
                <div className="flex flex-wrap -mt-4 -mr-6 -ml-6">
                  <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-4 flex-[0_0_auto]">
                    <div className="flex! gap-2!">
                      <Icon
                        name="leaf"
                        className="text-[1.25rem]! inline-block not-italic"
                      />
                      <div>
                        <strong className="[font-weight:bolder]">
                          {"Climate risk"}
                        </strong>
                        {
                          " — Mandatory climate change risk assessment for sustainability projects, carbon trading, and green financing"
                        }
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-4 flex-[0_0_auto]">
                    <div className="flex! gap-2!">
                      <Icon
                        name="heart"
                        className="text-[1.25rem]! inline-block not-italic"
                      />
                      <div>
                        <strong className="[font-weight:bolder]">
                          {"Conflicts of interest"}
                        </strong>
                        {" — Enhanced CoI guidance and management requirements"}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-4 flex-[0_0_auto]">
                    <div className="flex! gap-2!">
                      <Icon
                        name="user"
                        className="text-[1.25rem]! inline-block not-italic"
                      />
                      <div>
                        <strong className="[font-weight:bolder]">
                          {"Compliance culture"}
                        </strong>
                        {
                          " — Stronger compliance culture requirements — tone from the top now formally assessed"
                        }
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-4 flex-[0_0_auto]">
                    <div className="flex! gap-2!">
                      <Icon
                        name="shield"
                        className="text-[1.25rem]! inline-block not-italic"
                      />
                      <div>
                        <strong className="[font-weight:bolder]">
                          {"Whistleblower"}
                        </strong>
                        {" — Improved whistleblower protection provisions"}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-4 flex-[0_0_auto]">
                    <div className="flex! gap-2!">
                      <Icon
                        name="merge"
                        className="text-[1.25rem]! inline-block not-italic"
                      />
                      <div>
                        <strong className="[font-weight:bolder]">
                          {"Integration"}
                        </strong>
                        {
                          " — Better integration with ISO 37301 (Compliance MS) and other management standards"
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-3.75 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "What is ISO 37001 ABMS? Singapore's anti-bribery certification — why ISO 37001:2025 matters in 2026"
                }
              </h3>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "ISO 37001 is the international standard dedicated to establishing, implementing, maintaining, and improving an Anti-Bribery Management System. It offers requirements and guidance for preventing, detecting, and responding to bribery — covering direct and indirect bribery across public, private, and non-profit sectors. In Singapore, it is nationally adopted as SS ISO 37001 and aligns directly with the Prevention of Corruption Act."
                }
              </p>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "SS ISO 37001 was jointly launched by SPRING Singapore and the Corrupt Practices Investigation Bureau (CPIB). The Singapore Standard (SS) ISO 37001 on anti-bribery management systems is a voluntary standard designed to help companies establish, implement, maintain and improve their anti-bribery compliance programmes. It includes a series of measures which represents globally recognised anti-bribery good practice. Critically, SS ISO 37001 helps in the event of an investigation to provide evidence to the prosecutors or courts that the company had taken reasonable steps to prevent bribery. For Singapore organisations facing CPIB investigations, this evidentiary protection is the most compelling reason to certify."
                }
              </p>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "ISO 37001:2025 is now the current edition. Organisations certified under ISO 37001:2016 should plan their transition to the 2025 edition. ICFC manages 2016-to-2025 transition audits alongside new implementation engagements. The 2025 edition adopts the ISO harmonized structure — making integration with ISO 9001, ISO 14001, ISO 27001, and ISO 22301 more efficient than ever before."
                }
              </p>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"ISO 37001:2025 ABMS — eight core components ICFC implements"}
              </h3>
              <div className="flex flex-wrap -mt-6 -mr-6 -ml-6 mb-10">
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="h-full! pt-4! pr-4! pb-4! pl-4! text-center! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                    <Icon
                      name="file"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem+.9vw)]! inline-block not-italic"
                    />
                    <p className="mt-2! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"Anti-bribery policy"}
                    </p>
                    <small className="text-[.875em]">
                      {"Board-endorsed zero tolerance"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="h-full! pt-4! pr-4! pb-4! pl-4! text-center! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                    <Icon
                      name="shield"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem+.9vw)]! inline-block not-italic"
                    />
                    <p className="mt-2! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"Bribery risk assessment"}
                    </p>
                    <small className="text-[.875em]">
                      {"Activities, geographies, third parties"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="h-full! pt-4! pr-4! pb-4! pl-4! text-center! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                    <Icon
                      name="search"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem+.9vw)]! inline-block not-italic"
                    />
                    <p className="mt-2! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"Due diligence"}
                    </p>
                    <small className="text-[.875em]">
                      {"Third-party, transaction, personnel"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="h-full! pt-4! pr-4! pb-4! pl-4! text-center! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                    <Icon
                      name="card"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem+.9vw)]! inline-block not-italic"
                    />
                    <p className="mt-2! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"Financial & non-financial controls"}
                    </p>
                    <small className="text-[.875em]">
                      {"Gift register, expense controls"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="h-full! pt-4! pr-4! pb-4! pl-4! text-center! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                    <Icon
                      name="quote"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem+.9vw)]! inline-block not-italic"
                    />
                    <p className="mt-2! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"Whistleblowing channel"}
                    </p>
                    <small className="text-[.875em]">
                      {"Anonymous + protection"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="h-full! pt-4! pr-4! pb-4! pl-4! text-center! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                    <Icon
                      name="merge"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem+.9vw)]! inline-block not-italic"
                    />
                    <p className="mt-2! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"Conflicts of interest"}
                    </p>
                    <small className="text-[.875em]">
                      {"Enhanced 2025 CoI management"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="h-full! pt-4! pr-4! pb-4! pl-4! text-center! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                    <Icon
                      name="globe"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem+.9vw)]! inline-block not-italic"
                    />
                    <p className="mt-2! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"Climate change risk (new 2025)"}
                    </p>
                    <small className="text-[.875em]">
                      {"Carbon trading, green financing"}
                    </small>
                  </div>
                </div>
                <div className="shrink-0 w-[25%] max-[768px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="h-full! pt-4! pr-4! pb-4! pl-4! text-center! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                    <Icon
                      name="chart"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem+.9vw)]! inline-block not-italic"
                    />
                    <p className="mt-2! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"Monitoring & investigation"}
                    </p>
                    <small className="text-[.875em]">
                      {"Internal audit, management review"}
                    </small>
                  </div>
                </div>
              </div>
              <h3 className="mt-0 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "Singapore's anti-bribery legal and regulatory framework — ISO 37001 alignment"
                }
              </h3>
              <div className="overflow-x-auto mb-10">
                <table className="caption-bottom border-collapse w-full max-[991px]:w-225 mb-4 align-top border-[#dee2e6] [border:1px_solid_#DBDEE1]">
                  <thead className="border-inherit border-solid [border-width:0] align-bottom bg-[#f8f9fa]! rounded-xl hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                    <tr className="border-inherit border-solid [border-width:1px_0]">
                      <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"Framework / Legislation"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"Key obligation"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"Sectors"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"ISO 37001 alignment"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-inherit border-solid [border-width:0] align-[inherit]">
                    <tr className="border-inherit border-solid [border-width:1px_0]">
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Prevention of Corruption Act (PCA)"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "Criminalises giving and accepting bribes in public and private sectors"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"All sectors"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "✓ Direct alignment — ABMS demonstrates reasonable prevention steps"
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:1px_0]">
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"CPIB enforcement"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "CPIB investigates corruption offences. ISO 37001 certification provides evidentiary protection"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"All sectors"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "✓ CPIB-aligned SS ISO 37001 provides prosecution mitigation"
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:1px_0]">
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"MAS Guidelines on Gifts & Entertainment"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "Financial institutions must have documented policies on gifts and entertainment"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Banks, insurers, FinTech"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"✓ Gift/hospitality register and financial controls"}
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:1px_0]">
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"UK Bribery Act (extraterritorial)"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          '"Adequate procedures" defence requires documented ABMS'
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Professional services, construction, logistics"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          '✓ ISO 37001 satisfies UK "adequate procedures" defence'
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:1px_0]">
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"US FCPA (extraterritorial)"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "Singapore companies listed on US exchanges face FCPA exposure"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Listed companies, US-market Singapore firms"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "✓ ISO 37001 aligns with FCPA compliance programme expectations"
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:1px_0]">
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"SGX ESG reporting (sustainability)"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "Anti-bribery governance is an explicit component under G-pillar"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"SGX-listed companies"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "✓ ABMS certification supports ESG governance disclosures"
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap mt-6! -mr-6 -ml-6 mb-1.25!">
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-6! pr-6! pb-6! pl-6! bg-[rgba(255,255,255,1)]! rounded-md! [background:#fff] hover:transform-[translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none">
                    <Icon
                      name="survey"
                      className="mb-4 inline-block not-italic text-[2.2rem] text-[#C8102E]"
                    />
                    <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"ABMS Audit Services"}
                    </h4>
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        "Gap analysis, Stage 1 & 2 audits, pre-certification, internal audit, 2016→2025 transition."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-white [text-decoration:none] pt-2.5 pr-6 pb-2.5 pl-6 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-white [border:none] [background:#C8102E] inline-flex items-center gap-2 rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:transform-[translateX(5px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Explore audit →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-6! pr-6! pb-6! pl-6! bg-[rgba(255,255,255,1)]! rounded-md! [background:#fff] hover:transform-[translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none">
                    <Icon
                      name="file"
                      className="mb-4 inline-block not-italic text-[2.2rem] text-[#C8102E]"
                    />
                    <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"ABMS Consultation"}
                    </h4>
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        "Full implementation, IMS integration, PCA alignment, EDGE Grant proposal support."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-white [text-decoration:none] pt-2.5 pr-6 pb-2.5 pl-6 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-white [border:none] [background:#C8102E] inline-flex items-center gap-2 rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:transform-[translateX(5px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Explore consulting →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-6! pr-6! pb-6! pl-6! bg-[rgba(255,255,255,1)]! rounded-md! [background:#fff] hover:transform-[translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none">
                    <Icon
                      name="user"
                      className="mb-4 inline-block not-italic text-[2.2rem] text-[#C8102E]"
                    />
                    <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"ABMS Training"}
                    </h4>
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        "Lead Auditor (PECB), Internal Auditor, Implementer, Board governance, Staff awareness."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-white [text-decoration:none] pt-2.5 pr-6 pb-2.5 pl-6 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-white [border:none] [background:#C8102E] inline-flex items-center gap-2 rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:transform-[translateX(5px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Explore training →"}
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div className="relative pt-6! pr-6! pb-6! pl-6! mb-1.25! text-[#0a3622] bg-[#d1e7dd] [border:0]! rounded-lg! [background:linear-gradient(135deg,#EAF3DE,#d4edbd)] [border-left:5px_solid_#3B6D11]">
                <Icon
                  name="star"
                  className="float-left! mr-4! text-[1.75rem]! max-[1200px]:text-[calc(1.3rem+.6vw)]! inline-block not-italic text-[#3B6D11]!"
                />
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[rgba(33,37,41,1)]! text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {
                    "EDGE Grant — up to 50% for SMEs on ISO 37001 consultation, subject to eligibility and Enterprise Singapore's approval"
                  }
                </h5>
                <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Enterprise Singapore's EDGE Grant may support up to 50% of qualifying ISO 37001 consultation fees for SMEs, subject to eligibility and Enterprise Singapore's approval. ICFC prepares the proposal, quotation and SS 680 consultant details EDGE asks for; you apply on the Business Grants Portal before starting work."
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-white [text-decoration:none] inline-flex pt-2.5! pr-6! pb-2.5! pl-6! text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:none] rounded-lg bg-[#198754] hover:text-white hover:bg-[#157347] hover:border-[#146c43] focus-visible:text-white focus-visible:bg-[#157347] focus-visible:border-[#146c43] focus-visible:shadow-[0_0_0_0.25rem_rgba(60,153,110,.5)] active:text-white active:bg-[#146c43] active:border-[#13653f] active:shadow-[0_0_0_0.25rem_rgba(60,153,110,.5)] mt-4! focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:#3B6D11]! items-center justify-center gap-2.5 hover:[background:#2D550D] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                >
                  {"Check eligibility →"}
                </SiteLink>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "ICFC's ABMS audit process — bribery risk mapping to certificate"
                }
              </h3>
              <div className="mb-7.5 pl-5 [border-left:3px_solid_#C8102E]">
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"01. Free briefing"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"ABMS scope, PCA obligations, grant eligibility"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"02. Bribery risk map"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"Activities, geographies, third parties — risk register"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"03. Gap analysis"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "Full ISO 37001:2025 gap assessment including 2025 updates"
                    }
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"04. Grant application"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"EDGE applied for by you and approved before any work starts"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"05. Pre-cert audit"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"Mock audit — close NCPs before SAC-accredited CB"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"06. Certification"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"Stage 1 + Stage 2 CB audit — ISO 37001:2025 certificate"}
                  </p>
                </div>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "ABMS consultation — from bribery risk assessment to ISO 37001:2025 certificate"
                }
              </h3>
              <div className="mb-7.5 pl-5 [border-left:3px_solid_#C8102E]">
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"01. Free assessment"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"ABMS scope, PCA exposure, grant eligibility check"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"02. Grant application"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"EDGE applied for by you and approved before any work begins"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"03. Bribery risk assessment"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"Activities, geographies, third parties — risk register"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"04. ABMS build"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"Policy, controls, due diligence, whistleblowing, CoI"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"05. 2025 updates"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"Climate risk, enhanced CoI, compliance culture"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"06. Internal audit"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"Mock audit and corrective actions before CB"}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="mb-1.25 font-extrabold text-[#C8102E]">
                    {"07. Certification"}
                  </div>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"SAC-accredited CB Stage 1 + Stage 2 — certificate"}
                  </p>
                </div>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Client outcomes · Singapore"}
              </h3>
              <div className="flex flex-wrap -mt-6 -mr-6 -ml-6 mb-10">
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-6 pr-6 pb-6 pl-6 rounded-[20px] [background:#fff] shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full">
                    <Icon
                      name="quote"
                      className="inline-block not-italic text-[2rem] text-[#C8102E] opacity-[0.3]"
                    />
                    <p className="mt-2! mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        '"ICFC helped us achieve ISO 37001 certification in eight months — from scratch. Their third-party due diligence framework identified three overseas agents who had never been properly assessed for bribery risk."'
                      }
                    </p>
                    <p className="mt-4! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"— GM, Infrastructure contractor"}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-6 pr-6 pb-6 pl-6 rounded-[20px] [background:#fff] shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full">
                    <Icon
                      name="quote"
                      className="inline-block not-italic text-[2rem] text-[#C8102E] opacity-[0.3]"
                    />
                    <p className="mt-2! mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        '"Integrated ISO 9001 + ISO 37001 approach meant one project, one EDGE grant application, and certification to both standards simultaneously. Total cost was significantly less than budgeted."'
                      }
                    </p>
                    <p className="mt-4! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"— COO, Logistics provider"}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-6 pr-6 pb-6 pl-6 rounded-[20px] [background:#fff] shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full">
                    <Icon
                      name="quote"
                      className="inline-block not-italic text-[2rem] text-[#C8102E] opacity-[0.3]"
                    />
                    <p className="mt-2! mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        '"ICFC\'s ISO 37001:2025 transition audit identified gaps in conflicts of interest register and climate change risk for renewable energy procurement. We transitioned on first attempt."'
                      }
                    </p>
                    <p className="mt-4! mb-0! font-bold! text-[17px] text-[#616C74] leading-7">
                      {"— CCO, Energy company"}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="mt-0 mb-2.5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Frequently asked questions — ISO 37001 ABMS"}
              </h3>
              <AccordionGroup id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "How does ISO 37001 certification help in the event of a CPIB investigation?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] rounded-tl-md rounded-tr-md mb-4 rounded-xl overflow-hidden"
                >
                  {" "}
                  {
                    "SS ISO 37001 helps provide evidence to prosecutors or courts that the company had taken reasonable steps to prevent bribery. This evidentiary protection is the most compelling reason for Singapore companies to certify under the Prevention of Corruption Act. A company that can demonstrate it had implemented internationally recognised anti-bribery controls is in a significantly stronger legal position than one with no documented anti-bribery management system."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "What are the main differences between ISO 37001:2016 and the 2025 edition?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] mb-4 rounded-xl overflow-hidden"
                >
                  {" "}
                  {
                    "The 2025 edition introduces: (1) Climate change risk assessment mandatory for sustainability projects, carbon trading, green financing; (2) Enhanced conflicts of interest management; (3) Stronger compliance culture requirements — tone from the top now formally assessed; (4) Improved whistleblower protections; (5) ISO harmonized structure for better integration with ISO 9001, ISO 27001."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How much does ISO 37001 consultation cost after grants?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] mb-4 rounded-xl overflow-hidden"
                >
                  {" "}
                  {
                    "Typical ICFC consultation fees S$12,000–S$35,000. EDGE may support up to 50% for eligible SMEs, subject to eligibility and Enterprise Singapore's approval. Certification body fees S$4,000–S$9,000. Integrated IMS projects reduce total cost by 20-30%. Small organizations may complete the process in 6-8 months."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Does ISO 37001 satisfy UK Bribery Act and US FCPA requirements?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] rounded-br-md rounded-bl-md mb-4 rounded-xl overflow-hidden"
                >
                  {" "}
                  {
                    'Yes — ISO 37001 is widely recognised as demonstrating "adequate procedures" under the UK Bribery Act and aligns with US DOJ compliance programme expectations for FCPA. ICFC designs ABMS programmes that explicitly address the six principles of the UK Bribery Act and align with US DOJ guidance.'
                  }
                </AccordionItem>
              </AccordionGroup>
              <div className="pt-12! pr-12! pb-12! pl-12! text-center! rounded-2xl! mt-12.5 [background:rgba(200,16,46,0.05)]">
                <h3 className="mt-0 mb-4! font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {"Start your ISO 37001:2025 ABMS journey today"}
                </h3>
                <p className="mt-0 mb-6! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Free 30-minute anti-bribery assessment. Honest gap analysis against ISO 37001:2025. PCA and CPIB framework alignment review. EDGE Grant scheme guidance. No obligation."
                  }
                </p>
                <div className="flex! flex-wrap! justify-center! gap-4!">
                  <SiteLink
                    href="/contact-us"
                    className="text-white [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:none] rounded-lg bg-[#0d6efd] hover:text-white hover:bg-[#0b5ed7] hover:border-[#0a58ca] focus-visible:text-white focus-visible:bg-[#0b5ed7] focus-visible:border-[#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] active:text-white active:bg-[#0a58ca] active:border-[#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:#C8102E]! items-center justify-center gap-2.5 hover:[background:#8B0A1E] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Book free ABMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:2px_solid_#C8102E] rounded-lg bg-transparent hover:text-white hover:bg-[#0d6efd] hover:border-[#0d6efd] focus-visible:text-white focus-visible:bg-[#0d6efd] focus-visible:border-[#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] active:text-white active:bg-[#0d6efd] active:border-[#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] items-center justify-center gap-2.5 hover:[background:#C8102E] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Check grant eligibility"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:2px_solid_#C8102E] rounded-lg bg-transparent hover:text-white hover:bg-[#0d6efd] hover:border-[#0d6efd] focus-visible:text-white focus-visible:bg-[#0d6efd] focus-visible:border-[#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] active:text-white active:bg-[#0d6efd] active:border-[#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] items-center justify-center gap-2.5 hover:[background:#C8102E] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Get free quote"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaAreaSection() {
  return (
    <div className="-mt-17.5 relative z-2 overflow-x-clip">
      <div className="w-full pr-0 pl-0 mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="pt-5.25 pb-5.25 [background:radial-gradient(174.58%_135.27%_at_35.14%_-15.53%,rgba(47,62,75,0.6)_0%,rgba(47,62,75,0.036)_100%)] [backdrop-filter:blur(21px)] flex items-center gap-3.75 justify-center px-3.75">
              <span className="bg-[#FFFFFF] w-4.25 min-w-4.25 h-6 flex max-[575px]:hidden items-center justify-center rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  className="align-middle"
                >
                  <path
                    d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                    fill="#AB052D"
                  ></path>
                </svg>
              </span>
              <div className="text-[14px] font-medium">
                <p className="mt-0 mb-0 text-[14px] font-medium text-[rgba(255,255,255,0.8)] leading-7 max-[575px]:text-center">
                  {
                    "ISO 37001:2025 ABMS certification — CPIB-aligned, PCA aligned. "
                  }
                  <SiteLink
                    href="/contact-us"
                    className="text-inherit [text-decoration:underline] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] inline-block [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    {"Start your anti-bribery governance journey today →"}
                  </SiteLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
