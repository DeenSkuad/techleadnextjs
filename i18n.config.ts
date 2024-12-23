import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'ms'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const pathnames = {
  '/': '/',
  '/services': '/services'
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always'; // Default

export type PathnameLocale = typeof pathnames; 