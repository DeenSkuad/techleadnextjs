// components/ui/navigation.tsx

"use client";

import { Link } from '@/lib/i18n/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import { getNavigationItems } from '@/config/navigation';
import { useParams } from 'next/navigation';
import { NavigationItems } from "@/types/navigation";
import { useTranslations } from 'next-intl';

export default function Navigation() {
  const params = useParams();
  const locale = (params?.locale as string) || 'ms';
  const navItems: NavigationItems = getNavigationItems(locale);
  const t = useTranslations('navigation');

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navItems.mainNav.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link
              href={item.href || '/'}
              className={navigationMenuTriggerStyle()}
            >
              {t(item.title)}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
