import axios from 'axios'

export interface ResponseDto {
  isError: boolean
  isLoading: boolean
}

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30000
})

export const fetcher = (url: string) => apiClient.get(url).then(res => res.data)

// apiClient.interceptors.request.use(config => {
//   // config.headers['Authorization'] = `Bearer ${Cookies.get('auth_token')}`
//   return config
// })

export default apiClient
