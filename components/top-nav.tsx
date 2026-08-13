import { cn } from "@/lib/utils";
import type { Locale } from "@/types";
import Link from "next/link";
import { Logo } from "./ui/logo";
import { LocaleButton } from "./locale-button";

interface Props {
  className?: string;
  navClassName?: string;
  locale?: Locale;
}

export function Topnav({ className, navClassName, locale = "ko" }: Props) {
  return (
    <header className={cn("relative z-10", className)}>
      <nav
        className={cn(
          "p-4 mx-auto max-w-7xl flex items-center justify-between",
          navClassName,
        )}
      >
        <Link href={`/${locale}`}>
          <Logo className="text-4xl" />
        </Link>

        <LocaleButton locale={locale} />
      </nav>
    </header>
  );
}
