import { profile } from '../data/profile'
import type { UI } from '../i18n/ui'
import './Footer.css'

/** Se calcula una vez al cargar el archivo, no en cada render. */
const YEAR = new Date().getFullYear()

interface FooterProps {
  t: UI
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="container footer">
      <p>{t.footer}</p>
      <p>
        © {YEAR} {profile.name}
      </p>
    </footer>
  )
}
