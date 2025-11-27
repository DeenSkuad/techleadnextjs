import React from "react";

import { ContainerScroll } from "./ui/container-scroll-animation";
import { getProductContent } from "@/lib/products";
// import { motion, useInView } from "framer-motion";

const images = {
  assetmanagement: "/images/products/Assets_management.png",
  // hrms: "/images/products/hrms_banner.png",
  // ecommerce: "/images/products/ecommerce_banner.png",
  // elearning: "/images/products/elearning_banner.png",
  // inventoryandwarehouse: "/images/products/inventory_banner.png",
};

// export const BlurIn = ({ children }: { children: React.ReactNode }) => {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true });
//   return (
//     <motion.h2
//       ref={ref}
//       initial={{ filter: "blur(20px)", opacity: 0 }}
//       animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
//       transition={{ duration: 1.2 }}
//       className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
//     >
//       {children}
//     </motion.h2>
//   );
// };

export async function HeroScroll({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const content = await getProductContent(params.slug, params.locale);
  if (!content) return null;

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {content.hero.title}
            </h1>
            <h2 className="text-xl font-medium text-gray-600 dark:text-gray-300 mt-2">
              {content.hero.subtitle}
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 mt-4">
              {content.hero.description}
            </p>
          </>
        }
      >
        <div className="flex justify-center items-center h-full">
          {images[params.slug as keyof typeof images] ? (
            <img
              src={images[params.slug as keyof typeof images]}
              alt={content.hero.imageAlt}
              className="rounded-2xl object-cover  h-full object-left-top"
            />
          ) : (
            "<Coming Soon />"
          )}
        </div>
      </ContainerScroll>
    </div>
  );
}