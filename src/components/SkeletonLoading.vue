<script setup lang="ts">
import { useAttrs } from 'vue'

type SkeletonVariant = 'square' | 'circle'

interface IProps {
  variant?: SkeletonVariant
  count?: number
  width?: string
  height?: string
}

withDefaults(defineProps<IProps>(), {
  variant: 'square',
  width: '120',
  height: '120'
})

const attrs = useAttrs()
</script>

<template>
  <div v-if="count" class="flex flex-wrap justify-center items-center gap-2 w-full">
    <SkeletonLoading
      v-for="(_, index) in new Array(count)"
      :key="index"
      :variant="variant"
      :width="width"
      :height="height"
    />
  </div>
  <div
    v-else
    class="flex items-center justify-center bg-zinc-800 animate-pulse"
    :class="{
      rounded: variant === 'square',
      'rounded-full': variant === 'circle'
    }"
    v-bind="attrs"
    :style="{
      width: width.includes('%') ? width : `${width}px`,
      height: height.includes('%') ? height : `${height}px`
    }"
  >
    <slot />
  </div>
</template>
