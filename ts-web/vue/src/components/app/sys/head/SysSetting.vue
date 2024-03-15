<template>
  <div  class="absolute z-10 grid grid-cols-3 rounded-lg p-2 w-11/12 text-xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-700 text-gray-900 md:pb-4 dark:text-white md:w-96 md:right-48 md:text-sm">
    <button @click="clickChangeHead()">更改head</button>
    <div>{{ sysStyle.headShow }}</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { sysSettingStore } from '@/stores/sys'
const { sysStyle } = storeToRefs(sysSettingStore())

/**
 * 更改导航栏显隐
 */
const clickChangeHead = () => sysStyle.value.headShow = !sysStyle.value.headShow

</script>

<style></style>
