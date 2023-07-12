<script setup lang="ts">
import { NewsApiService } from '@/services'
import { ARTICLES_KEY } from '@/constants/article'
import { ref, watch, inject } from 'vue'
import type { IArticlesProvider } from '@/interfaces/provider'
import type { INewsApiArticle } from '@/interfaces/news-api.dto'

const { articlesPageSize, updateArticles } = inject(ARTICLES_KEY) as IArticlesProvider

const search = ref('')

const searchArticles = async (query: string) => {
  let newArticles: INewsApiArticle[] | []

  if (!query.length) {
    newArticles = await NewsApiService.getTopArticles(articlesPageSize)
  } else {
    newArticles = await NewsApiService.searchArticles(query, articlesPageSize)
  }
  updateArticles(newArticles)
}

watch(search, () => searchArticles(search.value), {})
</script>

<template>
  <label class="text-white text-xl flex justify-center items-center gap-4">
    Search
    <input
      v-model="search"
      type="text"
      name="search"
      id="seach"
      class="border p-4 text-lg text-gray-900"
    />
  </label>
</template>
