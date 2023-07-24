<template>
  <div class="">
    <!-- 基础页面纸张 -->
    <!-- 混合仿纸质 1-->
    <ul class="grid grid-cols-1 md:grid-cols-8">
      <li>
        <div class="w-full aspect-[9/5] md:aspect-[9/16]">
          <div class="h-30" >
            <div ref="scrollRef" style="overflow: scroll" class="father">
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
              <div ref="railRef" class="rail"></div>
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
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
const scrollRef = ref<null | HTMLElement>(null)
const railRef = ref<null | HTMLElement>(null)
// vue
onMounted(() => {


  basScroll()
})
onBeforeUnmount(() => {})


const basScroll = () => {
  // eslint-disable-next-line no-debugger
  debugger
  let fatherScrollHeight, fatherClientHeight: number // 父高度,滚动高度
  const warp = scrollRef.value as Element
  fatherClientHeight = warp.clientHeight // 获取父高度
  fatherScrollHeight = warp.scrollHeight // 获取父可滚动高度
  const present = fatherClientHeight / fatherScrollHeight // 计算滚动条应该占多高
  const scrollWarp = railRef.value as HTMLElement
  scrollWarp.style.height = present * 100 + '%' // 用百分比计算rail的高度
  warp.addEventListener('scroll', (e) => {
    console.log('e', e)
    const target = e.target as HTMLElement
    // 添加滚动事件
    console.log(target.scrollTop)
    scrollWarp.style.transform =
      'translateY(' + (target.scrollTop * 100) / fatherClientHeight + '%)'
  },true)
}

</script>

<style scoped lang="scss">
</style>
