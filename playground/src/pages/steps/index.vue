<template>
	<div class="demo-page">
		<h2>{{ t('steps.title') }}</h2>
		<p class="demo-desc">{{ t('steps.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<idea-steps :steps="steps" :active="0" />
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.activeSteps') }}</h3>
			<DemoBlock :code-ts="progressCodeTs" :code-js="progressCodeJs">
				<idea-steps :steps="steps" :active="2" />
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
import { createBasicCodeTs, createBasicCodeJs, createProgressCodeTs, createProgressCodeJs } from './index.codes'
import { t } from '../../locale'

const steps = computed(() => [
	{ title: t('steps.demo.step1'), description: t('steps.demo.description') },
	{ title: t('steps.demo.step2'), description: t('steps.demo.description') },
	{ title: t('steps.demo.step3') },
])

// ========== 示例代码（跟随当前语言 zh-cn / en / zh-tw） ==========
const stepsCodeLabels = computed(() => ({
	step1: t('steps.demo.step1'),
	step2: t('steps.demo.step2'),
	step3: t('steps.demo.step3'),
	description: t('steps.demo.description'),
}))
const basicCodeTs = computed(() => createBasicCodeTs(stepsCodeLabels.value))
const basicCodeJs = computed(() => createBasicCodeJs(stepsCodeLabels.value))
const progressCodeTs = computed(() => createProgressCodeTs(stepsCodeLabels.value))
const progressCodeJs = computed(() => createProgressCodeJs(stepsCodeLabels.value))

const apiTableData = computed(() => [
	{ param: 'active', type: 'number', default: '0', desc: t('steps.api.active') },
	{ param: 'steps', type: 'array', default: '[]', desc: t('steps.api.steps') },
])
</script>
