<template>
	<div class="demo-page">
		<h2>{{ t('timeline.title') }}</h2>
		<p class="demo-desc">{{ t('timeline.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<IdeaTimeline :items="items" />
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
import { computed } from 'vue'
import DemoBlock from '../../components/DemoBlock.vue'
import { t } from '../../locale'
import { basicCodeTs, basicCodeJs } from './index.codes'

const items = computed(() => [
	{ title: t('timeline.demo.event1'), time: '2024-01-01', type: 'success' },
	{ title: t('timeline.demo.event2'), time: '2024-02-01', type: 'primary' },
	{ title: t('timeline.demo.event3'), time: '2024-03-01', description: t('timeline.demo.description') },
])

const apiTableData = computed(() => [
	{ param: 'items', type: 'array', default: '[]', desc: t('timeline.api.items') },
])
</script>
