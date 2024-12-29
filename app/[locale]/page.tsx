// "use client";
// src/app/[locale]/page.tsx

import { locales } from "@/lib/i18n/config";
import { getTranslations } from 'next-intl/server';
import Products from "@/components/sections/products/default";
import { PageTransition } from "@/components/PageTransition";
import Hero from "@/components/sections/hero/default";
import Services from "@/components/sections/services/default";
import Works from "@/components/sections/works/default";

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale
  }));
}

export default async function LocalePage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <PageTransition>
      <main className="relative flex min-h-screen flex-col">
        <Hero />
        <Products />
        <Services />
        <Works />
      </main>
    </PageTransition>
  );
}
