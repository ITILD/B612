const routerDev = [
  // gl
  // gis
  { path: '/_dev/gis/map2d-ol-ext-start', component: () => import('@/views/_dev/gis/map2d-ol-ext-page.vue') },
  { path: '/_dev/gis/map2d-ol-ext-copy', component: () => import('@/views/_dev/gis/map2d-ol-ext-copy-page.vue') },
  { path: '/_dev/gis/map3d-google-3dtiles', component: () => import('@/views/_dev/gis/map3d-google-3dtiles-page.vue') },
  { path: '/_dev/gis/babylon-earth', component: () => import('@/views/_dev/gis/babylon-earth-page.vue') },
  // map
  { path: '/_dev/beauty/web-design-base', component: () => import('@/views/_dev/beauty/web-design-base-page.vue') },
  { path: '/_dev/beauty/web-scroll-base-page', component: () => import('@/views/_dev/beauty/web-scroll-base-page.vue') },

  // 带添加页面<router-link :to="L3.url" class="text-lg bg-blue-100">{{ L3.name }}</router-link>
  // todo
  { path: '/_dev/gis/babylon-map', component: () => import('@/views/_dev/gis/babylon-map-page.vue') },
  //libBase 
  { path: '/_dev/libBase/babylon-start', component: () => import('@/views/_dev/libBase/babylon-start-page.vue') },
  { path: '/_dev/libBase/openlayer-start', component: () => import('@/views/_dev/libBase/openlayer-start-page.vue') },
  { path: '/_dev/libBase/cesium-start', component: () => import('@/views/_dev/libBase/cesium-start-page.vue') },
  { path: '/_dev/libBase/webgl-start', component: () => import('@/views/_dev/libBase/webgl-start-page.vue') },
  { path: '/_dev/libBase/WebGLAnimate', component: () => import('@/views/_dev/libBase/WebGLAnimate.vue') },
  { path: '/_dev/libBase/mediapipe-start', component: () => import('@/views/_dev/libBase/mediapipe-start-page.vue') },
  { path: '/_dev/libBase/opencv-start', component: () => import('@/views/_dev/libBase/opencv-start-page.vue') },
  { path: '/_dev/libBase/threejs-start', component: () => import('@/views/_dev/libBase/threejs-start-page.vue') },
  { path: '/_dev/libBase/tf-start', component: () => import('@/views/_dev/libBase/tf-start-page.vue') },
  { path: '/_dev/libBase/webgl-start', component: () => import('@/views/_dev/libBase/webgl-start-page.vue') },
  { path: '/_dev/libBase/jsts-start', component: () => import('@/views/_dev/libBase/jsts-start-page.vue') },
  { path: '/_dev/libBase/monaco-start', component: () => import('@/views/_dev/libBase/monaco-start-page.vue') },
  { path: '/_dev/libBase/pina-start', component: () => import('@/views/_dev/libBase/pina-start-page.vue') },
  { path: '/_dev/libBase/marked-start', component: () => import('@/views/_dev/libBase/marked-start-page.vue') },
  { path: '/_dev/libBase/video-js-start', component: () => import('@/views/_dev/libBase/video-js-start-page.vue') },
  // template
  { path: '/_dev/template/componentBase', component: () => import('@/views/_dev/template/componentBase.vue') },
  { path: '/_dev/template/componentTailwindcss', component: () => import('@/views/_dev/template/componentTailwindcss.vue') },
  { path: '/_dev/template/multiClickAndShow', component: () => import('@/views/_dev/template/multiClickAndShow.vue') },
  { path: '/_dev/template/staticShow', component: () => import('@/views/_dev/template/staticShow.vue') },
  { path: '/_dev/template/vscodeTips', component: () => import('@/views/_dev/template/vscodeTips.vue') },
  // 路由首页
  { path: '/_dev', component: () => import('@/views/_dev/index-page.vue') }
]
export { routerDev }
