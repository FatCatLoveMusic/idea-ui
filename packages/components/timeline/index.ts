import Timeline from './src/timeline.vue'
import type { App } from 'vue'

Timeline.install = (app: App) => {
  app.component('IdeaTimeline', Timeline)
}

export { Timeline }
export default Timeline