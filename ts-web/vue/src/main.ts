import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/tailwind-index.css'
// 点击外部 https://juejin.cn/post/6968063117859241992
import ClickOutside from './components/devUtils/clickoutside'
const app = createApp(App)
app.directive('click-outside', ClickOutside)
app.use(createPinia())
app.use(router)

app.mount('#app')