import { getRequestConfig } from 'next-intl/server';

export const locales = ['ms', 'en'] as const;
export const defaultLocale = 'ms' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    return {};
  }

  return {
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});