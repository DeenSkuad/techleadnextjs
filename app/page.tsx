import Navbar from "../components/sections/navbar/default";
import Hero from "../components/sections/hero/default";
import Logos from "../components/sections/logos/default";
import Items from "../components/sections/items/default";
import FAQ from "../components/sections/faq/default";
import CTA from "../components/sections/cta/default";
import Footer from "../components/sections/footer/default";
import Services from "../components/sections/services/default";
import Products from "../components/sections/works/default";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Logos />
      <Items />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
