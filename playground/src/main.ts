import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import IdeaUI from '../../packages/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../../packages/theme-chalk/src/index.less'
import '../../packages/theme-chalk/src/common/base.less'
import '../../packages/theme-chalk/src/sapi-fonts/iconfont.css'

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
		component: () => import('./pages/dialog/index.vue'),
	},
	{
		path: '/component/drawer',
		name: 'drawer',
		component: () => import('./pages/drawer/index.vue'),
	},
	{
		path: '/component/collapse',
		name: 'collapse',
		component: () => import('./pages/collapse/index.vue'),
	},
	{
		path: '/component/tabs',
		name: 'tabs',
		component: () => import('./pages/tabs/index.vue'),
	},
	{
		path: '/component/scrollbar',
		name: 'scrollbar',
		component: () => import('./pages/scrollbar/index.vue'),
	},
	{
		path: '/component/skeleton',
		name: 'skeleton',
		component: () => import('./pages/skeleton/index.vue'),
	},
	{
		path: '/component/no-data',
		name: 'no-data',
		component: () => import('./pages/no-data/index.vue'),
	},
	{
		path: '/component/segment',
		name: 'segment',
		component: () => import('./pages/segment/index.vue'),
	},
	{
		path: '/component/steps',
		name: 'steps',
		component: () => import('./pages/steps/index.vue'),
	},
	{
		path: '/component/timeline',
		name: 'timeline',
		component: () => import('./pages/timeline/index.vue'),
	},
	{
		path: '/component/divider-line',
		name: 'divider-line',
		component: () => import('./pages/divider-line/index.vue'),
	},
	{
		path: '/component/empty-card',
		name: 'empty-card',
		component: () => import('./pages/empty-card/index.vue'),
	},
	{
		path: '/component/card',
		name: 'card',
		component: () => import('./pages/card/index.vue'),
	},
	{
		path: '/component/button-group',
		name: 'button-group',
		component: () => import('./pages/button-group/index.vue'),
	},
	{
		path: '/component/tile-filter',
		name: 'tile-filter',
		component: () => import('./pages/tile-filter/index.vue'),
	},
	{
		path: '/component/versions',
		name: 'versions',
		component: () => import('./pages/versions/index.vue'),
	},
	{
		path: '/component/table-add-btn',
		name: 'table-add-btn',
		component: () => import('./pages/table-add-btn/index.vue'),
	},
	{
		path: '/component/table-tabs',
		name: 'table-tabs',
		component: () => import('./pages/table-tabs/index.vue'),
	},
	{
		path: '/component/link',
		name: 'link',
		component: () => import('./pages/link/index.vue'),
	},
	{
		path: '/component/icons',
		name: 'icons',
		component: () => import('./pages/icons/index.vue'),
	},
	{
		path: '/component/menu',
		name: 'menu',
		component: () => import('./pages/menu/index.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App)
app.use(IdeaUI, {
	locale: 'zh-cn',
	// 主题色：theme-default / theme-blue / theme-red / theme-dark-blue（可省略 theme- 前缀）
	theme: 'theme-blue',
	// 是否开启 RTL 布局
	rtl: false,
})
app.use(ElementPlus)
app.use(router)
app.mount('#app')
