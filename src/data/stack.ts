import type { StackGroup } from './types'

export const stack: StackGroup[] = [
  {
    title: { es: 'Interfaz', en: 'Frontend' },
    items: ['React', 'TypeScript', 'JavaScript', 'HTML y CSS', 'Tailwind CSS', 'HTMX'],
  },
  {
    title: { es: 'Servidor', en: 'Backend' },
    items: ['Python', 'Django', 'Django REST Framework', 'Java', 'APIs REST'],
  },
  {
    title: { es: 'Datos y nube', en: 'Data & cloud' },
    items: ['PostgreSQL (Neon)', 'Cloudinary', 'Render', 'Vercel'],
  },
  {
    title: { es: 'Forma de trabajo', en: 'Workflow' },
    items: ['Git y GitHub', 'GitHub Actions', 'Tests automáticos', 'Accesibilidad web'],
  },
]
