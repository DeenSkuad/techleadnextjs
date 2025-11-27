import { Section } from "../../ui/section";
import { Button } from "../../ui/button";

import { siteConfig } from "@/config/site";
import Glow from "../../ui/glow";
import { Badge } from "../../ui/badge";
import { useTranslations } from "next-intl";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export default function CTA() {
  const t = useTranslations("hero");
  const scrollToSection = useScrollToSection();
  return (
    <Section className="group relative overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="text-3xl font-semibold sm:text-5xl">
          Looking To Expand Your Business?
        </h2>
        <p className="text-base/6">Let’s start making something awesome!</p>
        <Badge variant="outline" className="animate-appear">
          <span className="text-muted-foreground">{t("badge")}</span>
          <span className="h-1 w-1 animate-[blink_1s_ease-in-out_infinite] rounded-full bg-green-500" />
        </Badge>
        <Button variant="default" size="lg" asChild>
          <a
            href="https://wa.me/601172402173?text=Hi%2C%20I%20am%20interested%20to%20know%20more%20about%20your%20services."
            className=""
            target="_blank"
          >
            Hire Us
          </a>
        </Button>
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
