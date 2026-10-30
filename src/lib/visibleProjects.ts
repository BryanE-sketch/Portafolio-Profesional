import type { Project } from '../data/types'

/** Separa el proyecto destacado del resto y descarta los borradores si no se deben mostrar. */
export function getVisibleProjects(projects: Project[], showDrafts: boolean) {
  const visible = projects.filter((project) => showDrafts || !project.draft)
  const featured = visible.find((project) => project.featured)
  const others = visible.filter((project) => project !== featured)

  return { featured, others }
}
