export const basicCodeTs = `<template>
  <idea-table-tabs :tabs="tabs" v-model="active" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('all')
const tabs = [
  { label: '全部', value: 'all', count: 100 },
  { label: '待处理', value: 'pending', count: 10 },
  { label: '已完成', value: 'done', count: 90 },
]
</script>`

export const basicCodeJs = `<template>
  <idea-table-tabs :tabs="tabs" v-model="active" />
</template>

<script setup>
import { ref } from 'vue'

const active = ref('all')
const tabs = [
  { label: '全部', value: 'all', count: 100 },
  { label: '待处理', value: 'pending', count: 10 },
  { label: '已完成', value: 'done', count: 90 },
]
</script>`
