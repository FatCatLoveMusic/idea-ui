<template>
	<div class="demo-page">
		<h2>{{ t('overview.title') }}</h2>
		<p class="demo-desc">
			{{ t('overview.desc') }}
		</p>

		<div class="demo-section" v-for="group in groups" :key="group.title">
			<h3>{{ group.title }}</h3>
			<div class="component-grid">
				<router-link
					v-for="comp in group.components"
					:key="comp.path"
					:to="comp.path"
					class="component-card"
				>
					<div class="component-card__icon">{{ comp.icon }}</div>
					<div class="component-card__name">{{ comp.name }}</div>
					<div class="component-card__desc">{{ comp.desc }}</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../locale'

const compList: Record<string, { name: string; icon: string; desc: string }> = {
	backTop: { name: t('overview.components.backTop.name'), icon: '⬆', desc: t('overview.components.backTop.desc') },
	scrollbar: { name: t('overview.components.scrollbar.name'), icon: '📜', desc: t('overview.components.scrollbar.desc') },
	skeleton: { name: t('overview.components.skeleton.name'), icon: '💀', desc: t('overview.components.skeleton.desc') },
	noData: { name: t('overview.components.noData.name'), icon: '📭', desc: t('overview.components.noData.desc') },
	dividerLine: { name: t('overview.components.dividerLine.name'), icon: '➖', desc: t('overview.components.dividerLine.desc') },
	link: { name: t('overview.components.link.name'), icon: '🔗', desc: t('overview.components.link.desc') },
	dialog: { name: t('overview.components.dialog.name'), icon: '💬', desc: t('overview.components.dialog.desc') },
	drawer: { name: t('overview.components.drawer.name'), icon: '📂', desc: t('overview.components.drawer.desc') },
	collapse: { name: t('overview.components.collapse.name'), icon: '📋', desc: t('overview.components.collapse.desc') },
	tabs: { name: t('overview.components.tabs.name'), icon: '📑', desc: t('overview.components.tabs.desc') },
	segment: { name: t('overview.components.segment.name'), icon: '🎛', desc: t('overview.components.segment.desc') },
	steps: { name: t('overview.components.steps.name'), icon: '🪜', desc: t('overview.components.steps.desc') },
	timeline: { name: t('overview.components.timeline.name'), icon: '📅', desc: t('overview.components.timeline.desc') },
	card: { name: t('overview.components.card.name'), icon: '🃏', desc: t('overview.components.card.desc') },
	emptyCard: { name: t('overview.components.emptyCard.name'), icon: '📭', desc: t('overview.components.emptyCard.desc') },
	versions: { name: t('overview.components.versions.name'), icon: '🏷', desc: t('overview.components.versions.desc') },
	buttonGroup: { name: t('overview.components.buttonGroup.name'), icon: '🔘', desc: t('overview.components.buttonGroup.desc') },
	tileFilter: { name: t('overview.components.tileFilter.name'), icon: '🏷', desc: t('overview.components.tileFilter.desc') },
	tableAddBtn: { name: t('overview.components.tableAddBtn.name'), icon: '➕', desc: t('overview.components.tableAddBtn.desc') },
	tableTabs: { name: t('overview.components.tableTabs.name'), icon: '📊', desc: t('overview.components.tableTabs.desc') },
	menu: { name: t('overview.components.menu.name'), icon: '📋', desc: t('overview.components.menu.desc') },
}

const groups = computed(() => [
	{
		title: t('overview.groups.basic'),
		components: [
			{ path: '/component/back-top', ...compList.backTop },
			{ path: '/component/scrollbar', ...compList.scrollbar },
			{ path: '/component/skeleton', ...compList.skeleton },
			{ path: '/component/no-data', ...compList.noData },
			{ path: '/component/divider-line', ...compList.dividerLine },
			{ path: '/component/link', ...compList.link },
		],
	},
	{
		title: t('overview.groups.layout'),
		components: [
			{ path: '/component/dialog', ...compList.dialog },
			{ path: '/component/drawer', ...compList.drawer },
			{ path: '/component/collapse', ...compList.collapse },
			{ path: '/component/tabs', ...compList.tabs },
		],
	},
	{
		title: t('overview.groups.nav'),
		components: [
			{ path: '/component/segment', ...compList.segment },
			{ path: '/component/steps', ...compList.steps },
			{ path: '/component/timeline', ...compList.timeline },
		],
	},
	{
		title: t('overview.groups.display'),
		components: [
			{ path: '/component/card', ...compList.card },
			{ path: '/component/empty-card', ...compList.emptyCard },
			{ path: '/component/versions', ...compList.versions },
		],
	},
	{
		title: t('overview.groups.action'),
		components: [
			{ path: '/component/button-group', ...compList.buttonGroup },
			{ path: '/component/tile-filter', ...compList.tileFilter },
			{ path: '/component/table-add-btn', ...compList.tableAddBtn },
			{ path: '/component/table-tabs', ...compList.tableTabs },
			{ path: '/component/menu', ...compList.menu },
		],
	},
])
</script>

<style scoped lang="less">
.component-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;
}

.component-card {
	display: flex;
	flex-direction: column;
	padding: 20px;
	background: #fff;
	border: 1px solid #e4e7ed;
	border-radius: 8px;
	text-decoration: none;
	transition: all 0.2s;

	&:hover {
		border-color: #ED6F22;
		box-shadow: 0 2px 12px rgba(237, 111, 34, 0.1);
	}

	&__icon {
		font-size: 28px;
		margin-bottom: 8px;
	}

	&__name {
		font-size: 15px;
		font-weight: 500;
		color: #303133;
		margin-bottom: 4px;
	}

	&__desc {
		font-size: 13px;
		color: #909399;
		line-height: 1.5;
	}
}
</style>