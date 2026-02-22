import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

const locales = ["en", "ka", "ru"];
const defaultLocale = "en";

export default function RootRedirectPage() {
  const cookieStore = cookies();
  const cookieLang = cookieStore.get("language")?.value;

  const headerLang = headers().get("accept-language");
  const browserLang = headerLang?.split(",")[0].split("-")[0];
  const selectedLang =
    (cookieLang && locales.includes(cookieLang) && cookieLang) ||
    (browserLang && locales.includes(browserLang) && browserLang) ||
    defaultLocale;

  // მხოლოდ root (/)-ზე ყოფნისას redirect-ს აკეთებს
  redirect(`/${selectedLang}`);
}
