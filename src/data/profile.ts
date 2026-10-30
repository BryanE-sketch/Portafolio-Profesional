import type { Localized, Profile } from './types'

export const profile: Profile = {
  name: 'Brayan Echeverri Medina',
  shortName: 'Brayan Echeverri',
  role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
  location: { es: 'Marbella, España', en: 'Marbella, Spain' },
  availability: {
    es: 'Disponible para remoto, híbrido o presencial',
    en: 'Open to remote, hybrid or on-site roles',
  },
  headline: {
    es: 'Construyo aplicaciones web de punta a punta.',
    en: 'I build web applications end to end.',
  },
  intro: {
    es: 'Interfaces en React y TypeScript, APIs con Django y datos desplegados en la nube. Recién graduado del Máster en Desarrollo Web Full Stack y buscando mi primer equipo.',
    en: 'React and TypeScript interfaces, Django APIs and data deployed to the cloud. Fresh graduate of a Full Stack Web Development master’s, looking for my first team.',
  },
  // Deja una cadena vacía ('') para ocultar el botón correspondiente.
  links: {
    github: 'https://github.com/BryanE-sketch',
    linkedin: '', // Lo completaremos en la fase 9
    email: 'echeverry28brayan@gmail.com',
    cv: '', // Ruta al PDF dentro de /public, p. ej. '/cv-brayan-echeverri.pdf'
  },
}

export const about: Localized[] = [
  {
    es: 'Nací en Dosquebradas, Colombia, y hoy vivo en Marbella. Llegué a la programación como cambio de rumbo profesional, y eso me dejó una costumbre: antes de escribir código, entender quién va a usar lo que construyo y qué problema le resuelve.',
    en: 'I was born in Dosquebradas, Colombia, and now live in Marbella. I came to programming as a career change, which left me with a habit: before writing code, understand who will use what I build and what problem it solves for them.',
  },
  {
    es: 'En el máster trabajé el ciclo completo: interfaces con React y TypeScript, backend con Python, Django y Java, bases de datos PostgreSQL en Neon, imágenes en Cloudinary, tests automáticos y despliegues en Render. Busco un equipo donde aplicar todo eso a producto real y seguir aprendiendo de gente con más experiencia.',
    en: 'During the master’s I worked across the whole cycle: React and TypeScript interfaces, backend with Python, Django and Java, PostgreSQL databases on Neon, images on Cloudinary, automated tests and deployments on Render. I’m looking for a team where I can apply all of it to a real product and keep learning from more experienced people.',
  },
]