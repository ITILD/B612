<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
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
const props = defineProps({ modelValue: { type: Boolean, required: false } }) // 传入值
const dropdownRef = ref<null | HTMLElement>(null) // 组件内监听点击

//如果点击外部按钮先关闭当前
let canClickOut: Boolean = false
watch(props, () => {
  // console.log('外部修改', props.modelValue)
  canClickOut = false
  setTimeout(() => (canClickOut = true), 50)
  props.modelValue
    ? window.addEventListener('click', changeButton)
    : window.removeEventListener('click', changeButton)
})

// 修改外部状态，点击内部自动关闭控件
const emit = defineEmits(['update:modelValue'])
const changeButton = (e: MouseEvent) => {
  // console.log('内部验证和修改')
  !dropdownRef.value!.contains(e.target as HTMLElement) && //点击内部
    canClickOut && //不在外部关联按钮上
    emit('update:modelValue', false) //提交外部修改
}
</script>
<template>
  <div ref="dropdownRef">
    <slot> </slot>
  </div>
</template>

