import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  timeout: 8000,
})

export default apiClient
