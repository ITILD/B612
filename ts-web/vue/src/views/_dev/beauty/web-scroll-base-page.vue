<template>
  <div class="">
    <!-- 基础页面纸张 -->
    <!-- 混合仿纸质 1-->
    <ul class="grid grid-cols-1 md:grid-cols-8">
      <li>
        <div class="w-full aspect-[9/5] md:aspect-[9/16]">
          <div class="container">
            <div class="father">
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>111</div>
              <div>1221</div>
              <div>1221</div>
              <div>1221</div>
            </div>
            <div class="vertical-scroll">
              <div class="rail"></div>
            </div>
          </div>
        </div>
        <p>
          <span>.layer1</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

// vue
onMounted(() => {
  basScroll()
})
onBeforeUnmount(() => {})

const basScroll = () => {
  let fatherScrollHeight, fatherClientHeight: number // 父高度,滚动高度
  const warp = document.querySelector('.father') as Element
  fatherClientHeight = warp.clientHeight // 获取父高度
  fatherScrollHeight = warp.scrollHeight // 获取父可滚动高度
  const present = fatherClientHeight / fatherScrollHeight // 计算滚动条应该占多高
  const scrollWarp = document.querySelector('.rail') as HTMLElement
  scrollWarp.style.height = present * 100 + '%' // 用百分比计算rail的高度
  warp.addEventListener('scroll', function (e) {
    const target = e.target as HTMLElement
    // 添加滚动事件
    console.log(target.scrollTop)
    scrollWarp.style.transform =
      'translateY(' + (target.scrollTop * 100) / fatherClientHeight + '%)'
  })
}
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
