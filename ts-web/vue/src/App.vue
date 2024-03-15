<template>
  <SysHeader />
  <RouterView />
  <SysFooter />
  <!-- 非正常结构 弹窗类 控制类 异步加载-->
</template>

<script setup lang="ts">
// 整体的标头标尾 由全局状态动态改变
import SysHeader from './components/app/sys/SysHeader.vue'
import SysFooter from './components/app/sys/SysFooter.vue'
// 路由内容要有最小高度 默认配置
// 考虑完整页面  可以设置标头显隐
// 考虑单页100% canvas类页面   可以设置标头显隐
// 考虑无限制地图类分块类   123

console.log('VITE_ENV',import.meta.env.VITE_ENV);
console.log('VITE_SOME_KEY',import.meta.env.VITE_SOME_KEY);
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}

#app {
  /* 页面内容最少为一屏幕 */
  min-height: 100%;
  display: grid;
  /*页首页尾根据内容自适应  中间内容铺满剩余部分*/
  grid-template-rows: auto minmax(0, 1fr) auto;
}

/* 滚动条 */
/* 滚动条所在容器 */
.scroll {
  overflow: overlay;
  overflow-x: hidden;
}

/* 滚动条整体 高度写不写，都不影响，因为会根据内容的长度自动计算*/

.scroll::-webkit-scrollbar {
  /* width: 8px; */
  width: 0px;
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
</style>
