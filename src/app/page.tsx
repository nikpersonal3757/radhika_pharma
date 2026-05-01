import { Navbar } from "@/components/layout/Navbar";
import { ClinicalTrialsHighlight } from "@/components/sections/ClinicalTrialsHighlight";
import { Hero } from "@/components/sections/Hero";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { ResearchStages } from "@/components/sections/ResearchStages";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResearchStages />
        <ClinicalTrialsHighlight />
        <ProductsShowcase />
        {/* Hash targets for nav & hero CTAs until sections ship */}
        <div id="partners" className="scroll-mt-[100px]" />
      </main>
    </>
  );
}
