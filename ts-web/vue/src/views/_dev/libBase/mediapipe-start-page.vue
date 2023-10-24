<template>
  <div class="this-page">
    <video id="videoDom" width="500" height="500"></video>

    <!-- <div class="flex"> -->
      <template v-for="categorie in categories" :key="categorie.index" >
          <div class="hover:invert">{{categorie.categoryName +'          '+ categorie.score }}</div>
    </template>
    <!-- </div> -->

  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { FilesetResolver, FaceLandmarker } from '@mediapipe/tasks-vision'
// vues
onMounted(() => {
  init()
  // window.$ObjLargeTemp.set('scene', scene)
})
onBeforeUnmount(() => {
  // scene && scene.dispose()
  // window.$ObjLargeTemp.delete('scene')
})
let categories = ref([]) as any
// 窗口
const width = 500
const height = 500
let faceLandmarker: FaceLandmarker
let video: HTMLVideoElement
async function init() {
  // 1加载MediaPipe模型
  faceLandmarker = await loadMediapipeModels()
  // 2开启摄像头视频流加入landmarker
  streamWebcamThroughFaceLandmarker('videoDom')
}

/**
 * 1加载MediaPipe模型
 */
async function loadMediapipeModels() {
  const vision = await FilesetResolver.forVisionTasks(
    'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.1.0-alpha-16/wasm'
  )
  const faceLandmarker = await FaceLandmarker.createFromModelPath(
    vision,
    'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task'
  )
  await faceLandmarker.setOptions({
    baseOptions: {
      delegate: 'GPU'
    },
    runningMode: 'VIDEO',
    outputFaceBlendshapes: true,
    outputFacialTransformationMatrixes: true
  })
  console.log('Loaded MediaPipe模型.')
  return faceLandmarker
}

// 2开启摄像头视频流加入landmarker Stream webcam into landmarker loop (and also make video visible)
async function streamWebcamThroughFaceLandmarker(videoDom: string) {
  video = document.getElementById(videoDom) as HTMLVideoElement
  function onAcquiredUserMedia(stream: MediaStream) {
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
    video.requestVideoFrameCallback(onVideoFrame)
  } catch (e) {
    console.error(`Failed to acquire camera feed: ${e}`)
  }
}
/**
 * 单帧处理
 * @param time
 */
function onVideoFrame(time: any) {
  // 脸特征提取
  detectFaceLandmarks(time)
  video.requestVideoFrameCallback(onVideoFrame)
}

/**
 * 当前帧处理
 * @param {*} time
 * @returns
 */
function detectFaceLandmarks(time: any) {
  // 已加载人脸识别模型
  if (!faceLandmarker) return
  // 对提供的视频帧执行人脸特征点检测
  const landmarks = faceLandmarker.detectForVideo(video, time)
  // 脸部特征点
  const faces = landmarks.faceLandmarks
  // 位置方向
  const transformationMatrices = landmarks.facialTransformationMatrixes
  //识别表情
  const blendshapes = landmarks.faceBlendshapes
  if(blendshapes)categories.value = blendshapes[0].categories as any

  // console.log(blendshapes)
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

canvas {
  position: absolute;
  transform: scaleX(-1);
  z-index: 0;
  top: 0;
}

/* video {
  display: none;
} */
</style>
