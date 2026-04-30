"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/app";

const toursContent: any = {
  en: {
    title: "Premium Tours",
    subtitle: "Experience Georgia",
    last_update: "Tour Season",
    intro: `7 Days, 4 Regions, 20+ Locations. A private, fully coordinated journey from the old streets of Tbilisi to the Black Sea coast of Batumi.`,
    sections: [
      {
        title: "Day 01: Arrival & Tbilisi Nights",
        text: `Airport pickup and transfer to your hotel. We open the tour with a traditional dinner in Old Tbilisi, overlooking the Narikala Fortress.`,
      },
      {
        title: "Day 03: Kakheti - The Cradle of Wine",
        text: `Visit Sighnaghi (City of Love) and Bodbe Monastery. Enjoy a private wine tasting and traditional lunch at a local Kakhetian cellar.`,
      },
      {
        title: "Day 05: Canyons & Black Sea",
        text: `Explore Prometheus Cave and Martvili Canyon by boat. Arrive in Batumi for a vibrant night tour of the illuminated city.`,
      },
      {
        title: "Day 07: Departure",
        text: `Final panoramic views and breakfast. Transfer from Batumi back to Tbilisi International Airport for your departure.`,
      },
    ],
    cta_text: "By booking, you agree to our private tour coordination terms.",
    cta_btn: "Get Custom Offer",
  },
  ka: {
    title: "პრემიუმ ტურები",
    subtitle: "აღმოაჩინე საქართველო",
    last_update: "სეზონი 2026",
    intro: `7 დღე, 4 რეგიონი, 20+ ლოკაცია. პრივატული, სრულად კოორდინირებული მოგზაურობა ძველი თბილისის ქუჩებიდან ბათუმის სანაპირომდე.`,
    sections: [
      {
        title: "დღე 01: ჩამოსვლა და თბილისი",
        text: `დახვედრა აეროპორტში და ტრანსფერი. ტურის გახსნა ტრადიციული ვახშმით ძველ თბილისში, ნარიყალას ხედით.`,
      },
      {
        title: "დღე 03: კახეთი - ღვინის აკვანი",
        text: `სიღნაღი და ბოდბის მონასტერი. პრივატული დეგუსტაცია და ტრადიციული სადილი კახურ მარანში.`,
      },
      {
        title: "დღე 05: კანიონები და შავი ზღვა",
        text: `პრომეთეს მღვიმე და მარტვილის კანიონი ნავით. ჩასვლა ბათუმში და ღამის ანთებული ქალაქის ტური.`,
      },
      {
        title: "დღე 07: დასრულება",
        text: `ბოლო პანორამული ხედები და საუზმე. ტრანსფერი ბათუმიდან თბილისის საერთაშორისო აეროპორტში.`,
      },
    ],
    cta_text:
      "დაჯავშნით თქვენ ეთანხმებით პერსონალური ტურის კოორდინაციის პირობებს.",
    cta_btn: "მიიღე შეთავაზება",
  },
};

export default function TourProgram() {
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

  const content: any = toursContent[language] || toursContent.en;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // ვაჩვენებთ შეთავაზების ღილაკს მცირე დაყოვნებით
    setTimeout(() => setShowButton(true), 500);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#141a17] pt-32 pb-20 px-6 sm:px-8 lg:px-16"
      style={{ display: loading ? "none" : "block" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header - თქვენი დიზაინის მიხედვით */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {content.title}
          </h1>
          <p className="text-[#D4AF37] font-medium uppercase tracking-widest text-sm">
            {content.last_update}: {content.subtitle}
          </p>
        </header>

        {/* Intro - თქვენი დიზაინის მიხედვით */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-10">
          <p className="text-white/80 leading-relaxed text-lg italic">
            {content.intro}
          </p>
        </div>

        {/* Tour Days - თქვენი დიზაინის სექციები */}
        <div className="grid gap-10">
          {content.sections.map((section: any, index: any) => (
            <section key={index} className="group">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#D4AF37] text-sm opacity-50">
                  DAY 0{index + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-white/60 leading-relaxed pl-8 border-l border-white/5 group-hover:border-[#D4AF37] transition-colors">
                {section.text}
              </p>
            </section>
          ))}
        </div>

        {/* CTA Button Container - თქვენი დიზაინის მიხედვით */}
        {showButton && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
            <div className="bg-[#1c2521] border border-[#D4AF37]/30 p-6 rounded-3xl shadow-2xl shadow-black/50 backdrop-blur-md">
              <p className="text-white/80 text-xs mb-4 text-center">
                {content.cta_text}
              </p>
              <a
                href="https://wa.me/995599205588"
                target="_blank"
                className="block w-full bg-[#D4AF37] text-black py-4 rounded-2xl font-bold hover:brightness-110 active:scale-[0.98] transition shadow-lg text-center"
              >
                {content.cta_btn}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
