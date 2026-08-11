<template>
	<div class="demo-page">
		<h2>{{ t('collapse.title') }}</h2>
		<p class="demo-desc">{{ t('collapse.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<IdeaCollapse :items="items" v-model="activeNames">
					<p>{{ t('collapse.demo.content') }}</p>
				</IdeaCollapse>
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
import { t } from '../../locale'
import DemoBlock from '../../components/DemoBlock.vue'
import { basicCodeTs, basicCodeJs } from './index.codes'

const activeNames = ref(['1'])
const items = [
	{ name: '1', title: '一致 Consistency' },
	{ name: '2', title: '反馈 Feedback' },
	{ name: '3', title: '效率 Efficiency' },
]

const apiTableData = computed(() => [
	{ param: 'modelValue', type: 'array', default: '[]', desc: t('collapse.api.modelValue') },
	{ param: 'items', type: 'array', default: '[]', desc: t('collapse.api.items') },
	{ param: 'accordion', type: 'boolean', default: 'false', desc: t('collapse.api.accordion') },
])

const apiEventData = computed(() => [
	{ event: 'update:modelValue', param: '(string | number)[]', desc: t('collapse.events.updateModelValue') },
	{ event: 'change', param: '(string | number)[]', desc: t('collapse.events.change') },
])
</script>
