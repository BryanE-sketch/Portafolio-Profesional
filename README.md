# Portafolio · Brayan Echeverri

[![CI](https://github.com/BryanE-sketch/Portafolio-Profesional/actions/workflows/ci.yml/badge.svg)](https://github.com/BryanE-sketch/Portafolio-Profesional/actions/workflows/ci.yml)

Portafolio personal de **Brayan Echeverri Medina**, desarrollador full stack junior. Presento mis proyectos, el stack con el que trabajo y una forma directa de contactarme.

**Demo:** _se publicará en Vercel_

## Características

- Bilingüe español / inglés, con el idioma recordado entre visitas.
- Contenido separado de la presentación: añadir un proyecto es editar un archivo de datos tipado.
- Proyectos en borrador visibles en desarrollo y ocultos automáticamente en producción.
- Accesible: navegación por teclado, enlace para saltar al contenido, foco visible, HTML semántico y respeto a `prefers-reduced-motion`.
- Fuentes alojadas en el propio proyecto, sin peticiones a servidores de terceros.
- Tests unitarios y de integración, e integración continua en cada PR.

## Stack

| Capa       | Tecnología                                     |
| ---------- | ---------------------------------------------- |
| Interfaz   | React 19, TypeScript, CSS con tokens de diseño |
| Build      | Vite                                           |
| Tests      | Vitest, Testing Library, jsdom                 |
| Calidad    | Oxlint, Prettier, GitHub Actions               |
| Despliegue | Vercel                                         |

## Auditoría (Lighthouse, móvil)

| Performance | Accessibility | Best Practices | SEO |
| :---------: | :-----------: | :------------: | :-: |
|     97      |      100      |      100       | 100 |

## Decisiones técnicas

- **Sin librerías de UI.** CSS propio con variables (tokens) para colores, tipografía y espaciado. El sitio es pequeño y así cada estilo es explicable.
- **Un CSS por componente.** Si un componente se elimina, sus estilos se van con él.
- **Estado del idioma en `App`.** Cabecera y secciones leen la misma fuente, así que nunca quedan en idiomas distintos.
- **Tipos para los textos bilingües.** `Record<'es' | 'en', string>` impide que un texto quede sin traducir.
- **Tests orientados al usuario.** Los elementos se buscan por su rol y nombre accesible, no por clases CSS.

## Ejecutar en local

Requiere Node.js 20.19 o superior.

```bash
git clone https://github.com/BryanE-sketch/Portafolio-Profesional.git
cd Portafolio-Profesional
npm install
npm run dev
```

| Comando           | Qué hace                                                     |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo (muestra los borradores)              |
| `npm run build`   | Comprueba tipos y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve la versión de producción en local                      |
| `npm test`        | Ejecuta los tests                                            |
| `npm run lint`    | Revisa el código con Oxlint                                  |
| `npm run format`  | Formatea el código con Prettier                              |

## Estructura

```
src/
├── components/   # Secciones de la página, cada una con su CSS
├── data/         # Perfil, proyectos y stack (contenido tipado)
├── hooks/        # useLang, useReducedMotion
├── i18n/         # Textos de la interfaz en ES/EN
├── lib/          # Lógica pura y testeable
├── styles/       # Tokens de diseño, estilos globales y piezas compartidas
└── test/         # Configuración de los tests
```

## Contacto

**Brayan Echeverri Medina** · echeverry28brayan@gmail.com · [GitHub](https://github.com/BryanE-sketch)
