import { getTranslations } from 'next-intl/server';
import { navigationItems } from "@/config/navigation";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import Navbar from "@/components/sections/navbar/default";
import CTA from "@/components/sections/cta/default";
import Footer from "@/components/sections/footer/default";

export default async function ServicesPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-20 px-4">
        <AnimatedTitle>
          <h1 className="text-4xl md:text-6xl font-bold text-center text-slate-200">
            {t('services.title')}
          </h1>
        </AnimatedTitle>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
          {navigationItems.services.map((service) => (
            <a
              key={service.slug}
              href={`/${locale}${service.href}`}
              className="p-6 rounded-lg border hover:bg-slate-800 transition-colors"
            >
              <h2 className="text-xl font-bold text-slate-200 mb-2">
                {t(`services.${service.slug}.title`)}
              </h2>
              <p className="text-slate-400">
                {t(`services.${service.slug}.description`)}
              </p>
            </a>
          ))}
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ms' }];
} 