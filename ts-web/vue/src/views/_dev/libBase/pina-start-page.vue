<template>
  <!-- 场景-->
  <div class="main">
    <button>test0</button>

  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from "@/stores/sys-header-footer";
// vue
onMounted(() => {
  initMap()
})
onBeforeUnmount(() => {
 
})
const initMap = () => {
 
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
