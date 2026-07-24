<template><div class="demo-page"><h2>Segment 分段器</h2><p class="demo-desc">用于切换不同视图。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaSegment :options="options" v-model="active" /></div></div></div></template>
<script setup lang="ts">
import { ref } from 'vue'
const active = ref('a')
const options = [{ label: '选项A', value: 'a' }, { label: '选项B', value: 'b' }, { label: '选项C', value: 'c' }]
</script>