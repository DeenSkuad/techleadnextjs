import { getTranslations } from 'next-intl/server';

export const servicesSlugs = [
  'webdevelopment',
  'cybersecurity',
  'uiuxdesign',
  'training',
  'consulting',
  'androidapp',
  'iosapp',
  'cloud',
  'devops',
  'ai'
] as const;

export async function getAllServices(locale: string) {
  const t = await getTranslations({ locale, namespace: 'services' });
  
  return servicesSlugs.map(slug => ({
    slug,
    title: t(`${slug}.title`),
    description: t(`${slug}.description`),
    href: `/services/${slug}`,
    features: t.raw(`${slug}.features`) || [],
    process: t.raw(`${slug}.process`) || []
  }));
}

export async function getServiceData(slug: string, locale: string) {
  const t = await getTranslations({ locale, namespace: 'services' });
  
  if (!servicesSlugs.includes(slug as typeof servicesSlugs[number])) {
    return null;
  }

  const features = t.raw(`${slug}.features`) || [];
  const process = t.raw(`${slug}.process`) || [];

  // Transform features array into object array if it's a simple string array
  const formattedFeatures = Array.isArray(features) 
    ? features.map(feature => 
        typeof feature === 'string' 
          ? { title: feature, description: '' }
          : feature
      )
    : [];

  return {
    slug,
    title: t(`${slug}.title`),
    description: t(`${slug}.description`),
    hero: t('hero2.title'),
    features: formattedFeatures,
    process: Array.isArray(process) ? process : []
  };
} 