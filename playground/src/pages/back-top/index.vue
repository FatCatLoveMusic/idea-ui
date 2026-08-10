<template>
	<div class="demo-page">
		<h2>Back Top 回到顶部</h2>
		<p class="demo-desc">返回页面顶部的操作按钮。</p>

		<div class="demo-section">
			<h3>基础用法</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<div ref="scrollContainer" class="scroll-demo" style="height: 300px; overflow-y: auto; position: relative;">
					<p v-for="i in 20" :key="i" class="scroll-item">滚动内容行 {{ i }}，向下滚动查看回到顶部按钮</p>
					<IdeaBackTop :visibility-height="100" :target="getScrollContainer" />
				</div>
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>API</h3>
			<el-table :data="apiTableData" border stripe>
				<el-table-column prop="param" label="参数" />
				<el-table-column prop="type" label="类型" />
				<el-table-column prop="default" label="默认值" />
				<el-table-column prop="desc" label="说明" />
			</el-table>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DemoBlock from '../../components/DemoBlock.vue'
import { basicCodeTs, basicCodeJs } from './index.codes'

const scrollContainer = ref<HTMLElement | null>(null)

const getScrollContainer = () => scrollContainer.value

const apiTableData = [
	{ param: 'visibility-height', type: 'number', default: '400', desc: '滚动高度达到此值时显示按钮' },
	{ param: 'back-position', type: 'number', default: '0', desc: '回到顶部的位置' },
	{ param: 'custom-style', type: 'object', default: '-', desc: '自定义样式' },
	{ param: 'transition-name', type: 'string', default: 'fade', desc: '过渡动画名称' },
	{ param: 'target', type: 'function', default: '-', desc: '设置滚动目标元素' },
]
</script>

<style scoped lang="less">
.scroll-demo {
	background: #f5f7fa;
	border-radius: 4px;
	padding: 16px;
}

.scroll-item {
	padding: 8px 0;
	color: #606266;
}


</style>