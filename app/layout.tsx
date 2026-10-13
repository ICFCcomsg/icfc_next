import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import "@/components/icfc/styles/icfc-components.css";
import CookieConsent from "@/components/icfc/react/CookieConsent.jsx";
import FloatingDock from "@/components/icfc/react/FloatingDock.jsx";
import strings from "@/components/icfc/i18n/en.json";
import cookies from "@/components/icfc/data/cookies.json";
import services from "@/lib/services.json";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const interTight = localFont({
  src: "../public/assets/fonts/inter-tight-latin.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ICFC Pte Ltd | Audit, Consulting and Training Singapore",
  description:
    "Audit, consulting and training for ISO management systems, cybersecurity, data protection and sustainability standards in Singapore.",
  metadataBase: new URL("https://icfc.com.sg"),
  openGraph: { images: ["/images/icfc/og-image-default.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr" className={interTight.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        {children}
        <CookieConsent t={strings} cookies={cookies} />
        <FloatingDock
          t={strings}
          endpoint="/api/contact"
          services={services.map((s) => ({ id: s.id, name: s.name }))}
          chatScriptSrc={process.env.NEXT_PUBLIC_FRAPPE_CHAT_SRC}
        />
      </body>
    </html>
  );
}
