import type { Locale } from '@/types';
import type { Metadata } from 'next';

const SITE_NAME = 'mealco';
const SITE_URL = new URL('https://mealco.app');
const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
} as const;

const LOCALE_PATHS = {
  ko: '/ko',
  en: '/en',
} as const satisfies Record<Locale, string>;

const METADATA = {
  ko: {
    title: 'mealco | 매일의 식사를 기록하세요',
    description:
      '찍어둔 식사 사진을 갤러리에만 두지 마세요. mealco는 오늘 먹은 식사를 간단하게 기록하고, 날짜와 끼니별로 모아볼 수 있는 식사 기록 앱입니다.',
    keywords: [
      'mealco',
      '밀코',
      '식사 기록',
      '식단 기록 앱',
      '음식 다이어리',
      '푸드로그',
      '가족 식사 공유',
    ],
    openGraphLocale: 'ko_KR',
    alternateOpenGraphLocale: 'en_US',
    imageAlt: '사진 한 장으로 매일의 식사를 기록하는 mealco 앱',
  },
  en: {
    title: 'mealco | Keep track of your daily meals',
    description:
      "Don't leave your meal photos buried in your gallery. mealco makes it easy to record what you eat and browse your meals by date and meal type.",
    keywords: [
      'mealco',
      'meal tracker',
      'meal tracking app',
      'food diary',
      'food log',
      'daily meals',
      'family meal sharing',
    ],
    openGraphLocale: 'en_US',
    alternateOpenGraphLocale: 'ko_KR',
    imageAlt: 'mealco app for recording daily meals with a photo',
  },
} as const satisfies Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: readonly string[];
    openGraphLocale: string;
    alternateOpenGraphLocale: string;
    imageAlt: string;
  }
>;

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: `/${string}`;
}

export function createMetadata(
  locale: Locale,
  options: MetadataOptions = {},
): Metadata {
  const text = METADATA[locale];
  const title = options.title ?? text.title;
  const description = options.description ?? text.description;
  const path = options.path ?? '';
  const canonicalPath = `${LOCALE_PATHS[locale]}${path}`;
  const image = { ...OG_IMAGE, alt: text.imageAlt };

  return {
    metadataBase: SITE_URL,
    title,
    description,
    applicationName: SITE_NAME,
    keywords: [...text.keywords],
    authors: [{ name: 'hypersoso', url: SITE_URL }],
    creator: 'hypersoso',
    publisher: 'hypersoso',
    category: 'lifestyle',
    referrer: 'origin-when-cross-origin',
    alternates: {
      canonical: canonicalPath,
      languages: {
        'ko-KR': `${LOCALE_PATHS.ko}${path}`,
        'en-US': `${LOCALE_PATHS.en}${path}`,
        'x-default': path || '/',
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      url: canonicalPath,
      siteName: SITE_NAME,
      title,
      description,
      locale: text.openGraphLocale,
      alternateLocale: [text.alternateOpenGraphLocale],
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}
