import Versions from './src/versions.vue'
import type { App } from 'vue'

Versions.install = (app: App) => {
  app.component('IdeaVersions', Versions)
}

export { Versions }
export default Versions