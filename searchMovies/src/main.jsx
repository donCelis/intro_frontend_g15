// estilos
import './styles/index.css'

// librerías
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// componentes
import App from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
