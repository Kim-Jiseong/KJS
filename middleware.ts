import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "ko"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  return "ko";
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/static/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/opengraph-image") ||
    pathname.startsWith("/favicon.ico") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return;
  }
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), 정적 파일은 제외
    "/((?!_next|static|favicon.ico|robots.txt|sitemap.xml|images).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
