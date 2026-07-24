import EmptyCard from './src/empty-card.vue'
import type { App } from 'vue'

EmptyCard.install = (app: App) => {
  app.component('IdeaEmptyCard', EmptyCard)
}

export { EmptyCard }
export default EmptyCard