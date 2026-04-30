"use client";

import FAQ from "@/components/faq";
import About from "@/components/about";
import Footer from "@/components/Footer";
import Gallery from "@/components/gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Services } from "@/components/services";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";

export default function Home() {
  const { loading, language } = useAppContext();

  return (
    <main
      style={{ display: loading ? "none" : "flex" }}
      className={`w-full flex-col items-center ${
        language === "ru" ? "font-geoFont" : "font-mineFont"
      }`}
    >
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Footer />
    </main>
  );
}
