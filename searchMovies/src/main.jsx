// estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// librerías
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// componentes
import App from './components/App'
import Paths from './routes'

// pd: borrar el StrictMode antes de desplegar
createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </>
)
