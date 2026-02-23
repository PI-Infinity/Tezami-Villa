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

export default function Footer() {
  const whatsappNumber = "995599205588";
  const whatsappText =
    "Hello, I would like to check availability for Tezami Villa.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  const phone = "+995599205588";
  const phoneUrl = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <footer className="w-full bg-[#141a17] border-t border-white/10">
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
                  Private Premium Retreat
                </div>
              </div>
            </div>

            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              Experience comfort, privacy, and premium relaxation in a peaceful
              setting.
            </p>

            {/* QUICK ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold text-sm bg-[#D4AF37] text-black shadow-xl shadow-black/30 hover:brightness-110 active:scale-[0.98] transition"
              >
                <MessageCircle size={18} />
                Check Availability
              </a>

              <a
                href={phoneUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold text-sm bg-white/10 text-white border border-white/15 hover:bg-white/15 active:scale-[0.98] transition"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>

          {/* PAGES */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <div className="text-white font-bold text-sm uppercase tracking-wider">
              Explore
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#about"
                className="text-white/70 hover:text-white transition"
              >
                About The Villa
              </a>
              <a
                href="#gallery"
                className="text-white/70 hover:text-white transition"
              >
                Gallery
              </a>
              <a
                href="#services"
                className="text-white/70 hover:text-white transition"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT & SOCIAL */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="text-white font-bold text-sm uppercase tracking-wider">
              Contact
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Georgia
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

            <p className="mt-6 text-xs text-white/50">
              For private bookings and special requests, contact us anytime.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} TEZAMI VILLA — All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href="#terms"
              className="text-white/50 hover:text-white transition"
            >
              Terms
            </a>
            <a
              href="#privacy"
              className="text-white/50 hover:text-white transition"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
