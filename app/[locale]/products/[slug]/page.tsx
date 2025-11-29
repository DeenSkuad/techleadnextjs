import { PageTransition } from "@/components/PageTransition";
import { locales } from "@/config/locales";
import { notFound } from "next/navigation";
import { getProductContent, productSlugs } from "@/lib/products";
import { HeroScroll } from "@/components/HeroScroll";
import { TeamSection } from "@/components/sections/about/team";
import { AssetManagementPage } from "@/components/sections/products/asset-management-page";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    productSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  // Check if it's the asset management page - render special layout
  if (params.slug === "assetmanagement") {
    return (
      <PageTransition>
        <main className="relative flex min-h-screen flex-col">
          <AssetManagementPage />
        </main>
      </PageTransition>
    );
  }

  // Default product page layout
  const content = await getProductContent(params.slug, params.locale);
  if (!content) notFound();

  return (
    <PageTransition>
      <main className="relative flex min-h-screen flex-col">
        <HeroScroll params={params} />
        <TeamSection content={content.team} />
      </main>
    </PageTransition>
  );
}