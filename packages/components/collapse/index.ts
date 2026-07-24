import Collapse from './src/collapse.vue'
import type { App } from 'vue'

Collapse.install = (app: App) => {
  app.component('IdeaCollapse', Collapse)
}

export { Collapse }
export default Collapse