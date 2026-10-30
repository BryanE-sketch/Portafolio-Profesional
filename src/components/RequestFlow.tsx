import { useReducedMotion } from '../hooks/useReducedMotion'
import type { UI } from '../i18n/ui'
import './RequestFlow.css'

/** Las piezas por las que pasa una petición en Bexceptional. */
const NODES = ['React', 'Django', 'Neon', 'Cloudinary']

interface RequestFlowProps {
  t: UI
}

export function RequestFlow({ t }: RequestFlowProps) {
  const reducedMotion = useReducedMotion()

  return (
    <figure className="flow">
      <ol className="flow__track">
        {NODES.map((tech, index) => (
          <li key={tech} className="flow__node">
            <span className="flow__tech">{tech}</span>
            <span className="flow__role">{t.flow[index]}</span>
          </li>
        ))}
        {!reducedMotion && <span className="flow__pulse" aria-hidden="true" />}
      </ol>
      <figcaption className="flow__caption">{t.flowCaption}</figcaption>
    </figure>
  )
}
