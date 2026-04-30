"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/app";

const termsContent: any = {
  en: {
    title: "Terms & Conditions",
    last_update: "Last Updated",
    intro: `Welcome to Tezami Villa. These terms govern your stay and use of our private retreat in Tskhvarichamia. By booking or visiting our villa, you agree to follow these rules designed to ensure a premium and safe experience for all guests.`,
    sections: [
      {
        title: "1. Reservation & Check-in",
        text: `Bookings are confirmed upon receipt of the deposit. Check-in is available from 15:00, and check-out must be completed by 12:00 (noon) to allow for professional cleaning of the premises. Early check-in or late check-out is subject to availability.`,
      },
      {
        title: "2. House Rules & Quiet Hours",
        text: `Tezami Villa is a sanctuary of peace. While we encourage relaxation, guests must respect the natural surroundings. Loud music and noise are strictly prohibited after 23:00 to maintain the tranquility of the forest area.`,
      },
      {
        title: "3. Property Use & Capacity",
        text: `The villa is a two-storey private property. The number of guests must not exceed the capacity agreed upon during booking. Unauthorized parties or large events without prior written consent from management are not allowed.`,
      },
      {
        title: "4. Pool & Safety",
        text: `Use of the private pool is at the guests' own risk. Children must be supervised by adults at all times. Diving is prohibited, and glass containers are not allowed near the pool area for safety reasons.`,
      },
      {
        title: "5. Damages & Liability",
        text: `Guests are responsible for any damage caused to the villa, furniture, or equipment during their stay. Tezami Villa is not responsible for lost or stolen personal items or accidents occurring on the property due to guest negligence.`,
      },
      {
        title: "6. Cancellation Policy",
        text: `Cancellations made 7 days prior to arrival are eligible for a full refund of the deposit. Cancellations made within less than 7 days may result in the forfeiture of the deposit amount.`,
      },
      {
        title: "7. Environmental Care",
        text: `As we are located between a forest and a river, guests are expected to respect nature. Littering or harming the local flora and fauna is strictly prohibited.`,
      },
    ],
  },
  ka: {
    title: "წესები და პირობები",
    last_update: "ბოლო განახლება",
    intro: `კეთილი იყოს თქვენი მობრძანება „თეზამი ვილაში“. მოცემული წესები არეგულირებს თქვენს სტუმრობასა და დასვენებას ჩვენს პრემიუმ სივრცეში, რომელიც მდებარეობს ცხვარიჭამიაში. დაჯავშნით ან ვიზიტით თქვენ ეთანხმებით ამ პირობებს.`,
    sections: [
      {
        title: "1. დაჯავშნა და რეგისტრაცია",
        text: `ჯავშანი დასტურდება დეპოზიტის გადახდის შემდეგ. ვილაში შესვლა (Check-in) შესაძლებელია 15:00 საათიდან, ხოლო გასვლა (Check-out) - 12:00 საათამდე, რათა მოხდეს სივრცის სრულფასოვანი დასუფთავება.`,
      },
      {
        title: "2. შინაგანაწესი და სიმშვიდის საათები",
        text: `„თეზამი ვილა“ სიმშვიდისა და განტვირთვის ადგილია. სტუმრები ვალდებულნი არიან დაიცვან სიმშვიდე. ხმამაღალი მუსიკა და ხმაური იკრძალება 23:00 საათის შემდეგ, რათა არ დაირღვეს ტყისპირა გარემოს ჰარმონია.`,
      },
      {
        title: "3. ქონების გამოყენება",
        text: `ვილა წარმოადგენს ორსართულიან კერძო საკუთრებას. სტუმრების რაოდენობა არ უნდა აღემატებოდეს დაჯავშნისას შეთანხმებულ ლიმიტს. ადმინისტრაციასთან წინასწარი შეთანხმების გარეშე წვეულებების მოწყობა დაუშვებელია.`,
      },
      {
        title: "4. აუზი და უსაფრთხოება",
        text: `აუზით სარგებლობა ხდება სტუმრების პასუხისმგებლობით. ბავშვები საჭიროებენ მუდმივ მეთვალყურეობას. უსაფრთხოების მიზნით, აუზის ტერიტორიაზე შუშის ჭურჭლის გამოყენება აკრძალულია.`,
      },
      {
        title: "5. დაზიანება და პასუხისმგებლობა",
        text: `სტუმარი პასუხისმგებელია ვილის ინვენტარის ნებისმიერ დაზიანებაზე. „თეზამი ვილა“ არ იღებს პასუხისმგებლობას სტუმრის პირადი ნივთების დაკარგვაზე ან იმ შემთხვევებზე, რომლებიც გამოწვეულია სტუმრის დაუდევრობით.`,
      },
      {
        title: "6. გაუქმების პოლიტიკა",
        text: `ჯავშნის გაუქმება სრული ანაზღაურებით შესაძლებელია ვიზიტამდე 7 დღით ადრე. 7 დღეზე ნაკლებ ვადაში გაუქმების შემთხვევაში, დეპოზიტი არ ბრუნდება.`,
      },
    ],
  },
};

export default function Terms() {
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

  const content: any = termsContent[language] || termsContent.en;
  const [showButton, setshowButton] = useState(false);

  useEffect(() => {
    const hasAccepted = Cookies.get("termsAccepted");
    if (!hasAccepted) {
      setTimeout(() => setshowButton(true), 500);
    }
  }, []);

  const acceptTerms = () => {
    Cookies.set("termsAccepted", "true", { expires: 365 });
    setshowButton(false);
  };

  return (
    <div
      className="min-h-screen bg-[#141a17] pt-32 pb-20 px-6 sm:px-8 lg:px-16"
      style={{ display: loading ? "none" : "block" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {content.title}
          </h1>
          <p className="text-[#D4AF37] font-medium uppercase tracking-widest text-sm">
            {content.last_update}: 15.03.2025
          </p>
        </header>

        {/* Intro */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-10">
          <p className="text-white/80 leading-relaxed text-lg">
            {content.intro}
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-10">
          {content.sections.map((section: any, index: any) => (
            <section key={index} className="group">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#D4AF37] text-sm opacity-50">
                  0{index + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-white/60 leading-relaxed pl-8 border-l border-white/5 group-hover:border-[#D4AF37] transition-colors">
                {section.text}
              </p>
            </section>
          ))}
        </div>

        {/* Accept Button Container */}
        {showButton && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
            <div className="bg-[#1c2521] border border-[#D4AF37]/30 p-6 rounded-3xl shadow-2xl shadow-black/50 backdrop-blur-md">
              <p className="text-white/80 text-xs mb-4 text-center">
                By clicking accept, you agree to our house rules and policies.
              </p>
              <button
                onClick={acceptTerms}
                className="w-full bg-[#D4AF37] text-black py-4 rounded-2xl font-bold hover:brightness-110 active:scale-[0.98] transition shadow-lg"
              >
                {activeLanguage?.i_accept || "I Accept & Agree"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
