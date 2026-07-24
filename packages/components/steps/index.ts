import Steps from './src/steps.vue'
import type { App } from 'vue'

Steps.install = (app: App) => {
  app.component('IdeaSteps', Steps)
}

export { Steps }
export default Steps