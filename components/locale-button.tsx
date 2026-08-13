"use client";

import type { Locale } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  locale: Locale;
}

export function LocaleButton({ locale }: Props) {
  const pathname = usePathname();
  const text = TEXT[locale];
  const nextLocale: Locale = locale === "ko" ? "en" : "ko";

  const nextPathname = /^\/(ko|en)(?=\/|$)/.test(pathname)
    ? pathname.replace(/^\/(ko|en)(?=\/|$)/, `/${nextLocale}`)
    : `/${nextLocale}${pathname === "/" ? "" : pathname}`;

  return (
    <Link
      href={nextPathname}
      aria-label={text.switchLanguageAria}
      className="rounded bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
    >
      {text.language}
    </Link>
  );
}

const TEXT = {
  ko: {
    switchLanguageAria: "영어로 변경",
    language: "English",
  },
  en: {
    switchLanguageAria: "한국어로 변경",
    language: "한국어",
  },
} as const;
