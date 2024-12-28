import { PageTransition } from "@/components/PageTransition";
import { AboutHero } from "@/components/sections/about/hero";
import { TeamSection } from "@/components/sections/about/team";

export default function AboutPage() {
  return (
    <PageTransition>
        <main className="">
            <AboutHero />
            <TeamSection />
        </main>
    </PageTransition>
  );
}
