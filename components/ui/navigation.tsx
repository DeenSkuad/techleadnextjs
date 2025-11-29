// components/ui/navigation.tsx

"use client";

import * as React from "react";
import { Link } from '@/lib/i18n/navigation';
import { useTranslations } from 'next-intl';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import LaunchUI from "../logos/launch-ui";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { getNavigationItems } from '@/config/navigation';
import { useParams } from 'next/navigation';
import { NavigationItems } from "@/types/navigation";

interface ListItemProps extends React.ComponentPropsWithoutRef<typeof Link> {
  title: string;
  children?: React.ReactNode;
}

export default function Navigation() {
  const t = useTranslations();
  const scrollToSection = useScrollToSection();
  const params = useParams();
  const locale = (params?.locale as string) || 'ms';

  const navItems: NavigationItems = getNavigationItems(locale);

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t('navigation.services')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/services"
                  >
                    <LaunchUI />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {t('navigation.services')}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {t('navigation.servicesDescription')}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {navItems.services.map((service) => (
                <ListItem
                  key={service.slug}
                  href={service.href}
                  title={t(`services.${service.slug}.title`)}
                >
                  {t(`services.${service.slug}.description`)}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t('navigation.products')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navItems.products.map((product) => (
                <ListItem
                  key={product.slug}
                  href={product.href}
                  title={t(`products.${product.slug}.title`)}
                >
                  {t(`products.${product.slug}.description`)}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

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

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            href={href}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
