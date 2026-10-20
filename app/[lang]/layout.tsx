import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { notFound } from "next/navigation";
import "../globals.css";
import "../icfc-components.css";
import { CookieConsent } from "@/components/organisms/cookie-consent";
import { FloatingDock } from "@/components/organisms/floating-dock";
import { I18nProvider } from "@/components/atoms/i18n-provider";
import { getDictionary } from "@/lib/dictionary";
import { jsonLdHtml, organizationJsonLd } from "@/lib/jsonld";
import { LANGS, getLang, isPublished } from "@/lib/i18n";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const interTight = localFont({
  src: "../../public/assets/fonts/inter-tight-latin.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.segment }));
}

export const metadata: Metadata = {
  title: "ICFC Pte Ltd | Audit, Consulting and Training Singapore",
  description:
    "Audit, consulting and training for ISO management systems, cybersecurity, data protection and sustainability standards in Singapore.",
  metadataBase: new URL("https://icfc.com.sg"),
  // Set in env; empty values are skipped. Bing and Baidu use meta tags, Google and Yandex too (or use DNS records).
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }),
      ...(process.env.NEXT_PUBLIC_BAIDU_VERIFICATION && { "baidu-site-verification": process.env.NEXT_PUBLIC_BAIDU_VERIFICATION }),
    },
  },
  openGraph: { images: ["/images/icfc/og-image-default.png"] },
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang: segment } = await params;
  const lang = getLang(segment);
  if (!lang) notFound();
  const strings = (await import(`@/lib/i18n/${lang.code}.json`)).default;
  const dict = await getDictionary();
  return (
    <html lang={lang.code} dir="ltr" className={interTight.variable}>
      <head>
        {/* Unreviewed translations stay out of search until published in lib/i18n.ts. */}
        {!isPublished(segment) && <meta name="robots" content="noindex, follow" />}
        {/* Google Consent Mode defaults must run before GTM loads. */}
        {/* Plain inline script so it runs first; extensions (ad/popup blockers) often rewrite it, hence suppressHydrationWarning. */}
        <script
          id="consent-defaults"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});`,
          }}
        />
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>
        )}
      </head>
      <body className="bg-white font-sans text-[16px] leading-normal text-[#616C74] antialiased [&_button]:cursor-pointer [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-[#AB052D] [&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-4 [&_button]:focus-visible:outline-[#AB052D]">
        <I18nProvider value={{ segment: lang.segment, prefix: lang.prefix, dict }}>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(organizationJsonLd()) }} />
          {children}
          <CookieConsent t={strings} />
          <FloatingDock t={strings} lang={lang.code} chatScriptSrc={process.env.NEXT_PUBLIC_FRAPPE_CHAT_SRC} />
        </I18nProvider>
      </body>
    </html>
  );
}
