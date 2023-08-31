import axios from 'axios'

// export const BASE_URL = 'https://rickandmortyapi.com/api'

// export const api = axios.create({
//   baseURL: BASE_URL,
// })

export const BASE_URL = 'https://www.googleapis.com/books/v1/'

export const api = axios.create({
  baseURL: BASE_URL,
})
