import DividerLine from './src/divider-line.vue'
import type { App } from 'vue'

DividerLine.install = (app: App) => {
	app.component('IdeaDividerLine', DividerLine)
}

export { DividerLine }
export default DividerLine