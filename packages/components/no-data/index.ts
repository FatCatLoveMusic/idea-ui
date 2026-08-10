import NoData from './src/no-data.vue'
import type { App } from 'vue'

NoData.install = (app: App) => {
	app.component('IdeaNoData', NoData)
}

export { NoData }
export default NoData