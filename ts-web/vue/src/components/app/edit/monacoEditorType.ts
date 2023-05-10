import { defineProps,withDefaults } from 'vue'
	
export type Theme = 'vs' | 'hc-black' | 'vs-dark'
export type FoldingStrategy = 'auto' | 'indentation'
export type RenderLineHighlight = 'all' | 'line' | 'none' | 'gutter'
export interface Options {
  automaticLayout: boolean // 自适应布局
  foldingStrategy: FoldingStrategy // 折叠方式  auto | indentation
  renderLineHighlight: RenderLineHighlight // 行亮
  selectOnLineNumbers: boolean // 显示行号
  placeholder:string
  minimap: {
    // 关闭小地图
    enabled: boolean
  }
  // readOnly: Boolean // 只读
  fontSize: number // 字体大小
  scrollBeyondLastLine: boolean // 取消代码后面一大段空白
  overviewRulerBorder: boolean // 不要滚动条的边框
}
type props = {
  // 类型
  modelValue: string;
  hightChange:boolean;
  width: string| number;
  height: string| number;
  language: string;
  readOnly: boolean;
  theme: string;
  options: Object;
  
}

export const props = withDefaults(defineProps<props>(), {
  modelValue:'',
  hightChange:false,
  width:'100%', 
  height: '100%', 
  language:'javascript', 
  readOnly:false, 
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
        enabled: false,
      },
      placeholder: 'ss',
      // readOnly: false, // 只读
      fontSize: 16, // 字体大小
      scrollBeyondLastLine: false, // 取消代码后面一大段空白
      overviewRulerBorder: false, // 不要滚动条的边框
    }
  }, 

})
