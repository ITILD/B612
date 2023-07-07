<template>
  <div class="this-page">
    <!-- 地图-->
    <div id="mapThis" class="mapThis"></div>
    <!-- 配置 -->
    <div class="options">
      <h2>Options:</h2>
      <ul>
        <li>
          <label
            ><input type="checkbox" @change="setInitial()" /> 开启：选择修改/复制/剪切/粘贴</label
          >
        </li>
      </ul>
      <!-- <button @click="addMeridian(0)">开启：选择修改/复制/剪切/粘贴</button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue' // vue相关方法

// 简易2d地图
import 'ol/ol.css' // 地图样式
import { Feature, Map as olMap, View } from 'ol' // 地图实例方法、视图方法
import { Tile } from 'ol/layer' // 瓦片渲染方法
// OSM瓦片【OSM不能在实际开发中使用，因为OSM里中国地图的边界有点问题！！！！】
import { OSM } from 'ol/source'
// 绘制
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'

import 'ol-ext/dist/ol-ext.min.css'
import Transform from 'ol-ext/interaction/Transform'
import CopyPaste from 'ol-ext/interaction/CopyPaste'
// import SearchBAN from 'ol-ext/control/SearchBAN'
// import Bar from 'ol-ext/control/Bar'
// import Button from 'ol-ext/control/Button'
import LineString from 'ol/geom/LineString'
import type { Geometry } from 'ol/geom'
import { shiftKeyOnly } from 'ol/events/condition'
let _map2d: olMap
let vector: VectorLayer<VectorSource>
let transform: Transform | any
let copy: CopyPaste | any
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
  vector = new VectorLayer({ source: source })

  _map2d.addLayer(vector)
  const featureLinestring = new Feature()
  const linstring = new LineString([
    [13522485, 4700398],
    [13523485, 4700398],
    [13523485, 4701398]
  ])
  featureLinestring.setGeometry(linstring)
  source.addFeature(featureLinestring)
  // vector.getSource().addFeature(new ol.Feature(new ol.geom.Polygon([[[406033, 5664901], [689767, 5718712], [699551, 6149206], [425601, 6183449],[406033, 5664901]]])));

  // _map2d.addControl(new SearchBAN())

  // _map2d.addControl(
  //   new Bar({
  //     controls: [
  //       new Button({
  //         html: '复制/Ctrl+C',
  //         handleClick: function () {
  //           copy.copy({ silent: false })
  //         }
  //       }),
  //       new Button({
  //         html: '剪切/Ctrl+X',
  //         handleClick: function () {
  //           copy.copy({ cut: true, silent: false })
  //         }
  //       }),
  //       new Button({
  //         html: '粘贴/Ctrl+V',
  //         handleClick: function () {
  //           copy.paste({ silent: false })
  //         }
  //       })
  //     ]
  //   })
  // )
}
const setInitial = () => {
  if (transform) {
    _map2d.removeInteraction(transform)
    transform && transform.dispose()

    _map2d.removeInteraction(copy)
    copy && copy.dispose()
    transform = copy = null
  } else {
    transform = new Transform({
      addCondition: shiftKeyOnly
    })
    _map2d.addInteraction(transform)

    copy = new CopyPaste({
      destination: vector.getSource() as VectorSource<Geometry>,
      features: transform.getFeatures()
    })
    _map2d.addInteraction(copy)

    // Remove selection if cut
    copy.on('cut', () => {
      transform.select()
    })
    copy.on('paste', function (e: { features: any[] }) {
      transform.select()
      e.features.forEach(function (f: Feature<Geometry> | undefined) {
        transform.select(f, true)
      })
    })
  }
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
