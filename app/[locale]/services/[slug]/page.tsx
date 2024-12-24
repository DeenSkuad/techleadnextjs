import { getTranslations } from 'next-intl/server';
import { navigationItems } from "@/config/navigation";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { AnimatedDescription } from "@/components/AnimatedDescription";
import Navbar from "@/components/sections/navbar/default";
import CTA from "@/components/sections/cta/default";
import Footer from "@/components/sections/footer/default";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from 'next-intl/server';

export default async function ServicePage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string }
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations();
  
  const serviceInfo = navigationItems.services.find(
    (service) => service.slug === slug
  );

  if (!serviceInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-20 px-4">
        <div className="mb-8">
          <a href={`/${locale}/services`} className="text-muted-foreground hover:text-foreground">
            ← {t('navigation.services')}
          </a>
        </div>
        <AnimatedTitle>
          <h1 className="text-4xl md:text-6xl font-bold text-center text-slate-200">
            {t(`services.${serviceInfo.slug}.title`)}
          </h1>
        </AnimatedTitle>
        <AnimatedDescription>
          <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
            {t(`services.${serviceInfo.slug}.description`)}
          </p>
        </AnimatedDescription>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return navigationItems.services.flatMap(service => [
    { locale: 'en', slug: service.slug },
    { locale: 'ms', slug: service.slug }
  ]);
} 