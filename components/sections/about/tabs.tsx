"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { aboutContent } from "@/config/about";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function AboutTabs() {
  const [activeTab, setActiveTab] = useState("mission");
  const t = useTranslations('about');

  return (
    <section className="">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-center space-x-4 border-b">
          {aboutContent.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t(`tabs.${tab.id}.title`)}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            {t(`tabs.${activeTab}.content`)}
          </p>
        </motion.div>
      </div>
    </section>
  );
} 