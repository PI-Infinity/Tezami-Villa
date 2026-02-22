import React from "react";
import { Facebook, Instagram, Phone, MessageCircle } from "lucide-react";
import Img from "./image";

export default function Footer() {
  // ✅ შეცვალე ლინკები/ნომერი
  const whatsappNumber = "995577138372";
  const whatsappText = "Hello, I want to rent a premium car in Georgia.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  const phone = "+995577138372";
  const phoneUrl = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <footer className="w-full bg-[#080808] border-t border-white/10">
      <div className="mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 px-4 sm:px-36">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12">
                <Img
                  alt="LUX CAR RENT logo"
                  style={{ width: "100%", height: "100%" }}
                  src={require("../../public/logo.png")}
                />
              </div>
              <div>
                <div className="text-white font-extrabold tracking-wide">
                  LUX CAR RENT
                </div>
                <div className="text-xs text-white/60">
                  Premium rental cars in Georgia
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/70 max-w-md leading-relaxed">
              Premium SUVs and cars with fast WhatsApp booking, delivery
              options, and local support in Georgia.
            </p>

            {/* quick actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-2xl px-5 py-3
                  font-extrabold text-sm
                  bg-[#D4AF37] text-black
                  shadow-xl shadow-black/25
                  hover:brightness-110 active:scale-[0.99] transition
                "
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href={phoneUrl}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-2xl px-5 py-3
                  font-extrabold text-sm
                  bg-white/10 text-white
                  border border-white/15
                  hover:bg-white/15 active:scale-[0.99] transition
                "
              >
                <Phone size={18} />
                Call
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <div className="text-white font-extrabold">Pages</div>
            <div className="mt-4 grid gap-3 text-sm">
              <a
                href="#cars"
                className="text-white/70 hover:text-white transition"
              >
                Cars
              </a>
              <a
                href="#prices"
                className="text-white/70 hover:text-white transition"
              >
                Prices
              </a>
              <a
                href="#faq"
                className="text-white/70 hover:text-white transition"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-4">
            <div className="text-white font-extrabold">Social</div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/"
                className="
                  inline-flex items-center gap-2
                  rounded-2xl px-4 py-3
                  border border-white/10 bg-white/5
                  text-white/75 hover:text-white hover:bg-white/10 transition
                "
              >
                <Facebook size={18} />
                Facebook
              </a>

              <a
                href="https://www.instagram.com/"
                className="
                  inline-flex items-center gap-2
                  rounded-2xl px-4 py-3
                  border border-white/10 bg-white/5
                  text-white/75 hover:text-white hover:bg-white/10 transition
                "
              >
                <Instagram size={18} />
                Instagram
              </a>

              {/* თუ TikTok გინდა მაგრამ icon არ გინდა, ტექსტით იყოს */}
              <a
                href="https://www.tiktok.com/"
                className="
                  inline-flex items-center gap-2
                  rounded-2xl px-4 py-3
                  border border-white/10 bg-white/5
                  text-white/75 hover:text-white hover:bg-white/10 transition
                "
              >
                TikTok
              </a>
            </div>

            <p className="mt-4 text-xs text-white/55">
              For partnerships or long-term rentals, message us anytime.
            </p>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between px-32">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} LUX CAR RENT — All rights reserved.
          </p>

          <div className="flex gap-4 text-xs">
            <a
              href="#terms"
              className="text-white/55 hover:text-white transition"
            >
              Terms
            </a>
            <a
              href="#privacy"
              className="text-white/55 hover:text-white transition"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
