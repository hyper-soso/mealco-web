import { cn } from "@/lib/utils";
import type { Locale } from "@/types";
import Image from "next/image";
import { RevealSection } from "./motion";

interface Props {
  locale: Locale;
  className?: string;
}

export function Landing_Cta({ locale, className }: Props) {
  const text = TEXT[locale];

  return (
    <RevealSection
      id="download"
      className={cn(
        "relative p-8 lg:p-16 rounded-lg bg-brand-200 overflow-hidden",
        className,
      )}
    >
      <h2 className="whitespace-pre-wrap text-4xl font-semibold leading-snug text-balance break-keep">
        {text.title}
      </h2>
      <p className="mt-4 max-w-xl leading-relaxed text-balance break-keep">
        {text.description}
      </p>
      <div className="relative z-10 mt-8 p-4 px-8 inline-flex items-center gap-4 rounded-lg bg-primary text-primary-foreground">
        <Image
          src="/google-play-logo.webp"
          alt=""
          width={2000}
          height={2199}
          className="h-auto w-8"
        />
        <div>
          <p className="text-sm text-primary-foreground/80">Google Play</p>
          <p className="mt-1 text-sm font-medium">{text.comingSoon}</p>
        </div>
      </div>
      <Image
        src={"/taking-photo.webp"}
        alt={text.imageAlt}
        height={1254}
        width={1254}
        className="absolute hidden lg:block bottom-0 right-0 opacity-20 w-lg pointer-events-none"
      />
    </RevealSection>
  );
}

const TEXT = {
  ko: {
    title: "다음 한 끼부터\n시작하세요.",
    description: "mealco가 곧 찾아옵니다.",
    comingSoon: "출시 준비 중",
    imageAlt: "Google Play 출시를 준비 중인 mealco 앱 이미지",
  },
  en: {
    title: "Start with\nyour next meal.",
    description: "mealco is coming soon.",
    comingSoon: "Coming soon",
    imageAlt: "mealco app coming soon to Google Play",
  },
} as const;
