import { describe, expect, it } from 'vitest'
import type { Project } from '../data/types'
import { getVisibleProjects } from './visibleProjects'

/** Crea un proyecto de prueba con solo los campos que importan en cada test. */
function makeProject(overrides: Partial<Project>): Project {
  return {
    id: 'demo',
    title: 'Demo',
    summary: { es: '', en: '' },
    highlights: [],
    tech: [],
    ...overrides,
  }
}

describe('getVisibleProjects', () => {
  const featured = makeProject({ id: 'a', featured: true })
  const normal = makeProject({ id: 'b' })
  const draft = makeProject({ id: 'c', draft: true })
  const all = [normal, featured, draft]

  it('separa el proyecto destacado del resto', () => {
    const result = getVisibleProjects(all, true)

    expect(result.featured).toBe(featured)
    expect(result.others).not.toContain(featured)
  })

  it('oculta los borradores en producción', () => {
    const result = getVisibleProjects(all, false)

    expect(result.others).toEqual([normal])
  })

  it('muestra los borradores en desarrollo', () => {
    const result = getVisibleProjects(all, true)

    expect(result.others).toEqual([normal, draft])
  })
})
