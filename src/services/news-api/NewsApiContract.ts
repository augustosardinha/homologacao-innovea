import type { ArticleCountries, INewsApiArticle } from '@/interfaces/news-api.dto'

export interface INewsApiContract {
  getTopArticles: (pageSize: number, country: ArticleCountries) => Promise<INewsApiArticle[] | []>
  searchArticles: (
    query: string,
    pageSize: number,
    country: ArticleCountries
  ) => Promise<INewsApiArticle[] | []>
}
