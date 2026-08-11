export const basicCodeTs = `<template>
  <IdeaTimeline :items="items" />
</template>

<script setup lang="ts">
const items = [
  { title: '事件一', time: '2024-01-01', type: 'success' },
  { title: '事件二', time: '2024-02-01', type: 'primary' },
  { title: '事件三', time: '2024-03-01', description: '详细描述信息' },
]
</script>`

export const basicCodeJs = `<template>
  <IdeaTimeline :items="items" />
</template>

<script setup>
const items = [
  { title: '事件一', time: '2024-01-01', type: 'success' },
  { title: '事件二', time: '2024-02-01', type: 'primary' },
  { title: '事件三', time: '2024-03-01', description: '详细描述信息' },
]
</script>`
