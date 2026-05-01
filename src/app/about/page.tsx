import type { Metadata } from "next";
import { AboutMottoVisionValues } from "@/components/sections/AboutMottoVisionValues";
import { AboutSection } from "@/components/sections/AboutSection";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "About Us | Radhika Pharma",
  description:
    "Radhika Pharma partners across India with quality-assured pharmaceutical products, rigorous standards, and trusted distribution.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
        <AboutMottoVisionValues />
      </main>
    </>
  );
}
