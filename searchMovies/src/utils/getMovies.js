import axios from 'axios'

const apiKey = 'ea92314d'
const url = `http://www.omdbapi.com/?apikey=${apiKey}`

export const getMovies = async (query) => {
  return await axios.get(`${url}&s=${query}`)
}
export const getMovie = async (id) => {
  return await axios.get(`${url}&i=${id}`)
}
