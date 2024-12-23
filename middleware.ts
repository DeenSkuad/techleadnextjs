import createMiddleware from 'next-intl/middleware';
import { locales } from './config/locales';

export default createMiddleware({
  locales: ['en', 'ms'],
  defaultLocale: 'en',
  localePrefix: 'always' // This ensures URLs always include the locale
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 