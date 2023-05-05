<script>
/**
 * 动态显示 秒卸载动画
 */
</script>

<template>
  <transition
    enter-active-class="duration-500 ease-in"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
  >
    <!-- leave-active-class="duration-0 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0" -->

    <slot> </slot>
  </transition>
</template>
