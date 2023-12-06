<template>
  <!-- 场景-->
  <div class="main">
    <button @click="clickCout()">test button</button>
    <br>
    <input :value="store.count" type="text" />
    <div>{{ store.count }}</div>
    <input :value="count" type="text" />
    <div>{{ count }}</div>
    <input :value="coutLocal" type="text" />
    <div>{{ coutLocal }}</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount,ref } from 'vue'
import { useCounterStore } from '@/stores/sys-header-footer'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const coutLocal = ref(0)
// vue
onMounted(() => {
  init()
})
onBeforeUnmount(() => {})
const init = () => {}

const clickCout = () => {
  store.count++
  coutLocal.value++
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
