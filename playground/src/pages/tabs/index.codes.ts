export const basicCodeTs = `<template>
  <idea-tabs :tabs="tabs" v-model="activeTab">
    <p>标签页内容区域</p>
  </idea-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('tab1')
const tabs = [
  { name: 'tab1', label: '标签一' },
  { name: 'tab2', label: '标签二' },
  { name: 'tab3', label: '标签三' },
]
</script>`

export const basicCodeJs = `<template>
  <idea-tabs :tabs="tabs" v-model="activeTab">
    <p>标签页内容区域</p>
  </idea-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('tab1')
const tabs = [
  { name: 'tab1', label: '标签一' },
  { name: 'tab2', label: '标签二' },
  { name: 'tab3', label: '标签三' },
]
</script>`
