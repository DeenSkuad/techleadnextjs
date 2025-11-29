'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, Monitor, Users, User } from 'lucide-react';

const formatIcons = {
  onsite: Building2,
  virtual: Monitor,
  workshop: Users,
  oneOnOne: User,
};

export function TrainingFormats() {
  const t = useTranslations('trainingFormats');

  const formats = ['onsite', 'virtual', 'workshop', 'oneOnOne'] as const;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-bold mb-8 text-center">{t('sectionTitle')}</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formats.map((key, index) => {
              const Icon = formatIcons[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-background hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-semibold mb-1">{t(`items.${key}.title`)}</div>
                  <div className="text-sm text-muted-foreground">{t(`items.${key}.description`)}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
