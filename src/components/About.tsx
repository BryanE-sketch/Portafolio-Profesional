import { about } from '../data/profile'
import type { Lang } from '../data/types'
import type { UI } from '../i18n/ui'
import './About.css'

interface AboutProps {
  lang: Lang
  t: UI
}

export function About({ lang, t }: AboutProps) {
  return (
    <section id="sobre-mi" className="container section" aria-labelledby="about-title">
      <header className="section__head">
        <h2 id="about-title" className="section__title">
          {t.aboutTitle}
        </h2>
      </header>

      <div className="about">
        {about.map((paragraph) => (
          <p key={paragraph.es}>{paragraph[lang]}</p>
        ))}
      </div>
    </section>
  )
}
