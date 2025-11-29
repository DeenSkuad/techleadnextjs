# 🚀 CLAUDE CODE PROMPT: Tech-Lead.my Website Enhancement

## PROJECT CONTEXT

**Project:** Tech-Lead.my NextJS Website  
**Live URL:** https://tech-lead.my  
**Framework:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion + next-intl  
**Package Manager:** yarn (yarn.lock exists)

---

## 📁 EXISTING STRUCTURE ANALYSIS

```
techleadnextjs/
├── app/
│   ├── [locale]/
│   │   ├── about-us/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── products/
│   │   │   ├── [slug]/
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx      # Product detail page
│   │   │   └── page.tsx          # Products listing
│   │   ├── services/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── works/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx              # HOMEPAGE
│   ├── api/email/contact/route.ts
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── sections/
│   │   ├── about/               # KEEP
│   │   ├── clients/default.tsx  # KEEP - Client logos
│   │   ├── contact/default.tsx  # KEEP
│   │   ├── cta/default.tsx      # KEEP - "Looking To Expand"
│   │   ├── faq/default.tsx      # KEEP
│   │   ├── footer/default.tsx   # KEEP
│   │   ├── hero/default.tsx     # KEEP - Enhance
│   │   ├── items/default.tsx
│   │   ├── logos/default.tsx
│   │   ├── navbar/default.tsx   # KEEP
│   │   ├── products/            # UPDATE
│   │   ├── services/            # UPDATE
│   │   └── works/default.tsx
│   ├── ui/                      # Existing UI components
│   └── *.tsx                    # Various components
├── config/
│   ├── navigation.ts
│   ├── services.ts
│   └── site.ts
├── lib/
│   ├── products.ts              # Product data
│   └── utils.ts
├── messages/                    # i18n translations
│   ├── en.json
│   └── ms.json
├── locales/                     # Duplicate? Check usage
│   ├── en.json
│   └── ms.json
├── public/images/
│   ├── clients/                 # Client logos exist
│   ├── products/                # Product images exist
│   └── team/
└── i18n.ts                      # i18n config
```

---

## 🎯 TASK OVERVIEW

### KEEP (Do Not Modify Core Logic):
1. `components/sections/navbar/default.tsx` - Navigation
2. `components/sections/footer/default.tsx` - Footer
3. `components/sections/clients/default.tsx` - Client logos
4. `components/sections/cta/default.tsx` - "Looking To Expand Your Business?"

### ENHANCE:
1. `components/sections/hero/default.tsx` - Add badge, improve animations
2. `app/[locale]/page.tsx` - Homepage with new sections

### CREATE NEW:
1. Products Slider with Swiper.js
2. Services Section (3 cards)
3. Training Formats Section
4. Service Packages Section (Pricing)
5. Portfolio Grid Section
6. Testimonials Marquee
7. Enhanced FAQ Section
8. Asset Management Product Page (SaaS style)

---

## 📋 TASK 1: INSTALL DEPENDENCIES

```bash
# Using yarn (based on yarn.lock)
yarn add swiper
```

---

## 📋 TASK 2: UPDATE i18n DEFAULT LOCALE

### Update `i18n.ts`
```typescript
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Locales configuration
export const locales = ['ms', 'en'] as const;
export const defaultLocale = 'ms'; // Changed from 'en' to 'ms'
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
```

### Update `middleware.ts`
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(ms|en)/:path*']
};
```

### Update `lib/i18n/config.ts`
```typescript
export const defaultLocale = 'ms';
export const locales = ['ms', 'en'] as const;
```

---

## 📋 TASK 3: UPDATE TRANSLATION FILES

### Update `messages/ms.json` - Add new sections:
```json
{
  "hero": {
    "badge": "Dipercayai 50+ Agensi Kerajaan",
    "title": "Rakan Dipercayai dalam",
    "titleHighlight": "Penyelesaian Teknologi",
    "subtitle": "Pakar dalam konsultansi dan pembangunan laman web, aplikasi mobile, dan platform SaaS.",
    "cta": {
      "primary": "Lihat Portfolio",
      "secondary": "Hubungi Kami"
    }
  },
  "products": {
    "sectionLabel": "Produk Kami",
    "sectionTitle": "Penyelesaian Digital Komprehensif",
    "sectionSubtitle": "Tiga sistem utama untuk transformasi digital organisasi anda",
    "learnMore": "Ketahui Lebih Lanjut",
    "items": {
      "asset": {
        "name": "Sistem Pengurusan Aset",
        "tagline": "Patuh KEWPA & KEWPS",
        "description": "Penyelesaian lengkap untuk pengurusan aset kerajaan dan korporat dengan pematuhan penuh kepada standard Malaysia.",
        "slug": "assetmanagement"
      },
      "hrm": {
        "name": "Sistem Pengurusan HR",
        "tagline": "Automasi Sumber Manusia",
        "description": "Urus sumber manusia dengan lebih efisien - dari pengambilan hingga persaraan dalam satu platform.",
        "slug": "hrm"
      },
      "ecommerce": {
        "name": "Platform E-Commerce",
        "tagline": "Jualan Online Mudah",
        "description": "Platform e-dagang lengkap untuk perniagaan anda dengan integrasi pembayaran tempatan.",
        "slug": "ecommerce"
      }
    }
  },
  "services": {
    "sectionLabel": "Perkhidmatan",
    "sectionTitle": "Latihan & Pembangunan",
    "sectionSubtitle": "Meningkatkan kecekapan organisasi anda",
    "items": {
      "technical": {
        "title": "Latihan Teknikal",
        "description": "Latihan hands-on untuk pasukan IT anda",
        "features": [
          "Enterprise System Administration",
          "Database Management & SQL",
          "Web Development (PHP, Python, JS)",
          "API & REST Services",
          "Cloud Computing & DevOps"
        ]
      },
      "toolDev": {
        "title": "Pembangunan Tool",
        "description": "Custom tools untuk automasi proses",
        "features": [
          "Data Management Tools",
          "Process Automation",
          "System Integration",
          "Reporting & Analytics",
          "Custom Solutions"
        ]
      },
      "business": {
        "title": "Proses Bisnes",
        "description": "Transformasi digital organisasi",
        "features": [
          "Digital Transformation",
          "Project Management (Agile)",
          "Business Analysis",
          "Change Management",
          "Data Analytics"
        ]
      }
    }
  },
  "trainingFormats": {
    "sectionTitle": "Format Latihan Tersedia",
    "items": {
      "onsite": {
        "title": "On-Site",
        "description": "Di lokasi anda",
        "icon": "🏢"
      },
      "virtual": {
        "title": "Virtual",
        "description": "Latihan online",
        "icon": "💻"
      },
      "workshop": {
        "title": "Workshop",
        "description": "Sesi hands-on",
        "icon": "👥"
      },
      "oneOnOne": {
        "title": "1-on-1",
        "description": "Coaching peribadi",
        "icon": "👤"
      }
    }
  },
  "packages": {
    "sectionLabel": "Pakej Perkhidmatan",
    "sectionTitle": "Pilih Pelan Terbaik untuk Anda",
    "sectionSubtitle": "Pakej fleksibel yang boleh disesuaikan dengan keperluan organisasi",
    "cta": "Pilih Pakej",
    "mostPopular": "Paling Popular",
    "items": {
      "starter": {
        "name": "Starter",
        "price": "30,000",
        "currency": "RM",
        "period": "/projek",
        "description": "Sesuai untuk projek kecil dan sederhana",
        "features": [
          "Latihan 20 peserta",
          "Alat automasi asas",
          "Sokongan 3 bulan",
          "Dokumentasi lengkap"
        ]
      },
      "professional": {
        "name": "Professional",
        "price": "49,600",
        "currency": "RM",
        "period": "/projek",
        "description": "Pilihan terbaik untuk kebanyakan organisasi",
        "popular": true,
        "features": [
          "Latihan 25 peserta",
          "Custom tool development",
          "Integrasi sistem",
          "Sokongan prioriti 6 bulan",
          "Coaching hands-on"
        ]
      },
      "enterprise": {
        "name": "Enterprise",
        "price": "Custom",
        "description": "Untuk organisasi besar dengan keperluan khusus",
        "features": [
          "Peserta tanpa had",
          "Enterprise solutions",
          "Sokongan 24/7",
          "Consultancy on-site",
          "SLA guaranteed"
        ]
      }
    }
  },
  "portfolio": {
    "sectionLabel": "Portfolio",
    "sectionTitle": "Projek Terkini Kami",
    "sectionSubtitle": "Beberapa projek yang telah kami selesaikan untuk klien kerajaan dan korporat",
    "viewAll": "Lihat Semua Projek",
    "items": {
      "satria": {
        "name": "SATRIA TD",
        "client": "Tentera Darat Malaysia",
        "type": "Sistem Pengurusan & Latihan",
        "image": "/images/products/Satria_TD_Banner 1.png"
      },
      "adims": {
        "name": "ADiMS",
        "client": "Pelbagai Agensi",
        "type": "Sistem Pengurusan Aset",
        "image": "/images/products/Assets_management.png"
      },
      "mhcotryze": {
        "name": "MH COTRYZE",
        "client": "Hospital Kerajaan",
        "type": "Inventory System",
        "image": "/images/products/mhcotryze_banner 1.png"
      }
    }
  },
  "testimonials": {
    "sectionLabel": "Testimoni",
    "sectionTitle": "Apa Kata Pelanggan Kami",
    "items": [
      {
        "name": "Encik Ahmad Razif",
        "role": "Pegawai Aset, Tentera Darat",
        "quote": "Sistem ini memudahkan kerja kami. Laporan KEWPA yang dulu ambil 2 minggu, sekarang siap dalam 1 jam.",
        "avatar": "👨‍✈️"
      },
      {
        "name": "Puan Siti Aminah",
        "role": "Ketua Unit IT, MPK",
        "quote": "Audit aset sekarang lebih teratur. Semua data di hujung jari dan boleh diakses bila-bila masa.",
        "avatar": "👩‍💼"
      },
      {
        "name": "Encik Lee Wei Ming",
        "role": "Pengurus Operasi, Hospital",
        "quote": "Penyelenggaraan peralatan hospital kini lebih sistematik dengan jadual automatik.",
        "avatar": "👨‍⚕️"
      }
    ]
  },
  "faq": {
    "sectionLabel": "FAQ",
    "sectionTitle": "Soalan Lazim",
    "items": [
      {
        "question": "Apakah jenis organisasi yang sesuai menggunakan sistem Tech-Lead?",
        "answer": "Sistem kami direka untuk agensi kerajaan, GLC, dan syarikat korporat di Malaysia. Kami mempunyai pengalaman luas dengan Tentera, PDRM, Majlis Perbandaran, Hospital, dan pelbagai Kementerian."
      },
      {
        "question": "Berapa lama masa untuk implementasi?",
        "answer": "Bergantung kepada skop projek. Implementasi asas mengambil 2-4 minggu, manakala enterprise dengan customization mengambil 2-6 bulan."
      },
      {
        "question": "Adakah sistem boleh diintegrasikan dengan sistem sedia ada?",
        "answer": "Ya, kami menyediakan API dan middleware untuk integrasi dengan sistem ERP, HRMIS, sistem kewangan, dan sistem legacy."
      },
      {
        "question": "Bagaimana dengan keselamatan data?",
        "answer": "Kami menggunakan enkripsi AES-256, hosting di data center bertaraf antarabangsa, dan mematuhi standard keselamatan siber kerajaan Malaysia."
      },
      {
        "question": "Adakah latihan dan sokongan disediakan?",
        "answer": "Ya, setiap pakej termasuk latihan komprehensif. Kami juga menyediakan sokongan teknikal melalui telefon, email, WhatsApp, dan on-site untuk pakej Enterprise."
      }
    ]
  },
  "assetManagement": {
    "hero": {
      "badge": "Patuh KEWPA & KEWPS",
      "title": "Sistem Pengurusan Aset",
      "titleHighlight": "#1 Malaysia",
      "subtitle": "Penyelesaian komprehensif untuk pengurusan aset kerajaan dan korporat. Dari pendaftaran hingga pelupusan, semua dalam satu platform.",
      "cta": {
        "primary": "Mula 7 Hari Percuma",
        "secondary": "Tonton Demo"
      },
      "trusted": "Dipercayai 50+ Agensi Kerajaan"
    },
    "problem": {
      "sectionLabel": "Masalah",
      "title": "Pengurusan aset secara manual adalah rumit.",
      "items": [
        {
          "title": "Data Berselerak",
          "description": "Rekod aset dalam Excel dan dokumen fizikal yang sukar dijejaki dan terdedah kepada kesilapan.",
          "icon": "FileText"
        },
        {
          "title": "Proses Manual Lambat",
          "description": "Audit dan laporan KEWPA/KEWPS mengambil masa berminggu-minggu kerana proses manual.",
          "icon": "Clock"
        },
        {
          "title": "Risiko Ketidakpatuhan",
          "description": "Tanpa sistem automatik, sukar memastikan pematuhan 100% kepada prosedur kerajaan.",
          "icon": "AlertTriangle"
        }
      ]
    },
    "solution": {
      "sectionLabel": "Penyelesaian",
      "title": "Perkasakan Pengurusan Aset dengan Tech-Lead",
      "subtitle": "Sistem yang direka khas untuk memenuhi keperluan agensi kerajaan dan korporat Malaysia.",
      "features": [
        {
          "title": "Pendaftaran Aset Digital",
          "description": "Daftar dan label aset dengan QR code/barcode. Semua data tersimpan dalam satu platform berpusat.",
          "icon": "QrCode"
        },
        {
          "title": "Patuh KEWPA & KEWPS",
          "description": "Sistem direka khas untuk memenuhi semua keperluan pekeliling kerajaan Malaysia.",
          "icon": "Shield"
        },
        {
          "title": "Laporan Real-time",
          "description": "Jana laporan automatik untuk audit, pemeriksaan, dan pematuhan dalam beberapa klik.",
          "icon": "BarChart"
        },
        {
          "title": "Penyelenggaraan Berjadual",
          "description": "Automasi jadual penyelenggaraan dengan notifikasi dan rekod sejarah lengkap.",
          "icon": "Calendar"
        },
        {
          "title": "Scan & Track",
          "description": "Imbas QR code untuk akses maklumat aset serta-merta dari mana-mana peranti.",
          "icon": "Scan"
        },
        {
          "title": "Pelupusan & Hapuskira",
          "description": "Proses pelupusan aset mengikut prosedur kerajaan dengan dokumentasi lengkap.",
          "icon": "Trash2"
        }
      ]
    },
    "howItWorks": {
      "sectionLabel": "Cara Penggunaan",
      "title": "Hanya 3 langkah untuk bermula",
      "steps": [
        {
          "number": "01",
          "title": "Daftar & Setup",
          "description": "Kami bantu setup sistem dan import data aset sedia ada anda ke dalam platform."
        },
        {
          "number": "02",
          "title": "Label & Scan",
          "description": "Jana label QR code dan mula scan untuk pendaftaran aset digital yang pantas."
        },
        {
          "number": "03",
          "title": "Urus & Lapor",
          "description": "Urus aset dan jana laporan KEWPA/KEWPS automatik bila-bila masa diperlukan."
        }
      ]
    },
    "modules": {
      "title": "Modul Sistem",
      "items": [
        { "name": "Pengurusan Pengguna", "icon": "Users" },
        { "name": "Kewangan", "icon": "DollarSign" },
        { "name": "Assets", "icon": "Box" },
        { "name": "Store", "icon": "Package" },
        { "name": "Senggaraan", "icon": "Wrench" },
        { "name": "Pelupusan", "icon": "Trash2" },
        { "name": "Dashboard", "icon": "LayoutDashboard" },
        { "name": "Laporan", "icon": "FileText" }
      ]
    },
    "pricing": {
      "sectionLabel": "Harga",
      "title": "Pilih pelan yang sesuai untuk anda",
      "cta": "Pilih Pelan",
      "contact": "Hubungi Jualan",
      "plans": [
        {
          "name": "ASAS",
          "price": "990",
          "currency": "RM",
          "period": "/bulan",
          "description": "Untuk organisasi kecil",
          "features": [
            "Sehingga 1,000 aset",
            "5 pengguna",
            "Laporan asas",
            "Sokongan email",
            "Latihan online"
          ]
        },
        {
          "name": "PROFESIONAL",
          "price": "2,490",
          "currency": "RM",
          "period": "/bulan",
          "popular": true,
          "description": "Paling popular",
          "features": [
            "Sehingga 10,000 aset",
            "25 pengguna",
            "Semua laporan KEWPA/KEWPS",
            "Sokongan prioriti",
            "Latihan on-site",
            "Mobile app",
            "API integration"
          ]
        },
        {
          "name": "ENTERPRISE",
          "price": "Custom",
          "description": "Untuk organisasi besar",
          "features": [
            "Aset tanpa had",
            "Pengguna tanpa had",
            "Custom development",
            "Sokongan 24/7",
            "Dedicated account manager",
            "On-premise option",
            "SLA guaranteed"
          ]
        }
      ]
    },
    "cta": {
      "title": "Mula urus aset anda hari ini",
      "subtitle": "Cuba percuma selama 7 hari. Tiada kad kredit diperlukan.",
      "primary": "Mula Percuma",
      "secondary": "Hubungi Jualan"
    }
  }
}
```

### Create corresponding `messages/en.json` with English translations

---

## 📋 TASK 4: CREATE NEW COMPONENTS

### 4.1 Create UI Components

#### `components/ui/marquee.tsx`
```tsx
'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  duration?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  vertical = false,
  duration = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group flex overflow-hidden [--gap:1rem]',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
      style={{ '--duration': `${duration}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          'flex shrink-0 gap-[--gap]',
          vertical ? 'flex-col' : 'flex-row',
          vertical
            ? reverse
              ? 'animate-marquee-vertical-reverse'
              : 'animate-marquee-vertical'
            : reverse
              ? 'animate-marquee-reverse'
              : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex shrink-0 gap-[--gap]',
          vertical ? 'flex-col' : 'flex-row',
          vertical
            ? reverse
              ? 'animate-marquee-vertical-reverse'
              : 'animate-marquee-vertical'
            : reverse
              ? 'animate-marquee-reverse'
              : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
    </div>
  );
}
```

#### `components/ui/word-rotate.tsx`
```tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WordRotateProps {
  words: string[];
  className?: string;
  duration?: number;
}

export function WordRotate({ words, className, duration = 2500 }: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span className={cn('inline-block overflow-hidden', className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
```

#### `components/ui/number-ticker.tsx`
```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface NumberTickerProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function NumberTicker({
  value,
  suffix = '',
  prefix = '',
  className,
  duration = 2000,
}: NumberTickerProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
```

### 4.2 Create Homepage Sections

#### `components/sections/home/products-slider.tsx`
```tsx
'use client';

import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';
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

export function ProductsSlider() {
  const t = useTranslations('products');

  const products = ['asset', 'hrm', 'ecommerce'] as const;

  return (
    <section className="py-20 lg:py-28 bg-black/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            {t('sectionLabel')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('sectionTitle')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('sectionSubtitle')}
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6">
                      <Icon className="w-4 h-4" />
                      {t(`items.${key}.tagline`)}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {t(`items.${key}.name`)}
                    </h3>

                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                      {t(`items.${key}.description`)}
                    </p>

                    <Link
                      href={`/products/${t(`items.${key}.slug`)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all"
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
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800">
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
```

#### `components/sections/home/services-section.tsx`
```tsx
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
  const t = useTranslations('services');

  const services = ['technical', 'toolDev', 'business'] as const;

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            {t('sectionLabel')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('sectionTitle')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-emerald-400" />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {t(`items.${key}.description`)}
                </p>

                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
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
```

#### `components/sections/home/training-formats.tsx`
```tsx
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function TrainingFormats() {
  const t = useTranslations('trainingFormats');

  const formats = ['onsite', 'virtual', 'workshop', 'oneOnOne'] as const;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <h3 className="text-xl font-bold mb-8 text-center">{t('sectionTitle')}</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formats.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-800/50 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{t(`items.${key}.icon`)}</div>
                <div className="font-semibold mb-1">{t(`items.${key}.title`)}</div>
                <div className="text-sm text-gray-500">{t(`items.${key}.description`)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

#### `components/sections/home/service-packages.tsx`
```tsx
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function ServicePackages() {
  const t = useTranslations('packages');

  const packages = ['starter', 'professional', 'enterprise'] as const;

  return (
    <section id="packages" className="py-20 lg:py-28 bg-black/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            {t('sectionLabel')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('sectionTitle')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
                    ? 'bg-gradient-to-b from-emerald-500/10 to-gray-900 border-2 border-emerald-500/50 scale-105'
                    : 'bg-gray-900/50 border border-gray-800'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white text-xs font-bold">
                    {t('mostPopular')}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    {t(`items.${key}.name`)}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    {t(`items.${key}.currency`) && (
                      <span className="text-lg text-gray-400">{t(`items.${key}.currency`)}</span>
                    )}
                    <span className="text-4xl font-bold">{t(`items.${key}.price`)}</span>
                    {t(`items.${key}.period`) && (
                      <span className="text-gray-500 text-sm">{t(`items.${key}.period`)}</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{t(`items.${key}.description`)}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-xl font-semibold transition-all ${
                    isPopular
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/25'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
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
```

#### `components/sections/home/portfolio-grid.tsx`
```tsx
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PortfolioGrid() {
  const t = useTranslations('portfolio');

  const projects = ['satria', 'adims', 'mhcotryze'] as const;

  return (
    <section id="portfolio" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            {t('sectionLabel')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('sectionTitle')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all"
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
                <div className="text-xs font-medium text-emerald-400 mb-1">
                  {t(`items.${key}.type`)}
                </div>
                <h3 className="font-bold text-lg mb-1">{t(`items.${key}.name`)}</h3>
                <p className="text-sm text-gray-500">{t(`items.${key}.client`)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl font-semibold text-gray-300 hover:border-gray-600 hover:bg-gray-900/50 transition-all"
          >
            {t('viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
```

#### `components/sections/home/testimonials-marquee.tsx`
```tsx
'use client';

import { useTranslations } from 'next-intl';
import { Marquee } from '@/components/ui/marquee';
import { Star } from 'lucide-react';

export function TestimonialsMarquee() {
  const t = useTranslations('testimonials');

  const testimonials = t.raw('items') as Array<{
    name: string;
    role: string;
    quote: string;
    avatar: string;
  }>;

  return (
    <section className="py-20 lg:py-28 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
          {t('sectionLabel')}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {t('sectionTitle')}
        </h2>
      </div>

      <Marquee className="mb-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="w-[350px] p-6 rounded-2xl bg-gray-900/50 border border-gray-800 mx-4"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">"{item.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg">
                {item.avatar}
              </div>
              <div>
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="text-gray-500 text-xs">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      <Marquee reverse>
        {[...testimonials].reverse().map((item, i) => (
          <div
            key={i}
            className="w-[350px] p-6 rounded-2xl bg-gray-900/50 border border-gray-800 mx-4"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">"{item.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg">
                {item.avatar}
              </div>
              <div>
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="text-gray-500 text-xs">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
```

---

## 📋 TASK 5: UPDATE HOMEPAGE

### Update `app/[locale]/page.tsx`
```tsx
import { HeroDefault } from '@/components/sections/hero/default';
import { ProductsSlider } from '@/components/sections/home/products-slider';
import { ClientsDefault } from '@/components/sections/clients/default';
import { ServicesSection } from '@/components/sections/home/services-section';
import { TrainingFormats } from '@/components/sections/home/training-formats';
import { ServicePackages } from '@/components/sections/home/service-packages';
import { PortfolioGrid } from '@/components/sections/home/portfolio-grid';
import { TestimonialsMarquee } from '@/components/sections/home/testimonials-marquee';
import { FAQDefault } from '@/components/sections/faq/default';
import { CTADefault } from '@/components/sections/cta/default';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero - KEEP existing, enhance with badge */}
      <HeroDefault />
      
      {/* 2. Products Slider - NEW with Swiper */}
      <ProductsSlider />
      
      {/* 3. Clients - KEEP existing */}
      <ClientsDefault />
      
      {/* 4. Services - NEW */}
      <ServicesSection />
      
      {/* 5. Training Formats - NEW */}
      <TrainingFormats />
      
      {/* 6. Service Packages - NEW */}
      <ServicePackages />
      
      {/* 7. Portfolio - NEW */}
      <PortfolioGrid />
      
      {/* 8. Testimonials - NEW */}
      <TestimonialsMarquee />
      
      {/* 9. FAQ - KEEP existing, update with translations */}
      <FAQDefault />
      
      {/* 10. CTA - KEEP existing */}
      <CTADefault />
    </main>
  );
}
```

---

## 📋 TASK 6: UPDATE TAILWIND CONFIG

### Add to `tailwind.config.ts`
```typescript
// Add these keyframes and animations
module.exports = {
  // ... existing config
  theme: {
    extend: {
      // ... existing extensions
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(calc(-100% - var(--gap)))' },
          to: { transform: 'translateX(0)' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
    },
  },
};
```

---

## 📋 TASK 7: CREATE ASSET MANAGEMENT PRODUCT PAGE

Create detailed product page at `app/[locale]/products/assetmanagement/page.tsx` following the SaaS MagicUI layout with sections:

1. Hero with badge, title, CTA, dashboard mockup
2. Trusted By logos
3. Problem section (3 cards)
4. Solution section (6 features)
5. How It Works (3 steps)
6. Modules grid
7. Testimonials marquee
8. Pricing (3 tiers)
9. FAQ accordion
10. CTA section

Reference: https://saas-magicui.vercel.app/

---

## 📋 TASK 8: CLEANUP & REFACTOR

### Files to check/remove:
- `locales/` folder - appears duplicate with `messages/`, verify usage
- `pages/[locale]/` - empty folder, can be removed
- Remove any unused components in `components/logos/`
- Consolidate duplicate translation files

### Verify & cleanup:
```bash
# Check for duplicate/unused files
find . -name "*.tsx" -o -name "*.ts" | xargs grep -l "export" | head -50

# Remove empty directories
find . -type d -empty -delete

# Check translation file usage
grep -r "useTranslations" --include="*.tsx" | head -20
```

---

## 🚀 EXECUTION CHECKLIST

```bash
# 1. Install dependencies
yarn add swiper

# 2. Update i18n config (i18n.ts, middleware.ts)
# Set defaultLocale to 'ms'

# 3. Update translation files
# messages/ms.json - Add all new sections
# messages/en.json - Add English translations

# 4. Create UI components
# components/ui/marquee.tsx
# components/ui/word-rotate.tsx
# components/ui/number-ticker.tsx

# 5. Create homepage sections
# components/sections/home/products-slider.tsx
# components/sections/home/services-section.tsx
# components/sections/home/training-formats.tsx
# components/sections/home/service-packages.tsx
# components/sections/home/portfolio-grid.tsx
# components/sections/home/testimonials-marquee.tsx

# 6. Update homepage
# app/[locale]/page.tsx

# 7. Update tailwind.config.ts with new animations

# 8. Create Asset Management product page
# app/[locale]/products/assetmanagement/page.tsx
# Or update app/[locale]/products/[slug]/page.tsx

# 9. Test both locales
# http://localhost:3000/ms
# http://localhost:3000/en

# 10. Cleanup unused files
```

---

## ⚠️ IMPORTANT NOTES

1. **Keep existing navigation and footer** - just update to use translations
2. **Keep existing client logos section** - already working
3. **Keep existing CTA section** - "Looking To Expand Your Business?"
4. **Use yarn** - project uses yarn.lock
5. **Default locale is ms** - Bahasa Malaysia
6. **Dark theme** - maintain existing dark color scheme
7. **Framer Motion** - already installed, use for animations
8. **next-intl** - already configured, use useTranslations hook
