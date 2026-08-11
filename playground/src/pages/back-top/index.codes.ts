export const basicCodeTs = `<template>
  <div ref="scrollContainer" style="height: 300px; overflow-y: auto;">
    <p v-for="i in 20" :key="i">滚动内容行 {{ i }}</p>
    <idea-back-top :visibility-height="100" :target="getScrollContainer" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)

const getScrollContainer = () => scrollContainer.value
</script>`

export const basicCodeJs = `<template>
  <div ref="scrollContainer" style="height: 300px; overflow-y: auto;">
    <p v-for="i in 20" :key="i">滚动内容行 {{ i }}</p>
    <idea-back-top :visibility-height="100" :target="getScrollContainer" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

const getScrollContainer = () => scrollContainer.value
</script>`