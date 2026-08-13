<template>
	<div class="demo-page">
		<h2>{{ t('dividerLine.title') }}</h2>
		<p class="demo-desc">{{ t('dividerLine.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<div class="divider-demo">
					<p>{{ t('dividerLine.demo.area1') }}</p>
					<idea-divider-line />
					<p>{{ t('dividerLine.demo.area2') }}</p>
					<idea-divider-line :text="t('dividerLine.demo.text')" />
					<p>{{ t('dividerLine.demo.area3') }}</p>
				</div>
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.vertical') }}</h3>
			<DemoBlock :code-ts="verticalCodeTs" :code-js="verticalCodeJs">
				<div class="divider-demo">
					<span>{{ t('dividerLine.demo.item1') }}</span>
					<idea-divider-line direction="vertical" />
					<span>{{ t('dividerLine.demo.item2') }}</span>
					<idea-divider-line direction="vertical" />
					<span>{{ t('dividerLine.demo.item3') }}</span>
				</div>
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
import { t } from '../../locale'
import DemoBlock from '../../components/DemoBlock.vue'
import { createBasicCodeTs, createBasicCodeJs, createVerticalCodeTs, createVerticalCodeJs } from './index.codes'

const labels = computed(() => ({
	area1: t('dividerLine.demo.area1'),
	area2: t('dividerLine.demo.area2'),
	area3: t('dividerLine.demo.area3'),
	text: t('dividerLine.demo.text'),
	item1: t('dividerLine.demo.item1'),
	item2: t('dividerLine.demo.item2'),
	item3: t('dividerLine.demo.item3'),
}))

const basicCodeTs = computed(() => createBasicCodeTs(labels.value))
const basicCodeJs = computed(() => createBasicCodeJs(labels.value))
const verticalCodeTs = computed(() => createVerticalCodeTs(labels.value))
const verticalCodeJs = computed(() => createVerticalCodeJs(labels.value))

const apiTableData = computed(() => [
	{ param: 'text', type: 'string', default: '-', desc: t('dividerLine.api.text') },
	{ param: 'direction', type: 'horizontal | vertical', default: 'horizontal', desc: t('dividerLine.api.direction') },
])
</script>

<style scoped lang="less">
.divider-demo {
	color: #606266;
}
</style>
