<template>
	<div class="demo-page">
		<h2>{{ t('link.title') }}</h2>
		<p class="demo-desc">{{ t('link.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<idea-link href="https://www.baidu.com" target="_blank">{{ t('link.demo.openBaidu') }}</idea-link>
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
			<el-table :data="apiEventData" border stripe style="margin-top: 16px;">
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
import { createBasicCodeTs, createBasicCodeJs } from './index.codes'
import { t } from '../../locale'

const basicCodeLabels = computed(() => ({
	openBaidu: t('link.demo.openBaidu'),
}))
const basicCodeTs = computed(() => createBasicCodeTs(basicCodeLabels.value))
const basicCodeJs = computed(() => createBasicCodeJs(basicCodeLabels.value))

const apiTableData = computed(() => [
	{ param: 'href', type: 'string', default: '-', desc: t('link.api.href') },
	{ param: 'target', type: 'string', default: '_self', desc: t('link.api.target') },
])

const apiEventData = computed(() => [
	{ event: 'click', param: 'event: MouseEvent', desc: t('link.events.click') },
])
</script>
