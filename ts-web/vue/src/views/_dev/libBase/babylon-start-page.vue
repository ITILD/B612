<template>
  <!-- 场景-->
  <div class="main">
    <div class="canvasPP">
      <div id="canvasP" class="canvasP">
        <canvas id="glDom" class="glDom"></canvas>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
// import {Engine,Scene,ArcRotateCamera,Vector3,HemisphericLight,PointLight,MeshBuilder} from 'babylonjs';
import * as BABYLON from '@babylonjs/core/Legacy/legacy'
let scene: BABYLON.Scene
let engine: BABYLON.Engine
let camera: BABYLON.FreeCamera
// vue
onMounted(() => {
  initMap()
  window.$ObjLargeTemp.set('scene', scene)
})
onBeforeUnmount(() => {
  scene && scene.dispose()
  window.$ObjLargeTemp.delete('scene')
})
const initMap = () => {
  // Get the canvas DOM element
  const canvas = document.getElementById('glDom') as HTMLCanvasElement // 得到canvas对象的引用
  // Load the 3D engine // 初始化 BABYLON 3D engine
  engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true
  })
  /******* CreateScene function that creates and return the scene ******/

  // Create a basic BJS Scene object 创建一个场景scene
  scene = new BABYLON.Scene(engine)
  // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}  添加一个相机，并绑定鼠标事件
  camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene)
  // Target the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero())
  // Attach the camera to the canvas
  camera.attachControl(canvas, false)
  // Create a basic light, aiming 0, 1, 0 - meaning, to the sky 添加一组灯光到场景
  const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)
  const light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 1, -1), scene)
  //添加一个球体到场景中
  // Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
  const sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE)
  // Move the sphere upward 1/2 of its height
  sphere.position.y = 1
  // Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
  const ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false)
  // Return the created scene
  // run the render loop 最后一步调用engine的runRenderLoop方案，执行scene.render()，让我们的3d场景渲染起来
  engine.runRenderLoop(function () {
    scene.render()
  })
  // the canvas/window resize event handler 监听浏览器改变大小的事件，通过调用engine.resize()来自适应窗口大小
  // window.addEventListener('resize', function () {
  //   engine.resize()
  // })

  // 监听元素变化
  let tempSetTime: number
  const resizeObserver = new ResizeObserver(() =>{
    tempSetTime && clearTimeout(tempSetTime);
    tempSetTime = setTimeout(() => {
      engine.resize()
    }, 15);
  })
  resizeObserver.observe(document.getElementById('canvasP')as HTMLElement)
  //// resizeObserver.unobserve(canvasP)// 取消监听元素
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.canvasPP {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.canvasP {
  position: absolute;
  width: 100%;
  height: 100%;
}
.glDom {
  z-index: 10;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
</style>
