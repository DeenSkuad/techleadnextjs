"use client";

import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";
import Github from "../../logos/github";
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


// spline


export default function Hero() {
  const t = useTranslations('hero');
  const scrollToSection = useScrollToSection();



  return (
    <Section className="flex items-center justify-center fade-bottom h-screen relative h-screen overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="absolute inset-0 h-full w-screen bg-background/90 opacity-60 ">
        {/* <Spline
          scene="https://prod.spline.design/HPZihHdNfp-iLgPy/scene.splinecode" 
          className="absolute top-0 inset-0 h-1/2 border w-full"
        /> */}
      </div>

      <div className="relative z-10 ">
        <div className="container mx-auto flex max-w-container flex-col gap-2 pt-24 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                {t('badge')}
              </span>
              <span className="h-1 w-1 animate-[blink_1s_ease-in-out_infinite] rounded-full bg-green-500" />
            </Badge>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-md relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-semibold text-transparent drop-shadow-2xl sm:text-xl md:text-3xl">
                {t('subtitle')}
              </h1>
              <h1 className="text-4xl relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-xl sm:leading-tight md:text-8xl md:leading-tight">
                {t('title')}
              </h1>
            </div>
            <p className="md:text-2xl  relative z-10 max-w-[550px] animate-appear text-muted-foreground opacity-0 delay-100 sm:text-sm">
              {t('description')}
            </p>
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection("ourwork")}
              >
                {t('buttons.ourWork')}
              </Button>
              <div className="flex items-center justify-center">
                <Modal>
                  <ModalTrigger>
                    <Button variant="glow" size="lg">
                      <Github className="mr-2 h-4 w-4" /> {t('buttons.hireUs')}
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
            <div className="relative pt-12"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
