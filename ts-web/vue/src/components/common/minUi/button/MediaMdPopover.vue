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

// 修改外部状态，点击内部自动关闭控件
const emit = defineEmits(['update:modelValue'])
emit('update:modelValue', window.innerWidth >= 700)
</script>
<template>
  <div ref="dropdownRef">
    <slot> </slot>
  </div>
</template>
