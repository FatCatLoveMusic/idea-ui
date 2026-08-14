import type { App } from 'vue'
import { $idea } from './defaults'
import { localePlugin, loadMessages } from './locale'
import zhCN from './locale/zh-cn'
import zhTW from './locale/zh-tw'
import en from './locale/en'
import type { LanguagePack, Language } from './locale'

// Components
import { BackTop } from './components/back-top'
import { CollapseTransition } from './components/collapse-transition'
import { NoData } from './components/no-data'
import { Skeleton } from './components/skeleton'
import { Scrollbar } from './components/scrollbar'
import { Dialog } from './components/dialog'
import { Drawer } from './components/drawer'
import { Collapse } from './components/collapse'
import { Tabs } from './components/tabs'
import { DividerLine } from './components/divider-line'
import { EmptyCard } from './components/empty-card'
import { Versions } from './components/versions'
import { Segment } from './components/segment'
import { Steps } from './components/steps'
import { Timeline } from './components/timeline'
import { TableAddBtn } from './components/table-add-btn'
import { TableTabs } from './components/table-tabs'
import { Card } from './components/card'
import { ButtonGroup } from './components/button-group'
import { Link } from './components/link'
import { TileFilter } from './components/tile-filter'
import { Menu } from './components/menu'
import { Breadcrumb } from './components/breadcrumb'

// Load default locale messages
loadMessages('zh-cn', zhCN)
loadMessages('zh-tw', zhTW)
loadMessages('en', en)

const components = [
	BackTop,
	CollapseTransition,
	NoData,
	Skeleton,
	Scrollbar,
	Dialog,
	Drawer,
	Collapse,
	Tabs,
	DividerLine,
	EmptyCard,
	Versions,
	Segment,
	Steps,
	Timeline,
	TableAddBtn,
	TableTabs,
	Card,
	ButtonGroup,
	Link,
	TileFilter,
	Menu,
	Breadcrumb,
]

export type Theme = 'theme-default' | 'theme-blue' | 'theme-red' | 'theme-dark-blue'

export interface IdeaUIOptions {
	locale?: Language | LanguagePack
	/** 主题，如 'theme-blue'，也支持省略前缀写成 'blue' */
	theme?: Theme | string
	/** 是否开启 RTL 布局 */
	rtl?: boolean
}

const THEME_CLASSES: Theme[] = ['theme-default', 'theme-blue', 'theme-red', 'theme-dark-blue']

// 页面配置的 localStorage key（主题/RTL 优先读取本地配置，缺失时才回退到注册选项）
const CONFIG_KEY = 'idea-ui-page-config'

// 主题 class 挂在 body 上（popper 等挂载在 body 下的元素才能继承主题变量），dir 挂在 <html> 上全站生效
function applyThemeAndRtl(options?: IdeaUIOptions) {
	if (typeof document === 'undefined') return

	// 读取本地配置：localStorage 优先于注册选项，缺失的属性回退到 options
	let saved: Record<string, unknown> = {}
	if (typeof window !== 'undefined' && window.localStorage) {
		try {
			saved = JSON.parse(window.localStorage.getItem(CONFIG_KEY) || '{}')
		} catch {
			// 忽略解析失败
		}
	}

	const theme = (saved.theme as string) || options?.theme
	const rtl = typeof saved.isRtl === 'boolean' ? (saved.isRtl as boolean) : options?.rtl

	let themeClass: Theme | undefined
	if (theme) {
		themeClass = (theme.startsWith('theme-') ? theme : `theme-${theme}`) as Theme
		THEME_CLASSES.forEach((cls) => document.body.classList.toggle(cls, cls === themeClass))
	}

	if (typeof rtl === 'boolean') {
		document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr')
	}

	// 将解析后的配置回写，保证 main.ts 的默认值也能持久化
	if (typeof window !== 'undefined' && window.localStorage) {
		try {
			if (themeClass) saved.theme = themeClass
			if (typeof rtl === 'boolean') saved.isRtl = rtl
			window.localStorage.setItem(CONFIG_KEY, JSON.stringify(saved))
		} catch {
			// localStorage 不可用时忽略
		}
	}
}

const install = (app: App, options?: IdeaUIOptions) => {
	// Install locale plugin（locale 可以是语言标识字符串或语言包对象，与 element-plus 用法一致）
	app.use(localePlugin, { locale: options?.locale || 'zh-cn' })

	// Apply theme & RTL
	applyThemeAndRtl(options)

	// Register all components using their install method
	components.forEach((component) => {
		if (typeof component.install === 'function') {
			component.install(app)
		} else {
			app.component(component.name || '', component)
		}
	})

	// Mount global $idea
	app.config.globalProperties.$idea = $idea
}

export default {
	install,
	// Locale functions
	loadMessages,
}

// Named exports
export {
	BackTop,
	CollapseTransition,
	NoData,
	Skeleton,
	Scrollbar,
	Dialog,
	Drawer,
	Collapse,
	Tabs,
	DividerLine,
	EmptyCard,
	Versions,
	Segment,
	Steps,
	Timeline,
	TableAddBtn,
	TableTabs,
	Card,
	ButtonGroup,
	Link,
	TileFilter,
	Menu,
	Breadcrumb,
}

export { $idea }
export { zhCN, zhTW, en }
export { useLocale, setLocale, loadMessages as loadLocaleMessages } from './locale'
export type { Language, LanguagePack, LocaleMessages } from './locale'
