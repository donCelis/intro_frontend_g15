import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import App from './components/App'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { Product } from './components/Product'

const Paths = () => {
  return (
    <section className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/about' element={<p>about</p>} />
        <Route path='/portfolio' element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/contact' element={<p>contact</p>} />
        <Route path='/404' element={<p>404</p>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </section>
  )
}

export default Paths
