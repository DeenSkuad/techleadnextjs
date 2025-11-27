import {getRequestConfig} from 'next-intl/server';
import {locales} from '@/lib/i18n/config';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`@/messages/${locale}.json`)).default,
  locale: locale || 'en',
  timeZone: 'Asia/Kuala_Lumpur',
  now: new Date(),
})); 