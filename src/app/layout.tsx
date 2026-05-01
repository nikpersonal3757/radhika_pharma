import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Radhika Pharma | Health Through Scientific Innovation",
  description:
    "Radhika Pharma delivers pharmaceutical excellence through rigorous quality assurance, research-driven formulations, and certified manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
