<template><div class="demo-page"><h2>Timeline 时间轴</h2><p class="demo-desc">展示时间线信息。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaTimeline :items="items" /></div></div></div></template>
<script setup lang="ts">
const items = [
	{ title: '事件一', time: '2024-01-01', type: 'success' },
	{ title: '事件二', time: '2024-02-01', type: 'primary' },
	{ title: '事件三', time: '2024-03-01', description: '详细描述信息' },
]
</script>