<template>



  <Suspense>
    <!-- 主要内容 -->
    <monacoEditor v-model="valueEditer" :language="language" :hight-change="hightChange" width="100%" height="100%"
      @editor-mounted="editorMounted" :read-only="!true" :theme = "theme" />

    <!-- 加载中状态 -->
    <template #fallback>
      <WaitAnimate></WaitAnimate>
    </template>
  </Suspense>

  <!--     :read-only="tablist.length === 0" -->
</template>

<script setup lang="ts">
import WaitAnimate from '@/components/app/sampleUtils/state/WaitAnimate.vue';
import { defineAsyncComponent, ref, shallowRef } from 'vue'
// marked引入
import { marked } from 'marked';
import hljs from 'highlight.js'
import 'highlight.js/styles/foundation.css'
// edit组件
const monacoEditor = defineAsyncComponent(() => import('@/components/app/edit/monacoEditor.vue'))

const render = new marked.Renderer()
marked.setOptions({
  renderer: render, // 这是必填项
  gfm: true,	// 启动类似于Github样式的Markdown语法
  pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
  // sanitize: false, // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）
	// 高亮的语法规范
  highlight: (code: string, lang: any) => hljs.highlight(code, { language: lang }).value,
})

const valueMarkdown = ref('# Hello,World <br>  \n ### Hello,World')
const markdownToHtml = shallowRef("")
markdownToHtml.value = marked(valueMarkdown.value) as string 

const change = (value: string) => {
  markdownToHtml.value = marked(value) as string 
}


// const monacoEditor = defineAsyncComponent(() => import('@/components/app/edit/monacoEditorDefaut.vue'))
const valueEditer = ref('const a = 0')
// const language = ref('sql')
const language = ref('javascript')
// const theme = ref('vs')
const theme = ref('vs-dark')
// const language = ref('javascript')
const hightChange = ref<any>(false)
const editorMounted = (editor: any) => {
  console.log('editor实例加载完成', editor)
}
</script>
