import type { App } from 'vue'
import { $idea } from './defaults'
import { localePlugin, loadMessages } from './locale'
import zhCN from './locale/zh-cn'
import zhTW from './locale/zh-tw'
import en from './locale/en'

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
]

const install = (app: App, options?: { locale?: string }) => {
	// Install locale plugin
	app.use(localePlugin, { locale: (options?.locale as 'zh-cn' | 'zh-tw' | 'en') || 'zh-cn' })

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
}

export { $idea }
export { useLocale, setLocale, loadMessages as loadLocaleMessages } from './locale'