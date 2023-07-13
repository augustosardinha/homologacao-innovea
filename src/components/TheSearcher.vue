<script setup lang="ts">
import { NewsApiService } from '@/services'
import { ref, watch } from 'vue'
import type { INewsApiArticle } from '@/interfaces/news-api.dto'
import { articlesStore } from '@/store/article'

const search = ref('')

const searchArticles = async (query: string) => {
  let newArticles: INewsApiArticle[] | []

  articlesStore.isLoading = true

  if (!query.length) {
    newArticles = await NewsApiService.getTopArticles(articlesStore.pageSize)
  } else {
    newArticles = await NewsApiService.searchArticles(query, articlesStore.pageSize)
  }

  articlesStore.isLoading = false

  articlesStore.updateArticles(newArticles)
}

watch(search, () => searchArticles(search.value))
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
