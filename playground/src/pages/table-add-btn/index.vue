<template>
	<div class="demo-page">
		<h2>{{ t('tableAddBtn.title') }}</h2>
		<p class="demo-desc">{{ t('tableAddBtn.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<IdeaTableAddBtn @click="onAdd" />
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.customText') }}</h3>
			<DemoBlock :code-ts="customCodeTs" :code-js="customCodeJs">
				<IdeaTableAddBtn :text="t('tableAddBtn.demo.customText')" @click="onAdd" />
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
import { basicCodeTs, basicCodeJs, customCodeTs, customCodeJs } from './index.codes'

function onAdd() {
	alert(t('tableAddBtn.demo.addAlert'))
}

const apiTableData = computed(() => [
	{ param: 'text', type: 'string', default: '新增', desc: t('tableAddBtn.api.text') },
])

const apiEventData = computed(() => [
	{ event: 'click', param: '-', desc: t('tableAddBtn.events.click') },
])
</script>
