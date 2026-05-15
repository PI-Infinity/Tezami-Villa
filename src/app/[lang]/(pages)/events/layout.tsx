import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Terms & Conditions – Service & Booking Terms | Tezami Villa",
    ka: "წესები და პირობები – მომსახურების დეტალური პირობები | Tezami Villa",
    ru: "Условия использования – всё о правилах услуг | Tezami Villa",
  };

  const descriptions: Record<string, string> = {
    en: "Read our full terms & conditions to understand your rights and our obligations. Transparency and professionalism guaranteed.",
    ka: "გაეცანი ჩვენს მომსახურების პირობებს – პასუხისმგებლობები, გარანტიები და ორგანიზაციის წესები დეტალურად აღწერილია აქ.",
    ru: "Ознакомьтесь с условиями предоставления услуг и бронирования. Честность, ответственность и прозрачность в каждом шаге.",
  };

  return {
    title: titles[lang] || titles["en"],
    description: descriptions[lang] || descriptions["en"],
    openGraph: {
      title: titles[lang] || titles["en"],
      description: descriptions[lang] || descriptions["en"],
      url: "https://tezamivilla.com/en/terms",
      type: "website",
      siteName: "Tezami Villa",
      images: [
        {
          url: "/videocover.webp",
          width: 800,
          height: 600,
          alt: "Tezami Villa Terms & Conditions",
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

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main>{children}</main>;
}
