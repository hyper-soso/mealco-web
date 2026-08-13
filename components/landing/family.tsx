import type { Locale } from "@/types";
import Image from "next/image";
import { ScreenGroup } from "./phone";
import { Reveal, RevealArticle } from "./motion";

interface Props {
  locale: Locale;
  className?: string;
}

export function Landing_Family({ locale, className }: Props) {
  const text = TEXT[locale];

  return (
    <section id="together" className={className}>
      <Reveal>
        <hgroup>
          <p className="text-sm font-semibold text-brand-500">{text.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-snug text-balance break-keep">
            {text.heading}
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground break-keep text-balance">
            {text.intro}
          </p>
        </hgroup>
      </Reveal>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        {text.cards.map((card, index) => (
          <RevealArticle
            key={card.title}
            delay={index * 0.1}
            className="rounded-lg bg-background p-8"
          >
            <h3 className="whitespace-pre-wrap text-2xl font-semibold leading-snug text-balance break-keep">
              {card.title}
            </h3>
            <div className="mt-16 flex justify-center">
              <Image
                src={card.image}
                alt={card.alt}
                width={1254}
                height={1254}
                className="mt-16 mx-auto max-w-64 w-full"
              />
            </div>
          </RevealArticle>
        ))}

        <RevealArticle className="p-8 lg:p-16 grid items-center gap-16 overflow-hidden rounded-lg bg-primary text-primary-foreground lg:col-span-2 lg:grid-cols-2">
          <div>
            <h3 className="mt-4 text-4xl font-semibold leading-snug text-balance break-keep">
              {text.panel.title}
            </h3>
            <p className="mt-8 text-lg leading-relaxed text-primary-foreground/80 text-balance break-keep">
              {text.panel.description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ScreenGroup locale={locale} />
          </div>
        </RevealArticle>
      </div>
    </section>
  );
}

const TEXT = {
  ko: {
    eyebrow: "함께 쓰기",
    heading: "멀리 있어도 가족의 식사를 함께 보세요.",
    intro: "식사 기록을 가족과 간편하게 공유할 수 있습니다.",
    cards: [
      {
        title: "매번 묻지 않아도\n알 수 있어요",
        image: "/working.webp",
        alt: "가족에게 식사 여부를 물어볼지 고민하는 사람 일러스트",
      },
      {
        title: "오늘 먹은 식사를\n함께 볼 수 있어요",
        image: "/circle-meal.webp",
        alt: "가족의 식사를 휴대폰에서 확인하는 사람 일러스트",
      },
    ],
    panel: {
      title: "한 화면에 모아보세요",
      description: "가족의 오늘 식사 기록을 한곳에서 확인할 수 있습니다.",
    },
  },
  en: {
    eyebrow: "Share with family",
    heading: "Even when you're apart stay connected through meals.",
    intro: "Easily share meal records with your family.",
    cards: [
      {
        title: "No need to ask\nevery time",
        image: "/working.webp",
        alt: "Illustration of someone wondering whether to ask a family member if they ate",
      },
      {
        title: "See what they ate\ntoday",
        image: "/circle-meal.webp",
        alt: "Illustration of someone checking a family member's meals on their phone",
      },
    ],
    panel: {
      title: "See it all in one place",
      description: "Check your family's meals for the day on a single screen.",
    },
  },
} as const;
