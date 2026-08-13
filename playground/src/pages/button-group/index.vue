<template>
	<div class="demo-page">
		<h2>{{ t('buttonGroup.title') }}</h2>
		<p class="demo-desc">{{ t('buttonGroup.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<idea-button-group :buttons="buttons" v-model="active" />
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
import { createBasicCodeTs, createBasicCodeJs } from './index.codes'

const active = ref('day')
const buttons = computed(() => [
	{ label: t('buttonGroup.demo.day'), value: 'day' },
	{ label: t('buttonGroup.demo.week'), value: 'week' },
	{ label: t('buttonGroup.demo.month'), value: 'month' },
])

// ========== 示例代码（跟随当前语言 zh-cn / en / zh-tw） ==========
const basicCodeLabels = computed(() => ({
	day: t('buttonGroup.demo.day'),
	week: t('buttonGroup.demo.week'),
	month: t('buttonGroup.demo.month'),
}))
const basicCodeTs = computed(() => createBasicCodeTs(basicCodeLabels.value))
const basicCodeJs = computed(() => createBasicCodeJs(basicCodeLabels.value))

const apiTableData = computed(() => [
	{ param: 'modelValue', type: 'string | number', default: '-', desc: t('buttonGroup.api.modelValue') },
	{ param: 'buttons', type: 'array', default: '[]', desc: t('buttonGroup.api.buttons') },
])

const apiEventData = computed(() => [
	{ event: 'update:modelValue', param: 'string | number', desc: t('buttonGroup.events.updateModelValue') },
	{ event: 'change', param: 'string | number', desc: t('buttonGroup.events.change') },
])
</script>
