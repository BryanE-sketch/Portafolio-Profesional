import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    // Empezamos siempre en español, sea cual sea el idioma del entorno de test
    localStorage.setItem('portfolio-lang', 'es')
  })

  it('muestra el nombre como título principal', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Brayan Echeverri Medina')
  })

  it('cambia a inglés al pulsar el botón de idioma', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'English' }))

    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
  })

  it('recuerda el idioma elegido', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'English' }))

    expect(localStorage.getItem('portfolio-lang')).toBe('en')
  })
})
