const routerDev = [
    { path: '/_dev', component: () => import('@/views/_dev/index-page.vue') },
    { path: '/_dev/map2d', component: () => import('@/views/_dev/map/map2d-page.vue') },
    { path: '/_dev/map3d', component: () => import('@/views/_dev/map/map3d-page.vue') },
    { path: '/_dev/map-home', component: () => import('@/views/_dev/map/map-home-page.vue') },
    { path: '/_dev/gl/WebGLAnimate', component: () => import('@/views/_dev/gl/WebGLAnimate.vue') },
]

export{routerDev}