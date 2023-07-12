import type { INewsApiContract } from '@/services/news-api/NewsApiContract'
import { HttpService } from '@/services/HttpService'
import type { INewsApiArticle, INewsApiResource } from '@/interfaces/news-api.dto'

export class NewsApiService extends HttpService implements INewsApiContract {
  public async getTopArticles(articlesPageSize = 5): Promise<INewsApiArticle[] | []> {
    try {
      const { data: newsApiResource } = await this.get<INewsApiResource>('/top-headlines', {
        params: {
          country: 'br',
          pageSize: articlesPageSize
        }
      })
      return this.formatArticles(newsApiResource.articles)
    } catch (error) {
      return []
    }
  }

  public async searchArticles(
    query: string,
    articlesPageSize?: number
  ): Promise<INewsApiArticle[] | []> {
    try {
      const { data: newsApiResource } = await this.get<INewsApiResource>('/everything', {
        params: {
          q: query,
          pageSize: articlesPageSize
        }
      })
      return this.formatArticles(newsApiResource.articles)
    } catch (error) {
      return []
    }
  }

  private formatArticles(articles: INewsApiArticle[]) {
    return articles.map((article) => ({ ...article, id: window.crypto.randomUUID() }))
  }
}
