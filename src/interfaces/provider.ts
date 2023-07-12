import type { INewsApiArticle } from '@/interfaces/news-api.dto'
import type { Ref } from 'vue'

export interface IArticlesProvider {
  articles: Ref<INewsApiArticle[]>
  articlesPageSize: number
  updateArticles: (articles: INewsApiArticle[]) => void
}
