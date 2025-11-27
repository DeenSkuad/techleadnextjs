import { PageTransition } from "@/components/PageTransition";
import { locales } from "@/config/locales";
import { notFound } from "next/navigation";
import { getProductContent, productSlugs } from "@/lib/products";
import { HeroScroll } from "@/components/HeroScroll";
import { TeamSection } from "@/components/sections/about/team";

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
  const content = await getProductContent(params.slug, params.locale);
  if (!content) notFound();

  return (
    <PageTransition>
      <main className="relative flex min-h-screen flex-col">
        <HeroScroll params={params} />
        {/* <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto px-4 md:px-20">
          {productSlugs.map((slug) => (
            <a
              key={slug}
              href={`/${params.locale}/products/${slug}`}
              className="p-6 rounded-lg border hover:bg-slate-800 transition-colors"
            >
              <h2 className="text-xl font-bold text-slate-200 mb-2">
                {content.hero.title}
              </h2>
              <p className="text-slate-400">{content.hero.description}</p>
            </a>
          ))}
        </div> */}
        <TeamSection content={content.team} />
      </main>
    </PageTransition>
  );
}