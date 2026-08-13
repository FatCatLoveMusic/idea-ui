<template>
	<div class="demo-page">
		<h2>{{ t('scrollbar.title') }}</h2>
		<p class="demo-desc">{{ t('scrollbar.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<idea-scrollbar class="scroll-demo" style="height: 300px;">
					<p v-for="i in 50" :key="i" class="scroll-item">{{ t('scrollbar.demo.scrollLine', { index: String(i) }) }}</p>
				</idea-scrollbar>
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.api') }}</h3>
			<el-table :data="apiTableData" border stripe>
				<el-table-column prop="param" :label="t('common.table.param')" />
				<el-table-column prop="type" :label="t('common.table.type')" />
				<el-table-column prop="default" :label="t('common.table.default')" />
				<el-table-column prop="desc" :label="t('common.table.desc')" />
			</el-table>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.events') }}</h3>
			<el-table :data="apiEventData" border stripe>
				<el-table-column prop="event" :label="t('common.table.event')" />
				<el-table-column prop="param" :label="t('common.table.param')" />
				<el-table-column prop="desc" :label="t('common.table.desc')" />
			</el-table>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DemoBlock from '../../components/DemoBlock.vue'
import { createScrollbarCodeTs, createScrollbarCodeJs } from './index.codes'
import { t } from '../../locale'

const labels = computed(() => ({
	row: t('scrollbar.demo.row'),
}))

const basicCodeTs = computed(() => createScrollbarCodeTs(labels.value))
const basicCodeJs = computed(() => createScrollbarCodeJs(labels.value))

const apiTableData = computed(() => [
	{ param: 'classes', type: 'string', default: '-', desc: t('scrollbar.api.classes') },
	{ param: 'styles', type: 'object', default: '-', desc: t('scrollbar.api.styles') },
	{ param: 'speed', type: 'number', default: '80', desc: t('scrollbar.api.speed') },
	{ param: 'direction', type: 'string', default: 'vertical', desc: t('scrollbar.api.direction') },
	{ param: 'resizeable', type: 'boolean', default: 'true', desc: t('scrollbar.api.resizeable') },
])

const apiEventData = computed(() => [
	{ event: 'maxScroll', param: '{ top, bottom, right, left }', desc: t('scrollbar.events.maxScroll') },
])
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
