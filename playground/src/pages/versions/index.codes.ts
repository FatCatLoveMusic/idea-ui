export const basicCodeTs = `<template>
  <idea-versions currentVersion="v3.2.1" :versions="versions" />
</template>

<script setup lang="ts">
const versions = [
  { label: 'v3.2.0', value: 'v3.2.0', time: '2024-01-15' },
  { label: 'v3.1.0', value: 'v3.1.0', time: '2023-12-01' },
]
</script>`

export const basicCodeJs = `<template>
  <idea-versions currentVersion="v3.2.1" :versions="versions" />
</template>

<script setup>
const versions = [
  { label: 'v3.2.0', value: 'v3.2.0', time: '2024-01-15' },
  { label: 'v3.1.0', value: 'v3.1.0', time: '2023-12-01' },
]
</script>`
