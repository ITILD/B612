// 统一处理media
declare global {
    interface Window {
      // mySetting 私有设置
      $MS: { md: Boolean }
    }
  }
  
  function mainSetting() {
    window.$MS = { md: window.innerWidth >= 768 }
  }
  



  export {mainSetting}