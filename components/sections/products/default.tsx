import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
export default function products() {
  return (
    <section
      id="products"
      className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20"
    >
      <h2 className="max-w-[800px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
        Our Products
      </h2>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Asset Management System
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              A comprehensive asset management system designed to streamline the
              tracking, maintenance, and reporting of assets across government and private sectors.
            </p>
          </div>
          <Image
            src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -bottom-10 -right-6 rounded-2xl object-contain grayscale filter lg:-right-[20%]"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            e-Commerce & POS
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Simplify your online sales process with our E-commerce POS system in Malaysia.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
              HRMS & Payroll System
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              All-in-one Payroll Solution — Compliance with EPF, SOCSO, EIS &
              Tax
            </p>
          </div>
          <Image
            src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[10%]"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            e-learning platform
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            An e-learning platform is an integrated and interactive set of
            online services that provide instructors, trainers, learners, and
            those involved in the training
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
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
        </WobbleCard>
      </div>
    </section>
  );
}