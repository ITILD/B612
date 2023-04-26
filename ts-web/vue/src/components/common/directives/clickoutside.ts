// // 注册事件
// // 点击外部 https://juejin.cn/post/6968063117859241992
// import ClickOutside from './components/common/directives/clickoutside'
// app.directive('click-outside', ClickOutside)

// // directives/clickoutside.ts
// // https://juejin.cn/post/6968063117859241992
// import type { DirectiveBinding, ObjectDirective } from 'vue'

// type DocumentHandler = <T extends MouseEvent>(e: T) => void
// interface ListProps {
//   documentHandler?: DocumentHandler
// }

// let nodeList: ListProps = {}

// function createDocumentHandler(el: HTMLElement, binding: DirectiveBinding): DocumentHandler {
//   return function (e: MouseEvent) {
//     const target = e.target as HTMLElement
//     if (el.contains(target)) return false
//     if (binding.arg) binding.value(e)
//   }
// }

// const handler = (e: MouseEvent) => {
//   const { documentHandler } = nodeList
//   if (documentHandler) {
//     documentHandler(e)
//   }
// }

// window.addEventListener('click', handler)

// const ClickOutSide: ObjectDirective = {
//   beforeMount(el: HTMLElement, binding: DirectiveBinding) {
//     debugger
//     nodeList = {
//       documentHandler: createDocumentHandler(el, binding)
//     }
//   },
//   updated(el: HTMLElement, binding: DirectiveBinding) {
//     debugger
//     nodeList = {
//       documentHandler: createDocumentHandler(el, binding)
//     }
//   },
//   unmounted() {
//     debugger
//     window.removeEventListener('click', handler)
//   }
// }

// export default ClickOutSide
