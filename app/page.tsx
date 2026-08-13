import { Landing_Cta } from "@/components/landing/cta";
import { Landing_Family } from "@/components/landing/family";
import { Landing_Header } from "@/components/landing/header";
import { Landing_How } from "@/components/landing/how";
import { Landing_Why } from "@/components/landing/why";
import { Footer } from "@/components/footer";
import { Topnav } from "@/components/top-nav";

export default async function Page() {
  return (
    <>
      <Topnav locale={"en"} className="bg-brand-100" />
      <div className="bg-brand-100">
        <main className="p-4 mx-auto max-w-7xl">
          <Landing_Header locale={"en"} className="mt-16" />
          <Landing_Why locale={"en"} className="mt-48" />
          <Landing_How locale={"en"} className="mt-48" />
          <Landing_Family locale={"en"} className="mt-48" />
          <Landing_Cta locale={"en"} className="my-48" />
        </main>
      </div>
      <Footer locale={"en"} />
    </>
  );
}
