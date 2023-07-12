import axios from 'axios'
import { NewsApiService as NewsApiServiceHTTP } from '@/services/news-api/NewsApiService'

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export const NewsApiService: NewsApiServiceHTTP = new NewsApiServiceHTTP(axiosConfig)

export default axiosConfig
