"use client";

import { useTranslations } from "next-intl";
import { navigationItems } from "@/config/navigation";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { AnimatedDescription } from "@/components/AnimatedDescription";
import Navbar from "@/components/sections/navbar/default";
import CTA from "@/components/sections/cta/default";
import Footer from "@/components/sections/footer/default";
import { notFound } from "next/navigation";

export default function ServicePage({
  params: { slug }
}: {
  params: { locale: string; slug: string }
}) {
  const t = useTranslations();
  
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