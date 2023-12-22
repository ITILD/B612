<template>
  <SysHeader />
  <RouterView />
  <SysFooter />
</template>

<script setup lang="ts">
// 整体的标头标尾 由全局状态动态改变
import SysHeader from './components/app/sys/SysHeader.vue'
import SysFooter from './components/app/sys/SysFooter.vue'
// 路由内容要有最小高度 默认配置
// 考虑完整页面  可以设置标头显隐
// 考虑单页100% canvas类页面   可以设置标头显隐
// 考虑无限制地图类分块类   123
</script>

<style>
html,
body {
  /* position: absolute; */
  height: 100%;
  width: 100%;
  background-color: rgb(218, 218, 218);
  /* 滚动条覆盖不挤压 */
}

#app {
  min-height: 100%;
  display: grid;
  /* 中间自适应 */
  grid-template-rows: auto minmax(0, 1fr) auto;
  background-color: rgb(218, 218, 218);
}

/* 滚动条 */

/* 滚动条所在容器 */
.scroll {
  overflow: overlay;
  overflow-x: hidden;
  background-color: #f50000;
}

/* 滚动条整体 高度写不写，都不影响，因为会根据内容的长度自动计算*/

.scroll::-webkit-scrollbar {
  width: 8px;
}
/* 两个滚动条交接处 -- x轴和y轴 */
.scroll-container::-webkit-scrollbar-corner {
    background-color: transparent;
}

/* 滚动条滑块 */
.scroll::-webkit-scrollbar-thumb {
  background: #111827d6;
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

/* 内容hover */
/* .scroll:hover::-webkit-scrollbar {
  width: 8px;
}
.scroll:hover::-webkit-scrollbar-thumb {
  background: #4cdbffb0;
} */

/* 滚动条hover */
/* .scroll::-webkit-scrollbar:hover {
  width: 12px;
}
.scroll::-webkit-scrollbar-thumb:hover {
  background: #4cdbffb0;
} */

</style>
