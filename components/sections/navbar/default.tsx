// src/components/sections/navbar/default.tsx

import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "../../logos/launch-ui";
import { siteConfig } from "@/config/site";
import LanguageSwitcher from "../../LanguageSwitcher";
import { navigationConfig } from "@/config/navigation";
import Link from "next/link";
// import Link from "next/link";

export default function Navbar() {
  
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href={siteConfig.url}
              className="flex items-center gap-2 text-xl font-bold"
            >
              <LaunchUI />
              Tech Lead
            </a>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <LanguageSwitcher />
            <Button variant="default" asChild className="hidden md:block">
              <a href={siteConfig.url}>Talk To Us</a>
            </Button>
            {/* <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href={siteConfig.url}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Tech Lead</span>
                  </a>
                  {navigationConfig.mainNav.map((item) => (
                    <div key={item.title}>
                      <Link href={item.href || '/'} className="text-muted-foreground hover:text-foreground">{item.title}</Link>
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet> */}
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
