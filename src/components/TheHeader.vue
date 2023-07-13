<script setup lang="ts">
import ToggleCountry from '@/components/ToggleCountry.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'
import { useScroll } from '@vueuse/core'

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const { y: scroll } = useScroll(document.body)
</script>

<template>
  <header
    class="w-full flex justify-between items-center gap-4 bg-slate-900 dark:bg-zinc-950 text-white p-6"
  >
    <button
      class="text-center text-2xl md:text-3xl font-bold cursor-pointer bg-opacity-70 hover:bg-gray-900 p-3 rounded"
      title="News"
      aria-label="News"
    >
      News
    </button>

    <div class="flex items-center gap-8">
      <ToggleCountry />
      <ToggleTheme />
    </div>
  </header>

  <button
    title="Scroll to top"
    class="fixed right-4 bottom-4 w-10 h-10 hover:op100 rounded-full hover-bg-hex-8883 transition duration-300 z-100 opacity-0"
    :class="{ '!opacity-100': scroll > 100 }"
    @click="goToTop()"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-12 h-12 text-slate-900 dark:text-gray-400"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>
</template>
