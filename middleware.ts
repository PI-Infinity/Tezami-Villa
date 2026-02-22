import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ka", "ru"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    locales.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return NextResponse.next();
  }

  const cookieLang = request.cookies.get("language")?.value;
  const browserLang = request.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0];

  const locale =
    (cookieLang && locales.includes(cookieLang) && cookieLang) ||
    (browserLang && locales.includes(browserLang) && browserLang) ||
    defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)", "/"], // ✅ /-საც მოიცავს
};
