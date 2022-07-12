import { useRef } from 'react'

function App () {
  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
  }

  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscador de peliculas</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={searchRef}
            type='search'
            placeholder='Nombre de la pelicula...'
            className='form-control'
            name='buscador'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
    </section>
  )
}

export default App
