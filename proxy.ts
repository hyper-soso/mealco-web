import { NextRequest, NextResponse } from "next/server";
import { Locale } from "./types";

const locales = ["ko", "en"] as const;

function getLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";

  // 브라우저 선호 언어에 한국어가 있으면 ko
  if (
    acceptLanguage
      .split(",")
      .some((language) => language.trim().toLowerCase().startsWith("ko"))
  ) {
    return "ko";
  }

  // 그 외에는 영어
  return "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-mealco-locale", pathnameLocale);

    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const locale = getLocale(request);
  const url = request.nextUrl.clone();

  if (pathname === "/" && locale === "en") {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-mealco-locale", locale);
    url.pathname = "/en";
    return NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
  }

  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
