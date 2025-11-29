'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Briefcase, Check } from 'lucide-react';

const serviceIcons = {
  technical: GraduationCap,
  toolDev: Code,
  business: Briefcase,
};

export function ServicesSection() {
  const t = useTranslations('homeServices');

  const services = ['technical', 'toolDev', 'business'] as const;

  return (
    <section id="services" className="py-20 lg:py-28 hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            {t('sectionLabel')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('sectionTitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('sectionSubtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((key, index) => {
            const Icon = serviceIcons[key];
            const features = t.raw(`items.${key}.features`) as string[];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(`items.${key}.description`)}
                </p>

                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
