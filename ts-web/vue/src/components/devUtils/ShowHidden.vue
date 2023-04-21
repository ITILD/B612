<template>
  <transition enter-active-class="duration-1000 ease-in" enter-from-class="transform opacity-0"
    enter-to-class="opacity-100" leave-active-class="duration-1000 ease-in" leave-from-class="opacity-100"
    leave-to-class="transform opacity-0">
    <!-- <slot v-if="props.showFun"> -->
    <slot >
    </slot>
  </transition>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// 异步加载登录框
// const showFun = ref(false)
// const props = defineProps(['props'])

// const props = defineProps({
//   showFun: { type: Boolean, required: true }
// })

// alert(props.showFun)
// console.log(props.showFun)
// console.log(props)
</script>
  