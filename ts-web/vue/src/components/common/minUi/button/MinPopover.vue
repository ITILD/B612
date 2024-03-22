<template>
  <div ref="dropdownRef">
    <slot> </slot>
  </div>
</template>
<script setup lang="ts">
/**
 * 外部按钮优先   内部监听只负责监听非外部按钮事件且在当前组件区域外
 * 改变外部状态，点击外部自动关闭
 * 使用方法：
 * 
 * <button @click="showFun = !showFun">  Fun <button/>
 *  <MinPopover v-model="showFun">
      <div  v-show="showFun">              
    const showFun = ref(false)
 */
import { ref, watch } from 'vue'
// 传入值
const model = defineModel({ type: Boolean, required: false })
// 组件内监听点击
const dropdownRef = ref<null | HTMLElement>(null)

//如果点击外部按钮先关闭当前
let canClickOut: Boolean = false
watch(model, () => {
  canClickOut = false
  setTimeout(() => (canClickOut = true), 20)
  model.value
    ? window.addEventListener('click', changeButton)
    : window.removeEventListener('click', changeButton)
})

// 修改外部状态，点击内部自动关闭控件
const changeButton = (e: MouseEvent) => {
  if (!dropdownRef.value!.contains(e.target as HTMLElement) && //点击内部
    canClickOut //不在外部关联按钮上
  ) model.value = false
}

</script>
