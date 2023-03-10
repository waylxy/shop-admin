import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app=createApp(App)
app.use(ElementPlus)
// 完成注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
import 'virtual:windi.css'
app.use(router)
app.mount('#app')

