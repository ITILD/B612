<template>
  <div id="mapThis" class="mapThis"></div>
</template>

<script setup lang="ts">
// vue
import { onBeforeUnmount, onMounted } from 'vue' // vue相关方法

// 简易2d地图
import { Map as olMap, View } from 'ol' // 地图实例方法、视图方法
import { Tile } from 'ol/layer' // 瓦片渲染方法
import { OSM } from 'ol/source' // OSM瓦片【OSM不能在实际开发中使用，因为OSM里中国地图的边界有点问题！！！！】
import 'ol/ol.css' // 地图样式

// vue
onMounted(() => {
  initMap()
  window.$ObjLargeTemp.set('_map2d', _map2d)
})
onBeforeUnmount(() => {
  _map2d && _map2d.dispose()
  window.$ObjLargeTemp.delete('_map2d')
})

// map
let _map2d: olMap
const initMap = () => {
  const degreePosition = [121.5, 38.85, 13]
  // 地图实例
  _map2d = new olMap({
    target: 'mapThis', // 对应页面里 id 为 map 的元素
    layers: [
      // 图层
      new Tile({
        // 使用瓦片渲染方法
        source: new OSM({attributions:''}) // 图层数据源
      })
    ],
    view: new View({
      // 地图视图
      projection: 'EPSG:4326', // 坐标系，有EPSG:4326和EPSG:3857
      center: degreePosition.slice(0, 2), // 大连坐标
      // minZoom: 10, // 地图缩放最小级别
      zoom: degreePosition[2] // 地图缩放级别（打开页面时默认级别）
    })
  })

}
</script>

<style scoped>
.mapThis {
  /* 调色 */
  filter: hue-rotate(80deg);
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
}
</style>
