"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/app";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {
  Compass,
  Wine,
  Milestone,
  Trees,
  Briefcase,
  Gift,
  MapPin,
  CalendarDays,
} from "lucide-react";

const headerTranslations: any = {
  GE: { book: "დაჯავშნა" },
  EN: { book: "Reserve" },
  RU: { book: "Бронировать" },
};

// ტურების ფორმატების აიქონები შესაბამისად
const tourIcons: any = {
  oneDay: <MapPin className="w-6 h-6 text-[#D4AF37]" />,
  wine: <Wine className="w-6 h-6 text-[#D4AF37]" />,
  cultural: <Milestone className="w-6 h-6 text-[#D4AF37]" />,
  nature: <Trees className="w-6 h-6 text-[#D4AF37]" />,
  corporate: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
  guests: <Gift className="w-6 h-6 text-[#D4AF37]" />,
};

const toursContent: any = {
  en: {
    title: "Tours Around Georgia",
    subtitle: "Tezami Villa Travel",
    last_update: "Season 2026",
    intro:
      "Discover Georgia with our carefully curated tour formats. We design custom routes from Tbilisi and Tezami Villa to provide unforgettable premium experiences.",
    gridTitle: "Possible Tour Formats",
    formats: [
      {
        title: "One-day tour from Tbilisi / Villa",
        icon: tourIcons.oneDay,
        text: "Short and comfortable itinerary with a return within one day.",
      },
      {
        title: "Wine tour",
        icon: tourIcons.wine,
        text: "Wine cellar, tasting, traditional Georgian supra, visiting Kakheti or other wine regions.",
      },
      {
        title: "Cultural-historical tour",
        icon: tourIcons.cultural,
        text: "Old cities, monasteries, historical sites, and detailed storytelling by a professional guide.",
      },
      {
        title: "Nature tour",
        icon: tourIcons.nature,
        text: "Forest, mountains, breathtaking views, easy walks, or photogenic locations.",
      },
      {
        title: "Corporate tour",
        icon: tourIcons.corporate,
        text: "Planned itinerary, activities, catering, and transfers tailored for your team.",
      },
      {
        title: "For wedding/event guests",
        icon: tourIcons.guests,
        text: "An organized experience to introduce Georgia to your guests before or after the main event.",
      },
    ],
    cta_text:
      "Let us know your preferred tour format, date, and guest count. \n We will create an individual premium route for you.",
    cta_btn: "Request Custom Tour",
  },
  ka: {
    title: "ტურები საქართველოში",
    subtitle: "Tezami Villa Travel",
    last_update: "სეზონი 2026",
    intro:
      "აღმოაჩინეთ საქართველო ჩვენი სპეციალურად შექმნილი ტურების ფორმატებით. ჩვენ ვგეგმავთ ინდივიდუალურ მარშრუტებს თბილისიდან და ვილადან თქვენი კომფორტისთვის.",
    gridTitle: "ტურების შესაძლო ფორმატები",
    formats: [
      {
        title: "ერთდღიანი ტური თბილისიდან / ვილადან",
        icon: tourIcons.oneDay,
        text: "მოკლე და კომფორტული მარშრუტი ერთი დღის განმავლობაში დაბრუნებით.",
      },
      {
        title: "ღვინის ტური",
        icon: tourIcons.wine,
        text: "მარანი, დეგუსტაცია, ქართული სუფრა, კახეთის ან სხვა ღვინის რეგიონის მონახულება.",
      },
      {
        title: "კულტურულ-ისტორიული ტური",
        icon: tourIcons.cultural,
        text: "ძველი ქალაქები, მონასტრები, ისტორიული ადგილები და გიდის დეტალური თხრობა.",
      },
      {
        title: "ბუნების ტური",
        icon: tourIcons.nature,
        text: "ტყე, მთები, ხედები, მარტივი გასეირნება ან ფოტოგენური ლოკაციები.",
      },
      {
        title: "კორპორატიული ტური",
        icon: tourIcons.corporate,
        text: "გუნდისთვის დაგეგმილი მარშრუტი, აქტივობები, კვება და ტრანსფერი.",
      },
      {
        title: "ქორწილის/ღონისძიების სტუმრებისთვის",
        icon: tourIcons.guests,
        text: "ღონისძიებამდე ან შემდეგ სტუმრებისთვის საქართველოს გაცნობის ორგანიზებული გამოცდილება.",
      },
    ],
    cta_text:
      "მოგვწერეთ თქვენთვის სასურველი ტურის ფორმატები, თარიღი და სტუმრების რაოდენობა \n მივიღოთ მოთხოვნა და შემოგთავაზოთ ინდივიდუალური მარშრუტი",
    cta_btn: "დაგეგმეთ თქვენი ტური",
  },
};

export default function ToursPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#141a17]" />}>
      <MainToursContent />
    </Suspense>
  );
}

function MainToursContent() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("ka");
  const [showButton, setShowButton] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { loading } = useAppContext();

  useEffect(() => {
    const langFromCookies = Cookies.get("language") || "ka";
    setLanguage(searchParams.get("lang") || langFromCookies);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    setTimeout(() => setShowButton(true), 500);

    return () => window.removeEventListener("scroll", onScroll);
  }, [searchParams]);

  const currentLangUpper =
    language.toUpperCase() === "KA" ? "GE" : language.toUpperCase();
  const tHeader = headerTranslations[currentLangUpper] || headerTranslations.GE;
  const content: any = toursContent[language] || toursContent.ka;

  const changeLanguage = (lang: string) => {
    localStorage.setItem("sarko-events:language", lang);
    Cookies.set("language", lang, { expires: 30, path: "/" });

    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
    setMobileOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-[#141a17] text-white font-sans antialiased selection:bg-[#D4AF37]/30"
      style={{ display: loading ? "none" : "block" }}
    >
      {/* 1. ჰედერი — მხოლოდ ლოგო, ენები და რეზერვი */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 h-24 flex items-center ${scrolled ? "bg-[#141a17]/95 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* ლოგო */}
          <Link
            href="/"
            className="relative w-32 h-14 block transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/tezami-logo.png"
              alt="Tezami Villa"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* დესკტოპ ნავიგაცია */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-3 bg-white/5 p-1 rounded-full border border-white/10">
              {["GE", "EN", "RU"].map((l) => (
                <button
                  key={l}
                  className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${currentLangUpper === l ? "bg-[#D4AF37] text-black shadow-md" : "text-white/60 hover:text-white"}`}
                  onClick={() =>
                    changeLanguage(l === "GE" ? "ka" : l.toLowerCase())
                  }
                >
                  {l}
                </button>
              ))}
            </div>

            <Link
              href="#contact"
              className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-lg shadow-[#D4AF37]/5"
            >
              {tHeader.book}
            </Link>
          </nav>

          {/* მობილურის მენიუს ღილაკი */}
          <button
            className="md:hidden text-2xl text-white/80 hover:text-white p-2 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </header>

      {/* მობილური მენიუს ფარდა */}
      <div
        className={`fixed inset-0 bg-[#141a17]/98 backdrop-blur-lg z-40 transition-all duration-500 md:hidden flex flex-col justify-center items-center px-6 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"}`}
      >
        <div className="flex gap-4 mb-10 p-1 bg-white/5 border border-white/10 rounded-full">
          {["GE", "EN", "RU"].map((l) => (
            <button
              key={l}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${currentLangUpper === l ? "bg-[#D4AF37] text-black" : "text-white/60"}`}
              onClick={() =>
                changeLanguage(l === "GE" ? "ka" : l.toLowerCase())
              }
            >
              {l}
            </button>
          ))}
        </div>
        <Link
          href="#contact"
          className="w-full max-w-xs bg-[#D4AF37] text-black py-4 rounded-full text-center font-bold tracking-wider shadow-lg text-lg"
          onClick={() => setMobileOpen(false)}
        >
          {tHeader.book}
        </Link>
      </div>

      {/* 2. ტურების ძირითადი კონტენტი */}
      <div className="pt-40 pb-36 px-6 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* სათაურის ბლოკი */}
          <header className="mb-12 border-b border-white/10 pb-8 text-center md:text-left">
            <p className="text-[#D4AF37] font-semibold uppercase tracking-widest text-xs mb-3 flex items-center justify-center md:justify-start gap-2">
              <Compass className="w-4 h-4 animate-spin-slow" />{" "}
              {content.subtitle} • {content.last_update}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {content.title}
            </h1>
          </header>

          {/* შესავალი ბარათი */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-16 backdrop-blur-sm shadow-xl">
            <p className="text-white/80 leading-relaxed text-lg italic text-center md:text-left font-light">
              {content.intro}
            </p>
          </div>

          {/* ტურების ფორმატების ბადე (ცხრილის მაგივრად დახვეწილი დიზაინი) */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b border-white/5 pb-4 text-[#D4AF37] tracking-wide">
              {content.gridTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {content.formats.map((format: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/20 p-6 rounded-3xl transition-all duration-500 group relative overflow-hidden shadow-md flex flex-col justify-between"
                >
                  {/* დეკორატიული ეფექტი ჰოვერზე */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-2xl bg-white/5 w-fit group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                        {format.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold tracking-wide text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                        {format.title}
                      </h3>
                    </div>

                    <p className="text-white/60 leading-relaxed text-sm md:text-base font-light">
                      {format.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ქვედა მცურავი CTA შეკვეთა */}
          {showButton && (
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg">
              <div className="bg-[#1c2521]/90 border border-[#D4AF37]/20 p-5 md:p-6 rounded-3xl shadow-2xl shadow-black/90 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/40">
                <p className="text-white/70 text-xs md:text-sm mb-5 text-center whitespace-pre-line leading-relaxed font-medium">
                  {content.cta_text}
                </p>
                <a
                  href="https://wa.me/995599205588"
                  target="_blank"
                  className="block w-full bg-[#D4AF37] text-black py-4 rounded-2xl font-bold tracking-wider hover:bg-[#c2a032] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#D4AF37]/20 text-center uppercase text-xs md:text-sm"
                >
                  {content.cta_btn}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
