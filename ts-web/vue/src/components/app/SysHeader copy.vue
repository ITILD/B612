<template>
    <header>
        <img alt="main-logo" class="logo" src="@/assets/star.svg" width="125" height="125" />

        <div class="text-red-900">
            <!-- <HelloWorld msg="in msg" /> -->
            <nav>
                <RouterLink to="/">主页</RouterLink>
                <RouterLink to="/user">用户</RouterLink>
            </nav>
        </div>

        <button @click="show = !show"> Login </button>
        <async-login-popup v-if="show" />
    </header>
</template>
  


<!-- Use defineAsyncComponent  -->  
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
// 异步加载登录框
const show = ref(false)
const AsyncLoginPopup = defineAsyncComponent(() => import('./popup/AsyncLoginPopup.vue'))

</script>
  
<style></style>
