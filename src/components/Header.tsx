"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/app";
import "../app/tezami-header.css";

const translations: any = {
  KA: {
    book: "დაჯავშნა",
    nav: [
      { name: "მთავარი", href: "/" },
      { name: "გალერეა", href: "#gallery" },
      { name: "კონტაქტი", href: "#contact" },
    ],
  },
  EN: {
    book: "Book Now",
    nav: [
      { name: "Home", href: "/" },
      { name: "Gallery", href: "#gallery" },
      { name: "Contact", href: "#contact" },
    ],
  },
  RU: {
    book: "Забронировать",
    nav: [
      { name: "Главная", href: "/" },
      { name: "Галерея", href: "#gallery" },
      { name: "Контакты", href: "#contact" },
    ],
  },
};

export default function TezamiHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { language } = useAppContext();

  const pathname = usePathname();
  const router = useRouter();

  const currentLang = language?.toUpperCase() || "KA";
  const t = translations[currentLang] || translations.KA;

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
    setMobileOpen(false);
  };

  const whatsappNumber = "995599205588";
  const whatsappText =
    "Hello, I would like to check availability for Tezami Villa.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container" style={{ justifyContent: "space-between" }}>
          {/* მხოლოდ ლოგო, რომელიც გადადის მთავარ გვერდზე */}
          <Link href="/" className="logo">
            <Image
              src="/tezami-logo.png"
              alt="Tezami Villa"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* დესკტოპ ნავიგაციის ლინკები */}
          <nav
            className="desktop-nav"
            style={{ display: "flex", gap: "1.5rem" }}
          >
            {t.nav.map((item: any, index: number) => (
              <Link key={index} href={item.href} className="nav-link">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* მარჯვენა მხარე: ენები და ქმედება */}
          <nav
            className="nav"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          >
            <div className="lang">
              {["KA", "EN", "RU"].map((l) => (
                <button
                  key={l}
                  className={currentLang === l ? "active" : ""}
                  onClick={() => changeLanguage(l.toLowerCase())}
                >
                  {l}
                </button>
              ))}
            </div>

            <Link href={whatsappUrl} className="cta" target="_blank">
              {t.book}
            </Link>
          </nav>

          {/* მობილურის მენიუს ღილაკი */}
          <div className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </div>
        </div>
      </header>

      {/* მობილური მენიუ */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {/* მობილურის ნავ აითემები */}
        <nav
          className="mobile-nav-links"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {t.nav.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
              style={{
                color: "white",
                fontSize: "1.3rem",
                textDecoration: "none",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* მობილურის ენები */}
        <div
          className="lang"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {["KA", "EN", "RU"].map((l) => (
            <button
              key={l}
              className={currentLang === l ? "active" : ""}
              onClick={() => changeLanguage(l.toLowerCase())}
            >
              {l}
            </button>
          ))}
        </div>

        {/* მობილურის CTA (დაჯავშნა) */}
        <Link
          href={whatsappUrl}
          target="_blank"
          className="cta"
          onClick={() => setMobileOpen(false)}
          style={{
            display: "block",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "200px",
          }}
        >
          {t.book}
        </Link>
      </div>
    </>
  );
}
