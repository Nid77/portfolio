import './assets/style/main.css'
import 'flowbite'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineComponent, onMounted, watch } from 'vue';
import { initializeObserver } from './animation'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


watch(router.currentRoute, () => {
  initializeObserver();
});

app.mount('#app')