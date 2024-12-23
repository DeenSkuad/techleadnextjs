import { AnimatedTitle } from "@/components/AnimatedTitle";
import { AnimatedDescription } from "@/components/AnimatedDescription";
import { navigationItems } from "@/config/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import CTA from "@/components/sections/cta/default";
import Footer from "@/components/sections/footer/default";


export function generateStaticParams() {
  return navigationItems.services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const serviceInfo = navigationItems.services.find(
    service => service.slug === params.slug
  );
  
  if (!serviceInfo) return null;

  return (
    <div className="">
      <Navbar />
      <div className="py-20 px-4">
        <AnimatedTitle>
          <h1 className="text-4xl md:text-6xl font-bold text-center text-slate-200">
            {serviceInfo.title}
          </h1>
        </AnimatedTitle>
        <AnimatedDescription>
          {serviceInfo.description}
        </AnimatedDescription>
      </div>

      <div className="text-center py-12">
        <Link 
          href="/services" 
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to All Services
        </Link>
      </div>
      <CTA />
      <Footer />
    </div>
  );
} 