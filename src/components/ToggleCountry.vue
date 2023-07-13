<script setup lang="ts">
import { watchEffect } from 'vue'
import { useStorage } from '@vueuse/core'
import BrazilFlag from '@/assets/icons/BrazilFlag.vue'
import USFlag from '@/assets/icons/USFlag.vue'
import { articlesStore } from '@/store/article'
import type { ArticleCountries } from '@/interfaces/news-api.dto'

const country = useStorage('user-country', 'br')

const toggleCountry = () => {
  country.value = country.value === 'br' ? 'us' : 'br'
}

watchEffect(() => {
  articlesStore.country = country.value as ArticleCountries
})
</script>

<template>
  <button @click="toggleCountry()">
    <Transition name="slide-fade" mode="out-in" :duration="150">
      <component :is="country === 'br' ? BrazilFlag : USFlag" />
    </Transition>
  </button>
</template>
