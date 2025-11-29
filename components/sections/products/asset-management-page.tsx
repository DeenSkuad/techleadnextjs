"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import {
  FileText,
  Clock,
  AlertTriangle,
  QrCode,
  Shield,
  BarChart,
  Calendar,
  LayoutDashboard,
  FileCheck,
  Smartphone,
  Check,
  ChevronDown,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
    FileText,
    Clock,
    AlertTriangle,
    QrCode,
    Shield,
    BarChart,
    Calendar,
    LayoutDashboard,
    FileCheck,
    Smartphone,
  };

// Logo placeholders for trusted by section
const trustedLogos = [
  { name: "MADA", src: "/images/clients/logo/mada.png" },
  {
    name: "MPSP",
    src: "/images/clients/logo/majlis-perbandaran-sungai-petani.png",
  },
  { name: "MPSP", src: "/images/clients/logo/mpsp.png" },
  {
    name: "Perbadanan Putrajaya",
    src: "/images/clients/logo/perbadanan-putrajaya.png",
  },
  {
    name: "PICOMS",
    src: "/images/clients/logo/kolejuniversitiantarabangsapicoms.png",
  },
  { name: "Emesys", src: "/images/clients/logo/emesys.png" },
  { name: "Bank Rakyat", src: "/images/clients/logo/bank-rakyat.jpg" },
  {
    name: "George Town",
    src: "/images/clients/logo/seal-of-george-town.svg.png",
  },
];

export function AssetManagementPage() {
  const t = useTranslations("assetManagement");

  const problemItems = t.raw("problem.items") as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  const solutionFeatures = t.raw("solution.features") as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  const howItWorksSteps = t.raw("howItWorks.steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  const featureItems = t.raw("features.items") as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  const pricingPlans = t.raw("pricing.plans") as Array<{
    name: string;
    price: string;
    currency?: string;
    period?: string;
    popular?: boolean;
    description: string;
    features: string[];
  }>;

  const faqItems = t.raw("faq.items") as Array<{
    question: string;
    answer: string;
  }>;

  // Get testimonials from translations
  const testimonials = t.raw("testimonialsMarquee.items") as Array<{
    name: string;
    role: string;
    quote: string;
    avatar: string;
  }>;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pb-20 pt-32 lg:pb-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex w-auto items-center space-x-2 rounded-full bg-red-500/10 px-2 py-1 ring-1 ring-red-500/30 whitespace-pre"
            >
              <div className="w-fit rounded-full bg-white px-4 py-0.5 text-center text-xs font-medium text-red-400 sm:text-sm">
                {t("hero.badgeLabel")}
              </div>
              <p className="text-xs font-medium text-red-500 sm:text-sm">
                {t("hero.badgeText")}
              </p>
              
            </motion.a>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              {t("hero.title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="rounded-lg bg-red-500 px-8 py-3 font-semibold text-white transition-all hover:bg-red-600"
              >
                {t("hero.cta.primary")}
              </Link>
              <Link
                href="https://wa.me/60123456789"
                className="rounded-lg border border-border px-8 py-3 font-semibold transition-all hover:bg-muted"
              >
                {t("hero.cta.secondary")}
              </Link>
            </motion.div>

            {/* Hero Image - Laptop Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative mx-auto max-w-4xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-2xl">
                <Image
                  src="/images/products/Assets_management.png"
                  alt="Asset Management Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="border-y border-border py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="mb-6 text-center text-muted-foreground">{t("hero.trusted")}</p>
        </div>
        <div className="relative">
          
          <Marquee duration={30} pauseOnHover={false}>
            {trustedLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center mx-8">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={80}
                  className="h-16 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
          </Marquee>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
              {t("problem.sectionLabel")}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("problem.title")}
              <span className="text-red-500">{t("problem.titleHighlight")}</span>
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {problemItems.map((item, index) => {
              const Icon = iconMap[item.icon] || FileText;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                    <Icon className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
              {t("solution.sectionLabel")}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("solution.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("solution.subtitle")}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {solutionFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Shield;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
              {t("howItWorks.sectionLabel")}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("howItWorks.title")}
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Testimonial Section */}
      <section className="hidden bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
              {t("singleTestimonial.sectionLabel")}
            </p>
            {/* <h2 className="text-3xl md:text-4xl font-bold">
              {t('testimonial.name').split(' ')[0]} {t('singleTestimonial.title')}
            </h2> */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl text-center"
          >
            {/* <div className="text-6xl text-red-500 mb-4">&ldquo;</div> */}
            <p className="mb-6 text-xl italic text-muted-foreground md:text-2xl">
              {t("testimonial.quote")}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 font-bold text-red-500">
                AR
              </div>
              <div className="text-left">
                <p className="font-semibold">{t("testimonial.name")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("testimonial.role")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
              {t("features.sectionLabel")}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("features.title")}
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureItems.map((feature, index) => {
              const Icon = iconMap[feature.icon] || LayoutDashboard;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="mb-2 font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="overflow-hidden bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto mb-12 px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
            {t("testimonialsMarquee.sectionLabel")}
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            {t("testimonialsMarquee.title")}
          </h2>
        </div>

        <Marquee className="mb-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="mx-4 w-[350px] rounded-2xl border border-border bg-card p-6"
            >
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {item.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-sm font-semibold text-red-500">
                  {item.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{item.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee reverse>
          {[...testimonials].reverse().map((item, i) => (
            <div
              key={i}
              className="mx-4 w-[350px] rounded-2xl border border-border bg-card p-6"
            >
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {item.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-sm font-semibold text-red-500">
                  {item.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{item.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
              {t("pricing.sectionLabel")}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("pricing.title")}
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "scale-105 border-2 border-red-500/50 bg-gradient-to-b from-red-500/10 to-background"
                    : "border border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-4 flex items-center gap-1 rounded bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    <Star className="h-3 w-3 fill-white" />
                    Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    {plan.currency && (
                      <span className="text-2xl font-bold">
                        {plan.currency}
                      </span>
                    )}
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-red-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-lg border py-3.5 font-semibold transition-all ${
                    plan.popular
                      ? "border-red-500 bg-red-500 text-white hover:bg-red-600"
                      : "border-border bg-transparent text-foreground hover:bg-muted/50"
                  }`}
                >
                  {t("pricing.cta")}
                </button>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  {plan.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
              {t("faq.sectionLabel")}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              {t("faq.sectionTitle")}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-red-500/50"
                >
                  <AccordionTrigger className="py-4 text-left hover:no-underline">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* <p className="mt-8 text-center text-muted-foreground">
            {t("stillHaveQuestions")}{" "}
            <a
              href="mailto:support@tech-lead.my"
              className="text-red-500 hover:underline"
            >
              support@tech-lead.my
            </a>
          </p> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("cta.title")}
            </h2>
            <p className="mb-8 text-muted-foreground">{t("cta.subtitle")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-red-500 px-8 py-3 font-semibold text-white transition-all hover:bg-red-600"
              >
                {t("cta.primary")}
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-border px-8 py-3 font-semibold transition-all hover:bg-muted"
              >
                {t("cta.secondary")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
