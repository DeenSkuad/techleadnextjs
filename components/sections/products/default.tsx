// src/components/sections/products/default.tsx
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Products() {
  const t = useTranslations('products');

  const HoverButton = ({ href }: { href: string }) => (
    <div className="absolute bottom-6 left-6 opacity-0 transition-opacity group-hover:opacity-100">
      <Link href={href} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20">
        <span>Learn More</span>
        <FiArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );

  return (
    <section
      id="products"
      className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20"
    >
      <h2 className="max-w-[800px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
        {t('solutions.enterprise')}
      </h2>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
        <WobbleCard
          containerClassName="group col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] relative"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              {t('assetmanagement.title')}
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              {t('assetmanagement.description')}
            </p>
          </div>
          <Image
            src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -bottom-10 -right-6 rounded-2xl object-contain grayscale filter lg:-right-[20%]"
          />
          <HoverButton href="/products/assetmanagement" />
        </WobbleCard>

        <WobbleCard containerClassName="group col-span-1 min-h-[300px] relative">
          <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            {t('ecommerce.title')}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            {t('ecommerce.description')}
          </p>
          <HoverButton href="/products/ecommerce" />
        </WobbleCard>

        <WobbleCard containerClassName="group col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
          <div className="max-w-sm">
            <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
              {t('hrms.title')}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              {t('hrms.description')}
            </p>
          </div>
          <Image
            src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[10%]"
          />
          <HoverButton href="/products/hrms" />
        </WobbleCard>

        <WobbleCard containerClassName="group col-span-1 min-h-[300px] relative">
          <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            e-learning platform
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            An e-learning platform is an integrated and interactive set of
            online services that provide instructors, trainers, learners, and
            those involved in the training
          </p>
          <HoverButton href="/products/elearning" />
        </WobbleCard>

        <WobbleCard
          containerClassName="group col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px] relative"
        >
          <div className="max-w-xs">
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Inventory Management System
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              streamline the tracking, maintenance, and reporting of assets
              across your organization.
            </p>
          </div>
          <Image
            src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -bottom-10 -right-4 rounded-2xl object-contain grayscale filter lg:-right-[20%]"
          />
          <HoverButton href="/products/inventoryandwarehouse" />
        </WobbleCard>
      </div>
    </section>
  );
}
