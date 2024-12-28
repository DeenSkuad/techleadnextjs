import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n/config';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/services': '/services',
    '/services/[slug]': {
      en: '/services/[slug]',
      ms: '/services/[slug]'
    },
    '/products/[slug]': {
      en: '/products/[slug]',
      ms: '/products/[slug]'
    }
  }
});

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
    '/api/client/:path*'
  ]
}; 