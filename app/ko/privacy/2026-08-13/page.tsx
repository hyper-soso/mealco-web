import { Footer } from "@/components/footer";
import Privacy from "./ko_privacy.md";
import { Topnav } from "@/components/top-nav";
import { VersionNavigateButton } from "@/components/version-navigate-button";

export default function Page() {
  return (
    <>
      <Topnav
        locale="ko"
        className="border-b"
        navClassName="md:px-8 max-w-4xl"
      />
      <main
        className={`mt-4 mb-16 p-4 md:p-8 mx-auto max-w-4xl space-y-8 [*]:break-keep
      [&>h1]:text-4xl [&>h1]:font-semibold
      [&>h2]:text-2xl [&>h2]:font-semibold
      [&>h3]:text-lg [&>h3]:font-semibold
      [&>hr]:my-16
      [&>ul]:mt-8 [&>ul]:ml-8 [&>ul]:space-y-4 [&>ul]:list-disc [&>ul]:list-inside
      [*>ul>li]:text-xs
        `}
      >
        <Privacy />
        <VersionNavigateButton locale="ko" />
      </main>
      <Footer locale="ko" />
    </>
  );
}
