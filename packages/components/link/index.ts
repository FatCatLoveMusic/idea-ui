import Link from './src/link.vue'
import type { App } from 'vue'

Link.install = (app: App) => {
  app.component('IdeaLink', Link)
}

export { Link }
export default Link