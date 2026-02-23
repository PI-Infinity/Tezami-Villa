"use client";

import { useAppContext } from "@/context/app";
import "../app/tezami-about.css";

const translations: any = {
  GE: {
    small: "Tezami შესახებ",
    title1: "პირადი თავშესაფარი",
    title2: "ტყესა და მდინარეს შორის",
    text: `Tezami არის ორსართულიანი კერძო ვილა, რომელიც ცავკისის
ბუნებრივ ლანდშაფტში მდებარეობს. ტყით, მდინარით და
მთის ხედებით გარშემორტყმული სივრცე გთავაზობთ სრულ
კონფიდენციალურობას და დახვეწილ კომფორტს.
შექმნილია მშვიდი დილებისთვის და დაუვიწყარი საღამოებისთვის.`,
    f1: "პირადი აუზი",
    f2: "2 სართული",
    f3: "მთის ხედები",
  },
  EN: {
    small: "About Tezami",
    title1: "A Private Escape",
    title2: "Between Forest and River",
    text: `Tezami is a two-storey private villa nestled in the natural
landscape of Tsavkisi. Surrounded by forest, flowing river and
mountain views, it offers complete privacy and refined comfort.
Designed for slow mornings and unforgettable evenings.`,
    f1: "Private Pool",
    f2: "2 Floors",
    f3: "Mountain Views",
  },
  RU: {
    small: "О Tezami",
    title1: "Частное пространство",
    title2: "между лесом и рекой",
    text: `Tezami — это двухэтажная частная вилла,
расположенная в природном ландшафте Цавкиси.
Окруженная лесом, рекой и видом на горы,
она предлагает полную приватность и комфорт.
Идеальное место для спокойных утр и уютных вечеров.`,
    f1: "Частный бассейн",
    f2: "2 этажа",
    f3: "Вид на горы",
  },
};

export default function About() {
  const { language } = useAppContext();
  const t = translations[language?.toUpperCase()] || translations.GE;

  return (
    <>
      <section className="about" id="about">
        <div className="about-container">
          <img src="/view.webp" alt="Tezami Villa" />

          <div>
            <div className="about-small">{t.small}</div>

            <h2 className="about-title">
              {t.title1}
              <br />
              {t.title2}
            </h2>

            <div className="divider"></div>

            <p className="about-text">{t.text}</p>

            <div className="features">
              <div className="feature">{t.f1}</div>
              <div className="feature">{t.f2}</div>
              <div className="feature">{t.f3}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
