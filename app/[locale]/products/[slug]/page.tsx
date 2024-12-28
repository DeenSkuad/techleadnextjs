// src/app/[locale]/products/[slug]/page.tsx
import { unstable_setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/PageTransition';
import { notFound } from 'next/navigation';
import { getProductData } from '@/lib/products';

import ProductsHero from '@/components/sections/products/hero';

export async function generateMetadata({ params: { slug, locale } }: { params: { slug: string, locale: string } }) {
  const product = await getProductData(slug, locale);
  if (!product) return {};

  return {
    title: product.title,
    description: product.description
  };
}

export default async function ProductPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string }
}) {
  unstable_setRequestLocale(locale);
  const product = await getProductData(slug, locale);
  
  if (!product) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="relative flex min-h-screen flex-col">
        <ProductsHero product={product} />
      </main>
    </PageTransition>
  );
}