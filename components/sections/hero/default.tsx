"use client";

import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
// import { ArrowRightIcon } from "lucide-react";
import { Section } from "../../ui/section";
// import { Mockup, MockupFrame } from "../../ui/mockup";
// import Glow from "../../ui/glow";
// import Image from "next/image";
// import { siteConfig } from "@/config/site";
// import { useTheme } from "next-themes";
import Github from "../../logos/github";
// import dynamic from 'next/dynamic';
import Spline from "@splinetool/react-spline";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/components/ui/animated-modal";
import ContactForm from "@/components/sections/contact/default";
import { useTranslations } from 'next-intl';

// Dynamically import the Spline component to disable SSR
// const Spline = dynamic(() => import("@splinetool/react-spline").then((mod) => mod.default), {
//   ssr: false,  // Disable SSR
// });

export default function Hero() {
  const t = useTranslations();
  const scrollToSection = useScrollToSection();

  // const { resolvedTheme } = useTheme();
  // let src;

  // switch (resolvedTheme) {
  //   case "light":
  //     src = "/app-light.png";
  //     break;
  //   case "dark":
  //     src = "/app-dark.png";
  //     break;
  //   default:
  //     src = "/app-dark.png";
  //     break;
  // }

  return (
    <Section className="fade-bottom relative min-h-screen overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="fixed inset-0 h-full w-full bg-background/80">
        <Spline
          scene="https://prod.spline.design/9kC9g55Nn9a8PFPr/scene.splinecode"
          style={{ width: "100%", height: "100%", opacity: "0.4" }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen">
        <div className="container mx-auto flex max-w-container flex-col gap-12 pt-24 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                {t('hero.badge')}
              </span>
              <span className="h-1 w-1 animate-[blink_1s_ease-in-out_infinite] rounded-full bg-green-500" />
            </Badge>
            <div>
              <h1 className="text-md relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-semibold text-transparent drop-shadow-2xl sm:text-xl md:text-3xl">
                {t('hero.subtitle')}
              </h1>
              <h1 className="text-md relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-xl sm:leading-tight md:text-8xl md:leading-tight">
                {t('hero.title')}
              </h1>
            </div>
            <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-sm">
              {t('hero.description')}
            </p>
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection("ourwork")}
              >
                {t('hero.buttons.ourWork')}
              </Button>
              <div className="flex items-center justify-center">
                <Modal>
                  <ModalTrigger>
                    <Button variant="glow" size="lg">
                      <Github className="mr-2 h-4 w-4" /> {t('hero.buttons.hireUs')}
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
            <div className="relative pt-12">
              {/* <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup type="responsive">
                  <Image
                    src={src}
                    alt="Launch UI app screenshot"
                    width={1248}
                    height={765}
                  />
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              /> */}
              {/* <Spline
                scene="https://prod.spline.design/9kC9g55Nn9a8PFPr/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
