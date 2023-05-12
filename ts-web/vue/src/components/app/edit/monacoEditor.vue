<template>
  <div ref="codeEditBox" class="codeEditBox" :class="props.hightChange && 'codeEditBox1'"></div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'
import { language as sqlLanguage } from 'monaco-editor/esm/vs/basic-languages/sql/sql.js'
import { language as yamlLanguage } from 'monaco-editor/esm/vs/basic-languages/yaml/yaml.js'
import { language as javascriptLanguage } from 'monaco-editor/esm/vs/basic-languages/javascript/javascript.js'
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution'

export type Theme = 'vs' | 'hc-black' | 'vs-dark'
export type FoldingStrategy = 'auto' | 'indentation'
export type RenderLineHighlight = 'all' | 'line' | 'none' | 'gutter'
export interface Options {
  automaticLayout: boolean // 自适应布局
  foldingStrategy: FoldingStrategy // 折叠方式  auto | indentation
  renderLineHighlight: RenderLineHighlight // 行亮
  selectOnLineNumbers: boolean // 显示行号
  placeholder: string
  minimap: {
    // 关闭小地图
    enabled: boolean
  }
  // readOnly: Boolean // 只读
  fontSize: number // 字体大小
  scrollBeyondLastLine: boolean // 取消代码后面一大段空白
  overviewRulerBorder: boolean // 不要滚动条的边框
}
type Props = {
  // 类型
  modelValue?: string
  hightChange: boolean
  width: string | number
  height: string | number
  language: string
  readOnly?: boolean
  theme?: string
  options?: Object
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  hightChange: false,
  width: '100%',
  height: '100%',
  language: 'javascript',
  readOnly: false,
  theme: 'vs',
  options: () => {
    return {
      automaticLayout: true,
      // foldingStrategy: 'indentation',
      foldingStrategy: 'indentation', // 折叠方式  auto | indentation
      // renderLineHighlight: 'all',
      renderLineHighlight: 'all' || 'line' || 'none' || 'gutter', // 行亮
      selectOnLineNumbers: true, // 显示行号
      minimap: {
        // 关闭小地图
        enabled: !false
      },
      placeholder: 'ss',
      // readOnly: false, // 只读
      fontSize: 16, // 字体大小
      scrollBeyondLastLine: false, // 取消代码后面一大段空白
      overviewRulerBorder: false // 不要滚动条的边框
    }
  }
})

const emit = defineEmits(['update:modelValue', 'change', 'editor-mounted'])

self.MonacoEnvironment = {
  getWorker: (_: string, label: string) => {
    // eslint-disable-next-line no-debugger
    debugger
    const getWorkerModule = (moduleUrl: string, label: string) =>
      new Worker((self as any).MonacoEnvironment.getWorkerUrl(moduleUrl), {
        name: label,
        type: 'module'
      })

    switch (label) {
      case 'json':
        return getWorkerModule('/monaco-editor/esm/vs/language/json/json.worker?worker', label)
      case 'css':
      case 'scss':
      case 'less':
        return getWorkerModule('/monaco-editor/esm/vs/language/css/css.worker?worker', label)
      case 'html':
      case 'handlebars':
      case 'razor':
        return getWorkerModule('/monaco-editor/esm/vs/language/html/html.worker?worker', label)
      case 'typescript':
      case 'javascript':
        return getWorkerModule('/monaco-editor/esm/vs/language/typescript/ts.worker?worker', label)
      default:
        return getWorkerModule('/monaco-editor/esm/vs/editor/editor.worker?worker', label)
    }
  }
}
let editor: any
const codeEditBox = ref()

const init = () => {
  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: false
  })
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2020,
    allowNonTsExtensions: true
  })
  monaco.languages.registerCompletionItemProvider("javascript", {
    provideCompletionItems() {
      const suggestions: any = []
      javascriptLanguage.keywords.forEach((item: any) => {
        suggestions.push({
          label: item,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: item
        })
      })
        suggestions.push({
          label:'vue' ,
          kind: monaco.languages.CompletionItemKind.Operator,
          insertText: 'vue模板'
        })

      return {
        // 最后要返回一个数组
        suggestions
      }
    }
  });
  monaco.languages.registerCompletionItemProvider('sql', {
    provideCompletionItems() {
      const suggestions: any = []
      // 这个keywords就是sql.js文件中有的
      sqlLanguage.keywords.forEach((item: any) => {
        suggestions.push({
          label: item,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: item
        })
      })
      sqlLanguage.operators.forEach((item: any) => {
        suggestions.push({
          label: item,
          kind: monaco.languages.CompletionItemKind.Operator,
          insertText: item
        })
      })
      sqlLanguage.builtinFunctions.forEach((item: any) => {
        suggestions.push({
          label: item,
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: item
        })
      })
      sqlLanguage.builtinVariables.forEach((item: any) => {
        suggestions.push({
          label: item,
          kind: monaco.languages.CompletionItemKind.Variable,
          insertText: item
        })
      })
      return {
        // 最后要返回一个数组
        suggestions
      }
    }
  })
  monaco.languages.registerCompletionItemProvider('yaml', {
    provideCompletionItems() {
      const suggestions: any = []
      // 这个keywords就是python.js文件中有的
      yamlLanguage.keywords.forEach((item: any) => {
        suggestions.push({
          label: item,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: item
        })
      })
      return {
        // 最后要返回一个数组
        suggestions
      }
    }
  })

  editor = monaco.editor.create(codeEditBox.value, {
    value: props.modelValue,
    language: props.language,
    readOnly: props.readOnly,
    theme: props.theme,
    ...props.options
  })

  // 监听值的变化
  editor.onDidChangeModelContent(() => {
    const value = editor.getValue() // 给父组件实时返回最新文本
    emit('update:modelValue', value)
    emit('change', value)
  })

  emit('editor-mounted', editor)
}
watch(
  () => props.modelValue,
  (newValue) => {
    if (editor) {
      const value = editor.getValue()
      if (newValue !== value) {
        editor.setValue(newValue)
      }
    }
  }
)

watch(
  () => props.options,
  (newValue) => {
    editor.updateOptions(newValue)
  },
  { deep: true }
)
watch(
  () => props.readOnly,
  () => {
    console.log('props.readOnly', props.readOnly)
    editor.updateOptions({ readOnly: props.readOnly })
  },
  { deep: true }
)

watch(
  () => props.language,
  (newValue) => {
    monaco.editor.setModelLanguage(editor.getModel()!, newValue)
  }
)

onBeforeUnmount(() => {
  editor.dispose()
})

onMounted(() => {
  init()
})
// })
</script>
<style scoped>
.codeEditBox {
  width: 100%;
  flex: 1;
  min-height: 100px;
  /* height: 200px; */
  overflow-y: auto;
}

.codeEditBox1 {
  height: calc(100% - 323px);
}
</style>
