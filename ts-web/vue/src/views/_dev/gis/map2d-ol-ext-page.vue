<template>
  <div class="this-page">
    <!-- 地图-->
    <div id="mapThis" class="mapThis"></div>
    <!-- 配置 -->
    <div class="options">
      <h2>Options:</h2>
      <ul>
        <li>
          <label><input type="checkbox" @change="setInitial()" /> use initial guides</label>
        </li>
      </ul>
      <button @click="addMeridian(0)">Add a Greenwich origin guideline</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue' // vue相关方法

// 简易2d地图
import 'ol/ol.css' // 地图样式
import { Map as olMap, View } from 'ol' // 地图实例方法、视图方法
import { Tile } from 'ol/layer' // 瓦片渲染方法
// OSM瓦片【OSM不能在实际开发中使用，因为OSM里中国地图的边界有点问题！！！！】
import { OSM } from 'ol/source'
// 绘制
import { Draw, Modify } from 'ol/interaction'
import { fromLonLat, transform } from 'ol/proj'

import VectorImage from 'ol/layer/VectorImage'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'

import 'ol-ext/dist/ol-ext.min.css'
import ModifyFeature from 'ol-ext/interaction/ModifyFeature' // 修改特定点的功能，可以在图形上修改或删
import SnapGuides from 'ol-ext/interaction/SnapGuides' // 修改特定点的功能，可以在图形上修改或删
let _map2d: olMap
let snapi: any
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
const initMap = () => {
  const degreePosition = [121.5, 38.85, 13]
  // 地图实例
  _map2d = new olMap({
    target: 'mapThis', // 对应页面里 id 为 map 的元素
    layers: [
      // 图层
      new Tile({
        // 使用瓦片渲染方法
        source: new OSM() // 图层数据源
      })
    ],
    view: new View({
      // 地图视图
      // projection: 'EPSG:4326', // 坐标系，有EPSG:4326和EPSG:3857
      // center: degreePosition.slice(0, 2), // 大连坐标
      projection: 'EPSG:3857', // 坐标系，有EPSG:4326和EPSG:3857
      center: fromLonLat(degreePosition.slice(0, 2)), // 大连坐标
      // minZoom: 10, // 地图缩放最小级别
      zoom: degreePosition[2] // 地图缩放级别（打开页面时默认级别）
    })
  })

  mapThen()
}
const mapThen = () => {
  // New vector layer
  const source = new VectorSource()
  let vector = new VectorLayer({ source: source })
  _map2d.addLayer(vector)

  let draw = new Draw({
    source: source,
    //type: "LineString"
    type: 'Polygon'
  })
  _map2d.addInteraction(draw)

  let modi = new ModifyFeature({ source: source }) as unknown as Modify
  _map2d.addInteraction(modi)

  snapi = new SnapGuides({
    vectorClass: VectorImage as any
  })
  snapi.setDrawInteraction(draw)
  snapi.setModifyInteraction(modi)
  _map2d.addInteraction(snapi)
}

// New guide on meridian (default Greenwich)
const addMeridian = (x: any) => {
  let p1 = transform([x || 0, 1], 'EPSG:3857', _map2d.getView().getProjection())
  let p2 = transform([x || 0, -1], 'EPSG:3857', _map2d.getView().getProjection())
  snapi.addGuide([p1, p2])
}
// Switch initial condition
const setInitial = () => {
  snapi.enableInitialGuides_ = !snapi.enableInitialGuides_
}
</script>

<style scoped>
.this-page {
  width: 100%;
  height: 100%;
}
.mapThis {
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
}
.options {
  position: absolute;
  top: 3.5rem;
  left: 3rem;
  margin: 1rem;
  background-color: rgb(255 187 187 / 80%);
}
</style>
