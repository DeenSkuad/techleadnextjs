"use client";
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import Glow from '@/components/ui/glow';

export default function ProductsHero() {
  const t = useTranslations('products');

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
      <Glow variant="center" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge variant="secondary" className="mb-4">
            {t('solutions.enterprise')}
          </Badge>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 