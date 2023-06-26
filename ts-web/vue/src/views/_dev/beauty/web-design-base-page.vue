<template>
  <div class="">
    <!-- 基础页面纸张 -->
    <!-- 混合仿纸质 1-->
    <ul class="box1">
      <li>
        <div class="layerBox"><div class="layer1"></div></div>
        <p>
          <span>.layer1</span>
        </p>
      </li>
      <li>
        <div class="layerBox"><div class="layer2"></div></div>
        <p>
          <span>.layer2（无混合模式）</span>
        </p>
      </li>
      <li>
        <div class="layerBox">
          <div class="layer1"></div>
          <div class="layer2 blendLayer2"></div>
        </div>
        <p>
          <span>.layer2（混合 仿纸质）</span>
        </p>
      </li>
    </ul>
    <!--  -->
    <!--混合仿纸质 2-->
    <ul class="box2">
      <li>
        <div class="layerBox"><div class="layer1"></div></div>
        <p>
          <span>.layer1</span>
        </p>
      </li>
      <li>
        <div class="layerBox"><div class="layer2"></div></div>
        <p>
          <span>.layer2（无混合模式）</span>
        </p>
      </li>
      <li>
        <div class="layerBox">
          <div class="layer1"></div>
          <div class="layer2 blendLayer2"></div>
        </div>
        <p>
          <span>.layer2（混合 仿纸质）</span>
        </p>
      </li>
    </ul>
    <!--  -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
// vue
onMounted(() => {})
onBeforeUnmount(() => {})
</script>

<style scoped lang="scss">

.box1 {
  display: grid;
  grid-gap: var(--_1by9knb0);
  grid-template-columns: repeat(12, 1fr);

  .layerBox {
    width: 100%;
    aspect-ratio: 9/16;
    position: relative;
    overflow: hidden;
    border: var(--_1xn0dsy1x);
  }
  .layer1 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: hsl(40, 35%, 76%);
  }

  .layer2 {
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 40px 10px hsla(0, 0%, 0%, 0.8);
    background: url('@/assets/lib/_dev/beauty/noise.webp'),
      linear-gradient(to bottom right, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 1));
  }
  // 混合方式
  .blendLayer2 {
    mix-blend-mode: overlay;
  }
}
// 画混合


.box2 {
  display: grid;
  grid-gap: var(--_1by9knb0);
  grid-template-columns: repeat(12, 1fr);

  .layerBox {
    width: 100%;
    aspect-ratio: 9/16;
    position: relative;
    overflow: hidden;
    border: var(--_1xn0dsy1x);
  }
  .layer1 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: hsl(40, 35%, 76%);
  }

  .layer2 {
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 40px 10px hsla(0, 0%, 0%, 0.8);
    background: url('@/assets/lib/_dev/beauty/waves.webp'),
      linear-gradient(to bottom right, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 1));
  }
  // 混合方式
  .blendLayer2 {
    mix-blend-mode: overlay;
  }
}









// .box2 {
  
//   .layer1 {
//     background: hsl(40, 35%, 76%);
//   }

//   .layer2 {
//     box-shadow: inset 0 0 40px 10px hsla(0, 0%, 0%, 0.8);
//     background: url('@/assets/lib/_dev/beauty/waves.webp'),
//       linear-gradient(to bottom right, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 1));
//     mix-blend-mode: overlay;
//   }
// }

</style>
