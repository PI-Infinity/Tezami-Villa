"use client";
import Link from "next/link";
import { useAppContext } from "@/context/app";
import "../app/tezami-hero.css";

const translations: any = {
  GE: {
    subtitle: "ვილა მთაში • თბობადი აუზი",
    location: "საბადურის ტყე • მდინარე",
    cta: "დაჯავშნა",
  },
  EN: {
    subtitle: "Mountain Villa • Heated Pool",
    location: "Sabaduri Forest • River",
    cta: "Book Now",
  },
  RU: {
    subtitle: "Горная вилла • Подогреваемый бассейн",
    location: "Сабадурский лес • Река",
    cta: "Забронировать",
  },
};

export default function Hero() {
  const { language } = useAppContext();
  const t = translations[language.toUpperCase()] || translations.GE;

  const whatsappNumber = "995599205588";
  const whatsappText =
    "Hello, I would like to check availability for Tezami Villa.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      <section className="hero">
        <img src="/tezami-hero.jpeg" alt="Tezami Villa" />
        <div className="overlay-dark" />
        <div className="overlay-light" />

        <div className="content">
          <h1 className="title">TEZAMI VILLA</h1>
          <div className="subtitle">{t.subtitle}</div>
          <div className="location">{t.location}</div>

          <Link href={whatsappUrl} className="cta" target="_blank">
            {t.cta}
          </Link>
        </div>

        <div className="scroll">Scroll</div>
      </section>
    </>
  );
}
