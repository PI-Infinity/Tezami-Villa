"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const translations: any = {
  GE: {
    about: "ჩვენს შესახებ",
    rooms: "საძინებლები",
    gallery: "გალერეა",
    contact: "კონტაქტი",
    book: "დაჯავშნა",
  },
  EN: {
    about: "About",
    rooms: "Rooms",
    gallery: "Gallery",
    contact: "Contact",
    book: "Reserve",
  },
  RU: {
    about: "О нас",
    rooms: "Комнаты",
    gallery: "Галерея",
    contact: "Контакт",
    book: "Бронировать",
  },
};

export default function TezamiHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<any>("GE");

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.about },
    { href: "#rooms", label: t.rooms },
    { href: "#gallery", label: t.gallery },
    { href: "#contact", label: t.contact },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400&display=swap');

        .header {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          padding: 2.2rem 0;
          transition: all .4s ease;
        }

        .header.scrolled {
          background: rgba(12,14,13,0.82);
          backdrop-filter: blur(18px);
          padding: 1.2rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-family: 'DM Serif Display', serif;
          font-size: 1.6rem;
          letter-spacing: 10px;
          color: #EAE3D2;
          text-decoration: none;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .nav a {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.82rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: .3s;
        }

        .nav a:hover {
          color: #EAE3D2;
        }

        .cta {
          padding: 10px 28px;
          border: 1px solid rgba(234,227,210,0.6);
          border-radius: 40px;
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #EAE3D2;
          transition: .4s;
        }

        .cta:hover {
          background: rgba(234,227,210,0.08);
        }

        .lang {
          display: flex;
          gap: 12px;
          margin-left: 40px;
          font-size: 0.7rem;
          letter-spacing: 2px;
        }

        .lang button {
          background: none;
          border: none;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: .3s;
        }

        .lang button.active {
          color: #EAE3D2;
        }

        .social {
          display: flex;
          gap: 18px;
        }

        .social svg {
          color: rgba(255,255,255,0.5);
          transition: .3s;
          font-size: 0.9rem;
        }

        .social svg:hover {
          color: #EAE3D2;
        }

        @media(max-width: 1100px){
          .nav { display: none; }
        }
      `}</style>

      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="social">
            <FaInstagram />
            <FaFacebookF />
          </div>

          <Link href="/" className="logo">
            TV
          </Link>

          <div className="nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}

            <div className="lang">
              {["GE", "EN", "RU"].map((l) => (
                <button
                  key={l}
                  className={lang === l ? "active" : ""}
                  onClick={() => setLang(l)}
                >
                  {l}
                </button>
              ))}
            </div>

            <Link href="#contact" className="cta">
              {t.book}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
