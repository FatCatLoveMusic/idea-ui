export const basicCodeTs = `<template>
  <idea-segment :options="options" v-model="active" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('a')
const options = [
  { label: '选项A', value: 'a' },
  { label: '选项B', value: 'b' },
  { label: '选项C', value: 'c' },
]
</script>`

export const basicCodeJs = `<template>
  <idea-segment :options="options" v-model="active" />
</template>

<script setup>
import { ref } from 'vue'

const active = ref('a')
const options = [
  { label: '选项A', value: 'a' },
  { label: '选项B', value: 'b' },
  { label: '选项C', value: 'c' },
]
</script>`
