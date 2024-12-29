'use client'
// src/components/sections/services/hero.tsx
import { motion } from 'framer-motion'
import { Tabs } from "@/components/ui/tabs";

interface ServiceHeroProps {
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
    features: Array<{
      title: string;
      description: string;
    }>;
    process: Array<{
      title: string;
      description: string;
    }>;
  };
}

export function ServiceHero({ content }: ServiceHeroProps) {
  return (
    <>
      <section className="relative w-full overflow-hidden py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-medium tracking-wider text-primary"
          >
            {content.hero.subtitle}
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
      </section>

      <section className="relative bg-card px-4 md:px-20">
        <div className="py-24">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-between items-center"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-sm font-medium tracking-wider text-primary"
              >
                {content.hero2.title}
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-balance text-4xl font-bold tracking-tight sm:text-5xl"
              >
                {content.hero2.subtitle}
              </motion.h2>
              </motion.span>

              

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 space-y-4 "
              >
                
                <p className="text-muted-foreground">{content.hero2.description}</p>
                
                {/* Features List */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold">Features</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-4">
                    {Array.isArray(content.features) && content.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-primary">•</span>
                        <div>
                          <span className="font-medium">{feature.title}</span>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* <div className="flex items-center justify-center">
              <Tabs content={content.tabs} />
            </div> */}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section className="py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Our Process</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {content.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="mb-4 text-4xl font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="mb-2 font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
} 