import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { TeamSection } from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "Our Team | Radhika Pharma",
  description:
    "Meet the leadership team guiding Radhika Pharma—strategy, operations, marketing, and technology for trusted pharmaceutical excellence.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <TeamSection />
      </main>
    </>
  );
}
