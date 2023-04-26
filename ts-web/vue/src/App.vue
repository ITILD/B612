<template>
  <SysHeader />
  <RouterView />
  <SysFooter />
</template>

<script setup lang="ts">
// 整体的标头标尾 由全局状态动态改变
import SysHeader from './components/app/SysHeader.vue'
import SysFooter from './components/app/SysFooter.vue'
// 路由内容要有最小高度 默认配置 
// 考虑完整页面  可以设置标头显隐
// 考虑单页100% canvas类页面   可以设置标头显隐
// 考虑无限制地图类分块类   123    
</script>

<style scoped></style>
