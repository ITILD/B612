<!-- 耗费性能   异步加载   滑动到或按钮显示 -->
<template>
  <div><WaitAnimate></WaitAnimate></div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const WaitAnimate = defineAsyncComponent(
  () => import('@/components/app/sampleUtils/state/WaitAnimate.vue')
)
</script>
<style scoped></style>
