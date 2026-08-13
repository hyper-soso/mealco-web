import { Footer } from "@/components/footer";
import Terms from "./en_terms.md";
import { Topnav } from "@/components/top-nav";
import { MD_CSS } from "@/constants";

export default function Page() {
  return (
    <>
      <Topnav
        locale="en"
        className="border-b"
        navClassName="md:px-8 max-w-4xl"
      />
      <main className={MD_CSS}>
        <Terms />
      </main>
      <Footer locale="en" />
    </>
  );
}
