<script setup lang="ts">
import { onMounted, ref, provide } from 'vue'

import TheHeader from '@/components/TheHeader.vue'
import TheCard from '@/components/TheCard.vue'
import TheSearcher from '@/components/TheSearcher.vue'
import SkeletonLoading from '@/components/SkeletonLoading.vue'

import { NewsApiService } from '@/services'
import { ARTICLES_KEY } from '@/constants/article'

import type { INewsApiArticle } from '@/interfaces/news-api.dto'
import type { IArticlesProvider } from '@/interfaces/provider'

const articles = ref<INewsApiArticle[]>([])
const isArticlesLoading = ref(false)

const articlesPageSize = 2

const getTopHeadlines = async () => {
  isArticlesLoading.value = true

  const newArticles = await NewsApiService.getTopArticles(articlesPageSize)
  updateArticles(newArticles)

  isArticlesLoading.value = false
}

const updateArticles = (newArticles: INewsApiArticle[] | []) => {
  articles.value = newArticles
}

provide<IArticlesProvider>(ARTICLES_KEY, {
  articles,
  articlesPageSize,
  updateArticles
})

onMounted(() => getTopHeadlines())
</script>

<template>
  <div class="bg-zinc-900 min-h-screen w-full">
    <TheHeader />

    <main class="container flex flex-col gap-8 mx-auto p-8">
      <TheSearcher />

      <TransitionGroup
        name="list"
        mode="out-in"
        class="flex flex-wrap justify-center items-center gap-4"
        tag="section"
      >
        <SkeletonLoading
          v-if="isArticlesLoading"
          width="500"
          height="200"
          :count="articlesPageSize"
          class="!gap-4"
        />
        <template v-else>
          <TheCard
            v-for="article in articles"
            :key="article.id"
            v-bind="article"
            @update:articles="(newArticles) => (articles = newArticles)"
          />
        </template>
      </TransitionGroup>
    </main>
  </div>
</template>
