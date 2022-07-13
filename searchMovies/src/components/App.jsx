import { useRef } from 'react'

// hooks
import useFetcher from '../hooks/useFetcher'
// components
import Movies from './Movies'
import Loading from './Loading'
import getMovies from '../utils/getMovies'

function App () {
  const searchRef = useRef(null)
  const { data: movies, loading, error } = useFetcher('avengers')

  const handleSubmit = async (e) => {
    e.preventDefault()
    /* const { data } = await getMovies(searchRef.current.value)
    if (data.Response === 'False') {
      setError(data.Error)
      setMovies([])
    } else {
      setMovies(data.Search)
    } */
    const { data } = await getMovies(searchRef.current.value)
    console.log(data)
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
      <section className='py-4'>
        {loading ? <Loading /> : <Movies data={movies} />}
      </section>
    </section>
  )
}

export default App
