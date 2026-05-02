import type { Metadata } from "next";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { ContactExpertIntro } from "@/components/sections/ContactExpertIntro";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | Radhika Pharmaceutical Private Limited",
  description:
    "Contact Radhika Pharmaceutical Private Limited in Agar Malwa, Madhya Pradesh—for API and antibiotic product enquiries, partnerships, and support.",
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
