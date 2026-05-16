"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useAppContext } from "@/context/app";

const translations: any = {
  KA: {
    tagline: "პრემიუმ კლასის განცალკევებული ვილა",
    description:
      "გამოსცადეთ კომფორტი, სიმშვიდე და პრემიუმ დასვენება ულამაზეს გარემოში.",
    btnCheck: "ხელმისაწვდომობის შემოწმება",
    btnCall: "დარეკვა",
    explore: "ნავიგაცია",
    about: "ვილის შესახებ",
    gallery: "გალერეა",
    services: "სერვისები",
    contact: "კონტაქტი",
    location: "საქართველო, საბადურის ტყე",
    note: "კერძო ჯავშნებისა და განსაკუთრებული მოთხოვნებისთვის დაგვიკავშირდით ნებისმიერ დროს.",
    rights: "ყველა უფლება დაცულია.",
    terms: "წესები და პირობები",
    privacy: "კონფიდენციალურობა",
  },
  EN: {
    tagline: "Private Premium Retreat",
    description:
      "Experience comfort, privacy, and premium relaxation in a peaceful setting.",
    btnCheck: "Check Availability",
    btnCall: "Call Now",
    explore: "Explore",
    about: "About The Villa",
    gallery: "Gallery",
    services: "Services",
    contact: "Contact",
    location: "Georgia, Sabaduri Forest",
    note: "For private bookings and special requests, contact us anytime.",
    rights: "All rights reserved.",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
  },
  RU: {
    tagline: "Уединенная Вилла Премиум-Класса",
    description:
      "Испытайте комфорт, уединение и премиальный отдых в атмосфере полного спокойствия.",
    btnCheck: "Проверить свободные даты",
    btnCall: "Позвонить",
    explore: "Навигация",
    about: "О вилле",
    gallery: "Галерея",
    services: "Услуги",
    contact: "Контакты",
    location: "Грузия, Сабадурский лес",
    note: "Для частного бронирования и особых запросов свяжитесь с нами в любое время.",
    rights: "Все права защищены.",
    terms: "Условия использования",
    privacy: "Политика конфиденциальности",
  },
};

export default function Footer() {
  const whatsappNumber = "995599205588";
  const whatsappText =
    "Hello, I would like to check availability for Tezami Villa.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  const phone = "+995599205588";
  const phoneUrl = `tel:${phone.replace(/\s/g, "")}`;

  const { language } = useAppContext();

  // ენის იდენტიფიცირება (ითვალისწინებს "ka" და "KA" ქეისებს)
  const currentLang = language?.toUpperCase() || "KA";
  const t =
    translations[currentLang === "GE" ? "KA" : currentLang] || translations.KA;

  return (
    <footer
      className="w-full bg-[#141a17] border-t border-white/10"
      id="contact"
    >
      <div className="max-w-[1400px] mx-auto py-16 px-6 sm:px-8 lg:px-16 flex flex-col gap-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* BRAND */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 relative">
                <Image
                  src="/tezami-logo.png"
                  alt="Tezami Villa logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <div className="text-white font-extrabold tracking-wider text-lg">
                  TEZAMI VILLA
                </div>
                <div className="text-xs text-white/50 uppercase tracking-[0.3em]">
                  {t.tagline}
                </div>
              </div>
            </div>

            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              {t.description}
            </p>

            {/* QUICK ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold text-sm bg-[#f1f1f1] text-black shadow-xl shadow-black/30 hover:brightness-110 active:scale-[0.98] transition"
              >
                <MessageCircle size={18} />
                {t.btnCheck}
              </a>

              <a
                href={phoneUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold text-sm bg-white/10 text-white border border-white/15 hover:bg-white/15 active:scale-[0.98] transition"
              >
                <Phone size={18} />
                {t.btnCall}
              </a>
            </div>
          </div>

          {/* PAGES */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <div className="text-white font-bold text-sm uppercase tracking-wider">
              {t.explore}
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#about"
                className="text-white/70 hover:text-white transition"
              >
                {t.about}
              </a>
              <a
                href="#gallery"
                className="text-white/70 hover:text-white transition"
              >
                {t.gallery}
              </a>
              <a
                href="#services"
                className="text-white/70 hover:text-white transition"
              >
                {t.services}
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition"
              >
                {t.contact}
              </a>
            </div>
          </div>

          {/* CONTACT & SOCIAL */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="text-white font-bold text-sm uppercase tracking-wider">
              {t.contact}
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {t.location}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                {phone}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://www.facebook.com/TezamiVilla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 border border-white/10 bg-white/5 text-white/75 hover:text-white hover:bg-white/10 transition"
              >
                <Facebook size={18} /> Facebook
              </a>
              <a
                href="https://www.instagram.com/tezamivilla/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 border border-white/10 bg-white/5 text-white/75 hover:text-white hover:bg-white/10 transition"
              >
                <Instagram size={18} /> Instagram
              </a>
            </div>

            <p className="mt-6 text-xs text-white/50">{t.note}</p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} TEZAMI VILLA — {t.rights}
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href={`${language}/terms`}
              className="text-white/50 hover:text-white transition"
            >
              {t.terms}
            </a>
            <a
              href={`${language}/privacy`}
              className="text-white/50 hover:text-white transition"
            >
              {t.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
