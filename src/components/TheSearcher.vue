<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStorage, watchThrottled } from '@vueuse/core'
import { NewsApiService } from '@/services'
import { articlesStore } from '@/store/article'
import type { INewsApiArticle } from '@/interfaces/news-api.dto'

const search = ref('')

const country = useStorage('user-country', 'br')

const searchArticles = async (query: string) => {
  let newArticles: INewsApiArticle[] | []

  articlesStore.isLoading = true

  if (!query.length) {
    newArticles = await NewsApiService.getTopArticles(articlesStore.pageSize, articlesStore.country)
  } else {
    newArticles = await NewsApiService.searchArticles(
      query,
      articlesStore.pageSize,
      articlesStore.country
    )
  }

  articlesStore.isLoading = false

  articlesStore.updateArticles(newArticles)
}

watchThrottled(search, () => searchArticles(search.value), { throttle: 1500 })

watch(country, () => {
  searchArticles(search.value)
})
</script>

<template>
  <label class="text-2xl flex justify-center items-center gap-4">
    <input
      v-model="search"
      type="text"
      name="search"
      id="seach"
      :placeholder="country === 'br' ? 'ChatGPT como usar...' : 'How to use ChatGPT'"
      class="border p-4 text-lg text-slate-900 rounded-md w-full md:w-1/3"
    />
  </label>
</template>
