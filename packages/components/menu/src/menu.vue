<template>
	<!-- ============ 侧边栏布局 (sidebar) ============ -->
	<div
		v-if="layout === 'sidebar'"
		class="idea-menu idea-menu--sidebar"
		:class="{ 'is-collapsed': isCollapsed }"
		:style="{ width: sidebarMenuWidth + 'px' }"
	>
		<div class="idea-menu__logo" v-if="$slots.logo || logo">
			<slot name="logo">
				<img :src="logo" alt="logo" />
			</slot>
		</div>
		<div class="idea-menu__wrap">
			<el-menu
				:default-active="String(modelValue)"
				:collapse="isCollapsed"
				:collapse-transition="false"
				class="idea-menu__el-menu"
			>
				<sidebar-menu-item
					v-for="item in menus"
					:key="item.id"
					:item="item"
					:collapsed="isCollapsed"
					:is-root="true"
					@select="handleSelect"
				/>
			</el-menu>
		</div>
		<div class="idea-menu__footer" v-if="$slots.footer">
			<slot name="footer" />
		</div>
		<div v-if="collapsible" class="idea-menu__collapse-btn" @click="toggleCollapse">
			<slot name="collapse-btn" :collapsed="isCollapsed">
				<i class="icon-zhedie idea-menu__collapse-icon" :class="{ 'is-collapsed': isCollapsed }"></i>
			</slot>
		</div>
	</div>

	<!-- ============ 顶部+侧边栏布局 (sidebar-header) ============ -->
	<div
		v-else-if="layout === 'sidebar-header'"
		class="idea-menu idea-menu--sidebar-header"
		:class="{ 'is-collapsed': isCollapsed }"
	>
		<div class="idea-menu__header" v-if="$slots.header || $slots.logo || logo">
			<slot name="header">
				<div class="idea-menu__header-inner">
					<div class="idea-menu__logo" v-if="$slots.logo || logo">
						<slot name="logo">
							<img :src="logo" alt="logo" />
						</slot>
					</div>
					<slot name="header-extra" />
				</div>
			</slot>
		</div>
		<div class="idea-menu__body">
			<div
				class="idea-menu__sidebar"
				:style="{ width: sidebarMenuWidth + 'px' }"
			>
				<div class="idea-menu__wrap">
					<el-menu
						:default-active="String(modelValue)"
						:collapse="isCollapsed"
						:collapse-transition="false"
						class="idea-menu__el-menu"
					>
						<sidebar-menu-item
							v-for="item in menus"
							:key="item.id"
							:item="item"
							:collapsed="isCollapsed"
							:is-root="true"
							@select="handleSelect"
						/>
					</el-menu>
				</div>
				<div v-if="collapsible" class="idea-menu__collapse-bar" @click="toggleCollapse">
					<span class="idea-menu__collapse-icon">{{ isCollapsed ? '▶' : '◀' }}</span>
				</div>
			</div>
			<div class="idea-menu__content">
				<slot />
			</div>
		</div>
	</div>

	<!-- ============ 顶部菜单布局 (top) ============ -->
	<div
		v-else-if="layout === 'top'"
		class="idea-menu idea-menu--top"
	>
		<div class="idea-menu__top-bar">
			<div class="idea-menu__logo" v-if="$slots.logo || logo">
				<slot name="logo">
					<img :src="logo" alt="logo" />
				</slot>
			</div>
			<ul class="idea-menu__top-list">
				<li
					v-for="item in menus"
					:key="item.id"
					class="idea-menu__top-item"
					:class="{ 'is-active': isTopMenuActive(item) }"
					@mouseenter="showTopSub(item)"
					@mouseleave="hideTopSub"
					@click="handleTopMenuClick(item)"
				>
					<span class="idea-menu__top-label">{{ item.label }}</span>
					<transition name="el-zoom-in-top">
						<div
							v-if="hasChildren(item) && hoveredTopMenu === item.id"
							class="idea-menu__top-sub"
						>
							<top-sub-menu
								v-for="child in item.children"
								:key="child.id"
								:item="child"
								:level="1"
								@select="handleSelect"
							/>
						</div>
					</transition>
				</li>
			</ul>
			<div class="idea-menu__top-extra" v-if="$slots.extra">
				<slot name="extra" />
			</div>
		</div>
		<div class="idea-menu__content" v-if="$slots.default">
			<slot />
		</div>
	</div>

	<!-- ============ 顶部+左侧组合布局 (top-sidebar) ============ -->
	<div
		v-else-if="layout === 'top-sidebar'"
		class="idea-menu idea-menu--top-sidebar"
	>
		<div class="idea-menu__top-bar">
			<div class="idea-menu__logo" v-if="$slots.logo || logo">
				<slot name="logo">
					<img :src="logo" alt="logo" />
				</slot>
			</div>
			<ul class="idea-menu__top-list">
				<li
					v-for="item in menus"
					:key="item.id"
					class="idea-menu__top-item"
					:class="{ 'is-active': topSidebarActiveId === item.id }"
					@click="handleTopSidebarClick(item)"
				>
					<span>{{ item.label }}</span>
				</li>
			</ul>
			<div class="idea-menu__top-extra" v-if="$slots.extra">
				<slot name="extra" />
			</div>
		</div>
		<div class="idea-menu__body">
			<div
				v-if="topSidebarSubMenus.length"
				class="idea-menu__sidebar"
				:style="{ width: sidebarMenuWidth + 'px' }"
			>
				<div class="idea-menu__sidebar-title" v-if="topSidebarTitle">
					{{ topSidebarTitle }}
				</div>
				<div class="idea-menu__wrap">
					<el-menu
						:default-active="String(modelValue)"
						class="idea-menu__el-menu"
					>
						<sidebar-menu-item
							v-for="item in topSidebarSubMenus"
							:key="item.id"
							:item="item"
							:collapsed="false"
							:is-root="true"
							@select="handleSelect"
						/>
					</el-menu>
				</div>
			</div>
			<div class="idea-menu__content">
				<slot />
			</div>
		</div>
	</div>

	<!-- ============ 左侧双列布局 (double-sidebar) ============ -->
	<div
		v-else-if="layout === 'double-sidebar'"
		class="idea-menu idea-menu--double-sidebar"
	>
		<div class="idea-menu__first-col">
			<div class="idea-menu__logo" v-if="$slots.logo || logo" @click="handleHomeClick">
				<slot name="logo">
					<img :src="logo" alt="logo" />
				</slot>
			</div>
			<div class="idea-menu__first-wrap">
				<el-menu :default-active="String(doubleFirstActiveId)" class="idea-menu__el-menu">
					<el-menu-item
						v-for="item in menus"
						:key="item.id"
						:index="String(item.id)"
						class="idea-menu__first-item"
						@click="handleDoubleFirstClick(item)"
					>
						<i v-if="item.icon" :class="item.icon"></i>
						<span>{{ item.label }}</span>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="idea-menu__first-bottom" v-if="$slots.bottom || $slots.footer">
				<slot name="bottom" />
				<slot name="footer" />
			</div>
		</div>
		<div
			class="idea-menu__second-col"
			:style="{ width: doubleSecondOpen && doubleSecondMenus.length ? secondColWidth + 'px' : '0px' }"
		>
			<div class="idea-menu__wrap" v-if="doubleSecondOpen && doubleSecondMenus.length">
				<el-menu :default-active="String(modelValue)" class="idea-menu__el-menu">
					<sidebar-menu-item
						v-for="item in doubleSecondMenus"
						:key="item.id"
						:item="item"
						:collapsed="false"
						:is-root="true"
						@select="handleSelect"
					/>
				</el-menu>
			</div>
			<div
				v-if="doubleSecondMenus.length"
				class="idea-menu__collapse-toolbar"
				@click="toggleDoubleSecond"
			>
				<span>{{ doubleSecondOpen ? '◀' : '▶' }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
import { ElSubMenu, ElMenuItem, ElMenuItemGroup } from 'element-plus'

export interface MenuItem {
	id: string | number
	label: string
	icon?: string
	path?: string
	disabled?: boolean
	children?: MenuItem[]
}

// 递归侧边栏菜单项
const SidebarMenuItem = defineComponent({
	name: 'SidebarMenuItem',
	props: {
		item: { type: Object as PropType<MenuItem>, required: true },
		collapsed: { type: Boolean, default: false },
		isRoot: { type: Boolean, default: false },
	},
	emits: ['select'],
	setup(props, { emit }) {
		const hasChildren = (item: MenuItem) => !!(item.children && item.children.length)

		return () => {
			const { item, collapsed, isRoot } = props
			const itemId = String(item.id)

			if (hasChildren(item)) {
				if (collapsed) {
					// 折叠状态: el-menu-item-group 包裹
					return h(
						ElSubMenu,
						{ index: itemId, popperClass: 'idea-menu__submenu-popper' },
						{
							title: () => [
								isRoot && item.icon ? h('i', { class: ['idea-menu__icon', item.icon] }) : null,
								h('span', item.label),
							],
							default: () =>
								h(
									ElMenuItemGroup,
								{},
								{
									title: () => h('span', item.label),
									default: () =>
										item.children!.map((child) =>
											h(SidebarMenuItem, {
												key: child.id,
												item: child,
												collapsed,
												isRoot: false,
												onSelect: (menu: MenuItem) => emit('select', menu),
											})
										),
								}
							),
						}
					)
				} else {
					// 展开状态: 直接嵌套
					return h(
						ElSubMenu,
						{ index: itemId },
						{
							title: () => [
								isRoot && item.icon ? h('i', { class: ['idea-menu__icon', item.icon], style: 'margin-right: 5px' }) : null,
								h('span', item.label),
							],
							default: () =>
								item.children!.map((child) =>
									h(SidebarMenuItem, {
										key: child.id,
										item: child,
										collapsed,
										isRoot: false,
										onSelect: (menu: MenuItem) => emit('select', menu),
									})
								),
						}
					)
				}
			}

			// 叶子节点
			return h(
				ElMenuItem,
				{
					index: itemId,
					disabled: item.disabled,
					onClick: () => {
						if (!item.disabled) emit('select', item)
					},
				},
				{
					default: () => [
						isRoot && item.icon ? h('i', { class: ['idea-menu__icon', item.icon], style: 'margin-right: 5px' }) : null,
						h('span', { title: item.label }, item.label),
					],
				}
			)
		}
	},
})

// 递归顶部hover子菜单
const TopSubMenu = defineComponent({
	name: 'TopSubMenu',
	props: {
		item: { type: Object as PropType<MenuItem>, required: true },
		level: { type: Number, required: true },
	},
	emits: ['select'],
	setup(props, { emit }): () => any {
		const hasChildren = (item: MenuItem) => !!(item.children && item.children.length)
		let showTimer: ReturnType<typeof setTimeout> | null = null
		let hideTimer: ReturnType<typeof setTimeout> | null = null

		return (): any => {
			const { item, level } = props

			return h(
				'div',
				{
					class: 'idea-menu__top-sub-item',
					onMouseenter: () => {
						if (showTimer) clearTimeout(showTimer)
						if (hideTimer) clearTimeout(hideTimer)
					},
					onMouseleave: () => {
						if (hideTimer) clearTimeout(hideTimer)
					},
					onClick: () => {
						if (!hasChildren(item) && !item.disabled) {
							emit('select', item)
						}
					},
				},
				[
					h(
						'span',
						{ class: 'idea-menu__top-sub-label' },
						item.label
					),
					hasChildren(item)
						? h('i', { class: 'idea-menu__top-sub-arrow' }, '▶')
						: null,
					hasChildren(item)
						? h(
								'div',
								{ class: 'idea-menu__top-sub-children' },
								item.children!.map((child): any =>
									h(TopSubMenu, {
										key: child.id,
										item: child,
										level: level + 1,
										onSelect: (menu: MenuItem) => emit('select', menu),
									})
								)
							)
						: null,
				]
			)
		}
	},
})

export default {
	components: {
		SidebarMenuItem,
		TopSubMenu,
	},
}
</script>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface MenuItem {
	id: string | number
	label: string
	icon?: string
	path?: string
	disabled?: boolean
	children?: MenuItem[]
}

const props = withDefaults(defineProps<{
	layout?: 'sidebar' | 'sidebar-header' | 'top' | 'top-sidebar' | 'double-sidebar'
	modelValue?: string | number
	menus?: MenuItem[]
	collapsed?: boolean
	collapsible?: boolean
	width?: number
	logo?: string
	defaultOpeneds?: string[]
}>(), {
	layout: 'sidebar',
	modelValue: '',
	menus: () => [],
	collapsed: false,
	collapsible: true,
	width: 256,
	logo: '',
	defaultOpeneds: () => [],
})

const emit = defineEmits<{
	(e: 'update:modelValue', value: string | number): void
	(e: 'update:collapsed', value: boolean): void
	(e: 'select', item: MenuItem): void
	(e: 'collapse-change', collapsed: boolean): void
	(e: 'home-click'): void
}>()

// ==================== 折叠状态 ====================
const isCollapsed = ref(props.collapsed)
watch(
	() => props.collapsed,
	(val) => {
		isCollapsed.value = val
	}
)

function toggleCollapse() {
	isCollapsed.value = !isCollapsed.value
	emit('update:collapsed', isCollapsed.value)
	emit('collapse-change', isCollapsed.value)
}

// ==================== 菜单宽度 ====================
const sidebarMenuWidth = computed(() => (isCollapsed.value ? 64 : props.width))

// ==================== 菜单选择 ====================
const hasChildren = (item: MenuItem): boolean => !!(item.children && item.children.length)

function handleSelect(item: MenuItem) {
	emit('update:modelValue', item.id)
	emit('select', item)
}

function handleHomeClick() {
	emit('home-click')
}

// ==================== top 布局：hover 子菜单 ====================
const hoveredTopMenu = ref<string | number>('')
let topSubTimer: ReturnType<typeof setTimeout> | null = null

function isTopMenuActive(item: MenuItem): boolean {
	if (item.id === props.modelValue) return true
	if (item.children) {
		return findMenuById(item.children, props.modelValue)
	}
	return false
}

function findMenuById(items: MenuItem[], id: string | number): boolean {
	for (const item of items) {
		if (item.id === id) return true
		if (item.children && findMenuById(item.children, id)) return true
	}
	return false
}

function showTopSub(item: MenuItem) {
	if (topSubTimer) clearTimeout(topSubTimer)
	topSubTimer = setTimeout(() => {
		hoveredTopMenu.value = item.id
	}, 150)
}

function hideTopSub() {
	if (topSubTimer) clearTimeout(topSubTimer)
	topSubTimer = setTimeout(() => {
		hoveredTopMenu.value = ''
	}, 150)
}

function handleTopMenuClick(item: MenuItem) {
	if (!hasChildren(item)) {
		handleSelect(item)
	}
}

// ==================== top-sidebar 布局 ====================
const topSidebarActiveId = ref<string | number>('')
const topSidebarSubMenus = ref<MenuItem[]>([])
const topSidebarTitle = ref('')

function handleTopSidebarClick(item: MenuItem) {
	topSidebarActiveId.value = item.id
	topSidebarTitle.value = item.label
	if (item.children && item.children.length) {
		topSidebarSubMenus.value = item.children
	} else {
		topSidebarSubMenus.value = []
		handleSelect(item)
	}
}

// ==================== double-sidebar 布局 ====================
const doubleFirstActiveId = ref<string | number>('')
const doubleSecondOpen = ref(true)
const doubleSecondMenus = ref<MenuItem[]>([])
const secondColWidth = ref(props.width)

function handleDoubleFirstClick(item: MenuItem) {
	doubleFirstActiveId.value = item.id
	if (item.children && item.children.length) {
		doubleSecondMenus.value = item.children
		doubleSecondOpen.value = true
	} else {
		doubleSecondMenus.value = []
		doubleSecondOpen.value = false
		handleSelect(item)
	}
}

function toggleDoubleSecond() {
	doubleSecondOpen.value = !doubleSecondOpen.value
}

// ==================== 初始化 ====================
function initMenu() {
	if (props.menus.length === 0) return

	if (props.modelValue) {
		// 在菜单树中查找当前激活项
		findActivePath(props.menus, props.modelValue)
	}
}

function findActivePath(items: MenuItem[], targetId: string | number): boolean {
	for (const item of items) {
		if (item.id === targetId) return true
		if (item.children && findActivePath(item.children, targetId)) {
			if (props.layout === 'top-sidebar') {
				topSidebarActiveId.value = item.id
				topSidebarTitle.value = item.label
				topSidebarSubMenus.value = item.children || []
			}
			if (props.layout === 'double-sidebar') {
				doubleFirstActiveId.value = item.id
				doubleSecondMenus.value = item.children || []
			}
			return true
		}
	}
	return false
}

watch(
	() => props.menus,
	() => initMenu(),
	{ immediate: true }
)

watch(
	() => props.modelValue,
	(val) => {
		if (val && props.menus.length > 0) {
			findActivePath(props.menus, val)
		}
	}
)
</script>

<style lang="less">
// ==================== 基础变量 ====================
@menu-bg: var(--idea-menu-bg, #fff);
@menu-text: var(--idea-menu-text, var(--idea-color-text-regular, #606266));
@menu-text-active: var(--idea-menu-text-active, var(--idea-color-primary));
@menu-hover-bg: var(--idea-menu-hover-bg, rgba(0, 0, 0, 0.04));
@menu-active-bg: var(--idea-menu-active-bg, rgba(var(--idea-color-primary-rgb, 237, 111, 34), 0.08));
@menu-border: var(--idea-menu-border, var(--idea-color-border-lighter, #EBEEF5));

// ==================== el-menu 主题色变量映射 ====================
.idea-menu, .idea-menu__submenu-popper {
	// Element 菜单变量 -> 主题色变量
	--el-menu-active-color: var(--idea-color-primary);
	--el-menu-text-color: var(--idea-color-text-regular);
	--el-menu-hover-bg-color: var(--idea-color-primary-light-8);
	--el-menu-bg-color: var(--idea-color-white);
}

// ==================== 侧边栏共用 ====================
.idea-menu {
	&--sidebar,
	&--sidebar-header,
	&--top-sidebar {
		.idea-menu__logo {
			height: 56px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 16px;
			cursor: pointer;
			overflow: hidden;

			img {
				max-height: 36px;
				max-width: 100%;
			}
		}

		.idea-menu__wrap {
			flex: 1;
			display: flex;
			flex-direction: column;
			min-height: 0;
			overflow: hidden auto;
		}

		.idea-menu__el-menu {
			border-right: none;
			background: @menu-bg;
			flex: 1;
		}
	}
}

// ==================== 菜单图标 ====================
.idea-menu .idea-menu__icon {
	display: inline-block;
	width: 18px;
	height: 18px;
	font-size: 18px;
	line-height: 18px;
	text-align: center;
}

// ==================== sidebar 布局 ====================
.idea-menu--sidebar {
	display: flex;
	flex-direction: column;
	height: 100%;
	background: @menu-bg;
	border-right: 1px solid @menu-border;
	transition: width 0.3s;
	overflow: hidden;

	.idea-menu__logo {
		border-bottom: 1px solid @menu-border;
	}

	.idea-menu__footer {
		padding: 8px;
		border-top: 1px solid @menu-border;
	}

	.idea-menu__collapse-btn {
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border-top: 1px solid @menu-border;
		color: @menu-text;
		font-size: 12px;
		transition: all 0.2s;

		&:hover {
			background: @menu-hover-bg;
			color: @menu-text-active;
		}
	}

	.idea-menu__collapse-icon {
		display: inline-block;
		transition: transform 0.3s;
		font-size: 18px;
		&.is-collapsed {
			transform: scaleX(-1);
		}
	}
}

// ==================== sidebar-header 布局 ====================
.idea-menu--sidebar-header {
	display: flex;
	flex-direction: column;
	height: 100%;

	.idea-menu__header {
		height: 56px;
		display: flex;
		align-items: center;
		background: @menu-bg;
		border-bottom: 1px solid @menu-border;
		flex-shrink: 0;
	}

	.idea-menu__header-inner {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0 16px;
	}

	.idea-menu__body {
		display: flex;
		flex: 1;
		overflow: hidden;
	}

	.idea-menu__sidebar {
		position: relative;
		display: flex;
		flex-direction: column;
		background: @menu-bg;
		border-right: 1px solid @menu-border;
		transition: width 0.3s;
		overflow: hidden;
		flex-shrink: 0;
	}

	.idea-menu__collapse-bar {
		height: 100%;
		width: 20px;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background: @menu-bg;
		color: @menu-text;
		font-size: 12px;

		&:hover {
			background: @menu-hover-bg;
			color: @menu-text-active;
		}
	}

	.idea-menu__content {
		flex: 1;
		overflow: auto;
	}
}

// ==================== top 布局 ====================
.idea-menu--top {
	display: flex;
	flex-direction: column;

	.idea-menu__top-bar {
		display: flex;
		align-items: center;
		height: 56px;
		background: @menu-bg;
		border-bottom: 1px solid @menu-border;
		padding: 0 16px;
		flex-shrink: 0;
	}

	.idea-menu__logo {
		margin-right: 24px;
		img {
			max-height: 36px;
		}
	}

	.idea-menu__top-list {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.idea-menu__top-item {
		position: relative;
		display: flex;
		align-items: center;
		padding: 0 16px;
		cursor: pointer;
		color: @menu-text;
		font-size: 14px;
		transition: color 0.2s;
		white-space: nowrap;

		&:hover,
		&.is-active {
			color: @menu-text-active;
		}

		&.is-active::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 16px;
			right: 16px;
			height: 2px;
			background: @menu-text-active;
		}
	}

	.idea-menu__top-label {
		display: inline-block;
	}

	.idea-menu__top-sub {
		position: absolute;
		top: 100%;
		left: 0;
		min-width: 160px;
		background: @menu-bg;
		border: 1px solid @menu-border;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		padding: 8px 0;
		z-index: 1000;
	}

	.idea-menu__top-extra {
		margin-left: auto;
	}

	.idea-menu__content {
		flex: 1;
	}
}

.idea-menu__top-sub-item {
	position: relative;
	padding: 8px 16px;
	cursor: pointer;
	color: @menu-text;
	font-size: 14px;
	transition: all 0.2s;
	display: flex;
	align-items: center;
	justify-content: space-between;
	white-space: nowrap;

	&:hover {
		background: @menu-hover-bg;
		color: @menu-text-active;
	}
}

.idea-menu__top-sub-arrow {
	font-size: 10px;
	margin-left: 16px;
}

// ==================== top-sidebar 布局 ====================
.idea-menu--top-sidebar {
	display: flex;
	flex-direction: column;
	height: 100%;

	.idea-menu__top-bar {
		display: flex;
		align-items: center;
		height: 56px;
		background: @menu-bg;
		border-bottom: 1px solid @menu-border;
		padding: 0 16px;
		flex-shrink: 0;
	}

	.idea-menu__logo {
		margin-right: 24px;
		img {
			max-height: 36px;
		}
	}

	.idea-menu__top-list {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.idea-menu__top-item {
		display: flex;
		align-items: center;
		padding: 0 16px;
		cursor: pointer;
		color: @menu-text;
		font-size: 14px;
		transition: color 0.2s;
		position: relative;

		&:hover,
		&.is-active {
			color: @menu-text-active;
		}

		&.is-active::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 16px;
			right: 16px;
			height: 2px;
			background: @menu-text-active;
		}
	}

	.idea-menu__top-extra {
		margin-left: auto;
	}

	.idea-menu__body {
		display: flex;
		flex: 1;
		overflow: hidden;
	}

	.idea-menu__sidebar {
		display: flex;
		flex-direction: column;
		background: @menu-bg;
		border-right: 1px solid @menu-border;
		overflow: hidden;
		flex-shrink: 0;
		transition: width 0.3s;
	}

	.idea-menu__sidebar-title {
		height: 40px;
		display: flex;
		align-items: center;
		padding: 0 16px;
		font-size: 14px;
		font-weight: 500;
		color: @menu-text;
		border-bottom: 1px solid @menu-border;
	}

	.idea-menu__content {
		flex: 1;
		overflow: auto;
	}
}

// ==================== double-sidebar 布局 ====================
.idea-menu--double-sidebar {
	display: flex;
	height: 100%;

	.idea-menu__first-col {
		width: 64px;
		display: flex;
		flex-direction: column;
		background: var(--idea-menu-double-first-bg, #1f2637);
		flex-shrink: 0;
	}

	.idea-menu__logo {
		height: 54px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		img {
			max-width: 36px;
			max-height: 36px;
		}
	}

	.idea-menu__first-wrap {
		flex: 1;
		overflow: hidden auto;

		.idea-menu__el-menu {
			background: transparent;
			border-right: none;
		}
	}

	.idea-menu__first-item {
		height: 64px !important;
		padding: 12px 0 !important;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--idea-menu-double-first-text, #d2d4d7) !important;
		font-size: 12px;
		line-height: 1.2;

		i {
			font-size: 20px;
			margin-bottom: 4px;
		}

		&:hover {
			background: var(--idea-menu-double-first-hover-bg, rgba(69, 138, 255, 0.1)) !important;
			color: var(--idea-color-primary) !important;
		}

		&.is-active {
			background: var(--idea-color-primary, #ED6F22) !important;
			color: #fff !important;
		}
	}

	.idea-menu__first-bottom {
		padding: 8px 0;
		border-top: 1px solid var(--idea-menu-double-first-border, rgba(255, 255, 255, 0.1));
	}

	.idea-menu__second-col {
		position: relative;
		background: @menu-bg;
		transition: width 0.3s;
		overflow: hidden;
		flex-shrink: 0;

		.idea-menu__wrap {
			height: 100%;
			overflow: hidden auto;

			.idea-menu__el-menu {
				border-right: none;
			}
		}
	}

	.idea-menu__collapse-toolbar {
		position: absolute;
		right: -12px;
		top: 35%;
		height: 60px;
		width: 12px;
		background: var(--idea-menu-collapse-toolbar-bg, #b6b9c1);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 12px;
		border-radius: 0 4px 4px 0;
	}
}
</style>
