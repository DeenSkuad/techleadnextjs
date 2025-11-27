// src/components/sections/navbar/default.tsx
"use client";

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
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const params = useParams();
  const locale = params?.locale || "en"; // Default to "en" if locale is undefined
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsSheetOpen(false);
  };

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
              {/* <LaunchUI /> */}
              <Image
                src="/images/logo-svg.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-8 "
              />
              Tech Lead
            </a>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <LanguageSwitcher />
            <Button
              variant="default"
              asChild
              className="hidden md:flex gap-2 text-xs"
            >
              <a
                href="https://wa.me/601172402173?text=Hi%2C%20I%20am%20interested%20to%20know%20more%20about%20your%20services."
                className=""
                target="_blank"
              >
                <FaWhatsapp className="ml-2" />
                Talk To Us
              </a>
            </Button>
            {/* Mobile nav */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
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
              <SheetContent side="right" className="overflow-hidden">
                <div className="absolute -left-10 top-0 h-full w-10 bg-background">
                  <div className="absolute left-0 top-0 h-full w-10 bg-background rounded-l-[1.5rem]"></div>
                </div>

                <nav className="grid gap-6 text-lg font-medium relative z-10">
                  <a
                    href={siteConfig.url}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Tech Lead</span>
                  </a>
                  
                  {navigationConfig.mainNav.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.3,
                          delay: 0.1 * index,
                        },
                      }}
                    >
                      <Link
                        href={`/${locale}${item.href || "/"}`}
                        className="text-muted-foreground hover:text-foreground transition-colors py-2 block"
                        onClick={handleMenuItemClick}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                  
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
