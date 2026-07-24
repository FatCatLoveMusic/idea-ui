<template><div class="demo-page"><h2>Collapse 折叠面板</h2><p class="demo-desc">可展开/收起的内容区域。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaCollapse :items="items" v-model="activeNames" /></div></div></div></template>
<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref(['1'])
const items = [
  { name: '1', title: '一致 Consistency' },
  { name: '2', title: '反馈 Feedback' },
  { name: '3', title: '效率 Efficiency' },
]
</script>