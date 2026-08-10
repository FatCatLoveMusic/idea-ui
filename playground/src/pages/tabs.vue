<template><div class="demo-page"><h2>Tabs 标签页</h2><p class="demo-desc">选项卡切换组件。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaTabs :tabs="tabs" v-model="activeTab" /></div></div></div></template>
<script setup lang="ts">
import { ref } from 'vue'
const activeTab = ref('tab1')
const tabs = [
	{ name: 'tab1', label: '标签一' },
	{ name: 'tab2', label: '标签二' },
	{ name: 'tab3', label: '标签三' },
]
</script>