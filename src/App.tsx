import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { useLang } from "./hooks/useLang";
import { ui } from "./i18n/ui";

export default function App() {
  const { lang, toggleLang } = useLang();
  const t = ui[lang];

  return (
    <>
      <a className="skip-link" href="#contenido">
        {t.skip}
      </a>

      <Header lang={lang} t={t} onToggleLang={toggleLang} />

      <main id="contenido">
        <Hero lang={lang} t={t} />
      </main>
    </>
  );
}
