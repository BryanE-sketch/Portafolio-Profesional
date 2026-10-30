/** Idiomas disponibles en el portafolio. */
export type Lang = 'es' | 'en'

/** Un texto con su versión en cada idioma. */
export type Localized = Record<Lang, string>

export interface Profile {
  name: string
  shortName: string
  role: Localized
  location: Localized
  availability: Localized
  headline: Localized
  intro: Localized
  links: {
    github: string
    linkedin: string
    email: string
    cv: string
  }
}

export interface Project {
  id: string
  title: string
  /** El problema que resuelve, en una frase. */
  summary: Localized
  /** De 2 a 4 puntos: qué construiste y qué decisiones tomaste. */
  highlights: Localized[]
  tech: string[]
  repo?: string
  demo?: string
  status?: Localized
  /** El proyecto destacado ocupa el ancho completo. Solo uno. */
  featured?: boolean
  /** Borrador: visible en desarrollo, oculto en producción. */
  draft?: boolean
}

export interface StackGroup {
  title: Localized
  items: string[]
}