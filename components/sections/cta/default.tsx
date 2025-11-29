"use client";

import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

import Glow from "../../ui/glow";
import { Badge } from "../../ui/badge";
import { useTranslations } from "next-intl";

// Team member avatars for floating effect
const teamAvatars = [
  { src: "/images/team/Razlan.png", name: "Razlan", position: "top-[8%] left-[42%]", size: "h-20 w-20" },
  { src: "/images/team/Zahrin.png", name: "Zahrin", position: "top-[8%] right-[42%]", size: "h-20 w-20" },
  { src: "/images/team/Ammar.png", name: "Ammar", position: "bottom-[35%] left-[38%]", size: "h-16 w-16" },
  { src: "/images/team/Din.png", name: "Din", position: "bottom-[35%] right-[38%]", size: "h-16 w-16" },
];

export default function CTA() {
  const t = useTranslations();

  return (
    <Section className="group relative overflow-hidden min-h-[500px]">
      {/* Floating Team Avatars */}
      {teamAvatars.map((avatar, index) => (
        <motion.div
          key={avatar.name}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`absolute ${avatar.position} hidden md:block z-0`}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="rounded-full border-2 border-white/20 shadow-lg overflow-hidden"
          >
            <Image
              src={avatar.src}
              alt={avatar.name}
              width={80}
              height={80}
              className={`${avatar.size} object-cover`}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Main CTA Content */}
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold sm:text-5xl"
        >
          {t("cta.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base/6 text-muted-foreground"
        >
          {t("cta.subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">{t("hero.badge")}</span>
            <span className="h-1 w-1 animate-[blink_1s_ease-in-out_infinite] rounded-full bg-green-500" />
          </Badge>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="default" size="lg" asChild>
            <a
              href="https://wa.me/601172402173?text=Hi%2C%20I%20am%20interested%20to%20know%20more%20about%20your%20services."
              className=""
              target="_blank"
            >
              {t("cta.hireUs")}
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
