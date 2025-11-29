'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/lib/i18n/navigation';
import { ArrowRight } from 'lucide-react';

export function PortfolioGrid() {
  const t = useTranslations('portfolio');

  const projects = ['satria', 'adims', 'mhcotryze'] as const;

  return (
    <section id="portfolio" className="py-20 lg:py-28">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={t(`items.${key}.image`)}
                  alt={t(`items.${key}.name`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-primary mb-1">
                  {t(`items.${key}.type`)}
                </div>
                <h3 className="font-bold text-lg mb-1">{t(`items.${key}.name`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`items.${key}.client`)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-semibold hover:border-primary/50 hover:bg-muted/50 transition-all"
          >
            {t('viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
