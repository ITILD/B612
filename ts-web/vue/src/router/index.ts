import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../views/aa-page-main.vue'
import AutoViewAndLink from './AutoViewAndLink'

const modules = AutoViewAndLink.routes()

const routes = [
  { path: '/', name: 'home', component: IndexPage },
  { path: '/info', name: 'home1', component: () => import('../views/info/list-i-p.vue') },
  {
    path: '/user',
    name: 'user',
    component: modules['../views/user/a0-layerout.vue'],
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('../views/user/a0-page-login.vue')
      },
      {
        path: 'SignUp',
        name: 'SignUp',
        component: () => import('../views/user/SignUpView.vue')
      }
    ]
  }
]

// 生成路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
// router.addRoute('user',{
//   // path: '/user/signup',
//   path: 'signup',
//   name: 'signup',
//   component: () => import('../views/user/SignUpView.vue')
// // })
// const navigationList = [
//   {
//     id: 1,
//     icon: 'icon-jurassic_user',
//     name: 'signup',
//     path: 'signup',
//     component: 'user/SignUpView'
//   }
// ]
// navigationList.forEach((navigation) => {
//   router.addRoute('user', {
//     path: `${navigation.path}`,
//     // meta: { name: navigation.name, isAsync: true, icon: navigation.icon },
//     name: navigation.name,
//     component: () => import(`@/views/${navigation.component}.vue`)
//   })
// })

// console.log(router.getRoutes(), '查看现有路由1')
// //asyncRoutestMark 拼接过路由
// router.beforeEach((to, from, next) => {
//   // if (!store.state.asyncRoutestMark) {
//   // navigationList 是上面模拟接口返回的数据
//   // 这里将新的路由都作为 home 的子路由(实际开发根据情况)
//   // meta 是存储一些信息，可以用于权限校验或其他

//   console.log(router.getRoutes(), '查看现有路由2')
//   // store.commit('setAsyncRoutestMark', true) // 添加路由后更改标识为true
//   // next({ ...to, replace: true }) //路由进行重定向放行
//   // } else {
//   //   next()
//   // }
// })

export default router
