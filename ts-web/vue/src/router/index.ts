import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/index-page.vue'
// import AutoViewAndLink from './AutoViewAndLink'
// const modules = AutoViewAndLink.routes()
const routes = [
  { path: '/', component: MainPage },
  // 开发测试
  { path: '/_dev', component: () => import('../views/_dev/index-page.vue') },
  { path: '/_dev/map2d', component: () => import('../views/_dev/map/map2d-page.vue') },
  { path: '/_dev/map3d', component: () => import('../views/_dev/map/map3d-page.vue') },
  { path: '/_dev/map-home', component: () => import('../views/_dev/map/map-home-page.vue') },

  // { path: '/info', name: 'home1', component: () => import('../views/info/list-i-p.vue') },
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: modules['../views/user/a0-layerout.vue'],
  //   children: [
  //     {
  //       path: '',
  //       name: 'Login',
  //       component: () => import('../views/user/a0-page-login.vue')
  //     },
  //     {
  //       path: 'SignUp',
  //       name: 'SignUp',
  //       component: () => import('../views/user/SignUpView.vue')
  //     }
  //   ]
  // }
]

// 生成路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
