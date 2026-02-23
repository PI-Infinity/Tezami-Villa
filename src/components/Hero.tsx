"use client";
import Link from "next/link";
import { useAppContext } from "@/context/app";
import "../app/tezami-hero.css";

const translations: any = {
  GE: {
    subtitle: "პრივატული აუზი • მთის ვილა",
    location: "წყავკისი • ტყე • მდინარე • მთები",
    cta: "დაჯავშნა",
  },
  EN: {
    subtitle: "Private Pool Mountain Villa",
    location: "Tskhvarichamia • Forest • River • Mountains",
    cta: "Reserve Villa",
  },
  RU: {
    subtitle: "Приватный бассейн • Горная Вилла",
    location: "Цхваричамия • Лес • Река • Горы",
    cta: "Забронировать виллу",
  },
};

export default function Hero() {
  const { language } = useAppContext();
  const t = translations[language.toUpperCase()] || translations.GE;

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

          <Link href="#contact" className="cta">
            {t.cta}
          </Link>
        </div>

        <div className="scroll">Scroll</div>
      </section>
    </>
  );
}
