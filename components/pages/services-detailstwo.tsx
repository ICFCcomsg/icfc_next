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
    <SitePageTemplate route="services-detailstwo.html">
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
      title="ISO 37001:2025 · Anti-Bribery Management System · Singapore · CPIB endorsed"
      description="Anti-bribery management — ISO 37001:2025 certified, PCA-aligned, grant-funded"
      background="/assets/images/services/services-thumb-30.webp"
    />
  );
}

function ServicesAreaSection() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 37001 Anti-Bribery Management System"
                  className="[vertical-align:middle] max-w-full w-full rounded-[6px]"
                />
              </div>
              <p className="mt-[30px] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO 37001:2025 is the world's leading standard for Anti-Bribery Management Systems (ABMS). In Singapore, it is nationally adopted as SS ISO 37001 — jointly launched by SPRING Singapore and the Corrupt Practices Investigation Bureau (CPIB) — and aligned to the Prevention of Corruption Act (PCA). The 2025 edition introduces critical updates including climate change risk, enhanced conflicts of interest management, and stronger compliance culture requirements. ICFC delivers full ABMS audit, consultation, and training with EDG grant management built into every engagement, across all 35 major Singapore industries."
                }
              </p>
              <div className="flex flex-wrap mt-[30px] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] mb-[40px]">
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="mb-[8px] text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"2025"}
                    </div>
                    <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"New ISO 37001 edition"}
                    </p>
                    <small className="text-[.875em]">
                      {"climate risk + CoI"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="mb-[8px] text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"6–12"}
                    </div>
                    <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"Months typical ABMS"}
                    </p>
                    <small className="text-[.875em]">
                      {"certification timeline"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="mb-[8px] text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"50%"}
                    </div>
                    <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"EDG grant co-funding"}
                    </p>
                    <small className="text-[.875em]">
                      {"for qualifying SMEs"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="mb-[8px] text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"35+"}
                    </div>
                    <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"Singapore industries"}
                    </p>
                    <small className="text-[.875em]">{"served"}</small>
                  </div>
                </div>
              </div>
              <div className="pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! rounded-[1rem]! mb-[40px] [background:rgba(200,16,46,0.05)]">
                <h4 className="mt-[0px] mb-[1rem]! [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Icon
                    name="alert"
                    className="mr-[.5rem]! inline-block [font-style:normal]"
                  />
                  {
                    "ISO 37001:2025 — what changed and why it matters for Singapore organisations"
                  }
                </h4>
                <div className="flex flex-wrap mt-[calc(-1_*_1rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="flex! gap-[.5rem]!">
                      <Icon
                        name="leaf"
                        className="text-[1.25rem]! inline-block [font-style:normal]"
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
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="flex! gap-[.5rem]!">
                      <Icon
                        name="heart"
                        className="text-[1.25rem]! inline-block [font-style:normal]"
                      />
                      <div>
                        <strong className="[font-weight:bolder]">
                          {"Conflicts of interest"}
                        </strong>
                        {" — Enhanced CoI guidance and management requirements"}
                      </div>
                    </div>
                  </div>
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="flex! gap-[.5rem]!">
                      <Icon
                        name="user"
                        className="text-[1.25rem]! inline-block [font-style:normal]"
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
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="flex! gap-[.5rem]!">
                      <Icon
                        name="shield"
                        className="text-[1.25rem]! inline-block [font-style:normal]"
                      />
                      <div>
                        <strong className="[font-weight:bolder]">
                          {"Whistleblower"}
                        </strong>
                        {" — Improved whistleblower protection provisions"}
                      </div>
                    </div>
                  </div>
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="flex! gap-[.5rem]!">
                      <Icon
                        name="merge"
                        className="text-[1.25rem]! inline-block [font-style:normal]"
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
              <h3 className="mt-[15px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "What is ISO 37001 ABMS? Singapore's anti-bribery certification — why ISO 37001:2025 matters in 2026"
                }
              </h3>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO 37001 is the international standard dedicated to establishing, implementing, maintaining, and improving an Anti-Bribery Management System. It offers requirements and guidance for preventing, detecting, and responding to bribery — covering direct and indirect bribery across public, private, and non-profit sectors. In Singapore, it is nationally adopted as SS ISO 37001 and aligns directly with the Prevention of Corruption Act."
                }
              </p>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "SS ISO 37001 was jointly launched by SPRING Singapore and the Corrupt Practices Investigation Bureau (CPIB). The Singapore Standard (SS) ISO 37001 on anti-bribery management systems is a voluntary standard designed to help companies establish, implement, maintain and improve their anti-bribery compliance programmes. It includes a series of measures which represents globally recognised anti-bribery good practice. Critically, SS ISO 37001 helps in the event of an investigation to provide evidence to the prosecutors or courts that the company had taken reasonable steps to prevent bribery. For Singapore organisations facing CPIB investigations, this evidentiary protection is the most compelling reason to certify."
                }
              </p>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO 37001:2025 is now the current edition. Organisations certified under ISO 37001:2016 should plan their transition to the 2025 edition. ICFC manages 2016-to-2025 transition audits alongside new implementation engagements. The 2025 edition adopts the ISO harmonized structure — making integration with ISO 9001, ISO 14001, ISO 27001, and ISO 22301 more efficient than ever before."
                }
              </p>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"ISO 37001:2025 ABMS — eight core components ICFC implements"}
              </h3>
              <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] mb-[40px]">
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                    <Icon
                      name="file"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]! inline-block [font-style:normal]"
                    />
                    <p className="mt-[.5rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"Anti-bribery policy"}
                    </p>
                    <small className="text-[.875em]">
                      {"Board-endorsed zero tolerance"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                    <Icon
                      name="shield"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]! inline-block [font-style:normal]"
                    />
                    <p className="mt-[.5rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"Bribery risk assessment"}
                    </p>
                    <small className="text-[.875em]">
                      {"Activities, geographies, third parties"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                    <Icon
                      name="search"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]! inline-block [font-style:normal]"
                    />
                    <p className="mt-[.5rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"Due diligence"}
                    </p>
                    <small className="text-[.875em]">
                      {"Third-party, transaction, personnel"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                    <Icon
                      name="card"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]! inline-block [font-style:normal]"
                    />
                    <p className="mt-[.5rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"Financial & non-financial controls"}
                    </p>
                    <small className="text-[.875em]">
                      {"Gift register, expense controls"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                    <Icon
                      name="quote"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]! inline-block [font-style:normal]"
                    />
                    <p className="mt-[.5rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"Whistleblowing channel"}
                    </p>
                    <small className="text-[.875em]">
                      {"Anonymous + protection"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                    <Icon
                      name="merge"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]! inline-block [font-style:normal]"
                    />
                    <p className="mt-[.5rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"Conflicts of interest"}
                    </p>
                    <small className="text-[.875em]">
                      {"Enhanced 2025 CoI management"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                    <Icon
                      name="globe"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]! inline-block [font-style:normal]"
                    />
                    <p className="mt-[.5rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"Climate change risk (new 2025)"}
                    </p>
                    <small className="text-[.875em]">
                      {"Carbon trading, green financing"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                    <Icon
                      name="chart"
                      className="text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]! inline-block [font-style:normal]"
                    />
                    <p className="mt-[.5rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"Monitoring & investigation"}
                    </p>
                    <small className="text-[.875em]">
                      {"Internal audit, management review"}
                    </small>
                  </div>
                </div>
              </div>
              <h3 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "Singapore's anti-bribery legal and regulatory framework — ISO 37001 alignment"
                }
              </h3>
              <div className="[overflow-x:auto] mb-[40px]">
                <table className="[caption-side:bottom] [border-collapse:collapse] w-full max-[991px]:w-[900px] mb-[1rem] [vertical-align:top] [border-color:#dee2e6] [border:1px_solid_#DBDEE1]">
                  <thead className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:bottom] bg-[#f8f9fa]! rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"Framework / Legislation"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"Key obligation"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"Sectors"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"ISO 37001 alignment"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:inherit]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Prevention of Corruption Act (PCA)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "Criminalises giving and accepting bribes in public and private sectors"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"All sectors"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "✓ Direct alignment — ABMS demonstrates reasonable prevention steps"
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"CPIB enforcement"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "CPIB investigates corruption offences. ISO 37001 certification provides evidentiary protection"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"All sectors"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "✓ CPIB endorsed SS ISO 37001 provides prosecution mitigation"
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"MAS Guidelines on Gifts & Entertainment"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "Financial institutions must have documented policies on gifts and entertainment"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Banks, insurers, FinTech"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"✓ Gift/hospitality register and financial controls"}
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"UK Bribery Act (extraterritorial)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          '"Adequate procedures" defence requires documented ABMS'
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Professional services, construction, logistics"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          '✓ ISO 37001 satisfies UK "adequate procedures" defence'
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"US FCPA (extraterritorial)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "Singapore companies listed on US exchanges face FCPA exposure"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Listed companies, US-market Singapore firms"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "✓ ISO 37001 aligns with FCPA compliance programme expectations"
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"SGX ESG reporting (sustainability)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "Anti-bribery governance is an explicit component under G-pillar"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"SGX-listed companies"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {
                          "✓ ABMS certification supports ESG governance disclosures"
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap mt-[1.5rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] mb-[5px]!">
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[0.375rem]! [background:#fff] hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
                    <Icon
                      name="survey"
                      className="mb-[1rem] inline-block [font-style:normal] text-[2.2rem] text-[#C8102E]"
                    />
                    <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"ABMS Audit Services"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Gap analysis, Stage 1 & 2 audits, pre-certification, internal audit, 2016→2025 transition."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="text-[#fff] [text-decoration:none] pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] inline-flex items-center gap-[8px] rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:[transform:translateX(5px)]"
                    >
                      {"Explore audit →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[0.375rem]! [background:#fff] hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
                    <Icon
                      name="file"
                      className="mb-[1rem] inline-block [font-style:normal] text-[2.2rem] text-[#C8102E]"
                    />
                    <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"ABMS Consultation"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Full implementation, IMS integration, PCA alignment, EDG grant managed."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="text-[#fff] [text-decoration:none] pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] inline-flex items-center gap-[8px] rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:[transform:translateX(5px)]"
                    >
                      {"Explore consulting →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[0.375rem]! [background:#fff] hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
                    <Icon
                      name="user"
                      className="mb-[1rem] inline-block [font-style:normal] text-[2.2rem] text-[#C8102E]"
                    />
                    <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"ABMS Training"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Lead Auditor (PECB), Internal Auditor, Implementer, Board governance, Staff awareness."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="text-[#fff] [text-decoration:none] pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] inline-flex items-center gap-[8px] rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:[transform:translateX(5px)]"
                    >
                      {"Explore training →"}
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div className="relative pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! mb-[5px]! text-[#0a3622] bg-[#d1e7dd] [border:0]! rounded-[0.5rem]! [background:linear-gradient(135deg,_#EAF3DE,_#d4edbd)] [border-left:5px_solid_#3B6D11]">
                <Icon
                  name="star"
                  className="[float:left]! mr-[1rem]! text-[1.75rem]! max-[1200px]:text-[calc(1.3rem_+_.6vw)]! inline-block [font-style:normal] text-[#3B6D11]!"
                />
                <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[rgba(33,37,41,1)]! text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {
                    "EDG / MASA grant — up to 50% co-funding for ISO 37001 consultation"
                  }
                </h5>
                <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 37001 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. Integrated ABMS + ISO 9001 / ISO 27001 projects can qualify for EDG co-funding across all standards in a single application."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="text-[#fff] [text-decoration:none] inline-flex pt-[10px]! pr-[24px]! pb-[10px]! pl-[24px]! text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#198754] hover:text-[#fff] hover:bg-[#157347] hover:[border-color:#146c43] focus-visible:text-[#fff] focus-visible:bg-[#157347] focus-visible:[border-color:#146c43] focus-visible:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] active:text-[#fff] active:bg-[#146c43] active:[border-color:#13653f] active:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] mt-[1rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#3B6D11]! items-center justify-center gap-[10px] hover:[background:#2D550D] hover:[transform:translateY(-2px)]"
                >
                  {"Check eligibility →"}
                </SiteLink>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "ICFC's ABMS audit process — bribery risk mapping to certificate"
                }
              </h3>
              <div className="mb-[30px] pl-[20px] [border-left:3px_solid_#C8102E]">
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"01. Free briefing"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"ABMS scope, PCA obligations, grant eligibility"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"02. Bribery risk map"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Activities, geographies, third parties — risk register"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"03. Gap analysis"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Full ISO 37001:2025 gap assessment including 2025 updates"
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"04. Grant application"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"EDG submitted and approved before any billable work"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"05. Pre-cert audit"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Mock audit — close NCPs before SAC-accredited CB"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"06. Certification"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Stage 1 + Stage 2 CB audit — ISO 37001:2025 certificate"}
                  </p>
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "ABMS consultation — from bribery risk assessment to ISO 37001:2025 certificate"
                }
              </h3>
              <div className="mb-[30px] pl-[20px] [border-left:3px_solid_#C8102E]">
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"01. Free assessment"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"ABMS scope, PCA exposure, grant eligibility check"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"02. Grant application"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"EDG submitted and approved before any work begins"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"03. Bribery risk assessment"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Activities, geographies, third parties — risk register"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"04. ABMS build"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Policy, controls, due diligence, whistleblowing, CoI"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"05. 2025 updates"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Climate risk, enhanced CoI, compliance culture"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"06. Internal audit"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Mock audit and corrective actions before CB"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"07. Certification"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"SAC-accredited CB Stage 1 + Stage 2 — certificate"}
                  </p>
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Client outcomes · Singapore"}
              </h3>
              <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] mb-[40px]">
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] rounded-[20px] [background:#fff] shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full">
                    <Icon
                      name="quote"
                      className="inline-block [font-style:normal] text-[2rem] text-[#C8102E] opacity-[0.3]"
                    />
                    <p className="mt-[.5rem]! mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        '"ICFC helped us achieve ISO 37001 certification in eight months — from scratch. Their third-party due diligence framework identified three overseas agents who had never been properly assessed for bribery risk."'
                      }
                    </p>
                    <p className="mt-[1rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"— GM, Infrastructure contractor"}
                    </p>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] rounded-[20px] [background:#fff] shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full">
                    <Icon
                      name="quote"
                      className="inline-block [font-style:normal] text-[2rem] text-[#C8102E] opacity-[0.3]"
                    />
                    <p className="mt-[.5rem]! mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        '"Integrated ISO 9001 + ISO 37001 approach meant one project, one EDG grant application, and certification to both standards simultaneously. Total cost was significantly less than budgeted."'
                      }
                    </p>
                    <p className="mt-[1rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"— COO, Logistics provider"}
                    </p>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] rounded-[20px] [background:#fff] shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full">
                    <Icon
                      name="quote"
                      className="inline-block [font-style:normal] text-[2rem] text-[#C8102E] opacity-[0.3]"
                    />
                    <p className="mt-[.5rem]! mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        '"ICFC\'s ISO 37001:2025 transition audit identified gaps in conflicts of interest register and climate change risk for renewable energy procurement. We transitioned on first attempt."'
                      }
                    </p>
                    <p className="mt-[1rem]! mb-[0]! font-bold! text-[17px] text-[#616C74] leading-[28px]">
                      {"— CCO, Energy company"}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
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
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top-left-radius:0.375rem] [border-top-right-radius:0.375rem] mb-[16px] rounded-[12px] overflow-hidden"
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
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
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
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "Typical ICFC consultation fees S$12,000–S$35,000. EDG covers up to 50% for eligible SMEs. Certification body fees S$4,000–S$9,000. Integrated IMS projects reduce total cost by 20-30%. Small organizations may complete the process in 6-8 months."
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
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] [border-bottom-right-radius:0.375rem] [border-bottom-left-radius:0.375rem] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    'Yes — ISO 37001 is widely recognised as demonstrating "adequate procedures" under the UK Bribery Act and aligns with US DOJ compliance programme expectations for FCPA. ICFC designs ABMS programmes that explicitly address the six principles of the UK Bribery Act and align with US DOJ guidance.'
                  }
                </AccordionItem>
              </AccordionGroup>
              <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! rounded-[1rem]! mt-[50px] [background:rgba(200,16,46,0.05)]">
                <h3 className="mt-[0px] mb-[1rem]! [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {"Start your ISO 37001:2025 ABMS journey today"}
                </h3>
                <p className="mt-[0] mb-[1.5rem]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Free 30-minute anti-bribery assessment. Honest gap analysis against ISO 37001:2025. PCA and CPIB framework alignment review. EDG grant eligibility check. No obligation."
                  }
                </p>
                <div className="flex! flex-wrap! justify-center! gap-[1rem]!">
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#0d6efd] hover:text-[#fff] hover:bg-[#0b5ed7] hover:[border-color:#0a58ca] focus-visible:text-[#fff] focus-visible:bg-[#0b5ed7] focus-visible:[border-color:#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] active:text-[#fff] active:bg-[#0a58ca] active:[border-color:#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#C8102E]! items-center justify-center gap-[10px] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free ABMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)]"
                  >
                    {"Check grant eligibility"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)]"
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
    <div className="mt-[-70px] relative z-[2] [overflow-x:clip]">
      <div className="w-full pr-[calc(0_*_.5)] pl-[calc(0_*_.5)] mr-[auto] ml-[auto]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="pt-[21px] pb-[21px] [background:radial-gradient(174.58%_135.27%_at_35.14%_-15.53%,_rgba(47,_62,_75,_0.6)_0%,_rgba(47,_62,_75,_0.036)_100%)] [backdrop-filter:blur(21px)] flex items-center gap-[15px] justify-center [padding-inline:15px]">
              <span className="bg-[#FFFFFF] w-[17px] min-w-[17px] h-[24px] flex max-[575px]:hidden items-center justify-center rounded-[4px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  className="[vertical-align:middle]"
                >
                  <path
                    d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                    fill="#AB052D"
                  ></path>
                </svg>
              </span>
              <div className="text-[14px] font-medium">
                <p className="mt-[0] mb-[0] text-[14px] font-medium text-[rgba(255,_255,_255,_0.8)] leading-[28px] max-[575px]:text-center">
                  {
                    "ISO 37001:2025 ABMS certification — CPIB endorsed, PCA aligned. "
                  }
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[inherit] [text-decoration:underline] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] inline-block"
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
