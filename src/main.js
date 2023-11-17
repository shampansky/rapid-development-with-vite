import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// const autoImportedModules = import.meta.globEager('./autoImports/*.js')
const autoImportedModules = import.meta.glob('./autoImports/*.js')

console.log(autoImportedModules)

for (const path in autoImportedModules) {
  autoImportedModules[path]()
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
