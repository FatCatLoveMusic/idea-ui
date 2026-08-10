import TableAddBtn from './src/table-add-btn.vue'
import type { App } from 'vue'

TableAddBtn.install = (app: App) => {
	app.component('IdeaTableAddBtn', TableAddBtn)
}

export { TableAddBtn }
export default TableAddBtn