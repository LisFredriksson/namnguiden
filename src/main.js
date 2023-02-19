import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import axios from 'axios'
import App from './App.vue'
import router from './router/index'
import store from './store'

import './assets/base.css'

const app = createApp(App)
app.config.globalProperties.axios = axios

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.use(store)

app.mount('#app')
