import type { Locale } from "@/types";
import { notFound } from "next/navigation";
import { Landing_Cta } from "@/components/landing/cta";
import { Landing_Family } from "@/components/landing/family";
import { Landing_Header } from "@/components/landing/header";
import { Landing_How } from "@/components/landing/how";
import { Landing_Why } from "@/components/landing/why";
import { Footer } from "@/components/footer";
import { Topnav } from "@/components/top-nav";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";

interface Props {
  params: Promise<{ lang: "ko" | "en" }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return createMetadata(lang);
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!["ko", "en"].includes(lang as Locale)) notFound();

  return (
    <>
      <Topnav
        locale={lang}
        className="sticky top-0 z-100 bg-brand-100/90 backdrop-blur-md"
      />
      <div className="bg-brand-100">
        <main className="p-4 mx-auto max-w-7xl">
          <Landing_Header locale={lang} className="mt-16" />
          <Landing_Why locale={lang} className="mt-32" />
          <Landing_How locale={lang} className="mt-32" />
          <Landing_Family locale={lang} className="mt-32" />
          <Landing_Cta locale={lang} className="my-32" />
        </main>
      </div>
      <Footer locale={lang} />
    </>
  );
}
