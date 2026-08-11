export const basicCodeTs = `<template>
  <idea-steps :steps="steps" :active="active" />
</template>

<script setup lang="ts">
const steps = [
  { title: '步骤一', description: '描述信息' },
  { title: '步骤二', description: '描述信息' },
  { title: '步骤三' },
]
const active = 0
</script>`

export const basicCodeJs = `<template>
  <idea-steps :steps="steps" :active="active" />
</template>

<script setup>
const steps = [
  { title: '步骤一', description: '描述信息' },
  { title: '步骤二', description: '描述信息' },
  { title: '步骤三' },
]
const active = 0
</script>`

export const progressCodeTs = `<template>
  <idea-steps :steps="steps" :active="active" />
</template>

<script setup lang="ts">
const steps = [
  { title: '步骤一', description: '描述信息' },
  { title: '步骤二', description: '描述信息' },
  { title: '步骤三' },
]
const active = 2
</script>`

export const progressCodeJs = `<template>
  <idea-steps :steps="steps" :active="active" />
</template>

<script setup>
const steps = [
  { title: '步骤一', description: '描述信息' },
  { title: '步骤二', description: '描述信息' },
  { title: '步骤三' },
]
const active = 2
</script>`
