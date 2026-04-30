"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/app";

const privacyContent: any = {
  en: {
    title: "Privacy Policy",
    last_update: "Last Updated",
    overview: "Overview",
    overview_text: `Tezami Villa ("we", "company") is committed to protecting your personal data. This policy outlines how we handle information collected through our website and booking processes to ensure your privacy while you enjoy our premium retreat.`,
    collect_info: "Information We Collect",
    personal_info: "Personal Data",
    personal_info_list: [
      "Full Name",
      "Phone Number & WhatsApp details",
      "Email Address",
      "Booking dates and preferences",
      "Payment information (processed securely via third-party providers)",
    ],
    usage: "How We Use Your Information",
    usage_list: [
      "Confirming and managing your villa reservations",
      "Providing personalized guest services during your stay",
      "Sending essential check-in instructions and updates",
      "Ensuring the security of our property and guests",
      "Improving our website experience",
    ],
    share_data: "Data Sharing",
    share_data_text: `Your privacy is our priority. We do not sell your data. Information is only shared with:`,
    share_data_list: [
      "Trusted payment processors",
      "Legal authorities when required by Georgian law",
      "Essential service providers (e.g., hosting)",
    ],
    security: "Security",
    security_text:
      "We implement industry-standard encryption and security measures to protect your data from unauthorized access.",
    contact: "Contact Information",
  },
  ka: {
    title: "კონფიდენციალურობის პოლიტიკა",
    last_update: "ბოლო განახლება",
    overview: "ზოგადი მიმოხილვა",
    overview_text: `„თეზამი ვილა“ პატივს სცემს თქვენს კონფიდენციალურობას. წინამდებარე პოლიტიკა განმარტავს, თუ როგორ ვიცავთ თქვენს პერსონალურ მონაცემებს, რომლებსაც ვაგროვებთ ვებსაიტისა და დაჯავშნის პროცესში.`,
    collect_info: "ინფორმაცია, რომელსაც ვაგროვებთ",
    personal_info: "პერსონალური მონაცემები",
    personal_info_list: [
      "სახელი და გვარი",
      "ტელეფონის ნომერი (WhatsApp)",
      "ელფოსტა",
      "დაჯავშნის თარიღები და მოთხოვნები",
      "საგადახდო ინფორმაცია (რომელიც მუშავდება დაცული სისტემებით)",
    ],
    usage: "ინფორმაციის გამოყენების მიზნები",
    usage_list: [
      "თქვენი ჯავშნების დადასტურება და მართვა",
      "პერსონალიზებული მომსახურების გაწევა სტუმრობისას",
      "აუცილებელი ინსტრუქციებისა და განახლებების გამოგზავნა",
      "ვილისა და სტუმრების უსაფრთხოების უზრუნველყოფა",
    ],
    share_data: "მონაცემთა გაზიარება",
    share_data_text: `თქვენი მონაცემები არ იყიდება. გაზიარება ხდება მხოლოდ შემდეგ შემთხვევებში:`,
    share_data_list: [
      "საგადახდო ოპერატორებთან ტრანზაქციისთვის",
      "კანონით გათვალისწინებულ შემთხვევებში სახელმწიფო ორგანოებთან",
    ],
    security: "უსაფრთხოება",
    security_text:
      "ჩვენ ვიყენებთ თანამედროვე დაშიფვრის მეთოდებს თქვენი ინფორმაციის არასანქცირებული წვდომისგან დასაცავად.",
    contact: "საკონტაქტო ინფორმაცია",
  },
};

export default function PrivacyPolicy() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#141a17]" />}>
      <Main />
    </Suspense>
  );
}

function Main() {
  const [language, setLanguage] = useState("en");
  const searchParams = useSearchParams();
  const { activeLanguage, loading } = useAppContext();

  useEffect(() => {
    const langFromCookies = Cookies.get("language") || "en";
    setLanguage(searchParams.get("lang") || langFromCookies);
  }, [searchParams]);

  const content: any = privacyContent[language] || privacyContent.en;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const hasAccepted = Cookies.get("termsAccepted");
    if (!hasAccepted) {
      setTimeout(() => setShowButton(true), 500);
    }
  }, []);

  const acceptTerms = () => {
    Cookies.set("termsAccepted", "true", { expires: 365 });
    setShowButton(false);
  };

  return (
    <div
      className="min-h-screen bg-[#141a17] pt-32 pb-20 px-6 sm:px-8 lg:px-16 text-white"
      style={{ display: loading ? "none" : "block" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            {content.title}
          </h1>
          <p className="text-[#D4AF37] font-medium uppercase tracking-widest text-sm">
            {content.last_update}: 15.03.2025
          </p>
        </header>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
            {content.overview}
          </h2>
          <p className="text-white/70 leading-relaxed text-lg">
            {content.overview_text}
          </p>
        </section>

        {/* Data Collection */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
              {content.collect_info}
            </h2>
            <ul className="space-y-4">
              {content.personal_info_list.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 text-sm text-white/70">
                  <span className="text-[#D4AF37]">•</span> {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h2 className="text-xl font-bold mb-6 text-[#D4AF37]">
              {content.usage}
            </h2>
            <ul className="space-y-4">
              {content.usage_list.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 text-sm text-white/70">
                  <span className="text-[#D4AF37]">•</span> {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sharing & Security */}
        <section className="mb-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{content.share_data}</h2>
            <p className="text-white/60 mb-4">{content.share_data_text}</p>
            <div className="flex flex-wrap gap-3">
              {content.share_data_list.map((item: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{content.security}</h2>
            <p className="text-white/60 leading-relaxed">
              {content.security_text}
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="pt-12 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">{content.contact}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-xs text-white/40 uppercase mb-1">Email Us</p>
              <a
                href="mailto:tezamivilla@gmail.com"
                className="text-[#D4AF37] hover:underline font-medium"
              >
                tezamivilla@gmail.com
              </a>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-xs text-white/40 uppercase mb-1">Call Us</p>
              <a
                href="tel:+995599205588"
                className="text-[#D4AF37] hover:underline font-medium"
              >
                +995 599 205 588
              </a>
            </div>
          </div>
        </section>

        {/* Acceptance Button */}
        {showButton && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
            <div className="bg-[#1c2521]/90 backdrop-blur-xl border border-[#D4AF37]/30 p-6 rounded-3xl shadow-2xl">
              <button
                onClick={acceptTerms}
                className="w-full bg-[#D4AF37] text-black py-4 rounded-2xl font-bold hover:brightness-110 transition active:scale-[0.98]"
              >
                {activeLanguage?.i_accept || "I Understand"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
