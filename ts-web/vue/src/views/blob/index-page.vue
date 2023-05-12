<template>
  <Suspense>
    <!-- 主要内容 -->
    <monacoEditor v-model="value" :language="language" :hight-change="hightChange" width="100%" height="100%"
      @editor-mounted="editorMounted" :read-only="!true" :theme = "theme" />

    <!-- 加载中状态 -->
    <template #fallback>
      正在加载...
    </template>
  </Suspense>

  <!--     :read-only="tablist.length === 0" -->
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const monacoEditor = defineAsyncComponent(() => import('@/components/app/edit/monacoEditor.vue'))
// const monacoEditor = defineAsyncComponent(() => import('@/components/app/edit/monacoEditorDefaut.vue'))
const value = ref('const a = 0')
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
