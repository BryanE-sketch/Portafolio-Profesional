import { profile } from '../data/profile'
import type { Lang } from '../data/types'
import type { UI } from '../i18n/ui'
import './Header.css'

interface HeaderProps {
  lang: Lang
  t: UI
  onToggleLang: () => void
}

export function Header({ lang, t, onToggleLang }: HeaderProps) {
  const otherLang = lang === 'es' ? 'en' : 'es'

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#inicio">
          {profile.shortName}
        </a>

        <nav>
          <ul className="header__nav">
            <li>
              <a href="#proyectos">{t.nav.projects}</a>
            </li>
            <li>
              <a href="#stack">{t.nav.stack}</a>
            </li>
            <li>
              <a href="#sobre-mi">{t.nav.about}</a>
            </li>
            <li>
              <a href="#contacto">{t.nav.contact}</a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="header__lang"
          onClick={onToggleLang}
          aria-label={t.langSwitchLabel}
          lang={otherLang}
        >
          {t.langSwitch}
        </button>
      </div>
    </header>
  )
}
