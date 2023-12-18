import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const sysSettingStore = defineStore('sysSetting', () => {
  // state
  const sysStyle = ref({
    headShow:true
  })


  return { sysStyle}
})


export {
  sysSettingStore
}