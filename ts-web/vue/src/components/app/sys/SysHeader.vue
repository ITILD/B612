<template>
  <header class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto p-4">
      <router-link to="/" class="flex items-center">
        <img src="@/assets/star.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TESTHOME</span>
      </router-link>

      <!-- 小屏幕设备 下拉列表 -->
      <button @click="isMenuOpen = !isMenuOpen" id="mega-menu-full-image-button"
        data-collapse-toggle="mega-menu-full-image" type="button"
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
      <MinPopover v-model="isMenuOpen" id="mega-menu-full-image"
        class="items-center justify-between w-full md:w-auto md:order-1">
        <ShowHidden>
          <span v-show="isMenuOpen || isMd || showFun1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <RouterLink
                  class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page" to="/">主页</RouterLink>
              </li>

              <!-- fun1 -->
              <li>
                <button @click="showFun1 = !showFun1" id="mega-menu-full-cta-image-button"
                  data-collapse-toggle="mega-menu-full-image-dropdown"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  项目列表1
                  <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
                <MinPopover v-model="showFun1">
                  <ShowHidden>
                    <div v-show="showFun1"
                      class="absolute z-10 grid grid-cols-3 rounded-lg p-2 w-11/12 text-xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-700 text-gray-900 md:pb-4 dark:text-white md:w-96 md:right-48 md:text-sm">
                      <Func_1></Func_1>
                    </div>
                  </ShowHidden>
                </MinPopover>
              </li>
              <li>
                <router-link to="/blog"
                  class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">blog</router-link>
              </li>
              <li>
                <router-link to="/_dev"
                  class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">_开发测试</router-link>
              </li>
              <!-- setting -->
              <li>
                <button @click="isSysSettingShow = !isSysSettingShow" id="mega-menu-full-cta-image-button"
                  data-collapse-toggle="mega-menu-full-image-dropdown"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  设置
                </button>
                <MinPopover v-model="isSysSettingShow">
                  <ShowHidden>
                    <div v-show="isSysSettingShow"
                      class="absolute z-10 grid grid-cols-3 rounded-lg p-2 w-11/12 text-xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-700 text-gray-900 md:pb-4 dark:text-white md:w-96 md:right-48 md:text-sm">
                      <SysSetting></SysSetting>
                    </div>
                  </ShowHidden>
                </MinPopover>
              </li>
              <li>{{ sysStyle.headShow }}</li>
            </ul>
          </span>
        </ShowHidden>
      </MinPopover>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ShowHidden from '../../common/minUi/animation/ShowHidden.vue'
import MinPopover from '../../common/minUi/button/MinPopover.vue'
import Func_1 from './head/Func_1.vue';
import SysSetting from './head/SysSetting.vue';
// 显隐控制
import { storeToRefs } from 'pinia'
import { sysSettingStore } from '@/stores/sys'

// 动态  md 监测显隐
const isMenuOpen = ref(false)
const isMd = ref(window.innerWidth > window.$MS.md)
window.onresize = () => (isMd.value = window.innerWidth > window.$MS.md)
const showFun1 = ref(false)
const isSysSettingShow = ref(false)

// 显隐控制
const { sysStyle } = storeToRefs(sysSettingStore())


</script>

<style></style>
