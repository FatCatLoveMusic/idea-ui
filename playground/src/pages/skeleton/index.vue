<template>
	<div class="demo-page">
		<h2>{{ t('skeleton.title') }}</h2>
		<p class="demo-desc">{{ t('skeleton.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<IdeaSkeleton :rows="5" />
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.customRows') }}</h3>
			<DemoBlock :code-ts="customCodeTs" :code-js="customCodeJs">
				<IdeaSkeleton :rows="3" />
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
import { basicCodeTs, basicCodeJs, customCodeTs, customCodeJs } from './index.codes'
import { t } from '../../locale'

const apiTableData = computed(() => [
	{ param: 'rows', type: 'number', default: '5', desc: t('skeleton.api.rows') },
])
</script>
