import './assets/style/main.css'
import 'flowbite'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { nextTick } from 'vue'
import { initializeObserver } from './animation'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.afterEach(() => {
  nextTick(() => {
    initializeObserver();
  });
});
initializeObserver();
app.mount('#app')
