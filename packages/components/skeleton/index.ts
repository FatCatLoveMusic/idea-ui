import Skeleton from './src/skeleton.vue'
import type { App } from 'vue'

Skeleton.install = (app: App) => {
  app.component('IdeaSkeleton', Skeleton)
}

export { Skeleton }
export default Skeleton