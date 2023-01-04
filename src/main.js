import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app=createApp(App)
app.use(ElementPlus)
import router from "./router"

import 'virtual:windi.css'
app.use(router)
app.mount('#app')

