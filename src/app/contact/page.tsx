import type { Metadata } from "next";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { ContactExpertIntro } from "@/components/sections/ContactExpertIntro";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | Radhika Pharma",
  description:
    "Reach Radhika Pharma for product enquiries, partnerships, and support. Expert guidance, secure communication, and responsive service.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-[72px] lg:pt-[84px]">
          <ContactExpertIntro />
          <ContactChannels />
        </div>
      </main>
    </>
  );
}
