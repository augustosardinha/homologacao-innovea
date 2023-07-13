<script setup lang="ts">
import { onMounted } from 'vue'

import TheHeader from '@/components/TheHeader.vue'
import TheCard from '@/components/TheCard.vue'
import TheSearcher from '@/components/TheSearcher.vue'
import SkeletonLoading from '@/components/SkeletonLoading.vue'

import { NewsApiService } from '@/services'

import { articlesStore } from '@/store/article'

const getTopHeadlines = async () => {
  articlesStore.isLoading = true

  const newArticles = await NewsApiService.getTopArticles(
    articlesStore.pageSize,
    articlesStore.country
  )

  articlesStore.updateArticles(newArticles)

  articlesStore.isLoading = false
}

onMounted(() => getTopHeadlines())
</script>

<template>
  <div class="bg-slate-300 dark:bg-zinc-900 min-h-screen w-full">
    <TheHeader />

    <main class="container flex flex-col gap-8 mx-auto p-8">
      <TheSearcher />

      <TransitionGroup
        name="list"
        mode="out-in"
        class="flex flex-wrap justify-center items-center gap-4"
        tag="section"
        appear
      >
        <SkeletonLoading
          v-if="articlesStore.isLoading"
          width="500"
          height="200"
          :count="articlesStore.pageSize"
          class="!gap-4"
        />
        <template v-else>
          <div
            v-if="!articlesStore.articles.length"
            class="text-2xl bg-slate-400 dark:bg-stone-950 text-gray-200 font-bold p-8 rounded-lg"
            data-testid="not_found"
          >
            {{
              articlesStore.country === 'br' ? 'Nenhum resultado encontrado' : 'No results found'
            }}
          </div>

          <TheCard
            v-else
            v-for="article in articlesStore.articles"
            :key="article.id"
            v-bind="article"
          />
        </template>
      </TransitionGroup>
    </main>
  </div>
</template>
