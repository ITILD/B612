<template>
  <textarea v-model="valueMarkdownInput" @input="changeMarkdown"></textarea>
  <!-- // 排版 防止marked渲染出html被base更改 https://tailwindcss.com/docs/typography-plugin -->
  <div v-html="markdownToHtml" class="markdown-body prose lg:prose-xl"></div>
</template>
<script lang="ts" setup>
import { marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import { ref, shallowRef } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/foundation.css'
import { debounceBase } from '@/components/common/miniEx/utils/debounce'
const render = new marked.Renderer()
// marked.use({
marked.setOptions({
  renderer: render, // 这是必填项
  gfm: true, // 启动类似于Github样式的Markdown语法
  pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
  sanitize: false, // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）
  // 开启异步渲染
  // async: true,
  mangle: false,
  headerIds: false,
  breaks: false, //默认为false。 允许回车换行。该选项要求 gfm 为true。
  smartypants: false //使用更为时髦的标点，比如在引用语法中加入破折号。
})

// 高亮拓展
marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'shell'
      // const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    }
  })
)

const valueMarkdownInput = ref(
  `

# Hello,World

### Hello,World

\`\`\`javascript
const highlight = "code";
\`\`\`
`
)
const markdownToHtml = shallowRef('')
markdownToHtml.value = marked.parse(valueMarkdownInput.value)

const changeMarkdown = debounceBase(
  () => (markdownToHtml.value = marked.parse(valueMarkdownInput.value)),
  1000
)
</script>
<style>
h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
}
</style>
