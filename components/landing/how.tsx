import type { Locale } from "@/types";
import Image from "next/image";
import { HorizontalScroll } from "./horizontal-scroll";
import { Mockup } from "./mockup";
import { Reveal } from "./motion";

interface Props {
  locale: Locale;
  className?: string;
}

export function Landing_How({ locale, className }: Props) {
  const text = TEXT[locale];

  return (
    <section id="how" className={className}>
      <Reveal>
        <hgroup>
          <p className="text-sm font-semibold text-brand-500">{text.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-snug text-balance break-keep">
            {text.heading}
          </h2>
        </hgroup>
      </Reveal>

      <HorizontalScroll count={text.steps.length} label={text.stepsLabel}>
        {text.steps.map((item, index) => (
          <li key={item.title} className="pr-4 last:pr-0">
            <article className="grid h-full items-center gap-4 overflow-hidden rounded-lg bg-background p-4 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-16">
              <hgroup className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="text-4xl font-semibold text-brand-400">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-balance break-keep lg:mt-8">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm max-w-md leading-relaxed text-muted-foreground text-balance break-keep lg:text-lg">
                  {item.description}
                </p>
              </hgroup>

              <div
                className={`flex min-h-0 items-end justify-center overflow-hidden rounded-lg bg-brand-200 p-4 lg:h-full lg:p-8 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Mockup className="my-8 sm:my-auto w-32 sm:w-48 lg:w-56">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1080}
                    height={2340}
                    quality={100}
                    className="h-full w-full object-cover"
                  />
                </Mockup>
              </div>
            </article>
          </li>
        ))}
      </HorizontalScroll>
    </section>
  );
}

const TEXT = {
  ko: {
    eyebrow: "사용 방법",
    heading: "사진 한 장으로 식사를 기록하세요.",
    stepsLabel: "mealco 식사 기록 사용 방법",
    steps: [
      {
        title: "식사를 촬영하세요",
        description: "식사 전에 사진 한 장을 찍어주세요.",
        image: "/mock_image/ko_camera.webp",
        alt: "mealco 카메라 화면에서 식사 사진을 촬영하는 모습",
      },
      {
        title: "끼니별로 정리됩니다",
        description: "아침, 점심, 저녁으로 자동 분류됩니다.",
        image: "/mock_image/ko_calendar_detail.webp",
        alt: "mealco 날짜 상세 화면에 끼니별로 정리된 식사 기록",
      },
      {
        title: "달력에서 확인하세요",
        description: "기록한 식사를 날짜별로 확인할 수 있습니다.",
        image: "/mock_image/ko_calendar.webp",
        alt: "mealco 달력 화면의 날짜별 식사 기록",
      },
    ],
  },
  en: {
    eyebrow: "How it works",
    heading: "Take a photo before you eat, and it’s saved as a meal record.",
    stepsLabel: "How to track meals with mealco",
    steps: [
      {
        title: "Take a photo of your meal",
        description: "Just snap a photo before you eat.",
        image: "/mock_image/en_camera.webp",
        alt: "Taking a meal photo on the mealco camera screen",
      },
      {
        title: "It’s sorted automatically",
        description: "Meals are organized into breakfast, lunch, and dinner.",
        image: "/mock_image/en_calendar_detail.webp",
        alt: "Meal records organized by meal type on the mealco daily view",
      },
      {
        title: "View your meals on the calendar",
        description: "See your recorded meals by date.",
        image: "/mock_image/en_calendar.webp",
        alt: "Meal records displayed by date on the mealco calendar",
      },
    ],
  },
} as const;
