import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

// components
import Movies from './Movies'
import Loading from './Loading'

const apiKey = 'ea92314d'

// to do
// esperar la carga de la data
// capturar el error

function App () {
  const searchRef = useRef(null)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getMovies = (query = 'batman') => {
    return axios.get(`
      http://www.omdbapi.com/?apikey=${apiKey}&s=${query}
    `).then(response => response)
  }

  const getData = async () => {
    // const { data: { Search } } = await getMovies()
    // setMovies(Search)
    const { data } = await getMovies()
    setMovies(data.Search)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getMovies(searchRef.current.value)
    if (data.Response === 'False') {
      setError(data.Error)
      setMovies([])
    } else {
      setMovies(data.Search)
    }
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
