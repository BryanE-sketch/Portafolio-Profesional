import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { useLang } from './hooks/useLang'
import { ui } from './i18n/ui'

export default function App() {
  const { lang, toggleLang } = useLang()
  const t = ui[lang]

  return (
    <>
      <a className="skip-link" href="#contenido">
        {t.skip}
      </a>

      <Header lang={lang} t={t} onToggleLang={toggleLang} />

      <main id="contenido">
        <Hero lang={lang} t={t} />
        <Projects lang={lang} t={t} />
        <Stack lang={lang} t={t} />
        <About lang={lang} t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  )
}
