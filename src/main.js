import './assets/styles.css'

import { createApp } from 'vue'
import "./assets/styles.css"
import App from './App.vue'
import Vue3SmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)

app.use(Vue3SmoothScroll)

app.mount('#app')
