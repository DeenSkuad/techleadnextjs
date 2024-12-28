"use client";
// src/components/sections/about/hero.tsx
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AboutTabs } from "@/components/sections/about/tabs";


export function AboutHero() {
  const t = useTranslations("about");

  return (
    <>
      {/* Intro Hero Section */}

        <section className="relative w-full overflow-hidden py-24">
          <div className="">
            <div className="mx-auto max-w-3xl text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-block text-sm font-medium tracking-wider text-primary"
              >
                ABOUT US
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-balance text-4xl font-bold tracking-tight sm:text-6xl"
              >
                Get to know us
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mx-auto mt-6 text-muted-foreground"
              >
                {t("hero.description")}
              </motion.p>
            </div>
          </div>
        </section>


      {/* WHO WE ARE Section */}
      <section className="relative bg-card px-4 md:px-20">
        <div className="py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-sm font-medium tracking-wider text-primary"
              >
                {t("hero2.title")}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-balance text-4xl font-bold tracking-tight sm:text-5xl"
              >
                {t("hero2.subtitle")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 text-muted-foreground"
              >
                {t("hero2.description")}
              </motion.p>
            </motion.div>

            <div className="flex items-center justify-center">
              <AboutTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
