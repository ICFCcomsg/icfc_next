/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/atoms/container";
import { SectionHeading } from "@/components/atoms/section-heading";
import { getTranslator } from "@/lib/dictionary";

// Pack: "ICFC courses run in three formats: public classroom sessions, in-house sessions for your team,
// and online courses on the ICFC Digital LMS at icfc.digital."
export async function TrainingFormats() {
  const t = await getTranslator("training");
  const formats: [string, string?][] = [
    ["Public classroom sessions"],
    ["In-house sessions for your team", "#in-house"],
    ["Online courses on the ICFC Digital LMS", "https://icfc.digital/lms/courses"],
  ];
  return (
    <section className="py-20 max-[767px]:py-12">
      <Container>
        <div className="mb-10 grid grid-cols-[1.4fr_1fr] max-[991px]:grid-cols-1 items-center gap-12">
          <div>
            <SectionHeading>{t("Learn at your pace or in class.")}</SectionHeading>
            <p className="m-0 text-[18px] leading-[1.75] text-[#4A5560]">
              {t("ICFC courses run in three formats: public classroom sessions, in-house sessions for your team, and online courses on the ICFC Digital LMS at icfc.digital.")}
            </p>
          </div>
          <img src="/images/icfc/sketch-lms-calendar.svg" alt="" className="w-full h-auto max-[991px]:max-w-md" loading="lazy" />
        </div>
        <ul className="m-0 p-0 list-none grid grid-cols-3 max-[991px]:grid-cols-1 gap-6">
          {formats.map(([label, href], i) => (
            <li key={label} className="rounded-xl bg-[#F0F4FC] p-8">
              <span className="font-mono text-[14px] font-semibold text-[#AB052D]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 mb-0 text-[22px] font-semibold text-[#161D2E]">
                {href ? (
                  <a href={href} className="hover:text-[#AB052D]" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
                    {t(label)} {href.startsWith("http") ? "↗" : "→"}
                  </a>
                ) : (
                  t(label)
                )}
              </h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
