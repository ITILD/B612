<template>
  <div>
    <!-- 所有路由 -->
    <template v-for="L1 in routerAll.rootAll" :key="L1.name">
      <div v-if="L1">
        <!-- 1级大类 -->
        <h1 class="text-xl bg-blue-700">{{ L1.name }}</h1>
        <!-- 2级分类 -->
        <div v-for="L2 in L1.child" :key="L2.name">
          <h2 class="text-lg bg-blue-300">{{ L2.name }}</h2>
          <!-- 3级具体 -->
          <div v-for="L3 in L2.child" :key="L3.name">
            <router-link :to="L3.url" class="text-lg bg-blue-100">{{ L3.name }}</router-link>
          </div>
          <!--  -->
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
/**
 * 大类一块   块内每行四分小块  没有就换行    小块只有一个则单占    例子可以放第一大块二次展示
 */

const routerAll = reactive({
  rootMain: [
    {
      name: 'think',
      child: []
    },
    {
      name: 'math',
      child: []
    },
    {
      name: 'cad/gis/gl',
      child: [
        {
          img: '',
          name: 'gis'
        },
        {
          img: '',
          name: 'cad'
        }
      ]
    },
    {
      name: 'voice'
    },
    {
      name: 'fun'
    }
  ],
  rootAll: [
    {
      // L1
      name: 'think',
      child: []
    },
    {
      name: 'math',
      child: []
    },
    {
      name: 'cad/gis/gl',
      child: [
        {
          // L2
          img: '',
          name: 'gis',
          child: [
            {
              name: '2d地图初始',
              url: '/_dev/map2d-start'
            },
            {
              name: '2d地图初始(带ol-ext插件)',
              url: '/_dev/map2d-ol-ext-start'
            },
          ]
        },
        {
          img: '',
          name: 'cad',
          child: []
        }
      ]
    },
    {
      name: 'voice'
    },
    {
      name: 'fun'
    }
  ]
})
</script>
