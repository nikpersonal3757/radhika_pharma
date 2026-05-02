import type { Metadata } from "next";
import { AboutMottoVisionValues } from "@/components/sections/AboutMottoVisionValues";
import { AboutSection } from "@/components/sections/AboutSection";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "About Us | Radhika Pharmaceutical Private Limited",
  description:
    "Learn about Radhika Pharma—API manufacturing for antibiotics since 2024, with a motto of quality and reliability for national and international public health.",
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
