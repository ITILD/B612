function mainSetting() {
  // 大小屏切分 普通页面不需要考虑横屏，部分三维场景考虑
  window.$MS = { md: 768 }
  // 大对象绑定
  window.$ObjLargeTemp = new Map()
}

export { mainSetting }
