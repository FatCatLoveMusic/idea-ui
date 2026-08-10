import Card from './src/card.vue'
import type { App } from 'vue'

Card.install = (app: App) => {
	app.component('IdeaCard', Card)
}

export { Card }
export default Card