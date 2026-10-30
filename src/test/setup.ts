import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// jsdom no implementa matchMedia: lo simulamos con "sin preferencia de movimiento reducido"
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }),
})

// Cada test empieza con la página vacía y sin idioma guardado
afterEach(() => {
  cleanup()
  localStorage.clear()
})
