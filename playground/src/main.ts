import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import IdeaUI from '../../packages/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../../packages/theme-chalk/src/index.less'
import '../../packages/theme-chalk/src/common/base.less'

import Overview from './pages/overview.vue'

const routes = [
	{ path: '/', redirect: '/component/overview' },
	{
		path: '/component/overview',
		name: 'overview',
		component: Overview,
	},
	{
		path: '/component/back-top',
		name: 'back-top',
		component: () => import('./pages/back-top/index.vue'),
	},
	{
		path: '/component/dialog',
		name: 'dialog',
		component: () => import('./pages/dialog.vue'),
	},
	{
		path: '/component/drawer',
		name: 'drawer',
		component: () => import('./pages/drawer.vue'),
	},
	{
		path: '/component/collapse',
		name: 'collapse',
		component: () => import('./pages/collapse.vue'),
	},
	{
		path: '/component/tabs',
		name: 'tabs',
		component: () => import('./pages/tabs.vue'),
	},
	{
		path: '/component/scrollbar',
		name: 'scrollbar',
		component: () => import('./pages/scrollbar.vue'),
	},
	{
		path: '/component/skeleton',
		name: 'skeleton',
		component: () => import('./pages/skeleton.vue'),
	},
	{
		path: '/component/no-data',
		name: 'no-data',
		component: () => import('./pages/no-data.vue'),
	},
	{
		path: '/component/segment',
		name: 'segment',
		component: () => import('./pages/segment.vue'),
	},
	{
		path: '/component/steps',
		name: 'steps',
		component: () => import('./pages/steps.vue'),
	},
	{
		path: '/component/timeline',
		name: 'timeline',
		component: () => import('./pages/timeline.vue'),
	},
	{
		path: '/component/divider-line',
		name: 'divider-line',
		component: () => import('./pages/divider-line.vue'),
	},
	{
		path: '/component/empty-card',
		name: 'empty-card',
		component: () => import('./pages/empty-card.vue'),
	},
	{
		path: '/component/card',
		name: 'card',
		component: () => import('./pages/card.vue'),
	},
	{
		path: '/component/button-group',
		name: 'button-group',
		component: () => import('./pages/button-group.vue'),
	},
	{
		path: '/component/tile-filter',
		name: 'tile-filter',
		component: () => import('./pages/tile-filter.vue'),
	},
	{
		path: '/component/versions',
		name: 'versions',
		component: () => import('./pages/versions.vue'),
	},
	{
		path: '/component/table-add-btn',
		name: 'table-add-btn',
		component: () => import('./pages/table-add-btn.vue'),
	},
	{
		path: '/component/table-tabs',
		name: 'table-tabs',
		component: () => import('./pages/table-tabs.vue'),
	},
	{
		path: '/component/link',
		name: 'link',
		component: () => import('./pages/link.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App)
app.use(IdeaUI, { locale: 'zh-cn' })
app.use(ElementPlus)
app.use(router)
app.mount('#app')
