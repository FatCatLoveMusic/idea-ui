import TileFilter from './src/tile-filter.vue'
import type { App } from 'vue'

TileFilter.install = (app: App) => {
	app.component('IdeaTileFilter', TileFilter)
}

export { TileFilter }
export default TileFilter