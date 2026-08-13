<template>
	<div class="demo-page">
		<h2>{{ t('backTop.title') }}</h2>
		<p class="demo-desc">{{ t('backTop.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<div ref="scrollContainer" class="scroll-demo" style="height: 300px; overflow-y: auto; position: relative;">
					<p v-for="i in 20" :key="i" class="scroll-item">{{ t('backTop.demo.scrollLine', { index: i }) }}</p>
					<idea-back-top :visibility-height="100" :target="getScrollContainer" />
				</div>
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
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { t } from '../../locale'
import DemoBlock from '../../components/DemoBlock.vue'
import { createBackTopCodeTs, createBackTopCodeJs } from './index.codes'

const scrollContainer = ref<HTMLElement | null>(null)

const getScrollContainer = () => scrollContainer.value

const labels = computed(() => ({
	row: t('backTop.demo.row'),
}))

const basicCodeTs = computed(() => createBackTopCodeTs(labels.value))
const basicCodeJs = computed(() => createBackTopCodeJs(labels.value))

const apiTableData = computed(() => [
	{ param: 'visibility-height', type: 'number', default: '400', desc: t('backTop.api.visibilityHeight') },
	{ param: 'back-position', type: 'number', default: '0', desc: t('backTop.api.backPosition') },
	{ param: 'custom-style', type: 'object', default: '-', desc: t('backTop.api.customStyle') },
	{ param: 'transition-name', type: 'string', default: 'fade', desc: t('backTop.api.transitionName') },
	{ param: 'target', type: 'function', default: '-', desc: t('backTop.api.target') },
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
