<template>
  <video id="my-video" class="video-js"  preload="auto" controls playsinline >
    <source src="/static/video/oceans.mp4">
  </video>
</template>

<script setup lang="ts">
// 引入videojs以及样式文件
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import {onMounted } from "vue"


    // 在onMounted阶段进行初始化
    onMounted(() => {
      initVideoSourc()
    })

    function initVideoSourc() {
      let palyer = videojs('my-video', {
        // bigPlayButton: true,
        // textTrackDisplay: false,
        // posterImage: false,
        // errorDisplay: false,
        // controlBar: true,
        // ...其他配置参数
      }, function ( ) {
        // palyer.play()
      })
    }
</script>
