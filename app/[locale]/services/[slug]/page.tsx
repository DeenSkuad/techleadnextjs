// app/[locale]/services/[slug]/page.tsx
import { PageTransition } from '@/components/PageTransition';
import { locales } from "@/lib/i18n/config";
import { TeamSection } from "@/components/sections/about/team";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { getServiceData } from '@/config/services';
import { notFound } from 'next/navigation';
import { servicesSlugs } from '@/config/services';
import { ServiceHero } from '@/components/sections/services/hero'
import { Tabs } from '@/components/ui/tabs';

export async function generateStaticParams() {
  return servicesSlugs.map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: { slug: string, locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const serviceData = await getServiceData(params.slug, params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'services' });

  if (!serviceData) {
    notFound();
  }

  const content = {
    hero: {
      title: serviceData.title,
      subtitle: t('hero.subtitle'),
      description: serviceData.description
    },
    hero2: {
      title: t('hero2.title'),
      subtitle: t('hero2.subtitle'),
      description: t('hero2.description')
    },
    tabs: {
      mission: {
        title: t('tabs.mission.title'),
        content: t('tabs.mission.content')
      },
      vision: {
        title: t('tabs.vision.title'),
        content: t('tabs.vision.content')
      },
      values: {
        title: t('tabs.values.title'),
        content: t('tabs.values.content')
      }
    },
    features: serviceData.features || [],
    process: serviceData.process || []
  };

  return (
    <PageTransition>
      <main className="relative flex min-h-screen flex-col">
        <ServiceHero content={content} />
      </main>
    </PageTransition>
  );
}