import { Tx } from "@/components/atoms/tx";
import { Container } from "@/components/atoms/container";

export function MissionSection() {
  return (
    <Container className="pt-12! pb-12!">
      <div className="pt-12 pr-0 pb-12 pl-0 [border-bottom:none]">
        <div className="mb-3! pt-1! pr-3! pb-1! pl-3! text-[13px]! font-semibold! tracking-[0.08em]! uppercase! text-[#A32D2D]! [background:#FCEBEB]! inline-block! rounded-[20px]!">
          <Tx ns="contact-us">{"Our mission"}</Tx>
        </div>
        <div className="grid grid-cols-[1fr_1fr] max-[768px]:grid-cols-[1fr] gap-10 [align-items:start]">
          <div>
            <h1 className="mt-0 mb-0 font-bold! leading-[1.2]! text-[#111]! text-[28px]! [word-break:break-word]">
              <Tx ns="contact-us">{"Mission-driven results."}</Tx>
              <br />
              <Tx ns="contact-us">{"Standards-led excellence."}</Tx>
            </h1>
            <p className="mt-0 mb-0 text-[16px]! [font-weight:normal] text-[#555]! leading-[1.7]!">
              <Tx ns="contact-us">{"Our mission is to make international standards genuinely work for Singapore businesses."}</Tx>
            </p>
          </div>
          <div>
            <div className="pt-8 pr-8 pb-8 pl-8 [background:#fff] [border:1px_solid_#f0f0f0] shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-2xl">
              <p className="mt-0 mb-7.5 text-[14px]! font-semibold! text-[#AB052D]! leading-7 tracking-wider! uppercase!">
                <Tx ns="contact-us">{"Achieve goals"}</Tx>
              </p>
              <p className="mt-0 mb-1.5 mr-0 ml-0 text-[18px]! font-semibold! text-[#111]! leading-7">
                <Tx ns="contact-us">{"What success looks like for our clients"}</Tx>
              </p>
              <div className="mt-3 mr-0 mb-3 ml-0 flex justify-between text-[14px] text-[#4a4a4a] font-medium">
                <span className=""><Tx ns="contact-us">{"Years"}</Tx></span>
                <span className="">{"12"}</span>
              </div>
              <div className="mt-3 mr-0 mb-3 ml-0 flex justify-between text-[14px] text-[#4a4a4a] font-medium">
                <span className=""><Tx ns="contact-us">{"Clients"}</Tx></span>
                <span className="">{"250+"}</span>
              </div>
              <div className="mt-3 mr-0 mb-3 ml-0 flex justify-between text-[14px] text-[#4a4a4a] font-medium">
                <span className=""><Tx ns="contact-us">{"Audits"}</Tx></span>
                <span className="">{"500+"}</span>
              </div>
              <div className="mt-3 mr-0 mb-3 ml-0 flex justify-between text-[14px] text-[#4a4a4a] font-medium">
                <span className=""><Tx ns="contact-us">{"Trainees"}</Tx></span>
                <span className="">{"100+"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
