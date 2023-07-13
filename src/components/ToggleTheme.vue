<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import SunIcon from '@/assets/icons/SunIcon.vue'
import MoonIcon from '@/assets/icons/MoonIcon.vue'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>

<template>
  <button @click="toggleTheme()" title="Toggle theme">
    <Transition name="slide-fade" mode="out-in" :duration="150" appear>
      <component :is="isDark ? MoonIcon : SunIcon" />
    </Transition>
  </button>
</template>
