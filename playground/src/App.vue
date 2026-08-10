<template>
	<div class="app-layout" :class="[themeClass, { 'is-rtl': isRtl }]" :dir="isRtl ? 'rtl' : 'ltr'">
		<header class="app-header">
			<div class="app-header__left">
				<h1 class="app-logo" @click="$router.push('/')">idea-ui</h1>
				<span class="app-version">v1.0.0</span>
			</div>
			<div class="app-header__right">
				<select v-model="currentLang" @change="changeLang" class="lang-select">
					<option value="zh-cn">简体中文</option>
					<option value="zh-tw">繁體中文</option>
					<option value="en">English</option>
				</select>
				<select v-model="currentTheme" @change="changeTheme" class="theme-select">
					<option value="">默认主题</option>
					<option value="theme-blue">蓝色主题</option>
					<option value="theme-red">红色主题</option>
					<option value="theme-dark-blue">深蓝主题</option>
				</select>
				<button class="rtl-btn" @click="isRtl = !isRtl">
					{{ isRtl ? 'LTR' : 'RTL' }}
				</button>
			</div>
		</header>
		<div class="app-body">
			<aside class="app-sidebar">
				<nav>
					<div class="nav-section">
						<h3 class="nav-title">基础组件</h3>
						<router-link to="/component/back-top" class="nav-link">Back Top 回到顶部</router-link>
						<router-link to="/component/scrollbar" class="nav-link">Scrollbar 滚动条</router-link>
						<router-link to="/component/skeleton" class="nav-link">Skeleton 骨架屏</router-link>
						<router-link to="/component/no-data" class="nav-link">No Data 无数据</router-link>
						<router-link to="/component/divider-line" class="nav-link">Divider 分割线</router-link>
						<router-link to="/component/link" class="nav-link">Link 链接</router-link>
					</div>
					<div class="nav-section">
						<h3 class="nav-title">布局组件</h3>
						<router-link to="/component/dialog" class="nav-link">Dialog 弹窗</router-link>
						<router-link to="/component/drawer" class="nav-link">Drawer 抽屉</router-link>
						<router-link to="/component/collapse" class="nav-link">Collapse 折叠面板</router-link>
						<router-link to="/component/tabs" class="nav-link">Tabs 标签页</router-link>
					</div>
					<div class="nav-section">
						<h3 class="nav-title">导航组件</h3>
						<router-link to="/component/segment" class="nav-link">Segment 分段器</router-link>
						<router-link to="/component/steps" class="nav-link">Steps 步骤条</router-link>
						<router-link to="/component/timeline" class="nav-link">Timeline 时间轴</router-link>
					</div>
					<div class="nav-section">
						<h3 class="nav-title">数据展示</h3>
						<router-link to="/component/card" class="nav-link">Card 卡片</router-link>
						<router-link to="/component/empty-card" class="nav-link">Empty Card 空状态</router-link>
						<router-link to="/component/versions" class="nav-link">Versions 版本号</router-link>
					</div>
					<div class="nav-section">
						<h3 class="nav-title">操作组件</h3>
						<router-link to="/component/button-group" class="nav-link">Button Group 按钮组</router-link>
						<router-link to="/component/tile-filter" class="nav-link">Tile Filter 筛选器</router-link>
						<router-link to="/component/table-add-btn" class="nav-link">Table Add 表格新增</router-link>
						<router-link to="/component/table-tabs" class="nav-link">Table Tabs 表格Tab</router-link>
					</div>
				</nav>
			</aside>
			<main class="app-main">
				<router-view />
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setLocale } from '../../packages/locale'

const currentLang = ref('zh-cn')
const currentTheme = ref('')
const themeClass = ref('')
const isRtl = ref(false)

function changeLang() {
	setLocale(currentLang.value as 'zh-cn' | 'zh-tw' | 'en')
}

function changeTheme() {
	themeClass.value = currentTheme.value
}
</script>

<style lang="less">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	font-size: 14px;
	color: var(--idea-color-text-primary);
	background: var(--idea-bg-color-page);
}

.app-layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

.app-header {
	height: 60px;
	background: var(--idea-bg-color);
	border-bottom: 1px solid var(--idea-color-border-light);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 24px;
	position: sticky;
	top: 0;
	z-index: 100;

	&__left {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	&__right {
		display: flex;
		align-items: center;
		gap: 12px;
	}
}

.app-logo {
	font-size: 20px;
	font-weight: 700;
	color: var(--idea-color-primary);
	cursor: pointer;
}

.app-version {
	font-size: 12px;
	color: var(--idea-color-text-secondary);
	background: var(--idea-bg-color-page);
	padding: 2px 8px;
	border-radius: 4px;
}

.lang-select,
.theme-select {
	padding: 4px 8px;
	border: 1px solid var(--idea-color-border);
	border-radius: 4px;
	font-size: 13px;
	color: var(--idea-color-text-regular);
	background: var(--idea-bg-color);
	cursor: pointer;
}

.rtl-btn {
	padding: 4px 12px;
	border: 1px solid var(--idea-color-border);
	border-radius: 4px;
	font-size: 13px;
	background: var(--idea-bg-color);
	cursor: pointer;
	color: var(--idea-color-text-regular);
}

.app-body {
	display: flex;
	flex: 1;
}

.app-sidebar {
	width: 240px;
	background: var(--idea-bg-color);
	border-right: 1px solid var(--idea-color-border-light);
	padding: 16px 0;
	overflow-y: auto;
	position: sticky;
	top: 60px;
	height: calc(100vh - 60px);
}

.nav-section {
	padding: 0 16px;
	margin-bottom: 16px;
}

.nav-title {
	font-size: 13px;
	color: var(--idea-color-text-secondary);
	padding: 8px 0;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.nav-link {
	display: block;
	padding: 8px 12px;
	font-size: 14px;
	color: var(--idea-color-text-regular);
	text-decoration: none;
	border-radius: 4px;
	transition: all 0.2s;

	&:hover {
		color: var(--idea-color-primary);
		background: rgba(var(--idea-color-primary-rgb), 0.06);
	}

	&.router-link-active {
		color: var(--idea-color-primary);
		background: rgba(var(--idea-color-primary-rgb), 0.1);
		font-weight: 500;
	}
}

.app-main {
	flex: 1;
	padding: 24px;
	overflow-y: auto;
	max-width: 960px;
	background: var(--idea-bg-color-page);
}

// 页面内容样式
.demo-page {
	h2 {
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 8px;
		color: var(--idea-color-text-primary);
	}

	.demo-desc {
		font-size: 14px;
		color: var(--idea-color-text-secondary);
		margin-bottom: 24px;
		line-height: 1.6;
	}

	.demo-section {
		margin-bottom: 32px;

		h3 {
			font-size: 16px;
			font-weight: 500;
			margin-bottom: 12px;
			color: var(--idea-color-text-primary);
		}
	}

	.demo-block {
		padding: 24px;
		border: 1px solid var(--idea-color-border-light);
		border-radius: 8px;
		background: var(--idea-bg-color);
		margin-bottom: 16px;
	}
}

// RTL 支持
.is-rtl {
	.app-sidebar {
		border-right: none;
		border-left: 1px solid var(--idea-color-border-light);
	}
}
</style>
