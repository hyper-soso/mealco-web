import { croissantOne } from "@/lib/fonts";
import type { Locale } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Mockup } from "./mockup";
import { Float, Reveal } from "./motion";

interface Props {
  locale: Locale;
  className?: string;
}

export function Landing_Header({ locale, className }: Props) {
  const text = TEXT[locale];

  return (
    <section className={className}>
      <Reveal>
        <p className="text-sm font-semibold text-center text-brand-500">
          {text.tagline}
        </p>
        <h1
          className={`${croissantOne.className} mt-8 text-6xl text-center text-brand-400 md:text-8xl`}
        >
          mealco
        </h1>
        <p className="mt-8 text-2xl font-semibold text-center leading-snug text-balance break-keep md:text-4xl">
          {text.headline[0]}
          <br />
          {text.headline[1]}
        </p>
      </Reveal>
      <Reveal className="mt-8 flex justify-center gap-4" delay={0.12}>
        <span className="p-4 px-4 text-sm font-semibold rounded-lg text-primary-foreground bg-primary">
          {text.store.comingSoon}
        </span>
        <Link
          href="#how"
          className="p-4 text-sm font-semibold rounded-lg text-secondary-foreground bg-background"
        >
          {text.store.seeHow}
        </Link>
      </Reveal>
      <div className="relative mt-32 mx-auto grid w-full max-w-5xl place-items-center overflow-hidden rounded-lg bg-brand-200 p-8 lg:p-16">
        <Float
          className="absolute -top-16 right-8 hidden w-80 pointer-events-none lg:block"
          delay={0.1}
        >
          <Image src="/pasta.webp" alt="" width={1536} height={1024} />
        </Float>
        <Float
          className="absolute bottom-8 right-4 hidden w-72 pointer-events-none lg:block"
          delay={0.5}
        >
          <Image src="/cake.webp" alt="" width={1536} height={1024} />
        </Float>
        <Float
          className="absolute bottom-16 left-8 hidden w-64 pointer-events-none lg:block"
          delay={0.9}
        >
          <Image src="/egg.webp" alt="" width={1536} height={1024} />
        </Float>
        <Reveal className="relative z-10" delay={0.2}>
          <Mockup className="w-48 md:w-72">
            <Image
              src={text.imgUrl}
              alt={text.imageAlt}
              width={1080}
              height={2340}
              quality={100}
              priority
              className="h-full w-full object-cover"
            />
          </Mockup>
        </Reveal>
      </div>
    </section>
  );
}

const TEXT = {
  ko: {
    tagline: "Daily meals worth remembering",
    headline: ["오늘의 한 끼를", "기록하세요."],
    imgUrl: "/mock_image/ko_home.webp",
    imageAlt: "mealco 홈 화면의 오늘 식사 기록",
    store: { comingSoon: "출시 준비 중", seeHow: "사용법 보기" },
  },
  en: {
    tagline: "Daily meals worth remembering",
    headline: ["Remember", "what you ate today."],
    imgUrl: "/mock_image/en_home.webp",
    imageAlt: "mealco home screen showing today's meal records",
    store: {
      comingSoon: "Coming soon",
      seeHow: "See how it works",
    },
  },
} as const;
