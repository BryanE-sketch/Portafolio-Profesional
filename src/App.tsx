const swatches = [
  { name: 'bg', value: 'var(--color-bg)' },
  { name: 'surface', value: 'var(--color-surface)' },
  { name: 'border', value: 'var(--color-border)' },
  { name: 'primary', value: 'var(--color-primary)' },
  { name: 'accent', value: 'var(--color-accent)' },
  { name: 'text', value: 'var(--color-text)' },
]

export default function App() {
  return (
    <main style={{ padding: 'var(--space-6) var(--gutter)', display: 'grid', gap: 'var(--space-3)' }}>
      <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Desarrollador Full Stack</p>
      <h1 style={{ fontSize: 'var(--text-hero)', fontWeight: 900, letterSpacing: '-0.035em' }}>
        Brayan Echeverri Medina
      </h1>
      <p style={{ color: 'var(--color-text-muted)', maxWidth: '58ch' }}>
        Pantalla temporal para comprobar tipografías y colores. La sustituiremos en la fase 4.
      </p>

      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        {swatches.map((s) => (
          <li key={s.name} style={{ display: 'grid', gap: 'var(--space-1)', fontSize: 'var(--text-sm)' }}>
            <span
              style={{
                width: 72,
                height: 72,
                background: s.value,
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
              }}
            />
            {s.name}
          </li>
        ))}
      </ul>
    </main>
  )
}