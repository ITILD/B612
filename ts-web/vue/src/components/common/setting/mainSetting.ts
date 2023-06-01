// 统一处理media
declare global {
  interface Window {
    // mySetting 私有设置
    $MS: { md: number }
    // 地图
    $ObjLargeTemp: Map<string, any>
  }
}

function mainSetting() {
  window.$MS = { md: 768 }
  window.$ObjLargeTemp = new Map()
}

export { mainSetting }
