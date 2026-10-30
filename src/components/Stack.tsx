import { stack } from '../data/stack'
import type { Lang } from '../data/types'
import type { UI } from '../i18n/ui'
import './Stack.css'

interface StackProps {
  lang: Lang
  t: UI
}

export function Stack({ lang, t }: StackProps) {
  return (
    <section id="stack" className="container section" aria-labelledby="stack-title">
      <header className="section__head">
        <h2 id="stack-title" className="section__title">
          {t.stackTitle}
        </h2>
      </header>

      <div className="stack">
        {stack.map((group) => (
          <div key={group.title.es} className="stack__group">
            <h3 className="stack__title">{group.title[lang]}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item} className="stack__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
