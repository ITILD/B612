import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/tailwind-index.css'

import { vFocus } from './components/common/directives/mouseOther'
import { mainSetting } from './components/common/setting/mainSetting'
// 初始辅助设置 适应屏幕参数 webgl等参数
mainSetting()
// 
const app = createApp(App)
app.directive('v-focus', vFocus)
// 官方状态
app.use(createPinia())
// 官方路由
app.use(router)

app.mount('#app')


