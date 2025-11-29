'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function ServicePackages() {
  const t = useTranslations('packages');

  const packages = ['starter', 'professional', 'enterprise'] as const;

  return (
    <section id="packages" className="py-20 lg:py-28 bg-muted/30">
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

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((key, index) => {
            const features = t.raw(`items.${key}.features`) as string[];
            const isPopular = key === 'professional';

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  isPopular
                    ? 'bg-gradient-to-b from-primary/10 to-background border-2 border-primary/50 scale-105'
                    : 'bg-card border border-border'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-full text-primary-foreground text-xs font-bold">
                    {t('mostPopular')}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                    {t(`items.${key}.name`)}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    {features && key !== 'enterprise' && (
                      <span className="text-lg text-muted-foreground">{t(`items.${key}.currency`)}</span>
                    )}
                    <span className="text-4xl font-bold">{t(`items.${key}.price`)}</span>
                    {key !== 'enterprise' && (
                      <span className="text-muted-foreground text-sm">{t(`items.${key}.period`)}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{t(`items.${key}.description`)}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-xl font-semibold transition-all ${
                    isPopular
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/25'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {t('cta')}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
