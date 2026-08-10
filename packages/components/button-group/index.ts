import ButtonGroup from './src/button-group.vue'
import type { App } from 'vue'

ButtonGroup.install = (app: App) => {
	app.component('IdeaButtonGroup', ButtonGroup)
}

export { ButtonGroup }
export default ButtonGroup