import type { Locale } from "@/types";
import Image from "next/image";
import { Reveal, RevealListItem } from "./motion";

interface Props {
  locale: Locale;
  className?: string;
}

export function Landing_Why({ locale, className }: Props) {
  const text = TEXT[locale];

  return (
    <section id="why" className={className}>
      <Reveal>
        <hgroup>
          <p className="text-sm font-semibold text-brand-500">{text.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-snug text-balance break-keep">
            {text.heading[0]}
            <br />
            {text.heading[1]}
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground break-keep text-balance">
            {text.intro}
          </p>
        </hgroup>
      </Reveal>

      <ul className="mt-8 grid lg:grid-cols-2 gap-8">
        {text.cards.map((item, index) => (
          <RevealListItem
            key={item.title}
            delay={index * 0.1}
            className="rounded-lg bg-background p-8 even:lg:translate-y-16"
          >
            <hgroup>
              <h3 className="whitespace-pre-wrap text-2xl font-semibold leading-tight tracking-tight text-balance break-keep">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground text-balance break-keep">
                {item.description}
              </p>
            </hgroup>
            <Image
              src={item.image}
              alt={item.alt}
              height={1254}
              width={1254}
              quality={100}
              className="mt-16 mx-auto max-w-64 w-full"
            />
          </RevealListItem>
        ))}
      </ul>
    </section>
  );
}

const TEXT = {
  ko: {
    eyebrow: "mealco가 필요한 이유",
    heading: ["찍어둔 식사 사진을", "식사 기록으로 정리하세요."],
    intro: "사진 한 장으로 날짜와 끼니를 기록할 수 있습니다.",
    cards: [
      {
        title: "찍어두기만 한\n식사 사진",
        description: "갤러리에 남아 있어도 다시 찾아보기 어렵습니다.",
        alt: "식탁에 앉아 식사 사진을 찍는 사람 일러스트",
        image: "/taking-photo.webp",
      },
      {
        title: "식사 기록으로\n정리하세요",
        description: "사진을 날짜와 끼니별로 모아볼 수 있습니다.",
        alt: "침대에 누워 휴대폰으로 식사 기록을 보는 사람 일러스트",
        image: "/scrolling-phone.webp",
      },
    ],
  },
  en: {
    eyebrow: "Why mealco",
    heading: ["Turn your meal photos", "into a simple meal record."],
    intro: "One photo is all it takes to log the date and meal.",
    cards: [
      {
        title: "Meal photos you\njust leave in your gallery",
        description: "They’re easy to forget and hard to find later.",
        alt: "Illustration of someone taking a photo of their meal at the table",
        image: "/taking-photo.webp",
      },
      {
        title: "Organize them into\na meal record",
        description: "Keep your photos organized by date and meal.",
        alt: "Illustration of someone viewing meal records on their phone",
        image: "/scrolling-phone.webp",
      },
    ],
  },
} as const;
