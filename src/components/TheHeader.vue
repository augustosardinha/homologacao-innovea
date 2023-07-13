<script setup lang="ts">
import ToggleCountry from '@/components/ToggleCountry.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'
</script>

<template>
  <header class="w-full flex justify-between items-center bg-zinc-950 py-3 text-white px-6">
    <a
      href="https://newsapi.org/"
      class="text-center text-2xl md:text-3xl font-bold cursor-pointer bg-opacity-70 hover:bg-gray-900 p-3 rounded"
      target="_blank"
    >
      News
    </a>

    <ToggleCountry />
    <ToggleTheme />
  </header>
</template>
