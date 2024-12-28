import { getTranslations } from 'next-intl/server';

export const productSlugs = [
  'assetmanagement',
  'hrms',
  'ecommerce',
  'elearning',
  'inventoryandwarehouse'
] as const;

export async function getAllProducts(locale: string) {
  const t = await getTranslations({ locale, namespace: 'products' });
  return productSlugs.map(slug => ({
    slug,
    ...t.raw(slug)
  }));
}

export async function getProductData(slug: string, locale: string) {
  const t = await getTranslations({ locale, namespace: 'products' });
  if (!productSlugs.includes(slug as typeof productSlugs[number])) return null;
  return {
    slug,
    ...t.raw(slug)
  };
} 