<template>
  <div class="">
    <!-- 基础页面纸张 -->
    <!-- 混合仿纸质 1-->
    <ul class="grid grid-cols-1 md:grid-cols-8">
      <li>
        <div class="w-full aspect-[9/5] md:aspect-[9/16]">
          <div class="h-30">
            <div ref="scrollRef0" class="h-40 overflow-scroll">
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
            </div>
            <div class="vertical-scroll">
              <div ref="railRef0" class="rail"></div>
            </div>
          </div>
        </div>
        <p>
          <span>.scroll0</span>
        </p>
      </li>
      <li>
        <div class="w-full aspect-[9/5] md:aspect-[9/16]">
          <div class="h-40 relative">
            <div
              ref="scrollRef1"
              class="h-full w-full absolute overflow-scroll break-normal scroll2"
            >
              <div>layer</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
            </div>
            <div class="h-full w-4 right-0 absolute">
              <div ref="railRef1" class="w-4 bg-blue-500/50"></div>
            </div>
          </div>
        </div>
        <p>
          <span>.scroll1</span>
        </p>
      </li>
      <li>
        <div class="w-full aspect-[9/5] md:aspect-[9/16]">
          <div class="h-40 relative">
            <div
              ref="scrollRef2"
              class="h-full w-full absolute overflow-scroll break-normal hover:break-all scroll2"
            >
              <!-- hover:break-all -->
              <div>layer</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div> 
              <div>123456789123456789</div>
              <div>123456789123456789</div>
              <div>123456789123456789</div>
            </div>
            <div class="h-full w-4 right-0 absolute">
              <div ref="railRef2" class="w-4 bg-blue-500/50"></div>
            </div>
          </div>
        </div>
        <p>
          <span>.scroll2</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 传入scrollRef0！！！！！！！！！！！！！！！！
import { onMounted, onBeforeUnmount, ref, watch, type Ref } from 'vue'
const scrollRef0 = ref<null | HTMLElement>(null)
const railRef0 = ref<null | HTMLElement>(null)
const scrollRef1 = ref<null | HTMLElement>(null)
const railRef1 = ref<null | HTMLElement>(null)
const scrollRef2 = ref<null | HTMLElement>(null)
const railRef2 = ref<null | HTMLElement>(null)
// vue
onMounted(() => {
  basScroll0()
  basScroll1()
  basScroll2(scrollRef2,railRef2)
})
onBeforeUnmount(() => {})

const basScroll0 = () => {
  const scrollRef = scrollRef0
  const railRef = railRef0
  let fatherScrollHeight, fatherClientHeight: number // 父高度,滚动高度
  const warp = scrollRef.value as Element
  fatherClientHeight = warp.clientHeight // 获取父高度
  fatherScrollHeight = warp.scrollHeight // 获取父可滚动高度
  const present = fatherClientHeight / fatherScrollHeight // 计算滚动条应该占多高
  const scrollWarp = railRef.value as HTMLElement
  scrollWarp.style.height = present * 100 + '%' // 用百分比计算rail的高度
  warp.addEventListener(
    'scroll',
    (e) => {
      console.log('e', e)
      const target = e.target as HTMLElement
      // 添加滚动事件
      console.log(target.scrollTop)
      scrollWarp.style.transform =
        'translateY(' + (target.scrollTop * 100) / fatherClientHeight + '%)'
    },
    true
  )
}
const basScroll1 = () => {
  const scrollRef = scrollRef1
  const railRef = railRef1
  let fatherScrollHeight, fatherClientHeight: number // 父高度,滚动高度
  const warp = scrollRef.value as Element
  fatherClientHeight = warp.clientHeight // 获取父高度
  fatherScrollHeight = warp.scrollHeight // 获取父可滚动高度
  const present = fatherClientHeight / fatherScrollHeight // 计算滚动条应该占多高
  const scrollWarp = railRef.value as HTMLElement
  scrollWarp.style.height = present * 100 + '%' // 用百分比计算rail的高度
  warp.addEventListener(
    'scroll',
    (e) => {
      const target = e.target as HTMLElement
      scrollWarp.style.transform =
        'translateY(' + (target.scrollTop * 100) / fatherClientHeight + '%)'
    },
    true
  )
}
/**
 * 
 */
const basScroll2 = (scrollRef: Ref<HTMLElement | null>,railRef: Ref<HTMLElement | null>) => {
  // const scrollRef = scrollRef2
  // const railRef = railRef2
  let fatherScrollHeight, fatherClientHeight: number // 父高度,滚动高度
  const warp = scrollRef.value as Element
  fatherClientHeight = warp.clientHeight // 获取父高度
  fatherScrollHeight = warp.scrollHeight // 获取父可滚动高度
  const present = fatherClientHeight / fatherScrollHeight // 计算滚动条应该占多高
  const scrollWarp = railRef.value as HTMLElement
  scrollWarp.style.height = present * 100 + '%' // 用百分比计算rail的高度
  
  warp.addEventListener(
    'scroll',
    (e) => {
      console.log('e', e)
      const target = e.target as HTMLElement
      // 添加滚动事件
      // console.log(target.scrollTop, scrollRef.value!.clientHeight, warp.scrollHeight)
      scrollWarp.style.transform =
        'translateY(' + (target.scrollTop * 100) / warp.clientHeight + '%)'
      scrollWarp.style.height = (warp.clientHeight / warp.scrollHeight) * 100 + '%'
    },
    true
  )
}
</script>

<style scoped lang="scss">
/* 滚动条所在容器 */
.scroll2 {
  overflow: overlay;
  overflow-x: hidden;
  // background-color: #f50000;
}

/* 滚动条整体 高度写不写，都不影响，因为会根据内容的长度自动计算*/
.scroll2::-webkit-scrollbar {
  width: 0px;
}

</style>
