"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/app";
import "../app/tezami-header.css";

const translations: any = {
  GE: {
    about: "ჩვენს შესახებ",
    rooms: "სერვისები",
    gallery: "გალერეა",
    contact: "კონტაქტი",
    book: "დაჯავშნა",
  },
  EN: {
    about: "About",
    rooms: "Services",
    gallery: "Gallery",
    contact: "Contact",
    book: "Reserve",
  },
  RU: {
    about: "О нас",
    rooms: "Services",
    gallery: "Галерея",
    contact: "Контакт",
    book: "Бронировать",
  },
};

export default function TezamiHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { language } = useAppContext();

  const pathname = usePathname();
  const router = useRouter();

  // ✅ პირდაპირ ვიყენებთ language-ს (hydration-safe)
  const currentLang = language?.toUpperCase() || "GE";
  const t = translations[currentLang] || translations.GE;

  const navLinks = [
    { href: "#about", label: t.about },
    { href: "#services", label: t.rooms },
    { href: "#gallery", label: t.gallery },
    { href: "#contact", label: t.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    localStorage.setItem("sarko-events:language", lang);
    Cookies.set("language", lang, { expires: 30, path: "/" });

    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="social">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>

          <Link href="/" className="logo">
            <Image
              src="/tezami-logo.png"
              alt="Tezami Villa"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>

          <nav className="nav">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}

            <div className="lang">
              {["GE", "EN", "RU"].map((l) => (
                <button
                  key={l}
                  className={currentLang === l ? "active" : ""}
                  onClick={() => changeLanguage(l.toLowerCase())}
                >
                  {l}
                </button>
              ))}
            </div>

            <Link href="#contact" className="cta">
              {t.book}
            </Link>
          </nav>

          <div className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
