import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { TickIcon } from "@/components/icons/tick-icon";
import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { AnimatedElement } from "@/components/atoms/animated-element";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";

export function WorkingSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 relative z-1 overflow-x-clip">
      <Container>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="pt-7.5 pb-7.5 grid grid-cols-[1fr_522px] max-[991px]:grid-cols-[repeat(1,1fr)] min-[991px]:max-[1600px]:grid-cols-[repeat(2,1fr)] [background:#F8F8F9] ps-15 max-[1600px]:ps-7.5 pe-7.5 gap-[30px_90px] max-[1600px]:gap-[30px_30px] rounded-md">
              <div>
                <div>
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    <Tx ns="industry">{"Best BUSINESS Strategy"}</Tx>
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-5 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    <Tx ns="industry">{"Welcome to ICFC team"}</Tx>
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    <Tx ns="industry">{"Position your agency as the bridge between a client's big-picture vision and achievable action plans. data-driven strategies and your track."}</Tx>
                  </p>
                </div>
                <div className="mt-7.5 mb-12.5 max-[991px]:mb-10 grid grid-cols-[repeat(2,1fr)] max-[767px]:grid-cols-[repeat(1,1fr)] min-[991px]:max-[1199px]:grid-cols-[repeat(1,1fr)] gap-[15px_0] w-128.75 max-[767px]:w-full min-[991px]:max-[1600px]:w-full">
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <TickIcon className="align-middle w-3.5 h-3.5" />
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      <Tx ns="industry">{" Regulatory Investigations "}</Tx>
                    </p>
                  </div>
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <TickIcon className="align-middle w-3.5 h-3.5" />
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      <Tx ns="industry">{" Competitive Work Analysis "}</Tx>
                    </p>
                  </div>
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <TickIcon className="align-middle w-3.5 h-3.5" />
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      <Tx ns="industry">{" Anit- Competitive Conduct "}</Tx>
                    </p>
                  </div>
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <TickIcon className="align-middle w-3.5 h-3.5" />
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      <Tx ns="industry">{"Global Expansion Planning"}</Tx>
                    </p>
                  </div>
                </div>
                <div>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#AB052D] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] gap-2 group/btn [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <Tx ns="industry">{"Join a global team "}</Tx>
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" pathClassName="fill-[#FFFFFF]" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" pathClassName="fill-[#FFFFFF]" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <AnimatedElement
                as="div"
                effect="reveal-right"
                delay={0}
                duration={1}
                data-dir="reveal_right"
                className="relative z-1 visible overflow-hidden"
              >
                <SiteImage
                  src="/assets/icfc/sketch-integrated-audit.svg"
                  alt="image"
                  className="align-middle max-w-full rounded-md w-full h-full object-cover"
                />
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
