<template>
	<div class="demo-page">
		<h2>{{ t('emptyCard.title') }}</h2>
		<p class="demo-desc">{{ t('emptyCard.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<IdeaEmptyCard class="empty-card-demo" />
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.customText') }}</h3>
			<DemoBlock :code-ts="customCodeTs" :code-js="customCodeJs">
				<IdeaEmptyCard class="empty-card-demo" :text="t('emptyCard.demo.customText')" />
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
import DemoBlock from '../../components/DemoBlock.vue'
import { basicCodeTs, basicCodeJs, customCodeTs, customCodeJs } from './index.codes'
import { t } from '../../locale'

const apiTableData = computed(() => [
	{ param: 'text', type: 'string', default: '暂无数据', desc: t('emptyCard.api.text') },
])

const apiSlotData = computed(() => [
	{ name: 'icon', desc: t('emptyCard.slots.icon') },
	{ name: 'default', desc: t('emptyCard.slots.default') },
])
</script>

<style scoped lang="less">
.empty-card-demo {
	min-height: 200px;
}
</style>
