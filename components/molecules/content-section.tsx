import type { ReactNode } from "react";
import { Container } from "@/components/atoms/container";
import { Eyebrow } from "@/components/atoms/eyebrow";
import { SectionHeading } from "@/components/atoms/section-heading";

/** Titled content section for text-led pages (Grants, Training, About). `tinted` gives the pale band background. */
export function ContentSection({
  id,
  eyebrow,
  title,
  tinted,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  tinted?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-32 py-20 max-[767px]:py-12 ${tinted ? "bg-[#F8F8FD]" : ""}`}>
      <Container>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <SectionHeading>{title}</SectionHeading>
        {children}
      </Container>
    </section>
  );
}

/** Body paragraph used inside ContentSection. */
export const prose = "m-0 max-w-4xl text-[18px] leading-[1.75] text-[#4A5560]";
