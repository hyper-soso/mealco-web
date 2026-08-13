import { PRIVACY_HISTORY } from "@/constants";
import { Locale } from "@/types";
import Link from "next/link";

interface Props {
  locale: Locale;
}

export function VersionNavigateButton({ locale }: Props) {
  const text = TEXT[locale];

  return (
    <details className="mt-16 bg-muted p-8">
      <summary className="cursor-pointer text-base font-semibold">
        {text.title}
      </summary>
      <ul className="mt-8 flex flex-col gap-4">
        {PRIVACY_HISTORY.map((version, index) => (
          <li key={version}>
            <Link
              href={`/${locale}/privacy/${version}`}
              className="block p-4 text-base underline underline-offset-4 focus-visible:outline-4 focus-visible:outline-offset-4"
            >
              <time dateTime={version}>{version}</time>
              {index === 0 ? ` (${text.latest})` : ""}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

const TEXT = {
  en: {
    title: "Previous versions",
    latest: "Latest",
  },
  ko: {
    title: "이전 버전 기록",
    latest: "최신",
  },
};
