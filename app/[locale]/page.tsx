// src/app/[locale]/page.tsx

import { locales } from "@/lib/i18n/config";
import { getTranslations } from "next-intl/server";
import Clients from "@/components/sections/clients/default";
import { PageTransition } from "@/components/PageTransition";
import Hero from "@/components/sections/hero/default";
import Works from "@/components/sections/works/default";
import { ProductsSlider } from "@/components/sections/home/products-slider";
import { ServicesSection } from "@/components/sections/home/services-section";
import { TrainingFormats } from "@/components/sections/home/training-formats";
import { ServicePackages } from "@/components/sections/home/service-packages";
import { PortfolioGrid } from "@/components/sections/home/portfolio-grid";
import { TestimonialsMarquee } from "@/components/sections/home/testimonials-marquee";
import { FAQSection } from "@/components/sections/home/faq-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import CTADefault from "@/components/sections/cta/default";

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocalePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <PageTransition>
      <main className="relative flex min-h-screen flex-col">
        {/* 1. Hero - KEEP existing */}
        <Hero />

        {/* 2. Products Slider - NEW with Swiper */}
        {/* <ProductsSlider /> */}

        {/* 3. Clients - KEEP existing */}
        <Clients />

        {/* 4. Stats/KPI - NEW */}
        <StatsSection />

        {/* 5. Portfolio - NEW */}
        <PortfolioGrid />

        {/* 5. Services - NEW */}
        <ServicesSection />

        {/* 6. Service Packages - NEW */}
        <ServicePackages />

         {/* 5. Training Formats - NEW */}
        <TrainingFormats />

        

        {/* 8. Testimonials - NEW */}
        <TestimonialsMarquee />

        {/* 9. FAQ - NEW */}
        <FAQSection />

        {/* 10. Works - KEEP existing */}
        {/* <Works /> */}

        {/* 11. CTA - KEEP existing */}
        {/* <CTADefault /> */}
      </main>
    </PageTransition>
  );
}
