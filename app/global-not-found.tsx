/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

// Unmatched URLs skip app/[lang]/layout, so this page brings its own html, styles and font.
const interTight = localFont({
  src: "../public/assets/fonts/inter-tight-latin.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = { title: "Page not found | ICFC Pte Ltd", robots: { index: false } };

// Pack: "The 404 page reads: We could not find that page. Try searching, or go to Services, Training or Contact."
// ponytail: English only; a language-aware 404 needs the [lang] layout, which unmatched URLs never reach.
export default function GlobalNotFound() {
  const link = "rounded-full border border-[#AB052D] px-6 py-3 font-medium text-[#AB052D] hover:bg-[#AB052D] hover:text-white";
  return (
    <html lang="en" className={interTight.variable}>
      <body className="bg-white">
        <main className="mx-auto grid min-h-screen max-w-285 grid-cols-[1fr_1fr] items-center gap-12 px-6 py-16 max-[991px]:grid-cols-1">
          <img src="/images/icfc/sketch-404.svg" alt="" className="w-full h-auto max-[991px]:max-w-sm" />
          <div>
            <Link href="/" aria-label="ICFC home">
              <img src="/assets/images/logo/logo.webp" alt="ICFC" className="mb-8 w-37.5 h-auto" />
            </Link>
            <h1 className="mt-0 mb-4 text-[44px] font-semibold leading-tight text-[#161D2E] max-[767px]:text-[32px]">We could not find that page.</h1>
            <p className="mt-0 mb-8 text-[18px] leading-[1.75] text-[#4A5560]">Try searching, or go to Services, Training or Contact.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className={link}>Services</Link>
              <Link href="/training" className={link}>Training</Link>
              <Link href="/contact-us" className={link}>Contact</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
