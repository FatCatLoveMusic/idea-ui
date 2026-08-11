export const basicCodeTs = `<template>
  <idea-button-group :buttons="buttons" v-model="active" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('day')
const buttons = [
  { label: '日', value: 'day' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' },
]
</script>`

export const basicCodeJs = `<template>
  <idea-button-group :buttons="buttons" v-model="active" />
</template>

<script setup>
import { ref } from 'vue'

const active = ref('day')
const buttons = [
  { label: '日', value: 'day' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' },
]
</script>`
