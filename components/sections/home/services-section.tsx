'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Presentation, Code2, Smartphone, Palette } from 'lucide-react';

const services = [
  {
    key: 'training',
    icon: Presentation,
    title: 'Training',
    description: 'Latihan profesional dalam pembangunan sistem, pengaturcaraan dan pengurusan IT.',
    color: 'blue',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    key: 'software',
    icon: Code2,
    title: 'Software Development',
    description: 'Pembangunan sistem web aplikasi kustom dengan teknologi terkini dan skalabel.',
    color: 'purple',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    key: 'mobile',
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Aplikasi mudah alih iOS & Android dengan pengalaman pengguna yang lancar.',
    color: 'emerald',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    key: 'webdesign',
    icon: Palette,
    title: 'Web Design',
    description: 'Rekabentuk laman web moden, responsif dan mesra pengguna.',
    color: 'orange',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
];

const colorClasses: Record<string, string> = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  emerald: 'text-emerald-400',
  orange: 'text-orange-400',
};

export function ServicesSection() {
  const t = useTranslations('homeServices');

  return (
    <section id="perkhidmatan" className="py-24 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
            {t('sectionLabel')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Apa Yang Kami Tawarkan
          </h2>
          <p className="text-muted-foreground">
            Perkhidmatan teknologi menyeluruh untuk memenuhi keperluan digital organisasi anda.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const textColor = colorClasses[service.color];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-xl p-8 rounded-2xl text-center group border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center ${textColor} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
