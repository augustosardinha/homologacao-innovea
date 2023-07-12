<script setup lang="ts">
import type { INewsApiArticle } from '@/interfaces/news-api.dto'

const props = defineProps<INewsApiArticle>()
</script>

<template>
  <article
    class="self-start flex flex-col gap-10 max-w-lg bg-zinc-800 rounded-lg p-8 h-full hover:scale-[1.02] transition-all duration-300"
  >
    <header class="flex gap-4 justify-between relative">
      <hgroup class="flex flex-col gap-2 text-gray-100">
        <h1 class="text-xl font-semibold">{{ props.title }}</h1>
        <h2 class="text-base text-gray-300 italic">by: {{ props.author }}</h2>
      </hgroup>
      <div
        v-if="props?.source?.name"
        class="flex items-center justify-center absolute right-0 bottom-0 text-white font-semibold bg-blue-500 px-3 rounded-full"
      >
        {{ props?.source?.name }}
      </div>
    </header>

    <p v-if="props.description">
      {{ props.description }}
    </p>

    <footer class="flex justify-start items-center">
      <a
        :href="props.url"
        target="_blank"
        class="bg-purple-700 py-2 px-4 text-white font-medium text-base"
      >
        Veja mais
      </a>
    </footer>
  </article>
</template>
