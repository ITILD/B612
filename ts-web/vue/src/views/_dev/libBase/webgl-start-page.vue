<template>
  <ul class="grid grid-cols-1 md:grid-cols-8">
    <li>
      <div class="w-full aspect-[9/5] md:aspect-[9/16]">
        <canvas id="webgldom" class="w-full h-full"></canvas>
      </div>
      <p>
        <span>.base</span>
      </p>
    </li>
  </ul>
</template>
<script setup lang="ts">
// vue
import { onMounted } from 'vue'
import {GLStart} from './webgl-start-lib/GLStart'
onMounted(() => {
  initWebgl()
})
const initWebgl = () => {
  //POINT-> TRIANGLES
  // 顶点着色器代码(决定顶在哪里，大小)
  let VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'uniform vec4 v_move;\n' +
    'varying vec4 v_color;\n' +
    'void main() {\n' +
    'gl_Position = a_Position+v_move;\n' + // 设置顶点的位置
    'v_color = gl_Position  + 0.5;\n' + // 设置color
    '}\n'

  // 片元着色器代码（给像素上色）let FSHADER_SOURCE

  let FSHADER_SOURCE =
    'precision mediump float;\n' +
    'varying vec4 v_color;\n' +
    'void main() {\n' +
    'gl_FragColor = v_color;\n' + // 设置顶点的颜色
    '}\n'

  // 1.获取webgl
  let canvas = document.getElementById('webgldom') as HTMLCanvasElement
  let gl = canvas.getContext('webgl') as WebGLRenderingContext //WebGLRenderingContext对象 绘图上下文

  // 2.清空屏幕
  gl.clearColor(0.5, 0.5, 0.5, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)

  // 3.初始化着色器程序
  let shaderProgram = GLStart.initShaderProgram(gl, VSHADER_SOURCE, FSHADER_SOURCE)
  // gl.program = program
  gl.useProgram(shaderProgram)
  let n = initVertexBuffers(gl, shaderProgram, [0.0, 0.5, -0.5, -0.5, 0.5, -0.5])

  // 画n个点
  gl.drawArrays(gl.TRIANGLES, 0, n)

  function initVertexBuffers(
    gl: WebGLRenderingContext,
    shaderProgram: WebGLProgram,
    jsArray: Iterable<number>
  ) {
    let vertices = new Float32Array(jsArray)

    let vertexBuffer = gl.createBuffer() // 创建一个缓存对象，用于存放顶点数据
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer) // 绑定缓存对象
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW) // 把数据写到缓冲对象中
    let a_Position = gl.getAttribLocation(shaderProgram, 'a_Position') // 获取顶点着色器代码中的顶点变量
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0) // 设置变量获取数据规则
    gl.enableVertexAttribArray(a_Position) // 允许变量从 ARRAY_BUFFER目标上绑定的缓冲区对象获取数据
    // 设置全局变量v_move
    let v_move = gl.getUniformLocation(shaderProgram, 'v_move')
    gl.uniform4f(v_move, 0.5, 0.0, 0.0, 0.0) // r g b a

    return vertices.length / 2 //返回顶点数量
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: blanchedalmond;
}
.cesiumContainer {
  width: 100%;
  height: 100%;
  z-index: 9999;
}
</style>