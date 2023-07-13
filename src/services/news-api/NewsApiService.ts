import type { INewsApiContract } from '@/services/news-api/NewsApiContract'
import { HttpService } from '@/services/HttpService'
import type { ArticleCountries, INewsApiArticle, INewsApiResource } from '@/interfaces/news-api.dto'

export class NewsApiService extends HttpService implements INewsApiContract {
  public async getTopArticles(
    pageSize = 5,
    country: ArticleCountries = 'br'
  ): Promise<INewsApiArticle[] | []> {
    try {
      const { data: newsApiResource } = await this.get<INewsApiResource>('/top-headlines', {
        params: {
          country,
          pageSize
        }
      })
      return this.formatArticles(newsApiResource.articles)
    } catch (error) {
      return []
    }
  }

  public async searchArticles(
    query: string,
    pageSize?: number,
    country: ArticleCountries = 'br'
  ): Promise<INewsApiArticle[] | []> {
    try {
      const { data: newsApiResource } = await this.get<INewsApiResource>('/everything', {
        params: {
          q: query,
          pageSize,
          language: this.getArticleLanguage(country)
        }
      })
      return this.formatArticles(newsApiResource.articles)
    } catch (error) {
      return []
    }
  }

  private formatArticles(articles: INewsApiArticle[]) {
    return articles.map((article) => {
      return {
        ...article,
        author: article.author ? article.author : '----',
        id: window.crypto.randomUUID()
      }
    })
  }

  private getArticleLanguage(country: ArticleCountries = 'br') {
    return country === 'br' ? 'pt' : 'en'
  }
}
