import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

// components
import Movies from './Movies'

const apiKey = 'ea92314d'

function App () {
  const searchRef = useRef(null)
  const [movies, setMovies] = useState([])

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
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getMovies(searchRef.current.value)
    setMovies(data.Search)
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
      <Movies data={movies} />
    </section>
  )
}

export default App
