'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/lib/i18n/navigation';
import { Star } from 'lucide-react';
import Image from 'next/image';

const portfolioItems = [
  {
    key: 'essentia',
    name: 'Essentia',
    image: 'https://knowa-omega.vercel.app/mockups/essentia.webp',
  },
  {
    key: 'kinimatic',
    name: 'Kinimatic',
    image: 'https://knowa-omega.vercel.app/mockups/kinimatic.webp',
  },
  {
    key: 'peak',
    name: 'Peak',
    image: 'https://knowa-omega.vercel.app/mockups/peak.webp',
  },
  {
    key: 'rev',
    name: 'Rev',
    image: 'https://knowa-omega.vercel.app/mockups/rev.webp',
  },
];

export function PortfolioGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="portfolio" className="relative min-h-screen ">
      {/* Background gradient effects */}
      <div className="absolute inset-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center pt-20 pb-12 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 mb-6">
            <Star className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Featured Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Projek Terpilih Yang Mentakrifkan
            <br className="hidden md:block" />
            <span className="text-muted-foreground"> Semula Kemungkinan</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Transformasi syarikat pemula, PKS dan gergasi industri menjadi pemimpin digital.
          </p>
        </div>

        {/* Full Width Image Carousel */}
        <div
          className="relative w-full cursor-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Full Width Mockup Image */}
          <div className="relative w-full aspect-[16/9]">
            {/* Image content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={portfolioItems[currentIndex].image}
                  alt={portfolioItems[currentIndex].name}
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>

            {/* Cursor-following See More button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0,
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
                x: { duration: 0.1, ease: "linear" },
                y: { duration: 0.1, ease: "linear" },
              }}
              className="absolute top-0 left-0 z-40 pointer-events-none"
              style={{ transform: `translate(-50%, -50%)` }}
            >
              <Link
                href="/works"
                className="flex items-center justify-center w-28 h-28 bg-white/10 border border-white/20 text-white rounded-full font-medium text-sm backdrop-blur-md shadow-xl pointer-events-auto"
              >
                See More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3 py-12">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-10 h-3 bg-white'
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
