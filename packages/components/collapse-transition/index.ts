import CollapseTransition from './src/collapse-transition.vue'
import type { App } from 'vue'

CollapseTransition.install = (app: App) => {
  app.component('IdeaCollapseTransition', CollapseTransition)
}

export { CollapseTransition }
export default CollapseTransition