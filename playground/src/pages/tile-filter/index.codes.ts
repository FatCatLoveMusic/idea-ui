export const basicCodeTs = `<template>
  <IdeaTileFilter :filters="filters" v-model="active" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('all')
const filters = [
  { label: '全部', value: 'all', count: 20 },
  { label: '待审核', value: 'pending', count: 5 },
  { label: '已通过', value: 'approved', count: 12 },
]
</script>`

export const basicCodeJs = `<template>
  <IdeaTileFilter :filters="filters" v-model="active" />
</template>

<script setup>
import { ref } from 'vue'

const active = ref('all')
const filters = [
  { label: '全部', value: 'all', count: 20 },
  { label: '待审核', value: 'pending', count: 5 },
  { label: '已通过', value: 'approved', count: 12 },
]
</script>`
