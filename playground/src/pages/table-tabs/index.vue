<template>
	<div class="demo-page">
		<h2>{{ t('tableTabs.title') }}</h2>
		<p class="demo-desc">{{ t('tableTabs.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<idea-table-tabs :tabs="tabs" v-model="active" />
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
import { ref, computed } from 'vue'
import DemoBlock from '../../components/DemoBlock.vue'
import { t } from '../../locale'
import { basicCodeTs, basicCodeJs } from './index.codes'

const active = ref('all')
const tabs = computed(() => [
	{ label: t('tableTabs.demo.all'), value: 'all', count: 100 },
	{ label: t('tableTabs.demo.pending'), value: 'pending', count: 10 },
	{ label: t('tableTabs.demo.done'), value: 'done', count: 90 },
])

const apiTableData = computed(() => [
	{ param: 'modelValue', type: 'string | number', default: '-', desc: t('tableTabs.api.modelValue') },
	{ param: 'tabs', type: 'array', default: '[]', desc: t('tableTabs.api.tabs') },
])

const apiEventData = computed(() => [
	{ event: 'update:modelValue', param: 'string | number', desc: t('tableTabs.events.updateModelValue') },
	{ event: 'change', param: 'string | number', desc: t('tableTabs.events.change') },
])
</script>
