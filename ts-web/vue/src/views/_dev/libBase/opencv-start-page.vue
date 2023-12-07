<template>
  <div class="this-page">
    <div class="inputoutput">
      <img id="imageSrc" alt="No Image" class="w-80 h-80"/>
      <div class="caption">imageSrc <input type="file" id="fileInput" name="file" /></div>
    </div>
    <div class="inputoutput">
      <canvas id="canvasOutput" class="w-80 h-80" ></canvas>
      <div class="caption">canvasOutput</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { loadJsDll } from '@/components/common/miniEx/utils/jsDll'
import { add } from 'ol/coordinate'
// vue
onMounted(() => {
  init()
  addImg()
})
onBeforeUnmount(() => {})
const $ = (id: string) => document.getElementById(id)
const init = async () => {



  // 同步加载cv
  const OPENCV_URL = 'https://docs.opencv.org/3.4.5/opencv.js'
  // const OPENCV_URL = './opencv-start-page/opencv.js'
  await loadJsDll(OPENCV_URL)
  $('imageSrc')!.innerHTML = 'ready.';
 
}
let  addImg =()=>{
  let imgElement = $('imageSrc') as any;
  let inputElement = $('fileInput');
  if(!inputElement)return

  inputElement.addEventListener('change', (e) => {
    if(!imgElement)return
    if(!e.target)return
    imgElement.src = URL.createObjectURL(e.target.files[0]);
  }, false);
  imgElement.onload = function () {
    let mat = cv.imread(imgElement);
    
    let dataMat = mat.data
    for (let index = 0; index < dataMat.length; index++) {
      const element = dataMat[index];
      // console.log(element)
      if(index%128===0&&index>0){
        dataMat[index]=255
      }
      
    }
    cv.imshow('canvasOutput', mat);
    
    
    mat.delete();
  };
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
