"use client";

import * as React from "react";
import Link from "next/link";

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
import { siteConfig } from "@/config/site";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { navigationItems } from "@/config/navigation";

export default function Navigation() {
  const scrollToSection = useScrollToSection();

  const renderNavItem = (item: (typeof navigationItems.mainNav)[0]) => {
    if (item.isScroll) {
      return (
        <div
          className="cursor-pointer"
          onClick={() => scrollToSection(item.sectionId)}
        >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {item.title}
          </NavigationMenuLink>
        </div>
      );
    }

    return (
      <Link href={item.href || "/"} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {item.title}
        </NavigationMenuLink>
      </Link>
    );
  };

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={siteConfig.url}
                  >
                    <LaunchUI />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Mobile App
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {/* Mobile App Services Description */}
                      We provide a wide range of mobile app development services
                      to help you take your business to the next level.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {navigationItems.services.map((service) => (
                <ListItem
                  key={service.title}
                  href={siteConfig.url}
                  title={service.title}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navigationItems.products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={siteConfig.url}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {navigationItems.mainNav.map((item) => (
          <NavigationMenuItem key={item.title}>
            {renderNavItem(item)}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
