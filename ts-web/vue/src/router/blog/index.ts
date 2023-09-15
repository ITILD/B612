const routerBlog = [
  // 已添加
  { path: '/blog', component: () => import('@/views/blog/index-page.vue') },
  // gl
  { path: '/blog/gl/babylon-start', component: () => import('@/views/blog/instruction-page.vue') },

]
export { routerBlog }
