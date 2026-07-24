import BackTop from './src/back-top.vue'
import type { App } from 'vue'

BackTop.install = (app: App) => {
  app.component('IdeaBackTop', BackTop)
}

export { BackTop }
export default BackTop