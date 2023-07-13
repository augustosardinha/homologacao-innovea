import type { INewsApiArticle } from '@/interfaces/news-api.dto'
import { reactive } from 'vue'

type ArticlesLanguages = 'br' | 'en'

export const articlesStore = reactive({
  articles: [] as INewsApiArticle[],
  isLoading: false,
  pageSize: 2,
  language: 'br' as ArticlesLanguages,
  updateArticles(newArticles: INewsApiArticle[]) {
    this.articles = newArticles
  }
})
