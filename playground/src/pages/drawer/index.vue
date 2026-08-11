<template>
	<div class="demo-page">
		<h2>{{ t('drawer.title') }}</h2>
		<p class="demo-desc">{{ t('drawer.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<el-button @click="visible = true">{{ t('drawer.demo.open') }}</el-button>
				<idea-drawer v-model="visible" :title="t('drawer.demo.title')">
					<p>{{ t('drawer.demo.content') }}</p>
				</idea-drawer>
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.directions') }}</h3>
			<DemoBlock :code-ts="directionCodeTs" :code-js="directionCodeJs">
				<div class="demo-actions">
					<el-button v-for="p in placements" :key="p.value" @click="openDrawer(p.value)">
						{{ p.label }}
					</el-button>
				</div>
				<idea-drawer v-model="visible2" :placement="placement" :title="t('drawer.demo.title')">
					<p>{{ t('drawer.demo.content') }}</p>
				</idea-drawer>
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
import { t } from '../../locale'
import DemoBlock from '../../components/DemoBlock.vue'
import { basicCodeTs, basicCodeJs, directionCodeTs, directionCodeJs } from './index.codes'

const visible = ref(false)
const visible2 = ref(false)
type Placement = 'left' | 'right' | 'top' | 'bottom'
const placement = ref<Placement>('right')
const placements = computed<{ label: string; value: Placement }[]>(() => [
	{ label: t('drawer.demo.right'), value: 'right' },
	{ label: t('drawer.demo.left'), value: 'left' },
	{ label: t('drawer.demo.top'), value: 'top' },
	{ label: t('drawer.demo.bottom'), value: 'bottom' },
])

function openDrawer(value: Placement) {
	placement.value = value
	visible2.value = true
}

const apiTableData = computed(() => [
	{ param: 'modelValue', type: 'boolean', default: 'false', desc: t('drawer.api.modelValue') },
	{ param: 'title', type: 'string', default: '-', desc: t('drawer.api.title') },
	{ param: 'width', type: 'string', default: '400px', desc: t('drawer.api.width') },
	{ param: 'height', type: 'string', default: '300px', desc: t('drawer.api.height') },
	{ param: 'placement', type: 'left | right | top | bottom', default: 'right', desc: t('drawer.api.placement') },
	{ param: 'showHeader', type: 'boolean', default: 'true', desc: t('drawer.api.showHeader') },
	{ param: 'showClose', type: 'boolean', default: 'true', desc: t('drawer.api.showClose') },
	{ param: 'closeOnClickOverlay', type: 'boolean', default: 'true', desc: t('drawer.api.closeOnClickOverlay') },
])

const apiEventData = computed(() => [
	{ event: 'update:modelValue', param: 'boolean', desc: t('drawer.events.updateModelValue') },
	{ event: 'close', param: '-', desc: t('drawer.events.close') },
])
</script>

<style scoped lang="less">
.demo-actions {
	display: flex;
	gap: 8px;
	margin-bottom: 16px;
}
</style>
