"use client";

import { Button } from "../../ui/button";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/components/ui/animated-modal";
import ContactForm from "@/components/sections/contact/default";
import { useTranslations } from 'next-intl';
import { ArrowDown, PlayCircle, Package, FileText, Users, BarChart3, Calendar, MessageSquare, ShieldCheck } from 'lucide-react';

// Product data for carousel
const products = [
  { icon: Package, title: "Sistem Pengurusan Aset", description: "Pengurusan aset digital dengan QR tracking & laporan automatik", color: "blue", popular: true },
  { icon: FileText, title: "Sistem e-Dokumen", description: "Pendigitalan dokumen dengan OCR & tandatangan digital", color: "purple" },
  { icon: Users, title: "Portal HR & Cuti", description: "Sistem HR lengkap dengan kehadiran & pengurusan cuti", color: "emerald" },
  { icon: BarChart3, title: "Sistem Pelaporan", description: "Dashboard analitik real-time & laporan automatik", color: "orange" },
];

const productsRow2 = [
  { icon: Calendar, title: "Sistem e-Tempahan", description: "Tempahan fasiliti & bilik mesyuarat dalam talian", color: "pink" },
  { icon: MessageSquare, title: "Sistem e-Aduan", description: "Platform aduan awam dengan tracking status", color: "cyan" },
  { icon: ShieldCheck, title: "EMESYS", description: "Sistem Sengeraan Kejuruteraan Tentera Darat", color: "indigo", isNew: true },
];

const colorClasses: Record<string, { bg: string; text: string; hoverBg: string }> = {
  blue: { bg: "bg-blue-500/20", text: "text-blue-400", hoverBg: "group-hover:bg-blue-500" },
  purple: { bg: "bg-purple-500/20", text: "text-purple-400", hoverBg: "group-hover:bg-purple-500" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", hoverBg: "group-hover:bg-emerald-500" },
  orange: { bg: "bg-orange-500/20", text: "text-orange-400", hoverBg: "group-hover:bg-orange-500" },
  pink: { bg: "bg-pink-500/20", text: "text-pink-400", hoverBg: "group-hover:bg-pink-500" },
  cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", hoverBg: "group-hover:bg-cyan-500" },
  indigo: { bg: "bg-indigo-500/20", text: "text-indigo-400", hoverBg: "group-hover:bg-indigo-500" },
};

export default function Hero() {
  const t = useTranslations('hero');
  const scrollToSection = useScrollToSection();

  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://www.veecotech.com.my/wp-content/uploads/2025/02/veeco-web-video.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-appear">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-primary">
              {t('badge')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-appear">
            <span className="">{t('subtitle')}</span>
            <br />
            <span className=" ">
              {t('title')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-appear">
            {t('description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-appear">
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
              onClick={() => scrollToSection("produk")}
            >
              Lihat Produk Kami
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <Modal>
              <ModalTrigger>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <PlayCircle className="mr-2 w-5 h-5" />
                  {t('buttons.hireUs')}
                </Button>
              </ModalTrigger>
              <ModalBody size="md">
                <ModalContent>
                  <ContactForm />
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>

      {/* Product Carousel */}
      <div id="produk" className="relative py-8">
        {/* Row 1 - Scroll Left */}
        <div className="overflow-hidden mb-6 py-2">
          <div
            className="flex gap-6 animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {/* Products Set 1 + Duplicate for seamless loop */}
            {[...products, ...products].map((product, index) => {
              const Icon = product.icon;
              const colors = colorClasses[product.color];
              return (
                <div
                  key={index}
                  className="w-72 p-6 rounded-2xl flex-shrink-0 group cursor-pointer bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} ${colors.hoverBg} group-hover:text-white transition-colors`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {product.popular && (
                      <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">Popular</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="overflow-hidden py-2">
          <div
            className="flex gap-6 animate-[scroll-right_35s_linear_infinite] hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {/* Products Set 2 + Duplicate for seamless loop */}
            {[...productsRow2, ...productsRow2, ...productsRow2].map((product, index) => {
              const Icon = product.icon;
              const colors = colorClasses[product.color];
              return (
                <div
                  key={index}
                  className="w-72 p-6 rounded-2xl flex-shrink-0 group cursor-pointer bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} ${colors.hoverBg} group-hover:text-white transition-colors`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {product.isNew && (
                      <span className="px-3 py-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 rounded-full">Baru</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent"></div>
      </div>
    </section>
  );
}
