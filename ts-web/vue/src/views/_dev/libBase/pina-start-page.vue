<template>
  <!-- 场景-->
  <div class="main">
    <button @click="clickCout()">test button</button>
    <br />
    <div>单向pina单向本地</div>
    <input :value="store.count" type="text" />
    <div>{{ store.count }}</div>
    <div>单向pina单向本地</div>
    <input :value="count" type="text" />
    <div>{{ count }}</div>
    <div>双向本地</div>
    <input v-model="coutLocal" type="text" />
    <div>{{ coutLocal }}</div>
    <br />
    <div>单向pina双向本地</div>
    <input v-model="store.count" type="text" />
    <div>{{ store.count }}</div>
    <div>双向pina双向本地</div>
    <input v-model="count" type="text" />
    <div>{{ count }}</div>
    <pinaOut></pinaOut>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useCounterStore } from '@/stores/pina-start'
import { storeToRefs } from 'pinia'
import pinaOut from './pina-start-page/pinaOut.vue'
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
<!-- @/stores/pina-start -->