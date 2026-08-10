import Scrollbar from './src/scrollbar.vue'
import type { App } from 'vue'

Scrollbar.install = (app: App) => {
	app.component('IdeaScrollbar', Scrollbar)
}

export { Scrollbar }
export default Scrollbar