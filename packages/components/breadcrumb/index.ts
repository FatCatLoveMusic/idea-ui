import Breadcrumb from './src/breadcrumb.vue'
import type { App } from 'vue'

Breadcrumb.install = (app: App) => {
	app.component('IdeaBreadcrumb', Breadcrumb)
}

export { Breadcrumb }
export type { BreadcrumbItem } from './src/types'
export default Breadcrumb
