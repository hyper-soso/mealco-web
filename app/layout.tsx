import "./globals.css";
import { createMetadata } from "@/lib/metadata";
import { Noto_Sans_KR } from "next/font/google";
import { headers } from "next/headers";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata = createMetadata("en");

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = (await headers()).get("x-mealco-locale") === "ko" ? "ko" : "en";

  return (
    <html lang={locale} className={`${notoSansKr.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
