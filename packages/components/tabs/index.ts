import Tabs from './src/tabs.vue'
import type { App } from 'vue'

Tabs.install = (app: App) => {
	app.component('IdeaTabs', Tabs)
}

export { Tabs }
export default Tabs