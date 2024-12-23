export const locales = ['en', 'ms'] as const;
export const defaultLocale = 'en' as const;

export const i18nConfig = {
  defaultLocale,
  locales,
  localePrefix: 'always'
} as const;

export type Locale = (typeof i18nConfig.locales)[number];