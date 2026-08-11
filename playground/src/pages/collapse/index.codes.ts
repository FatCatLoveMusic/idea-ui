export const basicCodeTs = `<template>
  <IdeaCollapse :items="items" v-model="activeNames">
    <p>这里是折叠面板的内容区域</p>
  </IdeaCollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref(['1'])
const items = [
  { name: '1', title: '一致 Consistency' },
  { name: '2', title: '反馈 Feedback' },
  { name: '3', title: '效率 Efficiency' },
]
</script>`

export const basicCodeJs = `<template>
  <IdeaCollapse :items="items" v-model="activeNames">
    <p>这里是折叠面板的内容区域</p>
  </IdeaCollapse>
</template>

<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const items = [
  { name: '1', title: '一致 Consistency' },
  { name: '2', title: '反馈 Feedback' },
  { name: '3', title: '效率 Efficiency' },
]
</script>`
