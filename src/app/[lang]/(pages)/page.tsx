"use client";

import FAQ from "@/components/faq";
import About from "@/components/Features";
import FinalCTA from "@/components/finalCTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/howWorks";
import Prices from "@/components/readyToUse";
import Trust from "@/components/trust";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";

export default function Home() {
  const { loading, language } = useAppContext();
  const pathname = usePathname();

  return (
    <main
      style={{ display: loading ? "none" : "flex" }}
      className={`w-full flex-col items-centerm ${
        language === "ru" ? "font-geoFont" : "font-mineFont"
      }`}
    >
      <Header />
      <Hero />
      <About />
      <Gallery />
      <HowItWorks />

      <Prices />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
