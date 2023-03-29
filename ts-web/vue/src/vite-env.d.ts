// /// <reference types="vite/client" />
// 防止tslint报错  （找不到模块“./XXX.vue”或其相应的类型声明）
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
