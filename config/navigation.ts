// src/config/navigation.ts
import { servicesSlugs } from './services';
import { productSlugs } from '@/lib/products';
import { NavigationItem, NavigationItems } from '@/types/navigation';

export const navigationConfig: { mainNav: NavigationItem[] } = {
  mainNav: [
    {
      title: "aboutus",
      href: "/about-us",
      isLink: true,
    },
    {
      title: "casestudies",
      href: "/case-studies",
      isLink: true,
    },
    {
      title: "ourwork",
      sectionId: "ourwork",
      isScroll: true,
    },
    {
      title: "training",
      href: "/training",
      isLink: true,
    },
  ]
};

export function getNavigationItems(locale: string | undefined): NavigationItems {
  if (!locale) {
    locale = 'en'; // Default fallback
  }
  
  return {
    services: servicesSlugs.map((slug: string) => ({
      slug,
      href: `/services/${slug}`
    })),
    products: productSlugs.map((slug: string) => ({
      slug,
      href: `/products/${slug}`
    })),
    mainNav: navigationConfig.mainNav.map(item => ({
      ...item,
      href: item.href || '/',
    }))
  };
}
