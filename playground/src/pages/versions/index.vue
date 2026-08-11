<template>
	<div class="demo-page">
		<h2>{{ t('versions.title') }}</h2>
		<p class="demo-desc">{{ t('versions.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<IdeaVersions currentVersion="v3.2.1" :versions="versions" />
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
import { t } from '../../locale'
import { basicCodeTs, basicCodeJs } from './index.codes'

const versions = [
	{ label: 'v3.2.0', value: 'v3.2.0', time: '2024-01-15' },
	{ label: 'v3.1.0', value: 'v3.1.0', time: '2023-12-01' },
]

const apiTableData = computed(() => [
	{ param: 'currentVersion', type: 'string', default: '-', desc: t('versions.api.currentVersion') },
	{ param: 'versions', type: 'array', default: '[]', desc: t('versions.api.versions') },
])

const apiEventData = computed(() => [
	{ event: 'select', param: '(version, index)', desc: t('versions.events.select') },
])
</script>
