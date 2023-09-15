//cesiumMap.vue
<template>
  <div class="main">
  </div>
</template>
<script setup lang="ts">
// vue
import { onBeforeUnmount, onMounted } from 'vue'
// 
import JSTSWKTReader from 'jsts/org/locationtech/jts/io/WKTReader'

onMounted(() => {
  main()
  // 全局
  // window.$ObjLargeTemp.set('viewer', viewer)
})

onBeforeUnmount(() => {
  // viewer && viewer.destroy()
  // window.$ObjLargeTemp.delete('viewer')
})

const main = () => {


const wkt = `POINT (0 0)`
const bufferCenter = new JSTSWKTReader().read(wkt)
console.log(bufferCenter)


}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: blanchedalmond;
}
</style>
