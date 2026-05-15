"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Map, Sparkles } from "lucide-react";
import { useAppContext } from "@/context/app";
import "../app/tezami-services.css";

const translations: any = {
  GE: {
    subtitle: "ექსკლუზიური კომფორტი",
    title: "ჩვენი სერვისები",
    services: [
      {
        title: "ღონისძიებების ორგანიზება",
        text: "დაბადების დღეები, კორპორატიული ივენთები და კერძო შეკრებები სრულად ორგანიზებული პრემიუმ სტანდარტით.",
        page: "events",
      },
      {
        title: "ტურები",
        text: "ინდივიდუალური და ჯგუფური ტურები ღვინის მარშრუტებით, ბუნებრივი ლოკაციებით და კულტურული გამოცდილებებით.",
        page: "tours",
      },
    ],
    extraTitle: "დამატებითი აქტივობები",
    extraText:
      "კერძო შეფი, იოგას სესიები, აუზის საღამოები, BBQ გამოცდილება და პერსონალიზებული სერვისები, რომლებიც თქვენს დასვენებას სრულიად ახალ დონეზე აიყვანს.",
    cta: "ინდივიდუალური მოთხოვნა",
  },

  EN: {
    subtitle: "Exclusive Comfort",
    title: "Our Services",
    services: [
      {
        title: "Event Organization",
        text: "Birthday parties, corporate events, and private gatherings organized with premium standards.",
        page: "events",
      },
      {
        title: "Tours",
        text: "Individual and group tours featuring wine routes, natural landscapes, and cultural experiences.",
        page: "tours",
      },
    ],
    extraTitle: "Additional Activities",
    extraText:
      "Private chef, yoga sessions, pool evenings, BBQ experiences, and personalized services that elevate your stay to a new level.",
    cta: "Request Custom Experience",
  },

  RU: {
    subtitle: "Эксклюзивный комфорт",
    title: "Наши услуги",
    services: [
      {
        title: "Организация мероприятий",
        text: "Дни рождения, корпоративные мероприятия и частные встречи, организованные по премиальным стандартам.",
        page: "events",
      },
      {
        title: "Туры",
        text: "Индивидуальные и групповые туры с винными маршрутами, природными локациями и культурными впечатлениями.",
        page: "tours",
      },
    ],
    extraTitle: "Дополнительные активности",
    extraText:
      "Частный шеф-повар, занятия йогой, вечеринки у бассейна, BBQ и персонализированные услуги для вашего идеального отдыха.",
    cta: "Индивидуальный запрос",
  },
};

export const Services = () => {
  const { language } = useAppContext();
  const t = translations[language.toUpperCase()] || translations.GE;

  const icons = [<CalendarDays size={26} />, <Map size={26} />];

  return (
    <>
      <section className="tez-services" id="services">
        <div className="tez-services__wrapper">
          <div className="tez-services__header">
            <div className="tez-services__subtitle">{t.subtitle}</div>
            <h2 className="tez-services__title">{t.title}</h2>
          </div>

          <div className="tez-services__grid">
            {t.services.map((service: any, i: number) => {
              console.log(service?.page);
              return (
                <motion.a
                  href={`${language}/${service?.page}`}
                  key={i}
                  className="tez-services__item cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                  <div className="tez-services__icon">{icons[i]}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </motion.a>
              );
            })}
          </div>

          <div className="tez-services__extra">
            <Sparkles size={32} style={{ marginBottom: 20, opacity: 0.6 }} />
            <h3>{t.extraTitle}</h3>
            <p>{t.extraText}</p>
            <div className="tez-services__cta">{t.cta}</div>
          </div>
        </div>
      </section>
    </>
  );
};
