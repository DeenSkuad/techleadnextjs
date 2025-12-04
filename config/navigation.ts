// src/config/navigation.ts
import { servicesSlugs } from './services';
import { productSlugs } from '@/lib/products';
import { NavigationItem, NavigationItems } from '@/types/navigation';

export const navigationConfig: { mainNav: NavigationItem[] } = {
  mainNav: [
    {
      title: "products",
      href: "/products",
      isLink: true,
    },
    {
      title: "services",
      href: "/services",
      isLink: true,
    },
    {
      title: "portfolio",
      href: "/works",
      isLink: true,
    },
    {
      title: "training",
      href: "/services/training",
      isLink: true,
    },
    {
      title: "webhosting",
      href: "/services/webhosting",
      isLink: true,
    },
    {
      title: "aboutus",
      href: "/about-us",
      isLink: true,
    },
  ]
};

export function getNavigationItems(locale: string | undefined): NavigationItems {
  if (!locale) {
    locale = 'ms'; // Default fallback
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
      href: item.href,
    }))
  };
}
