<template>
	<div class="demo-page">
		<h2>{{ t('tabs.title') }}</h2>
		<p class="demo-desc">{{ t('tabs.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<idea-tabs :tabs="tabs" v-model="activeTab">
					<p>{{ t('tabs.demo.current') }} {{ tabs.find((t) => t.name === activeTab)?.label }}</p>
				</idea-tabs>
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
import { basicCodeTs, basicCodeJs } from './index.codes'

const activeTab = ref('tab1')
const tabs = computed(() => [
	{ name: 'tab1', label: t('tabs.demo.tab1') },
	{ name: 'tab2', label: t('tabs.demo.tab2') },
	{ name: 'tab3', label: t('tabs.demo.tab3') },
])

const apiTableData = computed(() => [
	{ param: 'modelValue', type: 'string', default: '-', desc: t('tabs.api.modelValue') },
	{ param: 'tabs', type: 'array', default: '[]', desc: t('tabs.api.tabs') },
])

const apiEventData = computed(() => [
	{ event: 'update:modelValue', param: 'string', desc: t('tabs.events.updateModelValue') },
	{ event: 'tabClick', param: 'tab', desc: t('tabs.events.tabClick') },
])
</script>
