import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'bexceptional',
    title: 'Bexceptional',
    featured: true,
    status: {
      es: 'Proyecto final del máster · en producción',
      en: 'Master’s final project · live',
    },
    summary: {
      es: 'Tienda online de ropa deportiva con comunidad de hábitos, desarrollada de principio a fin y desplegada en producción.',
      en: 'Sportswear online store with a habits community, built end to end and deployed to production.',
    },
    highlights: [
      {
        es: 'Tienda en React con filtros, búsqueda, orden y paginación. El estado de los filtros vive en la URL, así que cualquier búsqueda se puede compartir.',
        en: 'React store with filters, search, sorting and pagination. Filter state lives in the URL, so any search can be shared.',
      },
      {
        es: 'API REST pública con Django REST Framework, documentada con OpenAPI.',
        en: 'Public REST API with Django REST Framework, documented with OpenAPI.',
      },
      {
        es: 'Cuentas con bloqueo tras 5 intentos fallidos y pago simulado con validación Luhn, sin guardar datos de tarjeta.',
        en: 'Accounts locked after 5 failed attempts and simulated payments with Luhn validation, storing no card data.',
      },
      {
        es: 'Más de 100 tests automáticos en GitHub Actions. Desplegado en Render con PostgreSQL en Neon e imágenes en Cloudinary.',
        en: 'Over 100 automated tests on GitHub Actions. Deployed on Render with PostgreSQL on Neon and images on Cloudinary.',
      },
    ],
    tech: ['Python', 'Django', 'Django REST Framework', 'React', 'HTMX', 'Tailwind CSS', 'PostgreSQL', 'Cloudinary', 'Render'],
    repo: 'https://github.com/BryanE-sketch/Bexceptional---PFM',
    demo: 'https://bexceptional.onrender.com',
  },
  {
    id: 'imperium-latin',
    title: 'Imperium Latin Barber Club',
    draft: true, // Lo publicaremos al terminarlo en la fase 8
    status: { es: 'En desarrollo · cliente real', en: 'In progress · real client' },
    summary: {
      es: 'Web y sistema de reservas propio para una barbería de Marbella, sin depender de plataformas de terceros.',
      en: 'Website and in-house booking system for a Marbella barbershop, without relying on third-party platforms.',
    },
    highlights: [
      {
        es: 'Calendario de reservas propio en lugar de Booksy: el negocio controla sus datos y no paga comisiones.',
        en: 'Custom booking calendar instead of Booksy: the business owns its data and pays no commissions.',
      },
      {
        es: 'Recordatorios por WhatsApp Cloud API, solo con consentimiento previo del cliente.',
        en: 'WhatsApp Cloud API reminders, sent only with the customers prior consent.',
      },
    ],
    tech: ['React', 'TypeScript', 'PostgreSQL', 'WhatsApp Cloud API'],
  },
]