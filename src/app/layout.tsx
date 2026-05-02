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
  title: "Radhika Pharmaceutical Private Limited | API & Antibiotics",
  description:
    "Radhika Pharmaceutical Private Limited is an API manufacturer established in 2024, focused on high-quality finished products for antibiotics and public health in India and worldwide.",
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
