import { useState } from 'react'
import { profile } from '../data/profile'
import type { UI } from '../i18n/ui'
import './Contact.css'

interface ContactProps {
  t: UI
}

export function Contact({ t }: ContactProps) {
  const [copied, setCopied] = useState(false)
  const { email, linkedin, github } = profile.links

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch {
      // Si el navegador no permite copiar, abrimos el cliente de correo
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section id="contacto" className="container section contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section__title">
        {t.contactTitle}
      </h2>
      <p className="section__lead">{t.contactLead}</p>

      <a className="contact__email" href={`mailto:${email}`}>
        {email}
      </a>

      <div className="contact__actions">
        <a className="btn btn--primary" href={`mailto:${email}`}>
          {t.contactEmail}
        </a>
        <button type="button" className="btn" onClick={copyEmail}>
          {copied ? t.copied : t.copy}
        </button>
        {linkedin && (
          <a className="btn" href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {github && (
          <a className="btn" href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>

      {/* Anuncia "Correo copiado" a los lectores de pantalla */}
      <p className="sr-only" aria-live="polite">
        {copied ? t.copied : ''}
      </p>
    </section>
  )
}
