import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n/config";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

import Footer from "@/components/sections/footer/default";
import CTA from "@/components/sections/cta/default";
import Navbar from "@/components/sections/navbar/default";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
      <CTA />
      <Footer />
    
    </NextIntlClientProvider>
  );
}
