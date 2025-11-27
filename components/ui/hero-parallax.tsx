"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  works,
}: {
  works: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  }[];
}) => {
  const firstRow = works.slice(0, 5);
  const secondRow = works.slice(5, 10);
  const thirdRow = works.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="relative flex h-[300vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <motion.div
    
    >
      <div className="left-0 top-0 mx-auto w-full max-w-7xl px-4 py-10 md:py-40">
        <h1 className="text-2xl font-bold dark:text-white md:text-7xl">
          The Ultimate <br /> development studio
        </h1>
        <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
          We build beautiful products with the latest technologies and
          frameworks. We are a team of passionate developers and designers that
          love to build amazing products.
        </p>
      </div>
    </motion.div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    description: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product border border-white/10 relative flex-shrink-0 w-[90vw] sm:w-[22rem] md:w-1/2 h-1/2 rounded-xl overflow-hidden shadow-md bg-neutral-900"
    >
      <Link href={product.link} className="block h-full w-full ">
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          alt={product.title}
          className=" h-full w-full object-contain transition-transform duration-500 group-hover/product:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300"></div>

        {/* Content Overlay */}
        {/* App Store Icon (optional) */}
        {/* <div className="absolute bottom-4 border flex gap-4 left-4 text-white opacity-20 hover:opacity-100 text-xl">
          <Image
            src="/images/apple.svg"
            alt="App Store"
            width={22}
            height={22}
            className="transition-opacity duration-300 group-hover/product:opacity-100"
          />
          <Image
            src="/images/google-play.svg"
            alt="App Store"
            width={22}
            height={22}
            className="transition-opacity duration-300 group-hover/product:opacity-100"
          />
        </div> */}
      </Link>
    </motion.div>
  );
};
