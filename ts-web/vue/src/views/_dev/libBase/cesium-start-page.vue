//cesiumMap.vue
<template>
  <div class="main">
    <div class="canvasPP">
      <div id="cesiumContainer" class="canvasP"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue
import { onBeforeUnmount, onMounted } from 'vue'

// 简易3d地图 cesium
import * as Cesium from 'cesium'

onMounted(() => {
  initMap()
  // 全局
  window.$ObjLargeTemp.set('viewer', viewer)
})

onBeforeUnmount(() => {
  viewer && viewer.destroy()
  window.$ObjLargeTemp.delete('viewer')
})

let viewer: Cesium.Viewer
const initMap = () => {
  viewer = new Cesium.Viewer('cesiumContainer', {
    baseLayerPicker: false, // 如果设置为false，将不会创建右上角图层按钮。
    geocoder: false, // 如果设置为false，将不会创建右上角查询(放大镜)按钮。
    navigationHelpButton: false, // 如果设置为false，则不会创建右上角帮助(问号)按钮。
    homeButton: false, // 如果设置为false，将不会创建右上角主页(房子)按钮。
    sceneModePicker: false, // 如果设置为false，将不会创建右上角投影方式控件(显示二三维切换按钮)。
    animation: false, // 如果设置为false，将不会创建左下角动画小部件。
    timeline: false, // 如果设置为false，则不会创建正下方时间轴小部件。
    fullscreenButton: false, // 如果设置为false，将不会创建右下角全屏按钮。
    scene3DOnly: false, // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存。
    shouldAnimate: true, // 默认true ，否则为 false 。此选项优先于设置 Viewer＃clockViewModel 。
    // ps. Viewer＃clockViewModel 是用于控制当前时间的时钟视图模型。我们这里用不到时钟，就把shouldAnimate设为false
    infoBox: false, // 是否显示点击要素之后显示的信息
    sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  this.Cesium.SceneMode

    // 地图影像这里选择的是天地图
    // imageryProvider: false,
    // imageryProvider: new Cesium.UrlTemplateImageryProvider({
    //   url: `https://t4.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=${TDTTK}`,
    //   maximumLevel: 18
    // }),
    selectionIndicator: false, // 关闭绿色选择框，
    // requestRenderMode: false, // 启用请求渲染模式，不需要渲染，节约资源吧

    // baseLayerPicker: false,
    requestRenderMode: true
  })
  //去除cesium按钮
  const creditContainer = viewer.cesiumWidget.creditContainer as HTMLElement
  creditContainer.style.display = 'none'
  viewer.scene.globe.depthTestAgainstTerrain = true

  //osm

  // 移除默认的影像图层
  const imageryLayers = viewer.imageryLayers
  imageryLayers.remove(imageryLayers.get(0))

  // 初始化OSM影像图层数据源
  viewer.imageryLayers.addImageryProvider(
    new Cesium.UrlTemplateImageryProvider({
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      // url: 'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      //  url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
      subdomains: ['a', 'b', 'c', 'd']
    })
  )
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  /* overflow: hidden;
  background-color: blanchedalmond; */
}
.canvasPP {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.canvasP {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
</style>
