export interface NavigationItem {
  title: string;
  href?: string;
  isLink?: boolean;
  isScroll?: boolean;
  sectionId?: string;
}

export interface ServiceNavItem {
  slug: string;
  href: string;
}

export interface ProductNavItem {
  slug: string;
  href: string;
}

export interface NavigationItems {
  services: ServiceNavItem[];
  products: ProductNavItem[];
  mainNav: NavigationItem[];
} 