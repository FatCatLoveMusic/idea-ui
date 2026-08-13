import Menu from './src/menu.vue'
import type { App } from 'vue'

Menu.install = (app: App) => {
	app.component('IdeaMenu', Menu)
}

export { Menu }
export default Menu

export { findMenuPath } from './src/utils'
export type { MenuItem } from './src/utils'
