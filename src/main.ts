import './assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeObserver } from './animation'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

document.addEventListener('DOMContentLoaded', () => {
    initializeObserver();
});