import type { Axios, AxiosRequestConfig } from 'axios'

interface IHttp extends Axios {}
interface IGetConfig extends AxiosRequestConfig {}
interface IPostConfig extends AxiosRequestConfig {}
interface IPutConfig extends AxiosRequestConfig {}
interface IDeleteConfig extends AxiosRequestConfig {}

export abstract class HttpService {
  constructor(protected readonly http: IHttp) {
    this.http = http
    this.requestConfig()
  }

  private requestConfig() {
    this.http.interceptors.request.use((config) => {
      config.params = {
        ...config.params,
        apiKey: import.meta.env.VITE_NEWS_API_KEY
      }
      return config
    })
  }

  protected async get<T>(url: string, config: IGetConfig) {
    return this.http.get<T>(url, config)
  }

  protected async post<T>(url: string, data: unknown, config: IPostConfig) {
    return this.http.post<T>(url, data, config)
  }

  protected async put<T>(url: string, data: unknown, config: IPutConfig) {
    return this.http.put<T>(url, data, config)
  }

  protected async delete<T>(url: string, config: IDeleteConfig) {
    return this.http.delete<T>(url, config)
  }
}
