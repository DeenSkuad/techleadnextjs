import { getTranslations } from "next-intl/server";

export const productSlugs = [
  "assetmanagement",
  "hrms",
  "ecommerce",
  "elearning",
  "inventoryandwarehouse",
] as const;

export async function getAllProducts(locale: string) {
  const t = await getTranslations({ locale, namespace: "products" });
  return productSlugs.map((slug) => ({
    slug,
    ...t.raw(slug),
  }));
}

export async function getProductContent(slug: string, locale: string) {
  const t = await getTranslations({ locale, namespace: "products" });
  if (!productSlugs.includes(slug as typeof productSlugs[number])) return null;

  return {
    hero: {
      title: t(`${slug}.title`),
      subtitle: t(`${slug}.tagline`),
      description: t(`${slug}.description`),
      imageAlt: t(`${slug}.heroImageAlt`, { defaultValue: "Default hero image alt text" }),
    },
    hero2: {
      title: t("hero2.title"),
      subtitle: t("hero2.subtitle"),
      description: t("hero2.description"),
    },
    tabs: {
      mission: {
        title: t("tabs.mission.title"),
        content: t("tabs.mission.content"),
      },
      vision: {
        title: t("tabs.vision.title"),
        content: t("tabs.vision.content"),
      },
      values: {
        title: t("tabs.values.title"),
        content: t("tabs.values.content"),
      },
    },
    team: {
      label: t("team.label"),
      title: t("team.title"),
      description: t("team.description"),
    },
  };
}