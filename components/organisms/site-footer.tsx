import { CookieSettingsLink } from "@/components/atoms/cookie-settings-link";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { getDictionary, getServices } from "@/lib/dictionary";
import { SERVICE_GROUPS } from "@/lib/service-data";
import { CONTAINER } from "@/components/atoms/container";

const title = "mt-0 mb-5 text-[20px] font-semibold text-white";
const link = "text-[rgba(255,255,255,0.6)] hover:text-white";

export async function SiteFooter() {
  const [t, services] = await Promise.all([getDictionary(), getServices()]);
  const f = t.footer;
  return (
    <footer className="bg-[#2B3944] text-[16px]">
      <div className={`${CONTAINER} grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] max-[991px]:grid-cols-2 max-[575px]:grid-cols-1 gap-10 pt-20 pb-15`}>
        <div>
          <SiteLink href="/" aria-label="ICFC home">
            <SiteImage src="/assets/images/logo/logo.webp" alt="ICFC" className="mb-6 w-37.5 h-auto" />
          </SiteLink>
          <p className="m-0 leading-7 text-[rgba(255,255,255,0.6)]">{f.about_text}</p>
        </div>

        <nav aria-label={f.services_title}>
          <h2 className={title}>{f.services_title}</h2>
          <ul className="m-0 p-0 list-none space-y-3">
            {SERVICE_GROUPS.map((g) => {
              const first = services.find((s) => s.group === g);
              return (
                <li key={g}>
                  <SiteLink href={first ? `/services/${first.slug}` : "/services"} className={link}>
                    {t.groups[g as keyof typeof t.groups]}
                  </SiteLink>
                </li>
              );
            })}
            <li>
              <SiteLink href="/services" className="text-white hover:text-[#AB052D]">
                {f.all_services} →
              </SiteLink>
            </li>
          </ul>
        </nav>

        {/* Pack footer: Training column. ponytail: link labels are English until the site dictionaries carry them, as in the header. */}
        <nav aria-label={t.nav.training}>
          <h2 className={title}>{t.nav.training}</h2>
          <ul className="m-0 p-0 list-none space-y-3">
            <li><SiteLink href="/training/calendar" className={link}>Course calendar</SiteLink></li>
            <li><a href="https://icfc.digital" target="_blank" rel="noopener" className={link}>Online courses ↗</a></li>
            <li><SiteLink href="/training/funding" className={link}>Funding</SiteLink></li>
            <li><SiteLink href="/training/lms-terms" className={link}>{f.lms_terms}</SiteLink></li>
          </ul>
        </nav>

        <nav aria-label={f.company_title}>
          <h2 className={title}>{f.company_title}</h2>
          <ul className="m-0 p-0 list-none space-y-3">
            {(
              [
                ["about", "/about"],
                ["industries", "/industry"],
                ["blog", "/blog"],
                ["contact", "/contact-us"],
              ] as const
            ).map(([key, href]) => (
              <li key={key}>
                <SiteLink href={href} className={link}>
                  {t.nav[key]}
                </SiteLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={title}>{f.contact_title}</h2>
          <p className="m-0 mb-6 leading-8 text-[rgba(255,255,255,0.6)]">
            {f.call_us}: <a href="tel:+6586017001" className={link}>+65 8601 7001</a>
            <br />
            {f.email}: <a href="mailto:admin@icfc.com.sg" className={link}>admin@icfc.com.sg</a>
          </p>
          <h2 className={title}>{f.legal_title}</h2>
          <ul className="m-0 p-0 list-none space-y-3">
            <li><SiteLink href="/privacy-policy" className={link}>{f.privacy}</SiteLink></li>
            <li><SiteLink href="/cookie-notice" className={link}>{f.cookie_notice}</SiteLink></li>
            <li><SiteLink href="/training/lms-terms" className={link}>{f.lms_terms}</SiteLink></li>
            <li><SiteLink href="/marketing-preferences" className={link}>Marketing preferences</SiteLink></li>
            <li className="text-[rgba(255,255,255,0.6)] hover:text-white"><CookieSettingsLink label={f.cookie_settings} /></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className={`${CONTAINER} m-0 py-5.5 text-center text-[15px] text-[rgba(255,255,255,0.7)]`}>
          © {new Date().getFullYear()} ICFC Pte Ltd · {f.uen} · {f.rights}
        </p>
      </div>
    </footer>
  );
}
