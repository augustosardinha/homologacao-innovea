import type { ArticleCountries, INewsApiArticle } from '@/interfaces/news-api.dto'
import { reactive } from 'vue'

export const articlesStore = reactive({
  articles: [] as INewsApiArticle[],
  isLoading: false,
  pageSize: 5,
  country: 'br' as ArticleCountries,
  updateArticles(newArticles: INewsApiArticle[]) {
    this.articles = newArticles
  }
})
