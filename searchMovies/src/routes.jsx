import { Routes, Route } from 'react-router-dom'
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
        <Route path='/portfolio' element={<Products />} />
        <Route path='/portfolio/:productId' element={<Product />} />
        <Route path='/contact' element={<p>contact</p>} />
      </Routes>
    </section>
  )
}

export default Paths
