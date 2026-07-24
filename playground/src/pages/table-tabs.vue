<template><div class="demo-page"><h2>Table Tabs</h2><p class="demo-desc">表格Tab切换，带计数。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaTableTabs :tabs="tabs" v-model="active" /></div></div></div></template>
<script setup lang="ts">
import { ref } from 'vue'
const active = ref('all')
const tabs = [{ label: '全部', value: 'all', count: 100 }, { label: '待处理', value: 'pending', count: 10 }, { label: '已完成', value: 'done', count: 90 }]
</script>