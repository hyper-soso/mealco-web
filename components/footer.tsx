import type { Locale } from "@/types";
import Link from "next/link";
import { Logo } from "./ui/logo";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  locale: Locale;
}

export function Footer({ className, locale }: Props) {
  const text = TEXT[locale];

  return (
    <footer className="bg-muted">
      <div
        className={cn(
          "p-4 py-16 mx-auto max-w-7xl grid grid-cols-4 gap-16",
          className,
        )}
      >
        <div className="col-span-4 md:col-span-2">
          <Logo className="text-4xl" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground text-balance break-keep">
            {text.tagline}
          </p>
        </div>

        <nav className="col-span-4 md:col-span-2 grid grid-cols-2 gap-4">
          <section>
            <h2 className="text-sm font-semibold">{text.support}</h2>
            <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href={`/${locale}/privacy`}>{text.privacy}</Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`}>{text.terms}</Link>
              </li>
              <li>
                <Link href={`/${locale}/delete-my-account`}>
                  {text.deleteAccount}
                </Link>
              </li>
              <li>
                <a href="mailto:cs@hypersoso.app">{text.contact}</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold">{text.download}</h2>
            <p className="mt-8 text-sm text-muted-foreground">
              {text.googlePlaySoon}
            </p>
          </section>
        </nav>

        <div className="col-span-4 pt-4 text-sm flex flex-col md:flex-row justify-between gap-4 text-muted-foreground border-t">
          <p>© {new Date().getFullYear()} hypersoso. All rights reserved.</p>
          <p className="md:text-right">Made with care by hypersoso.</p>
        </div>
      </div>
    </footer>
  );
}

const TEXT = {
  ko: {
    tagline: "Daily meals worth remembering",
    support: "지원",
    download: "다운로드",
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    deleteAccount: "계정 삭제",
    contact: "문의하기",
    googlePlaySoon: "Google Play 출시 준비 중",
  },
  en: {
    tagline: "One meal at a time.",
    support: "Support",
    download: "Download",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    deleteAccount: "Delete account",
    contact: "Contact",
    googlePlaySoon: "Coming soon to Google Play",
  },
} as const;
