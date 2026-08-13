<template>
	<div class="demo-page">
		<h2>{{ t('dialog.title') }}</h2>
		<p class="demo-desc">{{ t('dialog.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('common.sections.basic') }}</h3>
			<DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
				<el-button @click="visible = true">{{ t('dialog.demo.open') }}</el-button>
				<idea-dialog v-model="visible" :title="t('dialog.demo.title')" @close="visible = false">
					<p>{{ t('dialog.demo.content') }}</p>
					<p>{{ t('dialog.demo.content') }}</p>
					<p>{{ t('dialog.demo.content') }}</p>
				</idea-dialog>
			</DemoBlock>
		</div>

		<div class="demo-section">
			<h3>{{ t('common.sections.customFooter') }}</h3>
			<DemoBlock :code-ts="footerCodeTs" :code-js="footerCodeJs">
				<el-button type="primary" @click="visible2 = true">{{ t('dialog.demo.openFooter') }}</el-button>
				<idea-dialog v-model="visible2" :title="t('dialog.demo.confirmTitle')">
					<p>{{ t('dialog.demo.confirmText') }}</p>
					<template #footer>
						<el-button @click="visible2 = false">{{ t('dialog.demo.cancel') }}</el-button>
						<el-button type="primary" @click="visible2 = false">{{ t('dialog.demo.confirm') }}</el-button>
					</template>
				</idea-dialog>
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
import {
	createBasicCodeTs, createBasicCodeJs,
	createFooterCodeTs, createFooterCodeJs,
} from './index.codes'

const visible = ref(false)
const visible2 = ref(false)

// ========== 示例代码（跟随当前语言 zh-cn / en / zh-tw） ==========
const dialogCodeLabels = computed(() => ({
	open: t('dialog.demo.open'),
	openFooter: t('dialog.demo.openFooter'),
	title: t('dialog.demo.title'),
	content: t('dialog.demo.content'),
	confirmTitle: t('dialog.demo.confirmTitle'),
	confirmText: t('dialog.demo.confirmText'),
	cancel: t('dialog.demo.cancel'),
	confirm: t('dialog.demo.confirm'),
}))
const basicCodeTs = computed(() => createBasicCodeTs(dialogCodeLabels.value))
const basicCodeJs = computed(() => createBasicCodeJs(dialogCodeLabels.value))
const footerCodeTs = computed(() => createFooterCodeTs(dialogCodeLabels.value))
const footerCodeJs = computed(() => createFooterCodeJs(dialogCodeLabels.value))

const apiTableData = computed(() => [
	{ param: 'modelValue', type: 'boolean', default: 'false', desc: t('dialog.api.modelValue') },
	{ param: 'title', type: 'string', default: '-', desc: t('dialog.api.title') },
	{ param: 'width', type: 'string', default: '520px', desc: t('dialog.api.width') },
	{ param: 'top', type: 'string', default: '15vh', desc: t('dialog.api.top') },
	{ param: 'showHeader', type: 'boolean', default: 'true', desc: t('dialog.api.showHeader') },
	{ param: 'showClose', type: 'boolean', default: 'true', desc: t('dialog.api.showClose') },
	{ param: 'draggable', type: 'boolean', default: 'true', desc: t('dialog.api.draggable') },
	{ param: 'closeOnClickOverlay', type: 'boolean', default: 'true', desc: t('dialog.api.closeOnClickOverlay') },
])

const apiEventData = computed(() => [
	{ event: 'update:modelValue', param: 'boolean', desc: t('dialog.events.updateModelValue') },
	{ event: 'close', param: '-', desc: t('dialog.events.close') },
	{ event: 'open', param: '-', desc: t('dialog.events.open') },
])
</script>
