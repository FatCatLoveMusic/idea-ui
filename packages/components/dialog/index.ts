import Dialog from './src/dialog.vue'
import type { App } from 'vue'

Dialog.install = (app: App) => {
  app.component('IdeaDialog', Dialog)
}

export { Dialog }
export default Dialog