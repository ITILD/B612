// 统一处理media
declare global {
  interface Window {
    // mySetting 私有设置
    $MS: { md: Number }
  }
}

function mainSetting() {
  window.$MS = { md:768 }
}

export { mainSetting }
