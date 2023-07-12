import type { INewsApiArticle } from '@/interfaces/news-api.dto'

export interface INewsApiContract {
  getTopArticles: (articlesPageSize: number) => Promise<INewsApiArticle[] | []>
  searchArticles: (query: string, articlesPageSize: number) => Promise<INewsApiArticle[] | []>
}
