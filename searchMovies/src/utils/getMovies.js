import axios from 'axios'

const apiKey = 'ea92314d'
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`

// tarea: hacer que la función getMovies devuelva el error
export const getMovies = async (query) => {
  return await axios.get(`${baseUrl}&s=${query}`)
}
export const getMovie = async (id) => {
  return await axios.get(`${baseUrl}&i=${id}`)
}
