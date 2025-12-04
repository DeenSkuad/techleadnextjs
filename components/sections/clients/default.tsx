"use client";

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// Logo positions - they will animate FROM center TO these positions
// delay values are staggered for dramatic effect
const clientLogos = [
  { src: "/images/clients/logo/bank-rakyat.jpg", alt: "Bank Rakyat", x: -38, y: -32, delay: 0 },
  { src: "/images/clients/logo/mada.png", alt: "MADA", x: 38, y: -32, delay: 0.03 },
  { src: "/images/clients/logo/mpsp.png", alt: "MPSP", x: -42, y: -8, delay: 0.06 },
  { src: "/images/clients/logo/emesys.png", alt: "EMESYS", x: 42, y: -8, delay: 0.09 },
  { src: "/images/clients/logo/majlis-perbandaran-sungai-petani.png", alt: "MPSP2", x: -42, y: 16, delay: 0.12 },
  { src: "/images/clients/logo/kolejuniversitiantarabangsapicoms.png", alt: "PICOMS", x: 42, y: 16, delay: 0.15 },
  { src: "/images/clients/logo/perbadanan-putrajaya.png", alt: "Perbadanan Putrajaya", x: -32, y: 35, delay: 0.18 },
  { src: "/images/clients/logo/seal-of-george-town.svg.png", alt: "George Town", x: 32, y: 35, delay: 0.21 },
];

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="klien" className="relative">
      {/* Scroll container */}
      <div ref={containerRef} className="relative min-h-[200vh]">
        {/* Sticky container - stays centered on screen */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Grid Background with perspective */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'center top',
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

          {/* Center Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative z-30 text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-muted-foreground">Klien </span>
              <span className="text-foreground">Kami</span>
            </h2>
          </motion.div>

          {/* Scroll indicator - sticky at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-1"
            >
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-muted-foreground/50 rounded-full"
              />
            </motion.div>
          </motion.div>

          {/* Floating Logos - positioned from center */}
          {clientLogos.map((logo, index) => (
            <ClientLogo
              key={logo.alt + index}
              logo={logo}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate component for each logo with scroll-based animation
function ClientLogo({
  logo,
  index,
  scrollYProgress
}: {
  logo: { src: string; alt: string; x: number; y: number; delay: number };
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Calculate staggered scroll ranges for each logo - more spread out for longer section
  const startAppear = 0.1 + logo.delay;
  const endMove = startAppear + 0.2;

  // Transform scroll progress - logos move FROM center (0,0) TO their final positions (x,y)
  // Appear and stay visible (no fade out)
  const opacity = useTransform(scrollYProgress, [startAppear, startAppear + 0.05], [0, 1]);
  const scale = useTransform(scrollYProgress, [startAppear, endMove], [0, 1]);

  // Animate from center (0%) to final position using vw/vh percentages
  const x = useTransform(scrollYProgress, [startAppear, endMove], ['0vw', `${logo.x}vw`]);
  const y = useTransform(scrollYProgress, [startAppear, endMove], ['0vh', `${logo.y}vh`]);

  return (
    <motion.div
      style={{ opacity, scale, x, y }}
      className="absolute z-10"
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, index % 2 === 0 ? 3 : -3, 0]
        }}
        transition={{
          duration: 4 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-card/90 backdrop-blur-md rounded-2xl border border-border/30 p-3 shadow-2xl hover:scale-110 hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          className="object-contain p-2"
        />
      </motion.div>
    </motion.div>
  );
}
