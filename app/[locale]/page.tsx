// "use client";
// src/app/[locale]/page.tsx

import Hero from "@/components/sections/hero/default";
import Logos from "@/components/sections/logos/default";
import Items from "@/components/sections/items/default";
// import FAQ from "@/components/sections/faq/default";

import Services from "@/components/sections/services/default";
import Works from "@/components/sections/works/default";
import Products from "@/components/sections/products/default";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Services />
      <Works />
      <Logos />
      <Products />
      <Items />
    </main>
  );
}
