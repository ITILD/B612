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

<style>
html,
body {
  position: absolute;
  height: 100%;
  width: 100%;
  /* margin: 0;
  padding: 0; */
  background-color: rgb(218, 218, 218);
}

#app{
  min-height: 100%;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  background-color: rgb(218, 218, 218);
}
</style>
