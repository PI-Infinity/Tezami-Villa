import { AppContextWrapper } from "@/context/app";
import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

// 🔥 `generateMetadata()` სერვერის მხარეს ქმნის დინამიურ `metadata`
export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Premium Event Planning | Tezami Villa",
    ka: "პრემიუმ ივენთების ორგანიზება | Tezami Villa",
    ru: "Премиум организация мероприятий | Tezami Villa",
  };

  const descriptions: Record<string, string> = {
    en: "Wedding & corporate events planning in Georgia. Unique ideas, flawless execution. Book your unforgettable event now with Tezami Villa!",
    ka: "ქორწილები, კორპორატიული ივენთები, თიმ ბილდინგი და სხვა – უნიკალური კონცეფციები და პროფესიონალური მომსახურება. დაგეგმე ივენთი დღესვე!",
    ru: "Свадьбы, корпоративы, тимбилдинги и другие события под ключ. Уникальные идеи и безупречный сервис. Организуйте праздник мечты уже сегодня!",
  };

  return {
    title: titles[lang] || titles["en"],
    description: descriptions[lang] || descriptions["en"],
    openGraph: {
      title: titles[lang] || titles["en"],
      description: descriptions[lang] || descriptions["en"],
      url: "https://tezamivilla.com",
      type: "website",
      siteName: "Tezami Villa",
      images: [
        {
          url: "/videocover.webp",
          width: 800,
          height: 600,
          alt: "Tezami Villa",
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          url: "/tezami-favicon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          url: "/tezami-favicon.png",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ background: "#000" }}>
        <AppContextWrapper>
          <main className="flex-grow w-full">{children}</main>
        </AppContextWrapper>
      </body>
    </html>
  );
}
