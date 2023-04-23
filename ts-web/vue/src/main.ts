import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/tailwind-index.css'
// 点击外部 https://juejin.cn/post/6968063117859241992
import ClickOutside from './components/common/directives/clickoutside'
import { vFocus } from './components/common/directives/mouseOther'

const app = createApp(App)
// 注册事件
app.directive('click-outside', ClickOutside)
app.directive('v-focus', vFocus)
// 官方状态
app.use(createPinia())
// 官方路由
app.use(router)

app.mount('#app')