<template>
    <header class="h-12 bg-gray-800 text-white">
        <img alt="main-logo" class="h-10" src="@/assets/star.svg" />
        <RouterLink class="inline" to="/">主页</RouterLink>
        <RouterLink class="inline" to="/user">用户</RouterLink>
        <button @click="show = !show"> {{ loginBtn }} </button>
        <async-login-popup v-if="show" />
    </header>
</template>
  


<!-- Use defineAsyncComponent  -->  
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
// 异步加载登录框
const show = ref(false)
const AsyncLoginPopup = defineAsyncComponent(() => import('./popup/AsyncLoginPopup.vue'))
const loginBtn = ref('login')
</script>
  
<style></style>
