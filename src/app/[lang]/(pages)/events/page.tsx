"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/app";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // თუ hi2 გაქვთ, შეცვალეთ "react-icons/hi2"
import {
  CalendarCheck,
  Layers,
  UtensilsCrossed,
  ChefHat,
  Armchair,
  Flower2,
  Music,
  Camera,
  UserCheck,
  Bus,
  Sparkles,
  Users,
  Heart,
  Briefcase,
} from "lucide-react";

const headerTranslations: any = {
  GE: { book: "დაჯავშნა" },
  EN: { book: "Reserve" },
  RU: { book: "Бронировать" },
};

const iconsList = [
  <CalendarCheck key="1" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
  <Layers key="2" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
  <UtensilsCrossed
    key="3"
    className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5"
  />,
  <ChefHat key="4" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
  <Armchair key="5" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
  <Flower2 key="6" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
  <Music key="7" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
  <Camera key="8" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
  <UserCheck key="9" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
  <Bus key="10" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
  <Sparkles key="11" className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />,
];

const eventsContent: any = {
  en: {
    title: "Events at Tezami Villa",
    subtitle: "Exclusive Environment",
    last_update: "Season 2026",
    intro:
      "Host your special days in a private space, in the heart of nature. We offer full event planning services and individual formats.",
    servicesTitle: "What We Offer Within the Event",
    services: [
      "Location booking on the event date.",
      "Planning the event format according to the number of guests and the purpose.",
      "Menu creation: buffet, Georgian supra, BBQ, premium dinner or individual menu.",
      "Private chef or catering organization.",
      "Table, chair, serving, and zoning planning.",
      "Organization of decor, flowers, lighting, or themed decoration.",
      "DJ, live music, or background music solutions.",
      "Photographer and videographer.",
      "Bartender, waiters, or service staff.",
      "Transfer for guests.",
      "Additional tour or activity on the second day of the event.",
    ],
    conceptsTitle: "Event Concepts",
    sections: [
      {
        title: "Family & Friends Gatherings",
        icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
        text: "If you want a family or friendly gathering without the noise of the city, Tezami Villa offers a private space in nature, where everything can be arranged quietly and tastefully. You can spend the day by the pool, arrange a dinner on the terrace, use the fireplace and billiards, and if you wish, we will help you organize meals, serving and additional details.",
      },
      {
        title: "Weddings, Anniversaries & Special Days",
        icon: <Heart className="w-6 h-6 text-[#D4AF37]" />,
        text: "Tezami Villa is a space for those who want a personal, emotional and beautiful event without extra formality. Natural environment, pool, terrace, fireplace and interior create a photogenic atmosphere for a wedding, anniversary or special evening. If necessary, we will help you organize decor, menu, music, photo/video service and guest logistics.",
      },
      {
        title: "Corporate Events & Teambuilding",
        icon: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
        text: "For companies, Tezami Villa can become a place for team relaxation, informal meetings or teambuilding. The space allows a meeting or activity to be organized during the day, and in the evening — a joint dinner, a pool area or a relaxation part. If desired, it is possible to organize a transfer, catering, activities, host or guide.",
      },
    ],
    cta_text:
      "Write us the event type, date and number of guests \n We will receive the request and offer an individual format",
    cta_btn: "Plan your event at Tezami Villa",
  },
  ka: {
    title: "ღონისძიებები Tezami Villa-ში",
    subtitle: "ექსკლუზიური გარემო",
    last_update: "სეზონი 2026",
    intro:
      "მოაწყვეთ თქვენი განსაკუთრებული დღეები პრივატ სივრცეში, ბუნების წიაღში. გთავაზობთ ღონისძიებების დაგეგმვის სრულ სერვისსა და ინდივიდუალურ ფორმატებს.",
    servicesTitle: "რა შეიძლება შევთავაზოთ ღონისძიების ფარგლებში",
    services: [
      "ლოკაციის დაჯავშნა ღონისძიების თარიღზე.",
      "ღონისძიების ფორმატის დაგეგმვა სტუმრების რაოდენობისა და მიზნის მიხედვით.",
      "მენიუს შედგენა: ფურშეტი, ქართული სუფრა, BBQ, პრემიუმ ვახშამი ან ინდივიდუალური მენიუ.",
      "პირადი მზარეული ან ქეითერინგის ორგანიზება.",
      "სერვირების, მაგიდების, სკამების და ზონირების დაგეგმვა.",
      "დეკორის, ყვავილების, განათების ან თემატური გაფორმების ორგანიზება.",
      "DJ, ცოცხალი მუსიკა ან ფონური მუსიკის გადაწყვეტა.",
      "ფოტოგრაფი და ვიდეოგრაფი.",
      "ბარმენი, მიმტანები ან მომსახურე პერსონალი.",
      "ტრანსფერი სტუმრებისთვის.",
      "დამატებითი ტური ან აქტივობა ღონისძიების მეორე დღეს.",
    ],
    conceptsTitle: "ღონისძიების მიმართულებები",
    sections: [
      {
        title: "საოჯახო და მეგობრების შეკრებები",
        icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
        text: "თუ გსურთ ოჯახური ან მეგობრული შეკრება ქალაქის ხმაურის გარეშე, Tezami Villa გთავაზობთ პრივატ სივრცეს ბუნებაში, სადაც ყველაფერი შეიძლება მოეწყოს მშვიდად და გემოვნებით. შეგიძლიათ გაატაროთ დღე აუზთან, მოაწყოთ ვახშამი ტერასაზე, ისარგებლოთ ბუხრითა და ბილიარდით, ხოლო სურვილის შემთხვევაში ჩვენ დაგეხმარებით კვების, სერვირების და დამატებითი დეტალების ორგანიზებაში.",
      },
      {
        title: "ქორწილი, იუბილე და განსაკუთრებული დღეები",
        icon: <Heart className="w-6 h-6 text-[#D4AF37]" />,
        text: "Tezami Villa არის სივრცე მათთვის ვისაც სურს, პირადი, ემოციური და დაუვიწყარი ღონისძიება. ბუნებრივი გარემო, აუზი, ტერასა და ექსტერიერი ქმნის ფოტოგენურ ატმოსფეროს ქორწილისთვის, იუბილესთვის ან განსაკუთრებული საღამოსთვის. საჭიროების შემთხვევაში დაგეხმარებით დეკორის, მენიუს, მუსიკის, ფოტო/ვიდეო მომსახურებისა და სტუმრების ლოჯისტიკის ორგანიზებაში.",
      },
      {
        title: "კორპორატიული ღონისძიებები და თიმბილდინგი",
        icon: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
        text: "კომპანიებისთვის Tezami Villa შეიძლება გახდეს ადგილი გუნდის დასვენებისთვის, არაფორმალური შეხვედრისთვის ან თიმბილდინგისთვის. სივრცე საშუალებას იძლევა, დღის განმავლობაში მოეწყოს შეხვედრა ან აქტივობა, ხოლო საღამოს — საერთო ვახშამი, აუზის ზონა ან დასასვენებელი ნაწილი. სურვილის შემთხვევაში შესაძლებელია ტრანსფერის, კვების, აქტივობების, წამყვანის ან გიდის ორგანიზება.",
      },
    ],
    cta_text:
      "მოგვწერეთ ღონისძიების ტიპი, თარიღი და სტუმრების რაოდენობა \n მივიღოთ მოთხოვნა და შემოგთავაზოთ ინდივიდუალური ფორმატი",
    cta_btn: "დაგეგმეთ თქვენი ღონისძიება Tezami Villa-ში",
  },
  ru: {
    title: "Мероприятия на Tezami Villa",
    subtitle: "Эксклюзивная атмосфера",
    last_update: "Сезон 2026",
    intro:
      "Организуйте свои особенные дни в уединенном пространстве на лоне природы. Мы предлагаем полный спектр услуг по планированию мероприятий и индивидуальные форматы.",
    servicesTitle: "Что мы можем предложить в рамках мероприятия",
    services: [
      "Бронирование локации на дату мероприятия.",
      "Планирование формата мероприятия в зависимости от количества гостей и целей.",
      "Составление меню: фуршет, грузинское застолье (супра), BBQ, премиум-ужин или индивидуальное меню.",
      "Личный повар или организация кейтеринга.",
      "Планирование сервировки, столов, стульев и зонирования пространства.",
      "Организация декора, цветов, освещения или тематического оформления.",
      "Диджей, живая музыка или фоновые музыкальные решения.",
      "Фотограф и видеограф.",
      "Бармен, официанты или обслуживающий персонал.",
      "Трансфер для гостей.",
      "Дополнительный тур или активность на второй день мероприятия.",
    ],
    conceptsTitle: "Направления мероприятий",
    sections: [
      {
        title: "Семейные и дружеские встречи",
        icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
        text: "Если вы хотите собраться семьей или друзьями вдали от городского шума, Tezami Villa предлагает приватное пространство на природе, где все можно устроить спокойно и со вкусом. Вы можете провести день у бассейна, устроить ужин на террасе, воспользоваться камином и бильярдом, а при желании мы поможем вам с организацией питания, сервировки и других деталей.",
      },
      {
        title: "Свадьбы, юбилеи и особые даты",
        icon: <Heart className="w-6 h-6 text-[#D4AF37]" />,
        text: "Tezami Villa — это пространство для тех, кто хочет провести личное, эмоциональное и незабываемое событие. Природное окружение, бассейн, терраса и экстерьер создают фотогеничную атмосферу для свадьбы, юбилея или особенного вечера. При необходимости мы поможем организовать декор, меню, музыку, фото- и видеосъемку, а также логистику для гостей.",
      },
      {
        title: "Корпоративные мероприятия и тимбилдинг",
        icon: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
        text: "Для компаний Tezami Villa может стать местом отдыха команды, неформальных встреч или тимбилдинга. Пространство позволяет организовать встречу или активность в течение дня, а вечером — совместный ужин, зону у бассейна или лаунж-часть. При желании возможна организация трансфера, питания, развлечений, ведущего или гида.",
      },
    ],
    cta_text:
      "Напишите нам тип мероприятия, дату и количество гостей \n Мы примем запрос и предложим индивидуальный формат",
    cta_btn: "Спланируйте ваше мероприятие на Tezami Villa",
  },
};

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#141a17]" />}>
      <MainEventsContent />
    </Suspense>
  );
}

function MainEventsContent() {
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
  const content: any = eventsContent[language] || eventsContent.ka;

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
      {/* 1. ჰედერი — სრულად Tailwind-ზე */}
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

          {/* დესკტოპ ნავიგაცია (ენები და CTA) */}
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

      {/* 2. ივენთების ძირითადი კონტენტი */}
      <div className="pt-40 pb-36 px-6 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* სათაურის ბლოკი */}
          <header className="mb-12 border-b border-white/10 pb-8 text-center md:text-left">
            <p className="text-[#D4AF37] font-semibold uppercase tracking-widest text-xs mb-3">
              {content.subtitle} • {content.last_update}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {content.title}
            </h1>
          </header>

          {/* შესავალი კარტა */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-16 backdrop-blur-sm shadow-xl">
            <p className="text-white/80 leading-relaxed text-lg italic text-center md:text-left font-light">
              {content.intro}
            </p>
          </div>

          {/* სერვისების შეთავაზება (რა შეიძლება შევთავაზოთ) */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b border-white/5 pb-4 text-[#D4AF37] tracking-wide">
              {content.servicesTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.services.map((service: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 group"
                >
                  {iconsList[idx]}
                  <span className="text-white/70 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* მიმართულებები (საოჯახო, ქორწილი, კორპორატიული) */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b border-white/5 pb-4 text-[#D4AF37] tracking-wide">
              {content.conceptsTitle}
            </h2>
            <div className="space-y-6">
              {content.sections.map((section: any, index: any) => (
                <div
                  key={index}
                  className="bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/20 p-6 md:p-8 rounded-3xl transition-all duration-500 group relative overflow-hidden shadow-md"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 w-fit group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                      {section.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-white/60 leading-relaxed text-sm md:text-base font-light pl-0 sm:pl-16">
                    {section.text}
                  </p>
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
