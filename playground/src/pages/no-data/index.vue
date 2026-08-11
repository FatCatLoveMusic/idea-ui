<template>
	<div class="demo-page">
		<h2>{{ t('noData.title') }}</h2>
		<p class="demo-desc">{{ t('noData.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<idea-no-data class="no-data-demo" />
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.customText') }}</h3>
			<DemoBlock :code-ts="customCodeTs" :code-js="customCodeJs">
				<idea-no-data class="no-data-demo" :text="t('noData.demo.customText')" />
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
	{ param: 'text', type: 'string', default: '暂无数据', desc: t('noData.api.text') },
])
</script>

<style scoped lang="less">
.no-data-demo {
	height: 200px;
}
</style>
