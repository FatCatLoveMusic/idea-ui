import Drawer from './src/drawer.vue'
import type { App } from 'vue'

Drawer.install = (app: App) => {
  app.component('IdeaDrawer', Drawer)
}

export { Drawer }
export default Drawer