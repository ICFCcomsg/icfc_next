import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICFC PTE LTD | Business Consulting Singapore",
  description:
    "Business consulting, ISO certification, cybersecurity, and sustainability services from ICFC Singapore.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white font-sans text-[17px] leading-relaxed text-[#616C74] antialiased [&_button]:cursor-pointer [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-[#AB052D] [&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-4 [&_button]:focus-visible:outline-[#AB052D]">
        {children}
      </body>
    </html>
  );
}
