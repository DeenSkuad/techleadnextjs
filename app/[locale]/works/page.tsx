import { PageTransition } from '@/components/PageTransition';
import { locales } from "@/lib/i18n/config";
import { AboutHero } from "@/components/sections/about/hero";
import Works  from "@/components/sections/works/default";
import { TeamSection } from "@/components/sections/about/team";
import { getTranslations } from 'next-intl/server';
import { createTranslator } from 'next-intl';


export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale
  }));
}

export default async function WorksPage({ params: { locale } }: { params: { locale: string } }) {
  const messages = await import(`@/messages/${locale}.json`);
  const t = createTranslator({ locale, messages });

  const aboutProps = {
    hero: {
      title: t('about.hero.title'),
      subtitle: t('about.hero.subtitle'),
      description: t('about.hero.description')
    },
    hero2: {
      title: t('about.hero2.title'),
      subtitle: t('about.hero2.subtitle'),
      description: t('about.hero2.description')
    },
    tabs: {
      mission: {
        title: t('about.tabs.mission.title'),
        content: t('about.tabs.mission.content')
      },
      vision: {
        title: t('about.tabs.vision.title'),
        content: t('about.tabs.vision.content')
      },
      values: {
        title: t('about.tabs.values.title'),
        content: t('about.tabs.values.content')
      }
    },
    team: {
      label: t('about.team.label'),
      title: t('about.team.title'),
      description: t('about.team.description')
    }
  };

  return (
    <PageTransition>
      <main className="relative flex min-h-screen flex-col">
        <Works />
      </main>
    </PageTransition>
  );
}