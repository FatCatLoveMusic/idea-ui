<template><div class="demo-page"><h2>Tile Filter 筛选器</h2><p class="demo-desc">标签式筛选组件。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaTileFilter :filters="filters" v-model="active" /></div></div></div></template>
<script setup lang="ts">
import { ref } from 'vue'
const active = ref('all')
const filters = [{ label: '全部', value: 'all', count: 20 }, { label: '待审核', value: 'pending', count: 5 }, { label: '已通过', value: 'approved', count: 12 }]
</script>