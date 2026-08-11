<template>
	<div class="demo-page">
		<h2>{{ t('segment.title') }}</h2>
		<p class="demo-desc">{{ t('segment.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<IdeaSegment :options="options" v-model="active" />
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
import { basicCodeTs, basicCodeJs } from './index.codes'
import { t } from '../../locale'

const active = ref('a')
const options = computed(() => [
	{ label: t('segment.demo.optionA'), value: 'a' },
	{ label: t('segment.demo.optionB'), value: 'b' },
	{ label: t('segment.demo.optionC'), value: 'c' },
])

const apiTableData = computed(() => [
	{ param: 'modelValue', type: 'string | number', default: '-', desc: t('segment.api.modelValue') },
	{ param: 'options', type: 'array', default: '[]', desc: t('segment.api.options') },
])

const apiEventData = computed(() => [
	{ event: 'update:modelValue', param: 'string | number', desc: t('segment.events.updateModelValue') },
	{ event: 'change', param: 'string | number', desc: t('segment.events.change') },
])
</script>
