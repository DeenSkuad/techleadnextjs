// Main products listing page
import { PageTransition } from '@/components/PageTransition';
import ProductsHero from '@/components/sections/products/products-hero';
import ProductsList from '@/components/sections/products/products-list';
import { getAllProducts } from '@/lib/products';
import CTA from '@/components/sections/cta/default';
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function ProductsPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);
  
  const products = await getAllProducts(locale);

  return (
    <PageTransition>
      <main className="relative flex min-h-screen flex-col">
        <ProductsHero />
        <ProductsList products={products} />
        <CTA />
      </main>
    </PageTransition>
  );
} 