"use client";
// src/components/sections/about/hero.tsx
import { motion } from "framer-motion";
import { AboutTabs } from "@/components/sections/about/tabs";

interface AboutHeroProps {
  content: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    hero2: {
      title: string;
      subtitle: string;
      description: string;
    };
    tabs: {
      mission: { title: string; content: string };
      vision: { title: string; content: string };
      values: { title: string; content: string };
    };
    badge?: string;
  };
}

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <>
      <section className="relative w-full overflow-hidden py-24">
        <div className="">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-medium tracking-wider text-primary"
            >
              {content.badge || content.hero.subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-balance text-4xl font-bold tracking-tight sm:text-6xl"
            >
              {content.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto mt-6 text-muted-foreground"
            >
              {content.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

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
                {content.hero2.title}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-balance text-4xl font-bold tracking-tight sm:text-5xl"
              >
                {content.hero2.subtitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 text-muted-foreground"
              >
                {content.hero2.description}
              </motion.p>
            </motion.div>

            <div className="flex items-center justify-center">
              <AboutTabs content={content.tabs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
