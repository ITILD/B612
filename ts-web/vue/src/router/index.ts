import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/index-page.vue'
import { routerDev } from './_dev'
import { routerBlog } from './blog'
const routes = [
  { path: '/', component: MainPage },
  // blog
  ...routerBlog,
  // 开发测试
  ...routerDev
]

// 生成路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
