import { getTranslations } from "next-intl/server";
import { navigationItems } from "@/config/navigation";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { AnimatedDescription } from "@/components/AnimatedDescription";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function ServicePage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations();

  const serviceInfo = navigationItems.services.find(
    (service) => service.slug === slug,
  );

  if (!serviceInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="px-4 py-20">
        <AnimatedTitle>
          <h1 className="text-center text-4xl font-bold text-slate-200 md:text-6xl">
            {t(`services.${serviceInfo.slug}.title`)}
          </h1>
        </AnimatedTitle>
        <AnimatedDescription>
          <p className="text-slate-400">
            {t(`services.${serviceInfo.slug}.description`)}
          </p>
        </AnimatedDescription>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return navigationItems.services.flatMap((service) => [
    { locale: "en", slug: service.slug },
    { locale: "ms", slug: service.slug },
  ]);
}
