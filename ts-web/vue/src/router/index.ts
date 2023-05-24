import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/index-page.vue'
import { routerDev } from './_dev'
const routes = [
  { path: '/', component: MainPage },
  // blob
  { path: '/blob', component: () => import('../views/blob/index-page.vue') },
  // 开发测试
  ...routerDev
]

// 生成路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
