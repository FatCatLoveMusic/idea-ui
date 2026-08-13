<template>
	<div class="demo-page">
		<h2>{{ t('card.title') }}</h2>
		<p class="demo-desc">{{ t('card.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<idea-card :title="t('card.demo.cardTitle')">
					<p>{{ t('card.demo.content') }}</p>
					<template #footer>
						<span class="demo-card-footer">{{ t('card.demo.footer') }}</span>
					</template>
				</idea-card>
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
			<h3>{{ t('common.sections.slots') }}</h3>
			<el-table :data="apiSlotData" border stripe>
				<el-table-column prop="name" :label="t('common.table.slotName')" />
				<el-table-column prop="desc" :label="t('common.table.desc')" />
			</el-table>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../../locale'
import DemoBlock from '../../components/DemoBlock.vue'
import { createBasicCodeTs, createBasicCodeJs } from './index.codes'

const basicCodeLabels = computed(() => ({
	cardTitle: t('card.demo.cardTitle'),
	content: t('card.demo.content'),
	footer: t('card.demo.footer'),
}))
const basicCodeTs = computed(() => createBasicCodeTs(basicCodeLabels.value))
const basicCodeJs = computed(() => createBasicCodeJs(basicCodeLabels.value))

const apiTableData = computed(() => [
	{ param: 'title', type: 'string', default: '-', desc: t('card.api.title') },
	{ param: 'shadow', type: 'boolean', default: 'true', desc: t('card.api.shadow') },
])

const apiSlotData = computed(() => [
	{ name: 'header', desc: t('card.slots.header') },
	{ name: 'default', desc: t('card.slots.default') },
	{ name: 'footer', desc: t('card.slots.footer') },
])
</script>

<style scoped lang="less">
.demo-card-footer {
	color: #909399;
}
</style>
