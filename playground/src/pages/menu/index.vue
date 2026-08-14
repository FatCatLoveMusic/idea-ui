<template>
	<div class="demo-page">
		<h2>{{ t('menu.title') }}</h2>
		<p class="demo-desc">{{ t('menu.desc') }}</p>

		<!-- 侧边栏布局 -->
		<div class="demo-section">
			<h3>{{ t('menu.demo.sidebar') }}</h3>
			<DemoBlock :code-ts="sidebarCodeTs" :code-js="sidebarCodeJs">
				<div class="demo-menu-container" style="height: 420px">
					<idea-menu
						layout="sidebar"
						v-model="sidebarActive"
						:menus="sidebarMenus"
						collapsible
					>
						<template #logo>
							<span style="font-weight: bold; font-size: 16px">Logo</span>
						</template>
						<template #header>
							<div style="font-size: 13px; color: #909399">Header Slot</div>
						</template>
						<template #header-extra>
							<span style="font-size: 12px; color: #909399">Header Extra</span>
						</template>
						<template #extra>
							<span style="font-size: 12px; color: #909399">Extra</span>
						</template>
						<template #footer>
							<div style="padding: 8px; text-align: center; font-size: 12px; color: #999">Footer</div>
						</template>
						<template #collapse-btn="{ collapsed }">
							<span style="font-size: 12px">{{ collapsed ? '◀' : '▶' }}</span>
						</template>
						<div style="padding: 24px; font-size: 14px; color: var(--idea-color-text-regular, #606266)">
							Content Area (default slot)
						</div>
					</idea-menu>
				</div>
			</DemoBlock>
		</div>

		<!-- 菜单+面包屑 -->
		<div class="demo-section">
			<h3>{{ t('menu.demo.breadcrumb') }}</h3>
			<DemoBlock :code-ts="breadcrumbCodeTs" :code-js="breadcrumbCodeJs">
				<div class="demo-menu-container" style="height: 360px; display: flex">
					<idea-menu
						layout="sidebar"
						v-model="breadcrumbActive"
						:menus="sidebarMenus"
						collapsible
						style="flex-shrink: 0"
					/>
					<div style="flex: 1; display: flex; flex-direction: column; min-width: 0">
						<div style="padding: 13px 16px; border-bottom: 1px solid var(--idea-color-border-lighter, #EBEEF5)">
							<idea-breadcrumb :items="breadcrumbItems" separator="/" @click="handleBreadcrumbClick" />
						</div>
						<!-- 模拟 <router-view> 内容区 -->
						<div style="flex: 1; padding: 24px; overflow: auto; font-size: 14px; color: var(--idea-color-text-regular, #606266)">
							{{ t('menu.demo.breadcrumbCurrent') }}：{{ breadcrumbCurrentLabel }}
						</div>
					</div>
				</div>
			</DemoBlock>
		</div>

		<!-- 顶部+侧边栏布局 -->
		<div class="demo-section">
			<h3>{{ t('menu.demo.sidebarHeader') }}</h3>
			<DemoBlock :code-ts="sidebarHeaderCodeTs" :code-js="sidebarHeaderCodeJs">
				<div class="demo-menu-container" style="height: 420px">
					<idea-menu
						layout="sidebar-header"
						v-model="sidebarHeaderActive"
						:menus="sidebarMenus"
						collapsible
					>
						<template #logo>
							<span style="font-weight: bold; font-size: 16px">Logo</span>
						</template>
						<template #header>
							<div style="font-size: 13px; color: #909399">Header Slot</div>
						</template>
						<template #header-extra>
							<div style="display: flex; gap: 12px; align-items: center">
								<el-avatar :size="28" />
								<span style="font-size: 14px">Admin</span>
							</div>
						</template>
						<template #extra>
							<span style="font-size: 12px; color: #909399">Extra</span>
						</template>
						<template #footer>
							<div style="padding: 8px; text-align: center; font-size: 12px; color: #999">Footer</div>
						</template>
						<template #collapse-btn="{ collapsed }">
							<span style="font-size: 12px">{{ collapsed ? '◀' : '▶' }}</span>
						</template>
						<div style="padding: 24px; font-size: 14px; color: var(--idea-color-text-regular, #606266)">
							Content Area (default slot)
						</div>
					</idea-menu>
				</div>
			</DemoBlock>
		</div>

		<!-- 顶部菜单布局 -->
		<div class="demo-section">
			<h3>{{ t('menu.demo.top') }}</h3>
			<DemoBlock :code-ts="topCodeTs" :code-js="topCodeJs">
				<div class="demo-menu-container" style="height: 380px">
					<idea-menu
						layout="top"
						v-model="topActive"
						:menus="topMenus"
					>
						<template #logo>
							<span style="font-weight: bold; font-size: 16px">MyApp</span>
						</template>
						<template #header>
							<div style="font-size: 13px; color: #909399">Header Slot</div>
						</template>
						<template #header-extra>
							<span style="font-size: 12px; color: #909399">Header Extra</span>
						</template>
						<template #extra>
							<span style="font-size: 12px; color: #909399">Extra</span>
						</template>
						<template #footer>
							<div style="padding: 8px; text-align: center; font-size: 12px; color: #999">Footer</div>
						</template>
						<template #collapse-btn="{ collapsed }">
							<span style="font-size: 12px">{{ collapsed ? '◀' : '▶' }}</span>
						</template>
						<div style="padding: 24px; font-size: 14px; color: var(--idea-color-text-regular, #606266)">
							Content Area (default slot)
						</div>
					</idea-menu>
				</div>
			</DemoBlock>
		</div>

		<!-- 顶部+左侧组合布局 -->
		<div class="demo-section">
			<h3>{{ t('menu.demo.topSidebar') }}</h3>
			<DemoBlock :code-ts="topSidebarCodeTs" :code-js="topSidebarCodeJs">
				<div class="demo-menu-container" style="height: 420px">
					<idea-menu
						layout="top-sidebar"
						v-model="topSidebarActive"
						:menus="topSidebarMenus"
					>
						<template #logo>
							<span style="font-weight: bold; font-size: 16px">Platform</span>
						</template>
						<template #header>
							<div style="font-size: 13px; color: #909399">Header Slot</div>
						</template>
						<template #header-extra>
							<span style="font-size: 12px; color: #909399">Header Extra</span>
						</template>
						<template #extra>
							<span style="font-size: 12px; color: #909399">Extra</span>
						</template>
						<template #footer>
							<div style="padding: 8px; text-align: center; font-size: 12px; color: #999">Footer</div>
						</template>
						<template #collapse-btn="{ collapsed }">
							<span style="font-size: 12px">{{ collapsed ? '◀' : '▶' }}</span>
						</template>
						<div style="padding: 24px; font-size: 14px; color: var(--idea-color-text-regular, #606266)">
							Content Area (default slot)
						</div>
					</idea-menu>
				</div>
			</DemoBlock>
		</div>

		<!-- 左侧双列布局 -->
		<div class="demo-section">
			<h3>{{ t('menu.demo.doubleSidebar') }}</h3>
			<DemoBlock :code-ts="doubleSidebarCodeTs" :code-js="doubleSidebarCodeJs">
				<div class="demo-menu-container" style="height: 420px">
					<idea-menu
						layout="double-sidebar"
						v-model="doubleSidebarActive"
						:menus="doubleSidebarMenus"
						:width="180"
					>
						<template #logo>
							<span style="font-weight: bold; font-size: 14px; color: #fff">Logo</span>
						</template>
						<template #header>
							<div style="font-size: 13px; color: #909399">Header Slot</div>
						</template>
						<template #header-extra>
							<span style="font-size: 12px; color: #909399">Header Extra</span>
						</template>
						<template #extra>
							<span style="font-size: 12px; color: #909399">Extra</span>
						</template>
						<template #footer>
							<div style="padding: 4px 0; text-align: center; font-size: 12px; color: #999">Footer</div>
						</template>
						<template #collapse-btn="{ collapsed }">
							<span style="font-size: 12px">{{ collapsed ? '◀' : '▶' }}</span>
						</template>
						<div style="padding: 24px; font-size: 14px; color: var(--idea-color-text-regular, #606266)">
							Content Area (default slot)
						</div>
					</idea-menu>
				</div>
			</DemoBlock>
		</div>

		<!-- API Props -->
		<div class="demo-section">
			<h3>{{ t('common.sections.api') }}</h3>
			<el-table :data="apiTableData" border stripe>
				<el-table-column prop="param" :label="t('common.table.param')" width="160" />
				<el-table-column prop="type" :label="t('common.table.type')" width="280" />
				<el-table-column prop="default" :label="t('common.table.default')" width="120" />
				<el-table-column prop="desc" :label="t('common.table.desc')" />
			</el-table>
		</div>

		<!-- Events -->
		<div class="demo-section">
			<h3>{{ t('common.sections.events') }}</h3>
			<el-table :data="apiEventData" border stripe>
				<el-table-column prop="event" :label="t('common.table.event')" width="220" />
				<el-table-column prop="param" :label="t('common.table.param')" width="180" />
				<el-table-column prop="desc" :label="t('common.table.desc')" />
			</el-table>
		</div>

		<!-- Slots -->
		<div class="demo-section">
			<h3>{{ t('common.sections.slots') }}</h3>
			<el-table :data="apiSlotData" border stripe>
				<el-table-column prop="name" :label="t('common.table.slotName')" width="160" />
				<el-table-column prop="desc" :label="t('common.table.desc')" />
			</el-table>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { t } from '../../locale'
import DemoBlock from '../../components/DemoBlock.vue'
import { findMenuPath } from '../../../../packages/components/menu'
import {
	createSidebarCodeTs, createSidebarCodeJs,
	createSidebarHeaderCodeTs, createSidebarHeaderCodeJs,
	createTopCodeTs, createTopCodeJs,
	createTopSidebarCodeTs, createTopSidebarCodeJs,
	createDoubleSidebarCodeTs, createDoubleSidebarCodeJs,
	createBreadcrumbCodeTs, createBreadcrumbCodeJs,
} from './index.codes'

// ========== 示例菜单数据 ==========
const sidebarMenus = computed(() => [
	{
		id: '1', label: t('menu.demo.workbench'), icon: 'icon-computer', path: '/workbench',
		children: [
			{ id: '1-1', label: t('menu.demo.overview'), icon: 'icon-icon_shuju', path: '/workbench/overview' },
			{ id: '1-2', label: t('menu.demo.analytics'), icon: 'icon-baobiaofenxi', path: '/workbench/analytics' },
		],
	},
	{
		id: '2', label: t('menu.demo.system'), icon: 'icon-shezhi', path: '/system',
		children: [
			{ id: '2-1', label: t('menu.demo.userMgmt'), icon: 'icon-yonghuguanli', path: '/system/user' },
			{ id: '2-2', label: t('menu.demo.roleMgmt'), icon: 'icon-userselection', path: '/system/role' },
			{ id: '2-3', label: t('menu.demo.permission'), icon: 'icon-icon_lock', path: '/system/permission' },
			{
				id: '2-4', label: t('menu.demo.sysConfig'), icon: 'icon-icon_peizhi', path: '/system/config',
				children: [
					{ id: '2-4-1', label: t('menu.demo.baseConfig'), path: '/system/config/base' },
					{ id: '2-4-2', label: t('menu.demo.security'), path: '/system/config/security' },
				],
			},
		],
	},
	{
		id: '3', label: t('menu.demo.content'), icon: 'icon-wendang', path: '/content',
		children: [
			{ id: '3-1', label: t('menu.demo.articles'), icon: 'icon-edit', path: '/content/articles' },
			{ id: '3-2', label: t('menu.demo.comments'), icon: 'icon-xiaoxi', path: '/content/comments' },
		],
	},
])

const topMenus = computed(() => [
	{
		id: 't1', label: t('menu.demo.workbench'), icon: 'icon-computer',
		children: [
			{ id: 't1-1', label: t('menu.demo.overview'), icon: 'icon-icon_shuju' },
			{ id: 't1-2', label: t('menu.demo.analytics'), icon: 'icon-baobiaofenxi' },
		],
	},
	{
		id: 't2', label: t('menu.demo.system'), icon: 'icon-shezhi',
		children: [
			{ id: 't2-1', label: t('menu.demo.userMgmt'), icon: 'icon-yonghuguanli' },
			{ id: 't2-2', label: t('menu.demo.roleMgmt'), icon: 'icon-userselection' },
			{
				id: 't2-3', label: t('menu.demo.more'), icon: 'icon-icon_gengduo',
				children: [
					{ id: 't2-3-1', label: t('menu.demo.baseConfig'), icon: 'icon-icon_peizhi' },
					{ id: 't2-3-2', label: t('menu.demo.security'), icon: 'icon-icon_lock' },
				],
			},
		],
	},
	{ id: 't3', label: t('menu.demo.about'), icon: 'icon-icon_xinxi' },
])

const topSidebarMenus = computed(() => [
	{
		id: 'ts1', label: t('menu.demo.workbench'), icon: 'icon-computer',
		children: [
			{ id: 'ts1-1', label: t('menu.demo.overview'), icon: 'icon-icon_shuju' },
			{ id: 'ts1-2', label: t('menu.demo.analytics'), icon: 'icon-baobiaofenxi' },
		],
	},
	{
		id: 'ts2', label: t('menu.demo.system'), icon: 'icon-shezhi',
		children: [
			{ id: 'ts2-1', label: t('menu.demo.userMgmt'), icon: 'icon-yonghuguanli' },
			{ id: 'ts2-2', label: t('menu.demo.roleMgmt'), icon: 'icon-userselection' },
			{ id: 'ts2-3', label: t('menu.demo.permission'), icon: 'icon-icon_lock' },
			{
				id: 'ts2-4', label: t('menu.demo.sysConfig'), icon: 'icon-icon_peizhi',
				children: [
					{ id: 'ts2-4-1', label: t('menu.demo.baseConfig') },
					{ id: 'ts2-4-2', label: t('menu.demo.security') },
				],
			},
		],
	},
	{
		id: 'ts3', label: t('menu.demo.content'), icon: 'icon-wendang',
		children: [
			{ id: 'ts3-1', label: t('menu.demo.articles'), icon: 'icon-edit' },
			{ id: 'ts3-2', label: t('menu.demo.comments'), icon: 'icon-xiaoxi' },
		],
	},
])

const doubleSidebarMenus = computed(() => [
	{
		id: 'd1', label: t('menu.demo.workbench'), icon: 'icon-computer',
		children: [
			{ id: 'd1-1', label: t('menu.demo.overview'), icon: 'icon-icon_shuju' },
			{ id: 'd1-2', label: t('menu.demo.analytics'), icon: 'icon-baobiaofenxi' },
			{
				id: 'd1-3', label: t('menu.demo.statistics'), icon: 'icon-icon_tubiao',
				children: [
					{ id: 'd1-3-1', label: 'UV Stats' },
					{ id: 'd1-3-2', label: 'PV Stats' },
				],
			},
		],
	},
	{
		id: 'd2', label: t('menu.demo.system'), icon: 'icon-shezhi',
		children: [
			{ id: 'd2-1', label: t('menu.demo.userMgmt'), icon: 'icon-yonghuguanli' },
			{ id: 'd2-2', label: t('menu.demo.roleMgmt'), icon: 'icon-userselection' },
		],
	},
	{
		id: 'd3', label: t('menu.demo.content'), icon: 'icon-wendang',
		children: [
			{ id: 'd3-1', label: t('menu.demo.articles'), icon: 'icon-edit' },
		],
	},
	{ id: 'd4', label: t('menu.demo.about'), icon: 'icon-icon_xinxi' },
])

// ========== 示例代码（跟随当前语言 zh-cn / en / zh-tw） ==========
const sidebarCodeLabels = computed(() => ({
	workbench: t('menu.demo.workbench'),
	overview: t('menu.demo.overview'),
	analytics: t('menu.demo.analytics'),
	system: t('menu.demo.system'),
	userMgmt: t('menu.demo.userMgmt'),
	roleMgmt: t('menu.demo.roleMgmt'),
	permission: t('menu.demo.permission'),
	sysConfig: t('menu.demo.sysConfig'),
	baseConfig: t('menu.demo.baseConfig'),
	security: t('menu.demo.security'),
	content: t('menu.demo.content'),
	articles: t('menu.demo.articles'),
	comments: t('menu.demo.comments'),
}))
const sidebarCodeTs = computed(() => createSidebarCodeTs(sidebarCodeLabels.value))
const sidebarCodeJs = computed(() => createSidebarCodeJs(sidebarCodeLabels.value))

const menuCodeLabels = computed(() => ({
	workbench: t('menu.demo.workbench'),
	overview: t('menu.demo.overview'),
	analytics: t('menu.demo.analytics'),
	system: t('menu.demo.system'),
	userMgmt: t('menu.demo.userMgmt'),
	roleMgmt: t('menu.demo.roleMgmt'),
	permission: t('menu.demo.permission'),
	sysConfig: t('menu.demo.sysConfig'),
	baseConfig: t('menu.demo.baseConfig'),
	security: t('menu.demo.security'),
	content: t('menu.demo.content'),
	articles: t('menu.demo.articles'),
	comments: t('menu.demo.comments'),
	about: t('menu.demo.about'),
	more: t('menu.demo.more'),
	statistics: t('menu.demo.statistics'),
}))
const sidebarHeaderCodeTs = computed(() => createSidebarHeaderCodeTs(menuCodeLabels.value))
const sidebarHeaderCodeJs = computed(() => createSidebarHeaderCodeJs(menuCodeLabels.value))
const topCodeTs = computed(() => createTopCodeTs(menuCodeLabels.value))
const topCodeJs = computed(() => createTopCodeJs(menuCodeLabels.value))
const topSidebarCodeTs = computed(() => createTopSidebarCodeTs(menuCodeLabels.value))
const topSidebarCodeJs = computed(() => createTopSidebarCodeJs(menuCodeLabels.value))
const doubleSidebarCodeTs = computed(() => createDoubleSidebarCodeTs(menuCodeLabels.value))
const doubleSidebarCodeJs = computed(() => createDoubleSidebarCodeJs(menuCodeLabels.value))
const breadcrumbCodeTs = computed(() => createBreadcrumbCodeTs(menuCodeLabels.value))
const breadcrumbCodeJs = computed(() => createBreadcrumbCodeJs(menuCodeLabels.value))

// ========== 激活状态 ==========
const sidebarActive = ref('1-1')
const sidebarHeaderActive = ref('2-1')
const topActive = ref('t1-1')
const topSidebarActive = ref('ts1-1')
const doubleSidebarActive = ref('d1-1')

// ========== 面包屑 ==========
const breadcrumbActive = ref('2-4-1')
const breadcrumbPath = computed(() => findMenuPath(sidebarMenus.value, breadcrumbActive.value))
const breadcrumbItems = computed(() =>
	breadcrumbPath.value.map((item) => ({ label: item.label, path: item.path }))
)
const breadcrumbCurrentLabel = computed(
	() => breadcrumbPath.value[breadcrumbPath.value.length - 1]?.label ?? ''
)

function handleBreadcrumbClick(_item: { label: string; path?: string }, index: number) {
	const menuItem = breadcrumbPath.value[index]
	if (menuItem) {
		breadcrumbActive.value = menuItem.id
	}
}

// ========== API 文档 ==========
const apiTableData = computed(() => [
	{ param: 'layout', type: "'sidebar' | 'sidebar-header' | 'top' | 'top-sidebar' | 'double-sidebar'", default: "'sidebar'", desc: t('menu.api.layout') },
	{ param: 'modelValue', type: 'string | number', default: "''", desc: t('menu.api.modelValue') },
	{ param: 'menus', type: 'MenuItem[]', default: '[]', desc: t('menu.api.menus') },
	{ param: 'collapsed', type: 'boolean', default: 'false', desc: t('menu.api.collapsed') },
	{ param: 'collapsible', type: 'boolean', default: 'true', desc: t('menu.api.collapsible') },
	{ param: 'width', type: 'number', default: '256', desc: t('menu.api.width') },
	{ param: 'logo', type: 'string', default: "''", desc: t('menu.api.logo') },
	{ param: 'defaultOpeneds', type: 'string[]', default: '[]', desc: t('menu.api.defaultOpeneds') },
])

const apiEventData = computed(() => [
	{ event: 'update:modelValue', param: 'string | number', desc: t('menu.events.updateModelValue') },
	{ event: 'update:collapsed', param: 'boolean', desc: t('menu.events.updateCollapsed') },
	{ event: 'select', param: 'MenuItem', desc: t('menu.events.select') },
	{ event: 'collapse-change', param: 'boolean', desc: t('menu.events.collapseChange') },
	{ event: 'home-click', param: '-', desc: t('menu.events.homeClick') },
])

const apiSlotData = computed(() => [
	{ name: 'logo', desc: t('menu.slots.logo') },
	{ name: 'header', desc: t('menu.slots.header') },
	{ name: 'header-extra', desc: t('menu.slots.headerExtra') },
	{ name: 'extra', desc: t('menu.slots.extra') },
	{ name: 'footer', desc: t('menu.slots.footer') },
	{ name: 'collapse-btn', desc: t('menu.slots.collapseBtn') },
	{ name: 'default', desc: t('menu.slots.default') },
])
</script>

<style scoped>
.demo-menu-container {
	border: 1px solid var(--idea-color-border-lighter, #EBEEF5);
	border-radius: 4px;
	overflow: hidden;
}
</style>
