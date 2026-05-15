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
  GE: {
    book: "დაჯავშნა",
  },
  EN: {
    book: "Reserve",
  },
  RU: {
    book: "Бронировать",
  },
};

export default function TezamiHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { language } = useAppContext();

  const pathname = usePathname();
  const router = useRouter();

  const currentLang = language?.toUpperCase() || "GE";
  const t = translations[currentLang] || translations.GE;

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

          {/* მარჯვენა მხარე: ენები და ქმედება */}
          <nav
            className="nav"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          >
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

          {/* მობილურის მენიუს ღილაკი */}
          <div className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </div>
        </div>
      </header>

      {/* მობილური მენიუ (ენების გადასართავად და დასაჯავშნად) */}
      <div
        style={{ zIndex: "100" }}
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
      >
        <div
          className="lang"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {["GE", "EN", "RU"].map((l) => (
            <button
              key={l}
              className={currentLang === l ? "active" : ""}
              onClick={() => changeLanguage(l.toLowerCase())}
              style={{ color: "white", fontSize: "1.2rem" }}
            >
              {l}
            </button>
          ))}
        </div>

        <Link
          href="#contact"
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
