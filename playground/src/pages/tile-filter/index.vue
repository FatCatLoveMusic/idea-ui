<template>
	<div class="demo-page">
		<h2>{{ t('tileFilter.title') }}</h2>
		<p class="demo-desc">{{ t('tileFilter.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<idea-tile-filter :filters="filters" v-model="active" />
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
import { createBasicCodeTs, createBasicCodeJs } from './index.codes'

const active = ref('all')
const filters = computed(() => [
	{ label: t('tileFilter.demo.all'), value: 'all', count: 20 },
	{ label: t('tileFilter.demo.pending'), value: 'pending', count: 5 },
	{ label: t('tileFilter.demo.approved'), value: 'approved', count: 12 },
])

// ========== 示例代码（跟随当前语言 zh-cn / en / zh-tw） ==========
const basicCodeLabels = computed(() => ({
	all: t('tileFilter.demo.all'),
	pending: t('tileFilter.demo.pending'),
	approved: t('tileFilter.demo.approved'),
}))
const basicCodeTs = computed(() => createBasicCodeTs(basicCodeLabels.value))
const basicCodeJs = computed(() => createBasicCodeJs(basicCodeLabels.value))

const apiTableData = computed(() => [
	{ param: 'modelValue', type: 'string | number', default: '-', desc: t('tileFilter.api.modelValue') },
	{ param: 'filters', type: 'array', default: '[]', desc: t('tileFilter.api.filters') },
])

const apiEventData = computed(() => [
	{ event: 'update:modelValue', param: 'string | number', desc: t('tileFilter.events.updateModelValue') },
	{ event: 'change', param: 'string | number', desc: t('tileFilter.events.change') },
])
</script>
