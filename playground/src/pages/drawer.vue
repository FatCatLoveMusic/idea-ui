<template>
	<div class="demo-page">
		<h2>Drawer 抽屉</h2>
		<p class="demo-desc">从屏幕边缘滑出的面板。</p>

		<div class="demo-section">
			<h3>基础用法</h3>
			<div class="demo-block">
				<button class="demo-btn" @click="visible = true">打开 Drawer</button>
				<IdeaDrawer v-model="visible" title="抽屉标题">
					<p>这里是抽屉的内容区域</p>
				</IdeaDrawer>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>

<style scoped>
.demo-btn { padding: 8px 16px; border: 1px solid #dcdfe6; border-radius: 4px; background: #fff; cursor: pointer; font-size: 14px; color: #606266; }
.demo-btn:hover { color: #ED6F22; border-color: #ED6F22; }
</style>