import { AwardIcon } from "@/components/icons/award-icon";
import { PartnersIcon } from "@/components/icons/partners-icon";
import { ProjectsIcon } from "@/components/icons/projects-icon";
import { SatisfactionIcon } from "@/components/icons/satisfaction-icon";
import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { AnimatedCounter, AnimatedElement } from "@/components/atoms/animated-element";

export function StatsSection() {
  return (
    <div className="pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <Container>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[repeat(4,1fr)] max-[480px]:grid-cols-[repeat(1,1fr)] min-[480px]:max-[767px]:grid-cols-[repeat(2,1fr)] min-[767px]:max-[1199px]:grid-cols-[repeat(3,1fr)] gap-7.5">
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
                className="pt-7.5 max-[1600px]:pt-5 pr-7.5 max-[1600px]:pr-5 pb-7.5 max-[1600px]:pb-5 pl-7.5 max-[1600px]:pl-5 flex [border:1px_solid_#DBDEE1] gap-5 rounded-md [background:#F8F8F9] max-[991px]:flex-wrap"
              >
                <div>
                  <ProjectsIcon className="align-middle w-11.25 h-11.25" />
                </div>
                <div>
                  <div className="mb-3 flex items-center">
                    <AnimatedCounter
                      value={25.5}
                      className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]"
                    />
                    <span className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]">
                      {"K"}
                    </span>
                  </div>
                  <span className=""><Tx ns="about">{"Projects Completed"}</Tx></span>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.5}
                duration={1}
                data-wow-delay=".5s"
                className="pt-7.5 max-[1600px]:pt-5 pr-7.5 max-[1600px]:pr-5 pb-7.5 max-[1600px]:pb-5 pl-7.5 max-[1600px]:pl-5 flex [border:1px_solid_#DBDEE1] gap-5 rounded-md [background:#F8F8F9] max-[991px]:flex-wrap"
              >
                <div>
                  <SatisfactionIcon className="align-middle w-11.25 h-11.25" />
                </div>
                <div>
                  <div className="mb-3 flex items-center">
                    <AnimatedCounter
                      value={10.5}
                      className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]"
                    />
                    <span className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]">
                      {"K"}
                    </span>
                  </div>
                  <span className=""><Tx ns="about">{"Customer Satisfaction"}</Tx></span>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.7}
                duration={1}
                data-wow-delay=".7s"
                className="pt-7.5 max-[1600px]:pt-5 pr-7.5 max-[1600px]:pr-5 pb-7.5 max-[1600px]:pb-5 pl-7.5 max-[1600px]:pl-5 flex [border:1px_solid_#DBDEE1] gap-5 rounded-md [background:#F8F8F9] max-[991px]:flex-wrap"
              >
                <div>
                  <AwardIcon className="align-middle w-11.25 h-11.25" />
                </div>
                <div>
                  <div className="mb-3 flex items-center">
                    <AnimatedCounter
                      value={1.5}
                      className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]"
                    />
                    <span className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]">
                      {"K"}
                    </span>
                  </div>
                  <span className=""><Tx ns="about">{"Consulting Award"}</Tx></span>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.9}
                duration={1}
                data-wow-delay=".9s"
                className="pt-7.5 max-[1600px]:pt-5 pr-7.5 max-[1600px]:pr-5 pb-7.5 max-[1600px]:pb-5 pl-7.5 max-[1600px]:pl-5 flex [border:1px_solid_#DBDEE1] gap-5 rounded-md [background:#F8F8F9] max-[991px]:flex-wrap"
              >
                <div>
                  <PartnersIcon className="align-middle w-11.25 h-11.25" />
                </div>
                <div>
                  <div className="mb-3 flex items-center">
                    <AnimatedCounter
                      value={4.5}
                      className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]"
                    />
                    <span className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]">
                      {"K"}
                    </span>
                  </div>
                  <span className=""><Tx ns="about">{"Strategic Partners"}</Tx></span>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
