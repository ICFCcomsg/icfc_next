import { QuoteButton } from "@/components/atoms/quote-button";
import { CONTAINER } from "@/components/atoms/container";
import { getDictionary } from "@/lib/dictionary";
import { section, h2 } from "./styles";

export async function HomeContact() {
  const t = await getDictionary();
  const h = t.home;
  return (
      <section className={section}>
        <div className={`${CONTAINER} rounded-[28px] bg-[#AB052D] p-12 max-[575px]:p-7 flex items-center justify-between flex-wrap gap-6`}>
          <div>
            <h2 className={`${h2} text-white! mb-2!`}>{h.contact_title}</h2>
            <p className="m-0 text-[17px] text-white/85">
              <a href="tel:+6586017001" className="text-white">+65 8601 7001</a>
              {" · "}
              <a href="mailto:admin@icfc.com.sg" className="text-white">admin@icfc.com.sg</a>
              {" · "}
              <a href="https://wa.me/6586017001" target="_blank" rel="noopener noreferrer" className="text-white">WhatsApp</a>
            </p>
          </div>
          <QuoteButton light />
        </div>
      </section>
  );
}
