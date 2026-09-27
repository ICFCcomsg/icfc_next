import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
