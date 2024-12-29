"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TabsContent {
  mission: { title: string; content: string };
  vision: { title: string; content: string };
  values: { title: string; content: string };
}

export function AboutTabs({ content }: { content: TabsContent }) {
  const [activeTab, setActiveTab] = useState("mission");
  const tabs = Object.entries(content);

  return (
    <section className="">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-center space-x-4 border-b">
          {tabs.map(([id, tab]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors",
                activeTab === id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.title}
              {activeTab === id && (
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
            {content[activeTab as keyof TabsContent].content}
          </p>
        </motion.div>
      </div>
    </section>
  );
} 