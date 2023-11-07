<template>
  <div class="this-page">
    <!-- 地图-->
    <canvas id="glDom" class="glDom"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { loadJsDll } from '@/components/common/miniEx/utils/jsDll'
// vue
onMounted(() => {
  initMap()
})
onBeforeUnmount(() => {})

let mat: any
let video: any
const initMap = async () => {
  // 同步加载cv
  const OPENCV_URL = 'https://docs.opencv.org/3.4.5/opencv.js'
  await loadJsDll(OPENCV_URL)
  // 开始所有
  streamWebcamThroughFaceLandmarker('videoDom')
}

// 视频流每帧循环 同步处理一帧
function onVideoFrame() {
  // 单帧变脸
  doSomethingByOpencv(video, keypoints)

  video.requestVideoFrameCallback(onVideoFrame)
}
// 开启摄像头视频流加入landmarker Stream webcam into landmarker loop (and also make video visible)
async function streamWebcamThroughFaceLandmarker(videoDom) {
  video = document.getElementById(videoDom)
  function onAcquiredUserMedia(stream) {
    video.srcObject = stream
    video.onloadedmetadata = () => {
      video.play()
    }
  }
  try {
    const evt = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'user',
        width: width,
        height: height
      }
    })
    onAcquiredUserMedia(evt)
    initOpevcvMats()
    video.requestVideoFrameCallback(onVideoFrame)
  } catch (e) {
    console.error(`Failed to acquire camera feed: ${e}`)
  }
}

/**
 * 初始化矩阵和video流
 */
function initOpevcvMats() {
  if (!mat) mat = new cv.Mat(video.height, video.width, cv.CV_8UC4)
  // 初始化0 dst
  if (!dst) dst = new cv.Mat(video.height, video.width, cv.CV_8UC4)
  // let dst = cv.Mat.zeros(video.height, video.width, cv.CV_8UC4);
  // 图片读入 mat
  if (!cap) cap = new cv.VideoCapture(video)
}

/**
 * 处理单帧
 * @param {*} video
 */
let doSomethingByOpencv = (video, keypoints) => {
  // 初始化数组
  cap.read(mat)
  if (keypoints) {
    cap.read(dst)
    let height = video.height
    let width = video.width
    transFace(mat, dst, height, width, keypoints)
    cv.imshow('canvasOutput', dst)
    cv.imshow('glDomBackGroundCanvas', dst)
  } else {
    cv.imshow('canvasOutput', mat)
    cv.imshow('glDomBackGroundCanvas', mat)
  }
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






