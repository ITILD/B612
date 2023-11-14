<template>
  <div class="this-page">
    <div class="inputoutput">
      <img id="imageSrc" alt="No Image" />
      <div class="caption">imageSrc <input type="file" id="fileInput" name="file" /></div>
    </div>
    <div class="inputoutput">
      <canvas id="canvasOutput" ></canvas>
      <div class="caption">canvasOutput</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { loadJsDll } from '@/components/common/miniEx/utils/jsDll'
// vue
onMounted(() => {
  init()
})
onBeforeUnmount(() => {})
const $ = (id: string) => document.getElementById(id)
const init = async () => {
  // 同步加载cv
  const OPENCV_URL = 'https://docs.opencv.org/3.4.5/opencv.js'
  await loadJsDll(OPENCV_URL)
  let imgElement = $('imageSrc')
  let mat = cv.imread(imgElement)

  let dataMat = mat.data
  for (let index = 0; index < dataMat.length; index++) {
    const element = dataMat[index]
    // console.log(element)
    if (index % 128 === 0 && index > 0) {
      dataMat[index] = 255
    }
  }
  cv.imshow('canvasOutput', mat)

  mat.delete()
}
</script>

<style scoped>
.this-page {
  max-height: 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.glDom {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
