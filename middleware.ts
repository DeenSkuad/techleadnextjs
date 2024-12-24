import createMiddleware from 'next-intl/middleware';
// import { locales } from '@/config/i18n';

export default createMiddleware({
  locales: ['en', 'ms'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(ms|en)/:path*']
}; 