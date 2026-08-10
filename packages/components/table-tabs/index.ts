import TableTabs from './src/table-tabs.vue'
import type { App } from 'vue'

TableTabs.install = (app: App) => {
	app.component('IdeaTableTabs', TableTabs)
}

export { TableTabs }
export default TableTabs