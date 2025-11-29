'use client';

import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from '@/lib/i18n/navigation';
import { ArrowRight, Box, Users, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const productIcons = {
  asset: Box,
  hrm: Users,
  ecommerce: ShoppingCart,
};

const productImages = {
  asset: '/images/products/Assets_management.png',
  hrm: '/images/products/coming-soon.png',
  ecommerce: '/images/products/coming-soon.png',
};

const productSlugs = {
  asset: 'assetmanagement',
  hrm: 'hrms',
  ecommerce: 'ecommerce',
};

export function ProductsSlider() {
  const t = useTranslations('homeProducts');

  const products = ['asset', 'hrm', 'ecommerce'] as const;

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="products-swiper"
        >
          {products.map((key) => {
            const Icon = productIcons[key];
            return (
              <SwiperSlide key={key}>
                <div className="grid lg:grid-cols-2 gap-12 items-center py-8 px-4">
                  {/* Left - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
                      <Icon className="w-4 h-4" />
                      {t(`items.${key}.tagline`)}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {t(`items.${key}.name`)}
                    </h3>

                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                      {t(`items.${key}.description`)}
                    </p>

                    <Link
                      href={`/products/${productSlugs[key]}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
                    >
                      {t('learnMore')}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>

                  {/* Right - Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-lg">
                      <Image
                        src={productImages[key]}
                        alt={t(`items.${key}.name`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
