"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Globe, Users, Triangle } from "lucide-react";
import { useTranslations } from "next-intl";

const stats = [
  {
    number: 250,
    label: "Klien Kami",
    description: "Klien yang telah mempercayai perkhidmatan kami sejak 2015.",
    icon: Globe,
  },
  {
    number: 120,
    label: "Projek Kami",
    description: "Projek yang telah berjaya dilaksanakan dengan jayanya.",
    icon: Users,
  },
  {
    number: 500,
    label: "Produk",
    description: "Pengguna yang menggunakan produk dan perisian kami.",
    icon: Triangle,
  },
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * value);

        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 mb-6">
            <span className="text-sm text-muted-foreground">⚡ Key Performance Indicators</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-t from-foreground/30 to-foreground bg-clip-text text-transparent">Numbers That Just Make </span>
            <span className="bg-gradient-to-t from-muted-foreground/30 to-muted-foreground bg-clip-text text-transparent">Sense</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl border border-dashed border-border/50 bg-card/30"
              >
                {/* Large Number */}
                <div className="text-center mb-4">
                  <span className="text-7xl md:text-8xl font-bold bg-gradient-to-t from-foreground/20 to-foreground/80 bg-clip-text text-transparent">
                    <AnimatedNumber value={stat.number} />
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-foreground text-center mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-center mb-6">
                  {stat.description}
                </p>

                {/* Icon */}
                <div className="flex justify-start">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
