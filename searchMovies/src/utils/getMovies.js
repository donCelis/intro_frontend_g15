import axios from 'axios'

const apiKey = 'ea92314d'

const getMovies = (query) => {
  return axios.get(`
    http://www.omdbapi.com/?apikey=${apiKey}&s=${query}
  `).then(response => response)
}

export default getMovies
