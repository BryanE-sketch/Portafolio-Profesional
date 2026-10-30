import { projects } from '../data/projects'
import type { Lang, Project } from '../data/types'
import type { UI } from '../i18n/ui'
import { getVisibleProjects } from '../lib/visibleProjects'
import './Projects.css'

/** Los borradores solo se muestran mientras desarrollas (npm run dev). */
const SHOW_DRAFTS = import.meta.env.DEV

interface ProjectsProps {
  lang: Lang
  t: UI
}

export function Projects({ lang, t }: ProjectsProps) {
  const { featured, others } = getVisibleProjects(projects, SHOW_DRAFTS)

  return (
    <section id="proyectos" className="container section" aria-labelledby="projects-title">
      <header className="section__head">
        <h2 id="projects-title" className="section__title">
          {t.projectsTitle}
        </h2>
        <p className="section__lead">{t.projectsLead}</p>
      </header>

      {featured && (
        <article className="featured">
          <div className="featured__main">
            {featured.status && <p className="project-status">{featured.status[lang]}</p>}
            <h3 className="featured__title">{featured.title}</h3>
            <p className="featured__summary">{featured.summary[lang]}</p>
            <TechList items={featured.tech} />
            <ProjectLinks project={featured} t={t} />
          </div>
          <HighlightList items={featured.highlights.map((h) => h[lang])} />
        </article>
      )}

      {others.length > 0 && (
        <ul className="project-rows">
          {others.map((project) => (
            <li key={project.id} className={project.draft ? 'project-row is-draft' : 'project-row'}>
              <div>
                <h3 className="project-row__title">{project.title}</h3>
                {project.status && <p className="project-status">{project.status[lang]}</p>}
                {project.draft && <span className="draft-badge">{t.draft}</span>}
              </div>
              <div>
                <p className="project-row__summary">{project.summary[lang]}</p>
                <HighlightList items={project.highlights.map((h) => h[lang])} />
                <TechList items={project.tech} />
                <ProjectLinks project={project} t={t} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function HighlightList({ items }: { items: string[] }) {
  return (
    <ul className="highlights">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="tech-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project, t }: { project: Project; t: UI }) {
  if (!project.repo && !project.demo) return null

  return (
    <div className="project-links">
      {project.demo && (
        <a className="link" href={project.demo} target="_blank" rel="noreferrer">
          {t.demo}
        </a>
      )}
      {project.repo && (
        <a className="link" href={project.repo} target="_blank" rel="noreferrer">
          {t.code}
        </a>
      )}
    </div>
  )
}
