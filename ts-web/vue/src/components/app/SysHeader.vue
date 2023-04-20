<template>
  <!-- <header class="h-12 bg-gray-700 text-white">
        <RouterLink class="inline" to="/">主页</RouterLink>
        <RouterLink class="inline" to="/user">用户</RouterLink>
        <button @click="show = !show"> {{ loginBtn }} </button>
        <async-login-popup v-if="show" />

    </header> -->

  <header class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="todo" class="flex items-center">
        <img src="@/assets/star.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TESTHOME</span>
      </a>
      <!-- 小屏幕设备 下拉列表 -->
      <button id="mega-menu-full-image-button" data-collapse-toggle="mega-menu-full-image" type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mega-menu-full-image" aria-expanded="false">
        <span class="sr-only">下拉列表</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li>
            <!-- <a href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page">Home</a> -->
            <RouterLink
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page" to="/">主页</RouterLink>
          </li>
          <li>
            <button id="mega-menu-full-cta-image-button" data-collapse-toggle="mega-menu-full-image-dropdown"
              @click="showFun = !showFun"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
              Fun
              <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </li>
          <li>
            <a href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <Transition  enter-active-class="transition duration-3000 ease-in" enter-from-class="opacity-0"
      enter-to-class="opacity-50"> -->
      <!--无->有 enter-active-class 动画动作时间   -->
    <transition
    enter-active-class="duration-1000 ease-in"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-1000 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
      <div v-if="showFun" id="mega-menu-full-image-dropdown" 
        class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <div
          class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul class="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
            <li>
              <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                Online Stores
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                Segmentation
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                Marketing CRM
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                Online Stores
              </a>
            </li>
          </ul>
          <ul class="mb-4 space-y-4 md:mb-0">
            <li>
              <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                License
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                Resources
              </a>
            </li>
          </ul>
          <a href="#"
            class="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
            style="background-image: url(/docs/images/dashboard-overview.png)">
            <p class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
              Preview the new Flowbite dashboard navigation.
            </p>
            <button type="button"
              class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
              Get started
              <svg class="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<!-- Use defineAsyncComponent  -->
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
// 异步加载登录框
const showFun = ref(false)
const show = ref(false)
const AsyncLoginPopup = defineAsyncComponent(() => import('./popup/AsyncLoginPopup.vue'))
const loginBtn = ref('login')
</script>

<style>
/* vue 默认动画 */
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
</style>
