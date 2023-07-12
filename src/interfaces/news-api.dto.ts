export interface INewsApiArticle {
  id: string
  source: {
    id: string
    name?: string
  }
  author: string
  title: string
  description?: string
  url: string
  urlToImage?: string
  publishedAt: string
  content?: string
}

export interface INewsApiResource {
  status: string
  totalResults: number
  articles: INewsApiArticle[]
}
