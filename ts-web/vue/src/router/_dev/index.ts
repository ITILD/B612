const routerDev = [
  // 已添加
  { path: '/_dev', component: () => import('@/views/_dev/index-page.vue') },
  // gl
  { path: '/_dev/gl/babylon-start', component: () => import('@/views/_dev/gl/babylon-start-page.vue') },
  { path: '/_dev/gl/map2d-start', component: () => import('@/views/_dev/gl/map2d-start-page.vue') },
  { path: '/_dev/gl/map3d-start', component: () => import('@/views/_dev/gl/map3d-start-page.vue') },
  { path: '/_dev/gl/webgl-start', component: () => import('@/views/_dev/gl/webgl-start-page.vue') },
  { path: '/_dev/gl/WebGLAnimate', component: () => import('@/views/_dev/gl/WebGLAnimate.vue') },
  // map
  { path: '/_dev/gis/map2d-ol-ext-start', component: () => import('@/views/_dev/gis/map2d-ol-ext-page.vue') },
  { path: '/_dev/gis/map3d-testgoogle', component: () => import('@/views/_dev/gis/map3d-google-3dtiles-page.vue') },
  // map
  { path: '/_dev/beauty/web-design-base', component: () => import('@/views/_dev/beauty/web-design-base-page.vue') },

  // 带添加页面<router-link :to="L3.url" class="text-lg bg-blue-100">{{ L3.name }}</router-link>
  // todo
  { path: '/_dev/gis/babylon-map', component: () => import('@/views/_dev/gis/babylon-map-page.vue') },
]
export { routerDev }
