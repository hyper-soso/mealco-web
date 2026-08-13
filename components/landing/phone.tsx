import Image from "next/image";
import { Mockup } from "./mockup";
import type { Locale } from "@/types";

const SHOT = {
  home: "home",
  calendar: "calendar",
  day: "calendar_detail",
  group: "circle_detail",
  capture: "camera",
} as const;

/** 원본 스크린샷 크기 */
const SIZE = { width: 1080, height: 2340 } as const;

function Screen({
  shot,
  alt,
  locale,
}: {
  shot: keyof typeof SHOT;
  alt: string;
  locale: Locale;
}) {
  return (
    <Mockup>
      <Image
        src={`/mock_image/${locale}_${SHOT[shot]}.webp`}
        alt={alt}
        width={SIZE.width}
        height={SIZE.height}
        quality={100}
        className="h-full w-full object-cover"
      />
    </Mockup>
  );
}

/** 날짜별로 사진이 쌓이는 홈 화면 */
export function ScreenHome({ locale }: { locale: Locale }) {
  return <Screen shot="home" alt={TEXT[locale].screenAlt.home} locale={locale} />;
}

/** 기록한 날에 끼니별 점이 표시되는 캘린더 */
export function ScreenCalendar({ locale }: { locale: Locale }) {
  return (
    <Screen shot="calendar" alt={TEXT[locale].screenAlt.calendar} locale={locale} />
  );
}

/** 날짜를 누르면 그날 먹은 것들이 올라온다 */
export function ScreenDay({ locale }: { locale: Locale }) {
  return <Screen shot="day" alt={TEXT[locale].screenAlt.day} locale={locale} />;
}

/** 함께 사용하는 사람들의 기록을 보여주는 그룹 화면 */
export function ScreenGroup({ locale }: { locale: Locale }) {
  return <Screen shot="group" alt={TEXT[locale].screenAlt.group} locale={locale} />;
}

/** 카메라를 여는 기록 추가 화면 */
export function ScreenCapture({ locale }: { locale: Locale }) {
  return <Screen shot="capture" alt={TEXT[locale].screenAlt.capture} locale={locale} />;
}

const TEXT = {
  ko: {
    screenAlt: {
      home: 'mealco 홈 화면의 날짜별 식사 기록',
      calendar: 'mealco 캘린더 화면의 날짜별 끼니 기록',
      day: 'mealco 날짜 상세 화면의 식사 기록',
      group: 'mealco 그룹 화면의 가족 식사 기록',
      capture: 'mealco 촬영 화면에서 식사 사진 촬영',
    },
    tabs: { home: '홈', calendar: '캘린더', group: '그룹', settings: '설정' },
    meals: { breakfast: '아침', lunch: '점심', dinner: '저녁', snack: '간식' },
    weekdays: ['일', '월', '화', '수', '목', '금', '토'],
    home: {
      greeting: ['안녕하세요,', '지민님'],
      prompt: '오늘 먹은 식사를 기록해보세요.',
      today: '오늘',
      dates: ['8. 10.', '8. 9.', '8. 8.', '8. 7.'],
    },
    calendar: {
      title: '식사 캘린더',
      today: '오늘',
      streak: '11일 연속 기록 중',
      streakBody: '오늘 식사도 기록해보세요.',
      month: '2026년 8월',
    },
    day: { date: '8월 11일 화요일', count: '기록한 식사 3개' },
    group: {
      name: '우리 가족',
      month: '2026년 8월',
      todayLabel: '오늘',
      nameColumn: '이름',
      members: ['지', '아', '엄'],
    },
    capture: {
      cancel: '취소',
      title: '오늘의 한 끼',
      next: '다음',
      hint: '찍으면 날짜와 끼니가 자동으로 입력됩니다.',
    },
  },
  en: {
    screenAlt: {
      home: 'mealco home screen, meal records by date',
      calendar: 'mealco calendar screen, meal records by date',
      day: 'mealco day view, meals recorded on the selected date',
      group: 'mealco group screen, family meal records',
      capture: 'mealco camera screen, taking a meal photo',
    },
    tabs: { home: 'Home', calendar: 'Calendar', group: 'Group', settings: 'Settings' },
    meals: { breakfast: 'Breakfast', lunch: 'Lunch', dinner: 'Dinner', snack: 'Snack' },
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    home: {
      greeting: ['Hello,', 'Jimin'],
      prompt: 'Record what you ate today.',
      today: 'Today',
      dates: ['Aug 10', 'Aug 9', 'Aug 8', 'Aug 7'],
    },
    calendar: {
      title: 'Meal Calendar',
      today: 'Today',
      streak: '11 days in a row',
      streakBody: 'Record today’s meals too.',
      month: 'August 2026',
    },
    day: { date: 'Tuesday, August 11', count: '3 meals recorded' },
    group: {
      name: 'Our Family',
      month: 'August 2026',
      todayLabel: 'Today',
      nameColumn: 'Name',
      members: ['J', 'A', 'M'],
    },
    capture: {
      cancel: 'Cancel',
      title: 'Today’s Meal',
      next: 'Next',
      hint: 'The date and meal type are filled in automatically.',
    },
  },
} as const;
