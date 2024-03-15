<template>
  <!-- 重要路由 -->
  <div class="grid grid-cols-5">
    <template v-for="L1 in routerAll.rootMain" :key="L1.name">
      <template v-if="L1.child">
        <div v-for="L2 in L1.child" :key="L2.name" class="h-96  border border-gray-200  hover:invert">
          <!-- 图片链接 -->
          <!-- 名字 todo 介绍-->
          <h2 class="text-lg bg-blue-300">{{ L1.name + ' ' + L2.name }}</h2>

        </div>
      </template>
    </template>
  </div>
  <!-- 所有路由 -->
  <div>
    <template v-for="L1 in routerAll.rootAll" :key="L1.name">
      <div v-if="L1 && L1.child && L1.child.length > 0">
        <!-- 1级大类 -->
        <h1 class="text-xl bg-blue-700">{{ L1.name }}</h1>
        <!-- 2级分类 -->
        <div class="grid grid-cols-5">
          <div v-for="L2 in L1.child" :key="L2.name">
            <h2 class="text-lg bg-blue-300">{{ L2.name }}</h2>
            <!-- 3级具体 -->
            <div v-for="L3 in L2.child" :key="L3.name">
              <router-link :to="L3.url" class="text-lg bg-blue-100 hover:invert">{{ L3.name }}</router-link>
            </div>
            <!--  -->
          </div>
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
      name: 'Graphics',
      child: [
        {
          img: '',
          name: 'gl'
        },
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
      name: 'voice',
      child: [
        {
          img: '',
          name: 'test0'
        },
        {
          img: '',
          name: 'test1'
        },
        {
          img: '',
          name: 'test2'
        }
      ]
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
      name: 'Graphics',
      child: [
        {
          img: '',
          name: 'gl',
          child: [

          ]
        },
        {
          // L2
          img: '',
          name: 'gis',
          child: [
            {
              name: '2d地图初始(带ol-ext插件)',
              url: '/_dev/gis/map2d-ol-ext-start'
            },
            {
              name: '2d地图(ol-ext插件复制粘贴)',
              url: '/_dev/gis/map2d-ol-ext-copy'
            },
            {
              name: '3d地图初始(cesium google 测试)',
              url: '/_dev/gis/map3d-google-3dtiles',
              type: 'test'
            },
            {
              name: 'babylon测试球面剖分和相机调度',
              url: '/_dev/gis/babylon-earth',
              type: 'test'
            }
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
    },
    // 不知道什么分类
    {
      name: 'waaa',
      child: [
        {
          img: '',
          name: 'beauty',
          child: [
            {
              name: '网页底板设计基础',
              url: '/_dev/beauty/web-design-base'
            },
            {
              name: '网页滚动轴设计',
              url: '/_dev/beauty/web-scroll-base-page'
            },
          ]
        },
        {
          // L2
          img: '',
          name: 'amazing',
          child: [
          ]
        },
        {
          img: '',
          name: 'template',
          child: [
            {
              name: '通用vue组件基础',
              url: '/_dev/template/componentBase'
            },
            {
              name: '通用vue组件tailwindcss',
              url: '/_dev/template/componentTailwindcss'
            },
            {
              name: '多按钮展示模板',
              url: '/_dev/template/multiClickAndShow'
            },
            {
              name: '多格静态展示',
              url: '/_dev/template/staticShow'
            },
            {
              name: 'vscode的vue基础模板',
              url: '/_dev/template/vscodeTips'
            }
          ]
        },
      ]
    },
    {
      name: 'DevTool',
      child: [
        {
          img: '',
          name: '环境配置',
          child: [

          ]
        },
        {
          img: '',
          name: 'web jslib引入',
          child: [
            {
              name: 'babylon引入',
              url: '/_dev/libBase/babylon-start'
            },
            {
              name: 'cesium引入',
              url: '/_dev/libBase/cesium-start'
            },
            {
              name: 'jsts(jts)引入',
              url: '/_dev/libBase/jsts-start'
            },
            {
              name: 'marked-引入',
              url: '/_dev/libBase/marked-start'
            },
            {
              name: 'mediapipe人脸识别引入',
              url: '/_dev/libBase/mediapipe-start'
            },
            {
              name: 'monaco引入',
              url: '/_dev/libBase/monaco-start'
            },
            {
              name: 'opencv引入',
              url: '/_dev/libBase/opencv-start'
            },
            // 
            {
              name: '原生webgl',
              url: '/_dev/libBase/webgl-start'
            },

            {
              name: 'openlayer引入',
              url: '/_dev/libBase/openlayer-start'
            },

            {
              name: 'threejs引入',
              url: '/_dev/libBase/threejs-start'
            },

            {
              name: 'pina引入',
              url: '/_dev/libBase/pina-start'
            },
            {
              name: 'videojs引入',
              url: '/_dev/libBase/video-js-start'
            },
            {
              name: 'tf引入',
              url: '/_dev/libBase/tf-start'
            }
          ]
        }
      ]
    },
  ]
})
</script>
