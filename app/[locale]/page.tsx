"use client";
// src/app/[locale]/page.tsx
import Navbar from "@/components/sections/navbar/default";
import Hero from "@/components/sections/hero/default";
import Logos from "@/components/sections/logos/default";
import Items from "@/components/sections/items/default";
import FAQ from "@/components/sections/faq/default";
import CTA from "@/components/sections/cta/default";
import Footer from "@/components/sections/footer/default";
import Services from "@/components/sections/services/default";
import Works from "@/components/sections/works/default";
import Products from "@/components/sections/products/default";
import { useTranslations } from 'next-intl';

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = useTranslations();

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Logos />
      <Products />
      <Items />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
} 