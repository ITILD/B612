<template>
  <div id="test1" ref="dropdownRef" v-click-outside:[dropdownRef]="changeButton">
    <slot> </slot>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
/**
 * 改变外部状态，点击外部自动关闭
 */

const props = defineProps({
  modelValue: { type: Boolean, required: true }
})

let canClickOut: Boolean = true
const emit = defineEmits(['update:modelValue'])
// 外部点击监听器  外部点击关闭
const dropdownRef = ref<null | HTMLElement>(null)
// 修改外部状态，点击内部自动关闭控件 （通过v-click-outside绑定到外部） （使用
const changeButton = () => {
  if (canClickOut && props.modelValue) {
    emit('update:modelValue', false)
  }
}

watch(
  () => props.modelValue,
  () => {
    canClickOut = false
    setTimeout(() => {
      canClickOut = true
    }, 50)
  }
)
</script>
