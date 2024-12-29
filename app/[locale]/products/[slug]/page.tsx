import { PageTransition } from '@/components/PageTransition';
import { notFound } from 'next/navigation';
import { locales } from "@/lib/i18n/config";
import { getTranslations } from 'next-intl/server';
import { AboutHero } from "@/components/sections/about/hero";
import { TeamSection } from "@/components/sections/about/team";
import { productSlugs } from '@/lib/products';

export async function generateStaticParams() {
  return locales.flatMap((locale) => 
    productSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export default async function ProductPage({ params }: { params: { slug: string, locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'products' });

  if (!productSlugs.includes(params.slug as typeof productSlugs[number])) {
    notFound();
  }

  const content = {
    hero: {
      title: t(`${params.slug}.title`),
      subtitle: t(`${params.slug}.tagline`),
      description: t(`${params.slug}.description`)
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
    }
  };

  const teamContent = {
    label: t('team.label'),
    title: t('team.title'),
    description: t('team.description')
  };

  return (
    <PageTransition>
      <main className="relative flex min-h-screen flex-col">
        <AboutHero content={content} />
        <TeamSection content={teamContent} />
      </main>
    </PageTransition>
  );
}