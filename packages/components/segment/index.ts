import Segment from './src/segment.vue'
import type { App } from 'vue'

Segment.install = (app: App) => {
  app.component('IdeaSegment', Segment)
}

export { Segment }
export default Segment