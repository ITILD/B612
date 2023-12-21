<template>
  <button @click="clickChangeHead()">更改head</button>
  <div>{{ sysStyle.headShow }}</div>
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
