// estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// librerías
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// componentes
import App from './components/App'

// pd: borrar el StrictMode antes de desplegar
createRoot(document.getElementById('root')).render(
  <App />
)
