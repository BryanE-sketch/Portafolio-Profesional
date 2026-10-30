import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/red-hat-display/500.css'
import '@fontsource/red-hat-display/700.css'
import '@fontsource/red-hat-display/900.css'
import '@fontsource/red-hat-text/400.css'
import '@fontsource/red-hat-text/500.css'
import '@fontsource/red-hat-text/600.css'
import './styles/tokens.css'
import './styles/global.css'
import './styles/ui.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
