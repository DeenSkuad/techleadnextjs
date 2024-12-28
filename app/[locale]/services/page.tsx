import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { navigationItems } from "@/config/navigation";
import { AnimatedTitle } from "@/components/AnimatedTitle";


export default async function ServicesPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations();
  
  return (
    <div className="w-full">

      <div className="py-20 px-4 w-full border">
        <AnimatedTitle>
          <h1 className="text-4xl md:text-6xl font-bold text-center text-slate-200">
            {t('services.title')}
          </h1>
        </AnimatedTitle>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto px-4 md:px-20">
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
    </div>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ms' }];
} 