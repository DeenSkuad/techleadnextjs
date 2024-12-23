import {getRequestConfig} from 'next-intl/server';
import {locales} from '@/lib/i18n/config';

export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`./lib/i18n/dictionaries/${locale}.json`)).default
  };
}); 