<template>
  <monacoEditor
    v-model="value"
    :language="language"
    :hight-change="hightChange"
    width="100%"
    height="100%"
    @editor-mounted="editorMounted"
    :read-only="true" 
  />
  <!--     :read-only="tablist.length === 0" -->
</template>

<script setup lang="ts">
import type monacoEditor from '@/components/app/edit/monacoEditor.vue'
import { ref } from 'vue'
const value = ref('-- select * from infrastructure;')
const language = ref('sql')
const hightChange = ref<any>(false)
const editorMounted = (editor: any) => {
  console.log('editor实例加载完成', editor)
}
</script>
