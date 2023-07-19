<template>
  <div class="">
    <!-- 基础页面纸张 -->
    <!-- 混合仿纸质 1-->
    <ul class="grid grid-cols-1 md:grid-cols-8 ">
      <li>
        <div class="w-full aspect-[9/5] md:aspect-[9/16]"><div class="w-full h-full layer11"></div></div>
        <p>
          <span>.layer1</span>
        </p>
      </li>
      <li>
        <div class="w-full  aspect-[9/5] md:aspect-[9/16]"><div class="w-full h-full layer12"></div></div>
        <p>
          <span>.layer1（无混合模式）</span>
        </p>
      </li>
      <li>
        <div class="w-full relative  aspect-[9/5] md:aspect-[9/16]">
          <div class="w-full h-full absolute layer11"></div>
          <div class="w-full h-full layer12 mix-blend-overlay"></div>
        </div>
        <p>
          <span>.layer1（混合 仿纸质）</span>
        </p>
      </li>
    </ul>
    <!--  -->
    <!--混合仿纸质 2-->
    <ul class="grid grid-cols-8">
      <li>
        <div class="w-full aspect-[9/16]"><div class="w-full h-full layer21"></div></div>
        <p>
          <span>.layer2</span>
        </p>
      </li>
      <li>
        <div class="w-full aspect-[9/16]"><div class="w-full h-full bg-no-repeat bg-center bg-contain  layer22"></div></div>
        <p>
          <span>.layer2（无混合模式）</span>
        </p>
      </li>
      <li>
        <div class="w-full relative aspect-[9/16]">
          <div class="w-full h-full absolute layer21"></div>
          <div class="w-full h-full layer22 mix-blend-overlay bg-no-repeat bg-center bg-contain "></div>
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

  .layer11 {
    background: hsl(40, 35%, 76%);
  }
  .layer12 {
    box-shadow: inset 0 0 40px 10px hsla(0, 0%, 0%, 0.8);
    background: url('@/assets/lib/_dev/beauty/noise.webp'),
      linear-gradient(to bottom right, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 1));
  }
// 画混合

.layer21 {
  background: hsl(40, 35%, 76%);
}

.layer22 {
  box-shadow: inset 0 0 40px 10px hsla(0, 0%, 0%, 0.8);
  background-image: url('@/assets/lib/_dev/beauty/waves.webp'),
    linear-gradient(to bottom right, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 1));
}
</style>
